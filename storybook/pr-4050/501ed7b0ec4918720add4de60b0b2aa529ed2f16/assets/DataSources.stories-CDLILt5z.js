import{j as r}from"./iframe-BxIl83OC.js";import{O as b}from"./object-table-BbVWt563.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DURTeVvb.js";import{u as g}from"./useOsdkClient-BRW1S7a0.js";import"./preload-helper-Yx9ZNNpK.js";import"./Table-CFinUWIP.js";import"./index-yC7dwiLI.js";import"./Dialog-CXcS0V2L.js";import"./cross-CxqX2dHR.js";import"./svgIconContainer-Bt0ZQcKE.js";import"./useBaseUiId-CCOPhUcB.js";import"./InternalBackdrop-9uzl1t8Y.js";import"./composite-DAGYlNi4.js";import"./index-DcRZYv45.js";import"./index-DjiV5TS-.js";import"./index-CC4v1PS_.js";import"./useEventCallback-GFfQEmO_.js";import"./SkeletonBar-DIDfuITi.js";import"./LoadingCell-DbPEkZCE.js";import"./ColumnConfigDialog-CfnlmAZt.js";import"./DraggableList-Bc0SI4Ix.js";import"./search-C6ABKevT.js";import"./Input-But5XUYJ.js";import"./useControlled-CtfWN5zI.js";import"./Button-D5WuY3ON.js";import"./small-cross-DmNl_RSt.js";import"./ActionButton-B8qquhgr.js";import"./Checkbox-CQcqkHRd.js";import"./useValueChanged-hHmzS9UN.js";import"./CollapsiblePanel-BjqCs_Mr.js";import"./MultiColumnSortDialog-CnooqPBj.js";import"./MenuTrigger-C0OPx60H.js";import"./CompositeItem-DIHWAmd-.js";import"./ToolbarRootContext-Cmwitb-c.js";import"./getDisabledMountTransitionStyles-DeadGkYN.js";import"./getPseudoElementBounds-uzaRHZTC.js";import"./chevron-down-DZwG3tYI.js";import"./index-CcNahi7P.js";import"./error-DJcTH0_A.js";import"./BaseCbacBanner-BwH-l-5b.js";import"./makeExternalStore-CLRP1iif.js";import"./Tooltip-D33yWPSy.js";import"./PopoverPopup-CvTyV5ww.js";import"./debounce-OJ34BW8L.js";import"./tick-gdF-iftD.js";import"./DropdownField-DoBYEUHa.js";import"./isEqual-DGwBlc4_.js";import"./withOsdkMetrics-BzRb66se.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
