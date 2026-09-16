import{j as r}from"./iframe-C_0-Ny_N.js";import{O as b}from"./object-table-DGQgtl_w.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-COrehyTj.js";import{u as g}from"./useOsdkClient-qcjIUx1B.js";import"./preload-helper-Cs_UzwR6.js";import"./Table-Dgvo0A5I.js";import"./index-BCapEaKB.js";import"./Dialog-BbxXOlT6.js";import"./cross-Dhbxwhb2.js";import"./svgIconContainer-DAGFJod5.js";import"./useBaseUiId-B7Keq3x8.js";import"./InternalBackdrop-DSC0itKR.js";import"./composite-BKxtxXCT.js";import"./index-Bewi1ToU.js";import"./index-D3nPMosa.js";import"./index-DCJ2O27O.js";import"./useEventCallback-CHNZdE5h.js";import"./SkeletonBar-CoeG_Gyn.js";import"./LoadingCell-DR0WPrbM.js";import"./ColumnConfigDialog-CkHl9bEd.js";import"./DraggableList-Do4A-fJS.js";import"./search-BKcV1gVw.js";import"./Input-BF9DmCeg.js";import"./useControlled-DmQkJsyf.js";import"./Button-g8Y5a3bQ.js";import"./small-cross-CFI7QvS0.js";import"./ActionButton-D9LJ1Y0h.js";import"./Checkbox-CDawQgr1.js";import"./useValueChanged-CdL69oAW.js";import"./CollapsiblePanel-CL0PnPaH.js";import"./MultiColumnSortDialog-C19wCna8.js";import"./MenuTrigger-NDFVm2E2.js";import"./CompositeItem-BeOy_iQJ.js";import"./ToolbarRootContext-DkY9S2-W.js";import"./getDisabledMountTransitionStyles-CpRzurrr.js";import"./getPseudoElementBounds-NZN6UuUV.js";import"./chevron-down-C0ibfMMv.js";import"./index-CrSkVWMy.js";import"./error-DAsTyxDt.js";import"./BaseCbacBanner-CdzWkyww.js";import"./makeExternalStore-CXzzR7o8.js";import"./Tooltip-CSoPyId7.js";import"./PopoverPopup-CA1dNHn3.js";import"./debounce-CsMAmyDS.js";import"./tick-CZldnOuP.js";import"./DropdownField-DvVkFAtM.js";import"./isEqual-dkeqRnY_.js";import"./withOsdkMetrics-rrME1YBQ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
