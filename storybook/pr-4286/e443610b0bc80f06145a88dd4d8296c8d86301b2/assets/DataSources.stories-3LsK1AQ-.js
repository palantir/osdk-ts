import{j as r}from"./iframe-CNys6KBx.js";import{O as b}from"./object-table-BfLdoutw.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-lxr09wOM.js";import{u as g}from"./useOsdkClient-D6IOk0So.js";import"./preload-helper-DcEogYXL.js";import"./Table-DD93V6XD.js";import"./index-D7tprs46.js";import"./Dialog-C9KVN-g-.js";import"./cross-DDF5avjH.js";import"./svgIconContainer-DGw65FKz.js";import"./useBaseUiId-B9-57ZNF.js";import"./InternalBackdrop-DaYZqJ6W.js";import"./composite-CNZDZ4o2.js";import"./index-BtKHvXe7.js";import"./index-CWFx-0lx.js";import"./index-BgT_i-PY.js";import"./useEventCallback-4Kkat34w.js";import"./SkeletonBar-cVCCqAbl.js";import"./LoadingCell-nXw0Ntj_.js";import"./ColumnConfigDialog-Bds5G4qz.js";import"./DraggableList-D2UzlQr4.js";import"./search-BE8RO1z_.js";import"./Input-DzrtDPnO.js";import"./useControlled-DuXB4b_p.js";import"./Button-DP1rA9dA.js";import"./small-cross-CBtWnDqE.js";import"./ActionButton-B9ImGUQY.js";import"./Checkbox-BT-ZvEA1.js";import"./useValueChanged-BecJvcFH.js";import"./CollapsiblePanel-l0zk2FsM.js";import"./MultiColumnSortDialog-DKfcrJkt.js";import"./MenuTrigger-BsmgvmAp.js";import"./CompositeItem-CIQp4vV-.js";import"./ToolbarRootContext-D9QBq8Lb.js";import"./getDisabledMountTransitionStyles-DksinVNb.js";import"./getPseudoElementBounds-D1zecXmj.js";import"./chevron-down-DpfNuwKR.js";import"./index-zFsg_RaX.js";import"./error-DMVqHs2L.js";import"./BaseCbacBanner-2kf_waYQ.js";import"./makeExternalStore-T7wEnVBI.js";import"./Tooltip-Cf_AS3a1.js";import"./PopoverPopup-Bsmdq_sX.js";import"./debounce-BAsDe-b7.js";import"./tick-CFpktK17.js";import"./DropdownField-axtbgAiC.js";import"./isEqual-DWLMKdRA.js";import"./withOsdkMetrics--pN-uRA4.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
