import{j as r}from"./iframe-DcmfU77k.js";import{O as b}from"./object-table-BOUdcugr.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CqvHOeS8.js";import{u as g}from"./useOsdkClient-ChRKxtfQ.js";import"./preload-helper-iUgfFPGb.js";import"./Table-Bu5SheTH.js";import"./index-D2kWKPAJ.js";import"./Dialog-CW8M2Z4_.js";import"./cross-ECmaaCGW.js";import"./svgIconContainer-DT6N8Ki8.js";import"./useBaseUiId-BoHkQsKU.js";import"./InternalBackdrop-BWvGtHcw.js";import"./composite-Bd0PbqGb.js";import"./index-BS3Mo4g_.js";import"./index-DWk8uxuI.js";import"./index-BtNUYRCp.js";import"./useEventCallback-CD3D3swh.js";import"./SkeletonBar-DFbUbhFB.js";import"./LoadingCell-U-CVMro_.js";import"./ColumnConfigDialog-DfL8P9dS.js";import"./DraggableList-qEcRmpKw.js";import"./search-Ai29WxXU.js";import"./Input-BADaHFeb.js";import"./useControlled-eRGHzZHW.js";import"./isEqual-DGAWDWzv.js";import"./isObject-BcoDpkFk.js";import"./Button-BglaF_Tj.js";import"./ActionButton-BTleJWXX.js";import"./Checkbox-CHQG3Nvh.js";import"./useValueChanged-CWm28iKl.js";import"./CollapsiblePanel-C-AdogU0.js";import"./MultiColumnSortDialog-Ditw7DtL.js";import"./MenuTrigger-DvwNaKoK.js";import"./CompositeItem-C3SNLcxf.js";import"./ToolbarRootContext-Dpg9_Vj3.js";import"./getDisabledMountTransitionStyles-B-GeruUr.js";import"./getPseudoElementBounds-D6T0I_AP.js";import"./chevron-down-DAzj8uTp.js";import"./index-D5ug52rE.js";import"./error-BE5jQAua.js";import"./BaseCbacBanner-DE-HzhxZ.js";import"./makeExternalStore-B7HcnYk0.js";import"./Tooltip-Cp82FIMP.js";import"./PopoverPopup-D34pufPa.js";import"./toNumber-CiUg3_fX.js";import"./tick-69qwrrmf.js";import"./DropdownField-C6uw3M0I.js";import"./withOsdkMetrics-3Fje_1hu.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
