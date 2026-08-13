import{j as r}from"./iframe-HkADxMgA.js";import{O as b}from"./object-table-BPD1qlMS.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-aRw_WeTp.js";import{u as g}from"./useOsdkClient-BUObA5LC.js";import"./preload-helper-DTtqGHxT.js";import"./Table-BBDxoEZg.js";import"./index-DUW8wRrQ.js";import"./Dialog-C1cC5oO0.js";import"./cross-BJLKHlwA.js";import"./svgIconContainer-uqcLMh9h.js";import"./useBaseUiId-B28qMeqB.js";import"./InternalBackdrop-KSJdc-Eh.js";import"./composite-Bshgoqdb.js";import"./index-_47i1T5T.js";import"./index-CCQw_l8A.js";import"./index-D4OnPD6V.js";import"./useEventCallback-BT13A2s8.js";import"./SkeletonBar-BR_z_H5s.js";import"./LoadingCell-CXRScZCO.js";import"./ColumnConfigDialog-CIM34A1V.js";import"./DraggableList-BFgNNJKw.js";import"./search-oee3a-xy.js";import"./Input-CdSqdp7n.js";import"./useControlled-0FKUHHKR.js";import"./Button-DXksPsq1.js";import"./small-cross-DtnBRH_a.js";import"./ActionButton-DFp4Eahm.js";import"./Checkbox-CdSHxSSr.js";import"./useValueChanged-CLKZqZ1n.js";import"./CollapsiblePanel-yZRRBOeb.js";import"./MultiColumnSortDialog-DrYKmP3m.js";import"./MenuTrigger-B0q9NtM8.js";import"./CompositeItem-DIBhAm7K.js";import"./ToolbarRootContext-B2D7jBHZ.js";import"./getDisabledMountTransitionStyles-D_z8sWSZ.js";import"./getPseudoElementBounds-CV6q-bAI.js";import"./chevron-down-7aN-gdcZ.js";import"./index-AGvrmZqA.js";import"./error-WFtpCqwH.js";import"./BaseCbacBanner-MiPOlZwj.js";import"./makeExternalStore-XFQAED1_.js";import"./Tooltip-6u6XECjM.js";import"./PopoverPopup-C8dD0wlV.js";import"./toNumber-CFUI-sBy.js";import"./tick-zwZIIcdN.js";import"./DropdownField-DV-Des1S.js";import"./withOsdkMetrics-CS878clc.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,Te={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const je=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,je as __namedExportsOrder,Te as default};
