import{j as r}from"./iframe-CVr9LoxM.js";import{O as b}from"./object-table-BAwa8E0X.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C6AtsFx2.js";import{u as g}from"./useOsdkClient-DdROgngo.js";import"./preload-helper-B3cY2-AW.js";import"./Table-IkqPuQ6B.js";import"./index-Df4Vb_Rg.js";import"./Dialog-Bvfn0Z3y.js";import"./cross-CBN4pK4_.js";import"./svgIconContainer-BVc8zREf.js";import"./useBaseUiId-BgjPqsl9.js";import"./InternalBackdrop-B9YxhYvi.js";import"./composite-CWgHrWA4.js";import"./index-F2yAeMdf.js";import"./index-HRRYB8HE.js";import"./index-DjjNgAfl.js";import"./useEventCallback-B-NY5P9l.js";import"./SkeletonBar-NYup2M2c.js";import"./LoadingCell-DTpfEbFX.js";import"./ColumnConfigDialog-CM1tbYEm.js";import"./DraggableList-CWLH3RMw.js";import"./search-Brj5g3oE.js";import"./Input-BcPZGFIr.js";import"./useControlled-smGAEf-G.js";import"./Button-vPPL3ll8.js";import"./small-cross-DABERClE.js";import"./ActionButton-D0hhWxeW.js";import"./Checkbox-DDyQcp9_.js";import"./useValueChanged-DNfH4ZzU.js";import"./CollapsiblePanel-C0K5tgYw.js";import"./MultiColumnSortDialog-npyZMECM.js";import"./MenuTrigger-5w2KnMTa.js";import"./CompositeItem-B09-p_Fm.js";import"./ToolbarRootContext-CLf2yNEL.js";import"./getDisabledMountTransitionStyles-DmWpyYJT.js";import"./getPseudoElementBounds-CCTtg9pk.js";import"./chevron-down-B0k-btX-.js";import"./index-Clqhcc_a.js";import"./error-BXLmWA6n.js";import"./BaseCbacBanner-C5szwo-7.js";import"./makeExternalStore--O5_5o65.js";import"./Tooltip-BiirjfzW.js";import"./PopoverPopup-DM6VnfOU.js";import"./debounce-BAwOJApV.js";import"./tick-Bnn8MQdF.js";import"./DropdownField-CgCH9W6l.js";import"./isEqual-D8JbxFr7.js";import"./withOsdkMetrics-DBLS2NQA.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
