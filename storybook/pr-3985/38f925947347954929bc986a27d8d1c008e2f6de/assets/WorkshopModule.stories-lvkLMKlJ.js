import{i as c,R as p,j as l}from"./iframe-B_zDWzul.js";import{c as m}from"./index-Boe0r-ul.js";import"./preload-helper-DG9VDp_n.js";function h({foundryUrl:e,moduleRid:o,moduleVersion:s="published"}){const n=s==="published"?"latest":"dev",r=new URL(`/workspace/module/view/${n}/${encodeURIComponent(o)}`,e);return r.protocol==="https:"||r.protocol==="http:"||c(),r.searchParams.set("embedded","true"),r.href}const f={iframe:"BaseWorkshopModule-module__iframe___rCE34uaJ"};function a({title:e="Workshop module",className:o,style:s,...n}){const r=h(n);return p.createElement("iframe",{src:r,title:e,className:m(f.iframe,o),style:s})}function y(e){try{const o=new URL(e);return o.protocol==="https:"||o.protocol==="http:"}catch{return!1}}const v={title:"Components/WorkshopModule",component:a,args:{foundryUrl:"",moduleRid:"ri.workshop.main.module.example",moduleVersion:"published",title:"Workshop module preview"},render:e=>l.jsx("div",{style:{height:"24rem"},children:y(e.foundryUrl)?l.jsx(a,{...e}):l.jsx("p",{children:"Set foundryUrl to your Foundry URL and moduleRid to a module you can access in the controls below. Rendering requires a signed-in Foundry session."})}),parameters:{controls:{expanded:!0},docs:{description:{component:"This story makes no requests until a Foundry URL is supplied. Provide your own URL and module RID in the controls to render a real Workshop module. The version defaults to published; use latest for the latest saved version."}}},argTypes:{foundryUrl:{control:"text",description:"Your Foundry base URL. Leave blank to disable the iframe."},moduleRid:{control:"text",description:"RID of a Workshop module you can access."},moduleVersion:{control:"select",options:["latest","published"],description:"latest for the latest saved version, or published for the published version. Defaults to published."},title:{control:"text"},className:{control:"text"},style:{control:"object"}}},t={parameters:{docs:{source:{code:`<BaseWorkshopModule
  foundryUrl="https://example.palantirfoundry.com"
  moduleRid="ri.workshop.main.module.example"
  style={{ height: "24rem" }}
/>`}}}};var d,i,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const U=["Default"];export{t as Default,U as __namedExportsOrder,v as default};
