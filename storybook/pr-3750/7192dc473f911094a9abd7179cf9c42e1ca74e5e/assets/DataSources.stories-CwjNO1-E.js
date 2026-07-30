import{j as r}from"./iframe-FyhVxTrk.js";import{O as b}from"./object-table-B-v3OglS.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B2OKPAOx.js";import{u as g}from"./useOsdkClient-CrxPmQPb.js";import"./preload-helper-Dgs_n9Dy.js";import"./Table-BrVoT8y3.js";import"./index-CXzmbyfT.js";import"./Dialog-ADhD3aFg.js";import"./cross-DPb3Lanf.js";import"./svgIconContainer-mVuSeb5R.js";import"./useBaseUiId-BsG-Zm5E.js";import"./InternalBackdrop-lcLk2Gq9.js";import"./composite-DaCZVCOl.js";import"./index-DRvakaoR.js";import"./index-BcB9qF6v.js";import"./index-DZEBmZlt.js";import"./useEventCallback-CS4xnGaY.js";import"./SkeletonBar-vBALGr9N.js";import"./LoadingCell-D_pAN0sa.js";import"./ColumnConfigDialog-Idwcyfol.js";import"./DraggableList-BP9Ko5QT.js";import"./search-CtSjt_Wn.js";import"./Input-CqlCBTmB.js";import"./useControlled-qW1tEB03.js";import"./isEqual-DKIpiXeA.js";import"./isObject-BX6l97k5.js";import"./Button-DZSjklBP.js";import"./ActionButton-DtPXi7bs.js";import"./Checkbox-CYpeO19Y.js";import"./useValueChanged-IvYOrVB3.js";import"./CollapsiblePanel-BDVhZGI8.js";import"./MultiColumnSortDialog-RxvuixfL.js";import"./MenuTrigger-FabbnfzY.js";import"./CompositeItem-D8I-jjeP.js";import"./ToolbarRootContext-_joG3CJi.js";import"./getDisabledMountTransitionStyles-D_8DEOz8.js";import"./getPseudoElementBounds-CQ3XjkJ4.js";import"./chevron-down-Dm-2k2rq.js";import"./index-CXhL9gtU.js";import"./error-BlFFjo7T.js";import"./BaseCbacBanner-BDIpvw6L.js";import"./makeExternalStore-nNw6ACoo.js";import"./Tooltip-B1BshqRw.js";import"./PopoverPopup-V8zfBt9y.js";import"./toNumber-Cys5SJht.js";import"./tick-B8Sdc5b8.js";import"./DropdownField-DLlzMdB9.js";import"./withOsdkMetrics-BYmyRLlT.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
