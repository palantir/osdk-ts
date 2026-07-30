import{j as r}from"./iframe-CuiGp-Dt.js";import{O as b}from"./object-table-B7uvWIw8.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CohWELm4.js";import{u as g}from"./useOsdkClient-BjfarLwZ.js";import"./preload-helper-SMMH4kyg.js";import"./Table-CLWCpSj8.js";import"./index-CCPD4c0K.js";import"./Dialog-CMWSmxiX.js";import"./cross-CqlThrbh.js";import"./svgIconContainer-D37Tnjck.js";import"./useBaseUiId-dJ6_umyu.js";import"./InternalBackdrop-CCnfXl4v.js";import"./composite-FY18TxQF.js";import"./index-DDW4Db7g.js";import"./index-cGGpA_xq.js";import"./index-CAyJQP-c.js";import"./useEventCallback-D_nZVAgt.js";import"./SkeletonBar-DSIq-YUs.js";import"./LoadingCell-fEViiG9H.js";import"./ColumnConfigDialog-CxA8RUHD.js";import"./DraggableList-CSzrfUqu.js";import"./search-BVtYeN3h.js";import"./Input-CSq1qZza.js";import"./useControlled-BQU4YQHh.js";import"./isEqual-BAaGBZAh.js";import"./isObject-C4mu_IpK.js";import"./Button-CHWa0SfK.js";import"./ActionButton-rfmGaQx6.js";import"./Checkbox-aRNMXRNJ.js";import"./useValueChanged-BE6yVMji.js";import"./CollapsiblePanel-DGuJ-eTT.js";import"./MultiColumnSortDialog-B6im6FhY.js";import"./MenuTrigger-ChQxOJcf.js";import"./CompositeItem-O6Z2TQDF.js";import"./ToolbarRootContext-D7hBI_DT.js";import"./getDisabledMountTransitionStyles-DTh42eTs.js";import"./getPseudoElementBounds-Bszm0I6K.js";import"./chevron-down-5QkSvcpX.js";import"./index-D5uc652e.js";import"./error-DmBa7_lJ.js";import"./BaseCbacBanner-BkLaiyVr.js";import"./makeExternalStore-CNEnZVLO.js";import"./Tooltip-BwaQ8jJh.js";import"./PopoverPopup-Bz0Ltawp.js";import"./toNumber-C1CexwWJ.js";import"./tick-LANHlESD.js";import"./DropdownField-8Hpa1OBm.js";import"./withOsdkMetrics-IOnx9SUw.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
