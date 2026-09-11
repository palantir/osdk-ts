import{j as r}from"./iframe-DrGL59fh.js";import{O as b}from"./object-table-BAMPb11c.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-tF4ZyBNa.js";import{u as g}from"./useOsdkClient-Bq4QpKzc.js";import"./preload-helper-D-pltsU0.js";import"./Table-CrterXlj.js";import"./index-BPJV00wo.js";import"./Dialog-BySReYmf.js";import"./cross-B3fC_apP.js";import"./svgIconContainer-CHeYR8wC.js";import"./useBaseUiId-2W_ytHMV.js";import"./InternalBackdrop-m5QQAybv.js";import"./composite-VGQUbzTm.js";import"./index-CAwEJolB.js";import"./index-cKTu6glV.js";import"./index-BFxVNMj8.js";import"./useEventCallback-Be1n87Un.js";import"./SkeletonBar-BrIvGh1U.js";import"./LoadingCell-CeRyGgiy.js";import"./ColumnConfigDialog-93nvgRut.js";import"./DraggableList-0EZpZvz0.js";import"./search-D_KAjQsE.js";import"./Input-GRmoIvE6.js";import"./useControlled-D76B4nnK.js";import"./Button-Dz98rt32.js";import"./small-cross-CITcdkqm.js";import"./ActionButton-D6TgzS-d.js";import"./Checkbox-DeOFI8HA.js";import"./useValueChanged-Cv10pSZl.js";import"./CollapsiblePanel-C-SqBgY1.js";import"./MultiColumnSortDialog-CegqPi6L.js";import"./MenuTrigger-MBe05SYz.js";import"./CompositeItem-BckOB5Eo.js";import"./ToolbarRootContext-C91J_2EK.js";import"./getDisabledMountTransitionStyles-CLY_oqku.js";import"./getPseudoElementBounds-D97GaXSX.js";import"./chevron-down-DCzbMy7Q.js";import"./index-Bzlu61KO.js";import"./error-B4r2g8yv.js";import"./BaseCbacBanner-Co78UpQW.js";import"./makeExternalStore-Dar-D9jL.js";import"./Tooltip-CqOLiVEe.js";import"./PopoverPopup-DyYNic55.js";import"./debounce-C9pzeh_f.js";import"./tick-BYEzfJH7.js";import"./DropdownField-CcRkuqdD.js";import"./isEqual-DYGtsIue.js";import"./withOsdkMetrics-tWMBpvoz.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
