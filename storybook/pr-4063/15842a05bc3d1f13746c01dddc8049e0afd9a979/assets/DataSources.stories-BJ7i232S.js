import{j as r}from"./iframe-BP89Z9wn.js";import{O as b}from"./object-table-BwxRsYi9.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Doa77VmD.js";import{u as g}from"./useOsdkClient-BZi6F2zc.js";import"./preload-helper-CpDXy6ri.js";import"./Table-BkomWwXJ.js";import"./index-7fPc8Pd4.js";import"./Dialog-BW7atylg.js";import"./cross-CseKBkZX.js";import"./svgIconContainer-B-B6fhYH.js";import"./useBaseUiId-BsQB3yjV.js";import"./InternalBackdrop-qHNvDGw-.js";import"./composite-JzO3n_7v.js";import"./index-yCs_Jqs_.js";import"./index-B2q267Hw.js";import"./index-RHMRxRkz.js";import"./useEventCallback-OSRHYtdG.js";import"./SkeletonBar-BVNLCVuA.js";import"./LoadingCell-B9UiRnTQ.js";import"./ColumnConfigDialog-CGzlL1ZB.js";import"./DraggableList-Bx6XvblW.js";import"./search-Ce4dpx9M.js";import"./Input-CurDQ8U3.js";import"./useControlled-DYUiPWJr.js";import"./Button-Bcmb5ML8.js";import"./small-cross-CxfEbA50.js";import"./ActionButton-QrFK0FUf.js";import"./Checkbox-CULg12Wm.js";import"./useValueChanged-SyUpxD-D.js";import"./CollapsiblePanel-C9i8cz4o.js";import"./MultiColumnSortDialog-GPZ6ZQYp.js";import"./MenuTrigger--b10bWzD.js";import"./CompositeItem-BWaumFAX.js";import"./ToolbarRootContext-BM5nRA8f.js";import"./getDisabledMountTransitionStyles-BNgnrYDf.js";import"./getPseudoElementBounds-bsHuPucT.js";import"./chevron-down-CbjEdb4A.js";import"./index-D2KO3R9_.js";import"./error-B9U50q0S.js";import"./BaseCbacBanner-B_kBlNl8.js";import"./makeExternalStore-G7zKBEOt.js";import"./Tooltip-DYmR_CPY.js";import"./PopoverPopup-oOwrFqQx.js";import"./debounce--3v9P4Lb.js";import"./tick-jzT-KPyz.js";import"./DropdownField-DBILA8E6.js";import"./isEqual-bFioetdV.js";import"./withOsdkMetrics-hOQ5lnvy.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
