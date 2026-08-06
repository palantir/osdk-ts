import{j as r}from"./iframe-B4TxBOgD.js";import{O as b}from"./object-table-BXUU4i3s.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CdbdnC1m.js";import{u as g}from"./useOsdkClient-qMlSffSE.js";import"./preload-helper-BImTr8XW.js";import"./Table-Cl9fVu8V.js";import"./index-CewbiS0-.js";import"./Dialog-BqbO7wc8.js";import"./cross-hsr1UFQF.js";import"./svgIconContainer-BdVqbaHA.js";import"./useBaseUiId-DGDWvpff.js";import"./InternalBackdrop-Cb9YWrJj.js";import"./composite-CdnlLAO5.js";import"./index-Da0oW1Pt.js";import"./index-BQOT9bMM.js";import"./index-yw2IcMRc.js";import"./useEventCallback-C8aiku-x.js";import"./SkeletonBar-DG8Xm3s9.js";import"./LoadingCell-B4nls2yn.js";import"./ColumnConfigDialog-D_K60j1r.js";import"./DraggableList-BPsTmD45.js";import"./search-B3z6PcWR.js";import"./Input-BegfCSSS.js";import"./useControlled-C5WozG_u.js";import"./isEqual-DHGC0vVF.js";import"./isObject-CFmOY1gj.js";import"./Button-C3hoplQB.js";import"./ActionButton-CU3iPuAb.js";import"./Checkbox-Cfg5IKtW.js";import"./useValueChanged-DU2ktiK8.js";import"./CollapsiblePanel-lVLOzwx5.js";import"./MultiColumnSortDialog-D9upH0BI.js";import"./MenuTrigger-C65x4IPJ.js";import"./CompositeItem-D_uU8YUN.js";import"./ToolbarRootContext-SUr-GoJT.js";import"./getDisabledMountTransitionStyles-B_1CmVQ9.js";import"./getPseudoElementBounds-Cqn9HlA0.js";import"./chevron-down-9K24iL1H.js";import"./index-DL0nRe0P.js";import"./error-BpJdqfq0.js";import"./BaseCbacBanner-BxYpzwz6.js";import"./makeExternalStore-7PAAW5FV.js";import"./Tooltip-W37lKcMg.js";import"./PopoverPopup-wxIHZwOO.js";import"./toNumber-CWrjRpqY.js";import"./tick-Cy11cge5.js";import"./DropdownField-Bzz5Z8gc.js";import"./withOsdkMetrics-D8u8gP3a.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
