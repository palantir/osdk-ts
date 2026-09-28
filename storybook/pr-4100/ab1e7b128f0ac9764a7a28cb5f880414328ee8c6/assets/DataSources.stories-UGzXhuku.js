import{j as r}from"./iframe-vWRqqmX-.js";import{O as b}from"./object-table-804WIQTK.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BlSLDN5C.js";import{u as g}from"./useOsdkClient-B6lrTeDC.js";import"./preload-helper-rcEVmD-8.js";import"./Table-BIMKxZRx.js";import"./index-CHsUa7_U.js";import"./Dialog-DWTZ77Co.js";import"./cross-BIItHWLB.js";import"./svgIconContainer-B_rEL3k8.js";import"./useBaseUiId-DqVebmsP.js";import"./InternalBackdrop-Bj_asFWJ.js";import"./composite-D97u5UoY.js";import"./index-CoSoVngB.js";import"./index-B1eqFRL5.js";import"./index-sVUrmcsW.js";import"./useEventCallback-DMVnoZ3z.js";import"./SkeletonBar-CqBoYZ8U.js";import"./LoadingCell-qD_P_fRR.js";import"./ColumnConfigDialog-yWt_y5TP.js";import"./DraggableList-ZdW5g8dr.js";import"./search-C9O70xSJ.js";import"./Input-CDZCyUSS.js";import"./useControlled-C4H7EWzs.js";import"./Button-C6bK3SUF.js";import"./small-cross-DgmUASg5.js";import"./ActionButton-BPD_E_Z-.js";import"./Checkbox-Bk6kGgLm.js";import"./useValueChanged-aefsk5NO.js";import"./CollapsiblePanel-2hkcDRMt.js";import"./MultiColumnSortDialog-B5Vn8yrA.js";import"./MenuTrigger-C65re9Vs.js";import"./CompositeItem-C9y1P_Q2.js";import"./ToolbarRootContext-DpnDbVh3.js";import"./getDisabledMountTransitionStyles-C2Knmcgg.js";import"./getPseudoElementBounds-B9pvaRUu.js";import"./chevron-down-CgEqRVri.js";import"./index-DzR_Swb2.js";import"./error-C1w4OL1G.js";import"./BaseCbacBanner-C-Vru3Z4.js";import"./makeExternalStore-D3utWwkK.js";import"./Tooltip-BADmUJIy.js";import"./PopoverPopup-D7-JPOKG.js";import"./debounce-UXxVW676.js";import"./tick-BtAbSo2V.js";import"./DropdownField-DfFvOzAq.js";import"./isEqual-DxBRoLuF.js";import"./withOsdkMetrics-CfKbJ4sV.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
