import{j as r}from"./iframe-Cj5xKvLA.js";import{O as b}from"./object-table-CXvKUv2q.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cw9ZEYkG.js";import{u as g}from"./useOsdkClient-oka-dZbc.js";import"./preload-helper-D1DDVoTO.js";import"./Table-DGGWQjwY.js";import"./index-BBh4Z0mE.js";import"./Dialog-DtCOhCpV.js";import"./cross-BPLfBPr7.js";import"./svgIconContainer-DZYGEA7n.js";import"./useBaseUiId-n2QF9Zar.js";import"./InternalBackdrop-CYszCwsc.js";import"./composite-925znV2G.js";import"./index-DKWCLtL5.js";import"./index-Cb9jn425.js";import"./index-C38bxeqR.js";import"./useEventCallback-ByjKqT98.js";import"./SkeletonBar-_qu8whIi.js";import"./LoadingCell-BjLHFRuH.js";import"./ColumnConfigDialog-Cl9Wb7Yv.js";import"./DraggableList-DirU_-P4.js";import"./search-BmtS1KCs.js";import"./Input-Bffgvop9.js";import"./useControlled-D5krREh9.js";import"./Button-Be388aOs.js";import"./small-cross-CADTU48B.js";import"./ActionButton-D9I3daR7.js";import"./Checkbox-CySyhzbG.js";import"./useValueChanged-owXuKPN-.js";import"./CollapsiblePanel-Ba92qoA8.js";import"./MultiColumnSortDialog-B6sg6gM1.js";import"./MenuTrigger-D-QWhFP0.js";import"./CompositeItem-Cu_iWJpi.js";import"./ToolbarRootContext-DFdsIL16.js";import"./getDisabledMountTransitionStyles-BgDH7Jb-.js";import"./getPseudoElementBounds-DXisblbi.js";import"./chevron-down-C93yiICa.js";import"./index-oe6lplKX.js";import"./error-Bd1ykK4E.js";import"./BaseCbacBanner-ChRzr7gJ.js";import"./makeExternalStore-BZjXkoXh.js";import"./Tooltip-D09713yr.js";import"./isObject-DuNnO_hx.js";import"./debounce-D6aQMZp0.js";import"./tick-Cf_flWq8.js";import"./DropdownField-5C_sV8hr.js";import"./isEqual-BNgPn_sy.js";import"./_baseIsEqual-DNNLc-1V.js";import"./withOsdkMetrics-Dl0Rlheu.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
