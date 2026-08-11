import{j as r}from"./iframe-BB2E5Jix.js";import{O as b}from"./object-table-Cq8EQafa.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-KiyRETm-.js";import{u as g}from"./useOsdkClient-CtNTkVn8.js";import"./preload-helper-XstBZj0v.js";import"./Table-C_RaYKNB.js";import"./index-zGb1pbmH.js";import"./Dialog-Caobyqao.js";import"./cross-B8YgiCYl.js";import"./svgIconContainer-CXjFTKQc.js";import"./useBaseUiId-T8MHyWrJ.js";import"./InternalBackdrop-BU8oV8wN.js";import"./composite-DQwmFGUd.js";import"./index-Cft78AYh.js";import"./index-CLogktU3.js";import"./index-CDZCasWv.js";import"./useEventCallback-bXtnurx0.js";import"./SkeletonBar-DOM6sWKN.js";import"./LoadingCell-CEE6ECLC.js";import"./ColumnConfigDialog-i_CcXCPU.js";import"./DraggableList-B4O4-Uk4.js";import"./search-DPNy6EUf.js";import"./Input-vhcxgD7F.js";import"./useControlled-4jwl_yb5.js";import"./isEqual-DpkjvpyX.js";import"./isObject-cuWUV_SB.js";import"./Button-JlhJjdd0.js";import"./ActionButton-DzEBxPTA.js";import"./Checkbox-BQydhIvd.js";import"./useValueChanged-C37wvZ3p.js";import"./CollapsiblePanel-Dz0U_34e.js";import"./MultiColumnSortDialog-D_m8j8zj.js";import"./MenuTrigger-CS3ve4y6.js";import"./CompositeItem-Cc57-add.js";import"./ToolbarRootContext-VydJXhkq.js";import"./getDisabledMountTransitionStyles-TDufTSfj.js";import"./getPseudoElementBounds-ZgCYbSXN.js";import"./chevron-down-C_RItkCu.js";import"./index-D-e5E8TN.js";import"./error-DMB-1Uz3.js";import"./BaseCbacBanner-D-RccEMB.js";import"./makeExternalStore-D2tsWs0v.js";import"./Tooltip-DzUvJnVd.js";import"./PopoverPopup-CCnnPXu2.js";import"./toNumber-DxI2SU5x.js";import"./tick-vmRc4WsE.js";import"./DropdownField-5ckOa_G6.js";import"./withOsdkMetrics-D-4z6JPU.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
