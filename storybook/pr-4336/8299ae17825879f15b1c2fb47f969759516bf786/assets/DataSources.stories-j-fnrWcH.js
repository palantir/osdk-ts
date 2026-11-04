import{j as r}from"./iframe-Cm6Hi8JW.js";import{O as b}from"./object-table-CpajiRD3.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-SCFcDmc_.js";import{u as g}from"./useOsdkClient-BlYAWhvy.js";import"./preload-helper-BYxBeAAs.js";import"./Table-Ct_a1hW1.js";import"./index-CDpDzJRy.js";import"./Dialog-CdmQQCwI.js";import"./cross-CqZ8qeBD.js";import"./svgIconContainer-agsfS07p.js";import"./useBaseUiId-DhmqNEB-.js";import"./InternalBackdrop-CJZwU14-.js";import"./composite-F8udgwsX.js";import"./index-CESCzhSs.js";import"./index-C-Ww-yGF.js";import"./index-DJKRGaVd.js";import"./useEventCallback-C2xB0U8G.js";import"./SkeletonBar-DlBW95tE.js";import"./LoadingCell-DOkaa0iK.js";import"./ColumnConfigDialog-G4e5dztx.js";import"./DraggableList-BTFqvx5V.js";import"./search-9QnSKEDq.js";import"./Input-YqDpCJ5-.js";import"./useControlled-DQSuLFKk.js";import"./Button-Bc-QcRr6.js";import"./small-cross-B71BinCO.js";import"./ActionButton-CVOWP0Vj.js";import"./Checkbox-CHgUS3Dm.js";import"./useValueChanged-BgnUyWLY.js";import"./CollapsiblePanel-oFEh-cWN.js";import"./MultiColumnSortDialog-CYrgSMGk.js";import"./MenuTrigger-BBOOXY-p.js";import"./CompositeItem-BMwGHp9X.js";import"./ToolbarRootContext-C8WiK4oA.js";import"./getDisabledMountTransitionStyles-DwNKIeA1.js";import"./getPseudoElementBounds-7U3MdNEW.js";import"./chevron-down-yfyql6cd.js";import"./index-DID7t8gF.js";import"./error-Dmy_j7rB.js";import"./BaseCbacBanner-BDEZgR9M.js";import"./makeExternalStore-BMRo_idP.js";import"./Tooltip-YgKwei3V.js";import"./PopoverPopup-Al1KuNNN.js";import"./debounce-D0B2zS6f.js";import"./tick-4BXQbbZv.js";import"./DropdownField-CY7MjU_C.js";import"./isEqual-CCItJCpy.js";import"./withOsdkMetrics-BXiHxUU0.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
