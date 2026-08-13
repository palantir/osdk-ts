import{j as r}from"./iframe-C6xDkpL_.js";import{O as b}from"./object-table-BmIyANTb.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dwyo6ImB.js";import{u as g}from"./useOsdkClient-DksWv1NW.js";import"./preload-helper-BAViXO5q.js";import"./Table-BkA7ohuL.js";import"./index-C6MVQouO.js";import"./Dialog-Tlc2Lie8.js";import"./cross-DoloqHI6.js";import"./svgIconContainer-CdyNM_fM.js";import"./useBaseUiId-D6ssAiPF.js";import"./InternalBackdrop-CIQgYLLB.js";import"./composite-DFd1O6P2.js";import"./index-8nNjBhn6.js";import"./index-B9fL4M4R.js";import"./index-CLG4UISh.js";import"./useEventCallback-Di4B6FMR.js";import"./SkeletonBar-DRh7opHQ.js";import"./LoadingCell-C_2TOftE.js";import"./ColumnConfigDialog-Dy2SoZnr.js";import"./DraggableList-BSJIsgWC.js";import"./search-B146ryND.js";import"./Input-CwXgJ7o8.js";import"./useControlled-De-rJN5p.js";import"./isEqual-Can796Ty.js";import"./isObject-9R6-bCUW.js";import"./Button-CJGEFDOi.js";import"./ActionButton-B7kGoqvf.js";import"./Checkbox-BnUCpH5h.js";import"./useValueChanged-Bx12pUkB.js";import"./CollapsiblePanel-BfEKq3XZ.js";import"./MultiColumnSortDialog-CYWL3EVq.js";import"./MenuTrigger-tMnAO8Vt.js";import"./CompositeItem-C56Q588H.js";import"./ToolbarRootContext-CgrQlAcm.js";import"./getDisabledMountTransitionStyles-JYy7p7IX.js";import"./getPseudoElementBounds-DsBupB7o.js";import"./chevron-down-_i2-cqyT.js";import"./index-CJ9az84z.js";import"./error-BKQEETqk.js";import"./BaseCbacBanner-CG_0-BGI.js";import"./makeExternalStore-Bs5Z2Kjz.js";import"./Tooltip-D_XtxgOG.js";import"./PopoverPopup-DbLmRYYP.js";import"./toNumber-BN3QNian.js";import"./tick-BGAw3EUG.js";import"./DropdownField-CMikhZK7.js";import"./withOsdkMetrics-CeWAAesK.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
