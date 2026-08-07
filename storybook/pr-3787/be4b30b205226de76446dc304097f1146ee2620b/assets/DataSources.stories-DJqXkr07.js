import{j as r}from"./iframe-CsnoPo4e.js";import{O as b}from"./object-table-Dldqrjjm.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D04sTmpy.js";import{u as g}from"./useOsdkClient-u5ArgWr9.js";import"./preload-helper-UQcfqh8j.js";import"./Table-BTxYy1_w.js";import"./index-DZ3qlG1l.js";import"./Dialog-5YgEm-s6.js";import"./cross-BPR_-69Q.js";import"./svgIconContainer-CFRCp5eS.js";import"./useBaseUiId-Dk3ss80W.js";import"./InternalBackdrop-BY7A23Y2.js";import"./composite-BdrpEZOa.js";import"./index-BFy79Amf.js";import"./index-Bq5UoBBM.js";import"./index-BYQYU-5a.js";import"./useEventCallback-Cx9_0ZLB.js";import"./SkeletonBar-Dzn2oFUr.js";import"./LoadingCell-D7DEjcGg.js";import"./ColumnConfigDialog-BoXAbGCb.js";import"./DraggableList-eg49cQQG.js";import"./search-CZllTW2C.js";import"./Input-CSBvwDxa.js";import"./useControlled-CZuH-mvg.js";import"./isEqual-C_gmFGsA.js";import"./isObject-BWSgJwU1.js";import"./Button-DLN9VIMw.js";import"./ActionButton-BA8Yg624.js";import"./Checkbox-WULFa6we.js";import"./useValueChanged-DyrHwSjM.js";import"./CollapsiblePanel-h2tgmdHK.js";import"./MultiColumnSortDialog-CemaFyHy.js";import"./MenuTrigger-CvpENYNt.js";import"./CompositeItem-Bd6jvFk6.js";import"./ToolbarRootContext-DniWRCBD.js";import"./getDisabledMountTransitionStyles-DOU6cUq0.js";import"./getPseudoElementBounds-mePDcOZc.js";import"./chevron-down-2qd0pr4B.js";import"./index-JQtzoL2b.js";import"./error-GZDgkGyI.js";import"./BaseCbacBanner-CzbfLvv9.js";import"./makeExternalStore-3T-oM2Ef.js";import"./Tooltip-CN-YZsrK.js";import"./PopoverPopup-D2DNd5Pp.js";import"./toNumber-f0pSYljt.js";import"./tick-CXkXamOG.js";import"./DropdownField-DDmAlRJk.js";import"./withOsdkMetrics-D6nE0GJ0.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
