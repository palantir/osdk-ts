import{j as r}from"./iframe-Cp1ziXca.js";import{O as b}from"./object-table-B4OAQ-UM.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BmAste3w.js";import{u as g}from"./useOsdkClient-BehGkUju.js";import"./preload-helper-Ca6LY0_H.js";import"./Table-585gS7_y.js";import"./index-CCsyzFvm.js";import"./Dialog-DwEy_EvY.js";import"./cross-ByCUwATg.js";import"./svgIconContainer-DXlIscgi.js";import"./useBaseUiId-Bt37xHZm.js";import"./InternalBackdrop-21zmjWfP.js";import"./composite-B4QegilG.js";import"./index-DSsYOOxm.js";import"./index-DFQVNtXJ.js";import"./index-BCU2lpd0.js";import"./useEventCallback-CvDmftxl.js";import"./SkeletonBar-CFBwD_lg.js";import"./LoadingCell-Ba8qx18j.js";import"./ColumnConfigDialog-Bn0yFfei.js";import"./DraggableList-Bo6GGCwe.js";import"./search-DKOFfaqB.js";import"./Input-BUxEsfiE.js";import"./useControlled-DfLwj8uM.js";import"./Button-B9LauqrE.js";import"./small-cross-DPfWhWYm.js";import"./ActionButton-B-aL526Q.js";import"./Checkbox-BRBYWefK.js";import"./useValueChanged-CImdLC5I.js";import"./CollapsiblePanel-Bwq_8Vuv.js";import"./MultiColumnSortDialog-C3hGMjSR.js";import"./MenuTrigger-CkLfyBAc.js";import"./CompositeItem-B97tQNhx.js";import"./ToolbarRootContext-C7YmkdWj.js";import"./getDisabledMountTransitionStyles-BCOhgOHp.js";import"./getPseudoElementBounds-BiAN2Dz2.js";import"./chevron-down-BiBmRA_9.js";import"./index-Ccm7niur.js";import"./error-Cklok7wh.js";import"./BaseCbacBanner-7-OvX_lg.js";import"./makeExternalStore-UGtoi_Zp.js";import"./Tooltip-Dhj5CmPc.js";import"./PopoverPopup-CJh3mGTg.js";import"./debounce-Rxf64P7W.js";import"./tick-3VVcevUT.js";import"./DropdownField-BX9F8fxz.js";import"./isEqual-CjzvEKy0.js";import"./withOsdkMetrics-CXAPHKM8.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
