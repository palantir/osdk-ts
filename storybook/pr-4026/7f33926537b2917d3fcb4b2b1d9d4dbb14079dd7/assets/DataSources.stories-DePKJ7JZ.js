import{j as r}from"./iframe-C3h4Q1BU.js";import{O as b}from"./object-table-DOUB00xj.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DrrzBGMU.js";import{u as g}from"./useOsdkClient-BK_OZ78C.js";import"./preload-helper-CA8PdwhG.js";import"./Table-Dg5mPtzj.js";import"./index-CuMmyLu1.js";import"./Dialog-D6nxx4go.js";import"./cross-B1EMHtko.js";import"./svgIconContainer-DnZbbW9L.js";import"./useBaseUiId-CW_7Ddvm.js";import"./InternalBackdrop-Ba1aCLvg.js";import"./composite-CYiVeAjT.js";import"./index-CLYARYT8.js";import"./index-Xgl-RbZw.js";import"./index-P859LBRx.js";import"./useEventCallback-BLQ3vTi3.js";import"./SkeletonBar-DbGt7hsh.js";import"./LoadingCell-RQH4-_mP.js";import"./ColumnConfigDialog-rPSTeBCf.js";import"./DraggableList-Ds5SHM9Y.js";import"./search-BrzFjKOS.js";import"./Input-LpvjeHcx.js";import"./useControlled-CJNnVZBn.js";import"./Button-CgHUffbd.js";import"./small-cross-hDACPWQm.js";import"./ActionButton-DJigEBZw.js";import"./Checkbox-Civ60MA5.js";import"./useValueChanged-CkdtL1Gi.js";import"./CollapsiblePanel-BsLzX-dh.js";import"./MultiColumnSortDialog-Dvh_FUCg.js";import"./MenuTrigger-Cr6wd-UG.js";import"./CompositeItem-DI8BefCP.js";import"./ToolbarRootContext-AG_e6eyt.js";import"./getDisabledMountTransitionStyles-CAVDLyg8.js";import"./getPseudoElementBounds-Dbgyc2RJ.js";import"./chevron-down-BDOZijvO.js";import"./index-DeSqFGSS.js";import"./error-MSHCVYku.js";import"./BaseCbacBanner-BF4oAh-4.js";import"./makeExternalStore-Bit4WYt1.js";import"./Tooltip-QCUHwQU8.js";import"./PopoverPopup-CiqE5a5D.js";import"./debounce-CUSOW8NM.js";import"./tick-C54w7HIP.js";import"./DropdownField-TRgvUDZn.js";import"./isEqual-CAOlDPIr.js";import"./withOsdkMetrics-Bf4iaqB8.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
