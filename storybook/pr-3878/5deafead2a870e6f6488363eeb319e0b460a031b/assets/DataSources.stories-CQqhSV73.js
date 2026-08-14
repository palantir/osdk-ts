import{j as r}from"./iframe-BoMYVZ8P.js";import{O as b}from"./object-table-Co3y61KL.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Y9SNabI4.js";import{u as g}from"./useOsdkClient-C2JlPVLC.js";import"./preload-helper-BK2UTj0g.js";import"./Table-XGt5dfzF.js";import"./index-CWGS1jbk.js";import"./Dialog-dGxgbeh7.js";import"./cross-C8gHFhcw.js";import"./svgIconContainer-BVTvLC-e.js";import"./useBaseUiId-B21DQZ5t.js";import"./InternalBackdrop-B8fkQuwz.js";import"./composite-KNqjoGAg.js";import"./index-BhWLpeRw.js";import"./index-ClsDrsL5.js";import"./index-BUL6qdYX.js";import"./useEventCallback-CE7eeu8C.js";import"./SkeletonBar-Dv0Y2UuW.js";import"./LoadingCell-DFwTonfQ.js";import"./ColumnConfigDialog-Ck894DdU.js";import"./DraggableList-Cnf7C36G.js";import"./search-DXLrUQjP.js";import"./Input-BTERu37S.js";import"./useControlled-5CvF-qs0.js";import"./Button-B6yMNcTW.js";import"./small-cross-BlU6xsJJ.js";import"./ActionButton-BBxv047F.js";import"./Checkbox-f9_0ybPg.js";import"./useValueChanged-ZQkTxx0f.js";import"./CollapsiblePanel-DyxxtPmZ.js";import"./MultiColumnSortDialog-k7xUY6Eq.js";import"./MenuTrigger-C5KjlB94.js";import"./CompositeItem-Dh_pkc7t.js";import"./ToolbarRootContext-vNggTixJ.js";import"./getDisabledMountTransitionStyles-2namnzPQ.js";import"./getPseudoElementBounds-CjFtrMwo.js";import"./chevron-down-xbPqDJA1.js";import"./index-XV4DS-Dv.js";import"./error-6dVeQLZ0.js";import"./BaseCbacBanner-9RL_iOqo.js";import"./makeExternalStore-DnUcW7Zh.js";import"./Tooltip-DmCHNO1q.js";import"./PopoverPopup-Cj48muFO.js";import"./debounce-CQ_hqDhi.js";import"./tick-Ci6gbHCk.js";import"./DropdownField-B_NajMDf.js";import"./isEqual-DBIn-C9s.js";import"./withOsdkMetrics-DqIIQvI6.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
