import{j as r}from"./iframe-CqpELHwS.js";import{O as b}from"./object-table-DbKwyHc5.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-TbBae5vS.js";import{u as g}from"./useOsdkClient-CHiIV34U.js";import"./preload-helper-DfJ58b8G.js";import"./Table-Dht-ckZc.js";import"./index-BER4WQBS.js";import"./Dialog-C6jAoGEU.js";import"./cross-u_0PEuYq.js";import"./svgIconContainer-BTP1tkQ_.js";import"./useBaseUiId-CqI62Qpb.js";import"./InternalBackdrop-K6p4ENHo.js";import"./composite-DOZwc2bc.js";import"./index-Cis59Sxl.js";import"./index-CcEEUUj6.js";import"./index-CKO26sQe.js";import"./useEventCallback-b_Kd5kWf.js";import"./SkeletonBar-Cm1tloZj.js";import"./LoadingCell-5DLOBqqN.js";import"./ColumnConfigDialog-B0fzjNWg.js";import"./DraggableList-CibwmZ2o.js";import"./search-D9m05WlM.js";import"./Input-B8oxxBH0.js";import"./useControlled-D7QaFiC3.js";import"./Button-DVcrv2BS.js";import"./small-cross-C-5iiC69.js";import"./ActionButton-CLTSCNsY.js";import"./Checkbox-C950EoGE.js";import"./useValueChanged-BLX9s3qf.js";import"./CollapsiblePanel-DPutPnXc.js";import"./MultiColumnSortDialog-DZpwOj1q.js";import"./MenuTrigger-DXKsiQKV.js";import"./CompositeItem-Du2CIA1V.js";import"./ToolbarRootContext-uFYVc9Dk.js";import"./getDisabledMountTransitionStyles-BuRkNMoJ.js";import"./getPseudoElementBounds-B1CPQfJe.js";import"./chevron-down-CiPBsoDI.js";import"./index-0kwSuhRB.js";import"./error-jtHR9fDA.js";import"./BaseCbacBanner-z2_XzsM3.js";import"./makeExternalStore-CUMLWxOP.js";import"./Tooltip-A2o7ZLx2.js";import"./PopoverPopup-CJVmVuZk.js";import"./debounce-qnDwyFzV.js";import"./tick-DztBPc7i.js";import"./DropdownField-D5sFpe7Y.js";import"./isEqual-DVLS-UMQ.js";import"./withOsdkMetrics-lKot8ktS.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
