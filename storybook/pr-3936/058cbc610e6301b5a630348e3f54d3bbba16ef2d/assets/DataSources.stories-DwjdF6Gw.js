import{j as r}from"./iframe-DaheMBBp.js";import{O as b}from"./object-table-0sFqeEZJ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CcLSXgJM.js";import{u as g}from"./useOsdkClient-CN5l5L7Y.js";import"./preload-helper-ogFyI84a.js";import"./Table-DpONygi1.js";import"./index-C3YYW7Av.js";import"./Dialog-C5hKyCQA.js";import"./cross-Bby6H2na.js";import"./svgIconContainer-B_QTzoaQ.js";import"./useBaseUiId-BLpW-viY.js";import"./InternalBackdrop-DzAttt_G.js";import"./composite-BEI6HnWE.js";import"./index-C2SDphz6.js";import"./index-CLtbVn_M.js";import"./index-DtDtTYps.js";import"./useEventCallback-CiJJ5Lcl.js";import"./SkeletonBar-B6_gKLM1.js";import"./LoadingCell-DVEbX28s.js";import"./ColumnConfigDialog-DjiiQJEk.js";import"./DraggableList-BCVYLE2X.js";import"./search-BihmlxdI.js";import"./Input-Bz5EgY5O.js";import"./useControlled-Dcfr4NOJ.js";import"./Button-tOMZXVUq.js";import"./small-cross-Bh63RFvI.js";import"./ActionButton-_PEshhAj.js";import"./Checkbox-Ch8nntwM.js";import"./useValueChanged-CVQIhm4Y.js";import"./CollapsiblePanel-C_4v9b-F.js";import"./MultiColumnSortDialog-BZ-FEhQI.js";import"./MenuTrigger-BHmjH1Az.js";import"./CompositeItem-CkBG_Idz.js";import"./ToolbarRootContext-DE_UAbqs.js";import"./getDisabledMountTransitionStyles-BcwyM6JI.js";import"./getPseudoElementBounds-D-A00nd4.js";import"./chevron-down-MXNqVixY.js";import"./index-DtzQd4z2.js";import"./error-DQ7GCXA7.js";import"./BaseCbacBanner-CPCuX73W.js";import"./makeExternalStore-CWnObUAx.js";import"./Tooltip-Cxytr_Mg.js";import"./PopoverPopup-CsO8UfgH.js";import"./debounce-nEYC7Ov0.js";import"./tick-ZFnf1M-z.js";import"./DropdownField-BLLMqEAK.js";import"./isEqual-Bbl_ErEq.js";import"./withOsdkMetrics-BZUZattY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
