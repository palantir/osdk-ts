import{j as r}from"./iframe-B7GNjqYa.js";import{O as b}from"./object-table-BgWTv_dN.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ds1LIs2q.js";import{u as g}from"./useOsdkClient-B28z3bbk.js";import"./preload-helper-BAlwY9vI.js";import"./Table-BRmPVvi-.js";import"./index-BS_kYp2J.js";import"./Dialog-BzmIbEh6.js";import"./cross-BiueRdx7.js";import"./svgIconContainer-DoNcIMx3.js";import"./useBaseUiId-CFM8-ppd.js";import"./InternalBackdrop-bYiUgvs9.js";import"./composite-C3LspNj0.js";import"./index-fPGG7RjX.js";import"./index-BCluv78G.js";import"./index-DYS5ByOf.js";import"./useEventCallback-BpccMG2J.js";import"./SkeletonBar-hQaFCQal.js";import"./LoadingCell-DuTsM7kN.js";import"./ColumnConfigDialog-CH6XY5bo.js";import"./DraggableList-1vXWe-Jq.js";import"./search-BPhnv7M1.js";import"./Input-COrKdsAC.js";import"./useControlled-qLlPw49u.js";import"./Button-CuSrXijd.js";import"./small-cross-oDjSfOr6.js";import"./ActionButton-B5nt0qaz.js";import"./Checkbox-BG4Ywwfd.js";import"./useValueChanged-DzwuESFx.js";import"./CollapsiblePanel-B68_k9PR.js";import"./MultiColumnSortDialog-CMbfZFGV.js";import"./MenuTrigger-Cp8wIw32.js";import"./CompositeItem-Bd_Q9u8B.js";import"./ToolbarRootContext-m_MjqPd8.js";import"./getDisabledMountTransitionStyles-DONXlArz.js";import"./getPseudoElementBounds-BHnWaw3k.js";import"./chevron-down-DB4mVzp_.js";import"./index-DsFN0VWM.js";import"./error-zFyncHCE.js";import"./BaseCbacBanner-6hnJ0PhS.js";import"./makeExternalStore-BhSOqX6p.js";import"./Tooltip-CjWFJAs6.js";import"./PopoverPopup-Knmtng0E.js";import"./debounce-CoJau0dS.js";import"./tick-Chptb_Eu.js";import"./DropdownField-GQBEnXYB.js";import"./isEqual-BfM7cD2s.js";import"./withOsdkMetrics-DYcwkBzp.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
