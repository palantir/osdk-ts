import{j as r}from"./iframe-CIVlBFCn.js";import{O as b}from"./object-table-D9Q_ikSF.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BSieANlz.js";import{u as g}from"./useOsdkClient-DWpCnDKc.js";import"./preload-helper-B6mYsaJc.js";import"./Table-DZBaYXbE.js";import"./index-BQi6Abil.js";import"./Dialog-xUS2tuQU.js";import"./cross-D3bCQtqo.js";import"./svgIconContainer-1xBmK96Z.js";import"./useBaseUiId-Cyj56q5H.js";import"./InternalBackdrop-DDm_FHmN.js";import"./composite-Bp56YB0B.js";import"./index-CUBWxZlW.js";import"./index-CzaD-4Ts.js";import"./index-BHI7pjla.js";import"./useEventCallback-s8yM6zjT.js";import"./SkeletonBar-BYr110DW.js";import"./LoadingCell-BMFZr-G_.js";import"./ColumnConfigDialog-Bgzo5-pn.js";import"./DraggableList-DsASwHWG.js";import"./search-Cs4QzOir.js";import"./Input-Cvm-JmhM.js";import"./useControlled-CGspBM4Z.js";import"./isEqual-B4LCJh2e.js";import"./isObject-YbzMoxWR.js";import"./Button-BpMxh17E.js";import"./ActionButton-BW0Xstv0.js";import"./Checkbox-CiKvPBAD.js";import"./useValueChanged-DgcMUDnw.js";import"./CollapsiblePanel-CSoVN7zS.js";import"./MultiColumnSortDialog-CCNrU_89.js";import"./MenuTrigger-_NRYxiNX.js";import"./CompositeItem-BwbcMQJX.js";import"./ToolbarRootContext-DdrEfg7p.js";import"./getDisabledMountTransitionStyles-B-twLb_7.js";import"./getPseudoElementBounds-BiDP8mSE.js";import"./chevron-down-CtlSujAB.js";import"./index-Drqb8xJR.js";import"./error-CX8PxqwS.js";import"./BaseCbacBanner-B3OlMvKT.js";import"./makeExternalStore-C4HMHwO7.js";import"./Tooltip-DGd1zXdA.js";import"./PopoverPopup-C4GCHSK8.js";import"./toNumber-CsHgPj-_.js";import"./tick-DRN1ubyg.js";import"./DropdownField-DD8jwakx.js";import"./withOsdkMetrics-DGOG8EuQ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
