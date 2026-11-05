import{r as b,j as s}from"./iframe-DxLxeeBD.js";import{B as n}from"./BaseWorkshopModule-Cz8PjhC7.js";import"./preload-helper-B7NNhvj1.js";import"./index-DSM2Nmta.js";import"./useEventCallback-CpuXukHA.js";const{useArgs:y}=__STORYBOOK_MODULE_PREVIEW_API__;function v(t){try{const e=new URL(t);return e.protocol==="https:"||e.protocol==="http:"}catch{return!1}}const W={title:"Components/WorkshopModule/Building Blocks/BaseWorkshopModule",component:n,args:{foundryUrl:"",moduleRid:"ri.workshop.main.module.example",moduleVersion:"published",title:"Workshop module preview"},render:function(e){const[,a]=y(),h=b.useCallback(m=>{a({variables:{...e.variables,...m}})},[e.variables,a]);return s.jsx("div",{style:{height:"24rem"},children:v(e.foundryUrl)?s.jsx(n,{...e,onVariablesChanged:h},e.defaultTheme):s.jsx("p",{children:"Set foundryUrl to your Foundry URL and moduleRid to a module you can access in the controls below. Rendering requires a signed-in Foundry session."})})},parameters:{controls:{expanded:!0},docs:{description:{component:"This story makes no requests until a Foundry URL is supplied. Provide your own URL and module RID in the controls to render a real Workshop module. The version defaults to published; use latest for the latest saved version."}}},argTypes:{foundryUrl:{control:"text",description:"Your Foundry base URL. Leave blank to disable the iframe."},moduleRid:{control:"text",description:"RID of a Workshop module you can access."},moduleVersion:{control:"select",options:["latest","published"],description:"latest for the latest saved version, or published for the published version. Defaults to published."},title:{control:"text"},variables:{control:"object",description:"Scalar values keyed by module-interface external ID. Workshop edits update these controls."},onVariablesChanged:{control:!1},branchRid:{control:"text",description:"Global branch RID. Leave blank to use main. Changing the branch reloads the module."},defaultTheme:{control:"select",options:[void 0,"light","dark","system"],description:"Initial theme override. System resolves the browser preference once. Changing this control remounts the preview to apply the theme."},className:{control:"text"},style:{control:"object"}}},o={parameters:{docs:{source:{code:`<BaseWorkshopModule
  foundryUrl="https://example.palantirfoundry.com"
  moduleRid="ri.workshop.main.module.example"
  style={{ height: "24rem" }}
/>`}}}},r={args:{variables:{count:25,searchText:"Ada",includeArchived:!1}},parameters:{docs:{description:{story:"Use the external IDs of your module's scalar interface variables. Inputs update live, and Workshop edits are merged into the variables control. Requires a Foundry deployment with the Workshop embed integration."},source:{code:`const [variables, setVariables] = useState<WorkshopVariableValues>({ count: 25 });

<BaseWorkshopModule
  foundryUrl="https://example.palantirfoundry.com"
  moduleRid="ri.workshop.main.module.example"
  variables={variables}
  onVariablesChanged={(changes) =>
    setVariables((previous) => ({ ...previous, ...changes }))
  }
  style={{ height: "24rem" }}
/>`}}}};var l,i,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,c,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variables: {
      count: 25,
      searchText: "Ada",
      includeArchived: false
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Use the external IDs of your module's scalar interface variables. Inputs update live, and Workshop edits are merged into the variables control. Requires a Foundry deployment with the Workshop embed integration."
      },
      source: {
        code: \`const [variables, setVariables] = useState<WorkshopVariableValues>({ count: 25 });

<BaseWorkshopModule
  foundryUrl="https://example.palantirfoundry.com"
  moduleRid="ri.workshop.main.module.example"
  variables={variables}
  onVariablesChanged={(changes) =>
    setVariables((previous) => ({ ...previous, ...changes }))
  }
  style={{ height: "24rem" }}
/>\`
      }
    }
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const U=["Default","Variables"];export{o as Default,r as Variables,U as __namedExportsOrder,W as default};
