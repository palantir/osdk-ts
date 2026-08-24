import{j as r}from"./iframe-DcMbTmRa.js";import{O as b}from"./object-table-RQbvyDet.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-u-6PtNtC.js";import{u as g}from"./useOsdkClient-uzO2rWFv.js";import"./preload-helper-C7g9GPtA.js";import"./Table-BPyCz4oN.js";import"./index-C60lWWNc.js";import"./Dialog-_Okoz0Me.js";import"./cross-CvsAEbe5.js";import"./svgIconContainer-Dtbx0Dqw.js";import"./useBaseUiId-BoE0CJkX.js";import"./InternalBackdrop-CBppXo8q.js";import"./composite-D9rv3OCk.js";import"./index-8cdMoAmx.js";import"./index-BX5mDqBN.js";import"./index-CWUm4wyT.js";import"./useEventCallback-BxBZ6Q_C.js";import"./SkeletonBar-BFt0iUHq.js";import"./LoadingCell-OD2VOljE.js";import"./ColumnConfigDialog-D-Pdo4ZV.js";import"./DraggableList-BbPqHYfh.js";import"./search-TrEbjpAG.js";import"./Input-CODDUPe4.js";import"./useControlled-DRUQL6h1.js";import"./Button-DwdrXcb7.js";import"./small-cross-B_gXyj8o.js";import"./ActionButton-DuEqwWBd.js";import"./Checkbox-CbqQLQcn.js";import"./useValueChanged-BS7pYpJf.js";import"./CollapsiblePanel-Dr2wSz6F.js";import"./MultiColumnSortDialog-Dec-5vDH.js";import"./MenuTrigger-DF7tK1Vd.js";import"./CompositeItem-BsY89uKf.js";import"./ToolbarRootContext-D6zdw_WQ.js";import"./getDisabledMountTransitionStyles-DunnftaS.js";import"./getPseudoElementBounds-B9qfwwcj.js";import"./chevron-down-C8iVK9bf.js";import"./index-JAMdWW7E.js";import"./error-D9-VUnqg.js";import"./BaseCbacBanner-CftHJWcR.js";import"./makeExternalStore-Cd9hU_OQ.js";import"./Tooltip-tqvCkPOz.js";import"./PopoverPopup-RlIhsigx.js";import"./debounce-B9j-duvu.js";import"./tick-BLU3AcFY.js";import"./DropdownField-DeOqCMrz.js";import"./isEqual-BrRjolNL.js";import"./withOsdkMetrics-BT35iGvu.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
