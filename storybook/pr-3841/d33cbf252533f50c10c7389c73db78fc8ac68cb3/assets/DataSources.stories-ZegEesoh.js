import{j as r}from"./iframe-B8G1jItW.js";import{O as b}from"./object-table-k-UfENXm.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CA6pUMU9.js";import{u as g}from"./useOsdkClient-DBY3KNGZ.js";import"./preload-helper-B1IURV7o.js";import"./Table-BwElsE2a.js";import"./index-DB13g_6W.js";import"./Dialog-CsnA13_u.js";import"./cross-CZEt4CQ9.js";import"./svgIconContainer-CB3cR2O2.js";import"./useBaseUiId-S4IVgEx3.js";import"./InternalBackdrop-C20G---M.js";import"./composite-DlSXVEG5.js";import"./index-ad9AYhfW.js";import"./index-COXmaWmi.js";import"./index-HEN-Pfmt.js";import"./useEventCallback-sCqLMStA.js";import"./SkeletonBar-DP27X8f1.js";import"./LoadingCell-8me7lGG_.js";import"./ColumnConfigDialog-BK8EX9Ja.js";import"./DraggableList-CKwGoZCZ.js";import"./search-GKgaZqTV.js";import"./Input-D7bf_syM.js";import"./useControlled-Bxr4Vh5_.js";import"./Button-Bq6MDfzu.js";import"./small-cross-DqO0yT6m.js";import"./ActionButton-avzkQ9at.js";import"./Checkbox-BTIiX3dV.js";import"./useValueChanged-DNSQAzpI.js";import"./CollapsiblePanel-Dh2wBANq.js";import"./MultiColumnSortDialog-Dw3NJlo9.js";import"./MenuTrigger-jLSwLtFH.js";import"./CompositeItem-DppqfLhH.js";import"./ToolbarRootContext-DNpt4PCI.js";import"./getDisabledMountTransitionStyles-BSxcypJ-.js";import"./getPseudoElementBounds-F1Xvk9J_.js";import"./chevron-down-CSSbm5fQ.js";import"./index-w8Xrn1oV.js";import"./error-BcGqswAb.js";import"./BaseCbacBanner-B1FxIqOJ.js";import"./makeExternalStore-ByyfvAII.js";import"./Tooltip-BSwHpWu9.js";import"./PopoverPopup-B695G3fz.js";import"./debounce-OG7_ZmsP.js";import"./tick-Bs7VXaZc.js";import"./DropdownField-lFeyoiMB.js";import"./isEqual-BL8MlQOH.js";import"./withOsdkMetrics-Bg8xFEho.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
