"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[988],{1364:(e,t,o)=>{o.d(t,{n:()=>u});var l=o(1959),s=o(3673),a=o(2883),r=o.n(a);const i=(0,l.iH)({"cff-version":"1.2.0",type:"software"});function u(){return{abstract:(0,s.Fl)((()=>i.value.abstract)),asYAML:(0,s.Fl)((()=>r().dump(i.value))),cff:(0,s.Fl)((()=>i.value)),commit:(0,s.Fl)((()=>i.value.commit)),date_released:(0,s.Fl)((()=>i.value.date_released)),identifiers:(0,s.Fl)((()=>i.value.identifiers)),keywords:(0,s.Fl)((()=>i.value.keywords)),license:(0,s.Fl)((()=>i.value.license)),message:(0,s.Fl)((()=>i.value.message)),repository:(0,s.Fl)((()=>i.value.repository)),repository_artifact:(0,s.Fl)((()=>i.value.repository_artifact)),repository_code:(0,s.Fl)((()=>i.value.repository_code)),title:(0,s.Fl)((()=>i.value.title)),type:(0,s.Fl)((()=>i.value.type)),url:(0,s.Fl)((()=>i.value.url)),version:(0,s.Fl)((()=>i.value.version)),setAbstract:e=>{i.value.abstract=e},setCommit:e=>{i.value.commit=e},setDateReleased:e=>{i.value.date_released=e},setIdentifiers:e=>{i.value.identifiers=e},setKeywords:e=>{i.value.keywords=e},setLicense:e=>{i.value.license=e},setMessage:e=>{i.value.message=e},setRepository:e=>{i.value.repository=e},setRepositoryArtifact:e=>{i.value.repository_artifact=e},setRepositoryCode:e=>{i.value.repository_code=e},setTitle:e=>{i.value.title=e},setType:e=>{i.value.type=e},setUrl:e=>{i.value.url=e},setVersion:e=>{i.value.version=e}}}},8150:(e,t,o)=>{o.d(t,{g:()=>r});var l=o(1959),s=o(3673);const a=(0,l.iH)(1);function r(){return{step:(0,s.Fl)((()=>a.value)),next:()=>{a.value=a.value+1},previous:()=>{a.value=a.value-1},goto:e=>{a.value=e}}}},6281:(e,t,o)=>{o.d(t,{Z:()=>y});var l=o(3673);const s={class:"row action-buttons"},a={class:"col"},r={class:"col q-mr-lg",align:"right"};function i(e,t,o,i,u,n){const c=(0,l.up)("q-btn"),p=(0,l.up)("q-btn-group");return(0,l.wg)(),(0,l.j4)("div",s,[(0,l.Wm)("div",a,[(0,l.Wm)(c,{color:"",flat:"",label:"Back","no-caps":"",onClick:e.navigatePrevious},null,8,["onClick"])]),(0,l.Wm)("div",r,[(0,l.Wm)(p,{flat:""},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{color:"",flat:"",label:"Finish","no-caps":"",to:"/finish"}),(0,l.Wm)(c,{color:"grey-6",label:"Next","no-caps":"",onClick:e.navigateNext},null,8,["onClick"])])),_:1})])])}var u=o(9582),n=o(8150);const c=(0,l.aZ)({name:"StepperActions",setup(){const e=(0,n.g)(),t=(0,u.tv)(),o=()=>{e.next();const o=`/${e.step.value}`;return t.push({path:o})},l=()=>{e.previous();const o=`/${e.step.value}`;return t.push({path:o})},s=o=>{e.goto(o);const l=`/${e.step.value}`;return t.push({path:l})};return{step:e,navigateNext:o,navigatePrevious:l,navigateTo:s}}});var p=o(8240),d=o(6375),v=o(7518),m=o.n(v);c.render=i;const y=c;m()(c,"components",{QBtn:p.Z,QBtnGroup:d.Z})},4988:(e,t,o)=>{o.r(t),o.d(t,{default:()=>g});var l=o(3673);const s=(0,l.HX)("data-v-8bc23334");(0,l.dD)("data-v-8bc23334");const a={class:"q-pa-md col-flex"},r={class:"q-gutter-md title-field text-dark"},i=(0,l.Wm)("p",{class:"q-mt-xl text-h5"}," The URL of a landing page/website for the work ",-1),u=(0,l.Wm)("p",{class:"q-mt-xl text-h5"}," The URL of the work in a repository ",-1),n=(0,l.Wm)("p",{class:"q-mt-xl text-h5"}," The URL of the work in a build artifact/binary repository ",-1),c=(0,l.Wm)("p",{class:"q-mt-xl text-h5"}," The URL of the work in a source code repository ",-1);(0,l.Cn)();const p=s(((e,t,o,s,p,d)=>{const v=(0,l.up)("q-input"),m=(0,l.up)("StepperActions");return(0,l.wg)(),(0,l.j4)(l.HY,null,[(0,l.Wm)("div",a,[(0,l.Wm)("div",r,[i,(0,l.Wm)(v,{"bg-color":"white",label:"url",outlined:"",standout:"","model-value":e.url,rules:[e=>e&&e.length>3||"Please use minimum 3 characters"],"onUpdate:modelValue":e.setUrl},null,8,["model-value","rules","onUpdate:modelValue"]),u,(0,l.Wm)(v,{"bg-color":"white",label:"repository",outlined:"",standout:"","model-value":e.repository,rules:[e=>e&&e.length>3||"Please use minimum 3 characters"],"onUpdate:modelValue":e.setRepository},null,8,["model-value","rules","onUpdate:modelValue"]),n,(0,l.Wm)(v,{"bg-color":"white",label:"repository_artifact",outlined:"",standout:"","model-value":e.repository_artifact,rules:[e=>e&&e.length>3||"Please use minimum 3 characters"],"onUpdate:modelValue":e.setRepositoryArtifact},null,8,["model-value","rules","onUpdate:modelValue"]),c,(0,l.Wm)(v,{"bg-color":"white",label:"repository_code",outlined:"",standout:"","model-value":e.repository_code,rules:[e=>e&&e.length>3||"Please use minimum 3 characters"],"onUpdate:modelValue":e.setRepositoryCode},null,8,["model-value","rules","onUpdate:modelValue"])])]),(0,l.Wm)(m)],64)}));var d=o(6281),v=o(1364);const m=(0,l.aZ)({name:"PageRelatedResources",components:{StepperActions:d.Z},setup(){const e=(0,v.n)();return{repository:e.repository,repository_artifact:e.repository_artifact,repository_code:e.repository_code,url:e.url,setRepository:e.setRepository,setRepositoryArtifact:e.setRepositoryArtifact,setRepositoryCode:e.setRepositoryCode,setUrl:e.setUrl}}});var y=o(8908),f=o(7518),h=o.n(f);m.render=p,m.__scopeId="data-v-8bc23334";const g=m;h()(m,"components",{QInput:y.Z})}}]);