import{j as r}from"./iframe-C-b6oTOJ.js";import{O as b}from"./object-table-C7DYq2pz.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Chwrhjkw.js";import{u as g}from"./useOsdkClient-CHwnoSo5.js";import"./preload-helper-BeH59gqJ.js";import"./Table-DXsAkxSJ.js";import"./index-DE1s0YYF.js";import"./Dialog-qxM0X4dG.js";import"./cross-CHQB6uFl.js";import"./svgIconContainer-OHRV30Tv.js";import"./useBaseUiId-CkMODpS3.js";import"./InternalBackdrop-D6TYY50X.js";import"./composite-4UqYDIuK.js";import"./index-0ZNUZbhg.js";import"./index-BVjVMQ97.js";import"./index-B6prnO72.js";import"./useEventCallback-f02sUdqz.js";import"./SkeletonBar-CdIYyEwK.js";import"./LoadingCell-9RZsGqIp.js";import"./ColumnConfigDialog-DcBf2JfV.js";import"./DraggableList-yP-jSfX4.js";import"./search-JVftW7k-.js";import"./Input-BSxN1vwO.js";import"./useControlled-g-pxj8O4.js";import"./Button-CV_yYG-R.js";import"./small-cross-D4a9Ho69.js";import"./ActionButton-lKHVmnzU.js";import"./Checkbox-Ci2Nd6sh.js";import"./useValueChanged-y611DxC1.js";import"./CollapsiblePanel-DFf461j6.js";import"./MultiColumnSortDialog-Bvmvw-Lo.js";import"./MenuTrigger-eYoztX0q.js";import"./CompositeItem-BEGPA2jt.js";import"./ToolbarRootContext-D9YuleTy.js";import"./getDisabledMountTransitionStyles-ByMCPo6h.js";import"./getPseudoElementBounds-YS_9JBeN.js";import"./chevron-down-D7cmGpd4.js";import"./index-D6jWMBsi.js";import"./error-ByhaKTr1.js";import"./BaseCbacBanner-IyPGWhps.js";import"./makeExternalStore-B_SxmnOK.js";import"./Tooltip-DHzhDEF7.js";import"./PopoverPopup-BNW8X69h.js";import"./debounce-CeZCgghX.js";import"./tick-C3AZ4-vL.js";import"./DropdownField-D6Tax7Nm.js";import"./isEqual-DUa_QRFr.js";import"./withOsdkMetrics-BrJ-pBLm.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
