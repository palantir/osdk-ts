import{j as r}from"./iframe-2CZ5tyet.js";import{O as b}from"./object-table-DpRFI095.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-I0UMbiv9.js";import{u as g}from"./useOsdkClient-CiuR1H2l.js";import"./preload-helper-PdhlwSnk.js";import"./Table-CznV6T2W.js";import"./index-BEbGGmzC.js";import"./Dialog-CeWRMnMF.js";import"./cross-L_JwSQIU.js";import"./svgIconContainer-CNOiLZ-C.js";import"./useBaseUiId-DmeaPkXN.js";import"./InternalBackdrop-AEMlst0F.js";import"./composite-D3k21xgh.js";import"./index-DJ2zkz4W.js";import"./index-BzLD7IFo.js";import"./index-BLLQpwjF.js";import"./useEventCallback-BSE4SjR3.js";import"./SkeletonBar-CZIrexgF.js";import"./LoadingCell-hl43yvOQ.js";import"./ColumnConfigDialog-gbHfBktU.js";import"./DraggableList-D8xTIljs.js";import"./search-DVGk6bce.js";import"./Input-nyDT7hKf.js";import"./useControlled-Dh1VVbb0.js";import"./Button-eNpy85xj.js";import"./small-cross-DldLH4C7.js";import"./ActionButton-Bj84kgPY.js";import"./Checkbox-NvzeqK8d.js";import"./useValueChanged-B3VhTAWV.js";import"./CollapsiblePanel-DSL9tbZc.js";import"./MultiColumnSortDialog-haCwcxAA.js";import"./MenuTrigger-BEDWfK89.js";import"./CompositeItem-_M4T2kN5.js";import"./ToolbarRootContext-C-QqQ4cn.js";import"./getDisabledMountTransitionStyles-Gd7L8Xae.js";import"./getPseudoElementBounds-Xqurqd99.js";import"./chevron-down-9zPbKgFH.js";import"./index-DlBbVzYN.js";import"./error-_JBSJ8K6.js";import"./BaseCbacBanner-CtN12RyV.js";import"./makeExternalStore-47_tyIYI.js";import"./Tooltip-BmclmkMF.js";import"./PopoverPopup-BaNCTG4D.js";import"./debounce-C66p6rWC.js";import"./tick-BDMTisIM.js";import"./DropdownField-dfStdW8W.js";import"./isEqual-DYEOAiyn.js";import"./withOsdkMetrics-CV77OAmc.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
