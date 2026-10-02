import{j as r}from"./iframe-BwJP8SAz.js";import{O as b}from"./object-table-CrHQBWum.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CBFuQ5zj.js";import{u as g}from"./useOsdkClient-DNt2UGx3.js";import"./preload-helper-C__v2HQV.js";import"./Table-C49xgZr-.js";import"./index-B1xmU5ac.js";import"./Dialog-CZd0Ulal.js";import"./cross-DiTZc7QM.js";import"./svgIconContainer-DMpafcgu.js";import"./useBaseUiId-C34DKKh6.js";import"./InternalBackdrop-KutqEmqy.js";import"./composite-a2q1QDdA.js";import"./index-C-xvBHp4.js";import"./index-Bx66jA38.js";import"./index-B0qPlz_Q.js";import"./useEventCallback-BFud_X33.js";import"./SkeletonBar-CizSDGiZ.js";import"./LoadingCell-DPQpBa5j.js";import"./ColumnConfigDialog-oa1RhDZt.js";import"./DraggableList-k-HxCwCD.js";import"./search-CesJa2BL.js";import"./Input-Biv1kBRN.js";import"./useControlled-ZLl_p6JX.js";import"./Button-C4Q4ezlI.js";import"./small-cross-C6anClUq.js";import"./ActionButton-DMCSebnl.js";import"./Checkbox-SS-r8qqb.js";import"./useValueChanged-o1Jhr7NX.js";import"./CollapsiblePanel-Xr396GTI.js";import"./MultiColumnSortDialog-7vlTQGgu.js";import"./MenuTrigger-DxJqJO4e.js";import"./CompositeItem-BsMyIE9-.js";import"./ToolbarRootContext-CBbcQ6qS.js";import"./getDisabledMountTransitionStyles-DUZGhC9n.js";import"./getPseudoElementBounds-B49v7X00.js";import"./chevron-down-DSU29Yd7.js";import"./index-Qo_wZuR8.js";import"./error-DWAlVBAx.js";import"./BaseCbacBanner-AL6lb7ES.js";import"./makeExternalStore-BWpOLj7v.js";import"./Tooltip-Crxsicsv.js";import"./PopoverPopup-Bi4N4TLm.js";import"./debounce-4RuFCHX-.js";import"./tick-DOgiNo6k.js";import"./DropdownField-Bgmj7boA.js";import"./isEqual-CYfrdvqG.js";import"./withOsdkMetrics-CHhNGKv-.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
