import{j as r}from"./iframe-DTTRhbjz.js";import{O as b}from"./object-table-CSCzKFD6.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-LrSwQZsJ.js";import{u as g}from"./useOsdkClient-DbJUAzjP.js";import"./preload-helper-DZ8L_H7u.js";import"./Table-CpecjfT5.js";import"./index-CUoqkEXP.js";import"./Dialog-BfK58nrJ.js";import"./cross-DxV9JdK2.js";import"./svgIconContainer-B_ocSrmO.js";import"./useBaseUiId-BmoDTCf9.js";import"./InternalBackdrop-rtSS2ycu.js";import"./composite-oJZ0BVll.js";import"./index-zn7h2p8a.js";import"./index-V6cd4RX1.js";import"./index-Dcu6sCXm.js";import"./useEventCallback-BtfkEBd9.js";import"./SkeletonBar-DXkSeF2t.js";import"./LoadingCell-y1Zb8CB1.js";import"./ColumnConfigDialog-FvnOSS5M.js";import"./DraggableList-DPKzfUhR.js";import"./search-B7jXOPcp.js";import"./Input-qArtebK8.js";import"./useControlled-hxzK8_TE.js";import"./Button-C9Wmar6u.js";import"./small-cross-DLGahr5f.js";import"./ActionButton-B-CndYNu.js";import"./Checkbox-Ci3x7wul.js";import"./useValueChanged-DtuqEhdD.js";import"./CollapsiblePanel-CUxqdNXN.js";import"./MultiColumnSortDialog-BiM6tuW7.js";import"./MenuTrigger-BNlJoVy-.js";import"./CompositeItem-CyxD93o0.js";import"./ToolbarRootContext-C0tIZT9m.js";import"./getDisabledMountTransitionStyles-B_CQ4ePe.js";import"./getPseudoElementBounds-CTJoaJ_q.js";import"./chevron-down-tY3lDuMM.js";import"./index-VjiLdOhj.js";import"./error-DVsJjH4l.js";import"./BaseCbacBanner-D6FC6U4k.js";import"./makeExternalStore-DSiAtSgU.js";import"./Tooltip-F2Jve4L0.js";import"./PopoverPopup-CYgRzRPM.js";import"./debounce-Cx_WnQAf.js";import"./tick-CM5fRMiT.js";import"./DropdownField-ZTNTLS3m.js";import"./isEqual-BSqo0_8f.js";import"./withOsdkMetrics-Bai-2IUn.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
