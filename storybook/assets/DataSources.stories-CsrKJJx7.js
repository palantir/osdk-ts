import{j as r}from"./iframe-CDH1WiIm.js";import{O as b}from"./object-table-DvV-fhP8.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-KV704inH.js";import{u as g}from"./useOsdkClient-quJN66XR.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C7k-xA1j.js";import"./index-B7I34VMP.js";import"./Dialog-B00E6QBC.js";import"./cross-DSLkFMBK.js";import"./svgIconContainer-Da2lUN6l.js";import"./useBaseUiId-JwegC6SR.js";import"./InternalBackdrop-Ymvd285K.js";import"./composite-DFKUfi-t.js";import"./index-DCeQ8dAs.js";import"./index-D4yRNX2z.js";import"./index-ByzjRZqg.js";import"./useEventCallback-YXO9hBaK.js";import"./SkeletonBar-vcgWDMUZ.js";import"./LoadingCell-CEa6pU9A.js";import"./ColumnConfigDialog-DlV2mLPY.js";import"./DraggableList-Z0LPk5VF.js";import"./search-X3YzFylv.js";import"./Input-C3uKrLbE.js";import"./useControlled-A612R_Ug.js";import"./Button-BAc-Yi4x.js";import"./small-cross-Y-Ua0rov.js";import"./ActionButton-qDTU_xQE.js";import"./Checkbox-Doix9LyN.js";import"./useValueChanged-CdCPYrMD.js";import"./CollapsiblePanel-HEhJKVUx.js";import"./MultiColumnSortDialog-CSYiplEL.js";import"./MenuTrigger-D0RZOwzK.js";import"./CompositeItem-Bb5XEEzb.js";import"./ToolbarRootContext-C2jXlctC.js";import"./getDisabledMountTransitionStyles-sx84wb4-.js";import"./getPseudoElementBounds-Cyvc7G6J.js";import"./chevron-down-NcW2HNuz.js";import"./index-CWdGZp3O.js";import"./error-CzptjxzD.js";import"./BaseCbacBanner-CPSiiTfE.js";import"./makeExternalStore-BAbkp8fW.js";import"./Tooltip-DNYhKq8H.js";import"./PopoverPopup-DtSASMWY.js";import"./debounce-CKvBdIMZ.js";import"./tick-DugjRgsB.js";import"./DropdownField-hs-JPN-J.js";import"./isEqual-SVs-xcCf.js";import"./withOsdkMetrics-BG-JB_sg.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
