import{j as r}from"./iframe-1hfaDqWf.js";import{O as b}from"./object-table-BVsmr5UF.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B5HGg2Y3.js";import{u as g}from"./useOsdkClient-D6tvv9UM.js";import"./preload-helper-De53aV0r.js";import"./Table-BOdn1qRs.js";import"./index-BhraWcfW.js";import"./Dialog-DF70jFlI.js";import"./cross-BxuxKn8r.js";import"./svgIconContainer-CfNLFLUV.js";import"./useBaseUiId-Deq2cxJf.js";import"./InternalBackdrop-Bwl2SQmc.js";import"./composite-DJvOABdy.js";import"./index-CltX__3l.js";import"./index-CNJ7D8B4.js";import"./index-DUbuCag1.js";import"./useEventCallback-aip0Q_23.js";import"./SkeletonBar-9TZgIuFD.js";import"./LoadingCell-B01RldSR.js";import"./ColumnConfigDialog-DSrNDSyO.js";import"./DraggableList-DVDPuNDG.js";import"./search-ChOCRi6Z.js";import"./Input-D17xgaxz.js";import"./useControlled-D0I97nL6.js";import"./Button-CnBcagCx.js";import"./small-cross-C628jtsy.js";import"./ActionButton-DAT1D4My.js";import"./Checkbox-5hahDlkG.js";import"./useValueChanged-CdYXSfOs.js";import"./CollapsiblePanel-BZNELsDM.js";import"./MultiColumnSortDialog-DTOCkBGF.js";import"./MenuTrigger-QDFe4v67.js";import"./CompositeItem-CmCZmC8c.js";import"./ToolbarRootContext-BuC21FlU.js";import"./getDisabledMountTransitionStyles-Dk0hinap.js";import"./getPseudoElementBounds-DLRZ8Oik.js";import"./chevron-down-oC6N0Ou5.js";import"./index-B722iX7j.js";import"./error-BGVtNtZh.js";import"./BaseCbacBanner-C8GCPmG0.js";import"./makeExternalStore-CiOsLXpf.js";import"./Tooltip-CP0SUwq-.js";import"./PopoverPopup-CFLZ0LEF.js";import"./debounce-Bqvjn-gC.js";import"./tick-aJFXUkvZ.js";import"./DropdownField-K3jo3x1W.js";import"./isEqual-DbAISukP.js";import"./withOsdkMetrics-pFp3tsBC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
