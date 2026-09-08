import{j as r}from"./iframe--ccl4y8N.js";import{O as b}from"./object-table-CR6w98zx.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-fwGmM6Vb.js";import{u as g}from"./useOsdkClient-VVFwCZnH.js";import"./preload-helper-eDRQxybW.js";import"./Table-CwJnTSLu.js";import"./index-Vig6W4vx.js";import"./Dialog-B__qzqHr.js";import"./cross-DXpDqiaU.js";import"./svgIconContainer-DanQ2deo.js";import"./useBaseUiId-fZY9l5U4.js";import"./InternalBackdrop-CcF1cHM3.js";import"./composite-BIOD5O0o.js";import"./index-DaU8wHoE.js";import"./index-DHS-gUYg.js";import"./index-BGU5pc6Z.js";import"./useEventCallback-aG5NN5nQ.js";import"./SkeletonBar-CjkXHjrG.js";import"./LoadingCell-Dd_uLqZH.js";import"./ColumnConfigDialog-CMQdiYEt.js";import"./DraggableList-B5aeSYJb.js";import"./search-BSNzJLm0.js";import"./Input-CMEDwRP1.js";import"./useControlled-DnjkEDg6.js";import"./Button-WLNHPk3M.js";import"./small-cross-BpjjQ8hl.js";import"./ActionButton-CBwATAf_.js";import"./Checkbox-D4QlXADU.js";import"./useValueChanged-WfWZ-saZ.js";import"./CollapsiblePanel-CpfhC1pL.js";import"./MultiColumnSortDialog-DcUJ7g95.js";import"./MenuTrigger-DHolIQKG.js";import"./CompositeItem-CgDhVlw6.js";import"./ToolbarRootContext-DphUk-b_.js";import"./getDisabledMountTransitionStyles-Fp8bhwNn.js";import"./getPseudoElementBounds-C7suUQde.js";import"./chevron-down-CjjtTKBP.js";import"./index-DlRKciFL.js";import"./error-C1s20D2H.js";import"./BaseCbacBanner-BLo7Llvs.js";import"./makeExternalStore-CgFnBRv9.js";import"./Tooltip-CawT2Rn1.js";import"./PopoverPopup-D3eT8tPI.js";import"./debounce-C5k2VTX2.js";import"./tick-BSFeBmWe.js";import"./DropdownField-qGy4ydz7.js";import"./isEqual-Bv9sPlAd.js";import"./withOsdkMetrics-CgPXr3ib.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
