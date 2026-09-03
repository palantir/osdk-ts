import{j as r}from"./iframe-DfNFuvd8.js";import{O as b}from"./object-table-Bx2po24i.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D5HJDenW.js";import{u as g}from"./useOsdkClient-DrnSR9t9.js";import"./preload-helper-B2A7KixS.js";import"./Table-BeuFq0M8.js";import"./index-hJ034l85.js";import"./Dialog-BMihQgwB.js";import"./cross-CBZgOvDJ.js";import"./svgIconContainer-B6TYwpfX.js";import"./useBaseUiId-Bo6GSES5.js";import"./InternalBackdrop-C_nhbKJU.js";import"./composite-D6AWaxnU.js";import"./index-DO9KDqDU.js";import"./index-Co9EvdKx.js";import"./index-DiD4EhSO.js";import"./useEventCallback-RjnLJur2.js";import"./SkeletonBar-CegOdRAd.js";import"./LoadingCell-DR1jrdbZ.js";import"./ColumnConfigDialog-By6deAV9.js";import"./DraggableList-CawOkJQL.js";import"./search-C0uD-Uv6.js";import"./Input-DQxNJVQ9.js";import"./useControlled-P4f8RlVJ.js";import"./Button-BqZDxH8m.js";import"./small-cross-BYYoKwWX.js";import"./ActionButton-JQL18lz7.js";import"./Checkbox-DhoSAxgA.js";import"./useValueChanged-wyGRNMGl.js";import"./CollapsiblePanel-DRB_PNPV.js";import"./MultiColumnSortDialog-BB2gxRpV.js";import"./MenuTrigger-CB1FawQ6.js";import"./CompositeItem-C2W2AWaC.js";import"./ToolbarRootContext-BppEIMJO.js";import"./getDisabledMountTransitionStyles-BIM2Nojc.js";import"./getPseudoElementBounds-DNQ_Lyqg.js";import"./chevron-down-C8YJ1kBl.js";import"./index-D4IU9xHw.js";import"./error-ThwmBgve.js";import"./BaseCbacBanner-Bxx78FaA.js";import"./makeExternalStore-DLzSgHee.js";import"./Tooltip-CDXk7Z_Y.js";import"./PopoverPopup-YOckH7SE.js";import"./debounce-R5M_pHII.js";import"./tick-zr2mL_AY.js";import"./DropdownField-Bzzr4tIT.js";import"./isEqual-BmWHZ7sE.js";import"./withOsdkMetrics-CJRcI3lK.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
