import{j as r}from"./iframe-BBlRBgNm.js";import{O as b}from"./object-table-DASSQ9GQ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B33-apUR.js";import{u as g}from"./useOsdkClient-BHUBDa2P.js";import"./preload-helper-nUcndVB1.js";import"./Table-DoCE0_ta.js";import"./index-BZqLTchK.js";import"./Dialog-BN1Ll_Mt.js";import"./cross-wqLIhFuX.js";import"./svgIconContainer-DOveKI2E.js";import"./useBaseUiId-CY9tAtRf.js";import"./InternalBackdrop-B3cUMuwX.js";import"./composite-D1tYMIIj.js";import"./index-CDRFlmxs.js";import"./index-BxiEEyZP.js";import"./index-Dpur4ZgS.js";import"./useEventCallback-DPcgSbs7.js";import"./SkeletonBar-DItZ6pPc.js";import"./LoadingCell-CFJHl2W3.js";import"./ColumnConfigDialog-C6EXlW4L.js";import"./DraggableList-CZvDb2Rs.js";import"./search-BWru_8ZJ.js";import"./Input-iZ0inZPU.js";import"./useControlled-BArMeZNp.js";import"./Button-rAV1gEhG.js";import"./small-cross-DZQdemxI.js";import"./ActionButton-slRltjTn.js";import"./Checkbox-Cd6hrv29.js";import"./useValueChanged-MzDo2j3C.js";import"./CollapsiblePanel-BX6aE7S7.js";import"./MultiColumnSortDialog-DbZOZ_cP.js";import"./MenuTrigger-X5QPubPN.js";import"./CompositeItem-TLen8WtJ.js";import"./ToolbarRootContext-DE0PC0Rd.js";import"./getDisabledMountTransitionStyles-ysFhXVzU.js";import"./getPseudoElementBounds-pR_ilbUx.js";import"./chevron-down-796VQilV.js";import"./index-BeqmCVha.js";import"./error-CSd4pgb3.js";import"./BaseCbacBanner-5pe5EgoM.js";import"./makeExternalStore-CAu16bqE.js";import"./Tooltip-Bf9OdCcy.js";import"./PopoverPopup-CV19ssg7.js";import"./toNumber-CURGE_Tq.js";import"./tick-BBDpiVWD.js";import"./DropdownField-DLmWQ22W.js";import"./withOsdkMetrics-Cmjq74if.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,Te={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
