import{j as r}from"./iframe-BrTF0wQy.js";import{O as b}from"./object-table-CgrulwW1.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dk69zR0U.js";import{u as g}from"./useOsdkClient-CbbaCk5h.js";import"./preload-helper-BrgL7riq.js";import"./Table-D8WRhJfJ.js";import"./index-CLIofpuq.js";import"./Dialog-CIyT0sDx.js";import"./cross-Dlqc_1ZY.js";import"./svgIconContainer-_Twg2KpW.js";import"./useBaseUiId-paQZpqMq.js";import"./InternalBackdrop-DTqnKF8D.js";import"./composite-CeMPnKRZ.js";import"./index-D3SuSheR.js";import"./index-nFJUSH9O.js";import"./index-BWpmmqhl.js";import"./useEventCallback-VkT7yqal.js";import"./SkeletonBar-BHt2XqQp.js";import"./LoadingCell-BYbY2f0u.js";import"./ColumnConfigDialog-CqVp89in.js";import"./DraggableList-BekO45lD.js";import"./search-CqSH1asp.js";import"./Input-BxbCwGL8.js";import"./useControlled-DhGBxpYo.js";import"./Button-BnRJeVMr.js";import"./small-cross-aXc1L9EQ.js";import"./ActionButton-C44yj7_9.js";import"./Checkbox-9FLkIUOf.js";import"./useValueChanged-BughKinG.js";import"./CollapsiblePanel-D86cBPU8.js";import"./MultiColumnSortDialog-CrH_UI_g.js";import"./MenuTrigger-JJndQNlM.js";import"./CompositeItem-Cz4Nt1SP.js";import"./ToolbarRootContext-vcL9onuR.js";import"./getDisabledMountTransitionStyles-BNArIVjE.js";import"./getPseudoElementBounds-_r6Nu2cP.js";import"./chevron-down-K7i3qdrh.js";import"./index-D3KaSgKX.js";import"./error-Csk-3gAP.js";import"./BaseCbacBanner-ewOQcDaW.js";import"./makeExternalStore-BDEao_Ea.js";import"./Tooltip-49_4-YPv.js";import"./PopoverPopup-CXeUmeNO.js";import"./debounce-DdMg5vR0.js";import"./tick-Bd4yE76w.js";import"./DropdownField-BdwvDz8K.js";import"./isEqual-BRp4klEC.js";import"./withOsdkMetrics-DXsXQf0j.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
