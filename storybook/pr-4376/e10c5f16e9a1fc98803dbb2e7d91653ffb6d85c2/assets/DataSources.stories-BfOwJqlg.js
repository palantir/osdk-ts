import{j as r}from"./iframe-tk5AUZuQ.js";import{O as b}from"./object-table-B_m970Gp.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-VHo4Larl.js";import{u as g}from"./useOsdkClient-B-_8O7Wa.js";import"./preload-helper-CINJU3SU.js";import"./Table-DC4X-uKs.js";import"./index-DuoNBOcE.js";import"./Dialog-5aT20vLM.js";import"./cross-C-_HClWz.js";import"./svgIconContainer-C5eLdvbo.js";import"./useBaseUiId-DSKlezyU.js";import"./InternalBackdrop-B1AcuPvD.js";import"./composite-LaLb1mLt.js";import"./index-BoTbZ6Eb.js";import"./index-BCbjIOTn.js";import"./index-Coh0vjFh.js";import"./useEventCallback-BbRxqcyb.js";import"./SkeletonBar-YPfduG_R.js";import"./LoadingCell-Dcb9Vptb.js";import"./ColumnConfigDialog-DkCfAbb3.js";import"./DraggableList-D8LQyDx5.js";import"./search-CAMWt4DD.js";import"./Input-CZRpfSVM.js";import"./useControlled-BzYqp0YL.js";import"./Button-B5FtVpF4.js";import"./small-cross-B6tNLRU3.js";import"./ActionButton-CSRDKJzd.js";import"./Checkbox-DL47pYZc.js";import"./useValueChanged-Qi24qjjR.js";import"./CollapsiblePanel-BgTDE-ug.js";import"./MultiColumnSortDialog-xg5nxqpK.js";import"./MenuTrigger-D2vzXfUF.js";import"./CompositeItem-CQdT7qYH.js";import"./ToolbarRootContext-C3aNx3mE.js";import"./getDisabledMountTransitionStyles-DcBMmwJ-.js";import"./getPseudoElementBounds-C8QTD5NE.js";import"./chevron-down-D4rOKL_0.js";import"./index-iwECcacA.js";import"./error-CfTX2H1b.js";import"./BaseCbacBanner-CiTwUt4I.js";import"./makeExternalStore-DFFv7LCN.js";import"./Tooltip-_BU6PSEL.js";import"./isObject-Bt_3d07L.js";import"./debounce-Cf1xBobb.js";import"./tick-BxfSV4pS.js";import"./DropdownField-Dsmc1z3i.js";import"./isEqual-CSe4j5db.js";import"./_baseIsEqual-DGYeXd6K.js";import"./withOsdkMetrics-4LSmwfdk.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
