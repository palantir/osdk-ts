import{j as r}from"./iframe-Dyt1i0jF.js";import{O as b}from"./object-table-CMFe2Nx8.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BVqExCfx.js";import{u as g}from"./useOsdkClient-DXGvEoLq.js";import"./preload-helper-CkXDm4BP.js";import"./Table-CMAD4Xlh.js";import"./index-DcAXBN3b.js";import"./Dialog-DcLnNXCl.js";import"./cross-S19HD2HE.js";import"./svgIconContainer-D-uDx2T6.js";import"./useBaseUiId-BY0MTYtv.js";import"./InternalBackdrop-Ct7y4f2I.js";import"./composite-BdidWOpb.js";import"./index-mVEsOtEX.js";import"./index-evf_4PQ0.js";import"./index-Clj96-VE.js";import"./useEventCallback-CaEhcjVd.js";import"./SkeletonBar-BaRQ4Qp6.js";import"./LoadingCell-BPNTvkVf.js";import"./ColumnConfigDialog-B47WoFq_.js";import"./DraggableList-Dz1QUu7w.js";import"./search-DVzPLhja.js";import"./Input-Z3F9W9iQ.js";import"./useControlled-DJki7VzO.js";import"./Button-BLyqJRhh.js";import"./small-cross-ChtsozyS.js";import"./ActionButton-0ZkWgmX4.js";import"./Checkbox-BwMT8DRf.js";import"./useValueChanged-JNg-bLTU.js";import"./CollapsiblePanel-Dt3zs3tt.js";import"./MultiColumnSortDialog-Yryx9cTC.js";import"./MenuTrigger-m2_9Nqzx.js";import"./CompositeItem-DJhVVbgA.js";import"./ToolbarRootContext-D-RVnupo.js";import"./getDisabledMountTransitionStyles-tYUqX_NC.js";import"./getPseudoElementBounds-JD4x0OwV.js";import"./chevron-down-w0huiaYQ.js";import"./index-C7QokEBW.js";import"./error-Op_HT_Tg.js";import"./BaseCbacBanner-C4qAY-7h.js";import"./makeExternalStore-tWIcELzA.js";import"./Tooltip-DWHz58xu.js";import"./PopoverPopup-B14CFIKt.js";import"./debounce-0m9xnR-i.js";import"./tick-jplCSaf2.js";import"./DropdownField-CyPoXxmJ.js";import"./isEqual-CY77IH_d.js";import"./withOsdkMetrics-5wv9ordD.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
