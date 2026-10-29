import{i as h,R as f,j as t}from"./iframe-I-ljmhXo.js";import{c as y}from"./index-DHgdi-G8.js";import"./preload-helper-M9MPg2Uh.js";const R={iframe:"BaseWorkshopModule-module__iframe___rCE34uaJ"};function n({foundryUrl:e,moduleRid:o,moduleVersion:i,title:u="Workshop module",className:p,style:c}){const m=i==="published"?"latest":"dev",r=new URL(`/workspace/module/view/${m}/${encodeURIComponent(o)}`,e);return r.protocol==="https:"||r.protocol==="http:"||h(),r.searchParams.set("embedded","true"),f.createElement("iframe",{src:r.href,title:u,className:y(R.iframe,p),style:c})}function x(e){try{const o=new URL(e);return o.protocol==="https:"||o.protocol==="http:"}catch{return!1}}const U={title:"Beta/WorkshopModule",component:n,args:{foundryUrl:"",moduleRid:"ri.workshop.main.module.example",moduleVersion:"published",title:"Workshop module preview"},render:e=>t.jsx("div",{style:{height:"24rem"},children:x(e.foundryUrl)?t.jsx(n,{...e}):t.jsx("p",{children:"Set foundryUrl to your Foundry URL and moduleRid to a module you can access in the controls below. Rendering requires a signed-in Foundry session."})}),parameters:{controls:{expanded:!0},docs:{description:{component:"This story makes no requests until a Foundry URL is supplied. Provide your own URL and module RID in the controls to render a real Workshop module. Use latest for the latest saved version or published for the published version."}}},argTypes:{foundryUrl:{control:"text",description:"Your Foundry base URL. Leave blank to disable the iframe."},moduleRid:{control:"text",description:"RID of a Workshop module you can access."},moduleVersion:{control:"select",options:["latest","published"],description:"latest for the latest saved version, or published for the published version."},title:{control:"text"},className:{control:"text"},style:{control:"object"}}},s={parameters:{docs:{source:{code:`<BaseWorkshopModule
  foundryUrl="https://example.palantirfoundry.com"
  moduleRid="ri.workshop.main.module.example"
  moduleVersion="published"
  style={{ height: "24rem" }}
/>`}}}};var l,a,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<BaseWorkshopModule
  foundryUrl="https://example.palantirfoundry.com"
  moduleRid="ri.workshop.main.module.example"
  moduleVersion="published"
  style={{ height: "24rem" }}
/>\`
      }
    }
  }
}`,...(d=(a=s.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const w=["Default"];export{s as Default,w as __namedExportsOrder,U as default};
