import{j as r}from"./iframe-zGF2yItg.js";import{O as b}from"./object-table-B-_rm4CA.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C0oka486.js";import{u as g}from"./useOsdkClient-DI9zvGd-.js";import"./preload-helper-DKR91DwN.js";import"./Table-B6IMnTKP.js";import"./index-CI0AAd7R.js";import"./Dialog-CWDyspc2.js";import"./cross-BclfVS0V.js";import"./svgIconContainer-CfbP11Km.js";import"./useBaseUiId-D8XkRAoN.js";import"./InternalBackdrop-C8zej5On.js";import"./composite-BhRiZx70.js";import"./index-CpyS4ByO.js";import"./index-C9gBj_QQ.js";import"./index-jHsjLuIA.js";import"./useEventCallback-Cg6-L5Ug.js";import"./SkeletonBar-CzCR3F20.js";import"./LoadingCell-C56P9DI-.js";import"./ColumnConfigDialog-DxlPqZ10.js";import"./DraggableList-CZyDDYiK.js";import"./search-Dr3ly3kj.js";import"./Input-gx0WGAlP.js";import"./useControlled-Bcq_19a7.js";import"./Button-CUzrpo83.js";import"./small-cross-B5aXXuf_.js";import"./ActionButton-Cpin8hGS.js";import"./Checkbox-DKB8j1aW.js";import"./useValueChanged-Bz7hhRgE.js";import"./CollapsiblePanel-CGpSwayQ.js";import"./MultiColumnSortDialog-CDL5uEaa.js";import"./MenuTrigger-DwGkpRY7.js";import"./CompositeItem-BGuYZ8t8.js";import"./ToolbarRootContext-zfiNhCTv.js";import"./getDisabledMountTransitionStyles-C8rPshX7.js";import"./getPseudoElementBounds-_KhoGvMt.js";import"./chevron-down-BYonktV5.js";import"./index-Ce2iCB2D.js";import"./error-rXo5lK8q.js";import"./BaseCbacBanner-qvusjPLY.js";import"./makeExternalStore-BDBIRBp5.js";import"./Tooltip-BDl8XaA7.js";import"./PopoverPopup-BjSro2CC.js";import"./debounce-fRUSIOCu.js";import"./tick-DAv5Wwbg.js";import"./DropdownField-y9zCIkHo.js";import"./isEqual-tYCzP_Jl.js";import"./withOsdkMetrics-CQPruHu_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
