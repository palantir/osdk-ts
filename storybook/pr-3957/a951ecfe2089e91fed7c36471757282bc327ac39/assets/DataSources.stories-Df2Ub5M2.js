import{j as r}from"./iframe-C9qhmNcZ.js";import{O as b}from"./object-table-RDjCkhrw.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ClK7q1sc.js";import{u as g}from"./useOsdkClient-CZBXaSe4.js";import"./preload-helper-wNbJb-Pp.js";import"./Table-Nh8gMrCA.js";import"./index-B8P3LB4x.js";import"./Dialog-Df2SSlRS.js";import"./cross-DabX7tW-.js";import"./svgIconContainer-_uLEbp2C.js";import"./useBaseUiId-BTthXH_t.js";import"./InternalBackdrop-CgJ7ZQ7K.js";import"./composite-z0XknHYc.js";import"./index-DsqCXRoD.js";import"./index-DqJwTMkP.js";import"./index-CqvxxowX.js";import"./useEventCallback-DaBlRRBo.js";import"./SkeletonBar-EKMH7dnu.js";import"./LoadingCell-DC6J4sE1.js";import"./ColumnConfigDialog-Dyq2_1MI.js";import"./DraggableList-S6M-4kd_.js";import"./search-BDZY5Txu.js";import"./Input-BAGZIUmV.js";import"./useControlled-BTlBSM6y.js";import"./Button-HuNNWrG7.js";import"./small-cross-v2H6eOD9.js";import"./ActionButton-CZp7gXsO.js";import"./Checkbox-B7m0CtgI.js";import"./useValueChanged-VNxj8dRl.js";import"./CollapsiblePanel-BvRA97qN.js";import"./MultiColumnSortDialog-Bs1VnL9V.js";import"./MenuTrigger-C7UQv66O.js";import"./CompositeItem-CA3YvoYV.js";import"./ToolbarRootContext-tAljMxWu.js";import"./getDisabledMountTransitionStyles-_-80yZua.js";import"./getPseudoElementBounds-vWw3gXmS.js";import"./chevron-down-CJK_UNyE.js";import"./index-7d_bwMVc.js";import"./error-Pw2WsETW.js";import"./BaseCbacBanner-BKt2Rvts.js";import"./makeExternalStore-D9Eq3Efe.js";import"./Tooltip-D942ZPAo.js";import"./PopoverPopup-CVg99Xmz.js";import"./debounce-DAIWBKzq.js";import"./tick-BB4s_qlQ.js";import"./DropdownField-o7TutVQ3.js";import"./isEqual-DBoLl1ZU.js";import"./withOsdkMetrics-COlZnM_t.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
