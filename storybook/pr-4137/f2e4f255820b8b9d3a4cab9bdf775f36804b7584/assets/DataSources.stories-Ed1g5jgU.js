import{j as r}from"./iframe-CuEAZ9dr.js";import{O as b}from"./object-table-VtjZM0Xx.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-aj36mNip.js";import{u as g}from"./useOsdkClient-DaV3EpeN.js";import"./preload-helper-BGz8wZQR.js";import"./Table-NTPstvxc.js";import"./index-DxIg76dX.js";import"./Dialog-BkDP-GvL.js";import"./cross-WWifeHY9.js";import"./svgIconContainer-BvlE_9W9.js";import"./useBaseUiId-BeONGSYl.js";import"./InternalBackdrop-BkqsHjIV.js";import"./composite-Cuvx7hIz.js";import"./index-Dvn68MG5.js";import"./index-CZP_mOC4.js";import"./index-BBIDRv9-.js";import"./useEventCallback-pnT8ZyKV.js";import"./SkeletonBar-IMTg_Ovw.js";import"./LoadingCell-Cn4lhMnt.js";import"./ColumnConfigDialog-BjNfcseF.js";import"./DraggableList-C6eWQzGl.js";import"./search-DwLfbIUw.js";import"./Input-CVHctVKc.js";import"./useControlled-DvKAwvsQ.js";import"./Button-D_a0PtrD.js";import"./small-cross-R78MO7fs.js";import"./ActionButton--142FRTZ.js";import"./Checkbox-BOkyO1tb.js";import"./useValueChanged-Ci2GyKEy.js";import"./CollapsiblePanel-BleGNdwU.js";import"./MultiColumnSortDialog-aYJ8Fftp.js";import"./MenuTrigger-DWu_yWKM.js";import"./CompositeItem-BaOcY-5M.js";import"./ToolbarRootContext-D1XcDui9.js";import"./getDisabledMountTransitionStyles-BRocjPLc.js";import"./getPseudoElementBounds-D_hAP4_U.js";import"./chevron-down-CU80jHGh.js";import"./index-DQjcUOKb.js";import"./error-IRs09aCG.js";import"./BaseCbacBanner-CvnGCxIt.js";import"./makeExternalStore-C8vIUtyz.js";import"./Tooltip-VrBjATlQ.js";import"./PopoverPopup-SkuTKSE6.js";import"./debounce-C37B9MoR.js";import"./tick-DnPfu0Vb.js";import"./DropdownField-BaUKfk6e.js";import"./isEqual-Aq-a2GgY.js";import"./withOsdkMetrics-BPCuw1K8.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
