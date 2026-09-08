import{j as r}from"./iframe-lO6oHnL4.js";import{O as b}from"./object-table-9DuCQ3cd.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B2RNUspY.js";import{u as g}from"./useOsdkClient-DHPHVa2B.js";import"./preload-helper-CZ1zKWtp.js";import"./Table-DMY1ZxT7.js";import"./index-Dl6F1U12.js";import"./Dialog-BmnLqCjA.js";import"./cross-CmTyvcmm.js";import"./svgIconContainer-BCDfPS-8.js";import"./useBaseUiId-B846_agE.js";import"./InternalBackdrop-CRBsd0Rp.js";import"./composite-BjZ2VOoR.js";import"./index-D1QV3ytK.js";import"./index-DwP6FR90.js";import"./index-BxwWnAcj.js";import"./useEventCallback-KTIDuvyR.js";import"./SkeletonBar-C2FZeoWT.js";import"./LoadingCell-CgqmsXgw.js";import"./ColumnConfigDialog-e8Nvt7tr.js";import"./DraggableList-DGwYVxk8.js";import"./search-BNOG_dw_.js";import"./Input-oxwV_krW.js";import"./useControlled-D27zJnZ2.js";import"./Button-8GX9Y-dN.js";import"./small-cross-BcxRCy93.js";import"./ActionButton-O8N4TA40.js";import"./Checkbox-BKHMpGsH.js";import"./useValueChanged-Cwy5ekip.js";import"./CollapsiblePanel-CYfUcVRr.js";import"./MultiColumnSortDialog-nvRpfudt.js";import"./MenuTrigger-DXR1k6sj.js";import"./CompositeItem-FdcQgDtf.js";import"./ToolbarRootContext-BfcKDhBA.js";import"./getDisabledMountTransitionStyles-Cx8i-UAD.js";import"./getPseudoElementBounds-CicDtyQT.js";import"./chevron-down-0zZDUaq4.js";import"./index-Cx18vdAy.js";import"./error-CA5mje1x.js";import"./BaseCbacBanner-IhJ9we9x.js";import"./makeExternalStore-CjtvZY1y.js";import"./Tooltip-BlvnSvUU.js";import"./PopoverPopup-ci5-n8v2.js";import"./debounce-CgoayCyT.js";import"./tick-xT1qICzH.js";import"./DropdownField-Db4HRbpT.js";import"./isEqual-GLgBae2P.js";import"./withOsdkMetrics-BoEX6J3t.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
