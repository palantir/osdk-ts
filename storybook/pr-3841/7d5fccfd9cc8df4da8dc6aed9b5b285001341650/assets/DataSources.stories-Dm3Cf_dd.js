import{j as r}from"./iframe-BkXStBnn.js";import{O as b}from"./object-table-0OskJlcP.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B_0yPQ1v.js";import{u as g}from"./useOsdkClient-B0RQ_x0Y.js";import"./preload-helper-C6eJ-LAJ.js";import"./Table-BsaDm4T0.js";import"./index-CQxVyxO9.js";import"./Dialog-CEWZog5k.js";import"./cross-kW0EKRmx.js";import"./svgIconContainer-BOZhbAbH.js";import"./useBaseUiId-96F5yHVy.js";import"./InternalBackdrop-BdYFQb3t.js";import"./composite-DEOhu-ZQ.js";import"./index-CtVGck09.js";import"./index-CDh6F1Zg.js";import"./index-C4IkCmST.js";import"./useEventCallback-CH-hvduU.js";import"./SkeletonBar-Ctttl4g0.js";import"./LoadingCell-DC3q_kaJ.js";import"./ColumnConfigDialog-CDTeYQKc.js";import"./DraggableList-BYNJ4Xog.js";import"./search-BVUjqmoy.js";import"./Input-DxDpsYC6.js";import"./useControlled-Bs-hAIWu.js";import"./Button-tcqZupxX.js";import"./small-cross-Sg31I6zP.js";import"./ActionButton-Cf5BY1g0.js";import"./Checkbox-DqQ0vsU_.js";import"./useValueChanged-HslFxBcd.js";import"./CollapsiblePanel-ddkAZxfQ.js";import"./MultiColumnSortDialog-B08XNyF_.js";import"./MenuTrigger-Cv8msX7x.js";import"./CompositeItem-CqdHioqm.js";import"./ToolbarRootContext-CPU8X__7.js";import"./getDisabledMountTransitionStyles-583SAe4r.js";import"./getPseudoElementBounds-C11mWzsA.js";import"./chevron-down-BqO1VsFu.js";import"./index-mxwJCmPs.js";import"./error-BWtJwOh6.js";import"./BaseCbacBanner-DW10jlbi.js";import"./makeExternalStore-D61zLkvo.js";import"./Tooltip-COBqsjpT.js";import"./PopoverPopup-CSkaVaIl.js";import"./debounce-D3smnzmF.js";import"./tick-Bd8vtLY5.js";import"./DropdownField-CuSoYmnK.js";import"./isEqual-N3GxBSAA.js";import"./withOsdkMetrics-CndFlT5a.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
