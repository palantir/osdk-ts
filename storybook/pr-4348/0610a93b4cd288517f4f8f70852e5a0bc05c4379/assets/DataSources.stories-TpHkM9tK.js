import{j as r}from"./iframe-x4Y4VSHV.js";import{O as b}from"./object-table-1cZIpCil.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BOO3f7ab.js";import{u as g}from"./useOsdkClient-Bh27IzO_.js";import"./preload-helper-wFwf1Z_7.js";import"./Table-C-oXinJO.js";import"./index-BTkF7OpO.js";import"./Dialog-D0myaYAC.js";import"./cross-34rpmbRR.js";import"./svgIconContainer-BRq3fj7v.js";import"./useBaseUiId-O7ZsVKwo.js";import"./InternalBackdrop-Bv0h497n.js";import"./composite-HDXk98Mo.js";import"./index-BcBc9KVj.js";import"./index-B3Hd8yqN.js";import"./index-CfRBgTVy.js";import"./useEventCallback-SHHnyPaE.js";import"./SkeletonBar-IY8wlZ6P.js";import"./LoadingCell-CPBTYhln.js";import"./ColumnConfigDialog-BgjiELGT.js";import"./DraggableList-BMxd087o.js";import"./search-t_lGFyp_.js";import"./Input-RqZQ3gi6.js";import"./useControlled-B1vBMtLm.js";import"./Button-D6WWCBJV.js";import"./small-cross-B7mLfu2a.js";import"./ActionButton-Bufn2px0.js";import"./Checkbox-CXM0rLwb.js";import"./useValueChanged-B_Sqxe_h.js";import"./CollapsiblePanel-Dlts5kAq.js";import"./MultiColumnSortDialog-uXuJ_gss.js";import"./MenuTrigger-dApCLvRy.js";import"./CompositeItem-gQ_2jip-.js";import"./ToolbarRootContext-BTpSmFWY.js";import"./getDisabledMountTransitionStyles-cT_E1wd_.js";import"./getPseudoElementBounds-DrAxvQVr.js";import"./chevron-down-DIIH-694.js";import"./index-B9Z4kBgT.js";import"./error-1h6EWorL.js";import"./BaseCbacBanner-CYc6azI0.js";import"./makeExternalStore-CRHmXcik.js";import"./Tooltip-CIUrl65j.js";import"./PopoverPopup-CMpyIGzp.js";import"./debounce-FKkJspwT.js";import"./tick-DJgmKu8k.js";import"./DropdownField-2L4uAddC.js";import"./isEqual-CIrx9idy.js";import"./withOsdkMetrics-LnVAi8HB.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
