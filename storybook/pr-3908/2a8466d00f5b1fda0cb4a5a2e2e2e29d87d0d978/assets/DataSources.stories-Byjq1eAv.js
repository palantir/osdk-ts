import{j as r}from"./iframe-B-80Mkm7.js";import{O as b}from"./object-table-BxqG_MJT.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DXFj6uan.js";import{u as g}from"./useOsdkClient-CqkTlt94.js";import"./preload-helper-CqWsSCnZ.js";import"./Table-C7bKg006.js";import"./index-AUifcsh0.js";import"./Dialog-BBuyV7h3.js";import"./cross-BVjH4vnv.js";import"./svgIconContainer-CCfq-fpw.js";import"./useBaseUiId-7EkOsbTl.js";import"./InternalBackdrop-Df9XtON3.js";import"./composite-BvjfwejW.js";import"./index-C1oNvpYj.js";import"./index-CdT_AVM0.js";import"./index-C18AT3O2.js";import"./useEventCallback-xTkopZf4.js";import"./SkeletonBar-BJMxpIod.js";import"./LoadingCell-BlgeOYUC.js";import"./ColumnConfigDialog-CyWZJtKj.js";import"./DraggableList-jsQL9QIH.js";import"./search-B3LLLRfT.js";import"./Input-DSreAQ9Z.js";import"./useControlled-BL4sDI8Q.js";import"./Button-BhiWz6E2.js";import"./small-cross-KsVnY-WY.js";import"./ActionButton-BLc6kuh0.js";import"./Checkbox-C2_wKFYL.js";import"./useValueChanged-iPInYZDI.js";import"./CollapsiblePanel-JpYsP8Zr.js";import"./MultiColumnSortDialog-Ddk-61Te.js";import"./MenuTrigger-BpyV9DBK.js";import"./CompositeItem-tArM5MUt.js";import"./ToolbarRootContext-C019PK9Y.js";import"./getDisabledMountTransitionStyles-7E1Dxexi.js";import"./getPseudoElementBounds-BJiS3phJ.js";import"./chevron-down-D6ZF1kx7.js";import"./index-Bh1jiVMQ.js";import"./error-D-y1nCx5.js";import"./BaseCbacBanner-iJcQHW_Y.js";import"./makeExternalStore-BgRq75tG.js";import"./Tooltip-j-8eocE7.js";import"./PopoverPopup-rPbNRW11.js";import"./debounce-BzHKeVby.js";import"./tick-BEF_RXe7.js";import"./DropdownField-BkuadXbK.js";import"./isEqual-tN7XJasU.js";import"./withOsdkMetrics-B8oz1zlb.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
