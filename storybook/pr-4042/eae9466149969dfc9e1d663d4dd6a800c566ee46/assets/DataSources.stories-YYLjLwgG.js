import{j as r}from"./iframe-DxocSyIf.js";import{O as b}from"./object-table-CaKnpQ-i.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CDkFPum-.js";import{u as g}from"./useOsdkClient-BXG88ARm.js";import"./preload-helper-D56zqST7.js";import"./Table-QSI8GlCw.js";import"./index-DfYEtxmC.js";import"./Dialog-d3R0xLoE.js";import"./cross-CVx988bJ.js";import"./svgIconContainer-Bj1sIzvv.js";import"./useBaseUiId--lgIG0_P.js";import"./InternalBackdrop-Cut_mBk7.js";import"./composite-Cghpi3uk.js";import"./index-02gWXqYk.js";import"./index-_cAiPY8y.js";import"./index-BEy5XIjA.js";import"./useEventCallback-DXHICVTo.js";import"./SkeletonBar-BaBNWfHB.js";import"./LoadingCell-Dpv0fPFj.js";import"./ColumnConfigDialog-xCBQCsG2.js";import"./DraggableList-Dk0oOAyq.js";import"./search-CQuVvSo7.js";import"./Input-Bw3XbqGk.js";import"./useControlled-BTWGqHDE.js";import"./Button-wSc2Yx62.js";import"./small-cross-hL-3WDGp.js";import"./ActionButton-CpdJTM7K.js";import"./Checkbox-DJoKfBe-.js";import"./useValueChanged-g_jUR8Y4.js";import"./CollapsiblePanel-Cy7Zihw3.js";import"./MultiColumnSortDialog-DUKtaUYS.js";import"./MenuTrigger-C_-OPkFs.js";import"./CompositeItem-idLXSPQh.js";import"./ToolbarRootContext-B-Vz0eah.js";import"./getDisabledMountTransitionStyles-RTvY0Tj_.js";import"./getPseudoElementBounds-DVmQFPdP.js";import"./chevron-down-myOLqEz6.js";import"./index-DNErSg1e.js";import"./error-CCnxuUsF.js";import"./BaseCbacBanner-C98-EIkC.js";import"./makeExternalStore-C5-_T4ZS.js";import"./Tooltip-CAu8kBHh.js";import"./PopoverPopup-YsdX51sf.js";import"./debounce-CCWQ0KNo.js";import"./tick-CWU5bp-x.js";import"./DropdownField-Db8DvsDi.js";import"./isEqual-Bo2wP0vA.js";import"./withOsdkMetrics-CH0zpjho.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
