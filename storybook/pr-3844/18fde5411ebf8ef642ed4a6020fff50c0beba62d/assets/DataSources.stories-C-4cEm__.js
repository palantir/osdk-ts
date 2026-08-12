import{j as r}from"./iframe-HbxVHZeS.js";import{O as b}from"./object-table-CWaV2LZ7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D8o9zSDS.js";import{u as g}from"./useOsdkClient-LkxmiGDs.js";import"./preload-helper-DKTEKqDP.js";import"./Table-CT7vgj8m.js";import"./index-_HuXWBMo.js";import"./Dialog-CcJYPdWy.js";import"./cross-Bbtec1AH.js";import"./svgIconContainer-DB1CdLm7.js";import"./useBaseUiId-CeUDsPHA.js";import"./InternalBackdrop-Bp2koLwT.js";import"./composite-0yZaiGel.js";import"./index-DMqlf5ki.js";import"./index-Cd-PRAMm.js";import"./index-BneZaifa.js";import"./useEventCallback-DKAOz3g2.js";import"./SkeletonBar-CZC-qmq0.js";import"./LoadingCell-CZYj7tK-.js";import"./ColumnConfigDialog-C25ouUTD.js";import"./DraggableList-J7E_9wyv.js";import"./search-DEtheuwO.js";import"./Input-V8GsltIX.js";import"./useControlled-0_Lx4vTT.js";import"./isEqual-CPkuV9kT.js";import"./isObject-Bk8QKs7M.js";import"./Button-hh7S8JbN.js";import"./ActionButton-DkaChMpJ.js";import"./Checkbox-C-42zxVd.js";import"./useValueChanged-ZO3to8uj.js";import"./CollapsiblePanel-DBh4BJ4h.js";import"./MultiColumnSortDialog-Cy_w-Zl-.js";import"./MenuTrigger-B8bcIin6.js";import"./CompositeItem-DlRQsEAc.js";import"./ToolbarRootContext-Bfx00Fpp.js";import"./getDisabledMountTransitionStyles-ChNDk6oM.js";import"./getPseudoElementBounds-B2F2Kv0M.js";import"./chevron-down-CsImW_M5.js";import"./index-clvcww1x.js";import"./error-_Ix0v8YA.js";import"./BaseCbacBanner-CbscbDa5.js";import"./makeExternalStore-CeeZV4L3.js";import"./Tooltip-DS_9ZYJ6.js";import"./PopoverPopup-BVyWIjI8.js";import"./toNumber-SyMlmTqK.js";import"./tick-ByIrFSAp.js";import"./DropdownField-DdueSsuv.js";import"./withOsdkMetrics-B9ZHRpAC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
