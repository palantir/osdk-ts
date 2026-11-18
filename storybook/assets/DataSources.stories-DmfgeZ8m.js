import{j as r}from"./iframe-C55ekymu.js";import{O as b}from"./object-table-8z9WGtp_.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C9T5YsGY.js";import{u as g}from"./useOsdkClient-DEp8Hr9R.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Csz_i8aJ.js";import"./index-CFbWm03i.js";import"./Dialog-BAwbXm28.js";import"./cross-DQROmGzH.js";import"./svgIconContainer-ChZ06sjp.js";import"./useBaseUiId-CJcpNbe-.js";import"./InternalBackdrop-CvYabiN9.js";import"./composite-DjC5qkIo.js";import"./index-BjL1lDKB.js";import"./index-Ssbdtt4R.js";import"./index-BitSGxZh.js";import"./useEventCallback-BdHTuoti.js";import"./SkeletonBar-DuohuUr1.js";import"./LoadingCell-nuZT7jJJ.js";import"./ColumnConfigDialog-Yl8zzCb6.js";import"./DraggableList-D0sjc9QB.js";import"./search-BNvEUbcp.js";import"./Input-BKj5HQxK.js";import"./useControlled-JP2tPCzU.js";import"./Button-BAZDZzeS.js";import"./small-cross-DWLcJPqC.js";import"./ActionButton-QrsuQ0Bk.js";import"./Checkbox-YfrV0shm.js";import"./useValueChanged-0_kAOcmx.js";import"./CollapsiblePanel-DNdVrnTZ.js";import"./MultiColumnSortDialog-DBLvpumO.js";import"./MenuTrigger-EdCmMVpT.js";import"./CompositeItem-BaLE10Vy.js";import"./ToolbarRootContext-CxArS7CZ.js";import"./getDisabledMountTransitionStyles-C68-Nvha.js";import"./getPseudoElementBounds-AyWvnJuI.js";import"./chevron-down-BZm8imPT.js";import"./index-Bk4PBoT1.js";import"./error-BZW5WceS.js";import"./BaseCbacBanner-B9NSFQxY.js";import"./makeExternalStore-DAmiU-nQ.js";import"./Tooltip-Pfbyi0H-.js";import"./PopoverPopup-gzdhXoIP.js";import"./Select-CLPFfhpu.js";import"./tick-C5xW6PnQ.js";import"./DropdownField-Awb0oUum.js";import"./useDebouncedCallback-CJiCXQHj.js";import"./isEqual-D4BqxSVn.js";import"./_baseIsEqual-CaMr3HsT.js";import"./stableSerialize-D80f1Skw.js";import"./withOsdkMetrics-CaT2GfU0.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,ge={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const ue=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,ue as __namedExportsOrder,ge as default};
