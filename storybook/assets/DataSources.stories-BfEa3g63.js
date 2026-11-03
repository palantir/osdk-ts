import{j as r}from"./iframe-BZrHCCWD.js";import{O as b}from"./object-table-DpPY2M7V.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-EHaLIbco.js";import{u as g}from"./useOsdkClient-aEZ1eEbo.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-OKpIXbCH.js";import"./index-BbBwfHG7.js";import"./Dialog-D5yCcZki.js";import"./cross-CQg-zCtt.js";import"./svgIconContainer-DvKRTV-T.js";import"./useBaseUiId-BS5c_qfo.js";import"./InternalBackdrop-C26unrC9.js";import"./composite-B06N-5LO.js";import"./index-D_mlxwiI.js";import"./index-BoSlXWJn.js";import"./index-aQp0TPl5.js";import"./useEventCallback-Bz01pljJ.js";import"./SkeletonBar-CbuDz3oc.js";import"./LoadingCell-DOCqVuTS.js";import"./ColumnConfigDialog-DkSiEPBm.js";import"./DraggableList-DsrHiH1T.js";import"./search-PU-jJ5zI.js";import"./Input-3V3vHuAM.js";import"./useControlled-CGFBoHyX.js";import"./Button-JGRhrjvL.js";import"./small-cross-o2gbtp7v.js";import"./ActionButton-C6T7h1rl.js";import"./Checkbox-BGBCPMbG.js";import"./useValueChanged-DanfgwZ-.js";import"./CollapsiblePanel-BrYWz7mk.js";import"./MultiColumnSortDialog-Vt0kB0E9.js";import"./MenuTrigger-8jpSTywc.js";import"./CompositeItem-DdzLCYzu.js";import"./ToolbarRootContext-HdK5b1bg.js";import"./getDisabledMountTransitionStyles-BMID7lxe.js";import"./getPseudoElementBounds-C0AdvYra.js";import"./chevron-down-BCopBMR6.js";import"./index-J3cPUL6v.js";import"./error-D2Jou9ns.js";import"./BaseCbacBanner-BPwWbKhf.js";import"./makeExternalStore-Dg_VN0ud.js";import"./Tooltip-CPptvKhe.js";import"./PopoverPopup-CGVwQ1cR.js";import"./debounce-RV0_NzqU.js";import"./tick-DOuBmutW.js";import"./DropdownField-JLZ1LJgg.js";import"./isEqual-B_gGF4aE.js";import"./withOsdkMetrics-DyjVeD0H.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
