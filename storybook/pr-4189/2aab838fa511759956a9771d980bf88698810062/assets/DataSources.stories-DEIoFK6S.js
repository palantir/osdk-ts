import{j as r}from"./iframe-CyyLqEr6.js";import{O as b}from"./object-table-CbR1hdH_.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DUpVEl2w.js";import{u as g}from"./useOsdkClient-TJGS2RfR.js";import"./preload-helper-CLKx56fr.js";import"./Table-DaFGsEZ-.js";import"./index-CXVe_-qM.js";import"./Dialog-rUw7Tztf.js";import"./cross-aF3LHT_W.js";import"./svgIconContainer-BXEQoARc.js";import"./useBaseUiId-DNRq1Vj2.js";import"./InternalBackdrop-VqPqEODt.js";import"./composite-Cu366ztE.js";import"./index-Btxr5vyt.js";import"./index-DplZ--1V.js";import"./index-CIcqP63k.js";import"./useEventCallback-BkrIhA4F.js";import"./SkeletonBar-hSnelWIw.js";import"./LoadingCell-DtrB1isk.js";import"./ColumnConfigDialog-B_4Ulu0K.js";import"./DraggableList-8Ob4ZCYO.js";import"./search-9XevuXRY.js";import"./Input-CGZ9tgdl.js";import"./useControlled-SLbcZlz1.js";import"./Button-CE0RBh88.js";import"./small-cross-CeBhb5K4.js";import"./ActionButton-5WAWMSR-.js";import"./Checkbox-CHHV-n-v.js";import"./useValueChanged-CfwgduQf.js";import"./CollapsiblePanel-DobbT5mN.js";import"./MultiColumnSortDialog-RYejZIqi.js";import"./MenuTrigger-BvcjDDgI.js";import"./CompositeItem-4N3XpUmD.js";import"./ToolbarRootContext-Dx3qy1zP.js";import"./getDisabledMountTransitionStyles-DqpTbrQs.js";import"./getPseudoElementBounds-B0QwFzeX.js";import"./chevron-down-C0fFk26N.js";import"./index-BNa8gt2p.js";import"./error-Dp6C50rF.js";import"./BaseCbacBanner-Dqcr-F5q.js";import"./makeExternalStore-B6005TWn.js";import"./Tooltip-1zWBtBzZ.js";import"./PopoverPopup-CjI5fBm4.js";import"./debounce-Kl0LOmqT.js";import"./tick-Bt0G-C4s.js";import"./DropdownField-77S-oXAU.js";import"./isEqual-Cm4IXkcb.js";import"./withOsdkMetrics-D87Y42PU.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
