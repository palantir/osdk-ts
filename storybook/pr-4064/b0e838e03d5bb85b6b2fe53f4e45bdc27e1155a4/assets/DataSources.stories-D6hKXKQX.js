import{j as r}from"./iframe-VFEBMkmT.js";import{O as b}from"./object-table-C4rKgLpd.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DqAawnxW.js";import{u as g}from"./useOsdkClient-Ei_DMZLP.js";import"./preload-helper-07eHVQFi.js";import"./Table-5csSRIYj.js";import"./index-BNFDG_ll.js";import"./Dialog-BRCNAtd6.js";import"./cross-klKqW7pD.js";import"./svgIconContainer-CrmB8eAh.js";import"./useBaseUiId-vs4tfZGS.js";import"./InternalBackdrop-DhQAR8x3.js";import"./composite-DW9K0ypD.js";import"./index-C-ds3Per.js";import"./index-CHgbm3vu.js";import"./index-Cd122yTi.js";import"./useEventCallback-C41z4BOu.js";import"./SkeletonBar-C37LxB-t.js";import"./LoadingCell-BewF79XS.js";import"./ColumnConfigDialog-RBjKgz_k.js";import"./DraggableList-CU-FQY9q.js";import"./search-VMyVN87B.js";import"./Input-CRGuLcp8.js";import"./useControlled-C_z4AA7y.js";import"./Button-CSWptMiw.js";import"./small-cross-CDtSPCYR.js";import"./ActionButton-BWwL0ZTE.js";import"./Checkbox-CDDYNciR.js";import"./useValueChanged-BqBGjayP.js";import"./CollapsiblePanel-BIXleHAm.js";import"./MultiColumnSortDialog-DbqHEvtj.js";import"./MenuTrigger-CIXtaybW.js";import"./CompositeItem-CC1BkCel.js";import"./ToolbarRootContext-7k7RnlYE.js";import"./getDisabledMountTransitionStyles-CABZJUx0.js";import"./getPseudoElementBounds-DyGmu2aD.js";import"./chevron-down-DVKmbjNv.js";import"./index-npggFz05.js";import"./error-BAVEcOGP.js";import"./BaseCbacBanner-DXXff8Kf.js";import"./makeExternalStore-C0Q3dAYA.js";import"./Tooltip-CkehKfR2.js";import"./PopoverPopup-V-gR9AA8.js";import"./debounce-DG8oBSlI.js";import"./tick-DWG5Mpvy.js";import"./DropdownField-DKVPGok9.js";import"./isEqual-CdM50Zo3.js";import"./withOsdkMetrics-BVlvQats.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
