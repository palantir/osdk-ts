import{j as r}from"./iframe-Cwq9LQgh.js";import{O as b}from"./object-table-DUYwzwT-.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CFHjKjyA.js";import{u as g}from"./useOsdkClient-CYpWzT_O.js";import"./preload-helper-BwR6Pfp9.js";import"./Table-DBQdFyjh.js";import"./index-CtMIqXL_.js";import"./Dialog-BtzdOpOy.js";import"./cross-Dfvafrcv.js";import"./svgIconContainer-Dbb1xWM-.js";import"./useBaseUiId-D-o9ssMY.js";import"./InternalBackdrop-W9C_vQZ5.js";import"./composite-CN6FxDtP.js";import"./index-DWCgAU1r.js";import"./index-BEyE-4n9.js";import"./index-C6OOeUvK.js";import"./useEventCallback-Dvol8fVg.js";import"./SkeletonBar-ZRgqtK8J.js";import"./LoadingCell-BJ2ttYqs.js";import"./ColumnConfigDialog-Bt3KOXHF.js";import"./DraggableList-PJTZj0V4.js";import"./search-DyrwlR15.js";import"./Input-COyT4omE.js";import"./useControlled-BO63cc37.js";import"./Button-C7rjw-Q7.js";import"./small-cross-CmJytNPv.js";import"./ActionButton-DGHUEF7_.js";import"./Checkbox-CyIf6GSG.js";import"./useValueChanged-DfaWuJmu.js";import"./CollapsiblePanel-fliMZylf.js";import"./MultiColumnSortDialog-D-Dhg4ie.js";import"./MenuTrigger-C2camDfs.js";import"./CompositeItem-B62zciM4.js";import"./ToolbarRootContext-nSskdiih.js";import"./getDisabledMountTransitionStyles-EwNk7y8k.js";import"./getPseudoElementBounds-coD1VMym.js";import"./chevron-down-Cm38Y6L5.js";import"./index-C9VhUtVl.js";import"./error-DXeSegvi.js";import"./BaseCbacBanner-CYI7KT6N.js";import"./makeExternalStore-DDN6NSWJ.js";import"./Tooltip-BfRGVA3r.js";import"./PopoverPopup-CiWAYdx8.js";import"./debounce-VeRvPs6A.js";import"./tick-Stga4Wt2.js";import"./DropdownField-pOrv2Wux.js";import"./isEqual-DTFGN-6w.js";import"./withOsdkMetrics-CKuskwhT.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
