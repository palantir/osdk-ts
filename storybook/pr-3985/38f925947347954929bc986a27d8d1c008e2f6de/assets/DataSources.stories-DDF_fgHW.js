import{j as r}from"./iframe-B_zDWzul.js";import{O as b}from"./object-table-cOqu9El5.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-149PsyYL.js";import{u as g}from"./useOsdkClient-iyjN2aHF.js";import"./preload-helper-DG9VDp_n.js";import"./Table-CkJAHw1l.js";import"./index-Boe0r-ul.js";import"./Dialog-BxEqGnE7.js";import"./cross-DKHH0lxU.js";import"./svgIconContainer-D8Trdk-G.js";import"./useBaseUiId-BPYuvIYG.js";import"./InternalBackdrop-BBDXZiom.js";import"./composite-CRWF04qz.js";import"./index-Br-DhCTN.js";import"./index-aWrltaDE.js";import"./index-Bfg-2Dta.js";import"./useEventCallback-DnLRigCq.js";import"./SkeletonBar-C_WlHfIE.js";import"./LoadingCell-DihNEnoT.js";import"./ColumnConfigDialog-CmSGaq61.js";import"./DraggableList-DUxKa0PJ.js";import"./search-CXl9LYG4.js";import"./Input-K8Dbc9EI.js";import"./useControlled-CZdhzCyg.js";import"./Button-CwOCHkU2.js";import"./small-cross-fjxceIfR.js";import"./ActionButton-DfJlFfaW.js";import"./Checkbox-W0W1RVqq.js";import"./useValueChanged-ge1xS2AC.js";import"./CollapsiblePanel-D0sNlSFL.js";import"./MultiColumnSortDialog-CNA_9xtQ.js";import"./MenuTrigger-CNaCmRRS.js";import"./CompositeItem-DKZBVYKb.js";import"./ToolbarRootContext-CvnVRZq1.js";import"./getDisabledMountTransitionStyles-B56Kq4AN.js";import"./getPseudoElementBounds-BRtR8Y3Z.js";import"./chevron-down-uvQYx996.js";import"./index-qHFFPM8K.js";import"./error-D8w3bqy-.js";import"./BaseCbacBanner-IP3vHVdh.js";import"./makeExternalStore-CxUdCktA.js";import"./Tooltip-CgN9cFWO.js";import"./PopoverPopup-DJdvahb_.js";import"./debounce-BxwTN6fx.js";import"./tick-Cd-BvMVz.js";import"./DropdownField-CR3J2Rsn.js";import"./isEqual-DoZhvmKv.js";import"./withOsdkMetrics-3_FMme5R.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
