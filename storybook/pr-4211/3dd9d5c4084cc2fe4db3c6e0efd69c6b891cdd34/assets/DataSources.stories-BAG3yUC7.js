import{j as r}from"./iframe-5u9ZtrJt.js";import{O as b}from"./object-table-CN_KK_hh.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B6W4Nvqd.js";import{u as g}from"./useOsdkClient-PPOhTHxO.js";import"./preload-helper-CuQanuSU.js";import"./Table-BHoyzQ-v.js";import"./index-DavgBEP1.js";import"./Dialog-D7Qi8d0N.js";import"./cross-BpzwhQi5.js";import"./svgIconContainer-jQAOa3hY.js";import"./useBaseUiId-CQYNNsxK.js";import"./InternalBackdrop-B3-fNuIA.js";import"./composite-CGw-Ihls.js";import"./index-DMFEApmF.js";import"./index-C7XPHJ8o.js";import"./index-CtwWL3Ux.js";import"./useEventCallback-CX8B3d2_.js";import"./SkeletonBar-Kv76IGDP.js";import"./LoadingCell-DBmjNbby.js";import"./ColumnConfigDialog-Bmw7WTKl.js";import"./DraggableList-7jhILcdd.js";import"./search-JNpB3WRd.js";import"./Input-D8eW-et_.js";import"./useControlled-B5brBFEZ.js";import"./Button-ChR8k8XV.js";import"./small-cross-AuWZbj58.js";import"./ActionButton-2ZAcI0x_.js";import"./Checkbox-ySxrIpA4.js";import"./useValueChanged-BuQNO87J.js";import"./CollapsiblePanel-D47Xkn4l.js";import"./MultiColumnSortDialog-BwZ0CHfV.js";import"./MenuTrigger-DlhSOFK6.js";import"./CompositeItem-DF5M0Q62.js";import"./ToolbarRootContext-BdaDw2wr.js";import"./getDisabledMountTransitionStyles-v5M4alGV.js";import"./getPseudoElementBounds-vB1bflfw.js";import"./chevron-down-B3Fv0w50.js";import"./index-vMKc9Vfa.js";import"./error-CQ8cV0Cv.js";import"./BaseCbacBanner-Do26j3g0.js";import"./makeExternalStore-DT_DHHwN.js";import"./Tooltip-CTZfgpQD.js";import"./PopoverPopup-DeaoiWel.js";import"./debounce-C_5CcOwA.js";import"./tick-CScWJoZM.js";import"./DropdownField-DBfFz7s7.js";import"./isEqual-C4H2ETAO.js";import"./withOsdkMetrics-evZV6vNo.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
