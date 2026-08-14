import{j as r}from"./iframe-d99A6dy_.js";import{O as b}from"./object-table-C7TY-3bM.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CB-ChmVM.js";import{u as g}from"./useOsdkClient-BnBrjcrv.js";import"./preload-helper-BXXDbSLQ.js";import"./Table-CeT-_8Ox.js";import"./index-BvI0aYJU.js";import"./Dialog-C6_bQNum.js";import"./cross-dpi7xDM4.js";import"./svgIconContainer-CQFp9MIY.js";import"./useBaseUiId-DayFylep.js";import"./InternalBackdrop-CxjRJGo6.js";import"./composite-C_nWduZ1.js";import"./index-BipUzWZ7.js";import"./index-DpKUv_nP.js";import"./index-BFHEfbX0.js";import"./useEventCallback-BZIld91o.js";import"./SkeletonBar-DvniVmoI.js";import"./LoadingCell-BYLKl2re.js";import"./ColumnConfigDialog-DmLzPquA.js";import"./DraggableList-CvSkJVI6.js";import"./search-xcjteEAF.js";import"./Input-CwRTaEny.js";import"./useControlled-Res_vZF_.js";import"./Button-Bf5OJd4p.js";import"./small-cross-tWK-qLVG.js";import"./ActionButton-Dve-I_eb.js";import"./Checkbox-CIfmLG1g.js";import"./useValueChanged-EljjLCKw.js";import"./CollapsiblePanel-CahgaKO0.js";import"./MultiColumnSortDialog-CiLqOVe8.js";import"./MenuTrigger-DlcywJGy.js";import"./CompositeItem-CY0DaOXF.js";import"./ToolbarRootContext-BBcTGc1X.js";import"./getDisabledMountTransitionStyles-HxJED5q5.js";import"./getPseudoElementBounds-DVouIeC5.js";import"./chevron-down-CUgj8iAn.js";import"./index-B0OryjOF.js";import"./error-CXkBkCdL.js";import"./BaseCbacBanner-CgJ8nVGX.js";import"./makeExternalStore-CUVJJI81.js";import"./Tooltip-C86asDC4.js";import"./PopoverPopup-FEDh9MTo.js";import"./debounce-BT80FcB7.js";import"./tick-Cyn0w1xj.js";import"./DropdownField-D4Vkiu6d.js";import"./isEqual-DtfrX9Au.js";import"./withOsdkMetrics-k5Ap-NK7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
