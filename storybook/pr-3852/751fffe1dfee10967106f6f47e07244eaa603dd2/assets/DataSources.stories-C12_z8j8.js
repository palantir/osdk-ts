import{j as r}from"./iframe-CNas8tCV.js";import{O as b}from"./object-table-C8i8aDbO.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C3GyMLt9.js";import{u as g}from"./useOsdkClient-B6N5Ynfx.js";import"./preload-helper-BrLgTqj6.js";import"./Table-B7ttLNKA.js";import"./index-D7Ojgd4V.js";import"./Dialog-DeiQybmE.js";import"./cross-Cv9-zzS9.js";import"./svgIconContainer-Dzsoi_4S.js";import"./useBaseUiId-X471mJCy.js";import"./InternalBackdrop-Dlgf3ivC.js";import"./composite-CS_tSE92.js";import"./index-BTiHVZ1L.js";import"./index-BtptK3eI.js";import"./index-4W1N-_A-.js";import"./useEventCallback-D3bYPUkP.js";import"./SkeletonBar-BjIT0SZR.js";import"./LoadingCell-Df87zf6s.js";import"./ColumnConfigDialog-3HnFFO5a.js";import"./DraggableList-uSYcJ8Kc.js";import"./search-DUqjPedA.js";import"./Input-CU35V2TL.js";import"./useControlled-Cjala1q6.js";import"./Button-C6s7oiSJ.js";import"./small-cross-S20y_pnE.js";import"./ActionButton-BYItjPf7.js";import"./Checkbox-B9KqAtRO.js";import"./useValueChanged-CaoL13K8.js";import"./CollapsiblePanel-Beb9dGYt.js";import"./MultiColumnSortDialog-CFQ7cdiD.js";import"./MenuTrigger-BF5ACnWZ.js";import"./CompositeItem-DXu_k_QL.js";import"./ToolbarRootContext-DOnJZ6Oo.js";import"./getDisabledMountTransitionStyles-D9ttWYyq.js";import"./getPseudoElementBounds-C9ugQgZF.js";import"./chevron-down-Bdgupgh4.js";import"./index-dIUVuF_Q.js";import"./error-DC-jftfn.js";import"./BaseCbacBanner-CrucHGLg.js";import"./makeExternalStore-Bw1hiMWb.js";import"./Tooltip-CIpDyo_p.js";import"./PopoverPopup-DDaiQ5QG.js";import"./debounce-B3uOQazY.js";import"./tick-olxLAyAM.js";import"./DropdownField-BX-yMOW5.js";import"./isEqual-BUaS9dIL.js";import"./withOsdkMetrics-DBguGQ7e.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
