import{r as W,j as t}from"./iframe-ClYhC0-S.js";import{B as i}from"./BaseWorkshopModule-C3KQe5N_.js";import"./preload-helper-CNkkVcag.js";import"./index-Bmj0xk3d.js";import"./useEventCallback-DNonn3MU.js";const{useArgs:R}=__STORYBOOK_MODULE_PREVIEW_API__;function j(n){try{const e=new URL(n);return e.protocol==="https:"||e.protocol==="http:"}catch{return!1}}const B={title:"Components/WorkshopModule/Building Blocks/BaseWorkshopModule",component:i,args:{foundryUrl:"",moduleRid:"ri.workshop.main.module.example",moduleVersion:"published",title:"Workshop module preview"},render:function(e){const[,l]=R(),f=W.useCallback(x=>{l({variables:{...e.variables,...x}})},[e.variables,l]);return t.jsx("div",{style:{height:"24rem"},children:j(e.foundryUrl)?t.jsx(i,{...e,onVariablesChanged:f},e.defaultTheme):t.jsx("p",{children:"Set foundryUrl to your Foundry URL and moduleRid to a module you can access in the controls below. Rendering requires a signed-in Foundry session."})})},parameters:{controls:{expanded:!0},docs:{description:{component:"This story makes no requests until a Foundry URL is supplied. Provide your own URL and module RID in the controls to render a real Workshop module. The version defaults to published; use latest for the latest saved version."}}},argTypes:{foundryUrl:{control:"text",description:"Your Foundry base URL. Leave blank to disable the iframe."},moduleRid:{control:"text",description:"RID of a Workshop module you can access."},moduleVersion:{control:"select",options:["latest","published"],description:"latest for the latest saved version, or published for the published version. Defaults to published."},title:{control:"text"},variables:{control:"object",description:"Variable values keyed by module-interface external ID. Workshop edits update these controls."},onVariablesChanged:{control:!1},branchRid:{control:"text",description:"Global branch RID. Leave blank to use main. Changing the branch reloads the module."},defaultTheme:{control:"select",options:[void 0,"light","dark","system"],description:"Initial theme override. System resolves the browser preference once. Changing this control remounts the preview to apply the theme."},className:{control:"text"},style:{control:"object"}}},r={parameters:{docs:{source:{code:`<BaseWorkshopModule
  foundryUrl="https://example.palantirfoundry.com"
  moduleRid="ri.workshop.main.module.example"
  style={{ height: "24rem" }}
/>`}}}},s={args:{variables:{count:25,searchText:"Ada",includeArchived:!1}},parameters:{docs:{description:{story:"Use the external IDs of your module's scalar interface variables. Inputs update live, and Workshop edits are merged into the variables control. Requires a Foundry deployment with the Workshop embed integration."},source:{code:`const [variables, setVariables] = useState<WorkshopVariableValues>({ count: 25 });

<BaseWorkshopModule
  foundryUrl="https://example.palantirfoundry.com"
  moduleRid="ri.workshop.main.module.example"
  variables={variables}
  onVariablesChanged={(changes) =>
    setVariables((previous) => ({ ...previous, ...changes }))
  }
  style={{ height: "24rem" }}
/>`}}}},o={args:{variables:{selectedNames:["Ada","Grace"],thresholds:[10,25],enabledFlags:[!0,!1]}},parameters:{docs:{description:{story:"Arrays replace the whole list. Use [] for an empty list and null to clear the variable. Requires a Foundry deployment with list-variable support in the Workshop embed integration."},source:{code:`type ModuleVariables = { selectedNames: readonly string[] };
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
/>`}}}},a={args:{variables:{employees:{objectSetRid:"ri.object-set.main.temporary-object-set.example"}}},parameters:{docs:{description:{story:"Supply an object-set RID that Workshop's signed-in user can access. Workshop edits return the same reference shape; null clears the variable. Requires object-set support in the Workshop embed integration."},source:{code:`import type { WorkshopObjectSetValue, WorkshopVariableValues } from "@osdk/react-components/experimental/workshop-module";

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
/>`}}}};var d,p,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,m,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(m=s.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var b,y,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var g,k,V;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(V=(k=a.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};const I=["Default","Variables","Arrays","ObjectSets"];export{o as Arrays,r as Default,a as ObjectSets,s as Variables,I as __namedExportsOrder,B as default};
