import{j as r}from"./iframe-htyY8WGh.js";import{O as b}from"./object-table-CxeVRikb.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BOSKPRqf.js";import{u as g}from"./useOsdkClient-bA8p7394.js";import"./preload-helper-BZEQ7CCm.js";import"./Table-CBPb2Ax7.js";import"./index-9XAE-P5N.js";import"./Dialog-FXtxmKtu.js";import"./cross-zUtY8fYt.js";import"./svgIconContainer-DDCQ6k8x.js";import"./useBaseUiId-B5naUVoF.js";import"./InternalBackdrop-sMqyjWxo.js";import"./composite-DLA5e3bM.js";import"./index-BRbgX3T0.js";import"./index-BmvQUuUh.js";import"./index-DMt3BqCf.js";import"./useEventCallback-BPbziyI1.js";import"./SkeletonBar-Dr30uUnV.js";import"./LoadingCell-BZHL109m.js";import"./ColumnConfigDialog-BAxrkWGM.js";import"./DraggableList-Dw72zyKo.js";import"./search-BARUS6xQ.js";import"./Input-B_148gGT.js";import"./useControlled-jlfCPDon.js";import"./Button-CugfLHha.js";import"./small-cross-BG5UjiFv.js";import"./ActionButton-BGplWwX2.js";import"./Checkbox-CxNTxawd.js";import"./useValueChanged-BuXRFnHI.js";import"./CollapsiblePanel-D5f1Ks-a.js";import"./MultiColumnSortDialog-9e9gOjI_.js";import"./MenuTrigger-CM187Vaj.js";import"./CompositeItem-CuUp7unb.js";import"./ToolbarRootContext-CvT5UyxT.js";import"./getDisabledMountTransitionStyles-DNIZXeN8.js";import"./getPseudoElementBounds-ehODIuKj.js";import"./chevron-down-CPTHUdZ2.js";import"./index-DWZoNjEc.js";import"./error-B5cHozqr.js";import"./BaseCbacBanner-BVUw-7jj.js";import"./makeExternalStore-CvyNaZuu.js";import"./Tooltip-wud2Jc0O.js";import"./PopoverPopup-VfPjnT9d.js";import"./debounce-BFJO43v6.js";import"./tick-Oy4Dyy5w.js";import"./DropdownField-BgjFXt3p.js";import"./isEqual-CwYdE02M.js";import"./withOsdkMetrics-B5xof_Ab.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
