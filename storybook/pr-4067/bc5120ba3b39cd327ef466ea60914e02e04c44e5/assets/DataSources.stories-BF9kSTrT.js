import{j as r}from"./iframe-eyZPO-r8.js";import{O as b}from"./object-table-DngYOc4G.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BCMEElbQ.js";import{u as g}from"./useOsdkClient-DpWMI8Fp.js";import"./preload-helper-D1V99eN4.js";import"./Table-dxXXc1zF.js";import"./index-Gdnr7hdE.js";import"./Dialog-DF5CklX0.js";import"./cross-BDtR8km0.js";import"./svgIconContainer-BYYEkT6q.js";import"./useBaseUiId-DuycL1XH.js";import"./InternalBackdrop-47eHZtxY.js";import"./composite-BQIBWjV1.js";import"./index-BW1bbNNA.js";import"./index-BSykaiWk.js";import"./index-DQ49IRLG.js";import"./useEventCallback-0WugJweh.js";import"./SkeletonBar-Czp6H1QV.js";import"./LoadingCell-D5uFu_3a.js";import"./ColumnConfigDialog-DA84oAQ9.js";import"./DraggableList-h1DTHUPL.js";import"./search-C_tBHa91.js";import"./Input-CwJlG5HX.js";import"./useControlled-RnivCiUR.js";import"./Button-DYsGegFs.js";import"./small-cross-DM_xhuPC.js";import"./ActionButton-DepzqUcv.js";import"./Checkbox-ByNijBVh.js";import"./useValueChanged-gzjrwQir.js";import"./CollapsiblePanel-CpdU7F-n.js";import"./MultiColumnSortDialog-DNlGctld.js";import"./MenuTrigger-Ddng4r_f.js";import"./CompositeItem-D72MffoG.js";import"./ToolbarRootContext-DsL0BSnt.js";import"./getDisabledMountTransitionStyles-D1KI5R6m.js";import"./getPseudoElementBounds-DGpPk1TO.js";import"./chevron-down-C6BwuTUh.js";import"./index-Dhfw8vgu.js";import"./error-vxQVtw9f.js";import"./BaseCbacBanner-K41hGtlu.js";import"./makeExternalStore-TlPHbOId.js";import"./Tooltip-UpAI-IXV.js";import"./PopoverPopup-D20NUS2f.js";import"./debounce-DpI20L6M.js";import"./tick-DL7gzaWC.js";import"./DropdownField-B28WZREh.js";import"./isEqual-fw4VSZCU.js";import"./withOsdkMetrics-O_Dwj_Kt.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
