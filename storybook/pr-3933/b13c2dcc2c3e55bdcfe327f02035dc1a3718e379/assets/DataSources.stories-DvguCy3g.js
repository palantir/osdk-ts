import{j as r}from"./iframe-DJmldxve.js";import{O as b}from"./object-table-Cdj1OBo_.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-kVRxwvh0.js";import{u as g}from"./useOsdkClient-UObDw9yg.js";import"./preload-helper-CfPw7BaZ.js";import"./Table-DLbCkB-8.js";import"./index-DD-0dH-p.js";import"./Dialog-d2jWPSNx.js";import"./cross-DmQC9xrL.js";import"./svgIconContainer-P7eEWIUa.js";import"./useBaseUiId-B4pZBY6q.js";import"./InternalBackdrop-CBiQ-iZm.js";import"./composite-CSkjak5h.js";import"./index-lnBxI4J8.js";import"./index-BGy7kKJa.js";import"./index-DHzhHmTz.js";import"./useEventCallback-CBIwa4BF.js";import"./SkeletonBar-B9qAZ7dG.js";import"./LoadingCell-CXGAa_W2.js";import"./ColumnConfigDialog-nF8osFOq.js";import"./DraggableList-BDi3Xc8h.js";import"./search-BDoaiW25.js";import"./Input-DVHmkR4v.js";import"./useControlled-CkquFaFo.js";import"./Button-DseRSSUk.js";import"./small-cross-DLY7Hev3.js";import"./ActionButton-BpeAPNCc.js";import"./Checkbox-DsAo_Msx.js";import"./useValueChanged-D4YcGJ5P.js";import"./CollapsiblePanel-Bi0MtyT6.js";import"./MultiColumnSortDialog-BC3vwMSc.js";import"./MenuTrigger-BIZPL6dI.js";import"./CompositeItem-DHs6pqwB.js";import"./ToolbarRootContext-QKXaQ_-N.js";import"./getDisabledMountTransitionStyles-Dp3LgcOf.js";import"./getPseudoElementBounds-CZjHe1bQ.js";import"./chevron-down-FLohmcIo.js";import"./index-CNroXRNE.js";import"./error-7UB6xqMv.js";import"./BaseCbacBanner-BiJ6rg8v.js";import"./makeExternalStore-D_byBCsj.js";import"./Tooltip-BnjrHWIU.js";import"./PopoverPopup-BUpDQbiA.js";import"./debounce-B2j6j5iZ.js";import"./tick-CGvAH9hc.js";import"./DropdownField-CfZbuNVk.js";import"./isEqual-CCtCZxsR.js";import"./withOsdkMetrics-ChD8F_9J.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
