import{j as r}from"./iframe-b_8xiy3W.js";import{O as b}from"./object-table-DrPIl3Zi.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-pRD_mHEK.js";import{u as g}from"./useOsdkClient-yfgmgRbP.js";import"./preload-helper-D0v6g8Db.js";import"./Table-DJR5OCUI.js";import"./index-oZ2AYheq.js";import"./Dialog-DznRX8R1.js";import"./cross-CALAWLOA.js";import"./svgIconContainer-ByDmaFbM.js";import"./useBaseUiId-DT31E3Yo.js";import"./InternalBackdrop-CLpVUHm8.js";import"./composite-cYMewAOc.js";import"./index-C8Xx4cgL.js";import"./index-xZwO_cAf.js";import"./index-BMWwnwmI.js";import"./useEventCallback-CAsu19Vq.js";import"./SkeletonBar-Bd96z6dI.js";import"./LoadingCell-Cu9MSHwe.js";import"./ColumnConfigDialog-BFWSuhw9.js";import"./DraggableList-xBM_bTxf.js";import"./search-CbAtzBKJ.js";import"./Input-Co7UsBkP.js";import"./useControlled-CAq9EV0h.js";import"./Button-CQKahg2d.js";import"./small-cross-BNQLIIyh.js";import"./ActionButton-CodfAc7s.js";import"./Checkbox-cHmIGIFt.js";import"./useValueChanged-CeFg2HVM.js";import"./CollapsiblePanel-D3gQHqx1.js";import"./MultiColumnSortDialog-CH-TfZDd.js";import"./MenuTrigger-CHuFRbAt.js";import"./CompositeItem-O5ez4ulJ.js";import"./ToolbarRootContext-BKksKq4U.js";import"./getDisabledMountTransitionStyles-CCClTCas.js";import"./getPseudoElementBounds-nU4-wp7y.js";import"./chevron-down-DItPxyzq.js";import"./index-BHrpVXex.js";import"./error-BHsdjMmH.js";import"./BaseCbacBanner-g3o59pg6.js";import"./makeExternalStore-c0rjbvLB.js";import"./Tooltip-Bamtogyy.js";import"./PopoverPopup-BtxX0L1I.js";import"./debounce-B2LvOlKd.js";import"./tick-HvfLanm4.js";import"./DropdownField-BCzLIobc.js";import"./isEqual-Cz2f4b96.js";import"./withOsdkMetrics-BpRFFsXx.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
