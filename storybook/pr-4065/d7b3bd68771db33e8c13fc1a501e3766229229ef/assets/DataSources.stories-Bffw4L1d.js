import{j as r}from"./iframe-BkN_38ur.js";import{O as b}from"./object-table-BxK2SFkH.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CpkjYFmM.js";import{u as g}from"./useOsdkClient-C7M0gZ9G.js";import"./preload-helper-BysSMJyv.js";import"./Table-CHYRgWFW.js";import"./index-VCNAMxPB.js";import"./Dialog-CU_R9RQd.js";import"./cross-QuNtfWNx.js";import"./svgIconContainer-CleM6Ots.js";import"./useBaseUiId-DDXpceTn.js";import"./InternalBackdrop-2b4i1OXO.js";import"./composite-DTpp6U8p.js";import"./index-B8WRO5V1.js";import"./index-B4VzS2Ja.js";import"./index-PtHv8Npb.js";import"./useEventCallback-CfnnU2xW.js";import"./SkeletonBar-BLri9E0k.js";import"./LoadingCell-D8UndlJ7.js";import"./ColumnConfigDialog-BRCStEaP.js";import"./DraggableList-CBM_kRa4.js";import"./search-DLVM4UyR.js";import"./Input-BB5NVTdl.js";import"./useControlled-Cl0okxKJ.js";import"./Button-Bz7lNxsT.js";import"./small-cross-Bq-afI8J.js";import"./ActionButton-BEokvpGB.js";import"./Checkbox-B2Ex9sZd.js";import"./useValueChanged-sVrHRRrg.js";import"./CollapsiblePanel-o_jOyFnm.js";import"./MultiColumnSortDialog-DJ3dPbhu.js";import"./MenuTrigger-Baz3vKii.js";import"./CompositeItem-DeZdbGTL.js";import"./ToolbarRootContext-DsnyQOq9.js";import"./getDisabledMountTransitionStyles-B4uk2RCK.js";import"./getPseudoElementBounds-DqBsVHMm.js";import"./chevron-down-DQ_KkOEg.js";import"./index-tJ30rsuQ.js";import"./error-B2ZdHohT.js";import"./BaseCbacBanner-B7QoD-f1.js";import"./makeExternalStore-BQFFGO0N.js";import"./Tooltip-DB2l-4XV.js";import"./PopoverPopup-BGPwoB7x.js";import"./debounce-BH4zeBLy.js";import"./tick-Ja0-lS9C.js";import"./DropdownField-DMG193d-.js";import"./isEqual-DV7eM8kA.js";import"./withOsdkMetrics-Bgcs-XTD.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
