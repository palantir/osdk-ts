import{r as j,j as n}from"./iframe-Cr2bpw19.js";import{B as d}from"./BaseWorkshopModule-Cnl2LaNA.js";import"./preload-helper-C_Wd2tIW.js";import"./index-HKSeYDtX.js";import"./index-jdNtd9mt.js";import"./useEventCallback-0Un1rJGa.js";const{useArgs:U}=__STORYBOOK_MODULE_PREVIEW_API__;function w(l){try{const e=new URL(l);return e.protocol==="https:"||e.protocol==="http:"}catch{return!1}}const D={title:"Components/WorkshopModule/Building Blocks/BaseWorkshopModule",component:d,args:{foundryUrl:"",moduleRid:"ri.workshop.main.module.example",moduleVersion:"published",title:"Workshop module preview"},render:function(e){const[,i]=U(),M=j.useCallback(S=>{i({variables:{...e.variables,...S}})},[e.variables,i]);return n.jsx("div",{style:{height:"24rem"},children:w(e.foundryUrl)?n.jsx(d,{...e,onVariablesChanged:M},e.defaultTheme):n.jsx("p",{children:"Set foundryUrl to your Foundry URL and moduleRid to a module you can access in the controls below. Rendering requires a signed-in Foundry session."})})},parameters:{controls:{expanded:!0},docs:{description:{component:"This story makes no requests until a Foundry URL is supplied. Provide your own URL and module RID in the controls to render a real Workshop module. The version defaults to published; use latest for the latest saved version."}}},argTypes:{foundryUrl:{control:"text",description:"Your Foundry base URL. Leave blank to disable the iframe."},moduleRid:{control:"text",description:"RID of a Workshop module you can access."},moduleVersion:{control:"select",options:["latest","published"],description:"latest for the latest saved version, or published for the published version. Defaults to published."},title:{control:"text"},variables:{control:"object",description:"Variable values keyed by module-interface external ID. Workshop edits update these controls."},onVariablesChanged:{control:!1},branchRid:{control:"text",description:"Global branch RID. Leave blank to use main. Changing the branch reloads the module."},defaultTheme:{control:"select",options:[void 0,"light","dark","system"],description:"Initial theme override. System resolves the browser preference once. Changing this control remounts the preview to apply the theme."},className:{control:"text"},style:{control:"object"}}},s={parameters:{docs:{source:{code:`<BaseWorkshopModule
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
/>`}}}},a={args:{variables:{selectedNames:["Ada","Grace"],thresholds:[10,25],enabledFlags:[!0,!1]}},parameters:{docs:{description:{story:"Arrays replace the whole list. Use [] for an empty list and null to clear the variable. Requires a Foundry deployment with list-variable support in the Workshop embed integration."},source:{code:`type ModuleVariables = { selectedNames: readonly string[] };
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
/>`}}}},o={args:{variables:{employees:{objectSetRid:"ri.object-set.main.temporary-object-set.example"}}},parameters:{docs:{description:{story:"Supply an object-set RID that Workshop's signed-in user can access. Workshop edits return the same reference shape; null clears the variable. Requires object-set support in the Workshop embed integration."},source:{code:`import type { WorkshopObjectSetValue, WorkshopVariableValues } from "@osdk/react-components/experimental/workshop-module";

type ModuleVariables = { employees: WorkshopObjectSetValue };
const [variables, setVariables] = useState<WorkshopVariableValues<ModuleVariables>>({
  employees: { objectSetRid: "ri.object-set.main.temporary-object-set.example" },
});

<BaseWorkshopModule<ModuleVariables>
  foundryUrl="https://example.palantirfoundry.com"
  moduleRid="ri.workshop.main.module.example"
  variables={variables}
  onVariablesChanged={(changes) =>
    setVariables((previous) => ({ ...previous, ...changes }))
  }
  style={{ height: "24rem" }}
/>`}}}},t={args:{variables:{startedAt:"2026-11-03T12:30:00.000Z",checkpoints:["2026-11-03T14:00:00.000Z"]}},parameters:{docs:{description:{story:"Timestamp values use UTC ISO strings; timestamp lists use string arrays. Requires timestamp-variable support in the Workshop embed integration, plus list support for arrays."},source:{code:`type ModuleVariables = { startedAt: string; checkpoints: readonly string[] };
const [variables, setVariables] = useState<WorkshopVariableValues<ModuleVariables>>({
  startedAt: "2026-11-03T12:30:00.000Z",
  checkpoints: ["2026-11-03T14:00:00.000Z"],
});

<BaseWorkshopModule<ModuleVariables>
  foundryUrl="https://example.palantirfoundry.com"
  moduleRid="ri.workshop.main.module.example"
  variables={variables}
  onVariablesChanged={(changes) =>
    setVariables((previous) => ({ ...previous, ...changes }))
  }
  style={{ height: "24rem" }}
/>`}}}};var p,u,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(u=s.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var m,h,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var y,v,g;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(g=(v=a.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var V,k,f;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variables: {
      employees: {
        objectSetRid: "ri.object-set.main.temporary-object-set.example"
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Supply an object-set RID that Workshop's signed-in user can access. Workshop edits return the same reference shape; null clears the variable. Requires object-set support in the Workshop embed integration."
      },
      source: {
        code: \`import type { WorkshopObjectSetValue, WorkshopVariableValues } from "@osdk/react-components/experimental/workshop-module";

type ModuleVariables = { employees: WorkshopObjectSetValue };
const [variables, setVariables] = useState<WorkshopVariableValues<ModuleVariables>>({
  employees: { objectSetRid: "ri.object-set.main.temporary-object-set.example" },
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
}`,...(f=(k=o.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var x,W,R;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variables: {
      startedAt: "2026-11-03T12:30:00.000Z",
      checkpoints: ["2026-11-03T14:00:00.000Z"]
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Timestamp values use UTC ISO strings; timestamp lists use string arrays. Requires timestamp-variable support in the Workshop embed integration, plus list support for arrays."
      },
      source: {
        code: \`type ModuleVariables = { startedAt: string; checkpoints: readonly string[] };
const [variables, setVariables] = useState<WorkshopVariableValues<ModuleVariables>>({
  startedAt: "2026-11-03T12:30:00.000Z",
  checkpoints: ["2026-11-03T14:00:00.000Z"],
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
}`,...(R=(W=t.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};const F=["Default","Variables","Arrays","ObjectSets","Timestamps"];export{a as Arrays,s as Default,o as ObjectSets,t as Timestamps,r as Variables,F as __namedExportsOrder,D as default};
