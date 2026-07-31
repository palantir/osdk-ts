import{j as r}from"./iframe-DPayKrhQ.js";import{O as b}from"./object-table-B9Cot5_e.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ChunCNB7.js";import{u as g}from"./useOsdkClient-1yazevnu.js";import"./preload-helper-qQf5mZcY.js";import"./Table-DpNUkHqO.js";import"./index-DWKYvG9V.js";import"./Dialog-DLJV3Let.js";import"./cross-C2IePcD5.js";import"./svgIconContainer-ENB8v_KB.js";import"./useBaseUiId-DNI8EcAR.js";import"./InternalBackdrop-_-1pH0uj.js";import"./composite-Cke6VlZT.js";import"./index-Xjpnzzz2.js";import"./index-BrP54DIT.js";import"./index-BDcq1o5X.js";import"./useEventCallback-B4jrKNvR.js";import"./SkeletonBar-BauOl873.js";import"./LoadingCell-B1RE063u.js";import"./ColumnConfigDialog-D8Gevhnq.js";import"./DraggableList-DdgzPp3Y.js";import"./search-DgJNyoZT.js";import"./Input-CNbFsRtW.js";import"./useControlled-SvDubTm2.js";import"./isEqual-C5d_5--M.js";import"./isObject-DL2rK0zG.js";import"./Button-CX965R45.js";import"./ActionButton-Dqf4PoFn.js";import"./Checkbox-DR9VQhFH.js";import"./useValueChanged-XcJizfeE.js";import"./CollapsiblePanel-0zIu0Nif.js";import"./MultiColumnSortDialog-CErS638w.js";import"./MenuTrigger-CL62zHVu.js";import"./CompositeItem-Bb4siO63.js";import"./ToolbarRootContext-2Pb0-xcD.js";import"./getDisabledMountTransitionStyles-CUQ_krqB.js";import"./getPseudoElementBounds-DMPlx4hK.js";import"./chevron-down-oMnKKoWq.js";import"./index-CUEs57Ga.js";import"./error-CXgnUpf7.js";import"./BaseCbacBanner-C-zOFOZW.js";import"./makeExternalStore-DNQ6k_aA.js";import"./Tooltip-B1kqF3D7.js";import"./PopoverPopup-DW1jv2JB.js";import"./toNumber-CJKhmsSm.js";import"./tick-Vlw-qjz7.js";import"./DropdownField-C1AjTguU.js";import"./withOsdkMetrics-BEB15fyq.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
