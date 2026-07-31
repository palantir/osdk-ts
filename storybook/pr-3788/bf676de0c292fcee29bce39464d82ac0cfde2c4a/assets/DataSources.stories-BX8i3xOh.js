import{j as r}from"./iframe-CIS7R8S0.js";import{O as b}from"./object-table-BRD1LaCv.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DP7ztNU-.js";import{u as g}from"./useOsdkClient-DkCUuQgu.js";import"./preload-helper-CC0KEkYJ.js";import"./Table-vPXnTHDL.js";import"./index-BB05R3oj.js";import"./Dialog-jYt7TAkd.js";import"./cross-CypSL_mg.js";import"./svgIconContainer-DOCbxMNh.js";import"./useBaseUiId-Dx4TGSeb.js";import"./InternalBackdrop-B3HiLuVl.js";import"./composite-CQ8jq4un.js";import"./index-DM_wVMTu.js";import"./index-BKg_5Wuy.js";import"./index-Qbb5HOpD.js";import"./useEventCallback-DaJcuQ4l.js";import"./SkeletonBar-BdzAGyaZ.js";import"./LoadingCell-CGJ1Ce-Y.js";import"./ColumnConfigDialog-C15oeIig.js";import"./DraggableList-CySBtFi9.js";import"./search-CrRqmjmd.js";import"./Input-BbMczDPo.js";import"./useControlled-LRidnfkr.js";import"./isEqual-EKJAET8s.js";import"./isObject-CFesdK53.js";import"./Button-TVnROWVX.js";import"./ActionButton-CcVczjK6.js";import"./Checkbox-Wl3wBnfs.js";import"./useValueChanged-QRf8gN2r.js";import"./CollapsiblePanel-B5HdsVrp.js";import"./MultiColumnSortDialog-BWxk4_FC.js";import"./MenuTrigger-Bq45j4AP.js";import"./CompositeItem-DDPMwQ0l.js";import"./ToolbarRootContext-DAJLxMfM.js";import"./getDisabledMountTransitionStyles-hIgbxFBq.js";import"./getPseudoElementBounds-CmW25CrH.js";import"./chevron-down-BSAXsWfp.js";import"./index-DWJWtSQK.js";import"./error-dhKwelIe.js";import"./BaseCbacBanner-oSNgv8Qw.js";import"./makeExternalStore-RXScgX-m.js";import"./Tooltip-BJuu_c-9.js";import"./PopoverPopup-B7149Gul.js";import"./toNumber-OTthO2wW.js";import"./tick-BCb19KZc.js";import"./DropdownField-9gKqheEJ.js";import"./withOsdkMetrics-BwKjYpjZ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
