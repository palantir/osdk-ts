import{j as r}from"./iframe-CWeddnom.js";import{O as b}from"./object-table-Cmk1Tq7o.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DF3MyxQN.js";import{u as g}from"./useOsdkClient-CkY_R6LW.js";import"./preload-helper-P6cBfe2q.js";import"./Table-CAg7JBCr.js";import"./index-Ce_LLk-c.js";import"./Dialog-DmJOQXeH.js";import"./cross-Dfng7QTU.js";import"./svgIconContainer-DmSfLyH4.js";import"./useBaseUiId-BHqcFBZd.js";import"./InternalBackdrop-CUe8mTus.js";import"./composite-4vKCxbin.js";import"./index-C-EhxOhv.js";import"./index-DmTK8ivk.js";import"./index-BKOWYi9Q.js";import"./useEventCallback-BLR7QFGQ.js";import"./SkeletonBar-DSJtFa11.js";import"./LoadingCell-DyoT1BNV.js";import"./ColumnConfigDialog-D4S5CB4u.js";import"./DraggableList-CJQgDYL-.js";import"./search-DgtO9tzy.js";import"./Input-DKw_pk-9.js";import"./useControlled-D25GPjW5.js";import"./Button-B3SaH4FN.js";import"./small-cross-BRS5cwBI.js";import"./ActionButton-lh-w21Ih.js";import"./Checkbox-DnottsQR.js";import"./useValueChanged-D1MsbkTY.js";import"./CollapsiblePanel-11i6tH5E.js";import"./MultiColumnSortDialog-DNGEJFI2.js";import"./MenuTrigger-D0XdkPwu.js";import"./CompositeItem-cY4WW7Zc.js";import"./ToolbarRootContext-Dr7NuLF0.js";import"./getDisabledMountTransitionStyles-CiLe7hHe.js";import"./getPseudoElementBounds-Gi24AHc2.js";import"./chevron-down-KrLWmTY_.js";import"./index-J0u8aPtF.js";import"./error-B2dkz28B.js";import"./BaseCbacBanner-HikvfUlP.js";import"./makeExternalStore-Cr_BtxbS.js";import"./Tooltip-CUH0BAfU.js";import"./PopoverPopup-CZL41Qwp.js";import"./debounce-COR7M_m6.js";import"./tick-nc1mWgQb.js";import"./DropdownField-BPGrCOqN.js";import"./isEqual-BOrxupAe.js";import"./withOsdkMetrics-DJ5t4kKo.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
