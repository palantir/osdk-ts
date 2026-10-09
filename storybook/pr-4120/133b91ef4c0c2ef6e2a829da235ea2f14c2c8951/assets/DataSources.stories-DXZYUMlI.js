import{j as r}from"./iframe-DpbVK0Z4.js";import{O as b}from"./object-table-D_55a_1X.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Det4WOIm.js";import{u as g}from"./useOsdkClient-BbUmDnru.js";import"./preload-helper-BMTjOH4m.js";import"./Table-kq4CpFSp.js";import"./index-FV6PMg5w.js";import"./Dialog-HKso5UO8.js";import"./cross-CfOksEOQ.js";import"./svgIconContainer-BopSq90e.js";import"./useBaseUiId-DPGPywgp.js";import"./InternalBackdrop-BkpFCSNm.js";import"./composite-B3hTwjvJ.js";import"./index-CtCwm9A8.js";import"./index-DjzWs5sw.js";import"./index-Bxy7ANPj.js";import"./useEventCallback-CELKL3T2.js";import"./SkeletonBar-BebtoPD2.js";import"./LoadingCell-DGTzDvme.js";import"./ColumnConfigDialog-5LfAslvW.js";import"./DraggableList-Bh-ur1kT.js";import"./search-Bpcgz7ed.js";import"./Input-AjQ1LbFX.js";import"./useControlled-C8mfwfwA.js";import"./Button-DXRDup3v.js";import"./small-cross-Bd3WaBs1.js";import"./ActionButton-B-neCEMC.js";import"./Checkbox-BfHeZkor.js";import"./useValueChanged-DgVW91ai.js";import"./CollapsiblePanel-DPTDjISk.js";import"./MultiColumnSortDialog-BP7j-gF2.js";import"./MenuTrigger-DPV4rvDp.js";import"./CompositeItem-7xXFyPB2.js";import"./ToolbarRootContext-EQtWNPb0.js";import"./getDisabledMountTransitionStyles-yPHluku3.js";import"./getPseudoElementBounds-0wL7ed4r.js";import"./chevron-down-BPIZ_aJd.js";import"./index-DFzod05J.js";import"./error-Ddzskxi-.js";import"./BaseCbacBanner-DzidXmNq.js";import"./makeExternalStore-hBeqTILr.js";import"./Tooltip-CsGpMJrz.js";import"./PopoverPopup-BKIXB1bp.js";import"./debounce-D12j_pu2.js";import"./tick-L9ql_aPl.js";import"./DropdownField-BbOufXCH.js";import"./isEqual-CUNBvXsF.js";import"./withOsdkMetrics-CogiPj_o.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
