import{j as r}from"./iframe-D4YDcgkV.js";import{O as b}from"./object-table-CQVl6PEc.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BQK-wHnb.js";import{u as g}from"./useOsdkClient-JcjdO1LI.js";import"./preload-helper-DCpW9ncL.js";import"./Table-CC9yKcnM.js";import"./index-8cY8PtKc.js";import"./Dialog--FEoWfuM.js";import"./cross-Behni1B5.js";import"./svgIconContainer-COB7RfBn.js";import"./useBaseUiId-Ce1LHnbR.js";import"./InternalBackdrop-QtP5wFDT.js";import"./composite-B2mz0pd-.js";import"./index-BDXEDFqG.js";import"./index-D59BFBqo.js";import"./index-D43eNy-E.js";import"./useEventCallback-BwE5rOmy.js";import"./SkeletonBar-CzsWUOUE.js";import"./LoadingCell-BBX5gfRn.js";import"./ColumnConfigDialog-BJ_ASjlT.js";import"./DraggableList-CVz1UPCT.js";import"./search-DK0Hi7mb.js";import"./Input-Ddw8KtcR.js";import"./useControlled-Bj0_koJm.js";import"./Button--v4W1QZO.js";import"./small-cross-BbdSAPDn.js";import"./ActionButton-CvGZig-A.js";import"./Checkbox-DoYKUy50.js";import"./useValueChanged-CI55RSfr.js";import"./CollapsiblePanel-CSS__w8o.js";import"./MultiColumnSortDialog-BYHB62Sd.js";import"./MenuTrigger-CYLhsVUK.js";import"./CompositeItem-CnYlQOQU.js";import"./ToolbarRootContext-BCQVnjEL.js";import"./getDisabledMountTransitionStyles-8crufxW_.js";import"./getPseudoElementBounds-B5M65vT3.js";import"./chevron-down-BuYLfoea.js";import"./index-DFYfgBX1.js";import"./error-CiQk9egS.js";import"./BaseCbacBanner-BUp57Dg7.js";import"./makeExternalStore-CBSa4JL4.js";import"./Tooltip-mhyE4ARD.js";import"./PopoverPopup-IdL2xFMr.js";import"./debounce-Dfrp39m8.js";import"./tick-LVA-wE2q.js";import"./DropdownField-BQkaE1vz.js";import"./isEqual-CVZJBzTI.js";import"./withOsdkMetrics-BfFmFbhV.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
