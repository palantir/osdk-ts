import{j as r}from"./iframe-rtx-0Vyx.js";import{O as b}from"./object-table-DtPmTNdM.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-q0Lp7cUh.js";import{u as g}from"./useOsdkClient-D3_4QTIG.js";import"./preload-helper-Bj3BOALb.js";import"./Table-DBfOvOQZ.js";import"./index-DKIcRxjy.js";import"./Dialog-CUepzDAn.js";import"./cross-6kSQG1-7.js";import"./svgIconContainer-B40rfxVj.js";import"./useBaseUiId-CuRyK44H.js";import"./InternalBackdrop-DvMfLZSf.js";import"./composite-Nf4msj3r.js";import"./index-DOmjJjSc.js";import"./index-ITtGThnU.js";import"./index-3_OFjQJp.js";import"./useEventCallback-B9udz5VM.js";import"./SkeletonBar-C-MuLmph.js";import"./LoadingCell-1QXN4pJr.js";import"./ColumnConfigDialog-C9oQO5-G.js";import"./DraggableList-CoZrT756.js";import"./search-Dwc9HsWE.js";import"./Input-B-96zHSB.js";import"./useControlled-D6W72m7H.js";import"./Button-poD_kS0t.js";import"./small-cross-CDz-CGy6.js";import"./ActionButton-CLmSCJDX.js";import"./Checkbox-B6zqZfCp.js";import"./useValueChanged-BOReqqPH.js";import"./CollapsiblePanel-YvE-EakE.js";import"./MultiColumnSortDialog-D_-x7Yam.js";import"./MenuTrigger-fi2dtKt0.js";import"./CompositeItem-BYIrnHf7.js";import"./ToolbarRootContext-CZQywvtv.js";import"./getDisabledMountTransitionStyles-CEdGgCOp.js";import"./getPseudoElementBounds-BpzKuQgE.js";import"./chevron-down-uhEr0Z3V.js";import"./index-CxSdDGJa.js";import"./error-ClD13ltF.js";import"./BaseCbacBanner-CC_Nqmy_.js";import"./makeExternalStore-ColxyoCn.js";import"./Tooltip-CGWRFZRN.js";import"./PopoverPopup-BRQtjEfh.js";import"./toNumber-DfJFvF00.js";import"./tick-vnDda9AF.js";import"./DropdownField-kN_2pP4G.js";import"./withOsdkMetrics-B-DLHJlS.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,Te={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const je=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,je as __namedExportsOrder,Te as default};
