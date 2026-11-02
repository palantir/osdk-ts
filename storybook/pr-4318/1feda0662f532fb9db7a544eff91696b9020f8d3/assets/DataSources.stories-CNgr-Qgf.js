import{j as r}from"./iframe-CC2ptI8P.js";import{O as b}from"./object-table-cyl8U4nZ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Ia7Iqu0g.js";import{u as g}from"./useOsdkClient-CyK88aLW.js";import"./preload-helper-DJhSNMV6.js";import"./Table-B2Pl64Eo.js";import"./index-84SYJq0E.js";import"./Dialog-B6ueZDGs.js";import"./cross-6eZZZefX.js";import"./svgIconContainer-aq_zJjvF.js";import"./useBaseUiId-BCidQo4j.js";import"./InternalBackdrop-BYfcK4gR.js";import"./composite-BKy8zjFJ.js";import"./index-DamSmk8t.js";import"./index-DyTGXUkB.js";import"./index-EB8pHHv1.js";import"./useEventCallback-9nnFNI3V.js";import"./SkeletonBar-DyZk7EQt.js";import"./LoadingCell-DicG8Dj_.js";import"./ColumnConfigDialog-BY30hZi8.js";import"./DraggableList-DqtqQ5p0.js";import"./search-CUgQ5xTX.js";import"./Input-_srjMwb1.js";import"./useControlled-DQuDgCM-.js";import"./Button-CefAX4Ei.js";import"./small-cross-BgV8ZaTM.js";import"./ActionButton-BYu3NJY8.js";import"./Checkbox-CcP75v4j.js";import"./useValueChanged-DuD7hXBK.js";import"./CollapsiblePanel-BWf4fg_T.js";import"./MultiColumnSortDialog-Bb7NpcEt.js";import"./MenuTrigger-D1rJZxiT.js";import"./CompositeItem-CDqASXyT.js";import"./ToolbarRootContext-DJFAvWHQ.js";import"./getDisabledMountTransitionStyles-MYkNe9cm.js";import"./getPseudoElementBounds-C_dkJ1tF.js";import"./chevron-down-CoZSOIuk.js";import"./index-DPANitfT.js";import"./error-CdNmuOhr.js";import"./BaseCbacBanner-DQkZsN8i.js";import"./makeExternalStore-LEyTDUuD.js";import"./Tooltip-S4cmKOsn.js";import"./PopoverPopup-DW-tLpwu.js";import"./debounce-Ba7F9S5L.js";import"./tick-tjdhehOt.js";import"./DropdownField-DH29rfQh.js";import"./isEqual-Crk9DI8k.js";import"./withOsdkMetrics-dqavG6zz.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
