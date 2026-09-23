import{j as r}from"./iframe-BF6_9Xjc.js";import{O as b}from"./object-table-Kgjg2E3o.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-tVFmOqM-.js";import{u as g}from"./useOsdkClient-B4LNNlf9.js";import"./preload-helper-CVsiSqQ7.js";import"./Table-CZHycnjt.js";import"./index-B1Ya2fBr.js";import"./Dialog-KSu_uhqQ.js";import"./cross-_UU9sZ5F.js";import"./svgIconContainer-CQE4WPFB.js";import"./useBaseUiId-s3ehRo10.js";import"./InternalBackdrop-D1tqsc6f.js";import"./composite-BGGp11kx.js";import"./index-CYSW1VxS.js";import"./index-aIhJZAmJ.js";import"./index-eQPCQQYr.js";import"./useEventCallback-n4YXn8jD.js";import"./SkeletonBar-B8Ad8ahg.js";import"./LoadingCell-UE-4NWGG.js";import"./ColumnConfigDialog-C5xWFU6m.js";import"./DraggableList-B8IxaLCR.js";import"./search-BUGVh3PQ.js";import"./Input-RBsPV06C.js";import"./useControlled-BXYuK13Z.js";import"./Button-SD0gx5bd.js";import"./small-cross-B8TwzzPi.js";import"./ActionButton-BpRFGqnw.js";import"./Checkbox-BWIz-lL7.js";import"./useValueChanged-CYAv_T9U.js";import"./CollapsiblePanel-CZ9dHRXC.js";import"./MultiColumnSortDialog-vfixhd_W.js";import"./MenuTrigger-DV1kYIh9.js";import"./CompositeItem-DI8gVSRQ.js";import"./ToolbarRootContext-DHHYvc0f.js";import"./getDisabledMountTransitionStyles-DNoRrnCX.js";import"./getPseudoElementBounds-BD65du9n.js";import"./chevron-down-CVGUePFi.js";import"./index-qnSLgzX3.js";import"./error-Dk0JQDUN.js";import"./BaseCbacBanner-BA3oIRdg.js";import"./makeExternalStore-BGO-jF6d.js";import"./Tooltip-CPZeRJjC.js";import"./PopoverPopup-BBXIONb1.js";import"./debounce-BsKaorv7.js";import"./tick-BHeRwjB9.js";import"./DropdownField-BB4TjDf4.js";import"./isEqual--GlCyfF0.js";import"./withOsdkMetrics-R2jYMWim.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
