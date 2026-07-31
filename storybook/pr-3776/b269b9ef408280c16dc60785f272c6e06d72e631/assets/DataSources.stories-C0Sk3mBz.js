import{j as r}from"./iframe-BIlQe-_e.js";import{O as b}from"./object-table-Bebvc8ca.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Be4Z2EoD.js";import{u as g}from"./useOsdkClient-Cv8dxDy4.js";import"./preload-helper-BFh2Wy6v.js";import"./Table-BWx_Tlsd.js";import"./index-DyQxAk9R.js";import"./Dialog-RpHf0uzn.js";import"./cross-CmtgrNNa.js";import"./svgIconContainer-CnLOcakL.js";import"./useBaseUiId-Lc4z0DNa.js";import"./InternalBackdrop-D0_cKxNn.js";import"./composite-CXGKVIWm.js";import"./index-KCNI5t5s.js";import"./index-DpNXYgWj.js";import"./index-HpxznOGw.js";import"./useEventCallback-BUux2rPj.js";import"./SkeletonBar-DdTqPQUn.js";import"./LoadingCell-DDRHLt1N.js";import"./ColumnConfigDialog-Jac7HBrJ.js";import"./DraggableList-Be3rI4xp.js";import"./search-CvXaJDz5.js";import"./Input-DUUbREQT.js";import"./useControlled-BXHG-GT_.js";import"./isEqual-CysZ8GPX.js";import"./isObject-KXgKHR5w.js";import"./Button-BIbJzGLK.js";import"./ActionButton-CyvzC9uY.js";import"./Checkbox-BCZr5C4i.js";import"./useValueChanged-u9UTocIj.js";import"./CollapsiblePanel-B0R9sRzS.js";import"./MultiColumnSortDialog-BvJABZRG.js";import"./MenuTrigger-BrM5S858.js";import"./CompositeItem-CMnAuhM-.js";import"./ToolbarRootContext-BiHeKQZa.js";import"./getDisabledMountTransitionStyles-BLsKgdzx.js";import"./getPseudoElementBounds-M2Ec4uwN.js";import"./chevron-down-CkrYyXCx.js";import"./index-D1LAJk1I.js";import"./error-BCCPbpND.js";import"./BaseCbacBanner-DGsBlBEg.js";import"./makeExternalStore-Dm1wHibL.js";import"./Tooltip-DLimuesN.js";import"./PopoverPopup-DhXjlyY4.js";import"./toNumber-DGKs9c9J.js";import"./tick-BK1SF6OQ.js";import"./DropdownField-CmlfBBm0.js";import"./withOsdkMetrics-DGZYkXqG.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
