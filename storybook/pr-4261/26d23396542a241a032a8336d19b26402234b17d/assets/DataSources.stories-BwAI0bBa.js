import{j as r}from"./iframe-B2PftgNv.js";import{O as b}from"./object-table-ClDAZpys.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CT3nRJoR.js";import{u as g}from"./useOsdkClient-8mR2SN13.js";import"./preload-helper-CEJ8wrbo.js";import"./Table-HWVEUDWm.js";import"./index-DLh6R3k3.js";import"./Dialog-C0Aqqg6h.js";import"./cross-DUUoKIdp.js";import"./svgIconContainer-BpxY4u4w.js";import"./useBaseUiId-Z6N9hVn8.js";import"./InternalBackdrop-C_Gp7NJL.js";import"./composite-ClzGHvMl.js";import"./index-CKDtR0br.js";import"./index-D5vOugya.js";import"./index-B_Dc_l-I.js";import"./useEventCallback-CQGtLwNK.js";import"./SkeletonBar-DTuV6I9E.js";import"./LoadingCell-Dgm9Srrt.js";import"./ColumnConfigDialog-B4LlJdmt.js";import"./DraggableList-DiiNiM-a.js";import"./search-By7WOD0U.js";import"./Input-BtteuOYK.js";import"./useControlled-CrpHgYxN.js";import"./Button-B8NZKNU8.js";import"./small-cross-BrcFqK6e.js";import"./ActionButton-B6gXvkdC.js";import"./Checkbox-C7Rc1ejm.js";import"./useValueChanged-C-aUTwRA.js";import"./CollapsiblePanel-DYRFEvlw.js";import"./MultiColumnSortDialog-Bz--MVn6.js";import"./MenuTrigger-0kNz5fpY.js";import"./CompositeItem-DXQI1LIg.js";import"./ToolbarRootContext-DSVVLYlD.js";import"./getDisabledMountTransitionStyles-CIcAeq8K.js";import"./getPseudoElementBounds-Bzb7fIgD.js";import"./chevron-down-CZZTKstq.js";import"./index-D12Somt8.js";import"./error-DLN9t7ZG.js";import"./BaseCbacBanner-7hqzmHST.js";import"./makeExternalStore-XDjeZ5H6.js";import"./Tooltip-D-7EvLcH.js";import"./PopoverPopup-bHujGyHj.js";import"./debounce-Dy8J1v9c.js";import"./tick-BHo22fTJ.js";import"./DropdownField-Dj__11WN.js";import"./isEqual-DgLHABrY.js";import"./withOsdkMetrics-CoGkur03.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
