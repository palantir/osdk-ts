import{j as r}from"./iframe-DvmPM8XM.js";import{O as b}from"./object-table-CkUPVJKK.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DVkea3gV.js";import{u as g}from"./useOsdkClient-DYbXS0Lf.js";import"./preload-helper-CWXBbGOK.js";import"./Table-BLHlsaeM.js";import"./index-Ckyxf5ES.js";import"./Dialog-D0BD0rSH.js";import"./cross-CWK_3iX0.js";import"./svgIconContainer-CKvBglfs.js";import"./useBaseUiId-BK6rm_vX.js";import"./InternalBackdrop-CDbm9lnE.js";import"./composite-BtMZy7bH.js";import"./index-DxRIPJNB.js";import"./index-DFwggDQF.js";import"./index-CiLgD-FQ.js";import"./useEventCallback-BHLH-nqa.js";import"./SkeletonBar-CK3zDoai.js";import"./LoadingCell-qfi7oMtY.js";import"./ColumnConfigDialog-CJjI4U8O.js";import"./DraggableList-DbOnBNdn.js";import"./search-TBI5J1QZ.js";import"./Input-DAJjBhoV.js";import"./useControlled-BlFMc0zn.js";import"./Button-CdgEMVNK.js";import"./small-cross-COHScf5C.js";import"./ActionButton-B0jn8mYL.js";import"./Checkbox-D5VxKTgt.js";import"./useValueChanged-B2Byj99o.js";import"./CollapsiblePanel-Bu8C3hKI.js";import"./MultiColumnSortDialog-Dmb1Dgf0.js";import"./MenuTrigger-CcHInNCV.js";import"./CompositeItem-kRLneeY3.js";import"./ToolbarRootContext-E7hSXQbh.js";import"./getDisabledMountTransitionStyles--bG59vx_.js";import"./getPseudoElementBounds-DIk-7fYl.js";import"./chevron-down-BE3Vkzfj.js";import"./index-DPz56gTU.js";import"./error-C_RDaNST.js";import"./BaseCbacBanner-DioKTDKG.js";import"./makeExternalStore-DPCzTg_N.js";import"./Tooltip-3Oq2VbSf.js";import"./PopoverPopup-BSlx7FSn.js";import"./debounce-B_vGr92p.js";import"./tick-BBkj7T5w.js";import"./DropdownField-siiIARW9.js";import"./isEqual-1s0ixZs9.js";import"./withOsdkMetrics-C3HZbqv9.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
