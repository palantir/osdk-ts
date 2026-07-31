import{j as r}from"./iframe-Bf2U0wCC.js";import{O as b}from"./object-table-OXNT7OpI.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cj5sZLKw.js";import{u as g}from"./useOsdkClient-RXDPaXmq.js";import"./preload-helper-B7BTsDqe.js";import"./Table-CwvnrNvY.js";import"./index-DTioBO_V.js";import"./Dialog-C61hzq8j.js";import"./cross-DV8e5TBd.js";import"./svgIconContainer-DpvB8Y2n.js";import"./useBaseUiId-9mx6zIx7.js";import"./InternalBackdrop-BILNsdtA.js";import"./composite-CuGbenFt.js";import"./index-CCvKupVl.js";import"./index-B_wOLzlx.js";import"./index-BxK_xSmV.js";import"./useEventCallback-DSQicMgE.js";import"./SkeletonBar-DBSEcPZi.js";import"./LoadingCell-Cojawg0b.js";import"./ColumnConfigDialog-BnX62pS1.js";import"./DraggableList--16cOjqh.js";import"./search-CSich7qy.js";import"./Input-DHFhxehL.js";import"./useControlled-Bdm8AXhj.js";import"./isEqual-CFr-5M8s.js";import"./isObject-BT7OCmwv.js";import"./Button-ZT6AtrIL.js";import"./ActionButton-Bg9xuvsN.js";import"./Checkbox-MaMlRZpO.js";import"./useValueChanged-CQlo19Nx.js";import"./CollapsiblePanel-CCStv30f.js";import"./MultiColumnSortDialog-BuhrcQLV.js";import"./MenuTrigger-RlWUsL5i.js";import"./CompositeItem-IczX1adk.js";import"./ToolbarRootContext-DJE5EDVH.js";import"./getDisabledMountTransitionStyles-C8Ps9vte.js";import"./getPseudoElementBounds-DeTAVI5M.js";import"./chevron-down-CYc3xdZN.js";import"./index-xzJ-XSgN.js";import"./error-p0-ItGgy.js";import"./BaseCbacBanner-DaYGAsYZ.js";import"./makeExternalStore-SEqUXvVt.js";import"./Tooltip-CjVk8_-5.js";import"./PopoverPopup-DoSXd954.js";import"./toNumber-B_n9-lZk.js";import"./tick-DoAEo7vC.js";import"./DropdownField-C_x97BWO.js";import"./withOsdkMetrics-DiupHODT.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
