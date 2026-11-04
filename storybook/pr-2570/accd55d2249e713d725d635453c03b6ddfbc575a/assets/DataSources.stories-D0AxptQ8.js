import{j as r}from"./iframe-BJ8SXgdR.js";import{O as b}from"./object-table-CWeCoiL5.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BMzTrv3s.js";import{u as g}from"./useOsdkClient-Dj34DS5Y.js";import"./preload-helper-V6nC4EeU.js";import"./Table-qAwHNlkQ.js";import"./index-Bw4Jw5oO.js";import"./Dialog-U1Dip0Gr.js";import"./cross-Cg7DwYSC.js";import"./svgIconContainer-CsUfQGRN.js";import"./useBaseUiId-M7m_99-n.js";import"./InternalBackdrop-CabKfl1h.js";import"./composite-BEEWgOuz.js";import"./index-DxcYU98l.js";import"./index--VHPLkHF.js";import"./index-ssIrkCkG.js";import"./useEventCallback-CinkpAtu.js";import"./SkeletonBar-DpuQzJmF.js";import"./LoadingCell-CuzgtItD.js";import"./ColumnConfigDialog-D6wmS011.js";import"./DraggableList-C3UvcNQn.js";import"./search-Dw_fxnZ-.js";import"./Input-Bx9J3YZM.js";import"./useControlled-CjUkOTZX.js";import"./Button-DRmMomPf.js";import"./small-cross-P3lS_YZs.js";import"./ActionButton-D89xaVN-.js";import"./Checkbox-BzzgzOmH.js";import"./useValueChanged-CUJ7FvbC.js";import"./CollapsiblePanel-WrEQ8Aj1.js";import"./MultiColumnSortDialog-D3aS1vk5.js";import"./MenuTrigger-DO4jvPyO.js";import"./CompositeItem-ehmW8yGD.js";import"./ToolbarRootContext-r3sR1laS.js";import"./getDisabledMountTransitionStyles-tfkHieO2.js";import"./getPseudoElementBounds-Dbt1NZMt.js";import"./chevron-down-oM9ZgJIx.js";import"./index-CctNg8Ui.js";import"./error-C-Q6AIHf.js";import"./BaseCbacBanner-DasqhKcc.js";import"./makeExternalStore-CufKkCEE.js";import"./Tooltip-DOYwrPSE.js";import"./PopoverPopup-DomnOyt_.js";import"./debounce-Hk7rnih5.js";import"./tick-p2qDXWT_.js";import"./DropdownField-BHqZuFPG.js";import"./isEqual-B9nd0WBh.js";import"./withOsdkMetrics-CteTFdb3.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
