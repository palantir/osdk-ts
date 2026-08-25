import{j as r}from"./iframe-Li1-lWs7.js";import{O as b}from"./object-table-CjDY3c5S.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D3YOu32v.js";import{u as g}from"./useOsdkClient-B91Jh8bD.js";import"./preload-helper-CGmo2FMo.js";import"./Table-DNTTlJ15.js";import"./index-DoD8b1_q.js";import"./Dialog-clI1gzeX.js";import"./cross-DMmA-RfG.js";import"./svgIconContainer-CVRufNNl.js";import"./useBaseUiId-Br9Ryls1.js";import"./InternalBackdrop-D9X1KC0Z.js";import"./composite-JV6W8eaJ.js";import"./index-B_W4EPm5.js";import"./index-7QzYiAri.js";import"./index-D8Tk9Xkv.js";import"./useEventCallback-CkXzoATD.js";import"./SkeletonBar-KeXvglh_.js";import"./LoadingCell-CQgaEp-a.js";import"./ColumnConfigDialog-D6bJWZ62.js";import"./DraggableList-CcrcGGcJ.js";import"./search-DMt9s_ci.js";import"./Input-DM_Alj7t.js";import"./useControlled-CCuESsXx.js";import"./Button-8SX-EUR0.js";import"./small-cross-DXbOoBXF.js";import"./ActionButton-CEMN0Zdb.js";import"./Checkbox-DEiq_oH5.js";import"./useValueChanged-DilJhcWz.js";import"./CollapsiblePanel-C1kmCMJF.js";import"./MultiColumnSortDialog-BeKEe_uK.js";import"./MenuTrigger-DZnftTrY.js";import"./CompositeItem-BwUkyu_e.js";import"./ToolbarRootContext-DsnXZPtT.js";import"./getDisabledMountTransitionStyles-BQJYWB5I.js";import"./getPseudoElementBounds-Ppn7heVn.js";import"./chevron-down-BDBeFFgf.js";import"./index-BjEz7scL.js";import"./error-BiqjEWby.js";import"./BaseCbacBanner-DTvtqYPX.js";import"./makeExternalStore-CWQvlKnh.js";import"./Tooltip-DTKsc1QU.js";import"./PopoverPopup-CqHFde_Q.js";import"./debounce-CxboYieA.js";import"./tick-DR1AzeWG.js";import"./DropdownField-6i2nL-Zb.js";import"./isEqual-CK2JvR_Y.js";import"./withOsdkMetrics-_pRQ_AuF.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
