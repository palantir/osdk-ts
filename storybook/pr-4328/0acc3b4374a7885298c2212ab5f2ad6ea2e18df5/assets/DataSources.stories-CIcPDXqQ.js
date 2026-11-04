import{j as r}from"./iframe-DhySATRv.js";import{O as b}from"./object-table-Dg9P2Yk8.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CnDXz4eK.js";import{u as g}from"./useOsdkClient-pvjD5f0f.js";import"./preload-helper-QnXVdlsZ.js";import"./Table-t5xUN4F0.js";import"./index-By0zFJXy.js";import"./Dialog-C9NeFGTs.js";import"./cross-dxd-Id56.js";import"./svgIconContainer-DPn7rviW.js";import"./useBaseUiId-CczNNmwY.js";import"./InternalBackdrop-CxgZaxwU.js";import"./composite-B7Q8k8Y1.js";import"./index-B5HI7DFW.js";import"./index-HQYJE3H_.js";import"./index-DxlsOiTd.js";import"./useEventCallback-DopCgfn9.js";import"./SkeletonBar-BpKKsUbf.js";import"./LoadingCell-D4H1GvHL.js";import"./ColumnConfigDialog-TpCke5_n.js";import"./DraggableList-Dietnrk6.js";import"./search-3iLspLPL.js";import"./Input-BQwljXsc.js";import"./useControlled-C3JFQqTN.js";import"./Button-BnJ18iND.js";import"./small-cross-CMpAYwo5.js";import"./ActionButton-DQQo_XtV.js";import"./Checkbox-CW7GlZ7a.js";import"./useValueChanged-Ct8XmU90.js";import"./CollapsiblePanel-Ddch5XBZ.js";import"./MultiColumnSortDialog-CGMuYggC.js";import"./MenuTrigger-dr45N3ay.js";import"./CompositeItem-CfgwqBcM.js";import"./ToolbarRootContext-COgLrlEX.js";import"./getDisabledMountTransitionStyles-PwdtwQyf.js";import"./getPseudoElementBounds-Csujpg1_.js";import"./chevron-down-dCWUIGnY.js";import"./index-C3T_yKoM.js";import"./error-DzMg1FzE.js";import"./BaseCbacBanner-BOiizU5d.js";import"./makeExternalStore-CM9PbEJi.js";import"./Tooltip-bRJHJ7Na.js";import"./PopoverPopup-BgCnKoSq.js";import"./debounce-DycsTy32.js";import"./tick-CP0_BxF4.js";import"./DropdownField-CUm8Lr1l.js";import"./isEqual-CdMQL4gS.js";import"./withOsdkMetrics-B8-SwDYi.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
