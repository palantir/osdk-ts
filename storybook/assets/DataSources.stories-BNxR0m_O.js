import{j as r}from"./iframe-B0Q7ew8Z.js";import{O as b}from"./object-table-CnvSGGFW.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B6i0Ccit.js";import{u as g}from"./useOsdkClient-BcJFc_0Y.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BW4DoD-q.js";import"./index-B3euQAxX.js";import"./Dialog-WbYUxlgJ.js";import"./cross-CuUHaT77.js";import"./svgIconContainer-DHqtFPi_.js";import"./useBaseUiId-DTpiFHLl.js";import"./InternalBackdrop-C_e4Amrk.js";import"./composite-C38hBHQ1.js";import"./index-LgXgW0tz.js";import"./index-DDwtoaNx.js";import"./index-CdLLvF95.js";import"./useEventCallback-CfEmFQFo.js";import"./SkeletonBar-8Z-HAmIt.js";import"./LoadingCell-rvCJgKBp.js";import"./ColumnConfigDialog-XOh1gpvr.js";import"./DraggableList-DNdEOp6h.js";import"./search-ftQvRLI-.js";import"./Input-g4yPu6B6.js";import"./useControlled-BS_Eo8Jr.js";import"./Button-DJ9AZpJd.js";import"./small-cross-DfX0mXVC.js";import"./ActionButton-DGWgotCn.js";import"./Checkbox-B4CnmWRO.js";import"./useValueChanged-DtBaEsJ9.js";import"./CollapsiblePanel-CXKPpa6L.js";import"./MultiColumnSortDialog-DGOR6vtP.js";import"./MenuTrigger-WLHl3M4-.js";import"./CompositeItem-CVqNqknj.js";import"./ToolbarRootContext-C1mulGkb.js";import"./getDisabledMountTransitionStyles-CW0hcLTx.js";import"./getPseudoElementBounds-BqkVMi-w.js";import"./chevron-down-CPWeMG22.js";import"./index-MLSRGr_T.js";import"./error-DCkSicSK.js";import"./BaseCbacBanner-Bzf8VEwK.js";import"./makeExternalStore-DfcRwF-H.js";import"./Tooltip-DwBPcoAB.js";import"./PopoverPopup-BDARVRq8.js";import"./debounce-CyMb4iRa.js";import"./tick-CnmVaPy0.js";import"./DropdownField-CxXuqhZR.js";import"./isEqual-DF47nHyu.js";import"./withOsdkMetrics-xWaVFLHz.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
