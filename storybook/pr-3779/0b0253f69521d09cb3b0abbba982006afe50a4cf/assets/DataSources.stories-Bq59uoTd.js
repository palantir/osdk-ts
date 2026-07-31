import{j as r}from"./iframe-BH0RiS07.js";import{O as b}from"./object-table-Dw7wP583.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CpZmf--s.js";import{u as g}from"./useOsdkClient-DVK7fMCH.js";import"./preload-helper-ByubuHXR.js";import"./Table-xSzS9mg-.js";import"./index-7v2RjI2w.js";import"./Dialog-BrxKY4U3.js";import"./cross-D9ZUP5Ns.js";import"./svgIconContainer-FtuH6umr.js";import"./useBaseUiId-CUYaSpyz.js";import"./InternalBackdrop-30LaOI8b.js";import"./composite-Bx3ib-QK.js";import"./index-BPstulOd.js";import"./index-C2T1E1t9.js";import"./index-DWOM7wqb.js";import"./useEventCallback-D3r1tBuv.js";import"./SkeletonBar-CHLz7Pge.js";import"./LoadingCell-CHqJC0Jc.js";import"./ColumnConfigDialog-Byj8iSeW.js";import"./DraggableList-BjdYdEPc.js";import"./search-Bk-_LlpL.js";import"./Input-elqhlQ-r.js";import"./useControlled-CIhWFCzo.js";import"./isEqual-vJ1Qj1LB.js";import"./isObject-3i0MZCeP.js";import"./Button-Dpxlhfn0.js";import"./ActionButton-DIeKcdCW.js";import"./Checkbox-B4-NPCZf.js";import"./useValueChanged-gmanHop6.js";import"./CollapsiblePanel-DzvSaaqJ.js";import"./MultiColumnSortDialog-C_rWXuaq.js";import"./MenuTrigger-Bk13KZ3o.js";import"./CompositeItem-YyL2cv7w.js";import"./ToolbarRootContext-Dy6qwQeR.js";import"./getDisabledMountTransitionStyles-DA2haucZ.js";import"./getPseudoElementBounds-Bg_oiIin.js";import"./chevron-down-DuuQaagn.js";import"./index-BkgjoZmi.js";import"./error-BPzajNoT.js";import"./BaseCbacBanner-CSXlxhGL.js";import"./makeExternalStore-Cn2OHyrh.js";import"./Tooltip-BAkr9kah.js";import"./PopoverPopup-D3PXg0cX.js";import"./toNumber-BmEn9jnI.js";import"./tick-BKXV2n6K.js";import"./DropdownField-BB3NRdoL.js";import"./withOsdkMetrics-BwSBQoqW.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
