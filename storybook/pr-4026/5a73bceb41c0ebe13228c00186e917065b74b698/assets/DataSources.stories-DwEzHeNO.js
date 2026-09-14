import{j as r}from"./iframe-DGk-Gwvb.js";import{O as b}from"./object-table-B1GB1Px_.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C5LWa4gj.js";import{u as g}from"./useOsdkClient-nqMxZ_CW.js";import"./preload-helper-DZHE4yfF.js";import"./Table-CGvoeQiy.js";import"./index-CHt6784l.js";import"./Dialog-CoyTV2xE.js";import"./cross-Bv56pu7B.js";import"./svgIconContainer-DWhpBW2K.js";import"./useBaseUiId-CYF4ttQ0.js";import"./InternalBackdrop-2qC76XrM.js";import"./composite-UKbswMLH.js";import"./index--TUwCCTO.js";import"./index-Y3fUVY7j.js";import"./index-Dmy594Bz.js";import"./useEventCallback-2nXbXvpA.js";import"./SkeletonBar-C2y2uMzP.js";import"./LoadingCell-DsGqRk6L.js";import"./ColumnConfigDialog-BG7xCsyo.js";import"./DraggableList-e-Vui3PK.js";import"./search-DuL1IKxe.js";import"./Input-lpBjDH3J.js";import"./useControlled-BLk_1CnQ.js";import"./Button-D8mEnRQz.js";import"./small-cross-CqqiVSV9.js";import"./ActionButton-DrJeruLF.js";import"./Checkbox-DHlridbE.js";import"./useValueChanged-DAOfQ09L.js";import"./CollapsiblePanel-TiLElam_.js";import"./MultiColumnSortDialog-CLmgSm8M.js";import"./MenuTrigger-D6_BzbAC.js";import"./CompositeItem-CaGEr3lp.js";import"./ToolbarRootContext-DYa8q61O.js";import"./getDisabledMountTransitionStyles-DzmBA_gO.js";import"./getPseudoElementBounds-Caw7OuxZ.js";import"./chevron-down-F0KSYD0T.js";import"./index-BDWQvtVH.js";import"./error-CNFmOPSg.js";import"./BaseCbacBanner-DS4E-NQX.js";import"./makeExternalStore-DekmBIJm.js";import"./Tooltip-B8a6AeiL.js";import"./PopoverPopup-8NMKP2yH.js";import"./debounce-DdquZemZ.js";import"./tick-Co26rO3c.js";import"./DropdownField-BarJItLo.js";import"./isEqual-Bny9H9I6.js";import"./withOsdkMetrics-B38cTpqn.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
