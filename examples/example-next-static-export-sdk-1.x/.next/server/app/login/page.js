(()=>{var e={};e.id=520,e.ids=[520],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},7813:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>p});var s=r(8951),o=r(7448),n=r(1594),i=r.n(n),a=r(5485),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let p=["",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3741)),"/Volumes/git/osdk-ts/examples/example-next-static-export-sdk-1.x/src/app/login/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3370))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,4088)),"/Volumes/git/osdk-ts/examples/example-next-static-export-sdk-1.x/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,8102,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,7055,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,5524,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3370))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Volumes/git/osdk-ts/examples/example-next-static-export-sdk-1.x/src/app/login/page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:o.RouteKind.APP_PAGE,page:"/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},4014:(e,t,r)=>{Promise.resolve().then(r.bind(r,3741))},7062:(e,t,r)=>{Promise.resolve().then(r.bind(r,4125))},4125:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(4613),o=r(4123),n=r(1695),i=r(2608);let a=function(){let[e,t]=(0,i.useState)(!1),[r,a]=(0,i.useState)(void 0);(0,n.useRouter)(),o.A.auth.token;let l=(0,i.useCallback)(async()=>{t(!0);try{await o.A.auth.signIn()}catch(e){console.error(e),a(e.message??e)}finally{t(!1)}},[]);return(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Ontology SDK"}),(0,s.jsx)("button",{onClick:l,children:e?"Logging in…":"Log in "}),r&&(0,s.jsxs)("div",{children:["Unable to log in: ",r]})]})}},3741:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(4587).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Volumes/git/osdk-ts/examples/example-next-static-export-sdk-1.x/src/app/login/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Volumes/git/osdk-ts/examples/example-next-static-export-sdk-1.x/src/app/login/page.tsx","default")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[751,640,985,989],()=>r(7813));module.exports=s})();