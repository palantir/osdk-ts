import{j as r}from"./iframe-CJTx5Nc3.js";import{O as b}from"./object-table-DyOqSe-8.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CB0Ek5ys.js";import{u as g}from"./useOsdkClient-CFJudYTm.js";import"./preload-helper-D-r58fd9.js";import"./Table-DA7olwlr.js";import"./index-C8rYvdZc.js";import"./Dialog-DlZ87JM_.js";import"./cross-CfGQeXwx.js";import"./svgIconContainer-BTsaG1Ft.js";import"./useBaseUiId-BzozfAEW.js";import"./InternalBackdrop-JVLM0CJL.js";import"./composite-Dz_mNTG5.js";import"./index-DGIB4jaL.js";import"./index-eHvJavxO.js";import"./index-CrDmHwix.js";import"./useEventCallback-CvmSibw0.js";import"./SkeletonBar-DnrDBLVU.js";import"./LoadingCell-DP2oEWNp.js";import"./ColumnConfigDialog-BWUt-9yZ.js";import"./DraggableList-DPZEgeQ0.js";import"./search-CjC9oxyN.js";import"./Input-ByoS9MHC.js";import"./useControlled-BBTN_Td4.js";import"./isEqual--jkB0sy4.js";import"./isObject-TJFlXUPA.js";import"./Button-DQWGETyO.js";import"./ActionButton-EZQQ7T9t.js";import"./Checkbox-D1eFT7vV.js";import"./useValueChanged-DBSeOQ5t.js";import"./CollapsiblePanel-CZ65pbEl.js";import"./MultiColumnSortDialog-Ds83I1sR.js";import"./MenuTrigger-CPWE0kcq.js";import"./CompositeItem-BY4abYzO.js";import"./ToolbarRootContext-B0uHWv9_.js";import"./getDisabledMountTransitionStyles-D6YGvq-L.js";import"./getPseudoElementBounds-BM5Y6tz_.js";import"./chevron-down-CXfwTRt6.js";import"./index-IEnbKD5-.js";import"./error-K1PirtOR.js";import"./BaseCbacBanner-BohDFMCb.js";import"./makeExternalStore-Dns-qLi8.js";import"./Tooltip-cN5GRFi4.js";import"./PopoverPopup-mDbyrgV-.js";import"./toNumber-DvrP7yL-.js";import"./tick-Bnbd9C_X.js";import"./DropdownField-C7J7DVpc.js";import"./withOsdkMetrics-CJf0ufYd.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
