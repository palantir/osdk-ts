import{j as r}from"./iframe-wJSBANRY.js";import{O as b}from"./object-table-dHKlunb9.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-wXgG6zVO.js";import{u as g}from"./useOsdkClient-DWkxVc6G.js";import"./preload-helper-B2Ho1hLQ.js";import"./Table-CTD02Af2.js";import"./index-BcqSzCju.js";import"./Dialog-CV6-j9YY.js";import"./cross-iKlVZHPy.js";import"./svgIconContainer-Ci6LfE3v.js";import"./useBaseUiId-DWH3HBR0.js";import"./InternalBackdrop-PNyvHwph.js";import"./composite-CrDIQ1mA.js";import"./index-v1Sv6Skf.js";import"./index-BVhp-lLY.js";import"./index-CQ_EW3Gy.js";import"./useEventCallback-DGk7LQxu.js";import"./SkeletonBar-CDnrAFCZ.js";import"./LoadingCell-Cn8isCsC.js";import"./ColumnConfigDialog-DMxKVsSi.js";import"./DraggableList-Bd0kJQ_h.js";import"./search-D4rdWSgZ.js";import"./Input-Cn5YrDjO.js";import"./useControlled-BvO6L4jZ.js";import"./Button-Bs-O5zId.js";import"./small-cross-Cpe-iFEE.js";import"./ActionButton-DdrPB5Lk.js";import"./Checkbox-BX830qPl.js";import"./useValueChanged-CZAIb2ZW.js";import"./CollapsiblePanel-DCeDgGvN.js";import"./MultiColumnSortDialog-Ox4I1sUH.js";import"./MenuTrigger-BWDSVjYX.js";import"./CompositeItem-CMcnLQ_L.js";import"./ToolbarRootContext-ChwiRPwn.js";import"./getDisabledMountTransitionStyles-DDRBIdQ3.js";import"./getPseudoElementBounds-MQP3kSmu.js";import"./chevron-down-Cwjazhdf.js";import"./index-pP0t4O08.js";import"./error-ByPPsGV9.js";import"./BaseCbacBanner-COwBtUHw.js";import"./makeExternalStore-Cdabd0ud.js";import"./Tooltip-hpUjH5hm.js";import"./PopoverPopup-BZ8qTaMK.js";import"./debounce-ByAeDhuR.js";import"./tick-DVG2gobP.js";import"./DropdownField-DUCR4Hdj.js";import"./isEqual-BaPqpVgX.js";import"./withOsdkMetrics-DYFTNSHn.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
