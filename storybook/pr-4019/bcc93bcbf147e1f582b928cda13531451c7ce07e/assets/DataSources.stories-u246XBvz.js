import{j as r}from"./iframe-CbWKQTAd.js";import{O as b}from"./object-table-MR0jbZG5.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dyjs_vV8.js";import{u as g}from"./useOsdkClient-IqzxIclx.js";import"./preload-helper-BodAnLGY.js";import"./Table-CYjFiXE1.js";import"./index-tkyBrQAe.js";import"./Dialog-mAFF5Qnl.js";import"./cross-DgoT9wry.js";import"./svgIconContainer-DOikMtqk.js";import"./useBaseUiId-XRd770-U.js";import"./InternalBackdrop-aJh4Cj33.js";import"./composite-DcG51BnW.js";import"./index-CvOYyjqx.js";import"./index-B9_31cVf.js";import"./index-Bln6Sg35.js";import"./useEventCallback-0naykCU3.js";import"./SkeletonBar-DsGaioLv.js";import"./LoadingCell-Dx6PyYMV.js";import"./ColumnConfigDialog-BTsF37nb.js";import"./DraggableList-HQiyRzPU.js";import"./search-DGKjGcgN.js";import"./Input-DFzbl_7I.js";import"./useControlled-Lsl_hIqj.js";import"./Button-BKLVv1MD.js";import"./small-cross-BUr6qJjI.js";import"./ActionButton-DcAqfgCZ.js";import"./Checkbox-CfG5f4Qa.js";import"./useValueChanged-DvUqsBxA.js";import"./CollapsiblePanel-doEvfhG5.js";import"./MultiColumnSortDialog-By9Zwthb.js";import"./MenuTrigger-CLQngVNg.js";import"./CompositeItem-C2HqLZ_Z.js";import"./ToolbarRootContext-0YQDLW37.js";import"./getDisabledMountTransitionStyles-GXdrPdpy.js";import"./getPseudoElementBounds-B4n-FV3q.js";import"./chevron-down-eXF_jIno.js";import"./index-b_e1xyL7.js";import"./error-CW2P3uO4.js";import"./BaseCbacBanner-CGjwljHM.js";import"./makeExternalStore-DdKrBv4a.js";import"./Tooltip-d_DmM_MB.js";import"./PopoverPopup-Btctsiv_.js";import"./debounce-5-704DJU.js";import"./tick-BitNuW6k.js";import"./DropdownField-BhWFFRno.js";import"./isEqual-D_hpX-EQ.js";import"./withOsdkMetrics-C5qCRIWi.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
