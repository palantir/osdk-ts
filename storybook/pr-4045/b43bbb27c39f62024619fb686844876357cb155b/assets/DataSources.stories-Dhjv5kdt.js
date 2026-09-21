import{j as r}from"./iframe-BjF7QLhH.js";import{O as b}from"./object-table-CRKpg9i5.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BflEZs5A.js";import{u as g}from"./useOsdkClient-Bbvx3WSo.js";import"./preload-helper-BjubRawJ.js";import"./Table-B85Q0ZFg.js";import"./index-DjhpcMou.js";import"./Dialog-ye1qQI2K.js";import"./cross-H3gYztYg.js";import"./svgIconContainer-BOlpbv4R.js";import"./useBaseUiId-DsiyrTc5.js";import"./InternalBackdrop-DjHac_o6.js";import"./composite-C3VIqVTD.js";import"./index-dd7HiSC0.js";import"./index-D9CUEICi.js";import"./index-_Dhu50HX.js";import"./useEventCallback-8NkDy3YU.js";import"./SkeletonBar-wv_LSLd9.js";import"./LoadingCell-BTF7OY9I.js";import"./ColumnConfigDialog-DEbqWsiT.js";import"./DraggableList-jq3VaT7b.js";import"./search-CfhozSoV.js";import"./Input-EpQSMSPb.js";import"./useControlled-k0Oisgsr.js";import"./Button-BaubE4M6.js";import"./small-cross-aBFUVmSW.js";import"./ActionButton-BYRhG-r1.js";import"./Checkbox-CeRhyG7S.js";import"./useValueChanged-WiC8WLMH.js";import"./CollapsiblePanel-CbQAA8YZ.js";import"./MultiColumnSortDialog-4IZ447J8.js";import"./MenuTrigger-C5-uAPsu.js";import"./CompositeItem-CJJAstdN.js";import"./ToolbarRootContext-160MLPLN.js";import"./getDisabledMountTransitionStyles-CvnFYTQC.js";import"./getPseudoElementBounds-I8RQbwIa.js";import"./chevron-down-qzCHSoFz.js";import"./index-Zf4kiRn8.js";import"./error-DEWhTW9J.js";import"./BaseCbacBanner-DxaUAtTm.js";import"./makeExternalStore--bKLbn6H.js";import"./Tooltip-EUOwem5v.js";import"./PopoverPopup-Pu1LSCLj.js";import"./debounce-ChQOuTiY.js";import"./tick-CryAE_DJ.js";import"./DropdownField-BBcJxhdu.js";import"./isEqual-D8iy_ZUF.js";import"./withOsdkMetrics-BhtzFR1P.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
