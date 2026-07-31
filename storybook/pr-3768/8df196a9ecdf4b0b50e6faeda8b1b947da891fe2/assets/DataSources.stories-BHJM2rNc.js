import{j as r}from"./iframe-BMtSmCiC.js";import{O as b}from"./object-table-BSTO9YEM.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-sI_eLAbt.js";import{u as g}from"./useOsdkClient-BqEoEEXo.js";import"./preload-helper-NIBkOjBn.js";import"./Table-BM4ZJWYi.js";import"./index-py39XDsr.js";import"./Dialog-C6MiGDOv.js";import"./cross-CC3kqzKg.js";import"./svgIconContainer-BEirRmCI.js";import"./useBaseUiId-CTbwHvzT.js";import"./InternalBackdrop-D8dzKVYY.js";import"./composite-pXZ88G6n.js";import"./index-C5W6Kzqo.js";import"./index-DgH8S27r.js";import"./index-qgpLBCWR.js";import"./useEventCallback-Dr92A45a.js";import"./SkeletonBar-ozqpkjWP.js";import"./LoadingCell-Hx6osZjv.js";import"./ColumnConfigDialog-B4Ijx-MB.js";import"./DraggableList-D5shv8xp.js";import"./search-DtaouECH.js";import"./Input-DKQqZn4l.js";import"./useControlled-j6tOUI6l.js";import"./isEqual-CApp1l2x.js";import"./isObject-Dm38g99h.js";import"./Button-BYUzSZ09.js";import"./ActionButton-8nwpYddL.js";import"./Checkbox-DcEzndBS.js";import"./useValueChanged-CPnT0fM-.js";import"./CollapsiblePanel-DLVdBCP0.js";import"./MultiColumnSortDialog-9hGeS_QV.js";import"./MenuTrigger-B7P3d3CB.js";import"./CompositeItem-D_37PXYX.js";import"./ToolbarRootContext-DfNgwKSk.js";import"./getDisabledMountTransitionStyles-BGjH6OOR.js";import"./getPseudoElementBounds-2OVm5s2A.js";import"./chevron-down-BBkZ12vx.js";import"./index-5sH2ARV_.js";import"./error-osbVx-Bf.js";import"./BaseCbacBanner-B5ca1v5f.js";import"./makeExternalStore-D6p4PJo6.js";import"./Tooltip-Bu7hfAyM.js";import"./PopoverPopup-ClzAhzZN.js";import"./toNumber-C3YRR2uG.js";import"./tick-V4yYgYJK.js";import"./DropdownField-Cio1-EQT.js";import"./withOsdkMetrics-Az6IiGLG.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
