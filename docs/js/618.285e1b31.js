"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[618],{1364:(e,t,s)=>{s.d(t,{n:()=>n});var o=s(1959),r=s(3673),i=s(2883),a=s.n(i);const l=(0,o.iH)({"cff-version":"1.2.0",type:"software",identifiers:[{type:"doi",value:"10.0000/FIXME",description:"This is the description of the DOI"},{type:"swh",value:"some swh identifier"},{type:"url",value:"https://github.com/citation-file-format/cffinit",description:"This is the description of the URL"},{type:"other",value:"custom identifiers",description:"This is the description of the custom identifier"}],keywords:["first keyword","second keyword","third"]});function n(){return{asYAML:(0,r.Fl)((()=>a().dump(l.value,{replacer:u}))),cff:(0,r.Fl)((()=>l.value)),commit:(0,r.Fl)((()=>l.value.commit)),date_released:(0,r.Fl)((()=>l.value.date_released)),identifiers:(0,r.Fl)((()=>l.value.identifiers)),keywords:(0,r.Fl)((()=>l.value.keywords)),message:(0,r.Fl)((()=>l.value.message)),repository:(0,r.Fl)((()=>l.value.repository)),repository_artifact:(0,r.Fl)((()=>l.value.repository_artifact)),repository_code:(0,r.Fl)((()=>l.value.repository_code)),title:(0,r.Fl)((()=>l.value.title)),type:(0,r.Fl)((()=>l.value.type)),url:(0,r.Fl)((()=>l.value.url)),version:(0,r.Fl)((()=>l.value.version)),setCommit:e=>{l.value.commit=e},setDateReleased:e=>{l.value.date_released=e},setIdentifiers:e=>{l.value.identifiers=e},setKeywords:e=>{l.value.keywords=e},setMessage:e=>{l.value.message=e},setRepository:e=>{l.value.repository=e},setRepositoryArtifact:e=>{l.value.repository_artifact=e},setRepositoryCode:e=>{l.value.repository_code=e},setTitle:e=>{l.value.title=e},setType:e=>{l.value.type=e},setUrl:e=>{l.value.url=e},setVersion:e=>{l.value.version=e}}}const u=(e,t)=>{if(console.log("hideEmptyKeys: ",e,t),""!==t)return t}},8150:(e,t,s)=>{s.d(t,{g:()=>a});var o=s(1959),r=s(3673);const i=(0,o.iH)(1);function a(){return{step:(0,r.Fl)((()=>i.value)),next:()=>{i.value=i.value+1},previous:()=>{i.value=i.value-1},goto:e=>{i.value=e}}}},2751:(e,t,s)=>{s.d(t,{Z:()=>y});var o=s(3673);const r={class:"row action-buttons"},i={class:"col"},a={class:"col q-mr-lg",align:"right"};function l(e,t,s,l,n,u){const c=(0,o.up)("q-btn"),p=(0,o.up)("q-btn-group");return(0,o.wg)(),(0,o.j4)("div",r,[(0,o.Wm)("div",i,[(0,o.Wm)(c,{"no-caps":"",flat:"",onClick:e.navigatePrevious,color:"",label:"Back"},null,8,["onClick"])]),(0,o.Wm)("div",a,[(0,o.Wm)(p,{flat:""},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{"no-caps":"",flat:"",color:"",label:"Finish",to:"/finish"}),(0,o.Wm)(c,{"no-caps":"",onClick:e.navigateNext,color:"grey-6",label:"Next"},null,8,["onClick"])])),_:1})])])}var n=s(9582),u=s(8150);const c=(0,o.aZ)({name:"StepperActions",setup(){const e=(0,u.g)(),t=(0,n.tv)(),s=()=>{e.next();const s=`/${e.step.value}`;return t.push({path:s})},o=()=>{e.previous();const s=`/${e.step.value}`;return t.push({path:s})},r=s=>{e.goto(s);const o=`/${e.step.value}`;return t.push({path:o})};return{step:e,navigateNext:s,navigatePrevious:o,navigateTo:r}}});var p=s(8240),v=s(6375),d=s(7518),f=s.n(d);c.render=l;const y=c;f()(c,"components",{QBtn:p.Z,QBtnGroup:v.Z})},4618:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var o=s(3673);const r=(0,o.HX)("data-v-5b88e848");(0,o.dD)("data-v-5b88e848");const i=(0,o.Wm)("div",{class:"q-pa-md"},[(0,o.Wm)("div",{class:"q-gutter-md title-field text-dark"},[(0,o.Wm)("p",{class:"q-mt-xl text-h5"}," Keywords ")])],-1);(0,o.Cn)();const a=r(((e,t,s,r,a,l)=>{const n=(0,o.up)("StepperActions");return(0,o.wg)(),(0,o.j4)(o.HY,null,[i,(0,o.Wm)(n)],64)}));var l=s(2751),n=s(1364);const u=(0,o.aZ)({name:"PageKeywords",components:{StepperActions:l.Z},setup(){const e=(0,n.n)();return{keywords:e.keywords,setKeywords:e.setKeywords}}});u.render=a,u.__scopeId="data-v-5b88e848";const c=u}}]);