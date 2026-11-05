import{j as r}from"./iframe-s6qt4jCK.js";import{O as b}from"./object-table-De1PzSdd.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BgiQ0IIK.js";import{u as g}from"./useOsdkClient-DGoGfdz1.js";import"./preload-helper-9jiBPXEl.js";import"./Table-B73Bx19c.js";import"./index-D6YAKeyS.js";import"./Dialog-C6WxxT4y.js";import"./cross-z12JNlD1.js";import"./svgIconContainer-D4Tr3eBw.js";import"./useBaseUiId-BIc0eo6T.js";import"./InternalBackdrop-BYGdIn__.js";import"./composite-CPpi_uAC.js";import"./index-DVF-9r8u.js";import"./index-BcLYVVr4.js";import"./index-CQTw8n2D.js";import"./useEventCallback-DNF3ylqB.js";import"./SkeletonBar-D69vB7ej.js";import"./LoadingCell-B95L-pZY.js";import"./ColumnConfigDialog-DWLVWYmU.js";import"./DraggableList-DLQJhoX2.js";import"./search-CwDPAivc.js";import"./Input-DP0PAzjj.js";import"./useControlled-CTyuJ7Af.js";import"./Button-Kk03FIZS.js";import"./small-cross-D0AIe3u5.js";import"./ActionButton-CjYFa-2U.js";import"./Checkbox-CRpQdjwJ.js";import"./useValueChanged-BZVZmlsN.js";import"./CollapsiblePanel-Du2JeiGm.js";import"./MultiColumnSortDialog-GDfrw8ba.js";import"./MenuTrigger-BEUsd7am.js";import"./CompositeItem-cbLDCwSH.js";import"./ToolbarRootContext-nYUUEgez.js";import"./getDisabledMountTransitionStyles-Chz3YyJw.js";import"./getPseudoElementBounds-DXe2aI7J.js";import"./chevron-down-nr5MnKpi.js";import"./index-D2cPMVS8.js";import"./error-DrFA3py_.js";import"./BaseCbacBanner-DRm2kmou.js";import"./makeExternalStore-CRyGpLoG.js";import"./Tooltip-DjYQyP_H.js";import"./isObject-CZ9Ec7qs.js";import"./debounce-DH380oHP.js";import"./tick-YVdkfck4.js";import"./DropdownField-COSvrKxl.js";import"./isEqual-DFsXV7yQ.js";import"./_baseIsEqual-7XBh0Yb_.js";import"./withOsdkMetrics-C2Hl675L.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
