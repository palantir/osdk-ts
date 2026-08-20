import{j as r}from"./iframe-CRdHGtB4.js";import{O as b}from"./object-table-DTlTylXj.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-uK_P2ajM.js";import{u as g}from"./useOsdkClient-98BDEE3v.js";import"./preload-helper-BEvuQzxo.js";import"./Table-D8dtRwAf.js";import"./index-C2_3h1_n.js";import"./Dialog-5CvDwi8E.js";import"./cross-DLEBSi7m.js";import"./svgIconContainer-DTW3-j-b.js";import"./useBaseUiId-B9FhtsvG.js";import"./InternalBackdrop-DsyRujLd.js";import"./composite-CXxADE8V.js";import"./index-Di6l4zyi.js";import"./index-BOTRrmgQ.js";import"./index-CY7WeKug.js";import"./useEventCallback-7xCONfWT.js";import"./SkeletonBar-DGWiWVdE.js";import"./LoadingCell-DGNEKdLa.js";import"./ColumnConfigDialog-YhRHMt5j.js";import"./DraggableList-Cr0znASn.js";import"./search-D2VDLMat.js";import"./Input-B6Z_q_CX.js";import"./useControlled-C8hCGxVV.js";import"./Button-CGHFm1Mj.js";import"./small-cross-7ZSwMv5y.js";import"./ActionButton-DpDG7H8z.js";import"./Checkbox-5yGmAk-K.js";import"./useValueChanged-BG_mNAGq.js";import"./CollapsiblePanel-Ldvssuk8.js";import"./MultiColumnSortDialog-CEXVRfRS.js";import"./MenuTrigger-CEno5xcX.js";import"./CompositeItem-C0iz3cc9.js";import"./ToolbarRootContext-DLgn0q4p.js";import"./getDisabledMountTransitionStyles-CnxtgABm.js";import"./getPseudoElementBounds-Cqtm6ufD.js";import"./chevron-down-kpc9MZer.js";import"./index-BQoPBT-L.js";import"./error-04dUIx8L.js";import"./BaseCbacBanner-CfZT1fiN.js";import"./makeExternalStore-BCdf-sYW.js";import"./Tooltip-BMhmull_.js";import"./PopoverPopup-UFvPBeiT.js";import"./debounce-DQn6ddo9.js";import"./tick-BWmOq10B.js";import"./DropdownField-BEdm74vx.js";import"./isEqual-CIG29_z0.js";import"./withOsdkMetrics-CxeMS1SD.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
