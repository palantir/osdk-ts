import{j as r}from"./iframe-wwmAnZJB.js";import{O as b}from"./object-table-WfEdAcTL.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Jd7kse8T.js";import{u as g}from"./useOsdkClient-Dcf70dRQ.js";import"./preload-helper-OhSO-U7q.js";import"./Table-B47-qmGE.js";import"./index-CR7mf95j.js";import"./Dialog-Djubn6b-.js";import"./cross-8dD8CYIw.js";import"./svgIconContainer-BudxXKul.js";import"./useBaseUiId-BR51eynY.js";import"./InternalBackdrop-B07avgPb.js";import"./composite-DgNImKCX.js";import"./index-DnWxg9AP.js";import"./index-ChdMXjiA.js";import"./index-Ba8v5_Il.js";import"./useEventCallback-myO5jREQ.js";import"./SkeletonBar-C3Finl3J.js";import"./LoadingCell-CrDm8CF6.js";import"./ColumnConfigDialog-CI23r34i.js";import"./DraggableList-CVGgGi5S.js";import"./search-C8QAasXE.js";import"./Input-dfiNY8gr.js";import"./useControlled-BhrECPzc.js";import"./Button-EDCPExC6.js";import"./small-cross-CEF3WehI.js";import"./ActionButton-DLTjDWPY.js";import"./Checkbox-B7tHH0Ao.js";import"./useValueChanged-CiAOff-4.js";import"./CollapsiblePanel-D75kMcbo.js";import"./MultiColumnSortDialog-B3bdcqBk.js";import"./MenuTrigger-CI2iR_lA.js";import"./CompositeItem-CH57RHZb.js";import"./ToolbarRootContext-Cy5wkqrQ.js";import"./getDisabledMountTransitionStyles-BeoyF_jW.js";import"./getPseudoElementBounds-DVACdGGF.js";import"./chevron-down-wdzezIea.js";import"./index-DSCiiu0M.js";import"./error--BpoQgxv.js";import"./BaseCbacBanner-D-nKi_wL.js";import"./makeExternalStore-CkSN1CwB.js";import"./Tooltip-BPfOgsTX.js";import"./PopoverPopup-BazkAXod.js";import"./debounce-B-Pm_7Wq.js";import"./tick-DenPhxuH.js";import"./DropdownField-z1o6ULkj.js";import"./isEqual-DW_EGqna.js";import"./withOsdkMetrics-C4BCCJj2.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
