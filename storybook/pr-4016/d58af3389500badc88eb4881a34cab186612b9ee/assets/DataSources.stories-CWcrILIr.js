import{j as r}from"./iframe-DlB65lJW.js";import{O as b}from"./object-table-CcWD3WsP.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DhUeGs5q.js";import{u as g}from"./useOsdkClient-Bw3TotSy.js";import"./preload-helper-DV_Jg5FM.js";import"./Table-DcDqojBO.js";import"./index-B8sBGRC5.js";import"./Dialog-DLhwrcm-.js";import"./cross-BYT-n1qT.js";import"./svgIconContainer-DE9YLrbK.js";import"./useBaseUiId-C0JAm9wS.js";import"./InternalBackdrop-SH1n7UWl.js";import"./composite-CUY2PD51.js";import"./index-Dk8pEk6M.js";import"./index-vvEU_kVM.js";import"./index-BvPZVp58.js";import"./useEventCallback-NsVuizNp.js";import"./SkeletonBar-DttNsmst.js";import"./LoadingCell-CCfFG6NQ.js";import"./ColumnConfigDialog-DYTKAZ8a.js";import"./DraggableList-Ci64cDF2.js";import"./search-DUnv4tIx.js";import"./Input-CXcuZUCe.js";import"./useControlled-CQNoni_g.js";import"./Button-C6hVNenO.js";import"./small-cross-QFgDRgyE.js";import"./ActionButton-CQcpOspk.js";import"./Checkbox-CgdfUSaF.js";import"./useValueChanged-C824U35_.js";import"./CollapsiblePanel-SDxq7GAZ.js";import"./MultiColumnSortDialog-msaLaZzx.js";import"./MenuTrigger-BT36bnMp.js";import"./CompositeItem-PpZ3j7ZS.js";import"./ToolbarRootContext-BDX936Z-.js";import"./getDisabledMountTransitionStyles-CDFfMpVr.js";import"./getPseudoElementBounds-PXmrM0eY.js";import"./chevron-down-BHTjgyZJ.js";import"./index-D-Hc9dUX.js";import"./error-DriOx_PR.js";import"./BaseCbacBanner-C5HWYNvi.js";import"./makeExternalStore-OTHtuU79.js";import"./Tooltip-D7WLW3WV.js";import"./PopoverPopup-BG_vJMqS.js";import"./debounce-N0tv_m3M.js";import"./tick-u8fu2QmD.js";import"./DropdownField-dOSM9Rw1.js";import"./isEqual-D9P5SRPk.js";import"./withOsdkMetrics-6eg3mxYV.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
