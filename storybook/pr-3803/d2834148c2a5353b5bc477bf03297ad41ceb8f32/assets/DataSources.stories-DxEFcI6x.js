import{j as r}from"./iframe-DnZQIvTT.js";import{O as b}from"./object-table-DVRIN3fz.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CuUYP85B.js";import{u as g}from"./useOsdkClient-C6UovaqT.js";import"./preload-helper-BkW8a5rl.js";import"./Table-75SC6Pmm.js";import"./index-9hlHlyou.js";import"./Dialog-Cm-o7Xu1.js";import"./cross-C0DMMgZH.js";import"./svgIconContainer-yuQ64jxi.js";import"./useBaseUiId-BiQqFJiH.js";import"./InternalBackdrop-FmHXWr_y.js";import"./composite-B_yB_W3d.js";import"./index-Co5VwW1q.js";import"./index-CCOub406.js";import"./index-DSZ7IIaR.js";import"./useEventCallback-S3i3cwUJ.js";import"./SkeletonBar-DuBFX7MQ.js";import"./LoadingCell-Dz5yl_8o.js";import"./ColumnConfigDialog-CpFqQfx6.js";import"./DraggableList-CAHF7cXc.js";import"./search-DkG_mcgd.js";import"./Input-B-XWsA0h.js";import"./useControlled-lSDM3Zga.js";import"./isEqual-DxajWOoa.js";import"./isObject-DJ6ciwEQ.js";import"./Button-nmd_W8Kk.js";import"./ActionButton-Bpwm6fQH.js";import"./Checkbox-Dxxnmc4W.js";import"./useValueChanged-CkAf_GeI.js";import"./CollapsiblePanel-DI1vG4zM.js";import"./MultiColumnSortDialog-BOrrDHGi.js";import"./MenuTrigger-BYlkQB5e.js";import"./CompositeItem-5_WtziOg.js";import"./ToolbarRootContext-DeRNPR7X.js";import"./getDisabledMountTransitionStyles-PiiH0z4l.js";import"./getPseudoElementBounds-CAkRuCAN.js";import"./chevron-down-VeqrXGGR.js";import"./index-D6YwWFy-.js";import"./error-BLztiVY7.js";import"./BaseCbacBanner-DSJTxRm1.js";import"./makeExternalStore-CouSw7Ae.js";import"./Tooltip-kBgN66pM.js";import"./PopoverPopup-CwrAv6_7.js";import"./toNumber-Dom4meFx.js";import"./tick-Cw1PsFg_.js";import"./DropdownField-DbDbsfOB.js";import"./withOsdkMetrics-fofNv3K2.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
