import{j as r}from"./iframe-Bx31wN7l.js";import{O as b}from"./object-table-CUTVINjX.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-aWMq1BI5.js";import{u as g}from"./useOsdkClient-D1EBd0jQ.js";import"./preload-helper-fuKytI2J.js";import"./Table-C6sxDE12.js";import"./index-DZxERBQ8.js";import"./Dialog-B_mHCcF-.js";import"./cross-ByPIg3cq.js";import"./svgIconContainer-CsmE7H8N.js";import"./useBaseUiId-BpE0KEfc.js";import"./InternalBackdrop-CXzy1IR-.js";import"./composite-Bx5EuYDq.js";import"./index-ec0TeVrD.js";import"./index-WQiMJ8U5.js";import"./index-eq9JihVj.js";import"./useEventCallback-BdwVQOgv.js";import"./SkeletonBar-CblG8V_N.js";import"./LoadingCell-q9KKR5qM.js";import"./ColumnConfigDialog-7tDXfpC1.js";import"./DraggableList-Dfq2W5_B.js";import"./search-BkXPkxMB.js";import"./Input-CQoFLmc7.js";import"./useControlled-BUc-d8tN.js";import"./Button-D8P70LO7.js";import"./small-cross-2gr1UHRE.js";import"./ActionButton-D3XLfflN.js";import"./Checkbox-Rzr3-pvM.js";import"./useValueChanged-LXU-Rlru.js";import"./CollapsiblePanel-C307MSn7.js";import"./MultiColumnSortDialog-BP03TXhe.js";import"./MenuTrigger-DlzBhBKN.js";import"./CompositeItem-CXKQZ3E9.js";import"./ToolbarRootContext-BEc0iwyp.js";import"./getDisabledMountTransitionStyles-I794iXBx.js";import"./getPseudoElementBounds-Cxm3qVX_.js";import"./chevron-down-Ca2LkDWe.js";import"./index-BrSdfPya.js";import"./error-BqlruEo6.js";import"./BaseCbacBanner-G-8ScpXv.js";import"./makeExternalStore-BiPnGhaA.js";import"./Tooltip-BHEJ_2jR.js";import"./PopoverPopup-DjXhzR73.js";import"./debounce-BfkSYXdV.js";import"./tick-PN43AiNg.js";import"./DropdownField-B0i5mi2Z.js";import"./isEqual-CkX8CbxS.js";import"./withOsdkMetrics-DO2o0cgY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
