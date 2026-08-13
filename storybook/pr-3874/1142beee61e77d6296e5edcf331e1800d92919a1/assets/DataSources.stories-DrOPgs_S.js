import{j as r}from"./iframe-BqWWYvNh.js";import{O as b}from"./object-table-D1i_MteR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cs2IxHfF.js";import{u as g}from"./useOsdkClient-HveXGpzo.js";import"./preload-helper-xbJFiFoV.js";import"./Table-BX-SSoai.js";import"./index-CHmc-CZF.js";import"./Dialog-C-ikag1c.js";import"./cross-BaCDbzQm.js";import"./svgIconContainer-D7PWuspg.js";import"./useBaseUiId-L7xZvVKI.js";import"./InternalBackdrop-BOKLllZf.js";import"./composite-B43hsjOr.js";import"./index-CJAJ6Hem.js";import"./index-UQo3BLiH.js";import"./index-C0RuiYT6.js";import"./useEventCallback-C7SpahXs.js";import"./SkeletonBar-CglVjYVB.js";import"./LoadingCell-DezR9abp.js";import"./ColumnConfigDialog-Loanbrqk.js";import"./DraggableList-DZYCzNct.js";import"./search-BZ-aP0AE.js";import"./Input-CFZ5X7h6.js";import"./useControlled-3vqQ5CZv.js";import"./Button-Drs29Umo.js";import"./small-cross-9yRNchJC.js";import"./ActionButton-CbAlOb7R.js";import"./Checkbox-BTcuEy4-.js";import"./useValueChanged-Bph4xhtR.js";import"./CollapsiblePanel-DwW1Bs6d.js";import"./MultiColumnSortDialog-D6neb_LS.js";import"./MenuTrigger-BXX-G2Zm.js";import"./CompositeItem-CC_bbvNo.js";import"./ToolbarRootContext-DXJ8TGiF.js";import"./getDisabledMountTransitionStyles-gc3ASc_K.js";import"./getPseudoElementBounds-DQIHMp8o.js";import"./chevron-down-DlgsXnWQ.js";import"./index-i_nBIU9X.js";import"./error-B_VRdTx7.js";import"./BaseCbacBanner-DtrJgJpz.js";import"./makeExternalStore-Brum0TCo.js";import"./Tooltip-CbfSD75c.js";import"./PopoverPopup-BOEEd-B9.js";import"./debounce-uF2HrJP8.js";import"./tick-DMZ_0kJh.js";import"./DropdownField-BdVf8YUK.js";import"./isEqual-D6LwsQsu.js";import"./withOsdkMetrics-BbVO6-6g.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
