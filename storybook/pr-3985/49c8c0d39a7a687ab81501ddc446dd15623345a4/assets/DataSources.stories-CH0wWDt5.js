import{j as r}from"./iframe-BjMPQmdZ.js";import{O as b}from"./object-table-52MAir1D.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BFJpFluT.js";import{u as g}from"./useOsdkClient-qEswp40d.js";import"./preload-helper-B8Ak4a51.js";import"./Table-CyWrmmW1.js";import"./index-oZX62iJS.js";import"./Dialog-BjRNm7TP.js";import"./cross-JpXN3sJS.js";import"./svgIconContainer-Dwz9d1MN.js";import"./useBaseUiId-D8cmXz0j.js";import"./InternalBackdrop-8oVqxHi8.js";import"./composite-CSAWSVfE.js";import"./index-D9GWSad1.js";import"./index-DtER7TIS.js";import"./index-NlopW1lK.js";import"./useEventCallback-DPBscyoY.js";import"./SkeletonBar-2PecOG9Y.js";import"./LoadingCell-DzLTK-4l.js";import"./ColumnConfigDialog-CQElBG8e.js";import"./DraggableList-BdgMwfNX.js";import"./search-D6_fqh0V.js";import"./Input-D7HYNJJj.js";import"./useControlled-DmP1tMz2.js";import"./Button-CZzc-gIr.js";import"./small-cross-Bu27Obc4.js";import"./ActionButton-DdGak1A0.js";import"./Checkbox-Bj8NpVU0.js";import"./useValueChanged-BruLlZZe.js";import"./CollapsiblePanel-CO_htu_q.js";import"./MultiColumnSortDialog-I0_RtTxG.js";import"./MenuTrigger-DTmliU1n.js";import"./CompositeItem-ejF_MhIC.js";import"./ToolbarRootContext-BJ3LM2Fu.js";import"./getDisabledMountTransitionStyles-DYlb6B2g.js";import"./getPseudoElementBounds-BEZQ3U0s.js";import"./chevron-down-IIBkH-oY.js";import"./index-4XbIxfFx.js";import"./error-BP2V_PLi.js";import"./BaseCbacBanner-DK26JmqY.js";import"./makeExternalStore-B8EVnW0L.js";import"./Tooltip-DQ9zqIRE.js";import"./PopoverPopup-z3RJyiP2.js";import"./debounce-B--2yBpk.js";import"./tick-CODMTGal.js";import"./DropdownField-DR1RPbxl.js";import"./isEqual-BY0uKEbW.js";import"./withOsdkMetrics-DcvRTKGS.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
