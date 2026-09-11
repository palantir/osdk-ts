import{j as r}from"./iframe-B8lzwm22.js";import{O as b}from"./object-table-DShYpsaa.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Vhn0WUrm.js";import{u as g}from"./useOsdkClient-BOXKzBN3.js";import"./preload-helper-DZpogDck.js";import"./Table-GHKreUtP.js";import"./index-V8AdOqgd.js";import"./Dialog-B16dHLiM.js";import"./cross-BjwwvSsI.js";import"./svgIconContainer-CXVvUd5F.js";import"./useBaseUiId-9i5seKgC.js";import"./InternalBackdrop-Dm3w5lyn.js";import"./composite-BgrU9ffv.js";import"./index-B1F9PCAn.js";import"./index-DA6AQTMf.js";import"./index-DKCrzgsd.js";import"./useEventCallback-DeeBfsBF.js";import"./SkeletonBar-Bas3_Wlo.js";import"./LoadingCell-DpSvjykH.js";import"./ColumnConfigDialog-DQQey7lW.js";import"./DraggableList-C5_mqVtU.js";import"./search-CJEfvURK.js";import"./Input-CzpDwduI.js";import"./useControlled-9IIZJlu3.js";import"./Button-DINiSESc.js";import"./small-cross-hDui4OeT.js";import"./ActionButton-CU9gdIlX.js";import"./Checkbox-DJmQzDug.js";import"./useValueChanged-B5KtwkUp.js";import"./CollapsiblePanel-Y638CsIO.js";import"./MultiColumnSortDialog-fcEhEsp0.js";import"./MenuTrigger-DrDkL1AE.js";import"./CompositeItem-DEvZ_JsZ.js";import"./ToolbarRootContext-8Dlenei2.js";import"./getDisabledMountTransitionStyles-CgeJIM6-.js";import"./getPseudoElementBounds-CCplqQNV.js";import"./chevron-down-98nms22W.js";import"./index-CBtK7PVB.js";import"./error-D8O5Gu9w.js";import"./BaseCbacBanner-BSveluQ8.js";import"./makeExternalStore-BIgSRA9g.js";import"./Tooltip-B9fsMvs_.js";import"./PopoverPopup-CAo52PJc.js";import"./debounce-DS0sFmBW.js";import"./tick-CC6mSPPg.js";import"./DropdownField-DzdO8ho7.js";import"./isEqual-CD-pZhR5.js";import"./withOsdkMetrics-BRdTEDjT.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
