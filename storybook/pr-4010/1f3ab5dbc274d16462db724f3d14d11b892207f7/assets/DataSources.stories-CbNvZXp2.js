import{j as r}from"./iframe-CNvI9eAL.js";import{O as b}from"./object-table-DE0aQxGd.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-vOJxrFxG.js";import{u as g}from"./useOsdkClient-C0wuY3lu.js";import"./preload-helper-CRF54Ery.js";import"./Table-DQba8Id3.js";import"./index-BTFSWIKz.js";import"./Dialog-Cm29-LjC.js";import"./cross--RfUm2YZ.js";import"./svgIconContainer-BBVMgJTA.js";import"./useBaseUiId-CxeAu3mm.js";import"./InternalBackdrop-CHq0uWTI.js";import"./composite-Db3opbub.js";import"./index-V8dSKZeO.js";import"./index-Cvipkoc1.js";import"./index-Deml3Efy.js";import"./useEventCallback-BzDn9UNO.js";import"./SkeletonBar-T6--w0gO.js";import"./LoadingCell-DKTXROx6.js";import"./ColumnConfigDialog-d6w508Un.js";import"./DraggableList-DP6Q3e48.js";import"./search-BesbbJYF.js";import"./Input-CfSk64xN.js";import"./useControlled-pDp_EzUa.js";import"./Button-CfqXNV8N.js";import"./small-cross-BE9CMIjD.js";import"./ActionButton-BBpJXm_V.js";import"./Checkbox-B5V9DxWA.js";import"./useValueChanged-CrRD_2mc.js";import"./CollapsiblePanel-BLod_JW_.js";import"./MultiColumnSortDialog-DIQiqAb7.js";import"./MenuTrigger-DqqaQGBf.js";import"./CompositeItem-aRd3tSux.js";import"./ToolbarRootContext-CTMDQSca.js";import"./getDisabledMountTransitionStyles-4DN3r7zh.js";import"./getPseudoElementBounds-D2n5rcQy.js";import"./chevron-down-DEvcNxOi.js";import"./index-BHMz7Anj.js";import"./error-CG9g-M1f.js";import"./BaseCbacBanner-VkrDpRp7.js";import"./makeExternalStore-DrmCh3vo.js";import"./Tooltip-BBjnREMn.js";import"./PopoverPopup-DGeh8xC_.js";import"./debounce-CkKjOcL_.js";import"./tick-CpXHS_dg.js";import"./DropdownField-CYdvpVt_.js";import"./isEqual-BGKnxyMw.js";import"./withOsdkMetrics-D4xumH8Q.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
