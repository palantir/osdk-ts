import{j as r}from"./iframe-BgMdPl3C.js";import{O as b}from"./object-table-D4oPfDXV.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D9VaDEuh.js";import{u as g}from"./useOsdkClient-D3kLb---.js";import"./preload-helper-sBnEI_Ig.js";import"./Table-97Gw9S7_.js";import"./index-CpB1FxHm.js";import"./Dialog-BqmqocYn.js";import"./cross-D6oplnX9.js";import"./svgIconContainer-DMmYLpy9.js";import"./useBaseUiId-CxT5YLyS.js";import"./InternalBackdrop-BN-4yFF3.js";import"./composite-sAuyKpQi.js";import"./index-BXH-jRmH.js";import"./index-0YWULKcm.js";import"./index-Bz057Fgu.js";import"./useEventCallback-Cmb84_X1.js";import"./SkeletonBar-CojPQo60.js";import"./LoadingCell-B1K2l9o0.js";import"./ColumnConfigDialog-CWCZZhUo.js";import"./DraggableList-BumWgSPL.js";import"./search-CWQDb4l_.js";import"./Input-3QA4m500.js";import"./useControlled-Byq8R2zI.js";import"./Button-tnOg-ckf.js";import"./small-cross-BU2y1cKB.js";import"./ActionButton-DlS31NmR.js";import"./Checkbox-Dr7IxN4X.js";import"./useValueChanged-pacesa_7.js";import"./CollapsiblePanel-CzwDlkcV.js";import"./MultiColumnSortDialog-B8ujW6oW.js";import"./MenuTrigger-CGNumkog.js";import"./CompositeItem-D5EZoP9q.js";import"./ToolbarRootContext-D7J-gn0d.js";import"./getDisabledMountTransitionStyles-DvbK_Xe3.js";import"./getPseudoElementBounds-BNISWdkv.js";import"./chevron-down-CpM76MZN.js";import"./index-CIL9XgBZ.js";import"./error-CThhHbJ9.js";import"./BaseCbacBanner-DTtOB39W.js";import"./makeExternalStore-CU4m9b0Z.js";import"./Tooltip-ByGWv4u-.js";import"./PopoverPopup-DnrKPeJ4.js";import"./debounce-CPxVN93o.js";import"./tick-NEjLld8Y.js";import"./DropdownField-E-id6n8_.js";import"./isEqual-D0E7h3-i.js";import"./withOsdkMetrics-iUwzYuQQ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
