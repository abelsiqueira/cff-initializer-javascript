"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[435],{7086:(e,i,t)=>{t.r(i),t.d(i,{default:()=>H});var n=t(3673);const d=(0,n.HX)("data-v-2d606632");(0,n.dD)("data-v-2d606632");const r={id:"metroline"},l={id:"form"},o=(0,n.Wm)("div",{id:"form-title"},[(0,n.Wm)("h1",{class:"page-title"}," Identifiers ")],-1),a={id:"form-content"},s={class:"scroll-to-bottom-container"},u=(0,n.Wm)("span",{class:"bottom"},null,-1),p=(0,n.Uk)(" Add identifier "),c={id:"form-button-bar"};(0,n.Cn)();const m=d(((e,i,t,m,v,f)=>{const g=(0,n.up)("Stepper"),y=(0,n.up)("IdentifierCardViewing"),b=(0,n.up)("IdentifierCardEditing"),w=(0,n.up)("q-btn"),I=(0,n.up)("StepperActions");return(0,n.wg)(),(0,n.j4)(n.HY,null,[(0,n.Wm)("div",r,[(0,n.Wm)(g)]),(0,n.Wm)("div",l,[o,(0,n.Wm)("div",a,[(0,n.Wm)("div",s,[u,(0,n.Wm)("div",null,[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.identifiers,((t,d)=>((0,n.wg)(),(0,n.j4)("div",{class:"q-mb-md q-mr-lg",key:d},[e.editingId!==d?((0,n.wg)(),(0,n.j4)(y,{key:0,index:d,identifier:t,onEditPressed:()=>e.editingId=d},null,8,["index","identifier","onEditPressed"])):((0,n.wg)(),(0,n.j4)(b,(0,n.dG)({key:1,index:d},t,{onUpdateType:e.setIdentifierTypeField,onUpdateValue:e.setIdentifierValueField,onUpdateDescription:e.setIdentifierDescriptionField,onClosePressed:i[1]||(i[1]=()=>e.editingId=-1),onRemovePressed:e.removeIdentifier}),null,16,["index","onUpdateType","onUpdateValue","onUpdateDescription","onRemovePressed"]))])))),128))])]),(0,n.Wm)(w,{class:"q-mt-md q-mb-md",color:"primary","no-caps":"",onClick:e.addIdentifier},{default:d((()=>[p])),_:1},8,["onClick"])]),(0,n.Wm)("div",c,[(0,n.Wm)(I)])])],64)}));var v=t(1959),f=t(5264),g=t(2902);t(246);const y={class:"row items-center no-wrap"},b={class:"q-gutter-md items-center no-wrap"},w={class:"q-gutter-md items-center no-wrap"};function I(e,i,t,d,r,l){const o=(0,n.up)("q-option-group"),a=(0,n.up)("q-input"),s=(0,n.up)("q-card-section"),u=(0,n.up)("q-btn"),p=(0,n.up)("q-card-actions"),c=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)(c,{flat:"",bordered:"",class:"bg-formcard"},{default:(0,n.w5)((()=>[(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.Wm)("div",y,[(0,n.Wm)(o,{inline:"",type:"radio","model-value":e.type,options:e.typeOptions,"onUpdate:modelValue":i[1]||(i[1]=i=>e.$emit("updateType","type",i))},null,8,["model-value","options"])]),(0,n.Wm)("div",b,[(0,n.Wm)(a,{"bg-color":"white",label:"Value",outlined:"",standout:"",dense:"","model-value":e.value,"onUpdate:modelValue":i[2]||(i[2]=i=>e.$emit("updateValue","value",i)),rules:[e.validateValue]},null,8,["model-value","rules"])]),(0,n.Wm)("div",w,[(0,n.Wm)(a,{"bg-color":"white",label:"Description",outlined:"",standout:"",dense:"","model-value":e.description,"onUpdate:modelValue":i[3]||(i[3]=i=>e.$emit("updateDescription","description",i)),rules:[e.validateDescription]},null,8,["model-value","rules"])])])),_:1}),(0,n.Wm)(p,{align:"right"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{color:"negative",dense:"",icon:"delete",label:"Remove",onClick:i[4]||(i[4]=i=>e.$emit("removePressed"))}),(0,n.Wm)(u,{dense:"",icon:"done",label:"Done",onClick:i[5]||(i[5]=i=>e.$emit("closePressed"))})])),_:1})])),_:1})}var W=t(4334);const C=(0,n.aZ)({name:"IdentifierCardEditing",props:{index:{type:Number,required:!0},type:{type:String,default:""},value:{type:String,default:""},description:{type:String,default:""}},setup(e){const i={doi:(0,W.rk)("/definitions/identifier/anyOf/0/properties/value"),url:(0,W.rk)("/definitions/identifier/anyOf/1/properties/value"),swh:(0,W.rk)("/definitions/identifier/anyOf/2/properties/value"),other:(0,W.rk)("/definitions/identifier/anyOf/3/properties/value")};return{validateValue:t=>i[e.type](t),validateDescription:(0,W.zN)("/definitions/identifier-description"),typeOptions:[{label:"DOI",value:"doi"},{label:"URL",value:"url"},{label:"Software Heritage",value:"swh"},{label:"Other",value:"other"}]}},emits:["closePressed","removePressed","updateType","updateValue","updateDescription"]});var q=t(151),k=t(5589),h=t(7011),V=t(1206),Z=t(9367),D=t(9892),O=t(7518),j=t.n(O);C.render=I;const P=C;j()(C,"components",{QCard:q.Z,QCardSection:k.Z,QOptionGroup:h.Z,QInput:V.Z,QCardActions:Z.Z,QBtn:D.Z});var U=t(2323);const S=(0,n.HX)("data-v-1078c25e");(0,n.dD)("data-v-1078c25e");const x={style:{"flex-grow":"1.0"}};(0,n.Cn)();const Q=S(((e,i,t,d,r,l)=>{const o=(0,n.up)("q-btn"),a=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)(a,{bordered:"",class:"bg-formcard",flat:"",style:{display:"flex","flex-direction":"row"}},{default:S((()=>[(0,n.Wm)("div",x,[(0,n.Wm)("ul",null,[(0,n.Wm)("li",null,(0,U.zw)(e.identifier.description),1),(0,n.Wm)("li",null,(0,U.zw)(e.identifier.type)+": "+(0,U.zw)(e.identifier.value),1)])]),(0,n.Wm)("div",null,[(0,n.Wm)(o,{class:"edit-button",color:"primary",flat:"","hover-color":"negative",icon:"edit",title:"Edit",onClick:i[1]||(i[1]=i=>e.$emit("editPressed"))})])])),_:1})})),_=(0,n.aZ)({name:"IdentifierCardViewing",props:{index:{type:Number,required:!0},identifier:{type:Object,required:!0}},emits:["editPressed"]});_.render=Q,_.__scopeId="data-v-1078c25e";const E=_;j()(_,"components",{QCard:q.Z,QBtn:D.Z});var T=t(1364);const F=(0,n.aZ)({name:"ScreenIdentifiers",components:{Stepper:f.Z,StepperActions:g.Z,IdentifierCardEditing:P,IdentifierCardViewing:E},setup(){const{identifiers:e,setIdentifiers:i}=(0,T.Y)(),t=(0,v.iH)(-1);return{identifiers:e,editingId:t,setIdentifierTypeField(n,d){const r=Object.assign({},e.value[t.value]);r.type=d,e.value[t.value]=r,i(e.value)},setIdentifierValueField(n,d){const r=Object.assign({},e.value[t.value]);r.value=d,e.value[t.value]=r,i(e.value)},setIdentifierDescriptionField(n,d){const r=Object.assign({},e.value[t.value]);r.description=d,e.value[t.value]=r,i(e.value)},removeIdentifier(){const n=[...e.value];n.splice(t.value,1),i(n),t.value=-1},addIdentifier(){const n={type:"doi",value:"",description:""},d=[...e.value,n];i(d),t.value=d.length-1,setTimeout((()=>{document.getElementsByClassName("bottom")[0].scrollIntoView({behavior:"smooth"})}),100)}}}});F.render=m,F.__scopeId="data-v-2d606632";const H=F;j()(F,"components",{QBtn:D.Z})}}]);