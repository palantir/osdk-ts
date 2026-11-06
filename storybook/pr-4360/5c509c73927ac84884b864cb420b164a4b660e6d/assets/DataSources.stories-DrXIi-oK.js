import{j as r}from"./iframe-BXxdMdy7.js";import{O as b}from"./object-table-CNkhkpH_.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BEA1I0U5.js";import{u as g}from"./useOsdkClient-9NpW0bp7.js";import"./preload-helper-CzdKpJOA.js";import"./Table-C2G7jwul.js";import"./index-BD4H0T12.js";import"./Dialog-DRHeSsTe.js";import"./cross-IC7VDHMx.js";import"./svgIconContainer-Cxa1Q93_.js";import"./useBaseUiId-CWV-_dal.js";import"./InternalBackdrop-DlV4ogxj.js";import"./composite-D8jBtBX-.js";import"./index-CHD8ML8j.js";import"./index-Bnop5Sxj.js";import"./index-C1UlsJzQ.js";import"./useEventCallback-B6HVMKXw.js";import"./SkeletonBar-wwZqpQeQ.js";import"./LoadingCell-D2ajqtvp.js";import"./ColumnConfigDialog-CPQQZ7e-.js";import"./DraggableList-DFo1VqJq.js";import"./search-BBZ4C5jZ.js";import"./Input-CqSjd8ip.js";import"./useControlled-BP-Dvf9O.js";import"./Button--SPNZNsz.js";import"./small-cross-D4fjM2kv.js";import"./ActionButton-ILi5qKYn.js";import"./Checkbox-92mH5DWz.js";import"./useValueChanged-CsAG0mUs.js";import"./CollapsiblePanel-DueIufvn.js";import"./MultiColumnSortDialog-lOlNrxYg.js";import"./MenuTrigger-6So7C7lu.js";import"./CompositeItem-DWha1o73.js";import"./ToolbarRootContext-CIB517xc.js";import"./getDisabledMountTransitionStyles-DvVBqQ0t.js";import"./getPseudoElementBounds-By8aQjXl.js";import"./chevron-down-CYALw_cH.js";import"./index-DS2LC4Xn.js";import"./error-xwnNQugq.js";import"./BaseCbacBanner-CdVh5FXB.js";import"./makeExternalStore-BdrikpT6.js";import"./Tooltip-BqajjhQu.js";import"./isObject-FTD3a_NI.js";import"./debounce-B5PrGahk.js";import"./tick-BiqOz0tA.js";import"./DropdownField-B_3SnluF.js";import"./isEqual-LLnZruSB.js";import"./_baseIsEqual-DfBqWpeE.js";import"./withOsdkMetrics-LqvHVeDk.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
