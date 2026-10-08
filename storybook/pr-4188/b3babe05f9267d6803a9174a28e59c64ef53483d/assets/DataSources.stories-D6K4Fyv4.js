import{j as r}from"./iframe-Ds_0fUNG.js";import{O as b}from"./object-table-CDMrvtYv.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bw1iKuA9.js";import{u as g}from"./useOsdkClient-MZwKjimd.js";import"./preload-helper-rl_3IysT.js";import"./Table-NV-Z6jrK.js";import"./index-CfHbFnsm.js";import"./Dialog-QtB8jaP-.js";import"./cross-CPIn0YCt.js";import"./svgIconContainer-Bnjtz_zA.js";import"./useBaseUiId-BTcKJi-m.js";import"./InternalBackdrop-DglM94TH.js";import"./composite-BQp92XLf.js";import"./index-B3M6RB_Y.js";import"./index-BcshOSPh.js";import"./index--pKFQ4Lz.js";import"./useEventCallback-Bj0Lmw5H.js";import"./SkeletonBar-L7SILJmc.js";import"./LoadingCell-CHvHj1gL.js";import"./ColumnConfigDialog-0chAKSCD.js";import"./DraggableList-C23oUVV2.js";import"./search-D8R0XkDu.js";import"./Input-DML-f9Nt.js";import"./useControlled-BJ5XCIhk.js";import"./Button-BIMxSH7M.js";import"./small-cross-Dz6lKUNI.js";import"./ActionButton-Bt69IyHY.js";import"./Checkbox-N-ofHEBa.js";import"./useValueChanged-DNt4iD_c.js";import"./CollapsiblePanel-aLSMls02.js";import"./MultiColumnSortDialog-CdsAFBTS.js";import"./MenuTrigger-B5iErPwW.js";import"./CompositeItem-Cd9-IsCw.js";import"./ToolbarRootContext-WaLBUvtM.js";import"./getDisabledMountTransitionStyles-Dx8Now2z.js";import"./getPseudoElementBounds-DMltA1Ta.js";import"./chevron-down-QYpALvW6.js";import"./index-Xp60VzFy.js";import"./error-BqmstoPM.js";import"./BaseCbacBanner-AJhvy395.js";import"./makeExternalStore-pijIp4DO.js";import"./Tooltip-C_aXZE6C.js";import"./PopoverPopup-ByN3B_TH.js";import"./debounce-Biv857Xj.js";import"./tick-AwKzn_MI.js";import"./DropdownField-DsGQRL42.js";import"./isEqual-Cje0TKXT.js";import"./withOsdkMetrics-Bofw38ai.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`}}},render:t=>{const T=g()(i).where({jobProfile:"Marketing Manager"});return r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t,objectType:i,objectSet:T})})},play:async({canvasElement:t})=>{const e=d(t);await e.findAllByText("Marketing Manager"),await n(e.getAllByText("Marketing Manager").length).toBeGreaterThan(1),await n(e.queryByText("Content Manager")).not.toBeInTheDocument()}},o={args:{objectType:u},parameters:{docs:{description:{story:"Pass an interface type instead of an object type. The table shows the interface's properties (email, name, employeeNumber) and any object implementing the interface will be displayed."},source:{code:`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />`}}},render:t=>r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t})}),play:async({canvasElement:t})=>{const e=d(t);await e.findByText(h),await n(e.getByText("Name")).toBeInTheDocument(),await n(e.getByText("Email")).toBeInTheDocument()}};var c,s,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      source: {
        code: \`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />\`
      }
    }
  },
  render: args => {
    const client = useOsdkClient();
    const employeeObjectSet = client(Employee).where({
      jobProfile: "Marketing Manager"
    });
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <ObjectTable {...args} objectType={Employee} objectSet={employeeObjectSet} />
      </div>;
  },
  // The object set is filtered to \`jobProfile: "Marketing Manager"\`
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Wait for the (MSW-mocked) rows to load.
    await canvas.findAllByText("Marketing Manager");
    await expect(canvas.getAllByText("Marketing Manager").length).toBeGreaterThan(1);
    await expect(canvas.queryByText("Content Manager")).not.toBeInTheDocument();
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,l,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    objectType: WorkerInterface as unknown as typeof Employee
  },
  parameters: {
    docs: {
      description: {
        story: "Pass an interface type instead of an object type. The table shows the interface's " + "properties (email, name, employeeNumber) and any object implementing the interface " + "will be displayed."
      },
      source: {
        code: \`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // The interface exposes name/email/employeeNumber; objects implementing it
  // (Employees) render with those mapped properties (name ← fullName).
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Interface "name" maps to the Employee's fullName.
    await canvas.findByText(TARGET_DATA);

    // The interface's columns are shown by their display names.
    await expect(canvas.getByText("Name")).toBeInTheDocument();
    await expect(canvas.getByText("Email")).toBeInTheDocument();
  }
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const fe=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,fe as __namedExportsOrder,je as default};
