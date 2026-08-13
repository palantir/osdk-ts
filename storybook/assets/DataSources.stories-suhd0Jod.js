import{j as r}from"./iframe-C8bv5M5q.js";import{O as b}from"./object-table-qhdt9s5y.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Df_wooRt.js";import{u as g}from"./useOsdkClient-BiaSRebG.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Chlg6owb.js";import"./index-aA6dFdbY.js";import"./Dialog-DwRdr4ua.js";import"./cross-BoinwVnp.js";import"./svgIconContainer-D7NvghIU.js";import"./useBaseUiId-DGJFJt6n.js";import"./InternalBackdrop-DkZ9lOZ_.js";import"./composite-BERdqvW-.js";import"./index-BLJUhLms.js";import"./index-CLxUnHEQ.js";import"./index-B9niMrF8.js";import"./useEventCallback-1iMstHZF.js";import"./SkeletonBar-p-WNn0Z9.js";import"./LoadingCell-DW7fm8TM.js";import"./ColumnConfigDialog-DaQ5Tlvf.js";import"./DraggableList-qn1FuzDp.js";import"./search-Bk10Osf-.js";import"./Input-BEhEtBHk.js";import"./useControlled-BCYGQpmo.js";import"./Button-Cl8oC4P3.js";import"./small-cross-C1TCAk_6.js";import"./ActionButton-eSLUE1ej.js";import"./Checkbox-CaoMOKG9.js";import"./useValueChanged-BqyaZZFZ.js";import"./CollapsiblePanel-jOZBbIzK.js";import"./MultiColumnSortDialog-BP_6eN27.js";import"./MenuTrigger-DC1vFj75.js";import"./CompositeItem-CV5yn9v3.js";import"./ToolbarRootContext-C4tMhNXy.js";import"./getDisabledMountTransitionStyles-CW5p-T8b.js";import"./getPseudoElementBounds-Bre6q9eb.js";import"./chevron-down-C7oxNI6k.js";import"./index-BKjCZT87.js";import"./error-GoMWkPTV.js";import"./BaseCbacBanner-CNYwOnwX.js";import"./makeExternalStore-DYR8gV5O.js";import"./Tooltip-BD8zP9iV.js";import"./PopoverPopup-BeJ93K3k.js";import"./debounce-DAbjvxlH.js";import"./tick-xVgIfTGF.js";import"./DropdownField-CYP0zkSP.js";import"./isEqual-BzbyRYS1.js";import"./withOsdkMetrics-CmCV1Tt1.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
