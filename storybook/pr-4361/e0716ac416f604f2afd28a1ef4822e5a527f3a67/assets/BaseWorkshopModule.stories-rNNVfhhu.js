import{j as r}from"./iframe-BUHzazL7.js";import{B as s}from"./BaseWorkshopModule-CpJQWu5v.js";import"./preload-helper-7pS0gMeE.js";import"./index-DAbvms11.js";function a(e){try{const t=new URL(e);return t.protocol==="https:"||t.protocol==="http:"}catch{return!1}}const m={title:"Components/WorkshopModule/Building Blocks/BaseWorkshopModule",component:s,args:{foundryUrl:"",moduleRid:"ri.workshop.main.module.example",moduleVersion:"published",title:"Workshop module preview"},render:e=>r.jsx("div",{style:{height:"24rem"},children:a(e.foundryUrl)?r.jsx(s,{...e},e.defaultTheme):r.jsx("p",{children:"Set foundryUrl to your Foundry URL and moduleRid to a module you can access in the controls below. Rendering requires a signed-in Foundry session."})}),parameters:{controls:{expanded:!0},docs:{description:{component:"This story makes no requests until a Foundry URL is supplied. Provide your own URL and module RID in the controls to render a real Workshop module. The version defaults to published; use latest for the latest saved version."}}},argTypes:{foundryUrl:{control:"text",description:"Your Foundry base URL. Leave blank to disable the iframe."},moduleRid:{control:"text",description:"RID of a Workshop module you can access."},moduleVersion:{control:"select",options:["latest","published"],description:"latest for the latest saved version, or published for the published version. Defaults to published."},title:{control:"text"},branchRid:{control:"text",description:"Global branch RID. Leave blank to use main. Changing the branch reloads the module."},defaultTheme:{control:"select",options:[void 0,"light","dark","system"],description:"Initial theme override. System resolves the browser preference once. Changing this control remounts the preview to apply the theme."},className:{control:"text"},style:{control:"object"}}},o={parameters:{docs:{source:{code:`<BaseWorkshopModule
  foundryUrl="https://example.palantirfoundry.com"
  moduleRid="ri.workshop.main.module.example"
  style={{ height: "24rem" }}
/>`}}}};var n,l,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const h=["Default"];export{o as Default,h as __namedExportsOrder,m as default};
