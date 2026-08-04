import{j as r}from"./iframe-Bu7Ix1IE.js";import{O as b}from"./object-table-C2v13Dut.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DbLnLWOB.js";import{u as g}from"./useOsdkClient-wINRGPqb.js";import"./preload-helper-C_vXKrgq.js";import"./Table-CcR4BHeD.js";import"./index-CmoSOYw8.js";import"./Dialog-Dy0YakXX.js";import"./cross-DiEWLOow.js";import"./svgIconContainer-DDLtCJpL.js";import"./useBaseUiId-tZcBrbc_.js";import"./InternalBackdrop-D5mqE5uP.js";import"./composite-BYJH93ZN.js";import"./index-BsZCU_gd.js";import"./index-CnmTy_hK.js";import"./index-DQe5Ojpb.js";import"./useEventCallback-D_HhPe5k.js";import"./SkeletonBar-Bzadz-8K.js";import"./LoadingCell-B4MuRYNG.js";import"./ColumnConfigDialog-Ce7H_S2D.js";import"./DraggableList-wBDL6lMx.js";import"./search-DhFNg-wi.js";import"./Input-DLkChbeP.js";import"./useControlled-CGmTThd6.js";import"./isEqual-B0gVi_sG.js";import"./isObject-7o2nEXaI.js";import"./Button-B5h8R3TJ.js";import"./ActionButton-C8nAJG1U.js";import"./Checkbox-D_38qnSN.js";import"./useValueChanged-CNPgNlg_.js";import"./CollapsiblePanel-Bx_iS3iX.js";import"./MultiColumnSortDialog-B1SSBGHa.js";import"./MenuTrigger-BrJ6GrvV.js";import"./CompositeItem-DcF65dQq.js";import"./ToolbarRootContext-DN0znCaz.js";import"./getDisabledMountTransitionStyles-COhOTcSm.js";import"./getPseudoElementBounds-Bc5cMMf-.js";import"./chevron-down-RSnAhjTK.js";import"./index-Bw1Omk53.js";import"./error-Di4qsqoF.js";import"./BaseCbacBanner-DwgH9AvM.js";import"./makeExternalStore-sh41R9y9.js";import"./Tooltip-BqT0KNO0.js";import"./PopoverPopup-DOjZfFhK.js";import"./toNumber-Cjvgkh0x.js";import"./tick-C7sDGere.js";import"./DropdownField-BryjSbxh.js";import"./withOsdkMetrics-BhBd8sSO.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
