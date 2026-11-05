import{r as g,j as a}from"./iframe-C0wU5abY.js";import{B as l}from"./BaseWorkshopModule-D6M0nvYi.js";import"./preload-helper-DBF01-cG.js";import"./index-BLQzpxSF.js";import"./useEventCallback-eLcMhxZ3.js";const{useArgs:k}=__STORYBOOK_MODULE_PREVIEW_API__;function V(t){try{const e=new URL(t);return e.protocol==="https:"||e.protocol==="http:"}catch{return!1}}const M={title:"Components/WorkshopModule/Building Blocks/BaseWorkshopModule",component:l,args:{foundryUrl:"",moduleRid:"ri.workshop.main.module.example",moduleVersion:"published",title:"Workshop module preview"},render:function(e){const[,n]=k(),v=g.useCallback(f=>{n({variables:{...e.variables,...f}})},[e.variables,n]);return a.jsx("div",{style:{height:"24rem"},children:V(e.foundryUrl)?a.jsx(l,{...e,onVariablesChanged:v},e.defaultTheme):a.jsx("p",{children:"Set foundryUrl to your Foundry URL and moduleRid to a module you can access in the controls below. Rendering requires a signed-in Foundry session."})})},parameters:{controls:{expanded:!0},docs:{description:{component:"This story makes no requests until a Foundry URL is supplied. Provide your own URL and module RID in the controls to render a real Workshop module. The version defaults to published; use latest for the latest saved version."}}},argTypes:{foundryUrl:{control:"text",description:"Your Foundry base URL. Leave blank to disable the iframe."},moduleRid:{control:"text",description:"RID of a Workshop module you can access."},moduleVersion:{control:"select",options:["latest","published"],description:"latest for the latest saved version, or published for the published version. Defaults to published."},title:{control:"text"},variables:{control:"object",description:"Scalar or array values keyed by module-interface external ID. Workshop edits update these controls."},onVariablesChanged:{control:!1},branchRid:{control:"text",description:"Global branch RID. Leave blank to use main. Changing the branch reloads the module."},defaultTheme:{control:"select",options:[void 0,"light","dark","system"],description:"Initial theme override. System resolves the browser preference once. Changing this control remounts the preview to apply the theme."},className:{control:"text"},style:{control:"object"}}},r={parameters:{docs:{source:{code:`<BaseWorkshopModule
  foundryUrl="https://example.palantirfoundry.com"
  moduleRid="ri.workshop.main.module.example"
  style={{ height: "24rem" }}
/>`}}}},o={args:{variables:{count:25,searchText:"Ada",includeArchived:!1}},parameters:{docs:{description:{story:"Use the external IDs of your module's scalar interface variables. Inputs update live, and Workshop edits are merged into the variables control. Requires a Foundry deployment with the Workshop embed integration."},source:{code:`const [variables, setVariables] = useState<WorkshopVariableValues>({ count: 25 });

<BaseWorkshopModule
  foundryUrl="https://example.palantirfoundry.com"
  moduleRid="ri.workshop.main.module.example"
  variables={variables}
  onVariablesChanged={(changes) =>
    setVariables((previous) => ({ ...previous, ...changes }))
  }
  style={{ height: "24rem" }}
/>`}}}},s={args:{variables:{selectedNames:["Ada","Grace"],thresholds:[10,25],enabledFlags:[!0,!1]}},parameters:{docs:{description:{story:"Arrays replace the whole list. Use [] for an empty list and null to clear the variable. Requires a Foundry deployment with list-variable support in the Workshop embed integration."},source:{code:`type ModuleVariables = { selectedNames: readonly string[] };
const [variables, setVariables] = useState<WorkshopVariableValues<ModuleVariables>>({
  selectedNames: ["Ada", "Grace"],
});

<BaseWorkshopModule<ModuleVariables>
  foundryUrl="https://example.palantirfoundry.com"
  moduleRid="ri.workshop.main.module.example"
  variables={variables}
  onVariablesChanged={(changes) =>
    setVariables((previous) => ({ ...previous, ...changes }))
  }
  style={{ height: "24rem" }}
/>`}}}};var i,d,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var c,p,h;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var m,b,y;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variables: {
      selectedNames: ["Ada", "Grace"],
      thresholds: [10, 25],
      enabledFlags: [true, false]
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Arrays replace the whole list. Use [] for an empty list and null to clear the variable. Requires a Foundry deployment with list-variable support in the Workshop embed integration."
      },
      source: {
        code: \`type ModuleVariables = { selectedNames: readonly string[] };
const [variables, setVariables] = useState<WorkshopVariableValues<ModuleVariables>>({
  selectedNames: ["Ada", "Grace"],
});

<BaseWorkshopModule<ModuleVariables>
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
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const A=["Default","Variables","Arrays"];export{s as Arrays,r as Default,o as Variables,A as __namedExportsOrder,M as default};
