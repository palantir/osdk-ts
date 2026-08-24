import{j as r}from"./iframe-Cp-OZSnu.js";import{O as b}from"./object-table-CfyXoB90.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BZ8g0c2S.js";import{u as g}from"./useOsdkClient-BOP-wcoz.js";import"./preload-helper-D0TF71Jy.js";import"./Table-CiWJGaSH.js";import"./index-CkF9JaVm.js";import"./Dialog-B4l2mtAg.js";import"./cross-B5c-VWRK.js";import"./svgIconContainer-CxRnbkUR.js";import"./useBaseUiId-IikVfOCL.js";import"./InternalBackdrop-vW5OBAT0.js";import"./composite-D2o-jxlM.js";import"./index-JtC5fr_f.js";import"./index-XQPE0BXO.js";import"./index-DwAKCp0R.js";import"./useEventCallback-DfdH9uyV.js";import"./SkeletonBar-5PqapGnZ.js";import"./LoadingCell-BScpMvgF.js";import"./ColumnConfigDialog-B57JUt_x.js";import"./DraggableList-C5K3BPEc.js";import"./search-BXFPe1aS.js";import"./Input-BS6nNy2e.js";import"./useControlled-IGbL1OgU.js";import"./Button-10bMmHGl.js";import"./small-cross-Bs17Z7ts.js";import"./ActionButton-zOvyMBGx.js";import"./Checkbox-B8Husi45.js";import"./useValueChanged-BU4ePFF5.js";import"./CollapsiblePanel-CbpCiDEW.js";import"./MultiColumnSortDialog-By7JDjRb.js";import"./MenuTrigger-BVMeq6Rj.js";import"./CompositeItem-7Cd8Z46E.js";import"./ToolbarRootContext-DfeiVioE.js";import"./getDisabledMountTransitionStyles-D4MlkAs5.js";import"./getPseudoElementBounds-CUEq49CO.js";import"./chevron-down-CqsW6wc2.js";import"./index-C46CdtdM.js";import"./error-o2ED4R93.js";import"./BaseCbacBanner-DWZMW_NS.js";import"./makeExternalStore-D9rplt6T.js";import"./Tooltip-BG7Ajslr.js";import"./PopoverPopup-BOe11Gw9.js";import"./debounce-DdIQASxO.js";import"./tick-D0gf4TUf.js";import"./DropdownField-DvuC2_FB.js";import"./isEqual-pN97cfTT.js";import"./withOsdkMetrics-DSHyV5CB.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
