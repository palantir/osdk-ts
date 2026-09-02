import{j as r}from"./iframe-D4qPAS-g.js";import{O as b}from"./object-table-BX28yacF.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DQt6WInj.js";import{u as g}from"./useOsdkClient-8qjnjN0r.js";import"./preload-helper-Cg_a2s3G.js";import"./Table-DXOu-_2d.js";import"./index-CLuwBfL-.js";import"./Dialog-T8KIwU-W.js";import"./cross-BeSpWB-4.js";import"./svgIconContainer-DyP05NDR.js";import"./useBaseUiId-DFpk5L0M.js";import"./InternalBackdrop-BCUOLFmB.js";import"./composite-Bzf0kbFg.js";import"./index-jBWRZpUn.js";import"./index-B9EWrBZS.js";import"./index-qCSwMjTE.js";import"./useEventCallback-DXfhN2Zh.js";import"./SkeletonBar-DLFcpX-9.js";import"./LoadingCell-DPxg3Lqi.js";import"./ColumnConfigDialog-6HjVnjx5.js";import"./DraggableList-DoUi86Qx.js";import"./search-CcRZw135.js";import"./Input-D6VetiDp.js";import"./useControlled-Ci6llHGb.js";import"./Button-lgQljYGT.js";import"./small-cross-vwZ-5oTM.js";import"./ActionButton-xbf5tfe7.js";import"./Checkbox-BonnwpAs.js";import"./useValueChanged-HUtJMSWa.js";import"./CollapsiblePanel-CyD6m11V.js";import"./MultiColumnSortDialog-DVZ_dGNm.js";import"./MenuTrigger-dHoqD7w2.js";import"./CompositeItem-BJpP_05A.js";import"./ToolbarRootContext-BsbBQIdg.js";import"./getDisabledMountTransitionStyles-BBrffB6S.js";import"./getPseudoElementBounds-CrC2U4pM.js";import"./chevron-down-CLf1ZLUx.js";import"./index-B7qcuAjK.js";import"./error-CPIE49XR.js";import"./BaseCbacBanner-DA0RZay7.js";import"./makeExternalStore-CgE_KKYk.js";import"./Tooltip-B_aEd4tb.js";import"./PopoverPopup-D3WK50Q9.js";import"./debounce-T1mkMtT7.js";import"./tick-C58ydeQv.js";import"./DropdownField-CMloR0CL.js";import"./isEqual-0jzM0xZw.js";import"./withOsdkMetrics-DgCfGEzl.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
