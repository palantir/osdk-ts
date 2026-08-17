import{j as r}from"./iframe-UYCLthTQ.js";import{O as b}from"./object-table-DImQuH9S.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BWlW24iF.js";import{u as g}from"./useOsdkClient-DMikbfnK.js";import"./preload-helper-Dz4E7M7Q.js";import"./Table-C2TWF7Cq.js";import"./index-D9-cjch2.js";import"./Dialog-DuoePkOB.js";import"./cross-BTIlSghM.js";import"./svgIconContainer-CSCo4VbW.js";import"./useBaseUiId-D_3Zahva.js";import"./InternalBackdrop-D-QyvJBW.js";import"./composite-CoPLS_PY.js";import"./index-MvHsJMCi.js";import"./index-CwqHoYwn.js";import"./index-DG3Dj0nZ.js";import"./useEventCallback-Dy795WfC.js";import"./SkeletonBar-Q06YcXYq.js";import"./LoadingCell-B2uS_rBv.js";import"./ColumnConfigDialog-xbncks_W.js";import"./DraggableList-5C_-7pLf.js";import"./search-O4v6z_KC.js";import"./Input-CEJvZIVl.js";import"./useControlled-BsiMxbV4.js";import"./Button-D_NPrqs2.js";import"./small-cross-DhT3GGuR.js";import"./ActionButton-bRkldw58.js";import"./Checkbox-qaZlBavv.js";import"./useValueChanged-TyLqj8UB.js";import"./CollapsiblePanel-C1s-WFkA.js";import"./MultiColumnSortDialog-CmD2Or6u.js";import"./MenuTrigger-DsIXfpa7.js";import"./CompositeItem-C4gD3gl2.js";import"./ToolbarRootContext-Dz0u6CZi.js";import"./getDisabledMountTransitionStyles-xim2gtNb.js";import"./getPseudoElementBounds-CgjC-nms.js";import"./chevron-down-CsxN-uGL.js";import"./index-DSgxSOB9.js";import"./error-Lq_gB-8h.js";import"./BaseCbacBanner-CT4YrDi4.js";import"./makeExternalStore-DTCTUDfU.js";import"./Tooltip-C6Y1hCeK.js";import"./PopoverPopup-hS14Tedr.js";import"./debounce-C6pOncFn.js";import"./tick-BIgTeca4.js";import"./DropdownField-BWwVTe4_.js";import"./isEqual-F9ZP9YZl.js";import"./withOsdkMetrics-CbCyTjOI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
