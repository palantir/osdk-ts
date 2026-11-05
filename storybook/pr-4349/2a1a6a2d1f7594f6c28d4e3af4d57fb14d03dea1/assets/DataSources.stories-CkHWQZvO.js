import{j as r}from"./iframe-_xCtEPM4.js";import{O as b}from"./object-table-CX2vqi2p.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-RY7BtavD.js";import{u as g}from"./useOsdkClient-CsHMVj33.js";import"./preload-helper-BvkLr_T8.js";import"./Table-Bpb1awiB.js";import"./index-BBF2nMyv.js";import"./Dialog-DAIDfao_.js";import"./cross-YJjC_kdM.js";import"./svgIconContainer-5YMx1lyC.js";import"./useBaseUiId-qq3Q_R-A.js";import"./InternalBackdrop-Dhb2Gme1.js";import"./composite-RG9aVNdC.js";import"./index-Ch2OG5I0.js";import"./index-oRHr0Ey_.js";import"./index-Czl8XPIs.js";import"./useEventCallback-jAZccFQT.js";import"./SkeletonBar-BWH5Ax4a.js";import"./LoadingCell-wQaM50Dl.js";import"./ColumnConfigDialog-BJ2OMihb.js";import"./DraggableList-W2XCxLEj.js";import"./search-EgEnIgJy.js";import"./Input-CbxbAG1i.js";import"./useControlled-BqnjfWyt.js";import"./Button-B5hG9nBO.js";import"./small-cross-CbC-3xN6.js";import"./ActionButton-C2zs3wiy.js";import"./Checkbox-BSNrs3M6.js";import"./useValueChanged-MMHfjh9x.js";import"./CollapsiblePanel-ZHKipLnY.js";import"./MultiColumnSortDialog-CTjvt41u.js";import"./MenuTrigger-BDeOM6rc.js";import"./CompositeItem-C0afETt6.js";import"./ToolbarRootContext-B_pkS0jH.js";import"./getDisabledMountTransitionStyles-DbKz4kaQ.js";import"./getPseudoElementBounds-FFlb83uV.js";import"./chevron-down-Dgi1lUDW.js";import"./index-Dp_8qpaL.js";import"./error-CPk-KRIB.js";import"./BaseCbacBanner-9tAX29-P.js";import"./makeExternalStore-DP7fUFlc.js";import"./Tooltip-CRHJdF88.js";import"./isObject-BjXVlsmF.js";import"./debounce-BLKiEPm1.js";import"./tick-BpxRmUp6.js";import"./DropdownField-DARaJilg.js";import"./isEqual-BODadTDI.js";import"./_baseIsEqual-CQEQ0Dmr.js";import"./withOsdkMetrics-Sswq0Wu_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
