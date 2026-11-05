import{j as r}from"./iframe-DsqGSzyQ.js";import{O as b}from"./object-table-BbRF0HYo.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D1Nf4TI0.js";import{u as g}from"./useOsdkClient-BfsVu55M.js";import"./preload-helper-C2TDGnFx.js";import"./Table-C5PRAfzS.js";import"./index-CVVe8LYW.js";import"./Dialog-BJXvX1Qz.js";import"./cross-OIVk5Jqz.js";import"./svgIconContainer-BTnUylTl.js";import"./useBaseUiId-CLwdfekz.js";import"./InternalBackdrop-Bcj0VMJA.js";import"./composite-KVqYkGkg.js";import"./index-BUfWM760.js";import"./index-CQfkRNgK.js";import"./index-DFzEYbU7.js";import"./useEventCallback-BUxfyhL3.js";import"./SkeletonBar-OWdeOMzd.js";import"./LoadingCell-GFteHhjq.js";import"./ColumnConfigDialog-pOwuJCVA.js";import"./DraggableList-DHD8gNGM.js";import"./search-Dp0YAnmc.js";import"./Input-DxF0Wzlw.js";import"./useControlled-DnGJzKUi.js";import"./Button-CG3H6I69.js";import"./small-cross-yxECI3O6.js";import"./ActionButton-DOoFHg12.js";import"./Checkbox-8MqZzppI.js";import"./useValueChanged-DmOLE1TI.js";import"./CollapsiblePanel-CENIho0X.js";import"./MultiColumnSortDialog-CAA_Gl6u.js";import"./MenuTrigger-CfVe1Fj6.js";import"./CompositeItem-D_FxDdAh.js";import"./ToolbarRootContext-Bbhq9Lsc.js";import"./getDisabledMountTransitionStyles-DTGPpCwR.js";import"./getPseudoElementBounds-DHuKM7P-.js";import"./chevron-down-DbLJwh-Y.js";import"./index-C-t9nxqw.js";import"./error-CSEdl-5d.js";import"./BaseCbacBanner-D_4wVm3C.js";import"./makeExternalStore-CwrRFGw-.js";import"./Tooltip-C8RXxpoJ.js";import"./PopoverPopup-DDE-QaKN.js";import"./debounce--Ga5NP20.js";import"./tick-BSaw4Ihw.js";import"./DropdownField-Hwe25ldg.js";import"./isEqual-zvTcHIVY.js";import"./withOsdkMetrics-nmEcK_Vs.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
