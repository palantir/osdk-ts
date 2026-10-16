import{j as r}from"./iframe-DMhUx0Fg.js";import{O as b}from"./object-table-DE8fBGhj.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DUTThEC5.js";import{u as g}from"./useOsdkClient-DJ0k-ije.js";import"./preload-helper-Cihlk8Ge.js";import"./Table-Da6cs4mT.js";import"./index-Cml4Y89r.js";import"./Dialog-BOq_zoJk.js";import"./cross-B04SzZ9a.js";import"./svgIconContainer-BbR8LDbO.js";import"./useBaseUiId-Cn1m1c-i.js";import"./InternalBackdrop-TfWeUkH5.js";import"./composite-ElTKsJn6.js";import"./index-BdVR8K9f.js";import"./index-DHMpAz6_.js";import"./index-DH75cEIM.js";import"./useEventCallback-D5w6D-ry.js";import"./SkeletonBar--G3RXL9q.js";import"./LoadingCell-BuMUQbHb.js";import"./ColumnConfigDialog-POJBQ206.js";import"./DraggableList-SAyA75P1.js";import"./search-BhCWHTId.js";import"./Input-CMBfU9Th.js";import"./useControlled-BnYANE82.js";import"./Button-BVqDK7_w.js";import"./small-cross-BYryOWLr.js";import"./ActionButton-BPaPgLh0.js";import"./Checkbox-DfpRBuKr.js";import"./useValueChanged-BVb2ZiR8.js";import"./CollapsiblePanel-soHfpF_t.js";import"./MultiColumnSortDialog-DW8NqDbb.js";import"./MenuTrigger-BtVXNuEq.js";import"./CompositeItem-CruspLcZ.js";import"./ToolbarRootContext-D6p48e5t.js";import"./getDisabledMountTransitionStyles-CtQRwei1.js";import"./getPseudoElementBounds-BUMieu6k.js";import"./chevron-down-DfsmE1o_.js";import"./index-Cg1qZyT8.js";import"./error-BGNhUAbf.js";import"./BaseCbacBanner-CwsDyiqo.js";import"./makeExternalStore-CWOCJrTj.js";import"./Tooltip-Bker_XsQ.js";import"./PopoverPopup-ve8SdMle.js";import"./debounce-BwonvSik.js";import"./tick-J71CIBzU.js";import"./DropdownField-ClZOcdQf.js";import"./isEqual-BqNMkLkS.js";import"./withOsdkMetrics-DGk-RlXg.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
