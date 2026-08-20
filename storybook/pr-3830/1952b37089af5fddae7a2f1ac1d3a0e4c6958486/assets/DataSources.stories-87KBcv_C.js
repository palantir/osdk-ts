import{j as r}from"./iframe-4oHGkuTU.js";import{O as b}from"./object-table-ChWef5YK.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C-5sN9Oh.js";import{u as g}from"./useOsdkClient-MPynvfJk.js";import"./preload-helper-CaPHuCn3.js";import"./Table-DjySsBqf.js";import"./index-kQMuiEEZ.js";import"./Dialog-BwJ3bvLD.js";import"./cross-CS-E3Jqr.js";import"./svgIconContainer-BYtzLwSJ.js";import"./useBaseUiId-L69EryzD.js";import"./InternalBackdrop-DLQ-XQ1Q.js";import"./composite-DvY8KKq7.js";import"./index-CdFiVlz_.js";import"./index-MlSSfkvS.js";import"./index-hJLvGUeE.js";import"./useEventCallback-B3dipcxV.js";import"./SkeletonBar-3byQ7UIl.js";import"./LoadingCell-CrrCVNnE.js";import"./ColumnConfigDialog-BdR0qbLi.js";import"./DraggableList-SUPZ4Dlf.js";import"./search-CzC2mfci.js";import"./Input-CMGw5uoM.js";import"./useControlled-DqhxuUIS.js";import"./isEqual-Bt8_Qt01.js";import"./isObject-3f4cHVEZ.js";import"./Button-DuiD40L5.js";import"./ActionButton-B0hzXAbp.js";import"./Checkbox-Bgc8LYUw.js";import"./useValueChanged-D4XGILHx.js";import"./CollapsiblePanel-BF1Z7bkI.js";import"./MultiColumnSortDialog-TWdhu7PG.js";import"./MenuTrigger-BeH_kL2c.js";import"./CompositeItem-Bws-ThTH.js";import"./ToolbarRootContext-Dnje_Y91.js";import"./getDisabledMountTransitionStyles-XzcSIywQ.js";import"./getPseudoElementBounds-DYKFGKba.js";import"./chevron-down-BAfkw_KU.js";import"./index-BCA2Tmmy.js";import"./error-XGL3A7TA.js";import"./BaseCbacBanner-B9E0Bt9v.js";import"./makeExternalStore-DF89X3xe.js";import"./Tooltip-KVrRIRvv.js";import"./PopoverPopup-BUWPqtBC.js";import"./toNumber-DRlo2dDs.js";import"./tick-CoWZRvKt.js";import"./DropdownField-Bqc45FPs.js";import"./withOsdkMetrics-C3D8HdW9.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
