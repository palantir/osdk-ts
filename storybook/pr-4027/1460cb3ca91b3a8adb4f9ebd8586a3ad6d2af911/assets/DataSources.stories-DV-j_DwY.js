import{j as r}from"./iframe-CFQ9G3uO.js";import{O as b}from"./object-table-CAVdkrL4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CTOYn_2h.js";import{u as g}from"./useOsdkClient-B973Ur3i.js";import"./preload-helper-B1ZvWZ1B.js";import"./Table-ByICRVtb.js";import"./index-BrTT1QYM.js";import"./Dialog-CMmdBSHE.js";import"./cross-Th924Xj2.js";import"./svgIconContainer-UNIpHB70.js";import"./useBaseUiId-DR9MpHDU.js";import"./InternalBackdrop-BYUzzxg5.js";import"./composite-CcP6OIrf.js";import"./index-ByJ4X6uH.js";import"./index-B2hmf6ar.js";import"./index-Dlk-dVgZ.js";import"./useEventCallback-D2dYS9c-.js";import"./SkeletonBar-BZja4E16.js";import"./LoadingCell-BjO_-sdZ.js";import"./ColumnConfigDialog-DcslyDjj.js";import"./DraggableList-Brn3iCp5.js";import"./search-2qv0O4T5.js";import"./Input-DXZODgk0.js";import"./useControlled-CZXT8yrt.js";import"./Button-CE7esyC3.js";import"./small-cross-BEf2AWPD.js";import"./ActionButton-DNlorvJl.js";import"./Checkbox-BPLCKRPV.js";import"./useValueChanged-BKOHDyr1.js";import"./CollapsiblePanel-C0s5Hv5w.js";import"./MultiColumnSortDialog-BcTOUSHc.js";import"./MenuTrigger-BqTI-aoy.js";import"./CompositeItem-Dm-ge3S4.js";import"./ToolbarRootContext-DzjMBLGA.js";import"./getDisabledMountTransitionStyles-VkjRSqjD.js";import"./getPseudoElementBounds-C-ZD0-Sf.js";import"./chevron-down-Cu6k6Z5N.js";import"./index-Clq14PWf.js";import"./error-CP69BMiN.js";import"./BaseCbacBanner-Dgyzb5Y3.js";import"./makeExternalStore-Dcan_kEv.js";import"./Tooltip-Chj9n8Fk.js";import"./PopoverPopup-D2AzS4JP.js";import"./debounce-CjSFYMGi.js";import"./tick-C6f5jokZ.js";import"./DropdownField-DOW2Yrq8.js";import"./isEqual-NY24Vuy-.js";import"./withOsdkMetrics-BOULM9w0.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
