import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import { AtSign, Calendar, GitHub, Linkedin, MapPin, Paperclip } from 'react-feather';
import { contractabi, contractadd } from '../ConnectWallet/contractinfo';
import styles from './Display.module.css';

function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var timeshow = date + ' ' + month + ' ' + year;

    const monthplus = a.getMonth() + 1;
    const getCorrectMonth = monthplus <= 9 ? '0' + monthplus : monthplus;
    const correctDate = date <= 9 ? '0' + date : date;
    const correctHour = hour <= 9 ? '0' + hour : hour;
    const correctMint = min <= 9 ? '0' + min : min;
    var timeforinput = year + '-' + getCorrectMonth + '-' + correctDate + 'T' + correctHour + ':' + correctMint;
    return { timeshow, timeforinput };
    // 2018-06-12T19:30
}

const Display = () => {
    const { active, account, library } = useWeb3React();

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
                persdetName: displayCv[0][0],
                persdetAddress: displayCv[0][1],
                persdetEmail: displayCv[0][2],
                persdetPhone: displayCv[0][3],
                personalStatement: displayCv[0][4],
                OtherkeysSkills: displayCv[0][5],
                hobbies: displayCv[0][6],
                summary: displayCv[0][7]
            };

            const Empstartdata = timeConverter(displayCv[1][3]?.toString()).timeshow;
            const Empenddate = timeConverter(displayCv[1][3]?.toString()).timeshow;

            const Employement = {
                jobTitle: displayCv[1][0],
                companyName: displayCv[1][1],
                companyLocation: displayCv[1][2],
                companystartDate: Empstartdata,
                companyendDate: Empenddate,
                achvResp: displayCv[1][5]
            };

            const Edustartdata = timeConverter(displayCv[2][1]?.toString()).timeshow;
            const Eduenddate = timeConverter(displayCv[2][2]?.toString()).timeshow;

            const Education = {
                SchoolorcollegeName: displayCv[2][0],
                SchoolorcollegestartDate: Edustartdata,
                SchoolorcollegeEndDate: Eduenddate,
                SchoolorcollegeDesc: displayCv[2][3]
            };

            const persdetPhone = '';
            console.log({ PersDetails, Employement, Education });

            setUserData({ PersDetails, Employement, Education });
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

    return (
        <div>
            {!DataMessage.exists && DataMessage.message}
            {DataMessage.exists && (
                <div>
                    <div className={styles.container}>
                        <div className={styles.header}>
                            <p className={styles.heading}>{UserData?.PersDetails?.persdetName}</p>
                            <p className={styles.subHeading}>{UserData?.PersDetails?.persdetAddress}</p>
                            <p className={`text-dark`}>{UserData?.PersDetails?.personalStatement}</p>
                            <div className={styles.links}>
                                <a className={styles.link}  href={`mailto:${UserData?.PersDetails?.persdetEmail}`}>
                                    <AtSign /> {UserData?.PersDetails?.persdetEmail}
                                </a>
                                {/* <a className={styles.link}>
                <Linkedin /> asdasd
              </a>
              <a className={styles.link}>
                <GitHub /> asdasd
              </a> */}
                            </div>
                        </div>

                        <div className={styles.main}>
                            <div className={styles.col1}>
                                <div key={'workexp'} draggable className={`${styles.section}`}>
                                    <div className={styles.sectionTitle}>Work Experience</div>
                                    <div className={styles.content}>
                                        <div className={`mt-3 ${styles.item}`}>
                                            <p className={`p-0 m-0 ${styles.title}`}>{UserData?.Employement?.jobTitle}</p>
                                            <p className={`p-0 m-0 ${styles.subTitle}`}>{UserData?.Employement?.companyName}</p>
                                            <p className={`p-0 m-0`}>{UserData?.Employement?.companyLocation}</p>
                                            <i className="border-bottom">Achievements and Responsibilities:</i>
                                            <div className={`p-0 m-0 ${styles.content}`}>
                                                <p className={styles.overview}>{UserData?.Employement?.achvResp}</p>
                                            </div>
                                            {/* <a className={styles.link} href="">
                  <Paperclip />
                  certificate link
                </a> */}
                                            <div className={styles.date}>
                                                <Calendar /> {UserData?.Employement?.companystartDate}-
                                                {UserData?.Employement?.companyendDate}
                                            </div>
                                            <p className={styles.date}>
                                                <MapPin /> Remote
                                            </p>
                                            {/* <ul className={styles.points}>
                    <li className={styles.point}>
                      asdasd
                    </li>
                    <li className={styles.point}>
                      asdasd
                    </li>
                </ul> */}
                                        </div>
                                        <div key={'education'} draggable className={`${styles.section} `}>
                                            <div className={styles.sectionTitle}>Education</div>
                                            <div className={styles.content}>
                                                <div className={`p-0 mt-2 ${styles.item}`}>
                                                    <p className={`p-0 m-0 ${styles.title}`}>{UserData?.Education?.SchoolorcollegeDesc}</p>
                                                    <p className={`p-0 m-0 ${styles.subTitle}`}>
                                                        {UserData?.Education?.SchoolorcollegeName}
                                                    </p>
                                                    <div className={styles.date}>
                                                        <Calendar /> {UserData?.Education?.SchoolorcollegestartDate}-
                                                        {UserData?.Education?.SchoolorcollegeEndDate}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.col2}>
                                {/* <div
                  key={"achievement"}
                  draggable
                  className={`${styles.section} `}>
                  <div className={styles.sectionTitle}>achievement</div>
                  <div className={styles.content}>
                    <ul className={styles.numbered}>
                      <li className={styles.point}>asdsd</li>
                      <li className={styles.point}>asdsd</li>
                    </ul>
                  </div>
                </div> */}

                                <div key={'summary'} draggable className={`${styles.section} `}>
                                    <div className={styles.sectionTitle}>Summary</div>
                                    <div className={styles.content}>
                                        <p className={styles.overview}>{UserData.PersDetails.summary}</p>
                                    </div>
                                </div>
                                <div key={'other'} draggable className={`${styles.section}`}>
                                    <div className={styles.sectionTitle}>Others</div>
                                    <div className={styles.content}>
                                        <p className={styles.overview}>
                                            <h5 className="m-0 p-0 fw-bold" style={{ fontSize: '15px' }}>
                                                Hobbies
                                            </h5>
                                            <p className="p-0 m-0">{UserData.PersDetails.hobbies}</p>
                                        </p>
                                        <p className={styles.overview}>
                                            <h5 className="m-0 p-0 fw-bold" style={{ fontSize: '15px' }}>
                                                Other Skills
                                            </h5>
                                            <p className="p-0 m-0">{UserData.PersDetails.OtherkeysSkills}</p>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Display;
