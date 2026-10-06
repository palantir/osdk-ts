import{j as r}from"./iframe-C-FIv6o_.js";import{O as b}from"./object-table-BR87vr8J.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B2mwPOA1.js";import{u as g}from"./useOsdkClient-Bg9loZzt.js";import"./preload-helper-BlbsPBXS.js";import"./Table-CBWq0j-k.js";import"./index-DiYvs7cZ.js";import"./Dialog-CyW6OFQd.js";import"./cross-D6R41ZsP.js";import"./svgIconContainer-CH0vCO_z.js";import"./useBaseUiId-8fHz63fW.js";import"./InternalBackdrop-BUgLvfLu.js";import"./composite-DY-2h9J_.js";import"./index-B0FBWnJm.js";import"./index-Bbgv3w0b.js";import"./index-RlrlxoXZ.js";import"./useEventCallback-D7-_pjQT.js";import"./SkeletonBar-CqlWLlhL.js";import"./LoadingCell-B_YSRND_.js";import"./ColumnConfigDialog-50fShswv.js";import"./DraggableList-Dt_d4Esq.js";import"./search-kQP18GK_.js";import"./Input-BU1-9D_8.js";import"./useControlled-CSYe1hyF.js";import"./Button-CDwEbwO9.js";import"./small-cross-L8XNZVST.js";import"./ActionButton-Bqe7jk2Y.js";import"./Checkbox-DJeoxJY1.js";import"./useValueChanged-kbkB87xa.js";import"./CollapsiblePanel-BelOvsl6.js";import"./MultiColumnSortDialog-D1ECuTCa.js";import"./MenuTrigger-CY0Gj9Qo.js";import"./CompositeItem-C0WJbRI5.js";import"./ToolbarRootContext-Kc9KsJC5.js";import"./getDisabledMountTransitionStyles-BT087-qm.js";import"./getPseudoElementBounds-CNOiwK5k.js";import"./chevron-down-CGWHDi30.js";import"./index-CqnCJeYa.js";import"./error-BRmo5GmE.js";import"./BaseCbacBanner-BJugMq6i.js";import"./makeExternalStore-DtEBDbfK.js";import"./Tooltip-WyT2Q4mR.js";import"./PopoverPopup-BCj1y_R3.js";import"./debounce-UNygtkmW.js";import"./tick-q20xBySf.js";import"./DropdownField-DG5FyFzv.js";import"./isEqual-CFBwihmD.js";import"./withOsdkMetrics-CUO4ZO-M.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
