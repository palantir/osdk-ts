import{j as r}from"./iframe-CEC11uQP.js";import{O as b}from"./object-table-DuMgzKLf.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-yrybIQBf.js";import{u as g}from"./useOsdkClient-_hJ9ISKZ.js";import"./preload-helper-DVVUuTHt.js";import"./Table-Be2vb7Zf.js";import"./index-PEoHNwfg.js";import"./Dialog-L3YbwTo_.js";import"./cross-D6kuzFqN.js";import"./svgIconContainer-CbD2_3IP.js";import"./useBaseUiId-BjpGd3DR.js";import"./InternalBackdrop-CwSZ3wqn.js";import"./composite-CmpMqd5k.js";import"./index-DrOphgIM.js";import"./index-B-Y9FXdo.js";import"./index-D7YNV7up.js";import"./useEventCallback-KH16WOxt.js";import"./SkeletonBar-CrVBs6Vj.js";import"./LoadingCell-DXUfmLgb.js";import"./ColumnConfigDialog-D6xjtDrO.js";import"./DraggableList-CIWCgkjr.js";import"./search-3jERTaIF.js";import"./Input-DBrhN4gs.js";import"./useControlled-DZwN9m8e.js";import"./Button-BJ7HsXYN.js";import"./small-cross-vfExAlhb.js";import"./ActionButton-D1g9DkB7.js";import"./Checkbox-CkA-twbz.js";import"./useValueChanged-DHCnr_zs.js";import"./CollapsiblePanel-DZwBeyX6.js";import"./MultiColumnSortDialog-rOt7hj7e.js";import"./MenuTrigger-CllGpCQB.js";import"./CompositeItem-Aj4qkjGh.js";import"./ToolbarRootContext-DUQNKsvO.js";import"./getDisabledMountTransitionStyles-jPjQ6amA.js";import"./getPseudoElementBounds-BITuD01w.js";import"./chevron-down-6kcuRK_B.js";import"./index-pK9n0EOx.js";import"./error-BC-ullpf.js";import"./BaseCbacBanner-BBrLfPZM.js";import"./makeExternalStore-BiM7hkBW.js";import"./Tooltip-CErMPFwN.js";import"./PopoverPopup-B-89m5SN.js";import"./debounce-DRRXJPFm.js";import"./tick-CrTzZGEG.js";import"./DropdownField-D7RrB7x7.js";import"./isEqual-BW6LqVFQ.js";import"./withOsdkMetrics-CHiNkmki.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
