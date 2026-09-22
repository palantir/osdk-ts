import{j as r}from"./iframe-DbFL1YKD.js";import{O as b}from"./object-table-E1TD6FiH.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BR4fPXLZ.js";import{u as g}from"./useOsdkClient-CwS7VwCc.js";import"./preload-helper-DPeLqFG0.js";import"./Table-4fjAyFff.js";import"./index-BpVl4HIU.js";import"./Dialog-nIfIufiq.js";import"./cross-BbsbdKVz.js";import"./svgIconContainer-DmqA5_t8.js";import"./useBaseUiId-DpJu2OQl.js";import"./InternalBackdrop-CWJBApus.js";import"./composite-DUwAvhnX.js";import"./index-Dqg20C0A.js";import"./index-BusxuARM.js";import"./index-pnTqVHDC.js";import"./useEventCallback-Dp_d2SUA.js";import"./SkeletonBar-C5Dm8uJU.js";import"./LoadingCell-NDk8zku3.js";import"./ColumnConfigDialog-BEksKmdc.js";import"./DraggableList-7WaRfhpo.js";import"./search-DfBNorlD.js";import"./Input-Z3iSNu5L.js";import"./useControlled-CC7pAFD9.js";import"./Button-DsQQlkgI.js";import"./small-cross-CXtNxeYe.js";import"./ActionButton-DojK71a-.js";import"./Checkbox-C_WkvYth.js";import"./useValueChanged-rzn5oUi-.js";import"./CollapsiblePanel-rxa4K0IB.js";import"./MultiColumnSortDialog-KMu4fX3c.js";import"./MenuTrigger-BPE6GEGI.js";import"./CompositeItem-BFMnxKL4.js";import"./ToolbarRootContext-BGVeLiJB.js";import"./getDisabledMountTransitionStyles-Co12HikA.js";import"./getPseudoElementBounds-C-Gj9_OL.js";import"./chevron-down-BFigfpWF.js";import"./index-Dqpnei48.js";import"./error-B_or4gbN.js";import"./BaseCbacBanner-BAqqImX8.js";import"./makeExternalStore-DCuWZO1g.js";import"./Tooltip-BnTll5Ro.js";import"./PopoverPopup-BpDStnyX.js";import"./debounce-B-7wdJBB.js";import"./tick-C7lpv1d9.js";import"./DropdownField-DzYuycL4.js";import"./isEqual-BpI-y_2L.js";import"./withOsdkMetrics-CCBEdesf.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
