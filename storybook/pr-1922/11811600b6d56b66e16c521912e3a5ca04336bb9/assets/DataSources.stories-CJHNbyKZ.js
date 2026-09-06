import{j as r}from"./iframe-Cudgp9Yf.js";import{O as b}from"./object-table-CppCACw-.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-1ZRTQxsb.js";import{u as g}from"./useOsdkClient-zsU2AVrV.js";import"./preload-helper-4hrz9kvN.js";import"./Table-Cl3DbiIH.js";import"./index-81BYSLtR.js";import"./Dialog-940Ccla2.js";import"./cross-revkGSiW.js";import"./svgIconContainer-DHLyM821.js";import"./useBaseUiId-XTaLWo4v.js";import"./InternalBackdrop-DxBXy5tl.js";import"./composite-Cva0Dc4a.js";import"./index-CbHdBm0Y.js";import"./index-CSHUtoE8.js";import"./index-HepSRimU.js";import"./useEventCallback-DzHSKCot.js";import"./SkeletonBar-yGKH_f6h.js";import"./LoadingCell-Cj-LC_sA.js";import"./ColumnConfigDialog-NrJmvS8r.js";import"./DraggableList-0VYER9jf.js";import"./search-D0hS-0xo.js";import"./Input-Bh8eu1mD.js";import"./useControlled-CwtIgUOg.js";import"./Button-tVyqWp8F.js";import"./small-cross-ChbJVPJX.js";import"./ActionButton-Du3E86TK.js";import"./Checkbox-j-a3CiYd.js";import"./useValueChanged-CUGYJ1mb.js";import"./CollapsiblePanel-D77NNtaO.js";import"./MultiColumnSortDialog-ChhiEUPX.js";import"./MenuTrigger-BMd3jK89.js";import"./CompositeItem-DmRElDN_.js";import"./ToolbarRootContext-B8H-v8xY.js";import"./getDisabledMountTransitionStyles-55j4z-MY.js";import"./getPseudoElementBounds-DtfdtuS3.js";import"./chevron-down-DyPkH6YY.js";import"./index-Tl8UCzrU.js";import"./error-I8BNM1L0.js";import"./BaseCbacBanner-D1UIM2bR.js";import"./makeExternalStore-DJw3BgKy.js";import"./Tooltip-BxRrglwZ.js";import"./PopoverPopup-LJZGYOwd.js";import"./debounce-Crn7KrL-.js";import"./tick-C8BQHCqe.js";import"./DropdownField-CSgsAkCS.js";import"./isEqual-Cmzyg9o0.js";import"./withOsdkMetrics-BT2RZEDY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
