import{j as r}from"./iframe-vYbyM6ZV.js";import{O as b}from"./object-table-CTxoAf9I.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-k8830loC.js";import{u as g}from"./useOsdkClient-B3gw6ZH8.js";import"./preload-helper-tlI1dOrD.js";import"./Table-9WAhGT43.js";import"./index-MNGJ9mHV.js";import"./Dialog-44SJ57MG.js";import"./cross-BEbCovKj.js";import"./svgIconContainer-DfARiMaj.js";import"./useBaseUiId-ByptStcX.js";import"./InternalBackdrop-DSD4DMxI.js";import"./composite-DaPRapKm.js";import"./index-D1tTu4S3.js";import"./index-CFPLyZ8s.js";import"./index-BnFHYNSY.js";import"./useEventCallback-BR6mcw5k.js";import"./SkeletonBar-BL8RDJ3t.js";import"./LoadingCell-BUvusmRL.js";import"./ColumnConfigDialog-CnrWIBhI.js";import"./DraggableList-CX-rHDv_.js";import"./search-Ci6nyrFb.js";import"./Input-B1kKyDDu.js";import"./useControlled-D5IPizVc.js";import"./Button-CkPI_2po.js";import"./small-cross-DI81dXVA.js";import"./ActionButton-DcwkvYtY.js";import"./Checkbox-BD1dSUeS.js";import"./useValueChanged-DKWqaoyN.js";import"./CollapsiblePanel-CocTkMtk.js";import"./MultiColumnSortDialog-B5nLuSPi.js";import"./MenuTrigger-B08jdsY5.js";import"./CompositeItem-D-60Q45b.js";import"./ToolbarRootContext-0aJ-Z7Lw.js";import"./getDisabledMountTransitionStyles-C65N2SkC.js";import"./getPseudoElementBounds-9yb0vIH6.js";import"./chevron-down-CCDvggT2.js";import"./index-BdDLYcYB.js";import"./error-bzzwZ2XW.js";import"./BaseCbacBanner-BXag0evl.js";import"./makeExternalStore-CEiL8mSF.js";import"./Tooltip-D32D5mnM.js";import"./PopoverPopup-SuAtAnXX.js";import"./debounce-ZlEARpZP.js";import"./tick-BpFV42eT.js";import"./DropdownField-CEiBQEPL.js";import"./isEqual-6L5CvVx3.js";import"./withOsdkMetrics-BX5YNskQ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
