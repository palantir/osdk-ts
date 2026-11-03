import{j as r}from"./iframe--rHM778H.js";import{O as b}from"./object-table-DEvcxJSc.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DXMpL-nk.js";import{u as g}from"./useOsdkClient-CuCdO7SN.js";import"./preload-helper-DpVBsV2L.js";import"./Table-BbpbHFt5.js";import"./index-BElFIwyB.js";import"./Dialog-7ZP0B0yF.js";import"./cross-CHXgNJax.js";import"./svgIconContainer-CjX9_w9R.js";import"./useBaseUiId-BT7Lgjzv.js";import"./InternalBackdrop-DHyESATu.js";import"./composite-CaRBo0mp.js";import"./index-B1NiRkYf.js";import"./index-D6fdAiU5.js";import"./index-CtcclfAS.js";import"./useEventCallback-CtvvOJjW.js";import"./SkeletonBar-CS_pei9f.js";import"./LoadingCell-D_OgPP-l.js";import"./ColumnConfigDialog-DR2lvB79.js";import"./DraggableList-Ck4YH1Wg.js";import"./search-ZsY-Nyc_.js";import"./Input-DqZJVW1Y.js";import"./useControlled-BERkl8jy.js";import"./Button-BOD28ASd.js";import"./small-cross-C70aYTmZ.js";import"./ActionButton-DK8p2X8j.js";import"./Checkbox-D5krlzgT.js";import"./useValueChanged-DvGNLe7a.js";import"./CollapsiblePanel-BPc-B49G.js";import"./MultiColumnSortDialog-odHCG5KR.js";import"./MenuTrigger-DyAGSfdx.js";import"./CompositeItem-5osJRFVq.js";import"./ToolbarRootContext-DNOQmnhU.js";import"./getDisabledMountTransitionStyles-DLn2tUEn.js";import"./getPseudoElementBounds-e0hNXxT9.js";import"./chevron-down-BlvURY3l.js";import"./index-CmizMsna.js";import"./error-CPHhJfnm.js";import"./BaseCbacBanner-B7-jqhl-.js";import"./makeExternalStore-CUNRgSrC.js";import"./Tooltip-DkjIu7bG.js";import"./PopoverPopup-DL06cZLQ.js";import"./debounce-CUpiJ6Vz.js";import"./tick-Bcv5PjwQ.js";import"./DropdownField-2stvnYri.js";import"./isEqual-BRXdJPDE.js";import"./withOsdkMetrics-DWwTgGIe.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
