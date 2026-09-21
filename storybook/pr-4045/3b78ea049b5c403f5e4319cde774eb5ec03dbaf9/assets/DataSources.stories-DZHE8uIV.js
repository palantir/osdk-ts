import{j as r}from"./iframe-DGxn_FfA.js";import{O as b}from"./object-table-BxRemYk8.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BLAWxkNq.js";import{u as g}from"./useOsdkClient-qyzcppCx.js";import"./preload-helper-K_1Peegk.js";import"./Table-CbxiFHKY.js";import"./index-DRUA9-Xo.js";import"./Dialog-jSwZKnpK.js";import"./cross-BbLFpAfM.js";import"./svgIconContainer-BTT_iTBU.js";import"./useBaseUiId-CmBmMESo.js";import"./InternalBackdrop-GnU91IOM.js";import"./composite-DsQ0vKV8.js";import"./index-Cn-ogudX.js";import"./index-C09U9z-b.js";import"./index-BM9tlzVi.js";import"./useEventCallback-DuO9QBbh.js";import"./SkeletonBar-CDppLlgJ.js";import"./LoadingCell-QjotfTLw.js";import"./ColumnConfigDialog-Bv7VfvsR.js";import"./DraggableList-CpRUxk29.js";import"./search-D7bJBEOM.js";import"./Input-vHhrLUUa.js";import"./useControlled-SGdv5sh_.js";import"./Button-dnprDbN8.js";import"./small-cross-kJ_hIE7y.js";import"./ActionButton-Can6ePob.js";import"./Checkbox-Bn2M37w9.js";import"./useValueChanged-DwzXRX5T.js";import"./CollapsiblePanel-DkNf_69s.js";import"./MultiColumnSortDialog-CtiTwMcM.js";import"./MenuTrigger-B96hJs3R.js";import"./CompositeItem-CqRwnn1g.js";import"./ToolbarRootContext-BvwYmpzB.js";import"./getDisabledMountTransitionStyles-Bg4xxQbV.js";import"./getPseudoElementBounds-C1aLo5q2.js";import"./chevron-down-kbFfOEdC.js";import"./index-BzK3-5ei.js";import"./error-GM-hvFd6.js";import"./BaseCbacBanner-BJef3Sds.js";import"./makeExternalStore-Bpd5p4CZ.js";import"./Tooltip-Jif4AIdv.js";import"./PopoverPopup-D6mETjM4.js";import"./debounce-CkaWxo8p.js";import"./tick-Ddjt3-Xj.js";import"./DropdownField-CN6UkTVW.js";import"./isEqual-DDUfx3V0.js";import"./withOsdkMetrics-S3mu6MhE.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
