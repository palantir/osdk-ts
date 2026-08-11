import{j as r}from"./iframe-BQQenncx.js";import{O as b}from"./object-table-DfbCwTiy.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DcTLePyS.js";import{u as g}from"./useOsdkClient-0MgZdaOJ.js";import"./preload-helper-DE2zdEQ0.js";import"./Table-Cmaah35x.js";import"./index-AEra5GjR.js";import"./Dialog-CiV-H6wX.js";import"./cross-CU5c5uos.js";import"./svgIconContainer-DKhBOnYU.js";import"./useBaseUiId-BgSJ0JuX.js";import"./InternalBackdrop-DUQAObxa.js";import"./composite-CU8fvfsg.js";import"./index-BVUmKt0T.js";import"./index-ly2aBA7A.js";import"./index-hWkQAxDW.js";import"./useEventCallback-B8NeoGCO.js";import"./SkeletonBar-BrFOAxeA.js";import"./LoadingCell-W9xuj7VH.js";import"./ColumnConfigDialog-DqnpXYNI.js";import"./DraggableList-Bc8uF3OC.js";import"./search-CgjP2Jwy.js";import"./Input-70viAAti.js";import"./useControlled-C13sOQuV.js";import"./isEqual-sa52SWWU.js";import"./isObject-Ds2zxCKN.js";import"./Button-hetyNd0y.js";import"./ActionButton-D6ggDCLc.js";import"./Checkbox-NVtkWJ8H.js";import"./useValueChanged-FwEMaXBy.js";import"./CollapsiblePanel-Db4XoTeG.js";import"./MultiColumnSortDialog-C3m8vwg6.js";import"./MenuTrigger-BeG6leMZ.js";import"./CompositeItem-vvPbfk0M.js";import"./ToolbarRootContext-Bu_SuW92.js";import"./getDisabledMountTransitionStyles-eVYX_BMX.js";import"./getPseudoElementBounds-BjNpuUcd.js";import"./chevron-down-Bog31CQQ.js";import"./index-CGPUvFpI.js";import"./error-DmbVq6Jg.js";import"./BaseCbacBanner-D89jOczY.js";import"./makeExternalStore-CkGykhKx.js";import"./Tooltip-0nOBWHFn.js";import"./PopoverPopup-Ht7DQmdg.js";import"./toNumber-B4TNDdae.js";import"./tick-zu9zWfhb.js";import"./DropdownField-MuED612X.js";import"./withOsdkMetrics-At11PAU6.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
