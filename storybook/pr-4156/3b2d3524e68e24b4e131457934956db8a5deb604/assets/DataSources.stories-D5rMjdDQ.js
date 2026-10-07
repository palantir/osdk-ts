import{j as r}from"./iframe-BzHLIdAf.js";import{O as b}from"./object-table-DM37Km92.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D0rw0p7t.js";import{u as g}from"./useOsdkClient-Dieuw0cs.js";import"./preload-helper-C5EK4nFx.js";import"./Table-Bx5wVz4e.js";import"./index-tkfEcbGy.js";import"./Dialog-CDFlmzSQ.js";import"./cross-DFzeXQKN.js";import"./svgIconContainer-yN9N03QS.js";import"./useBaseUiId-DulnEBx2.js";import"./InternalBackdrop-BJGg8Bd5.js";import"./composite-C-vnMrHU.js";import"./index-BTFfBOqo.js";import"./index-B3AMqERT.js";import"./index-CZRv-oVY.js";import"./useEventCallback-D-Rcflfy.js";import"./SkeletonBar-NMHUoGf4.js";import"./LoadingCell-IPG9IyHM.js";import"./ColumnConfigDialog-DjP6HMk4.js";import"./DraggableList-Bcq6r3-A.js";import"./search-BBdM6dRe.js";import"./Input-DD8tFxDd.js";import"./useControlled-BUD4_K19.js";import"./Button-oOxpuNBl.js";import"./small-cross-BOLwRIx5.js";import"./ActionButton-CMQ5G7Nn.js";import"./Checkbox-C-2irHoe.js";import"./useValueChanged-BsO1IbSa.js";import"./CollapsiblePanel-D5VJxf2v.js";import"./MultiColumnSortDialog-D8F2KFw1.js";import"./MenuTrigger-SEsNi6ut.js";import"./CompositeItem-DoI0Nlr7.js";import"./ToolbarRootContext-DfZ85ISE.js";import"./getDisabledMountTransitionStyles-BMhngEHI.js";import"./getPseudoElementBounds-DzacU-6p.js";import"./chevron-down-C3-VW8uJ.js";import"./index-CNDpcyk6.js";import"./error-DnjCL8vD.js";import"./BaseCbacBanner-rRooezu9.js";import"./makeExternalStore-CzyuozHX.js";import"./Tooltip-D66jiuuz.js";import"./PopoverPopup-DottMH45.js";import"./debounce-B7Bw7NEb.js";import"./tick-qy3966gs.js";import"./DropdownField-DXwIrhJq.js";import"./isEqual-CyjIJqdd.js";import"./withOsdkMetrics-C6AsUlOu.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
