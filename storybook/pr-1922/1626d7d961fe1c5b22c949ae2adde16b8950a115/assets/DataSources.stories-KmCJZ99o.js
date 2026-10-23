import{j as r}from"./iframe-CxT5Jan_.js";import{O as b}from"./object-table-UW4KPqzS.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B3VNrqd2.js";import{u as g}from"./useOsdkClient-BdjKd_qM.js";import"./preload-helper-B2aJWYzQ.js";import"./Table-COCtIDyb.js";import"./index-Dtz5PgLF.js";import"./Dialog-CCC2rkEz.js";import"./cross-CN6xf_dQ.js";import"./svgIconContainer-hCqCvGhu.js";import"./useBaseUiId-B-OQdXnZ.js";import"./InternalBackdrop-BNvBplbQ.js";import"./composite-DGmZ6kEt.js";import"./index-DMUTvrAf.js";import"./index-odz-bzs8.js";import"./index-VTk_L-CK.js";import"./useEventCallback-DJgEXQnv.js";import"./SkeletonBar-DO5a1Cj6.js";import"./LoadingCell-C99H8f55.js";import"./ColumnConfigDialog-EyJedUwR.js";import"./DraggableList-D8pu-QX3.js";import"./search-CDYNfwYQ.js";import"./Input-uXNf_zLb.js";import"./useControlled-HfGVJvVO.js";import"./Button-g3dA2T-X.js";import"./small-cross-DOBtvqtk.js";import"./ActionButton-Drinm68p.js";import"./Checkbox-C6faQSvd.js";import"./useValueChanged-B-mq1KuU.js";import"./CollapsiblePanel-CS3WD6U4.js";import"./MultiColumnSortDialog-C-bdESQG.js";import"./MenuTrigger-6y7n_vAV.js";import"./CompositeItem-DLM-dgwp.js";import"./ToolbarRootContext-BXaU4Z9h.js";import"./getDisabledMountTransitionStyles-BDF0Bffw.js";import"./getPseudoElementBounds-WZiK9BcL.js";import"./chevron-down-CJ808Qtk.js";import"./index-qScKd8ht.js";import"./error-ABOYqx1m.js";import"./BaseCbacBanner-CKAihuJM.js";import"./makeExternalStore-z4BPzaiv.js";import"./Tooltip-BCH3arb9.js";import"./PopoverPopup-BEr_vAbM.js";import"./debounce-BM3c7HzB.js";import"./tick-B08JakEq.js";import"./DropdownField-j_jVFNln.js";import"./isEqual-D_Z0bU5y.js";import"./withOsdkMetrics-Dv_WEx2y.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
