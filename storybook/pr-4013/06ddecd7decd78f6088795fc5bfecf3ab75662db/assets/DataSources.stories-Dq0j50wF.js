import{j as r}from"./iframe-mrGpuMKA.js";import{O as b}from"./object-table-BiIiKzx_.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DlaBTj_t.js";import{u as g}from"./useOsdkClient-D4Z99yZb.js";import"./preload-helper-bDWJHmtM.js";import"./Table-DqGvWfmy.js";import"./index-hISY08zN.js";import"./Dialog-DpVboJif.js";import"./cross-DPMi-K_N.js";import"./svgIconContainer-C-bY0sdP.js";import"./useBaseUiId-BkHLkay-.js";import"./InternalBackdrop-U3rubu2u.js";import"./composite-7erdXABz.js";import"./index-DMu33fvM.js";import"./index-Bqma_fPL.js";import"./index-DYAfevna.js";import"./useEventCallback-BPIHKofH.js";import"./SkeletonBar-DwNj8MYg.js";import"./LoadingCell-DrzDyWTO.js";import"./ColumnConfigDialog-DgOQeC4G.js";import"./DraggableList-D745B4C7.js";import"./search-Yrs_12vc.js";import"./Input-B84oc61c.js";import"./useControlled-Dq35lwdk.js";import"./Button-CQDVf8SZ.js";import"./small-cross-BiLUn5X_.js";import"./ActionButton-BM4rNAaR.js";import"./Checkbox-Bk7WJIlt.js";import"./useValueChanged-BZtpoNnx.js";import"./CollapsiblePanel-DDMWJLSE.js";import"./MultiColumnSortDialog-DNOtZGzF.js";import"./MenuTrigger-BQThW244.js";import"./CompositeItem-DUJu_nDn.js";import"./ToolbarRootContext-C5hM_2Bp.js";import"./getDisabledMountTransitionStyles-X6_-V5uQ.js";import"./getPseudoElementBounds-C8xxQ8d5.js";import"./chevron-down-CoivH60m.js";import"./index-OuRiGyxD.js";import"./error-DssOxS7p.js";import"./BaseCbacBanner-dJKflXBI.js";import"./makeExternalStore-Dc6_6-hA.js";import"./Tooltip-C8kXdT26.js";import"./PopoverPopup-QRxeem_z.js";import"./debounce-BKwdeDHg.js";import"./tick-BcvMJ5PG.js";import"./DropdownField-BqkHAkPF.js";import"./isEqual-D-2vVEF9.js";import"./withOsdkMetrics-MvJWQIwU.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
