import{j as r}from"./iframe-D2-93i0D.js";import{O as b}from"./object-table-CU4ocIYo.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dh1EUPyS.js";import{u as g}from"./useOsdkClient-D3LzfKgy.js";import"./preload-helper-B5ioDAdF.js";import"./Table-Bz-Xnftt.js";import"./index-ZkzuTgCa.js";import"./Dialog-DDW4FXfg.js";import"./cross-XZbp8X1U.js";import"./svgIconContainer-C_WiUj7c.js";import"./useBaseUiId-O9oPLbry.js";import"./InternalBackdrop-giWMz8bK.js";import"./composite-D2489evg.js";import"./index-CouUEHg5.js";import"./index-C9V5vUYP.js";import"./index-CjjifVq9.js";import"./useEventCallback-CQR4vsZ1.js";import"./SkeletonBar-DVMts2Iv.js";import"./LoadingCell-NTlntxTv.js";import"./ColumnConfigDialog-BDuwqKar.js";import"./DraggableList-CfVTqu85.js";import"./search-e1zERwtP.js";import"./Input-BVsduhCe.js";import"./useControlled-BJsQhtpL.js";import"./Button-BaohMVfV.js";import"./small-cross-C99vIUVl.js";import"./ActionButton-cXi4c_mc.js";import"./Checkbox-Cj96SasP.js";import"./useValueChanged-D3T-RyJH.js";import"./CollapsiblePanel-4um4tHTf.js";import"./MultiColumnSortDialog-CAOIkBtn.js";import"./MenuTrigger-DqtW1DFU.js";import"./CompositeItem-D9rSr-Un.js";import"./ToolbarRootContext-CbCHGeOF.js";import"./getDisabledMountTransitionStyles-Decrs7np.js";import"./getPseudoElementBounds-Cn4hAtui.js";import"./chevron-down-vlgCUq2z.js";import"./index-bBa3vPeF.js";import"./error-C7BXsrlL.js";import"./BaseCbacBanner-Bc06xCFN.js";import"./makeExternalStore-D-FYFBVJ.js";import"./Tooltip-CZ0MFvfo.js";import"./PopoverPopup-DnrWzk-e.js";import"./debounce-DPYgmBq5.js";import"./tick-BlPreKBC.js";import"./DropdownField-BCaiyljy.js";import"./isEqual-DtAP17iv.js";import"./withOsdkMetrics-B-CCJubj.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
