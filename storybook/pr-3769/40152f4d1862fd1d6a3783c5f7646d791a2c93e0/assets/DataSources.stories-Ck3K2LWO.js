import{j as r}from"./iframe-C1PJ2Ip3.js";import{O as b}from"./object-table-DrEfBfWz.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-3MHnkG5c.js";import{u as g}from"./useOsdkClient-BMcHutRF.js";import"./preload-helper-K62Nqc8W.js";import"./Table-bDGEE5Ye.js";import"./index-Bl_td8xL.js";import"./Dialog-D2A7rpXk.js";import"./cross-BL08wg1G.js";import"./svgIconContainer-CS1Om_Hp.js";import"./useBaseUiId-DyrsDa4O.js";import"./InternalBackdrop-18_u3Bxf.js";import"./composite-SuHb1-n8.js";import"./index-CQ1-7fux.js";import"./index-BwWp-Y48.js";import"./index-DbG8xmuF.js";import"./useEventCallback-CA44GkQU.js";import"./SkeletonBar-XjfXRsEZ.js";import"./LoadingCell-CraGbydn.js";import"./ColumnConfigDialog-wDx_lzxG.js";import"./DraggableList-Bm_-reKI.js";import"./search-664FgG4e.js";import"./Input-C990PYdc.js";import"./useControlled-DAF9cP4u.js";import"./Button-D_-j7_TT.js";import"./small-cross-BzOk2_U5.js";import"./ActionButton-CBvWgBp4.js";import"./Checkbox-B0HEuMZr.js";import"./useValueChanged-KUt7bhos.js";import"./CollapsiblePanel-DvU2YKX7.js";import"./MultiColumnSortDialog-BRtSFgNV.js";import"./MenuTrigger-PenfRPuT.js";import"./CompositeItem-Y5w5FHLX.js";import"./ToolbarRootContext-DK1JTwfB.js";import"./getDisabledMountTransitionStyles-CIuJRipc.js";import"./getPseudoElementBounds-UxfqvlrI.js";import"./chevron-down-DsYD0DIc.js";import"./index-DD9JVuxo.js";import"./error-4m8JSMdV.js";import"./BaseCbacBanner-Cu_HhiTv.js";import"./makeExternalStore-CZuSCPax.js";import"./Tooltip-a9XQHJAr.js";import"./PopoverPopup-BV20P4zG.js";import"./debounce-CzwkNGld.js";import"./tick-CZuw3C8k.js";import"./DropdownField-DbjsbhxR.js";import"./isEqual-BESLgLUF.js";import"./withOsdkMetrics-CdeGhgQc.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
