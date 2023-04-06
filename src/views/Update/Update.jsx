
import React, { useEffect, useRef, useState } from 'react';
import InputControl from '../InputControl/InputControl';
import styles from './Update.module.css';
import { contractadd, contractabi } from './../ConnectWallet/contractinfo';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import LiveDisplay from '../LiveDisplay/LiveDisplay';
function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var timeshow = date + ' ' + month + ' ' + year + ' ';

    const monthplus = a.getMonth() + 1;
    const getCorrectMonth = monthplus <= 9 ? '0' + monthplus : monthplus;
    const correctDate = date <= 9 ? '0' + date : date;
    const correctHour = hour <= 9 ? '0' + hour : hour;
    const correctMint = min <= 9 ? '0' + min : min;
    var timeforinput = year + '-' + getCorrectMonth + '-' + correctDate;
    return { timeshow, timeforinput };
    // 2018-06-12T19:30
}

const Update = () => {
    const { account, active, library } = useWeb3React();

    const sections = {
        basicInfo: 'Personal Details',
        workExp: 'Employement',

        education: 'Education',
        achievement: 'Hobbies',
        summary: 'Reference',
        other: 'Others'
    };

    const [values, setValues] = useState({
        // pers details
        persdetName: '',
        persdetAddress: '',
        persdetEmail: '',
        persdetPhone: '',

        // work exp
        jobTitle: '',
        companyName: '',
        companyLocation: '',
        companystartDate: '',
        companyendDate: '',
        achvResp: '', // need to look at this one

        // education
        SchoolorcollegeName: '',
        SchoolorcollegeDesc: '',
        SchoolorcollegestartDate: '',
        SchoolorcollegeEndDate: '',

        // achievementsBody
        hobbies: '', // need to look at this one

        summary: '',

        OtherkeysSkills: '',
        personalStatement: ''
    });

    console.log(values.SchoolorcollegeDesc);

    const [UserData, setUserData] = useState('');
    const [DataMessage, setDataMessage] = useState({
        exists: false,
        message: 'Loading'
    });

    const GetDisplayData = async () => {
        const signer = await library?.getSigner(account);
        const cont = await new ethers.Contract(contractadd, contractabi, signer);

        const displayCv = await cont.displayCv();
        console.log({ displayCv });

        const checkpersdetAddress = displayCv[0][1];

        if (checkpersdetAddress == account) {
            const PersDetails = {
                persdetName: displayCv[0][0]?.toString(),
                persdetAddress: displayCv[0][1]?.toString(),
                persdetEmail: displayCv[0][2]?.toString(),
                persdetPhone: displayCv[0][3]?.toString(),
                personalStatement: displayCv[0][4]?.toString(),
                OtherkeysSkills: displayCv[0][5]?.toString(),
                hobbies: displayCv[0][6]?.toString(),
                summary: displayCv[0][7]?.toString()
            };

            const Empstartdata = timeConverter(displayCv[1][3]?.toString()).timeforinput;
            const Empenddate = timeConverter(displayCv[1][3]?.toString()).timeforinput;

            const Employement = {
                jobTitle: displayCv[1][0]?.toString(),
                companyName: displayCv[1][1]?.toString(),
                companyLocation: displayCv[1][2]?.toString(),
                companystartDate: Empstartdata?.toString(),
                companyendDate: Empenddate?.toString(),
                achvResp: displayCv[1][5]?.toString()
            };

            const Edustartdata = timeConverter(displayCv[2][1]?.toString()).timeforinput;
            const Eduenddate = timeConverter(displayCv[2][2]?.toString()).timeforinput;

            const Education = {
                SchoolorcollegeName: displayCv[2][0]?.toString(),
                SchoolorcollegestartDate: Edustartdata?.toString(),
                SchoolorcollegeEndDate: Eduenddate?.toString(),
                SchoolorcollegeDesc: displayCv[2][3]?.toString()
            };

            setValues({ ...PersDetails, ...Employement, ...Education });
            // persdetName: displayCv[0][0],
            // persdetAddress: displayCv[0][1],
            // persdetEmail: displayCv[0][2],
            // persdetPhone: displayCv[0][3],
            // personalStatement: displayCv[0][4],
            // OtherkeysSkills: displayCv[0][5],
            // hobbies: displayCv[0][6],
            // summary: displayCv[0][7],

            // jobTitle: displayCv[1][0],
            // companyName: displayCv[1][1],
            // companyLocation: displayCv[1][2],
            // companystartDate: displayCv[1][3]?.toString(),
            // companyendDate: displayCv[1][4]?.toString(),
            // achievements: displayCv[1][5],

            // SchoolorcollegeName: displayCv[2][0],
            // SchoolorcollegestartDate: displayCv[2][1]?.toString(),
            // SchoolorcollegeEndDate: displayCv[2][2]?.toString(),
            // SchoolorcollegeDesc: displayCv[2][3],

            // setUserData({ PersDetails, Employement, Education });
            setDataMessage({ exists: true, message: 'Data Exists' });
        } else {
            setDataMessage({ exists: false, message: 'Data does not Exist' });
        }
    };

    useEffect(() => {
        if (active && account) {
            GetDisplayData();
        } else {
            setDataMessage({ exists: false, message: 'Connect your wallet' });
        }
    }, []);
    useEffect(() => {
        if (active && account) {
            GetDisplayData();
        } else {
            setDataMessage({ exists: false, message: 'Connect your wallet' });
        }
    }, [account]);

    console.log(values);

    const [activeSectionIndex, setActiveSectionIndex] = useState(0);
    const [activeSectionKey, setActiveSectionKey] = useState(Object.keys(sections)[0]);

    const nextSection = () => {
        let sec = activeSectionIndex + 1;
        setActiveSectionKey(Object.keys(sections)[sec]);
        setSectionTitle(Object.keys(sections)[sec]);
        setActiveSectionIndex(sec);
    };

    const [sectionTitle, setSectionTitle] = useState(sections[Object.keys(sections)[0]]);

    const handlePointUpdate = (value, index) => {
        const tempValues = { ...values };
        if (!Array.isArray(tempValues.points)) tempValues.points = [];
        tempValues.points[index] = value;
        setValues(tempValues);
    };

    const handleSubmission = async () => {
        console.log({ values });

        !active && alert('Connect wallet');

        const signer = await library?.getSigner(account);
        const cont = await new ethers.Contract(contractadd, contractabi, signer);
        console.log({ cont });

        const {
            persdetName,
            persdetAddress,
            persdetEmail,
            persdetPhone,
            jobTitle,
            companyName,
            companyLocation,
            companystartDate,
            companyendDate,
            achvResp, // need to look at this one
            SchoolorcollegeName,
            SchoolorcollegeDesc,
            SchoolorcollegestartDate,
            SchoolorcollegeEndDate,
            hobbies, // need to look at this one
            summary,
            OtherkeysSkills,
            personalStatement
        } = values;

        const companystartDateUnix = Math.round(new Date(companystartDate).getTime() / 1000).toString();
        const companyendDateUnix = Math.round(new Date(companyendDate).getTime() / 1000).toString();

        const SchoolorcollegestartDateUnix = Math.round(new Date(SchoolorcollegestartDate).getTime() / 1000).toString();
        const SchoolorcollegeEndDateUnix = Math.round(new Date(SchoolorcollegeEndDate).getTime() / 1000).toString();

        console.log({ companystartDateUnix });
        // const PersDetails = [
        //   persdetName,
        //   account,
        //   persdetEmail,
        //   personalStatement,
        //   OtherkeysSkills,
        //   hobbies,
        //   summary,
        // ];
        // const Employement = [
        //   jobTitle,
        //   companyName,
        //   companyLocation,
        //   companystartDateUnix,
        //   companyendDateUnix,
        //   achvResp,
        // ];
        // const Education = [
        //   SchoolorcollegeName,
        //   SchoolorcollegestartDateUnix,
        //   SchoolorcollegeEndDateUnix,
        //   SchoolorcollegeDesc,
        // ];

        const PersDetails = [persdetName, account, persdetEmail, persdetPhone, personalStatement, OtherkeysSkills, hobbies, summary];
        const Employement = [jobTitle, companyName, companyLocation, companystartDateUnix, companyendDateUnix, achvResp];
        const Education = [SchoolorcollegeName, SchoolorcollegestartDateUnix, SchoolorcollegeEndDateUnix, SchoolorcollegeDesc];

        console.log({ PersDetails, Employement, Education });

        console.log(values.SchoolorcollegeDesc);

        const createCall = await cont.inputCvDet(PersDetails, Employement, Education);
        await createCall.wait();
    };

    // forms
    const basicInfoBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    label="Name"
                    placeholder="Enter your full"
                    value={values.persdetName}
                    onChange={(event) => {
                        setValues((prev) => ({ ...prev, persdetName: event.target.value }));
                    }}
                />
                <InputControl
                    label="Address"
                    value={values.persdetAddress}
                    placeholder=""
                    onChange={(event) =>
                        setValues((prev) => ({
                            ...prev,
                            persdetAddress: event.target.value
                        }))
                    }
                    disabled
                />
            </div>

            <div className={styles.row}>
                <InputControl
                    label="Email"
                    value={values.persdetEmail}
                    placeholder="Enter your email"
                    onChange={(event) => setValues((prev) => ({ ...prev, persdetEmail: event.target.value }))}
                />
                <InputControl
                    label="Enter phone"
                    value={values.persdetPhone}
                    placeholder="Enter your phone number"
                    onChange={(event) => setValues((prev) => ({ ...prev, persdetPhone: event.target.value }))}
                />
            </div>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'left'
                }}
            >
                <button type="button" onClick={nextSection}>
                    next
                </button>
            </div>
        </div>
    );

    const workExpBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    label="Job Title"
                    placeholder="Enter job title "
                    value={values.jobTitle}
                    onChange={(event) => setValues((prev) => ({ ...prev, jobTitle: event.target.value }))}
                />
                <InputControl
                    label="Company Name"
                    placeholder="Enter company name"
                    value={values.companyName}
                    onChange={(event) => setValues((prev) => ({ ...prev, companyName: event.target.value }))}
                />
            </div>

            <div className={styles.row}>
                <InputControl
                    label="Location"
                    placeholder="Enter company location"
                    value={values.companyLocation}
                    onChange={(event) =>
                        setValues((prev) => ({
                            ...prev,
                            companyLocation: event.target.value
                        }))
                    }
                />
            </div>
            {console.log(values.companystartDate)}
            <div className={styles.row}>
                <InputControl
                    label="Start Date"
                    type="date"
                    placeholder="Enter start date of work"
                    value={values.companystartDate}
                    onChange={(event) =>
                        setValues((prev) => ({
                            ...prev,
                            companystartDate: event.target.value
                        }))
                    }
                />
                <InputControl
                    label="End Date"
                    type="date"
                    placeholder="Enter end date of work"
                    value={values.companyendDate}
                    onChange={(event) =>
                        setValues((prev) => ({
                            ...prev,
                            companyendDate: event.target.value
                        }))
                    }
                />
            </div>

            <div className={styles.column}>
                <label>Achievements and Responsibilities</label>
                <InputControl
                    placeholder="Describe your achievements and responsibilities"
                    value={values.achvResp}
                    onChange={(event) =>
                        setValues((prev) => ({
                            ...prev,
                            achvResp: event.target.value
                        }))
                    }
                />
            </div>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'left'
                }}
            >
                <button type="button" onClick={nextSection}>
                    next
                </button>
            </div>
        </div>
    );

    const educationBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                {/* <InputControl
              label="Description"
              value={values.title}
              placeholder="Enter description"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, title: event.target.value }))
              }
            /> */}
                <InputControl
                    label="College/School Name"
                    value={values.SchoolorcollegeName}
                    placeholder="Enter college/school name"
                    onChange={(event) =>
                        setValues((prev) => ({
                            ...prev,
                            SchoolorcollegeName: event.target.value
                        }))
                    }
                />
            </div>
            <InputControl
                label="Description"
                value={values.SchoolorcollegeDesc}
                placeholder="Enter description"
                onChange={(event) =>
                    setValues((prev) => ({
                        ...prev,
                        SchoolorcollegeDesc: event.target.value
                    }))
                }
            />

            {/* <InputControl
            label="College/School Name"
            value={values.college}
            placeholder="Enter college/school name"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, college: event.target.value }))
            }
          /> */}
            <div className={styles.row}>
                <InputControl
                    label="Start Date"
                    type="date"
                    placeholder="Enter start date of this education"
                    value={values.SchoolorcollegestartDate}
                    onChange={(event) =>
                        setValues((prev) => ({
                            ...prev,
                            SchoolorcollegestartDate: event.target.value
                        }))
                    }
                />
                <InputControl
                    label="End Date"
                    type="date"
                    placeholder="Enter end date of this education"
                    value={values.SchoolorcollegeEndDate}
                    onChange={(event) =>
                        setValues((prev) => ({
                            ...prev,
                            SchoolorcollegeEndDate: event.target.value
                        }))
                    }
                />
            </div>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'left'
                }}
            >
                <button type="button" onClick={nextSection}>
                    next
                </button>
            </div>
        </div>
    );

    const achievementsBody = (
        <div className={styles.detail}>
            <div className={styles.column}>
                <label> Your Hobbies</label>
                <InputControl
                    placeholder="Enter Your Hobbies"
                    value={values.hobbies}
                    onChange={(event) => setValues((prev) => ({ ...prev, hobbies: event.target.value }))}
                />
            </div>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'left'
                }}
            >
                <button type="button" onClick={nextSection}>
                    next
                </button>
            </div>
        </div>
    );

    const summaryBody = (
        <div className={styles.detail}>
            <InputControl
                label="Summary"
                value={values.summary}
                placeholder="Enter your Reference"
                onChange={(event) => setValues((prev) => ({ ...prev, summary: event.target.value }))}
            />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'left'
                }}
            >
                <button type="button" onClick={nextSection}>
                    next
                </button>
            </div>
        </div>
    );

    const otherBody = (
        <div className={styles.detail}>
            <InputControl
                label="Key Skills"
                value={values.OtherkeysSkills}
                placeholder="Enter key skills"
                onChange={(event) =>
                    setValues((prev) => ({
                        ...prev,
                        OtherkeysSkills: event.target.value
                    }))
                }
            />
            <InputControl
                label="Personal Statement"
                value={values.personalStatement}
                placeholder="Enter personal statement"
                onChange={(event) =>
                    setValues((prev) => ({
                        ...prev,
                        personalStatement: event.target.value
                    }))
                }
            />

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'left'
                }}
            >
                <button type="button" onClick={handleSubmission}>
                    Submit
                </button>
            </div>
        </div>
    );

    const generateBody = () => {
        switch (sections[activeSectionKey]) {
            case sections.basicInfo:
                return basicInfoBody;
            case sections.workExp:
                return workExpBody;

            case sections.education:
                return educationBody;
            case sections.achievement:
                return achievementsBody;
            case sections.summary:
                return summaryBody;
            case sections.other:
                return otherBody;
            default:
                return null;
        }
    };

    const resumeRef = useRef();

    const [resumeInformation, setResumeInformation] = useState({
        [sections.basicInfo]: {
            id: sections.basicInfo,
            sectionTitle: sections.basicInfo,
            detail: {}
        },
        [sections.workExp]: {
            id: sections.workExp,
            sectionTitle: sections.workExp,
            details: []
        },
        // [sections.project]: {
        //   id: sections.project,
        //   sectionTitle: sections.project,
        //   details: [],
        // },
        [sections.education]: {
            id: sections.education,
            sectionTitle: sections.education,
            details: []
        },
        [sections.achievement]: {
            id: sections.achievement,
            sectionTitle: sections.achievement,
            points: []
        },
        [sections.summary]: {
            id: sections.summary,
            sectionTitle: sections.summary,
            detail: ''
        },
        [sections.other]: {
            id: sections.other,
            sectionTitle: sections.other,
            detail: ''
        }
    });

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-xl-6">
                        <div className={`border rounded ${styles.container}`}>
                            <div className={styles.header}>
                                {Object.keys(sections)?.map((key, index) => (
                                    <div
                                        className={`${styles.section} ${activeSectionKey === key ? styles.active : ''}`}
                                        key={key}
                                        onClick={() => {
                                            setActiveSectionKey(key);
                                            setSectionTitle(key);
                                            setActiveSectionIndex(index);
                                        }}
                                    >
                                        {sections[key]}
                                    </div>
                                ))}
                            </div>

                            <div className={styles.body}>
                                <InputControl
                                    label="Section"
                                    placeholder="Enter section title"
                                    value={sectionTitle}
                                    onChange={(event) => setSectionTitle(event.target.value)}
                                    disabled
                                />

                                {/* <div className={styles.chips}>
            {activeInformation?.details
              ? activeInformation?.details?.map((item, index) => (
                  <div
                    className={`${styles.chip} ${
                      activeDetailIndex === index ? styles.active : ""
                    }`}
                    key={item.title + index}
                    onClick={() => setActiveDetailIndex(index)}
                  >
                    <p>
                      {sections[activeSectionKey]} {index + 1}
                    </p>
                    <X
                      onClick={(event) => {
                        event.stopPropagation();
                        handleDeleteDetail(index);
                      }}
                    />
                  </div>
                ))
              : ""}
          </div> */}

                                {generateBody()}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-6">
                        <LiveDisplay values={values} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Update;
