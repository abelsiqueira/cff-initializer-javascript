"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[82],{4633:(e,o,t)=>{t.r(o),t.d(o,{default:()=>H});var d=t(3673);const n=(0,d.HX)("data-v-9dfc691c");(0,d.dD)("data-v-9dfc691c");const r={id:"metroline"},s={id:"form"},a=(0,d.Wm)("div",{id:"form-title"},[(0,d.Wm)("h1",{class:"page-title"}," Keywords ")],-1),c={id:"form-content"},l=(0,d.Wm)("p",{class:"question"}," What keywords describe the work? ",-1),m={class:"scroll-to-bottom-container"},i=(0,d.Wm)("span",{class:"bottom"},null,-1),u=(0,d.Uk)(" Add keyword "),p={id:"form-button-bar"};(0,d.Cn)();const w=n(((e,o,t,w,v,y)=>{const k=(0,d.up)("Stepper"),f=(0,d.up)("Keyword"),W=(0,d.up)("q-btn"),K=(0,d.up)("StepperActions");return(0,d.wg)(),(0,d.j4)(d.HY,null,[(0,d.Wm)("div",r,[(0,d.Wm)(k)]),(0,d.Wm)("div",s,[a,(0,d.Wm)("div",c,[l,(0,d.Wm)("div",m,[i,(0,d.Wm)("div",null,[((0,d.wg)(!0),(0,d.j4)(d.HY,null,(0,d.Ko)(e.keywords,((o,t)=>((0,d.wg)(),(0,d.j4)(f,{class:"q-mr-lg",key:t,keyword:o,onRemovePressed:o=>e.removeKeyword(t),onUpdate:o=>e.setKeyword(t,o)},null,8,["keyword","onRemovePressed","onUpdate"])))),128))])]),(0,d.Wm)(W,{class:"q-mt-md q-mb-md",color:"primary","no-caps":"",style:{width:"max-content"},onClick:e.addKeyword},{default:n((()=>[u])),_:1},8,["onClick"])]),(0,d.Wm)("div",p,[(0,d.Wm)(K)])])],64)}));var v=t(5264),y=t(2902);const k=(0,d.HX)("data-v-22a264f7");(0,d.dD)("data-v-22a264f7");const f={class:"keyword"},W={class:"keyword-input"};(0,d.Cn)();const K=k(((e,o,t,n,r,s)=>{const a=(0,d.up)("q-input"),c=(0,d.up)("q-btn");return(0,d.wg)(),(0,d.j4)("div",f,[(0,d.Wm)("div",W,[(0,d.Wm)(a,{"bg-color":"white",dense:"",outlined:"",placeholder:"Type a keyword","model-value":e.keyword,rules:[e.validateKeyword],"onUpdate:modelValue":o[1]||(o[1]=o=>e.$emit("update",o))},null,8,["model-value","rules"])]),(0,d.Wm)(c,{class:"remove-keyword-btn",color:"negative",dense:"",icon:"delete",title:"Remove",onClick:o[2]||(o[2]=o=>e.$emit("removePressed"))})])}));var b=t(4334);const h=(0,d.aZ)({name:"KeywordCard",props:{keyword:{type:String,default:""}},setup(){return{validateKeyword:(0,b.rk)("/properties/keywords/items")}},emits:["removePressed","update"]});var g=t(1206),C=t(9892),q=t(7518),Z=t.n(q);h.render=K,h.__scopeId="data-v-22a264f7";const S=h;Z()(h,"components",{QInput:g.Z,QBtn:C.Z});var _=t(1364);const j=(0,d.aZ)({name:"ScreenKeywords",components:{Stepper:v.Z,StepperActions:y.Z,Keyword:S},setup(){const{keywords:e,setKeywords:o}=(0,_.Y)();function t(){const t="",d=[...e.value,t];o(d),setTimeout((()=>{document.getElementsByClassName("bottom")[0].scrollIntoView({behavior:"smooth"})}),100)}function d(t){const d=[...e.value];d.splice(t,1),o(d)}function n(t,d){const n=[...e.value];n[t]=d,o(n)}return{keywords:e,addKeyword:t,removeKeyword:d,setKeyword:n}}});j.render=w,j.__scopeId="data-v-9dfc691c";const H=j;Z()(j,"components",{QBtn:C.Z})}}]);