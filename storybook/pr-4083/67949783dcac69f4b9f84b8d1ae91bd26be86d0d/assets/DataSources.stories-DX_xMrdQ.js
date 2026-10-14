import{j as r}from"./iframe-CmWe6Tkd.js";import{O as b}from"./object-table-BDW2e7eZ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DRJNGg08.js";import{u as g}from"./useOsdkClient-CitkFKLb.js";import"./preload-helper-CZkXumnj.js";import"./Table-Bf77Bvdy.js";import"./index-B0FfbiTF.js";import"./Dialog-Baty4Szl.js";import"./cross-DOjQafmq.js";import"./svgIconContainer-DT9zh-Vk.js";import"./useBaseUiId-Bs3xq9h4.js";import"./InternalBackdrop-Bgkh1XM7.js";import"./composite-BpFW5Zxj.js";import"./index-CsFAVmPm.js";import"./index-BoUQWx-c.js";import"./index-Czd4gxpW.js";import"./useEventCallback-zOr5ERUR.js";import"./SkeletonBar-BgpMicw2.js";import"./LoadingCell-BfizB9li.js";import"./ColumnConfigDialog-BvKtMJ72.js";import"./DraggableList-CG6HloQL.js";import"./search-BJsFf8Sf.js";import"./Input-CO62StGf.js";import"./useControlled-CuXXFPaU.js";import"./Button-DwrepdjR.js";import"./small-cross-Dx1H7YZV.js";import"./ActionButton-CvgVXH59.js";import"./Checkbox-BSGDor4r.js";import"./useValueChanged-D7qGEQa7.js";import"./CollapsiblePanel-CHhRUS9J.js";import"./MultiColumnSortDialog-BiWo3PKA.js";import"./MenuTrigger-CaGVAVpU.js";import"./CompositeItem-X2tnD8zQ.js";import"./ToolbarRootContext-DXrMWEKA.js";import"./getDisabledMountTransitionStyles-BRrVpNFj.js";import"./getPseudoElementBounds-CHGjGQ44.js";import"./chevron-down-B1zAncDT.js";import"./index-Ck62PufT.js";import"./error-C_AVzlpM.js";import"./BaseCbacBanner-8XqlSMPo.js";import"./makeExternalStore-CSTPATui.js";import"./Tooltip-CvPILd44.js";import"./PopoverPopup-2IEXcKZV.js";import"./debounce-CgnLqzzw.js";import"./tick-BW8FxYJj.js";import"./DropdownField-BNVRIq1Y.js";import"./isEqual-Mehm483B.js";import"./withOsdkMetrics-CiiIaaP6.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
