"use strict";(self.webpackChunkberry_material_react_free=self.webpackChunkberry_material_react_free||[]).push([[241],{3320:function(e,t,l){l.r(t),l.d(t,{default:function(){return b}});var a=l(2791),o=l(1043),n="Update_container__m4+l3",s="Update_header__GPhvo",i="Update_section__DnwTt",r="Update_active__3T8b9",c="Update_body__Pt+D6",d="Update_detail__1CGAH",u="Update_row__CHv2b",h="Update_column__cATm4",v=l(5396),m=l(3971),p=l(9190),g=l(1330),y=l(184);function x(e){var t=new Date(1e3*e),l=t.getFullYear(),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],o=t.getDate(),n=(t.getHours(),t.getMinutes(),t.getSeconds(),o+" "+a+" "+l+" ");const s=t.getMonth()+1;return{timeshow:n,timeforinput:l+"-"+(s<=9?"0"+s:s)+"-"+(o<=9?"0"+o:o)}}var b=()=>{var e;const{account:t,active:l,library:b}=(0,m.Ge)(),S={basicInfo:"Personal Details",workExp:"Employement",education:"Education",achievement:"Hobbies",summary:"Reference",other:"Others"},[j,f]=(0,a.useState)({persdetName:"",persdetAddress:"",persdetEmail:"",persdetPhone:"",jobTitle:"",companyName:"",companyLocation:"",companystartDate:"",companyendDate:"",achvResp:"",SchoolorcollegeName:"",SchoolorcollegeDesc:"",SchoolorcollegestartDate:"",SchoolorcollegeEndDate:"",hobbies:"",summary:"",OtherkeysSkills:"",personalStatement:""});console.log(j.SchoolorcollegeDesc);const[D,C]=(0,a.useState)(""),[E,N]=(0,a.useState)({exists:!1,message:"Loading"}),k=async()=>{const e=await(null===b||void 0===b?void 0:b.getSigner(t)),l=await new p.CH(v.m,v.P,e),a=await l.displayCv();console.log({displayCv:a});if(a[0][1]==t){var o,n,s,i,r,c,d,u,h,m,g,y,S,j,D,C,E,k;const e={persdetName:null===(o=a[0][0])||void 0===o?void 0:o.toString(),persdetAddress:null===(n=a[0][1])||void 0===n?void 0:n.toString(),persdetEmail:null===(s=a[0][2])||void 0===s?void 0:s.toString(),persdetPhone:null===(i=a[0][3])||void 0===i?void 0:i.toString(),personalStatement:null===(r=a[0][4])||void 0===r?void 0:r.toString(),OtherkeysSkills:null===(c=a[0][5])||void 0===c?void 0:c.toString(),hobbies:null===(d=a[0][6])||void 0===d?void 0:d.toString(),summary:null===(u=a[0][7])||void 0===u?void 0:u.toString()},t=x(null===(h=a[1][3])||void 0===h?void 0:h.toString()).timeforinput,l=x(null===(m=a[1][3])||void 0===m?void 0:m.toString()).timeforinput,v={jobTitle:null===(g=a[1][0])||void 0===g?void 0:g.toString(),companyName:null===(y=a[1][1])||void 0===y?void 0:y.toString(),companyLocation:null===(S=a[1][2])||void 0===S?void 0:S.toString(),companystartDate:null===t||void 0===t?void 0:t.toString(),companyendDate:null===l||void 0===l?void 0:l.toString(),achvResp:null===(j=a[1][5])||void 0===j?void 0:j.toString()},p=x(null===(D=a[2][1])||void 0===D?void 0:D.toString()).timeforinput,b=x(null===(C=a[2][2])||void 0===C?void 0:C.toString()).timeforinput,w={SchoolorcollegeName:null===(E=a[2][0])||void 0===E?void 0:E.toString(),SchoolorcollegestartDate:null===p||void 0===p?void 0:p.toString(),SchoolorcollegeEndDate:null===b||void 0===b?void 0:b.toString(),SchoolorcollegeDesc:null===(k=a[2][3])||void 0===k?void 0:k.toString()};f({...e,...v,...w}),N({exists:!0,message:"Data Exists"})}else N({exists:!1,message:"Data does not Exist"})};(0,a.useEffect)((()=>{l&&t?k():N({exists:!1,message:"Connect your wallet"})}),[]),(0,a.useEffect)((()=>{l&&t?k():N({exists:!1,message:"Connect your wallet"})}),[t]),console.log(j);const[w,_]=(0,a.useState)(0),[Z,T]=(0,a.useState)(Object.keys(S)[0]),O=()=>{let e=w+1;T(Object.keys(S)[e]),A(Object.keys(S)[e]),_(e)},[P,A]=(0,a.useState)(S[Object.keys(S)[0]]),I=(0,y.jsxs)("div",{className:d,children:[(0,y.jsxs)("div",{className:u,children:[(0,y.jsx)(o.Z,{label:"Name",placeholder:"Enter your full",value:j.persdetName,onChange:e=>{f((t=>({...t,persdetName:e.target.value})))}}),(0,y.jsx)(o.Z,{label:"Address",value:j.persdetAddress,placeholder:"",onChange:e=>f((t=>({...t,persdetAddress:e.target.value}))),disabled:!0})]}),(0,y.jsxs)("div",{className:u,children:[(0,y.jsx)(o.Z,{label:"Email",value:j.persdetEmail,placeholder:"Enter your email",onChange:e=>f((t=>({...t,persdetEmail:e.target.value})))}),(0,y.jsx)(o.Z,{label:"Enter phone",value:j.persdetPhone,placeholder:"Enter your phone number",onChange:e=>f((t=>({...t,persdetPhone:e.target.value})))})]}),(0,y.jsx)("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"left"},children:(0,y.jsx)("button",{type:"button",onClick:O,children:"next"})})]}),M=(0,y.jsxs)("div",{className:d,children:[(0,y.jsxs)("div",{className:u,children:[(0,y.jsx)(o.Z,{label:"Job Title",placeholder:"Enter job title ",value:j.jobTitle,onChange:e=>f((t=>({...t,jobTitle:e.target.value})))}),(0,y.jsx)(o.Z,{label:"Company Name",placeholder:"Enter company name",value:j.companyName,onChange:e=>f((t=>({...t,companyName:e.target.value})))})]}),(0,y.jsx)("div",{className:u,children:(0,y.jsx)(o.Z,{label:"Location",placeholder:"Enter company location",value:j.companyLocation,onChange:e=>f((t=>({...t,companyLocation:e.target.value})))})}),console.log(j.companystartDate),(0,y.jsxs)("div",{className:u,children:[(0,y.jsx)(o.Z,{label:"Start Date",type:"date",placeholder:"Enter start date of work",value:j.companystartDate,onChange:e=>f((t=>({...t,companystartDate:e.target.value})))}),(0,y.jsx)(o.Z,{label:"End Date",type:"date",placeholder:"Enter end date of work",value:j.companyendDate,onChange:e=>f((t=>({...t,companyendDate:e.target.value})))})]}),(0,y.jsxs)("div",{className:h,children:[(0,y.jsx)("label",{children:"Achievements and Responsibilities"}),(0,y.jsx)(o.Z,{placeholder:"Describe your achievements and responsibilities",value:j.achvResp,onChange:e=>f((t=>({...t,achvResp:e.target.value})))})]}),(0,y.jsx)("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"left"},children:(0,y.jsx)("button",{type:"button",onClick:O,children:"next"})})]}),R=(0,y.jsxs)("div",{className:d,children:[(0,y.jsx)("div",{className:u,children:(0,y.jsx)(o.Z,{label:"College/School Name",value:j.SchoolorcollegeName,placeholder:"Enter college/school name",onChange:e=>f((t=>({...t,SchoolorcollegeName:e.target.value})))})}),(0,y.jsx)(o.Z,{label:"Description",value:j.SchoolorcollegeDesc,placeholder:"Enter description",onChange:e=>f((t=>({...t,SchoolorcollegeDesc:e.target.value})))}),(0,y.jsxs)("div",{className:u,children:[(0,y.jsx)(o.Z,{label:"Start Date",type:"date",placeholder:"Enter start date of this education",value:j.SchoolorcollegestartDate,onChange:e=>f((t=>({...t,SchoolorcollegestartDate:e.target.value})))}),(0,y.jsx)(o.Z,{label:"End Date",type:"date",placeholder:"Enter end date of this education",value:j.SchoolorcollegeEndDate,onChange:e=>f((t=>({...t,SchoolorcollegeEndDate:e.target.value})))})]}),(0,y.jsx)("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"left"},children:(0,y.jsx)("button",{type:"button",onClick:O,children:"next"})})]}),U=(0,y.jsxs)("div",{className:d,children:[(0,y.jsxs)("div",{className:h,children:[(0,y.jsx)("label",{children:" Your Hobbies"}),(0,y.jsx)(o.Z,{placeholder:"Enter Your Hobbies",value:j.hobbies,onChange:e=>f((t=>({...t,hobbies:e.target.value})))})]}),(0,y.jsx)("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"left"},children:(0,y.jsx)("button",{type:"button",onClick:O,children:"next"})})]}),H=(0,y.jsxs)("div",{className:d,children:[(0,y.jsx)(o.Z,{label:"Summary",value:j.summary,placeholder:"Enter your Reference",onChange:e=>f((t=>({...t,summary:e.target.value})))}),(0,y.jsx)("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"left"},children:(0,y.jsx)("button",{type:"button",onClick:O,children:"next"})})]}),L=(0,y.jsxs)("div",{className:d,children:[(0,y.jsx)(o.Z,{label:"Key Skills",value:j.OtherkeysSkills,placeholder:"Enter key skills",onChange:e=>f((t=>({...t,OtherkeysSkills:e.target.value})))}),(0,y.jsx)(o.Z,{label:"Personal Statement",value:j.personalStatement,placeholder:"Enter personal statement",onChange:e=>f((t=>({...t,personalStatement:e.target.value})))}),(0,y.jsx)("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"left"},children:(0,y.jsx)("button",{type:"button",onClick:async()=>{console.log({values:j}),!l&&alert("Connect wallet");const e=await(null===b||void 0===b?void 0:b.getSigner(t)),a=await new p.CH(v.m,v.P,e);console.log({cont:a});const{persdetName:o,persdetAddress:n,persdetEmail:s,persdetPhone:i,jobTitle:r,companyName:c,companyLocation:d,companystartDate:u,companyendDate:h,achvResp:m,SchoolorcollegeName:g,SchoolorcollegeDesc:y,SchoolorcollegestartDate:x,SchoolorcollegeEndDate:S,hobbies:f,summary:D,OtherkeysSkills:C,personalStatement:E}=j,N=Math.round(new Date(u).getTime()/1e3).toString(),k=Math.round(new Date(h).getTime()/1e3).toString(),w=Math.round(new Date(x).getTime()/1e3).toString(),_=Math.round(new Date(S).getTime()/1e3).toString();console.log({companystartDateUnix:N});const Z=[o,t,s,i,E,C,f,D],T=[r,c,d,N,k,m],O=[g,w,_,y];console.log({PersDetails:Z,Employement:T,Education:O}),console.log(j.SchoolorcollegeDesc);const P=await a.inputCvDet(Z,T,O);await P.wait()},children:"Submit"})})]}),[J,F]=((0,a.useRef)(),(0,a.useState)({[S.basicInfo]:{id:S.basicInfo,sectionTitle:S.basicInfo,detail:{}},[S.workExp]:{id:S.workExp,sectionTitle:S.workExp,details:[]},[S.education]:{id:S.education,sectionTitle:S.education,details:[]},[S.achievement]:{id:S.achievement,sectionTitle:S.achievement,points:[]},[S.summary]:{id:S.summary,sectionTitle:S.summary,detail:""},[S.other]:{id:S.other,sectionTitle:S.other,detail:""}}));return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)("div",{className:"container-fluid",children:(0,y.jsxs)("div",{className:"row",children:[(0,y.jsx)("div",{className:"col-12 col-xl-6",children:(0,y.jsxs)("div",{className:`border rounded ${n}`,children:[(0,y.jsx)("div",{className:s,children:null===(e=Object.keys(S))||void 0===e?void 0:e.map(((e,t)=>(0,y.jsx)("div",{className:`${i} ${Z===e?r:""}`,onClick:()=>{T(e),A(e),_(t)},children:S[e]},e)))}),(0,y.jsxs)("div",{className:c,children:[(0,y.jsx)(o.Z,{label:"Section",placeholder:"Enter section title",value:P,onChange:e=>A(e.target.value),disabled:!0}),(()=>{switch(S[Z]){case S.basicInfo:return I;case S.workExp:return M;case S.education:return R;case S.achievement:return U;case S.summary:return H;case S.other:return L;default:return null}})()]})]})}),(0,y.jsx)("div",{className:"col-12 col-xl-6",children:(0,y.jsx)(g.Z,{values:j})})]})})})}}}]);
//# sourceMappingURL=241.35f07572.chunk.js.map