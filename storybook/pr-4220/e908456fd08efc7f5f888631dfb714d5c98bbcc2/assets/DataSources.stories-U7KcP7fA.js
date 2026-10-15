import{j as r}from"./iframe-MDo3IV8i.js";import{O as b}from"./object-table-BHDCh1lU.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D9-bAEOM.js";import{u as g}from"./useOsdkClient-BLznHT_k.js";import"./preload-helper-DePZz3Cx.js";import"./Table-CcLxBPN5.js";import"./index-Bd9muxHi.js";import"./Dialog-D091J6Iw.js";import"./cross-DnJsfvPF.js";import"./svgIconContainer-Di1UT1Hh.js";import"./useBaseUiId-DZYLQUMX.js";import"./InternalBackdrop-B_Z49Hjp.js";import"./composite-BLxakyPe.js";import"./index-C0Z9YQ4r.js";import"./index-DtzdNaWl.js";import"./index-DC6-gGNF.js";import"./useEventCallback-BiWUFDKH.js";import"./SkeletonBar-DAJEovb9.js";import"./LoadingCell-Bp3cenes.js";import"./ColumnConfigDialog-BufpKbPA.js";import"./DraggableList-7tcDxeGj.js";import"./search-DZiAT2nK.js";import"./Input-DM_kQkOg.js";import"./useControlled-OtMCa810.js";import"./Button-Bqg_-6Me.js";import"./small-cross-C2UBLUxY.js";import"./ActionButton-BfC02Ahv.js";import"./Checkbox-DSzw2ZOb.js";import"./useValueChanged-C_9hR8MX.js";import"./CollapsiblePanel-DuDuGP7y.js";import"./MultiColumnSortDialog-RUGd38DP.js";import"./MenuTrigger-BF7OivmV.js";import"./CompositeItem-DLH43jaW.js";import"./ToolbarRootContext-gbgv7X5-.js";import"./getDisabledMountTransitionStyles-B5B6Fr9m.js";import"./getPseudoElementBounds-CLPZWJOu.js";import"./chevron-down-WrjnBnPA.js";import"./index-B_iT01JM.js";import"./error-x3VOvdeC.js";import"./BaseCbacBanner-BycYWD4l.js";import"./makeExternalStore-0rzwJ2ZN.js";import"./Tooltip-BL4BcNe2.js";import"./PopoverPopup-vZaQfjxA.js";import"./debounce-C7UDLVsq.js";import"./tick-BIWm1VGl.js";import"./DropdownField-CmBVvZuj.js";import"./isEqual-4V1lhL4v.js";import"./withOsdkMetrics-Bd9ZRtnK.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
