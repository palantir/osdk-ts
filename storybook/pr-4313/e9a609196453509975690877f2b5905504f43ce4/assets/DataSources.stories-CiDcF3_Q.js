import{j as r}from"./iframe-CiI5PS6K.js";import{O as b}from"./object-table-t7PnOjZV.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers--q4sG6oF.js";import{u as g}from"./useOsdkClient-DO_qV40A.js";import"./preload-helper-BScoV-ON.js";import"./Table-Bwu2eGJ5.js";import"./index-DTPqzTra.js";import"./Dialog-DnLyeJh7.js";import"./cross-DgjL-w3z.js";import"./svgIconContainer-tdqH8iqE.js";import"./useBaseUiId-DReynxDq.js";import"./InternalBackdrop-Coh6cB6j.js";import"./composite-BrOoGgaN.js";import"./index-CjZ-iEVj.js";import"./index-XzG81WZo.js";import"./index-CPJzMmpG.js";import"./useEventCallback-CyRG3rkJ.js";import"./SkeletonBar-BNIt8FzO.js";import"./LoadingCell-C75a2rZj.js";import"./ColumnConfigDialog-BuLkkFmQ.js";import"./DraggableList-DkKy9uqw.js";import"./search-BRtPHFLM.js";import"./Input-gM0suFmQ.js";import"./useControlled-C0rSVFZc.js";import"./Button-BP56zFTn.js";import"./small-cross-BvlJE0g7.js";import"./ActionButton-DmbyeOrm.js";import"./Checkbox-CURrvPm-.js";import"./useValueChanged-Dfh6smN1.js";import"./CollapsiblePanel-CL4hIKDt.js";import"./MultiColumnSortDialog-CM8G5v3Q.js";import"./MenuTrigger-Cgk5IHXF.js";import"./CompositeItem-D4PTMtSQ.js";import"./ToolbarRootContext-CTDjgR90.js";import"./getDisabledMountTransitionStyles-CRmjgyTc.js";import"./getPseudoElementBounds-CAN5gz0w.js";import"./chevron-down-F9mPI0PG.js";import"./index-DzwnFRrI.js";import"./error-Dp2Yeg1s.js";import"./BaseCbacBanner-CwxrNrzn.js";import"./makeExternalStore-BiFRWY5t.js";import"./Tooltip-RikTdx9n.js";import"./PopoverPopup-CME_dwGk.js";import"./debounce-DI-y3SNs.js";import"./tick-NDqyjiXA.js";import"./DropdownField-D6IgbNva.js";import"./isEqual-Cza9X2E6.js";import"./withOsdkMetrics-BRB4GNZb.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
