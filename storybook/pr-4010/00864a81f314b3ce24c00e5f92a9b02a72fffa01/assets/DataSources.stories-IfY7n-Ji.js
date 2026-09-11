import{j as r}from"./iframe-CtRHQTYJ.js";import{O as b}from"./object-table-Co1YG3YU.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BFOg8naQ.js";import{u as g}from"./useOsdkClient-Ws-Fn5Vr.js";import"./preload-helper-fhfz86w0.js";import"./Table-DrC-r9x3.js";import"./index-riCZd5Ar.js";import"./Dialog-BgLm7Z_4.js";import"./cross-DEABcOeY.js";import"./svgIconContainer-CnTR-ACc.js";import"./useBaseUiId-qkDK2XTS.js";import"./InternalBackdrop-CWaOdvE-.js";import"./composite-DuXOIKmO.js";import"./index-Fr7QusuU.js";import"./index-pqaS_ebL.js";import"./index-yCAZ2DAg.js";import"./useEventCallback-BIhF7inU.js";import"./SkeletonBar-DvxbY3ok.js";import"./LoadingCell-Dj6cXJnK.js";import"./ColumnConfigDialog-Biif9j1h.js";import"./DraggableList-B4zxhLs0.js";import"./search-BsaMQbW0.js";import"./Input-Civ7Ghzz.js";import"./useControlled-tah5fGcR.js";import"./Button-BqinPFLf.js";import"./small-cross-BpXb6yiG.js";import"./ActionButton-C_VR3Nw4.js";import"./Checkbox-DfxlNGGM.js";import"./useValueChanged-CKgwQ1DR.js";import"./CollapsiblePanel-WOW1j6DY.js";import"./MultiColumnSortDialog-Bi594TZ3.js";import"./MenuTrigger-B5CIkydJ.js";import"./CompositeItem-C6o3RrT-.js";import"./ToolbarRootContext-BObKP8Zm.js";import"./getDisabledMountTransitionStyles-fGFKvTKF.js";import"./getPseudoElementBounds-reWLTMCw.js";import"./chevron-down-DdzT4R3d.js";import"./index-BEVcgcQr.js";import"./error-7X7jIqwN.js";import"./BaseCbacBanner-JTAmQZoQ.js";import"./makeExternalStore-C5B573Wo.js";import"./Tooltip-C_nFk_LA.js";import"./PopoverPopup-DRdBjFn0.js";import"./debounce-BYWJGvRn.js";import"./tick-D4iao2Tc.js";import"./DropdownField-BRYcu045.js";import"./isEqual-CLXUfsc9.js";import"./withOsdkMetrics-C6vvxMqe.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
