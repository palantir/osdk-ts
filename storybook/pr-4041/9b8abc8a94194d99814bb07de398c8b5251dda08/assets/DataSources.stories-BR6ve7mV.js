import{j as r}from"./iframe-C2aef3Jo.js";import{O as b}from"./object-table-DMcKKEk4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D1nNT13M.js";import{u as g}from"./useOsdkClient-2T4P3ooX.js";import"./preload-helper-B0E-WsIe.js";import"./Table-pflxRlkp.js";import"./index-CsHYpv_s.js";import"./Dialog-BtdNvTzc.js";import"./cross-mqWCDQwu.js";import"./svgIconContainer-BXdP-ypI.js";import"./useBaseUiId-BjYhZ9YY.js";import"./InternalBackdrop-BlKAfi2x.js";import"./composite-B2RxptoP.js";import"./index-DQucsIw7.js";import"./index-Cp-EDvHL.js";import"./index-CyH7L4rU.js";import"./useEventCallback-CoxthiVL.js";import"./SkeletonBar-gnedLyA8.js";import"./LoadingCell-DdO7Ovgw.js";import"./ColumnConfigDialog-C2N80SQq.js";import"./DraggableList-BgAgl3DM.js";import"./search-D59Jmp9F.js";import"./Input-DZdZFiVD.js";import"./useControlled-D_x1ayHM.js";import"./Button-Cg9SUJSs.js";import"./small-cross-DtWUwlkL.js";import"./ActionButton-CfluOSPS.js";import"./Checkbox-CQZyZMOV.js";import"./useValueChanged-CVWJNNpw.js";import"./CollapsiblePanel-BUi3el3A.js";import"./MultiColumnSortDialog-B1FOLAbC.js";import"./MenuTrigger-wDdcEy_H.js";import"./CompositeItem-083J1aRu.js";import"./ToolbarRootContext-B7lRNTOm.js";import"./getDisabledMountTransitionStyles-BNLNL_0E.js";import"./getPseudoElementBounds-CD5dDWGk.js";import"./chevron-down-DQZukdfl.js";import"./index-aIdw8oWM.js";import"./error-D0kSZtEZ.js";import"./BaseCbacBanner-BiWMelEa.js";import"./makeExternalStore-Bm5e9_5-.js";import"./Tooltip-DPyBGWcj.js";import"./PopoverPopup-DvqStvko.js";import"./debounce-BmYDT_B0.js";import"./tick-CqaW51QZ.js";import"./DropdownField-CILDnmw3.js";import"./isEqual-BvfB1Oe3.js";import"./withOsdkMetrics-DRjEcDDc.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
