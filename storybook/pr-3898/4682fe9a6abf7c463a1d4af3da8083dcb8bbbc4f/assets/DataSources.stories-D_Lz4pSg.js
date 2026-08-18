import{j as r}from"./iframe-CaT_SB1N.js";import{O as b}from"./object-table-DxWFz5_z.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CFQEBVan.js";import{u as g}from"./useOsdkClient-C37wa3ql.js";import"./preload-helper-BPrtRX9r.js";import"./Table-BPF3DIoq.js";import"./index-Dd6LgUAX.js";import"./Dialog-588UW6Qz.js";import"./cross-BWOJYHQ2.js";import"./svgIconContainer-Bz8Ma6vE.js";import"./useBaseUiId-CvmHPMet.js";import"./InternalBackdrop-DaZylwN7.js";import"./composite-5peG0ZaO.js";import"./index-Sztf62uh.js";import"./index-CGIYb_6P.js";import"./index-ynByCEBN.js";import"./useEventCallback-CVPMd79M.js";import"./SkeletonBar-CxMrTn-U.js";import"./LoadingCell-D7zj3eW1.js";import"./ColumnConfigDialog-Bg6SY_Ld.js";import"./DraggableList-uveBSP7V.js";import"./search-CPBZ1v0m.js";import"./Input-B2ntkDdJ.js";import"./useControlled-Fy1hnDi2.js";import"./isEqual-BrC4uVGU.js";import"./isObject-KEZJ5QTR.js";import"./Button-BkKNJWx6.js";import"./ActionButton-Bp-l3MqX.js";import"./Checkbox-BwZLW8Tq.js";import"./useValueChanged-BUQcfQU6.js";import"./CollapsiblePanel-BSFye_sE.js";import"./MultiColumnSortDialog-C7y3pk0H.js";import"./MenuTrigger-BSmne0Gh.js";import"./CompositeItem-C1Yswmxi.js";import"./ToolbarRootContext-BobQvyh-.js";import"./getDisabledMountTransitionStyles-CHrpwNSH.js";import"./getPseudoElementBounds-Buoi7Tjq.js";import"./chevron-down-CJo4dMXj.js";import"./index-Clp_coQb.js";import"./error-Ca_B-WSi.js";import"./BaseCbacBanner-CyE-IyFA.js";import"./makeExternalStore-CruiM0F1.js";import"./Tooltip-BsBvfL1j.js";import"./PopoverPopup-DBi1WA6M.js";import"./toNumber-HvOjUaHa.js";import"./tick-Bq27YaX3.js";import"./DropdownField-Do15YAuW.js";import"./withOsdkMetrics-3xHWN_Ge.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
