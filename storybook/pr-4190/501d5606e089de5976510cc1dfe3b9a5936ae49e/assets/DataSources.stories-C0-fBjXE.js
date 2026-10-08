import{j as r}from"./iframe-BaqisVl-.js";import{O as b}from"./object-table-N9TioOP6.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-TTd-lgx4.js";import{u as g}from"./useOsdkClient-D7dXXw4f.js";import"./preload-helper-BNi0jLvn.js";import"./Table-CmYmfT6c.js";import"./index-DsJxcxuD.js";import"./Dialog-EoiXNhL7.js";import"./cross-NcNTP23a.js";import"./svgIconContainer-TSbWa_lF.js";import"./useBaseUiId-CZNOvWOX.js";import"./InternalBackdrop-up968Klp.js";import"./composite-DaM8qI8D.js";import"./index-DVQ_HGj7.js";import"./index-Dku8OroJ.js";import"./index-A62OeQPQ.js";import"./useEventCallback-DY-p_fZ5.js";import"./SkeletonBar-fHefpQx1.js";import"./LoadingCell-CZn5d-3r.js";import"./ColumnConfigDialog-mI5vm6MR.js";import"./DraggableList-CT2mXdMy.js";import"./search-xoA6p7gs.js";import"./Input-CegZe646.js";import"./useControlled-CryTPf8E.js";import"./Button-BTfyWfru.js";import"./small-cross-BYjsDC9b.js";import"./ActionButton-Cn9rIuq9.js";import"./Checkbox-xYsvmbaU.js";import"./useValueChanged-CZOqhP_j.js";import"./CollapsiblePanel-D6lMZr7T.js";import"./MultiColumnSortDialog-q0IiDNWX.js";import"./MenuTrigger-Cu7J25is.js";import"./CompositeItem-oqc0csOw.js";import"./ToolbarRootContext-DvsCcilH.js";import"./getDisabledMountTransitionStyles-CHGeqOic.js";import"./getPseudoElementBounds-BGR3l_iX.js";import"./chevron-down-DUYAtgkB.js";import"./index-fm-M8VrQ.js";import"./error-USmwsDsu.js";import"./BaseCbacBanner-CUsDT1Gr.js";import"./makeExternalStore-DaHYiupK.js";import"./Tooltip-Cy4Rx_YN.js";import"./PopoverPopup-BpgX9bSu.js";import"./debounce-BYezYolD.js";import"./tick-Sp8vA4eE.js";import"./DropdownField-S_mE2t2D.js";import"./isEqual-eVn1E-7x.js";import"./withOsdkMetrics-CQLdSUZI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
