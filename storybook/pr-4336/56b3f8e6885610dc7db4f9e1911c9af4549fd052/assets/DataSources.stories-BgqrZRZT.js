import{j as r}from"./iframe-D0kdPAo3.js";import{O as b}from"./object-table-CneNSn49.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BixW1abF.js";import{u as g}from"./useOsdkClient-dHn_9ypV.js";import"./preload-helper-X5HFotRj.js";import"./Table-B0KQvr-x.js";import"./index-C2K0wsys.js";import"./Dialog-C_HKvFmk.js";import"./cross-Dp20Xkzu.js";import"./svgIconContainer-BmwAZIQM.js";import"./useBaseUiId-C6KTtyrN.js";import"./InternalBackdrop-DsRGKbT5.js";import"./composite-DFD2cJI4.js";import"./index-BeFxKd2J.js";import"./index-BZY0MS25.js";import"./index-BEujjIB4.js";import"./useEventCallback-wCYEJdyR.js";import"./SkeletonBar-Bny8Ap5P.js";import"./LoadingCell-ZQCHsDc5.js";import"./ColumnConfigDialog-Bmp89gH6.js";import"./DraggableList-BEr5f3hJ.js";import"./search-C3AmiWbF.js";import"./Input-CZD7bnty.js";import"./useControlled-DZabxLnK.js";import"./Button-DI6m0SX0.js";import"./small-cross-CZlKCJ9V.js";import"./ActionButton-B_wjtQIY.js";import"./Checkbox-SA0w8yHs.js";import"./useValueChanged-BSU3S3ph.js";import"./CollapsiblePanel-DLdNf4gN.js";import"./MultiColumnSortDialog-C_ETUXes.js";import"./MenuTrigger-CpfJKCPH.js";import"./CompositeItem-Sp5SCghr.js";import"./ToolbarRootContext-CsF2L-Zy.js";import"./getDisabledMountTransitionStyles-Bk9Rznwb.js";import"./getPseudoElementBounds-RJQJ-VSv.js";import"./chevron-down-PTlaQvf9.js";import"./index-4VxIXF47.js";import"./error-LXdit3w4.js";import"./BaseCbacBanner-v0K37KRd.js";import"./makeExternalStore-BHFwut4R.js";import"./Tooltip-udyINwMi.js";import"./PopoverPopup-g8Zg0gS_.js";import"./debounce-CAomu0Oz.js";import"./tick-RNPG6mE0.js";import"./DropdownField-BeyRtiaN.js";import"./isEqual-DCCU8xUM.js";import"./withOsdkMetrics-C30AWaoV.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
