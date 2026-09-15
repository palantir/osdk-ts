import{j as r}from"./iframe-DX9GTmTS.js";import{O as b}from"./object-table-BwtPBHMG.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Ci8dEjXI.js";import{u as g}from"./useOsdkClient-C1e-iWGi.js";import"./preload-helper-BJHRWIj0.js";import"./Table-B0RyClyk.js";import"./index-qD7KPbHv.js";import"./Dialog-CBJ6xqNI.js";import"./cross-CnnW3pn0.js";import"./svgIconContainer-DiXmcE79.js";import"./useBaseUiId-LIEARN9F.js";import"./InternalBackdrop-DXzjiCbf.js";import"./composite-YtQb8O1c.js";import"./index-D6AHn8lU.js";import"./index-BFmznvox.js";import"./index-BI0-O9XB.js";import"./useEventCallback-Dz7-lFnn.js";import"./SkeletonBar-zzijKBDR.js";import"./LoadingCell-V3lORDX6.js";import"./ColumnConfigDialog-BJzQGuAy.js";import"./DraggableList-Dn15y9zJ.js";import"./search-CpS_oLmz.js";import"./Input-D3jwcYVb.js";import"./useControlled-Bbq2I_dd.js";import"./Button-B-xJiokr.js";import"./small-cross-99puV05O.js";import"./ActionButton-CUYGPjpl.js";import"./Checkbox-kStpg7os.js";import"./useValueChanged-xT7sW3-e.js";import"./CollapsiblePanel-BILO_2dF.js";import"./MultiColumnSortDialog-BxprvtcX.js";import"./MenuTrigger-B_Z_Pbg2.js";import"./CompositeItem-CDg-ghY6.js";import"./ToolbarRootContext-HucsP966.js";import"./getDisabledMountTransitionStyles-aiGqPhBD.js";import"./getPseudoElementBounds-fJ1HXQTt.js";import"./chevron-down-DasCvZc6.js";import"./index-B6DX-C20.js";import"./error-BLx5cAN8.js";import"./BaseCbacBanner-CoL5y8lQ.js";import"./makeExternalStore-ChFrK0L7.js";import"./Tooltip-Ba8TKTH9.js";import"./PopoverPopup-DtfiGPFv.js";import"./debounce-BubrlkRY.js";import"./tick-BfAQ_n_q.js";import"./DropdownField-DaWEyCui.js";import"./isEqual-4EDI4GuI.js";import"./withOsdkMetrics-CVU4RfbR.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
