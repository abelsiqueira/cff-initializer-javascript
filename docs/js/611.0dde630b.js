"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[611],{3945:(e,o,t)=>{t.r(o),t.d(o,{default:()=>q});var d=t(3673);const r=(0,d.HX)("data-v-771c712e");(0,d.dD)("data-v-771c712e");const n={id:"metroline"},s={id:"form"},a=(0,d.Wm)("div",{id:"form-title"},[(0,d.Wm)("h1",{class:"page-title"}," Keywords ")],-1),c={id:"form-content"},i=(0,d.Wm)("p",{class:"question"}," What keywords describe the work? ",-1),l={class:"keywords"},p=(0,d.Uk)(" Add keyword "),u={id:"form-button-bar"};(0,d.Cn)();const m=r(((e,o,t,m,w,v)=>{const y=(0,d.up)("Stepper"),k=(0,d.up)("Keyword"),f=(0,d.up)("q-btn"),K=(0,d.up)("StepperActions");return(0,d.wg)(),(0,d.j4)(d.HY,null,[(0,d.Wm)("div",n,[(0,d.Wm)(y)]),(0,d.Wm)("div",s,[a,(0,d.Wm)("div",c,[i,(0,d.Wm)("div",l,[((0,d.wg)(!0),(0,d.j4)(d.HY,null,(0,d.Ko)(e.keywords,((o,t)=>((0,d.wg)(),(0,d.j4)(k,{key:t,keyword:o,onRemovePressed:o=>e.removeKeyword(t),onUpdate:o=>e.setKeyword(t,o)},null,8,["keyword","onRemovePressed","onUpdate"])))),128))]),(0,d.Wm)(f,{color:"primary","no-caps":"",style:{width:"max-content"},onClick:e.addKeyword},{default:r((()=>[p])),_:1},8,["onClick"])]),(0,d.Wm)("div",u,[(0,d.Wm)(K)])])],64)}));var w=t(5264),v=t(2902);const y=(0,d.HX)("data-v-22a264f7");(0,d.dD)("data-v-22a264f7");const k={class:"keyword"},f={class:"keyword-input"};(0,d.Cn)();const K=y(((e,o,t,r,n,s)=>{const a=(0,d.up)("q-input"),c=(0,d.up)("q-btn");return(0,d.wg)(),(0,d.j4)("div",k,[(0,d.Wm)("div",f,[(0,d.Wm)(a,{"bg-color":"white",dense:"",outlined:"",placeholder:"Type a keyword","model-value":e.keyword,rules:[e.validateKeyword],"onUpdate:modelValue":o[1]||(o[1]=o=>e.$emit("update",o))},null,8,["model-value","rules"])]),(0,d.Wm)(c,{class:"remove-keyword-btn",color:"negative",dense:"",icon:"delete",title:"Remove",onClick:o[2]||(o[2]=o=>e.$emit("removePressed"))})])}));var W=t(4334);const b=(0,d.aZ)({name:"KeywordCard",props:{keyword:{type:String,default:""}},setup(){return{validateKeyword:(0,W.rk)("/properties/keywords/items")}},emits:["removePressed","update"]});var h=t(1206),g=t(9892),C=t(7518),Z=t.n(C);b.render=K,b.__scopeId="data-v-22a264f7";const S=b;Z()(b,"components",{QInput:h.Z,QBtn:g.Z});var _=t(1364);const j=(0,d.aZ)({name:"ScreenKeywords",components:{Stepper:w.Z,StepperActions:v.Z,Keyword:S},setup(){const{keywords:e,setKeywords:o}=(0,_.Y)();function t(){const t="",d=[...e.value,t];o(d)}function d(t){const d=[...e.value];d.splice(t,1),o(d)}function r(t,d){const r=[...e.value];r[t]=d,o(r)}return{keywords:e,addKeyword:t,removeKeyword:d,setKeyword:r}}});j.render=m,j.__scopeId="data-v-771c712e";const q=j;Z()(j,"components",{QBtn:g.Z})}}]);