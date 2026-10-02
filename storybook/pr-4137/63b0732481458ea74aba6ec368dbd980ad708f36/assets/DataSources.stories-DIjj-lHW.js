import{j as r}from"./iframe-CgaQrvJX.js";import{O as b}from"./object-table-zWPUlTUx.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BtVeBhIZ.js";import{u as g}from"./useOsdkClient-DwCcA5xy.js";import"./preload-helper-B2Xmrc95.js";import"./Table-Bu9LGKjn.js";import"./index-Bzmlqe5w.js";import"./Dialog-CMx2bEhz.js";import"./cross-IeILlXDu.js";import"./svgIconContainer-DNetVQYr.js";import"./useBaseUiId-CIjmtvYO.js";import"./InternalBackdrop-BkdT6um9.js";import"./composite-B-SLP__V.js";import"./index-BwSc5cdS.js";import"./index-D_yqZm0V.js";import"./index-DUXtr9cN.js";import"./useEventCallback-CByTzmdM.js";import"./SkeletonBar-DLIA_RTq.js";import"./LoadingCell-BVf_3OyH.js";import"./ColumnConfigDialog-DPr1PGC7.js";import"./DraggableList-Ve3W3f6x.js";import"./search-BUTYKFlQ.js";import"./Input-DQR44Pu5.js";import"./useControlled-A1Soqi4e.js";import"./Button-BWSgruJ1.js";import"./small-cross-CClz0VbI.js";import"./ActionButton-B7LnHlzj.js";import"./Checkbox-d7IFsgOk.js";import"./useValueChanged-BNtiYy3l.js";import"./CollapsiblePanel-B7VLrLlP.js";import"./MultiColumnSortDialog-CYrgn_ax.js";import"./MenuTrigger-CiC5_Yxk.js";import"./CompositeItem-Dxj4Vwhq.js";import"./ToolbarRootContext-YVP2LXfw.js";import"./getDisabledMountTransitionStyles-BSI6iR4W.js";import"./getPseudoElementBounds-BD_yj4W1.js";import"./chevron-down-BU6VTUzE.js";import"./index-CTmg82ji.js";import"./error-DP9sVVUg.js";import"./BaseCbacBanner-BFsdrnBM.js";import"./makeExternalStore-BVbHcjBk.js";import"./Tooltip-C2TlaiS-.js";import"./PopoverPopup-CZsknx9j.js";import"./debounce-BrOWPCnK.js";import"./tick-Q1XgvJo3.js";import"./DropdownField-CwkJQmwG.js";import"./isEqual-B2SNskwK.js";import"./withOsdkMetrics-C3kX09Hw.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
