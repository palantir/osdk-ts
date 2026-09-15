import{j as r}from"./iframe-Dw2PjeaI.js";import{O as b}from"./object-table-BoFh6vVh.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DH1oaOdM.js";import{u as g}from"./useOsdkClient-C1y4H3RM.js";import"./preload-helper-BJaT6ZDB.js";import"./Table-CdXn9lIp.js";import"./index-0M7994Y_.js";import"./Dialog-DLQ1SkNP.js";import"./cross-CLda9Fo1.js";import"./svgIconContainer-CeXRiZtW.js";import"./useBaseUiId-0TtGgIAG.js";import"./InternalBackdrop-DJ2aMJ5Y.js";import"./composite-DWecAK_E.js";import"./index-BPb9j9HY.js";import"./index-CGb9o7qe.js";import"./index-COYYs5y4.js";import"./useEventCallback-CctUb2O0.js";import"./SkeletonBar-PF5whjmA.js";import"./LoadingCell-Cu18aVq6.js";import"./ColumnConfigDialog-D_kDucuk.js";import"./DraggableList-BEUABJjc.js";import"./search-ClBN3Er-.js";import"./Input-DbWveyeA.js";import"./useControlled-Cz_GJLGD.js";import"./Button-DVN9BG7e.js";import"./small-cross-DnafLtCp.js";import"./ActionButton-BioyY_id.js";import"./Checkbox-CZdSeNLj.js";import"./useValueChanged-B-pgRub2.js";import"./CollapsiblePanel-CK9cXofW.js";import"./MultiColumnSortDialog-IUz5Mdml.js";import"./MenuTrigger-Bh8vjRh6.js";import"./CompositeItem-CeRclahQ.js";import"./ToolbarRootContext-DgoSljlg.js";import"./getDisabledMountTransitionStyles-Cttf6bUS.js";import"./getPseudoElementBounds-C3FmlhF8.js";import"./chevron-down-C1e4s47j.js";import"./index-B5gfVMUt.js";import"./error-DeMrwFkF.js";import"./BaseCbacBanner-Df5GPEYT.js";import"./makeExternalStore-DXns2UQ6.js";import"./Tooltip-CAM98dk7.js";import"./PopoverPopup-Dg_qhS7v.js";import"./debounce-B2VXBB9P.js";import"./tick-vpRHL3-c.js";import"./DropdownField-pycu6fvL.js";import"./isEqual-CQnWIsqc.js";import"./withOsdkMetrics-C5Psz1d4.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
