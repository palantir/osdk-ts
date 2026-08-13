import{j as r}from"./iframe-Ctqv_q3b.js";import{O as b}from"./object-table-D1q_GFkq.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CIlAchFm.js";import{u as g}from"./useOsdkClient-B_wBAAwl.js";import"./preload-helper-CQZuIYGg.js";import"./Table-DX8cooS5.js";import"./index-COouxyZO.js";import"./Dialog-CZBtpFpH.js";import"./cross-Cwp0jMM_.js";import"./svgIconContainer-CpTpThnP.js";import"./useBaseUiId-DZHr37Fe.js";import"./InternalBackdrop-DhznBDyD.js";import"./composite-CWKR683w.js";import"./index-YZLh4MO8.js";import"./index-KwZ8xn8U.js";import"./index-Hhv0iI_J.js";import"./useEventCallback-CmV8vQyW.js";import"./SkeletonBar-Cgbm4U0J.js";import"./LoadingCell-DstG4qeG.js";import"./ColumnConfigDialog-Cs6V6saO.js";import"./DraggableList-CF1TbWHs.js";import"./search-qo74ErBn.js";import"./Input-cHlxiCnh.js";import"./useControlled-rzg3Zo0J.js";import"./Button-BQ9Vn2Zh.js";import"./small-cross-DD8H8p1F.js";import"./ActionButton-jqwciMN5.js";import"./Checkbox-DM5hF1QA.js";import"./useValueChanged-C9Jd57kb.js";import"./CollapsiblePanel-C9F3DUe5.js";import"./MultiColumnSortDialog-BWtpvuXM.js";import"./MenuTrigger-D1TGRnu9.js";import"./CompositeItem-CT2tdkFE.js";import"./ToolbarRootContext-CGZ73ibv.js";import"./getDisabledMountTransitionStyles-du4TooiD.js";import"./getPseudoElementBounds-IKL9M1m3.js";import"./chevron-down-BZmTuAF0.js";import"./index-qzd4Xvj_.js";import"./error-TI6uq-Zv.js";import"./BaseCbacBanner-DnwjE2KC.js";import"./makeExternalStore-BVIKqe7o.js";import"./Tooltip-CUxuce_-.js";import"./PopoverPopup-Dq--FcNp.js";import"./debounce-BeN_6MIh.js";import"./tick-C4tZR6co.js";import"./DropdownField-Cj9q5oOl.js";import"./isEqual-CBw6myZ4.js";import"./withOsdkMetrics-CpCINEs8.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
