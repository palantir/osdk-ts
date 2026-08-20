import{j as r}from"./iframe-9DMBWr0q.js";import{O as b}from"./object-table-BibkEGbR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BeqdNiYo.js";import{u as g}from"./useOsdkClient-D6FhjSll.js";import"./preload-helper-DalOHg7w.js";import"./Table-DHLmMlG-.js";import"./index-DQvdaF-W.js";import"./Dialog-Df8qvF-7.js";import"./cross-D2pRmhty.js";import"./svgIconContainer-54MNCtA9.js";import"./useBaseUiId-DsOnJdgo.js";import"./InternalBackdrop-CcIKsClD.js";import"./composite-pdHJBClF.js";import"./index-BmdeRFNN.js";import"./index-DHI41pZJ.js";import"./index-BC9PcR15.js";import"./useEventCallback-W8V2Dont.js";import"./SkeletonBar-B4ODr-AM.js";import"./LoadingCell-ndyblGvj.js";import"./ColumnConfigDialog-BSRPEeCB.js";import"./DraggableList-C2B-3KQT.js";import"./search-D5Zr1HOy.js";import"./Input-EUcX8Uzk.js";import"./useControlled-DytgQJGV.js";import"./Button-DUgj0L3T.js";import"./small-cross-a45cq7g8.js";import"./ActionButton-M4Hg-S07.js";import"./Checkbox-e6pqPY5D.js";import"./useValueChanged-CFHCDrlE.js";import"./CollapsiblePanel-C6jiw36r.js";import"./MultiColumnSortDialog-DA-66R8L.js";import"./MenuTrigger-DWvoMzGe.js";import"./CompositeItem-2UjtZXP3.js";import"./ToolbarRootContext-BPjGDrK2.js";import"./getDisabledMountTransitionStyles-D7rPIBuN.js";import"./getPseudoElementBounds-DhNL39RB.js";import"./chevron-down-CUeEPhCI.js";import"./index-BiO4atOF.js";import"./error-B9BZNthJ.js";import"./BaseCbacBanner-C0rOz-y3.js";import"./makeExternalStore-BHkeYhGJ.js";import"./Tooltip-CsXOXWqo.js";import"./PopoverPopup-yQY21wsF.js";import"./debounce-BXBIjcle.js";import"./tick-zvtGaScm.js";import"./DropdownField-BWnA-PDI.js";import"./isEqual-BJFmr-bs.js";import"./withOsdkMetrics-BsCiBcgq.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
