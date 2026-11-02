import{j as r}from"./iframe-Cjxg6iNn.js";import{O as b}from"./object-table-Ix73Tn5r.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-1Uus1SwG.js";import{u as g}from"./useOsdkClient-AZh_79x-.js";import"./preload-helper-Cxg0i_EX.js";import"./Table-K51QDYgB.js";import"./index-C7K0gZWV.js";import"./Dialog-CAFi7SxX.js";import"./cross-B4PrOhV3.js";import"./svgIconContainer-CZvHNGTg.js";import"./useBaseUiId-CnlnTXqN.js";import"./InternalBackdrop-CpFHocTv.js";import"./composite-BjxBGEhF.js";import"./index-CSSvwtgv.js";import"./index-CHnUBrda.js";import"./index-DFkF7jqg.js";import"./useEventCallback-uFwCyQiz.js";import"./SkeletonBar-X_1w1HPl.js";import"./LoadingCell-D4lWsGoh.js";import"./ColumnConfigDialog-rqNJs-Cu.js";import"./DraggableList-Bu2LxrUi.js";import"./search-DdTpXEBG.js";import"./Input-BQ8CO2Zx.js";import"./useControlled-DvCyj3QQ.js";import"./Button-DgwxYDBH.js";import"./small-cross-CigndlKD.js";import"./ActionButton-Du7n99Za.js";import"./Checkbox-BGT7pel6.js";import"./useValueChanged-DIJyPS0-.js";import"./CollapsiblePanel-O8dFOxez.js";import"./MultiColumnSortDialog-BqJ7lR5M.js";import"./MenuTrigger-DqSnQGCV.js";import"./CompositeItem-CNr4k86k.js";import"./ToolbarRootContext-DZlA8QGQ.js";import"./getDisabledMountTransitionStyles-BvfAIkEV.js";import"./getPseudoElementBounds-DMxNZQvA.js";import"./chevron-down-bhCi1ARW.js";import"./index-D5MyUYDa.js";import"./error-BXzFpfZ4.js";import"./BaseCbacBanner-DkxvvO3y.js";import"./makeExternalStore-CNSVvc9t.js";import"./Tooltip-B5VRIXsW.js";import"./PopoverPopup-BX8ciyA_.js";import"./debounce-C5Se__zz.js";import"./tick-YxVbnp5T.js";import"./DropdownField-DkMSVjea.js";import"./isEqual-BR465NME.js";import"./withOsdkMetrics-BpvOsnqH.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
