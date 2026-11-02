import{j as r}from"./iframe-BnrsOFns.js";import{O as b}from"./object-table--cX5SXPG.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BGj7GcIa.js";import{u as g}from"./useOsdkClient-zEriq08y.js";import"./preload-helper-C6w5d29Q.js";import"./Table-BvdRlk5o.js";import"./index-tNt1Rsha.js";import"./Dialog-DM-IrXvU.js";import"./cross-DmYEQL4N.js";import"./svgIconContainer-DHTpClH2.js";import"./useBaseUiId-CnooZjs2.js";import"./InternalBackdrop-BaF0YRGc.js";import"./composite-D8-ppVWB.js";import"./index-BGU_qlki.js";import"./index-COCOeC7h.js";import"./index-BZW31MjY.js";import"./useEventCallback-CZng5Hbt.js";import"./SkeletonBar-6aKx3xfA.js";import"./LoadingCell-00htEzT2.js";import"./ColumnConfigDialog-CAUIIA7Q.js";import"./DraggableList-BSQYrR59.js";import"./search-Ch8w7dwR.js";import"./Input-Bh0uDmot.js";import"./useControlled-BkaP8RLt.js";import"./Button-CQyg3zRK.js";import"./small-cross-C6Err9V7.js";import"./ActionButton-zIEW8ID5.js";import"./Checkbox-B6BRsvTM.js";import"./useValueChanged-qkyo_zF3.js";import"./CollapsiblePanel-gvQpiFoS.js";import"./MultiColumnSortDialog-BBcnd61j.js";import"./MenuTrigger-o53B80RM.js";import"./CompositeItem-CoclYseh.js";import"./ToolbarRootContext-DKbWnJ_n.js";import"./getDisabledMountTransitionStyles-Da1PpZL2.js";import"./getPseudoElementBounds-yJ_WHN74.js";import"./chevron-down-CJXJGt0n.js";import"./index-D5j7HDb2.js";import"./error-5DZ7K3HO.js";import"./BaseCbacBanner-u8F6KIgM.js";import"./makeExternalStore-EV-ALQ58.js";import"./Tooltip-BujJSCDB.js";import"./PopoverPopup-C5dDiQD8.js";import"./debounce-CkNSqP1Q.js";import"./tick-CjP_LBfV.js";import"./DropdownField-STvnB7PE.js";import"./isEqual-Bzzv7Zaz.js";import"./withOsdkMetrics-zFHODIcB.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
