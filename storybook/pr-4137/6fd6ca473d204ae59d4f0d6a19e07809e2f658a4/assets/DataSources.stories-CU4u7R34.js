import{j as r}from"./iframe-BolfAo4P.js";import{O as b}from"./object-table-CGzR-sbg.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D6fnLY55.js";import{u as g}from"./useOsdkClient-BZmtEJhW.js";import"./preload-helper-ByLp_rEH.js";import"./Table-BEqc_WR2.js";import"./index-Dmp4oRqW.js";import"./Dialog-CZoZOnFW.js";import"./cross-CPB91upb.js";import"./svgIconContainer-zqDwx0Og.js";import"./useBaseUiId-DvZ-ac1w.js";import"./InternalBackdrop-DZT8OdtD.js";import"./composite-kotVvYj1.js";import"./index-Bt9kKuNp.js";import"./index-Cea80THD.js";import"./index-D4xBMDlg.js";import"./useEventCallback-CGEex2j7.js";import"./SkeletonBar-DUdd9eS6.js";import"./LoadingCell-Fz4GYLYB.js";import"./ColumnConfigDialog-D_o0xYK3.js";import"./DraggableList-BmC77OFq.js";import"./search-Sp-9ghy3.js";import"./Input-DnQW0UEK.js";import"./useControlled-C5FT7OgD.js";import"./Button-D-ABdEsl.js";import"./small-cross-CxRkjASt.js";import"./ActionButton-duX_H6Q1.js";import"./Checkbox-BzfUZdq-.js";import"./useValueChanged-DaE8aoFn.js";import"./CollapsiblePanel-CpsBsEMc.js";import"./MultiColumnSortDialog-DAhtncQF.js";import"./MenuTrigger-kv8wd5CF.js";import"./CompositeItem-BQgJHL6C.js";import"./ToolbarRootContext-Dsfyi3tb.js";import"./getDisabledMountTransitionStyles-D2DQ87Q4.js";import"./getPseudoElementBounds-JSG5w0o1.js";import"./chevron-down-Bj7fILeX.js";import"./index-DXDGkGFP.js";import"./error-Dnl49oZI.js";import"./BaseCbacBanner-BMamh7k1.js";import"./makeExternalStore-B6jLw3hY.js";import"./Tooltip-SA4YBfEO.js";import"./PopoverPopup-CE-WFncL.js";import"./debounce-B4mSXpkc.js";import"./tick-CY1tZTIW.js";import"./DropdownField-1RfM4rou.js";import"./isEqual-r9e_6t0W.js";import"./withOsdkMetrics-DkkczEbv.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
