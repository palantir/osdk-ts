import{j as r}from"./iframe-DxvN0M7K.js";import{O as b}from"./object-table-tqCZagOx.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BqIqqf7C.js";import{u as g}from"./useOsdkClient-BrNoGZi-.js";import"./preload-helper-xzue2qXM.js";import"./Table-Cdw-5bp-.js";import"./index-DH5yemLr.js";import"./Dialog-Dv18KT1A.js";import"./cross-Jl3VvOEN.js";import"./svgIconContainer-C1vr-TwX.js";import"./useBaseUiId-6JQrMuoN.js";import"./InternalBackdrop-DQMzxTt2.js";import"./composite-BeC4x7c_.js";import"./index-D6YwkaJN.js";import"./index-CGz3Zj9V.js";import"./index-Je9DGe3Q.js";import"./useEventCallback-BarKJY3w.js";import"./SkeletonBar-CSNEJW0Z.js";import"./LoadingCell-CL-i8o3K.js";import"./ColumnConfigDialog-CRLVMU6N.js";import"./DraggableList-CAVKVRtK.js";import"./search-CWcacXbv.js";import"./Input-B5Cdt3Jn.js";import"./useControlled-BsKyqVLJ.js";import"./Button-DeN2HtXI.js";import"./small-cross-loFzvmde.js";import"./ActionButton-DJcBANww.js";import"./Checkbox-CwFAjL8W.js";import"./useValueChanged-znjzpbIG.js";import"./CollapsiblePanel-DcmIoP-V.js";import"./MultiColumnSortDialog-vlUBa-ho.js";import"./MenuTrigger-BYErkqlu.js";import"./CompositeItem-BM5p6vye.js";import"./ToolbarRootContext-8cNXmzWC.js";import"./getDisabledMountTransitionStyles-CQnjWCro.js";import"./getPseudoElementBounds-1Yq4M1ZX.js";import"./chevron-down-B07rpeLd.js";import"./index-CiwVfYV4.js";import"./error-Cr5iHDkF.js";import"./BaseCbacBanner-Cc8KfJds.js";import"./makeExternalStore-BQakVy-m.js";import"./Tooltip-3Unl917J.js";import"./PopoverPopup-D_lg3L_T.js";import"./debounce-HGjeRSVo.js";import"./tick-C0cXmT53.js";import"./DropdownField-CkxYhY96.js";import"./isEqual--3ZKqA7b.js";import"./withOsdkMetrics-BeV-dE9b.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
