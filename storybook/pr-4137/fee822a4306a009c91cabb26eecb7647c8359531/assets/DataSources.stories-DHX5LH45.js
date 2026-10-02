import{j as r}from"./iframe-BYO6buG4.js";import{O as b}from"./object-table-CMkQ3hCP.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DaylRghL.js";import{u as g}from"./useOsdkClient-DoQ52jay.js";import"./preload-helper-BghxL7kB.js";import"./Table-DGj5Awqa.js";import"./index-BoyptyOK.js";import"./Dialog-BoT1wOeq.js";import"./cross-Db1-xEOp.js";import"./svgIconContainer-56E6UlaN.js";import"./useBaseUiId-DSjvVVjS.js";import"./InternalBackdrop-idagBMen.js";import"./composite-Od8Flb7p.js";import"./index-CsWBFdKT.js";import"./index-1LA5lE3C.js";import"./index-NS6h_AVZ.js";import"./useEventCallback-mMKXwGEF.js";import"./SkeletonBar-ClyXBwkY.js";import"./LoadingCell-CeWD4vTh.js";import"./ColumnConfigDialog-CWB1DEao.js";import"./DraggableList-D14Tn9Md.js";import"./search-Ci90mlVI.js";import"./Input-T9JgejYL.js";import"./useControlled-Cg_ccIWb.js";import"./Button-DMsIowuw.js";import"./small-cross-FoG8HaIL.js";import"./ActionButton-DqJ5wns_.js";import"./Checkbox-EASZO9QI.js";import"./useValueChanged-CrS2COC5.js";import"./CollapsiblePanel-BZo8Mo6J.js";import"./MultiColumnSortDialog-B7RWVW-u.js";import"./MenuTrigger-BInfiqJ9.js";import"./CompositeItem-CN9f57ba.js";import"./ToolbarRootContext-BKI2aJJ6.js";import"./getDisabledMountTransitionStyles-B-bqpDLb.js";import"./getPseudoElementBounds-BcYivqxs.js";import"./chevron-down-DqQBT-ce.js";import"./index-YNs_4vqy.js";import"./error-DvNb2Jgd.js";import"./BaseCbacBanner-YHQLwqPr.js";import"./makeExternalStore-Cjetkmua.js";import"./Tooltip-DipSBfOt.js";import"./PopoverPopup-DeSSS8K8.js";import"./debounce-BTsoIqCY.js";import"./tick-BkEOGkDA.js";import"./DropdownField-CSPCixRr.js";import"./isEqual-DUs2sxEB.js";import"./withOsdkMetrics-DdFROTWY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
