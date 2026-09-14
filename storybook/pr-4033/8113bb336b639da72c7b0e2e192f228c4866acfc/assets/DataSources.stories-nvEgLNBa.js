import{j as r}from"./iframe-DnMZhogX.js";import{O as b}from"./object-table-DKuYigWh.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DlrJOEKk.js";import{u as g}from"./useOsdkClient-BnFs3xMf.js";import"./preload-helper-D4NPUWDF.js";import"./Table-Du0QxviT.js";import"./index-C6vUCj3I.js";import"./Dialog-Coo3NzOA.js";import"./cross-B0Br0EiR.js";import"./svgIconContainer-BVAzBycF.js";import"./useBaseUiId-BQvmXl_6.js";import"./InternalBackdrop-bRjvxNXQ.js";import"./composite-C04hi1zy.js";import"./index-t2KVREOA.js";import"./index-CkhjCsS5.js";import"./index-C1Yu6uYj.js";import"./useEventCallback-CPVQW2c6.js";import"./SkeletonBar-BWUs5aOa.js";import"./LoadingCell-kkMdfEaE.js";import"./ColumnConfigDialog-DJri1zxJ.js";import"./DraggableList-vlwg7DuV.js";import"./search-Dq0e8pTI.js";import"./Input-LnfuE3I2.js";import"./useControlled-B2iKOn4D.js";import"./Button-DNd_NMyi.js";import"./small-cross-B3kXkk-5.js";import"./ActionButton-uko6JLNE.js";import"./Checkbox-sZn8KbS5.js";import"./useValueChanged-BNYopCoC.js";import"./CollapsiblePanel-CJMTMEOR.js";import"./MultiColumnSortDialog-DLt0iXml.js";import"./MenuTrigger-DshnL46j.js";import"./CompositeItem-r96J_nIs.js";import"./ToolbarRootContext-BocpL34Y.js";import"./getDisabledMountTransitionStyles-NTzjgmpy.js";import"./getPseudoElementBounds-2ZWhj0gz.js";import"./chevron-down-q0wNWe4O.js";import"./index-3k87IEg2.js";import"./error-DSDfnydb.js";import"./BaseCbacBanner-BqZmgPUx.js";import"./makeExternalStore-EsKTsg8A.js";import"./Tooltip-2H7h1LjR.js";import"./PopoverPopup-XYXFggLJ.js";import"./debounce-DRL1bJAs.js";import"./tick-BfcL4nFt.js";import"./DropdownField-mRbtMN2b.js";import"./isEqual-DBpRRl3J.js";import"./withOsdkMetrics-DSRao68Z.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
