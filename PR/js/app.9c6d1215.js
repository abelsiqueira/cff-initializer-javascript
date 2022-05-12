(()=>{"use strict";var e={7122:(e,n,t)=>{t(7280),t(5363);var r=t(8880),a=t(3525),o=t(3673);function i(e,n,t,r,a,i){const l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(l)}const l={name:"App"};l.render=i;const s=l;var d=t(7083),c=t(9582);const h=[{path:"/",component:()=>Promise.all([t.e(736),t.e(64),t.e(156)]).then(t.bind(t,8016))},{path:"/landing",component:()=>Promise.all([t.e(736),t.e(64),t.e(156)]).then(t.bind(t,8016))},{path:"/start",component:()=>Promise.all([t.e(736),t.e(64),t.e(823)]).then(t.bind(t,5518)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(714)]).then(t.bind(t,2922))}]},{path:"/authors",component:()=>Promise.all([t.e(736),t.e(64),t.e(823)]).then(t.bind(t,5518)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(170)]).then(t.bind(t,6486))}]},{path:"/finish-minimum",component:()=>Promise.all([t.e(736),t.e(64),t.e(823)]).then(t.bind(t,5518)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(452)]).then(t.bind(t,7622))}]},{path:"/identifiers",component:()=>Promise.all([t.e(736),t.e(64),t.e(823)]).then(t.bind(t,5518)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(289)]).then(t.bind(t,1384))}]},{path:"/related-resources",component:()=>Promise.all([t.e(736),t.e(64),t.e(823)]).then(t.bind(t,5518)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(643)]).then(t.bind(t,1043))}]},{path:"/abstract",component:()=>Promise.all([t.e(736),t.e(64),t.e(823)]).then(t.bind(t,5518)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(232)]).then(t.bind(t,8385))}]},{path:"/keywords",component:()=>Promise.all([t.e(736),t.e(64),t.e(823)]).then(t.bind(t,5518)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(767)]).then(t.bind(t,2398))}]},{path:"/license",component:()=>Promise.all([t.e(736),t.e(64),t.e(823)]).then(t.bind(t,5518)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(946)]).then(t.bind(t,717))}]},{path:"/version-specific",component:()=>Promise.all([t.e(736),t.e(64),t.e(823)]).then(t.bind(t,5518)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(974)]).then(t.bind(t,7321))}]},{path:"/finish-advanced",component:()=>Promise.all([t.e(736),t.e(64),t.e(823)]).then(t.bind(t,5518)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(688)]).then(t.bind(t,6160))}]},{path:"/404",component:()=>Promise.all([t.e(736),t.e(209)]).then(t.bind(t,209))},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(209)]).then(t.bind(t,209))}],u=h;var p=t(9999);const f=(0,d.BC)((function(){const e=c.r5,n=(0,c.p7)({scrollBehavior:()=>({left:0,top:0}),routes:u,history:e("/PR/")});return n.beforeEach((e=>{const{navigateDirect:n}=(0,p.q)(),t=e.path.replace("/","");n(t)})),n}));async function v(e,n){const t="function"===typeof f?await f({}):f,r=e(s);return r.use(a.Z,n),{app:r,router:t}}const m={config:{brand:{primary:"#65686b",secondary:"#efefef",accent:"#9C27B0",formcard:"#efefef",dark:"#333",positive:"#21BA45",negative:"#C10015",info:"#31CCEC",warning:"#F9E3A4"}}};async function b({app:e,router:n}){e.use(n),e.mount("#q-app")}v(r.ri,m).then(b)},9999:(e,n,t)=>{t.d(n,{q:()=>p});var r=t(1959),a=t(3673),o=t(9582),i=function(e,n,t,r){function a(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,o){function i(e){try{s(r.next(e))}catch(n){o(n)}}function l(e){try{s(r["throw"](e))}catch(n){o(n)}}function s(e){e.done?t(e.value):a(e.value).then(i,l)}s((r=r.apply(e,n||[])).next())}))};const l=(0,r.iH)({showAdvanced:!1,stepIndex:0}),s=["start","authors","finish-minimum","identifiers","related-resources","abstract","keywords","license","version-specific","finish-advanced"],d=new Set(["identifiers","related-resources","abstract","keywords","license","version-specific"]),c=0,h=(0,a.Fl)((()=>l.value.showAdvanced?s.indexOf("finish-advanced"):s.indexOf("finish-minimum"))),u=(0,a.Fl)((()=>s[l.value.stepIndex]));function p(){const e=(0,o.tv)();return{cannotGoBack:(0,a.Fl)((()=>l.value.stepIndex===c)),cannotGoForward:(0,a.Fl)((()=>l.value.stepIndex===h.value)),lastStepIndex:h,showAdvanced:(0,a.Fl)((()=>l.value.showAdvanced)),stepName:u,navigateDirect:e=>{s.includes(e)&&(d.has(e)&&(l.value.showAdvanced=!0),l.value.stepIndex=s.indexOf(e))},setStepName:n=>i(this,void 0,void 0,(function*(){l.value.stepIndex=s.indexOf(n),yield e.push({path:`/${u.value}`})})),navigateNext:()=>i(this,void 0,void 0,(function*(){!0===l.value.showAdvanced&&"authors"===u.value&&l.value.stepIndex++,l.value.stepIndex<h.value&&(l.value.stepIndex++,yield e.push({path:`/${u.value}`}))})),navigatePrevious:()=>i(this,void 0,void 0,(function*(){!0===l.value.showAdvanced&&"identifiers"===u.value&&l.value.stepIndex--,l.value.stepIndex>c&&(l.value.stepIndex--,yield e.push({path:`/${u.value}`}))})),setShowAdvanced:e=>{l.value.showAdvanced=e}}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={exports:{}};return e[r].call(o.exports,o,o.exports,t),o.exports}t.m=e,(()=>{var e=[];t.O=(n,r,a,o)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){for(var[r,a,o]=e[c],l=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(t.O).every((e=>t.O[e](r[s])))?r.splice(s--,1):(l=!1,o<i&&(i=o));if(l){e.splice(c--,1);var d=a();void 0!==d&&(n=d)}}return n}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,a,o]}})(),(()=>{t.n=e=>{var n=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(n,{a:n}),n}})(),(()=>{t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((n,r)=>(t.f[r](e,n),n)),[]))})(),(()=>{t.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{64:"3907a874",156:"be77fb66",170:"cebdee2b",209:"501a71c7",232:"c51eef19",289:"ea5ff044",452:"2f717269",643:"7f16f82b",688:"68297a4e",714:"433d174c",767:"aae372a9",823:"d1199de6",946:"e54aae21",974:"78bc6990"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{156:"c20423d8",170:"699d032c",232:"8dadab0d",289:"01a74d83",452:"746b73b2",643:"8dadab0d",688:"42b06072",714:"db7985d9",736:"540f306d",767:"12c77898",823:"432953d3",946:"8dadab0d",974:"8dadab0d"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)})(),(()=>{var e={},n="cffinit:";t.l=(r,a,o,i)=>{if(e[r])e[r].push(a);else{var l,s;if(void 0!==o)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var h=d[c];if(h.getAttribute("src")==r||h.getAttribute("data-webpack")==n+o){l=h;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",n+o),l.src=r),e[r]=[a];var u=(n,t)=>{l.onerror=l.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(t))),n)return n(t)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=u.bind(null,l.onerror),l.onload=u.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p="/PR/"})(),(()=>{var e=(e,n,t,r)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=o=>{if(a.onerror=a.onload=null,"load"===o.type)t();else{var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,a.parentNode.removeChild(a),r(s)}};return a.onerror=a.onload=o,a.href=n,document.head.appendChild(a),a},n=(e,n)=>{for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var a=t[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===n))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){a=i[r],o=a.getAttribute("data-href");if(o===e||o===n)return a}},r=r=>new Promise(((a,o)=>{var i=t.miniCssF(r),l=t.p+i;if(n(i,l))return a();e(r,l,a,o)})),a={143:0};t.f.miniCss=(e,n)=>{var t={156:1,170:1,232:1,289:1,452:1,643:1,688:1,714:1,767:1,823:1,946:1,974:1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=r(e).then((()=>{a[e]=0}),(n=>{throw delete a[e],n})))}})(),(()=>{var e={143:0};t.f.j=(n,r)=>{var a=t.o(e,n)?e[n]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise(((t,r)=>a=e[n]=[t,r]));r.push(a[2]=o);var i=t.p+t.u(n),l=new Error,s=r=>{if(t.o(e,n)&&(a=e[n],0!==a&&(e[n]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,a[1](l)}};t.l(i,s,"chunk-"+n,n)}},t.O.j=n=>0===e[n];var n=(n,r)=>{var a,o,[i,l,s]=r,d=0;for(a in l)t.o(l,a)&&(t.m[a]=l[a]);if(s)var c=s(t);for(n&&n(r);d<i.length;d++)o=i[d],t.o(e,o)&&e[o]&&e[o][0](),e[i[d]]=0;return t.O(c)},r=self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})();var r=t.O(void 0,[736],(()=>t(7122)));r=t.O(r)})();