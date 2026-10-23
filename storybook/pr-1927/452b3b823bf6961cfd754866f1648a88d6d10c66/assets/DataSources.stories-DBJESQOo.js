import{j as r}from"./iframe-BpdL9i9r.js";import{O as b}from"./object-table-D8EV8T58.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DxADka8q.js";import{u as g}from"./useOsdkClient-rNJRaM8P.js";import"./preload-helper-BGgpRwmn.js";import"./Table-KFE7UNSo.js";import"./index-BOBmNIkf.js";import"./Dialog-BYS7qVOM.js";import"./cross-B_FitAUD.js";import"./svgIconContainer-BYUaz7v8.js";import"./useBaseUiId-DRf0avcO.js";import"./InternalBackdrop-BMXRBBRn.js";import"./composite-BFfsCZEe.js";import"./index-Dh6vk7Lg.js";import"./index-CAZS1ZmE.js";import"./index-B2GBLWAK.js";import"./useEventCallback-Cv7ZNXWB.js";import"./SkeletonBar-acxIujrp.js";import"./LoadingCell-ixXOOpOP.js";import"./ColumnConfigDialog-B3GVMtic.js";import"./DraggableList-MiRYJus0.js";import"./search-C5Bpx8xV.js";import"./Input-yfdnK4QX.js";import"./useControlled-QZyhjlC2.js";import"./Button-BysZxDt3.js";import"./small-cross-CbVs9Rqg.js";import"./ActionButton-GDiRTL_d.js";import"./Checkbox-CRk0naPI.js";import"./useValueChanged-_ggW3wfM.js";import"./CollapsiblePanel-Bhllaees.js";import"./MultiColumnSortDialog-C_FOAodo.js";import"./MenuTrigger-xiavFyRB.js";import"./CompositeItem-DWqZMJZf.js";import"./ToolbarRootContext-B3r4TQUK.js";import"./getDisabledMountTransitionStyles-BPLTuK4K.js";import"./getPseudoElementBounds-WaWUWStD.js";import"./chevron-down-CmBeGku0.js";import"./index-CQPYqNM-.js";import"./error-BZRmZs4O.js";import"./BaseCbacBanner-D4pdI21N.js";import"./makeExternalStore-BVQoDSnU.js";import"./Tooltip-D5UgCEsg.js";import"./PopoverPopup-DvvB667y.js";import"./debounce-DTQhMy-X.js";import"./tick-DtX6b8Qy.js";import"./DropdownField-jH7MfoFT.js";import"./isEqual-DXMiZQC8.js";import"./withOsdkMetrics-DoqsagcU.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
