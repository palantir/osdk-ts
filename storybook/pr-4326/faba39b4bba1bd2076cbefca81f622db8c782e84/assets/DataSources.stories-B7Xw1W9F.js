import{j as r}from"./iframe-DRt3Isqi.js";import{O as b}from"./object-table-W0q1sdDx.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B_j9_Fhb.js";import{u as g}from"./useOsdkClient-B72RjCJ-.js";import"./preload-helper-P_ieVj0_.js";import"./Table-B_a1aUTP.js";import"./index-VZHhRlUf.js";import"./Dialog-BsDbymC6.js";import"./cross-DLSleMt0.js";import"./svgIconContainer-BmwptnE7.js";import"./useBaseUiId-CztA3AVu.js";import"./InternalBackdrop-EjSNiGN3.js";import"./composite-D3E114vb.js";import"./index-BQPVtwuZ.js";import"./index-CrOP_FhY.js";import"./index-VXwizB6q.js";import"./useEventCallback-BHN3JDT4.js";import"./SkeletonBar-BSkDtycC.js";import"./LoadingCell-DazkA7t9.js";import"./ColumnConfigDialog-TSrFnXld.js";import"./DraggableList-Bhy4xN1M.js";import"./search-CWVCG-ID.js";import"./Input-_E04yI64.js";import"./useControlled-DZ1rHDeJ.js";import"./Button-K9hISpnC.js";import"./small-cross-COsO8y4M.js";import"./ActionButton-BmJ2vYOO.js";import"./Checkbox-CWz6jXA7.js";import"./useValueChanged-BriOV7QZ.js";import"./CollapsiblePanel-CXb3tt2d.js";import"./MultiColumnSortDialog-CWaWKl8p.js";import"./MenuTrigger-CjGuIo7E.js";import"./CompositeItem-1obZGpSi.js";import"./ToolbarRootContext-ChcKGMcF.js";import"./getDisabledMountTransitionStyles-B9hx_YPP.js";import"./getPseudoElementBounds-Dk-P-RRg.js";import"./chevron-down-BpTeELc3.js";import"./index-BfZquH4_.js";import"./error-WyHMdGFH.js";import"./BaseCbacBanner-CW08FqFB.js";import"./makeExternalStore-IMLrRmfN.js";import"./Tooltip-B5fG8wMR.js";import"./isObject-DRxxfzO8.js";import"./debounce-D5V8bM6L.js";import"./tick-C84Ma0-E.js";import"./DropdownField-DukSAwck.js";import"./isEqual-CANLVVFg.js";import"./_baseIsEqual-BwQ5mLM5.js";import"./withOsdkMetrics-Drl0wAn6.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
