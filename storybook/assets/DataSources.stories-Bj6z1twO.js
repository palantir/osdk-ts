import{j as r}from"./iframe-DasplHZn.js";import{O as b}from"./object-table-yrfpVRIU.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-dnlYaUoU.js";import{u as g}from"./useOsdkClient-CN1EBquJ.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DegUFsiV.js";import"./index-CeKhiTUl.js";import"./Dialog-BgkKTq6E.js";import"./cross-CGwwcGII.js";import"./svgIconContainer-4_eO9YAc.js";import"./useBaseUiId-CFSgFdOV.js";import"./InternalBackdrop-CIHUWHdh.js";import"./composite-BErfcKSH.js";import"./index-BtmJPZwK.js";import"./index-BbWiAGjR.js";import"./index-C-eBgv4u.js";import"./useEventCallback-CWGG1_eM.js";import"./SkeletonBar-CEfYCKcu.js";import"./LoadingCell-sh0Cu-TC.js";import"./ColumnConfigDialog-BZ_uJxFT.js";import"./DraggableList-CIn0X0fW.js";import"./search-DjIePqPD.js";import"./Input-CTs-cY20.js";import"./useControlled-b2VLkkxd.js";import"./Button-CUXeq1Mn.js";import"./small-cross-CV_LKxqx.js";import"./ActionButton-BUjGAXRA.js";import"./Checkbox-D0sSEY7Y.js";import"./useValueChanged-DgCa_hX9.js";import"./CollapsiblePanel-BNcZUxvE.js";import"./MultiColumnSortDialog-DOUImWXj.js";import"./MenuTrigger-CiO6h0bC.js";import"./CompositeItem-zs15jyVw.js";import"./ToolbarRootContext-Dd8U4Uqb.js";import"./getDisabledMountTransitionStyles-CrxqcUcl.js";import"./getPseudoElementBounds-Bp3hKR1m.js";import"./chevron-down-Clwkouj3.js";import"./index-S98LG7pS.js";import"./error-DJObYT-e.js";import"./BaseCbacBanner-DCbhVpsA.js";import"./makeExternalStore-Ce3vwrCY.js";import"./Tooltip-G1YFAziJ.js";import"./PopoverPopup-VT8gRiL_.js";import"./debounce-BpiLVUTF.js";import"./tick-VePuyXuh.js";import"./DropdownField-DU2AXbuh.js";import"./isEqual-T-JX0xwj.js";import"./withOsdkMetrics-DI4FVnTC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
