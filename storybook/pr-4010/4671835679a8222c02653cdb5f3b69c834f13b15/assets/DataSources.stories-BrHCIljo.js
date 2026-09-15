import{j as r}from"./iframe-DcCQS0_6.js";import{O as b}from"./object-table-IW6qzE0i.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Ro1Hwy3P.js";import{u as g}from"./useOsdkClient-DjIuCtk_.js";import"./preload-helper-xWYT_d-N.js";import"./Table-DFemE_x6.js";import"./index-CbMk7YoF.js";import"./Dialog-DpW59sOk.js";import"./cross-CUczp16a.js";import"./svgIconContainer-DW0Yd1WX.js";import"./useBaseUiId-Dh-QEy1V.js";import"./InternalBackdrop-Cjy1b8s5.js";import"./composite-CzrpQp13.js";import"./index-DV2Nx4iz.js";import"./index-DH8eBQ7L.js";import"./index-B12KGdMo.js";import"./useEventCallback-uOZ5ZH80.js";import"./SkeletonBar-D5ep4ew5.js";import"./LoadingCell-hpqWg47X.js";import"./ColumnConfigDialog-BzJpbiPU.js";import"./DraggableList-BwYzjIhu.js";import"./search-I8gByOwV.js";import"./Input-DQQsT43v.js";import"./useControlled-DjePpHNj.js";import"./Button-9wNHK-eW.js";import"./small-cross-J9_U438b.js";import"./ActionButton-DUjUq-0F.js";import"./Checkbox--MKRLD2P.js";import"./useValueChanged-LgJH2RSM.js";import"./CollapsiblePanel-Bw4GjZXS.js";import"./MultiColumnSortDialog-D7WAM6sg.js";import"./MenuTrigger-lqNk6ztm.js";import"./CompositeItem-f5BJQE98.js";import"./ToolbarRootContext-Bj_28nw4.js";import"./getDisabledMountTransitionStyles-hcUT6CF_.js";import"./getPseudoElementBounds-hK_15JJS.js";import"./chevron-down-lL-kgNIS.js";import"./index-rRkZkhHF.js";import"./error-DZqUEnyZ.js";import"./BaseCbacBanner-Dl9pCWQu.js";import"./makeExternalStore-D7kaYs9c.js";import"./Tooltip-BhO1PItx.js";import"./PopoverPopup-4ZQ0qIW9.js";import"./debounce-CV8PblDi.js";import"./tick-B04vkzTg.js";import"./DropdownField-D9LBoico.js";import"./isEqual-qXfBCwDA.js";import"./withOsdkMetrics-CT48WTCf.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
