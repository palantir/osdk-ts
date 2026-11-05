import{j as r}from"./iframe-CCpQdKcM.js";import{O as b}from"./object-table-DR1wy5nV.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-4IOkmfy8.js";import{u as g}from"./useOsdkClient-DPTADJgv.js";import"./preload-helper-BcC5NClT.js";import"./Table-DNG7-1A6.js";import"./index-D5kRSGTL.js";import"./Dialog-bwrhhn8j.js";import"./cross-BC47wddT.js";import"./svgIconContainer-D0YWtwPv.js";import"./useBaseUiId-wkrh1dan.js";import"./InternalBackdrop-0tCSKsfM.js";import"./composite-BPsF8oXT.js";import"./index-vQ0gYfTZ.js";import"./index-Da9G4TOJ.js";import"./index-BmXZZFpC.js";import"./useEventCallback-CsPxOccP.js";import"./SkeletonBar-BkJLIidD.js";import"./LoadingCell-CC1cY9v2.js";import"./ColumnConfigDialog-Bb79T2dQ.js";import"./DraggableList-CjjMI6hn.js";import"./search-Bo8XWJqp.js";import"./Input-DqLoo56V.js";import"./useControlled-D4_I-zYv.js";import"./Button-B4X_MUbo.js";import"./small-cross-CAUesoy1.js";import"./ActionButton-CHEJ8NBC.js";import"./Checkbox-7x6DDuqf.js";import"./useValueChanged-DJDOwxxY.js";import"./CollapsiblePanel-wkRu-vQO.js";import"./MultiColumnSortDialog-DNHdb5ol.js";import"./MenuTrigger-BOkD9n0V.js";import"./CompositeItem-BtN-TT4o.js";import"./ToolbarRootContext-Dxu4wH7j.js";import"./getDisabledMountTransitionStyles-DBiOGOcl.js";import"./getPseudoElementBounds-BEDo5e11.js";import"./chevron-down-DF5kUyWB.js";import"./index-BLKb_bgJ.js";import"./error-CnylztP4.js";import"./BaseCbacBanner-BR709oO7.js";import"./makeExternalStore-CdAfQAQ3.js";import"./Tooltip-VwjYwtbN.js";import"./PopoverPopup-CVqq9jQl.js";import"./debounce-Dbh2BnKn.js";import"./tick-D7yVxnRA.js";import"./DropdownField-BU_Oq5Hk.js";import"./isEqual-3yoq74id.js";import"./withOsdkMetrics-Kob29Pb2.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
