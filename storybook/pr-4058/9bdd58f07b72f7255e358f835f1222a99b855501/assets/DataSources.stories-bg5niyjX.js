import{j as r}from"./iframe-BoQuj6Ft.js";import{O as b}from"./object-table-GNC1D2ug.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DHo-iRg8.js";import{u as g}from"./useOsdkClient-BlIU4lOf.js";import"./preload-helper-DFHoCRfY.js";import"./Table-CDFpwVxP.js";import"./index-B3vkyGje.js";import"./Dialog-DW-h_BPY.js";import"./cross-DIlflA87.js";import"./svgIconContainer-D1Y91RJ2.js";import"./useBaseUiId-DKKiKBjO.js";import"./InternalBackdrop-DgOgxUR-.js";import"./composite-CvoBvof0.js";import"./index-BQDMsvBO.js";import"./index-BUrjWVUX.js";import"./index-DsXJv-A-.js";import"./useEventCallback-DnyNlyEn.js";import"./SkeletonBar-nJu3VKHu.js";import"./LoadingCell-Djs5NpLk.js";import"./ColumnConfigDialog-UHepu_B4.js";import"./DraggableList-Bsl9deDL.js";import"./search-DxfJTzvK.js";import"./Input-BrV6l60a.js";import"./useControlled-DfpvXrbD.js";import"./Button-CVGCG-PX.js";import"./small-cross-PzH5JPQr.js";import"./ActionButton-ZwUOGMpg.js";import"./Checkbox-Caya9tIR.js";import"./useValueChanged-DxKn8kpX.js";import"./CollapsiblePanel-CDq3d3lQ.js";import"./MultiColumnSortDialog-DB1LaGMz.js";import"./MenuTrigger-BheayIBg.js";import"./CompositeItem-DPojjMsZ.js";import"./ToolbarRootContext-Civm9m7-.js";import"./getDisabledMountTransitionStyles-CAOvj7ui.js";import"./getPseudoElementBounds-W6TVi3du.js";import"./chevron-down-DuDBYDyj.js";import"./index-Cye0oCf9.js";import"./error-ovbXz9QM.js";import"./BaseCbacBanner-C7FvseMr.js";import"./makeExternalStore-ILzBw2IP.js";import"./Tooltip-RUFZkZKo.js";import"./PopoverPopup-CtGLWZkC.js";import"./debounce-DKOD7ARd.js";import"./tick-Cdn4730X.js";import"./DropdownField-B9wcQ97-.js";import"./isEqual-B9kgXbB2.js";import"./withOsdkMetrics-Bww6KylD.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
