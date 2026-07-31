import{j as r}from"./iframe-DpDxhrTk.js";import{O as b}from"./object-table-DpLeGqXq.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C6ePsu6J.js";import{u as g}from"./useOsdkClient-ufKnbjui.js";import"./preload-helper-C3Wongev.js";import"./Table-D__ecISP.js";import"./index-BesxUkRl.js";import"./Dialog-3r0RUKgh.js";import"./cross-BPqRdDax.js";import"./svgIconContainer-BSn34rPU.js";import"./useBaseUiId-ZtxZdVDB.js";import"./InternalBackdrop-DMpRBF_4.js";import"./composite-XVS2lbRG.js";import"./index-DO-yw_mS.js";import"./index-CPnh_BhQ.js";import"./index-zItwV_e4.js";import"./useEventCallback-DkkG2KLw.js";import"./SkeletonBar-BUpoYDjZ.js";import"./LoadingCell-BP6FuaET.js";import"./ColumnConfigDialog-fauuEGe4.js";import"./DraggableList-CuBxnKUd.js";import"./search-FgzO_a7-.js";import"./Input-MJ2Nqs1U.js";import"./useControlled-oqkSa6n9.js";import"./isEqual-DThBZozb.js";import"./isObject-CJIWK_vn.js";import"./Button-xd1UXX3d.js";import"./ActionButton-DtlR_WNL.js";import"./Checkbox-B8mHIVlE.js";import"./useValueChanged-ffuaPj-Z.js";import"./CollapsiblePanel-Dv4TEUmo.js";import"./MultiColumnSortDialog-CwhqCqSu.js";import"./MenuTrigger-CHtag5-t.js";import"./CompositeItem-ClvJg4YM.js";import"./ToolbarRootContext-BdbZ8fbN.js";import"./getDisabledMountTransitionStyles-CP-VJqsI.js";import"./getPseudoElementBounds-CSHzYojk.js";import"./chevron-down-DNQ2sG7I.js";import"./index-knwwMd04.js";import"./error-0_EDGuUl.js";import"./BaseCbacBanner-CQZ0vW5e.js";import"./makeExternalStore-DfqxgRvK.js";import"./Tooltip-D84FofUL.js";import"./PopoverPopup-9oTcJ550.js";import"./toNumber-DPAMxLOu.js";import"./tick-B774pe3v.js";import"./DropdownField-CXjer42C.js";import"./withOsdkMetrics-BoydcYO1.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
