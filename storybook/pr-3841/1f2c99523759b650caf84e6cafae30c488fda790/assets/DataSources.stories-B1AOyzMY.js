import{j as r}from"./iframe-BqP11lAl.js";import{O as b}from"./object-table-BSX4imw4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Co7ziwZJ.js";import{u as g}from"./useOsdkClient-BIJtNhWb.js";import"./preload-helper-CC6pDEnd.js";import"./Table-CLZH9aTN.js";import"./index-C64P8eBz.js";import"./Dialog-kfk8DkZ5.js";import"./cross-HwIuLDzz.js";import"./svgIconContainer-oPNNgG6X.js";import"./useBaseUiId-Djy5KSNq.js";import"./InternalBackdrop-CBRTTdO3.js";import"./composite-kMucuKDb.js";import"./index-BB8CgDAM.js";import"./index-CGSFhzHU.js";import"./index-DGkDRhxB.js";import"./useEventCallback-Z2-FvKEF.js";import"./SkeletonBar-DMpt_Xnd.js";import"./LoadingCell-SkI0LHW0.js";import"./ColumnConfigDialog-kq1NxhtA.js";import"./DraggableList-qWvzM3F0.js";import"./search-BJsW39qj.js";import"./Input-B380zOW0.js";import"./useControlled-C68p10XH.js";import"./isEqual-HWPPZe8e.js";import"./isObject-EDcxoV9U.js";import"./Button-CeOJx0M4.js";import"./ActionButton-CSPytVBD.js";import"./Checkbox-Dc98QANj.js";import"./useValueChanged-C3lz4-Lx.js";import"./CollapsiblePanel-Dd-c_wm9.js";import"./MultiColumnSortDialog-C5lYkLdg.js";import"./MenuTrigger-C1W8SDZ-.js";import"./CompositeItem-BmMUGQ2w.js";import"./ToolbarRootContext-ClCfVHHi.js";import"./getDisabledMountTransitionStyles-DPQMYvAe.js";import"./getPseudoElementBounds-DG5NkHrs.js";import"./chevron-down-DCtv2YH3.js";import"./index-Bc_u8_gZ.js";import"./error-BNv6Et6s.js";import"./BaseCbacBanner-Cl9CYcki.js";import"./makeExternalStore-BC_XfyUC.js";import"./Tooltip-B7QrohEN.js";import"./PopoverPopup-Rq34_u9B.js";import"./toNumber-B1Hjpnf0.js";import"./tick-tcNcz_VP.js";import"./DropdownField-z5Tej7ll.js";import"./withOsdkMetrics-CWSxEVx_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
