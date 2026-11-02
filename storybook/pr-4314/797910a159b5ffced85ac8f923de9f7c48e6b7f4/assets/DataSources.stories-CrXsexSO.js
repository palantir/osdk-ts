import{j as r}from"./iframe-Cu1bkUV2.js";import{O as b}from"./object-table-DurmvQoB.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DxxEB7_T.js";import{u as g}from"./useOsdkClient-BSCp6sZ5.js";import"./preload-helper-ByBgFQo4.js";import"./Table-Y1FWE3IE.js";import"./index-D8Vgs137.js";import"./Dialog-DVWo0jsn.js";import"./cross-CpkrEpF5.js";import"./svgIconContainer-Dtkj8beD.js";import"./useBaseUiId-CsOE9eY7.js";import"./InternalBackdrop-C8f9FJlV.js";import"./composite-CI-SY_Qx.js";import"./index-BJrnppPH.js";import"./index-B9_oej9c.js";import"./index-CUR5Eq6E.js";import"./useEventCallback-BtQ8PHNi.js";import"./SkeletonBar-Bq8PEonM.js";import"./LoadingCell-zA0x8rnT.js";import"./ColumnConfigDialog-Bm2LYWhb.js";import"./DraggableList-BKF9Kuwl.js";import"./search-DrsueRnd.js";import"./Input-DJ6MiMh_.js";import"./useControlled-ZBCcjOJi.js";import"./Button-DZYZZvZz.js";import"./small-cross-B1S7LnfD.js";import"./ActionButton-DH9h44Al.js";import"./Checkbox-CJqLusV1.js";import"./useValueChanged-DYWR0khf.js";import"./CollapsiblePanel-zk9ZxzpR.js";import"./MultiColumnSortDialog-CUpRvVWU.js";import"./MenuTrigger-B1Lm0LL5.js";import"./CompositeItem-h8YISAEh.js";import"./ToolbarRootContext-BY5M87wV.js";import"./getDisabledMountTransitionStyles-Butv2vF5.js";import"./getPseudoElementBounds-BRoXmMe-.js";import"./chevron-down-BybrbSIU.js";import"./index-BqaXp55y.js";import"./error-IUDeQ-Lf.js";import"./BaseCbacBanner-0mX1MplM.js";import"./makeExternalStore-3zKJ5_AP.js";import"./Tooltip-CT4INsO4.js";import"./PopoverPopup-D2wQ8s1I.js";import"./debounce-BB3252tl.js";import"./tick-BzU5rGKz.js";import"./DropdownField-Cx1jh9K8.js";import"./isEqual-DKH62cLk.js";import"./withOsdkMetrics-DT7zQxuO.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
