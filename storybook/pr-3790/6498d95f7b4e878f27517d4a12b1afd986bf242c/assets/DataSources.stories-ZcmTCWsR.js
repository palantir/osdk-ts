import{j as r}from"./iframe-CDGAWL5z.js";import{O as b}from"./object-table-DtXQYtP2.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DeMDbJw_.js";import{u as g}from"./useOsdkClient-Dkt3V3jM.js";import"./preload-helper-CI5YRKwA.js";import"./Table-DLf6dOM5.js";import"./index-3MCsyJen.js";import"./Dialog-Gmy4msys.js";import"./cross-BeVSOrEe.js";import"./svgIconContainer-Dcej3m5n.js";import"./useBaseUiId-DY77c4-A.js";import"./InternalBackdrop-BVMsH6hp.js";import"./composite-BFqrbf78.js";import"./index-BUnuXFxA.js";import"./index-CZEvu-cD.js";import"./index-DM6_L-S2.js";import"./useEventCallback-CurJQDBH.js";import"./SkeletonBar-B1robTcF.js";import"./LoadingCell-BnzujRh0.js";import"./ColumnConfigDialog-BzzNFXDq.js";import"./DraggableList-tWeCPBYW.js";import"./search-BrgQI2y6.js";import"./Input-B1WQ9LTD.js";import"./useControlled-xutsfVXO.js";import"./isEqual-Bja32Sem.js";import"./isObject-JyW4d2OA.js";import"./Button-XNbmfuiS.js";import"./ActionButton-C2x0RC9m.js";import"./Checkbox-XoF4FZ1X.js";import"./useValueChanged-CXVUyp3K.js";import"./CollapsiblePanel-D5hccQ-X.js";import"./MultiColumnSortDialog-DUYJZ_uN.js";import"./MenuTrigger-DpLR4WSl.js";import"./CompositeItem-Cl4JUDwX.js";import"./ToolbarRootContext-CTDwZ0pE.js";import"./getDisabledMountTransitionStyles-xoor5amX.js";import"./getPseudoElementBounds-WES_yW35.js";import"./chevron-down-dvsoYA_H.js";import"./index-CLEKU3H0.js";import"./error-q7YHjSp-.js";import"./BaseCbacBanner-Bqi4-Jcc.js";import"./makeExternalStore-ql6Iw7cR.js";import"./Tooltip-DfyX7Dwe.js";import"./PopoverPopup-HHAC8mLC.js";import"./toNumber-B7X19R9_.js";import"./tick-Bf0agguz.js";import"./DropdownField-C3mpb7DV.js";import"./withOsdkMetrics-BT43AOFX.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
