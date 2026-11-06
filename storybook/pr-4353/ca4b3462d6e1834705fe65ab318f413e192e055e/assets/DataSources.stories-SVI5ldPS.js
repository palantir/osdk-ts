import{j as r}from"./iframe-C-tkmioo.js";import{O as b}from"./object-table-BZaq3tn6.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CLuCAWXv.js";import{u as g}from"./useOsdkClient-CJta-8BD.js";import"./preload-helper-DfuNKgCp.js";import"./Table-yh79B9Qv.js";import"./index-mhh8JEg6.js";import"./Dialog-B83feRHx.js";import"./cross-C44ftUHc.js";import"./svgIconContainer-CWpp_2jS.js";import"./useBaseUiId-Cm7MFvra.js";import"./InternalBackdrop-D_Y9aPDh.js";import"./composite-C8fhvEre.js";import"./index-hoVNSPuR.js";import"./index-B90a8S-M.js";import"./index-B2RSfjfJ.js";import"./useEventCallback-CUGSbf6p.js";import"./SkeletonBar-BiIW-GDj.js";import"./LoadingCell-OT1ynwa9.js";import"./ColumnConfigDialog-BjIWXLI1.js";import"./DraggableList-B6YwMZwa.js";import"./search-i-B1QBlz.js";import"./Input-DLE-7B-W.js";import"./useControlled-C9aUqxO7.js";import"./Button-CGB2DjlW.js";import"./small-cross-CsUjbm9n.js";import"./ActionButton-CSf7aDsX.js";import"./Checkbox-DFI4mm_O.js";import"./useValueChanged-o5jZZ60n.js";import"./CollapsiblePanel-BS6YIswr.js";import"./MultiColumnSortDialog-Dhbg2w2w.js";import"./MenuTrigger-DgLDD6M4.js";import"./CompositeItem-Byuaai_8.js";import"./ToolbarRootContext-BgWudj9O.js";import"./getDisabledMountTransitionStyles-BxVfE1UN.js";import"./getPseudoElementBounds-DRiaJ7G-.js";import"./chevron-down-CDLMbCJ_.js";import"./index-C_kRO_H9.js";import"./error-CXAWYJfd.js";import"./BaseCbacBanner-D9tZInLS.js";import"./makeExternalStore-Bksv4soB.js";import"./Tooltip-B6Q61cjD.js";import"./PopoverPopup-Dh8bwyRK.js";import"./debounce-CzHRNvfy.js";import"./tick-C0oAE1Ij.js";import"./DropdownField-Cbsq4sP1.js";import"./isEqual-DjxLkWRx.js";import"./withOsdkMetrics-vqDit70J.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
