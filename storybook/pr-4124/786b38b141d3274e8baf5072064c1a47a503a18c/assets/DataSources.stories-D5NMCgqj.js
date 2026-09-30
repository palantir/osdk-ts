import{j as r}from"./iframe-UxLT7lYy.js";import{O as b}from"./object-table-Cc_qfxoK.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-hmQrtbTj.js";import{u as g}from"./useOsdkClient-Da_K8BYI.js";import"./preload-helper-CV6iJ-wL.js";import"./Table-BeinkaVZ.js";import"./index-CaLIOjRM.js";import"./Dialog-VrDMfQLV.js";import"./cross-gbTOR5Si.js";import"./svgIconContainer-HqUabHbJ.js";import"./useBaseUiId-DR0pgCNJ.js";import"./InternalBackdrop-uyTw1RdA.js";import"./composite-BYQddcpi.js";import"./index-5Zs5CZ2c.js";import"./index-C8h5tRSe.js";import"./index-_o97Q59k.js";import"./useEventCallback-DjbC_S6q.js";import"./SkeletonBar-B6QGYhFN.js";import"./LoadingCell-BHo-JVA1.js";import"./ColumnConfigDialog-C4pi-a3A.js";import"./DraggableList-B7mfCITH.js";import"./search-K5dECyKJ.js";import"./Input-DHvCRjgv.js";import"./useControlled-CDHE3Jck.js";import"./Button-DZCJ8vSD.js";import"./small-cross-Bw-OCkf4.js";import"./ActionButton-C661vjkS.js";import"./Checkbox-AE0u9S9J.js";import"./useValueChanged-CzG0v9jK.js";import"./CollapsiblePanel-BbBRdFzC.js";import"./MultiColumnSortDialog-fg3k3Klu.js";import"./MenuTrigger-ynnIwSop.js";import"./CompositeItem-Kvq0UPS2.js";import"./ToolbarRootContext-19oVc1QJ.js";import"./getDisabledMountTransitionStyles-CHMZ4_kz.js";import"./getPseudoElementBounds-x7euGpS2.js";import"./chevron-down-CNsNwb1i.js";import"./index-azpejN4Q.js";import"./error-CvnQXRAs.js";import"./BaseCbacBanner-CTHYjrUf.js";import"./makeExternalStore-D1qwl-gG.js";import"./Tooltip-7LzxkM7s.js";import"./PopoverPopup-D67Wkzxz.js";import"./debounce-BO8okfFM.js";import"./tick-BPmR5WxH.js";import"./DropdownField-D7GJRPWS.js";import"./isEqual-BhpxjI6o.js";import"./withOsdkMetrics-CgTr75Ie.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
