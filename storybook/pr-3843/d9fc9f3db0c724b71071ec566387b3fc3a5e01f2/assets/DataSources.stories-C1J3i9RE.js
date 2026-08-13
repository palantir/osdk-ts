import{j as r}from"./iframe-CQFnHxTO.js";import{O as b}from"./object-table-ChqEHKh4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D5PXk-51.js";import{u as g}from"./useOsdkClient-Byc0C7aB.js";import"./preload-helper-rK1dY1Ui.js";import"./Table-BeFq-Dil.js";import"./index-D-SWpkps.js";import"./Dialog-BnfVV6cj.js";import"./cross-BwcQfy8o.js";import"./svgIconContainer-DGlcHToS.js";import"./useBaseUiId-DhEYJ7Lv.js";import"./InternalBackdrop-Wme1Pd-g.js";import"./composite-DDTIjh9a.js";import"./index-BwQs_oNu.js";import"./index-B7EcVcO3.js";import"./index-CmG1YU-z.js";import"./useEventCallback-BM2PZBH6.js";import"./SkeletonBar-BDQSdXSb.js";import"./LoadingCell-Bq6YrahC.js";import"./ColumnConfigDialog-CiuXcpeZ.js";import"./DraggableList-k44Faf2B.js";import"./search-DLWP4Sau.js";import"./Input-DVjUYO6G.js";import"./useControlled-DQq657mZ.js";import"./isEqual-pZu_mXsq.js";import"./isObject-D9rv0iqM.js";import"./Button-Vd6i0l0Q.js";import"./ActionButton-CiKP957w.js";import"./Checkbox-LzD7Gmps.js";import"./useValueChanged-BOD5Ipb1.js";import"./CollapsiblePanel-ByD8C8BM.js";import"./MultiColumnSortDialog-BMBXPIgU.js";import"./MenuTrigger-C_MB1mN0.js";import"./CompositeItem-B9-jPotu.js";import"./ToolbarRootContext-DJ0l6Br3.js";import"./getDisabledMountTransitionStyles-BeozZc0x.js";import"./getPseudoElementBounds-CcNhJNm5.js";import"./chevron-down-CXwEWINw.js";import"./index-BTqp2ZX9.js";import"./error-qjyqUuKF.js";import"./BaseCbacBanner-Cfyu_NmC.js";import"./makeExternalStore-DkFvLNvv.js";import"./Tooltip-B4JCaEcf.js";import"./PopoverPopup-Bxfhqbd6.js";import"./toNumber-jxE6Z19Y.js";import"./chevron-right-CjQseNaT.js";import"./tick-C-hv7xxG.js";import"./DropdownField-BmQfSDBK.js";import"./withOsdkMetrics-BzKJ-zlS.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
