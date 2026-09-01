import{j as r}from"./iframe-D7UfG5lN.js";import{O as b}from"./object-table-eNKoCF02.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BeAz5A3S.js";import{u as g}from"./useOsdkClient-CzIUie5K.js";import"./preload-helper-fsR8YlZl.js";import"./Table-CsU_D9jD.js";import"./index-CX_4Y7_E.js";import"./Dialog-DSMt8zro.js";import"./cross-BqS1fcFn.js";import"./svgIconContainer-DJd8wnEJ.js";import"./useBaseUiId-DO-f1Z6D.js";import"./InternalBackdrop-BIiS9BIy.js";import"./composite-CgMpynF4.js";import"./index-lBcmGDx7.js";import"./index-F7_7yuPT.js";import"./index-Bvzrvbs2.js";import"./useEventCallback-qxrAFbQA.js";import"./SkeletonBar-B31eMzse.js";import"./LoadingCell-DfcZnJS5.js";import"./ColumnConfigDialog-W0ouTFm6.js";import"./DraggableList-B9ySW3pf.js";import"./search-DtcC4DIl.js";import"./Input-CWcjnHAg.js";import"./useControlled-9hlnEbGI.js";import"./Button-Bwe_2Hp9.js";import"./small-cross-ClVjQsKL.js";import"./ActionButton-bYa-rsQ8.js";import"./Checkbox-DjxkizG9.js";import"./useValueChanged-D2v-_P-u.js";import"./CollapsiblePanel-CVdAsYYQ.js";import"./MultiColumnSortDialog-7qmaHD4E.js";import"./MenuTrigger-CbkBKjZX.js";import"./CompositeItem-fbZDtKEs.js";import"./ToolbarRootContext-49Q9r-mz.js";import"./getDisabledMountTransitionStyles-B0aARxvK.js";import"./getPseudoElementBounds-COopDBiV.js";import"./chevron-down-6NKtD6R3.js";import"./index-C29X8ucR.js";import"./error-CNylSIIz.js";import"./BaseCbacBanner-DbAWaE4h.js";import"./makeExternalStore-CCIQpKDE.js";import"./Tooltip-Ab7jqY7P.js";import"./PopoverPopup-DMAHYwOJ.js";import"./debounce-DZ3i5AHh.js";import"./tick-ZztQqfup.js";import"./DropdownField-D-knyklq.js";import"./isEqual-Cj0yvF_6.js";import"./withOsdkMetrics-C0ALIoPR.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
