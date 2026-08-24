import{j as r}from"./iframe-BIgcXSDZ.js";import{O as b}from"./object-table-_RywpXF4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-S8CbdEnF.js";import{u as g}from"./useOsdkClient-DHZTS1gO.js";import"./preload-helper-I7b_Ch73.js";import"./Table-DotfhjQY.js";import"./index-DM8zfWsc.js";import"./Dialog-DykK4055.js";import"./cross-2eC_maeE.js";import"./svgIconContainer-CenQjbw3.js";import"./useBaseUiId-DcQenqe4.js";import"./InternalBackdrop-yc5qSodQ.js";import"./composite-3NX-rf4m.js";import"./index-CQ7oQ3AC.js";import"./index-CiZKwyh5.js";import"./index-8J_dNII4.js";import"./useEventCallback-B1L0skHy.js";import"./SkeletonBar-br23o8HZ.js";import"./LoadingCell-BOT6J6jL.js";import"./ColumnConfigDialog-DzugBcZL.js";import"./DraggableList-CAh5UQ6G.js";import"./search-BW9tAKbE.js";import"./Input-eEwOcgZF.js";import"./useControlled-BZIw4uYt.js";import"./Button-DFsV6Wzt.js";import"./small-cross-BPNqh88V.js";import"./ActionButton-BNjzCZrh.js";import"./Checkbox-B1KgIEsw.js";import"./useValueChanged-Dm5GnS4m.js";import"./CollapsiblePanel-CoeryTM7.js";import"./MultiColumnSortDialog-XQQGQuR1.js";import"./MenuTrigger-CJeh0sRw.js";import"./CompositeItem-AZoCKB1T.js";import"./ToolbarRootContext-DU0Y7qe6.js";import"./getDisabledMountTransitionStyles-CUA0J2Ai.js";import"./getPseudoElementBounds-CWCGnWko.js";import"./chevron-down-DaVoXduB.js";import"./index-Co6Wvvdj.js";import"./error-DVtZos_5.js";import"./BaseCbacBanner-CETulZJB.js";import"./makeExternalStore-DIX60yxh.js";import"./Tooltip-BCrH7ks-.js";import"./PopoverPopup-re9QpKIm.js";import"./debounce-Bmij6q9M.js";import"./tick-YabvmYPV.js";import"./DropdownField-Bi_mfmqp.js";import"./useDebouncedCallback-CuViuzMQ.js";import"./withOsdkMetrics-CSD8F9fY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
