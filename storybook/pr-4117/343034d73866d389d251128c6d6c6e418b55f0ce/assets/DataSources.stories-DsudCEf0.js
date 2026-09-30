import{j as r}from"./iframe-CE_irqki.js";import{O as b}from"./object-table-BtpjRJ67.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B5q4rRIM.js";import{u as g}from"./useOsdkClient-DUBVzTuP.js";import"./preload-helper-B0wObQeK.js";import"./Table-C_YbgNlG.js";import"./index-CbZ4Cj79.js";import"./Dialog-fe6M2c65.js";import"./cross-CiDhEPuo.js";import"./svgIconContainer-co06VEp6.js";import"./useBaseUiId-Cuodx7xu.js";import"./InternalBackdrop-Dkqi7a0r.js";import"./composite-CCcrzfR2.js";import"./index-D0l0Hg2C.js";import"./index-C-NLbbDg.js";import"./index-_MWob-Zb.js";import"./useEventCallback-CUNobEcy.js";import"./SkeletonBar-BLmbpfxb.js";import"./LoadingCell-nunxEioL.js";import"./ColumnConfigDialog-AdaF-ihs.js";import"./DraggableList-DcFYfUSk.js";import"./search-BPF_4D3u.js";import"./Input-CQv_PU5A.js";import"./useControlled-BqInFAvQ.js";import"./Button-Do97WS9c.js";import"./small-cross-DBd0iCaF.js";import"./ActionButton-B_cFwAVF.js";import"./Checkbox-CJ-JBQSc.js";import"./useValueChanged-BA6THRKJ.js";import"./CollapsiblePanel-CzBB3n5y.js";import"./MultiColumnSortDialog-B-M_e88G.js";import"./MenuTrigger-CP0q2n0o.js";import"./CompositeItem-BnnmhO1F.js";import"./ToolbarRootContext-CDB_L_pZ.js";import"./getDisabledMountTransitionStyles-CYc6tB7S.js";import"./getPseudoElementBounds-QK10hLQz.js";import"./chevron-down-oqAS4iB6.js";import"./index-BrqtMSKB.js";import"./error-yF4FDunH.js";import"./BaseCbacBanner-D_xSicx0.js";import"./makeExternalStore-BFTnjumI.js";import"./Tooltip-C24crhHA.js";import"./PopoverPopup-BcZdQHxz.js";import"./debounce-CRdC3fBU.js";import"./tick-DeDyRDcO.js";import"./DropdownField-Cc5Zze2e.js";import"./isEqual-CY2x9raR.js";import"./withOsdkMetrics-TAUr-869.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
