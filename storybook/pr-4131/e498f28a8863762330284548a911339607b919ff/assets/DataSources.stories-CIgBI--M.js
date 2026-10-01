import{j as r}from"./iframe-Cq4acRIY.js";import{O as b}from"./object-table-DuMafEqP.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bu64gw7E.js";import{u as g}from"./useOsdkClient-B_yscWOF.js";import"./preload-helper-MAyNwQdY.js";import"./Table-Do8VfApl.js";import"./index-6eoOxZ40.js";import"./Dialog-OrHvj4CR.js";import"./cross-DLXEiws_.js";import"./svgIconContainer-BeKF9m8R.js";import"./useBaseUiId-Bjm3kLfn.js";import"./InternalBackdrop-ZRlsvZtW.js";import"./composite-Bn47_cTN.js";import"./index-DrCCi1us.js";import"./index-Dc9EpWSo.js";import"./index-B7t6srrF.js";import"./useEventCallback-CADbmtD_.js";import"./SkeletonBar-C0SjzaHH.js";import"./LoadingCell-BfDvBYY_.js";import"./ColumnConfigDialog-CJEry8HR.js";import"./DraggableList-CAPWhBBo.js";import"./search-CRBn2Ssp.js";import"./Input-X1xzUJ9h.js";import"./useControlled-BhrnnSyx.js";import"./Button-w2RzDLnC.js";import"./small-cross-wqGzzNw8.js";import"./ActionButton-_1SeHqVp.js";import"./Checkbox-CoM_pVH5.js";import"./useValueChanged-C3a9CBJ-.js";import"./CollapsiblePanel-CikQJlXN.js";import"./MultiColumnSortDialog-BWH4pc3f.js";import"./MenuTrigger-fgadhFvO.js";import"./CompositeItem-C3jCGG7J.js";import"./ToolbarRootContext-sZwDlHkO.js";import"./getDisabledMountTransitionStyles-BpVDf7Q-.js";import"./getPseudoElementBounds-ChlKB1vb.js";import"./chevron-down-CdL9km5b.js";import"./index-BZTiDrQp.js";import"./error-CIJkAMmO.js";import"./BaseCbacBanner-C7IyRrIS.js";import"./makeExternalStore-dDHEgDbO.js";import"./Tooltip-DDRhmX6J.js";import"./PopoverPopup-D_YXiba0.js";import"./debounce-h0anxrhI.js";import"./tick-BjD_cp-Z.js";import"./DropdownField-Dr1qUQl2.js";import"./isEqual-BWalVZoe.js";import"./withOsdkMetrics-DB5TXya2.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
