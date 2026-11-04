import{j as r}from"./iframe-DcblcpsD.js";import{O as b}from"./object-table-C0n6V8qq.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-1GRpdGw-.js";import{u as g}from"./useOsdkClient-u3WB6gov.js";import"./preload-helper-D_wMhyaD.js";import"./Table-B_qOtHsd.js";import"./index-7ach3CvX.js";import"./Dialog-CcR85Lmc.js";import"./cross-BsrNuqdH.js";import"./svgIconContainer-BNnsBEK2.js";import"./useBaseUiId-kDJ62DAx.js";import"./InternalBackdrop-vzMbdI9w.js";import"./composite-C6NGEWFA.js";import"./index-5vhpnJCd.js";import"./index-Dyr0XLHo.js";import"./index-BFsskuZE.js";import"./useEventCallback-BFyPF3KM.js";import"./SkeletonBar-CFgpPqeF.js";import"./LoadingCell-z7if_OnS.js";import"./ColumnConfigDialog-CRirQD-Y.js";import"./DraggableList--ymmfdOD.js";import"./search-DNqBvZq5.js";import"./Input-DFCeqSqF.js";import"./useControlled-i2WyCNOr.js";import"./Button-BDRb-Pkx.js";import"./small-cross-DPxvOvn1.js";import"./ActionButton-DEfTs481.js";import"./Checkbox-CQZoyJBa.js";import"./useValueChanged-DVi_uI5x.js";import"./CollapsiblePanel-Dy-ip83M.js";import"./MultiColumnSortDialog-DVx3zfNu.js";import"./MenuTrigger-CFbx5r7B.js";import"./CompositeItem-BDLcpoAw.js";import"./ToolbarRootContext-DePr5kCC.js";import"./getDisabledMountTransitionStyles-CMYjml29.js";import"./getPseudoElementBounds-DmerV0_o.js";import"./chevron-down-CzYSE9_L.js";import"./index-DjzvDUKT.js";import"./error-CKNR4CvZ.js";import"./BaseCbacBanner-DbcQhu-t.js";import"./makeExternalStore-DRuwFA-0.js";import"./Tooltip-NnVrtTvo.js";import"./PopoverPopup-C62qYoS6.js";import"./debounce-AIHTvjc-.js";import"./tick-CvE3NYGn.js";import"./DropdownField-v-l2qfMk.js";import"./isEqual-BzUgPpSO.js";import"./withOsdkMetrics-CBgzbsXI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
