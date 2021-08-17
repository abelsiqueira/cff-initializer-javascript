"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[470],{1364:(e,t,s)=>{s.d(t,{Y:()=>r});var a=s(1959),o=s(3673);const l=(0,a.iH)({abstract:"",authors:[],cffVersion:"1.2.0",commit:"",dateReleased:"",identifiers:[],keywords:[],license:"",message:"",repository:"",repositoryArtifact:"",repositoryCode:"",title:"",type:"software",url:"",version:""});function r(){return{abstract:(0,o.Fl)((()=>l.value.abstract)),authors:(0,o.Fl)((()=>l.value.authors)),commit:(0,o.Fl)((()=>l.value.commit)),cffVersion:(0,o.Fl)((()=>l.value.cffVersion)),dateReleased:(0,o.Fl)((()=>l.value.dateReleased)),identifiers:(0,o.Fl)((()=>l.value.identifiers)),keywords:(0,o.Fl)((()=>l.value.keywords)),license:(0,o.Fl)((()=>l.value.license)),message:(0,o.Fl)((()=>l.value.message)),repository:(0,o.Fl)((()=>l.value.repository)),repositoryArtifact:(0,o.Fl)((()=>l.value.repositoryArtifact)),repositoryCode:(0,o.Fl)((()=>l.value.repositoryCode)),title:(0,o.Fl)((()=>l.value.title)),type:(0,o.Fl)((()=>l.value.type)),url:(0,o.Fl)((()=>l.value.url)),version:(0,o.Fl)((()=>l.value.version)),setAbstract:e=>{l.value.abstract=e},setAuthors:e=>{l.value.authors=e},setCommit:e=>{l.value.commit=e},setDateReleased:e=>{l.value.dateReleased=e},setIdentifiers:e=>{l.value.identifiers=e},setKeywords:e=>{l.value.keywords=e},setLicense:e=>{l.value.license=e},setMessage:e=>{l.value.message=e},setRepository:e=>{l.value.repository=e},setRepositoryArtifact:e=>{l.value.repositoryArtifact=e},setRepositoryCode:e=>{l.value.repositoryCode=e},setTitle:e=>{l.value.title=e},setType:e=>{l.value.type=e},setUrl:e=>{l.value.url=e},setVersion:e=>{l.value.version=e},reset:()=>{l.value={abstract:"",authors:[],cffVersion:"1.2.0",commit:"",dateReleased:"",identifiers:[],keywords:[],license:"",message:"",repository:"",repositoryArtifact:"",repositoryCode:"",title:"",type:"software",url:"",version:""}}}}},8150:(e,t,s)=>{s.d(t,{g:()=>r});var a=s(1959),o=s(3673);const l=(0,a.iH)(1);function r(){return{step:(0,o.Fl)((()=>l.value)),next:()=>{l.value=l.value+1},previous:()=>{l.value=l.value-1},goto:e=>{l.value=e}}}},6281:(e,t,s)=>{s.d(t,{Z:()=>f});var a=s(3673);const o={class:"row action-buttons"},l={class:"col"},r={class:"col q-mr-lg",align:"right"};function i(e,t,s,i,n,u){const c=(0,a.up)("q-btn"),p=(0,a.up)("q-btn-group");return(0,a.wg)(),(0,a.j4)("div",o,[(0,a.Wm)("div",l,[(0,a.Wm)(c,{color:"",flat:"",label:"Back","no-caps":"",onClick:e.navigatePrevious},null,8,["onClick"])]),(0,a.Wm)("div",r,[(0,a.Wm)(p,{flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{color:"",flat:"",label:"Finish","no-caps":"",to:"/finish"}),(0,a.Wm)(c,{color:"grey-6",label:"Next","no-caps":"",onClick:e.navigateNext},null,8,["onClick"])])),_:1})])])}var n=s(9582),u=s(8150);const c=(0,a.aZ)({name:"StepperActions",setup(){const e=(0,u.g)(),t=(0,n.tv)(),s=()=>{e.next();const s=`/${e.step.value}`;return t.push({path:s})},a=()=>{e.previous();const s=`/${e.step.value}`;return t.push({path:s})},o=s=>{e.goto(s);const a=`/${e.step.value}`;return t.push({path:a})};return{step:e,navigateNext:s,navigatePrevious:a,navigateTo:o}}});var p=s(8240),v=s(6375),d=s(7518),m=s.n(d);c.render=i;const f=c;m()(c,"components",{QBtn:p.Z,QBtnGroup:v.Z})},8470:(e,t,s)=>{s.r(t),s.d(t,{default:()=>b});var a=s(3673);const o=(0,a.HX)("data-v-41c342b7");(0,a.dD)("data-v-41c342b7");const l={class:"q-pa-md col-flex"},r={class:"q-gutter-md title-field text-dark"},i=(0,a.Wm)("p",{class:"q-mt-xl page-title"}," Start ",-1),n=(0,a.Wm)("p",{class:"question"}," What is the title of the work? ",-1),u=(0,a.Wm)("p",{class:"question"}," What do you want citers to do with the information provided in your CITATION.cff file? ",-1),c=(0,a.Wm)("p",{class:"question"}," What type of work does this CITATION.cff describe? ",-1);(0,a.Cn)();const p=o(((e,t,s,o,p,v)=>{const d=(0,a.up)("q-input"),m=(0,a.up)("q-option-group"),f=(0,a.up)("StepperActions");return(0,a.wg)(),(0,a.j4)(a.HY,null,[(0,a.Wm)("div",l,[(0,a.Wm)("div",r,[i,n,(0,a.Wm)(d,{"bg-color":"white",label:"title",outlined:"",standout:"","model-value":e.title,rules:[e=>e&&e.length>3||"Please use minimum 3 characters"],"onUpdate:modelValue":e.setTitle},null,8,["model-value","rules","onUpdate:modelValue"]),u,(0,a.Wm)(d,{"bg-color":"white",label:"message",outlined:"","model-value":e.message,rules:[e=>e&&e.length>3||"Please use minimum 3 characters"],"onUpdate:modelValue":e.setMessage},null,8,["model-value","rules","onUpdate:modelValue"]),c,(0,a.Wm)(m,{type:"radio","model-value":e.type,options:e.typeOptions,"onUpdate:modelValue":e.setType},null,8,["model-value","options","onUpdate:modelValue"])])]),(0,a.Wm)(f)],64)}));var v=s(6281),d=s(1364);const m=(0,a.aZ)({name:"Start",components:{StepperActions:v.Z},setup(){const{message:e,title:t,type:s,setMessage:a,setTitle:o,setType:l}=(0,d.Y)();return{message:e,title:t,type:s,typeOptions:[{label:"Software",value:"software"},{label:"Dataset",value:"dataset"}],setMessage:a,setTitle:o,setType:l}}});var f=s(8908),y=s(7011),g=s(7518),h=s.n(g);m.render=p,m.__scopeId="data-v-41c342b7";const b=m;h()(m,"components",{QInput:f.Z,QOptionGroup:y.Z})}}]);