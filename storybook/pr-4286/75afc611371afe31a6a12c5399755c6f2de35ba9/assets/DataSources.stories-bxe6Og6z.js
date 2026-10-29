import{j as r}from"./iframe-DFOR2onK.js";import{O as b}from"./object-table-BM-RBqZJ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DAg9uctw.js";import{u as g}from"./useOsdkClient-MN7PkG3f.js";import"./preload-helper-ByXSQw30.js";import"./Table-D1mkb7tB.js";import"./index-BVkLsmBt.js";import"./Dialog-Ccg87r_l.js";import"./cross-C9kRknfx.js";import"./svgIconContainer-DjkUaIxk.js";import"./useBaseUiId-Dsp7jumh.js";import"./InternalBackdrop-DvUh0nKI.js";import"./composite-CRJMZ4tZ.js";import"./index-DY_-DVUB.js";import"./index-OUX8MUQn.js";import"./index-Dmn1pJPY.js";import"./useEventCallback-PkaVDlo9.js";import"./SkeletonBar-BdI0Hxl4.js";import"./LoadingCell-DUvn0GzQ.js";import"./ColumnConfigDialog-CeIa-WiN.js";import"./DraggableList-lAwP0gTH.js";import"./search-4X3AVeSP.js";import"./Input-tEOQdwSz.js";import"./useControlled-CtMTriq1.js";import"./Button-MewiuY9J.js";import"./small-cross-BDzP7tAy.js";import"./ActionButton-DSajpJr8.js";import"./Checkbox-DnvdOU0u.js";import"./useValueChanged-CgXmK7v2.js";import"./CollapsiblePanel-B8axV45E.js";import"./MultiColumnSortDialog-DrEjeaaR.js";import"./MenuTrigger-D29Qjhdm.js";import"./CompositeItem-CtUWLqeJ.js";import"./ToolbarRootContext-DMxHSqVF.js";import"./getDisabledMountTransitionStyles-LtGV7XWM.js";import"./getPseudoElementBounds-Bzd3adVt.js";import"./chevron-down-BMNaDKAR.js";import"./index-BCk6aVbl.js";import"./error-BAimxzZD.js";import"./BaseCbacBanner-rPUtaKKQ.js";import"./makeExternalStore-CaVoQzcs.js";import"./Tooltip-BbqW-UvY.js";import"./PopoverPopup-Cuu9Pm_U.js";import"./debounce-CgV8usSM.js";import"./tick-DIYXFliV.js";import"./DropdownField-DXyB4HbV.js";import"./isEqual-CesuJwK0.js";import"./withOsdkMetrics-of9jSM-3.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
