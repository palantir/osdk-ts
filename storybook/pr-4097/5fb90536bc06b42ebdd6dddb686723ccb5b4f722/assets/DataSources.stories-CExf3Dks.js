import{j as r}from"./iframe-BLUQ5n2c.js";import{O as b}from"./object-table-BJvkeLAv.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D_xFsqxu.js";import{u as g}from"./useOsdkClient-vyzs8V6e.js";import"./preload-helper-DMlP9NYW.js";import"./Table-BzDrSoDv.js";import"./index-CsLnk6pi.js";import"./Dialog-CPph2Z9X.js";import"./cross-lsoPApi8.js";import"./svgIconContainer-Cp4hDvLL.js";import"./useBaseUiId-BeXNNW2Y.js";import"./InternalBackdrop-CSoztZdj.js";import"./composite-DpCo7vDA.js";import"./index-CRHr79L0.js";import"./index-3ijF1jpZ.js";import"./index-Cu1ZahnW.js";import"./useEventCallback-Bj8tWb2p.js";import"./SkeletonBar-CkH9gL38.js";import"./LoadingCell-BFm_IhfR.js";import"./ColumnConfigDialog-BCD7IAOK.js";import"./DraggableList-DtXpJvTm.js";import"./search-BxVXVDMi.js";import"./Input-CJtdNhxn.js";import"./useControlled-B201dL0t.js";import"./Button-SHEnCOjG.js";import"./small-cross-PSmIAOl0.js";import"./ActionButton-D86_SLzn.js";import"./Checkbox-CrtpiRPG.js";import"./useValueChanged-DRWNLZgS.js";import"./CollapsiblePanel-YVQttI65.js";import"./MultiColumnSortDialog-D7RRsETP.js";import"./MenuTrigger-Cn5L-B4M.js";import"./CompositeItem-BFmGj5TY.js";import"./ToolbarRootContext-DgTgfzIH.js";import"./getDisabledMountTransitionStyles-Bhs6m7gR.js";import"./getPseudoElementBounds-BUU7Awzx.js";import"./chevron-down-5sopWHZC.js";import"./index-C0S21z2f.js";import"./error-CimK2De2.js";import"./BaseCbacBanner-BJtZEIgT.js";import"./makeExternalStore-cNeOPsE8.js";import"./Tooltip-DrCIXT4c.js";import"./PopoverPopup-CZdF7XOC.js";import"./debounce-CALuRR5X.js";import"./tick-DbzhA004.js";import"./DropdownField-Bm51UKRg.js";import"./isEqual-DR8RDtey.js";import"./withOsdkMetrics-XVg1B84_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
