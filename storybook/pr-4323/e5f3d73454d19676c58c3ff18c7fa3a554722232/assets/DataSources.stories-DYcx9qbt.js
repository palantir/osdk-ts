import{j as r}from"./iframe-DqApX63y.js";import{O as b}from"./object-table-k6yie7EH.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-X8PV0ycm.js";import{u as g}from"./useOsdkClient-C4IDXCsH.js";import"./preload-helper-Bec-Ia2T.js";import"./Table-mx-XmHdE.js";import"./index-CyvkUScE.js";import"./Dialog-tPn2JCm2.js";import"./cross-C5bmvSOT.js";import"./svgIconContainer-6cRzMh8j.js";import"./useBaseUiId-BKFVtTe-.js";import"./InternalBackdrop-Cd1LmBcA.js";import"./composite-CRmy7_bC.js";import"./index-BOcOla9y.js";import"./index-DRbiLs21.js";import"./index-BGUtfM2L.js";import"./useEventCallback-C_EHeE0y.js";import"./SkeletonBar-2kheKNw1.js";import"./LoadingCell-ZDlToWio.js";import"./ColumnConfigDialog-CbxnvofP.js";import"./DraggableList-Bs6SyKf_.js";import"./search-DWIX6Qtd.js";import"./Input-DEWSCfWZ.js";import"./useControlled-dziTOMb-.js";import"./Button-ChF1ZUI_.js";import"./small-cross-BEgcJVSc.js";import"./ActionButton-BzlJmtNl.js";import"./Checkbox-NWXpl7_I.js";import"./useValueChanged-wUg0BzA8.js";import"./CollapsiblePanel-C9_n_dCM.js";import"./MultiColumnSortDialog-CVqVBYa3.js";import"./MenuTrigger-BK05k8J1.js";import"./CompositeItem-D1qVgSi4.js";import"./ToolbarRootContext-Dv213T19.js";import"./getDisabledMountTransitionStyles-CD9PvG5g.js";import"./getPseudoElementBounds-DusJxNbj.js";import"./chevron-down-DvNVUZis.js";import"./index-Drho1d5n.js";import"./error-D4Jl5yqC.js";import"./BaseCbacBanner-DPtOi32v.js";import"./makeExternalStore-71T0xGUT.js";import"./Tooltip-DQ7QRGY9.js";import"./isObject-nTfM7xAK.js";import"./debounce-B7mULt91.js";import"./tick-cBZZmDLW.js";import"./DropdownField-lulEEiGG.js";import"./isEqual-_JgNSLLj.js";import"./_baseIsEqual-CIcCZrpL.js";import"./withOsdkMetrics-K4E-rs8a.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
