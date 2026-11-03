import{j as r}from"./iframe-CH27AqHZ.js";import{O as b}from"./object-table-CkoI542e.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bn04i390.js";import{u as g}from"./useOsdkClient-DOGyfDWc.js";import"./preload-helper-DGi0xS-h.js";import"./Table-CH_NPSwe.js";import"./index-D1s_GF0g.js";import"./Dialog-BO88dVa7.js";import"./cross-wK4dNyGg.js";import"./svgIconContainer-CAAPLquq.js";import"./useBaseUiId-Bqw5UKiE.js";import"./InternalBackdrop-Evn3ET9-.js";import"./composite-C0QdjDW_.js";import"./index-w-QWzjNw.js";import"./index-idKZoric.js";import"./index-lRC7FyDu.js";import"./useEventCallback-BFq5H1RT.js";import"./SkeletonBar-B3ahzSk9.js";import"./LoadingCell-VcDh5duI.js";import"./ColumnConfigDialog-CNI_Akv4.js";import"./DraggableList-DbhEH_qG.js";import"./search-BvrU7tK_.js";import"./Input-BZHUVJPq.js";import"./useControlled-bZT9hVeg.js";import"./Button-C_aQELrm.js";import"./small-cross-20hmyH-H.js";import"./ActionButton-D3WKqPWv.js";import"./Checkbox-DDWJRWmN.js";import"./useValueChanged-NcbXJrC1.js";import"./CollapsiblePanel-BPS1IKxI.js";import"./MultiColumnSortDialog-YjUETmiQ.js";import"./MenuTrigger-CA2X_MRB.js";import"./CompositeItem-Bp-0qryG.js";import"./ToolbarRootContext-CS86aP8Z.js";import"./getDisabledMountTransitionStyles-BC1jSC_a.js";import"./getPseudoElementBounds-CtFtcdYV.js";import"./chevron-down-BknLO_BB.js";import"./index-CyGPth6m.js";import"./error-ADuRb4lm.js";import"./BaseCbacBanner-lOIAIJ4-.js";import"./makeExternalStore-D2OeNChh.js";import"./Tooltip-Bz17X0U3.js";import"./PopoverPopup-dBkoEvm7.js";import"./debounce-DQvh5AcE.js";import"./tick-BpVCvq9_.js";import"./DropdownField-Xq1F_pI0.js";import"./isEqual-iLCg8Cj2.js";import"./withOsdkMetrics-w7ir5H-Z.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
