import{j as r}from"./iframe-DrkKxiw5.js";import{O as b}from"./object-table-bi6_WaNf.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BALOYJZu.js";import{u as g}from"./useOsdkClient-2K-Ebyul.js";import"./preload-helper-CoexQg1D.js";import"./Table-Cd3VvXH2.js";import"./index-9bu5FaWD.js";import"./Dialog-CLjuVpcT.js";import"./cross-CNIYbi9C.js";import"./svgIconContainer-BwjWYJj_.js";import"./useBaseUiId-NPWMEoN9.js";import"./InternalBackdrop-BHnmo_mI.js";import"./composite-BHNDyYYF.js";import"./index-BR2AMsRx.js";import"./index-YiUJ_53T.js";import"./index-B1tVzWT5.js";import"./useEventCallback-d78tTu5e.js";import"./SkeletonBar-DxwKfUAL.js";import"./LoadingCell-CLJBA_Lo.js";import"./ColumnConfigDialog-BU50e-BB.js";import"./DraggableList-CqrYiCET.js";import"./search-D4-R-e8V.js";import"./Input-DOgtVus-.js";import"./useControlled-BCrFB87J.js";import"./Button-CF-FMXcU.js";import"./small-cross-DmpTk7iL.js";import"./ActionButton-87-LtZRT.js";import"./Checkbox-BvfE16Cx.js";import"./useValueChanged-oqHjTNH5.js";import"./CollapsiblePanel-QmgD0n_V.js";import"./MultiColumnSortDialog-8pTNJexI.js";import"./MenuTrigger-kT5ygFWd.js";import"./CompositeItem-C5ekTE5F.js";import"./ToolbarRootContext-C8q64USb.js";import"./getDisabledMountTransitionStyles-C3Z8Tksw.js";import"./getPseudoElementBounds-BZjeQhGg.js";import"./chevron-down-DsVdM_C_.js";import"./index-0ErCHoJl.js";import"./error-C2HVZj6I.js";import"./BaseCbacBanner-DF6mIH5M.js";import"./makeExternalStore-D4NtYiCX.js";import"./Tooltip-DL2AUsJC.js";import"./PopoverPopup-6cHsVbHZ.js";import"./debounce-tRqZT1XJ.js";import"./tick-DLXEDZLW.js";import"./DropdownField-BgPaKr2p.js";import"./isEqual-1IpeczsO.js";import"./withOsdkMetrics-LuraraC5.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
