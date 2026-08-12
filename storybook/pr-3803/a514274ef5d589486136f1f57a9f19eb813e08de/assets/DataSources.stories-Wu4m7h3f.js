import{j as r}from"./iframe-B3wk8kVZ.js";import{O as b}from"./object-table-BTFdMv_R.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C3tQsY8C.js";import{u as g}from"./useOsdkClient-Chdum4-f.js";import"./preload-helper-C31FCm5E.js";import"./Table-DLJidSKw.js";import"./index-3CUWClbk.js";import"./Dialog-DdUlFbiJ.js";import"./cross-BaLLkSHI.js";import"./svgIconContainer-tw0lZiQJ.js";import"./useBaseUiId-CklL5-7z.js";import"./InternalBackdrop-OEAYc3yw.js";import"./composite-Bre4iFt0.js";import"./index-CqtqFd9-.js";import"./index-Bu1K1z8v.js";import"./index-D2HNqsii.js";import"./useEventCallback-DmhqaCs7.js";import"./SkeletonBar-Rs9tS4Ar.js";import"./LoadingCell-CNzF5f40.js";import"./ColumnConfigDialog-47yjjIPq.js";import"./DraggableList-wWiUupuT.js";import"./search-BTUcl0ov.js";import"./Input-D8tm8Vwt.js";import"./useControlled-OgnUzg5x.js";import"./isEqual-CV5bLzkB.js";import"./isObject-CZWpd-KU.js";import"./Button-DQgybiWB.js";import"./ActionButton-BSysTeFD.js";import"./Checkbox-Bsx1i8dD.js";import"./useValueChanged-BZHwRoTK.js";import"./CollapsiblePanel-C92ugajo.js";import"./MultiColumnSortDialog-NOzVqTFF.js";import"./MenuTrigger-DlGLch93.js";import"./CompositeItem-C_xzt7Yx.js";import"./ToolbarRootContext-ffWwb0UY.js";import"./getDisabledMountTransitionStyles-Ds6p21tr.js";import"./getPseudoElementBounds-DvUH2RC4.js";import"./chevron-down-CF60htEO.js";import"./index-Bh7yWO4s.js";import"./error-Ceiy10ri.js";import"./BaseCbacBanner-DjbpPRcX.js";import"./makeExternalStore-CEwzLxnH.js";import"./Tooltip-7ZGtEAnk.js";import"./PopoverPopup-C6pUvjpc.js";import"./toNumber-BOpB8xxZ.js";import"./tick-CeKhhfgZ.js";import"./DropdownField-CWgzGjz8.js";import"./withOsdkMetrics-DQFY8goa.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
