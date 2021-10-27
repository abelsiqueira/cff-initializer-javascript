(()=>{"use strict";var e={7122:(e,n,t)=>{t(7280),t(5363);var a=t(8880),r=t(3525),o=t(3673);function i(e,n,t,a,r,i){const l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(l)}const l={name:"App"};l.render=i;const s=l;var c=t(7083),d=t(9582);const h=[{path:"/",component:()=>Promise.all([t.e(736),t.e(64),t.e(337)]).then(t.bind(t,8051)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(207)]).then(t.bind(t,7207))}]},{path:"/landing",component:()=>Promise.all([t.e(736),t.e(64),t.e(337)]).then(t.bind(t,8051)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(207)]).then(t.bind(t,7207))}]},{path:"/start",component:()=>Promise.all([t.e(736),t.e(64),t.e(69)]).then(t.bind(t,8635)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(540)]).then(t.bind(t,621))}]},{path:"/authors",component:()=>Promise.all([t.e(736),t.e(64),t.e(69)]).then(t.bind(t,8635)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(902)]).then(t.bind(t,5629))}]},{path:"/finish-minimum",component:()=>Promise.all([t.e(736),t.e(64),t.e(69)]).then(t.bind(t,8635)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(586)]).then(t.bind(t,8026))}]},{path:"/identifiers",component:()=>Promise.all([t.e(736),t.e(64),t.e(69)]).then(t.bind(t,8635)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(888)]).then(t.bind(t,9605))}]},{path:"/related-resources",component:()=>Promise.all([t.e(736),t.e(64),t.e(69)]).then(t.bind(t,8635)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(29)]).then(t.bind(t,9025))}]},{path:"/abstract",component:()=>Promise.all([t.e(736),t.e(64),t.e(69)]).then(t.bind(t,8635)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(225)]).then(t.bind(t,3769))}]},{path:"/keywords",component:()=>Promise.all([t.e(736),t.e(64),t.e(69)]).then(t.bind(t,8635)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(776)]).then(t.bind(t,7209))}]},{path:"/license",component:()=>Promise.all([t.e(736),t.e(64),t.e(69)]).then(t.bind(t,8635)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(641)]).then(t.bind(t,4828))}]},{path:"/version-specific",component:()=>Promise.all([t.e(736),t.e(64),t.e(69)]).then(t.bind(t,8635)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(548)]).then(t.bind(t,1007))}]},{path:"/finish-advanced",component:()=>Promise.all([t.e(736),t.e(64),t.e(69)]).then(t.bind(t,8635)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(730)]).then(t.bind(t,7567))}]},{path:"/404",component:()=>Promise.all([t.e(736),t.e(209)]).then(t.bind(t,209))},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(209)]).then(t.bind(t,209))}],p=h;var u=t(9999);const f=(0,c.BC)((function(){const e=d.r5,n=(0,d.p7)({scrollBehavior:()=>({left:0,top:0}),routes:p,history:e("/cffinit/")});return n.beforeEach((e=>{const{navigateDirect:n}=(0,u.q)(),t=e.path.replace("/","");n(t)})),n}));async function v(e,n){const t="function"===typeof f?await f({}):f,a=e(s);return a.use(r.Z,n),{app:a,router:t}}const m={config:{brand:{primary:"#65686b",secondary:"#efefef",accent:"#9C27B0",formcard:"#efefef",dark:"#333",positive:"#21BA45",negative:"#C10015",info:"#31CCEC",warning:"#F2C037"}}};async function b({app:e,router:n}){e.use(n),e.mount("#q-app")}v(a.ri,m).then(b)},9999:(e,n,t)=>{t.d(n,{q:()=>u});var a=t(1959),r=t(3673),o=t(9582),i=function(e,n,t,a){function r(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,o){function i(e){try{s(a.next(e))}catch(n){o(n)}}function l(e){try{s(a["throw"](e))}catch(n){o(n)}}function s(e){e.done?t(e.value):r(e.value).then(i,l)}s((a=a.apply(e,n||[])).next())}))};const l=(0,a.iH)({showAdvanced:!1,stepIndex:0}),s=["start","authors","finish-minimum","identifiers","related-resources","abstract","keywords","license","version-specific","finish-advanced"],c=new Set(["identifiers","related-resources","abstract","keywords","license","version-specific"]),d=0,h=(0,r.Fl)((()=>l.value.showAdvanced?s.indexOf("finish-advanced"):s.indexOf("finish-minimum"))),p=(0,r.Fl)((()=>s[l.value.stepIndex]));function u(){const e=(0,o.tv)();return{cannotGoBack:(0,r.Fl)((()=>l.value.stepIndex===d)),cannotGoForward:(0,r.Fl)((()=>l.value.stepIndex===h.value)),lastStepIndex:h,showAdvanced:(0,r.Fl)((()=>l.value.showAdvanced)),stepName:p,navigateDirect:e=>{s.includes(e)&&(c.has(e)&&(l.value.showAdvanced=!0),l.value.stepIndex=s.indexOf(e))},setStepName:n=>i(this,void 0,void 0,(function*(){l.value.stepIndex=s.indexOf(n),yield e.push({path:`/${p.value}`})})),navigateNext:()=>i(this,void 0,void 0,(function*(){!0===l.value.showAdvanced&&"authors"===p.value&&l.value.stepIndex++,l.value.stepIndex<h.value&&(l.value.stepIndex++,yield e.push({path:`/${p.value}`}))})),navigatePrevious:()=>i(this,void 0,void 0,(function*(){!0===l.value.showAdvanced&&"identifiers"===p.value&&l.value.stepIndex--,l.value.stepIndex>d&&(l.value.stepIndex--,yield e.push({path:`/${p.value}`}))})),setShowAdvanced:e=>{l.value.showAdvanced=e}}}}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={exports:{}};return e[a].call(o.exports,o,o.exports,t),o.exports}t.m=e,(()=>{var e=[];t.O=(n,a,r,o)=>{if(!a){var i=1/0;for(d=0;d<e.length;d++){for(var[a,r,o]=e[d],l=!0,s=0;s<a.length;s++)(!1&o||i>=o)&&Object.keys(t.O).every((e=>t.O[e](a[s])))?a.splice(s--,1):(l=!1,o<i&&(i=o));if(l){e.splice(d--,1);var c=r();void 0!==c&&(n=c)}}return n}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[a,r,o]}})(),(()=>{t.n=e=>{var n=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(n,{a:n}),n}})(),(()=>{t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((n,a)=>(t.f[a](e,n),n)),[]))})(),(()=>{t.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{29:"52fb72b6",64:"aff3578b",69:"e08ec3df",207:"7fa035c0",209:"501a71c7",225:"368c87af",337:"f5e442c3",540:"85710ecf",548:"fbe8b0d8",586:"461a4e1b",641:"5c11bd80",730:"972430bf",776:"820f7861",888:"e529056a",902:"bb076adb"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{29:"c89e962a",69:"1386fdd1",207:"2a982c8a",225:"c89e962a",337:"e18ea1ee",540:"7be5de35",548:"c89e962a",586:"e315cff7",641:"c89e962a",730:"c9d3e112",736:"540f306d",776:"26f2842d",888:"bb01c6ae",902:"83124286"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)})(),(()=>{var e={},n="cffinit:";t.l=(a,r,o,i)=>{if(e[a])e[a].push(r);else{var l,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var h=c[d];if(h.getAttribute("src")==a||h.getAttribute("data-webpack")==n+o){l=h;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",n+o),l.src=a),e[a]=[r];var p=(n,t)=>{l.onerror=l.onload=null,clearTimeout(u);var r=e[a];if(delete e[a],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((e=>e(t))),n)return n(t)},u=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p="/cffinit/"})(),(()=>{var e=(e,n,t,a)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=o=>{if(r.onerror=r.onload=null,"load"===o.type)t();else{var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,r.parentNode.removeChild(r),a(s)}};return r.onerror=r.onload=o,r.href=n,document.head.appendChild(r),r},n=(e,n)=>{for(var t=document.getElementsByTagName("link"),a=0;a<t.length;a++){var r=t[a],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===e||o===n))return r}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){r=i[a],o=r.getAttribute("data-href");if(o===e||o===n)return r}},a=a=>new Promise(((r,o)=>{var i=t.miniCssF(a),l=t.p+i;if(n(i,l))return r();e(a,l,r,o)})),r={143:0};t.f.miniCss=(e,n)=>{var t={29:1,69:1,207:1,225:1,337:1,540:1,548:1,586:1,641:1,730:1,776:1,888:1,902:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=a(e).then((()=>{r[e]=0}),(n=>{throw delete r[e],n})))}})(),(()=>{var e={143:0};t.f.j=(n,a)=>{var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise(((t,a)=>r=e[n]=[t,a]));a.push(r[2]=o);var i=t.p+t.u(n),l=new Error,s=a=>{if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;l.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,r[1](l)}};t.l(i,s,"chunk-"+n,n)}},t.O.j=n=>0===e[n];var n=(n,a)=>{var r,o,[i,l,s]=a,c=0;for(r in l)t.o(l,r)&&(t.m[r]=l[r]);if(s)var d=s(t);for(n&&n(a);c<i.length;c++)o=i[c],t.o(e,o)&&e[o]&&e[o][0](),e[i[c]]=0;return t.O(d)},a=self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))})();var a=t.O(void 0,[736],(()=>t(7122)));a=t.O(a)})();