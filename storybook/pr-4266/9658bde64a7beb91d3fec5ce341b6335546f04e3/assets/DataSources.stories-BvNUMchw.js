import{j as r}from"./iframe-BK92nj8O.js";import{O as b}from"./object-table-C_ms1YYM.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BzkIsA1Y.js";import{u as g}from"./useOsdkClient-CR-tfmoo.js";import"./preload-helper-BzvFWRwm.js";import"./Table-ybPM_z_s.js";import"./index-Cp-oegvQ.js";import"./Dialog-C5rrN2iU.js";import"./cross-CQouWOVo.js";import"./svgIconContainer-CUCnXzLA.js";import"./useBaseUiId-DJzLMsdJ.js";import"./InternalBackdrop-CXx_gZFt.js";import"./composite-CUOp8zR0.js";import"./index-CRvcO-Mq.js";import"./index-Vq2K6jMQ.js";import"./index-BOzml72P.js";import"./useEventCallback-DW2JMFk8.js";import"./SkeletonBar-CUN-Db9r.js";import"./LoadingCell-B25Xa0BU.js";import"./ColumnConfigDialog-Ceb4wjXo.js";import"./DraggableList-D1Tjvk-y.js";import"./search-Cx7lcCpX.js";import"./Input-R7iFBYJw.js";import"./useControlled-D4vgYWXW.js";import"./Button-CLd3GlZq.js";import"./small-cross-DGwpD6_s.js";import"./ActionButton-BkWRPx-v.js";import"./Checkbox-D0BoCwAX.js";import"./useValueChanged-DREFbt6f.js";import"./CollapsiblePanel-fv8SIwpm.js";import"./MultiColumnSortDialog-D3G2Cdgi.js";import"./MenuTrigger-oYqLCT26.js";import"./CompositeItem-BUqJx2UC.js";import"./ToolbarRootContext-DaxowF1A.js";import"./getDisabledMountTransitionStyles-Dx3aHikn.js";import"./getPseudoElementBounds-BOjBrs5G.js";import"./chevron-down-DFEA5aIq.js";import"./index-D33Byr__.js";import"./error-CpelSvOO.js";import"./BaseCbacBanner-B6Aq0ByB.js";import"./makeExternalStore-C6TfNWC7.js";import"./Tooltip-DraOFyZC.js";import"./PopoverPopup-mBT0X6Cq.js";import"./debounce-CcroCpX3.js";import"./tick-DePsAy0F.js";import"./DropdownField-CfACKZfD.js";import"./isEqual-EKhcscH8.js";import"./withOsdkMetrics-F47lPElZ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
