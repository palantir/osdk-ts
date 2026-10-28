import{j as r}from"./iframe-D9bc5sGs.js";import{O as b}from"./object-table-D98NQBsI.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DeU8vqE7.js";import{u as g}from"./useOsdkClient-CSlIz3Zl.js";import"./preload-helper-vGOnJPAI.js";import"./Table-BjYScxa6.js";import"./index-CEam5gFO.js";import"./Dialog-DIn83yZk.js";import"./cross-BPOrfQFo.js";import"./svgIconContainer-Dhw0ma3V.js";import"./useBaseUiId-DLMQDqLu.js";import"./InternalBackdrop-VOmSs6FM.js";import"./composite-BeRvyJhW.js";import"./index-ClW3grIR.js";import"./index-BdCRvfl5.js";import"./index-ZYtQI0k4.js";import"./useEventCallback-BoorzceT.js";import"./SkeletonBar-DcN0x3Jd.js";import"./LoadingCell-CUn_ULP8.js";import"./ColumnConfigDialog-BJ532Rxa.js";import"./DraggableList-BZLxRXoI.js";import"./search-Bf3j8VuO.js";import"./Input-D8Pr2sKK.js";import"./useControlled-DNEcMFJZ.js";import"./Button-FP5Viz1l.js";import"./small-cross-DB8z7y2Q.js";import"./ActionButton-ByEZi_P7.js";import"./Checkbox-FPB0D1z8.js";import"./useValueChanged-BshnFGHt.js";import"./CollapsiblePanel-DHmmGhnb.js";import"./MultiColumnSortDialog-BPa70xRK.js";import"./MenuTrigger-8kQCsdaA.js";import"./CompositeItem-DUTzLbNz.js";import"./ToolbarRootContext-Be9Mfuy4.js";import"./getDisabledMountTransitionStyles-C4hp9GAV.js";import"./getPseudoElementBounds-Bb0zZX2S.js";import"./chevron-down-Cyz2_1Cu.js";import"./index-DCNHXyz8.js";import"./error-Df3SJLzh.js";import"./BaseCbacBanner-CvVmvohl.js";import"./makeExternalStore-DCoCUTl5.js";import"./Tooltip-zRPANrX1.js";import"./PopoverPopup-DbOGNWOA.js";import"./debounce-7BefPhSx.js";import"./tick-jhbvcied.js";import"./DropdownField-Chrmpf_E.js";import"./isEqual-D-lr0oWU.js";import"./withOsdkMetrics-B-tcpkdE.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
