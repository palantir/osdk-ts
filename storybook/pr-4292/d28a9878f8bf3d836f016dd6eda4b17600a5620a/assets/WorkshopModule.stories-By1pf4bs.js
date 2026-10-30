import{i as f,R as l,j as d}from"./iframe-Bib3kGT6.js";import{c as y}from"./index-VjAhrkKZ.js";import"./preload-helper-C51LGZ31.js";function R({foundryUrl:o,moduleRid:e,moduleVersion:r="published",theme:s}){const i=r==="published"?"latest":"dev",t=new URL(`/workspace/module/view/${i}/${encodeURIComponent(e)}`,o);return t.protocol==="https:"||t.protocol==="http:"||f(),t.searchParams.set("embedded","true"),s!=null&&t.searchParams.set("themeOverride",s==="dark"?"DARK_MODE":"LIGHT_MODE"),t.href}const k="(prefers-color-scheme: dark)";function v(){return typeof window>"u"||typeof window.matchMedia!="function"?"light":window.matchMedia(k).matches?"dark":"light"}function w(o){const[e,r]=l.useState(o);return l.useEffect(()=>{e==="system"&&r(v())},[e]),{theme:e==="system"?void 0:e,isLoading:e==="system"}}const x={iframe:"BaseWorkshopModule-module__iframe___rCE34uaJ"};function u({defaultTheme:o,title:e="Workshop module",className:r,style:s,...i}){const{theme:t,isLoading:a}=w(o),h=R({...i,theme:t});return l.createElement("iframe",{src:a?void 0:h,hidden:a,title:e,className:y(x.iframe,r),style:s})}function U(o){try{const e=new URL(o);return e.protocol==="https:"||e.protocol==="http:"}catch{return!1}}const M={title:"Components/WorkshopModule",component:u,args:{foundryUrl:"",moduleRid:"ri.workshop.main.module.example",moduleVersion:"published",title:"Workshop module preview"},render:o=>d.jsx("div",{style:{height:"24rem"},children:U(o.foundryUrl)?d.jsx(u,{...o},o.defaultTheme):d.jsx("p",{children:"Set foundryUrl to your Foundry URL and moduleRid to a module you can access in the controls below. Rendering requires a signed-in Foundry session."})}),parameters:{controls:{expanded:!0},docs:{description:{component:"This story makes no requests until a Foundry URL is supplied. Provide your own URL and module RID in the controls to render a real Workshop module. The version defaults to published; use latest for the latest saved version."}}},argTypes:{foundryUrl:{control:"text",description:"Your Foundry base URL. Leave blank to disable the iframe."},moduleRid:{control:"text",description:"RID of a Workshop module you can access."},moduleVersion:{control:"select",options:["latest","published"],description:"latest for the latest saved version, or published for the published version. Defaults to published."},title:{control:"text"},defaultTheme:{control:"select",options:[void 0,"light","dark","system"],description:"Initial theme override. System resolves the browser preference once. Changing this control remounts the preview to apply the theme."},className:{control:"text"},style:{control:"object"}}},n={parameters:{docs:{source:{code:`<BaseWorkshopModule
  foundryUrl="https://example.palantirfoundry.com"
  moduleRid="ri.workshop.main.module.example"
  style={{ height: "24rem" }}
/>`}}}};var c,m,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<BaseWorkshopModule
  foundryUrl="https://example.palantirfoundry.com"
  moduleRid="ri.workshop.main.module.example"
  style={{ height: "24rem" }}
/>\`
      }
    }
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const W=["Default"];export{n as Default,W as __namedExportsOrder,M as default};
