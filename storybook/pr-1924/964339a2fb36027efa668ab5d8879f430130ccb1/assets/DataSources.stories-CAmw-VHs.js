import{j as r}from"./iframe-D0LlCScw.js";import{O as b}from"./object-table-COIfwPKf.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BoBYGQaK.js";import{u as g}from"./useOsdkClient-BbcMY0OU.js";import"./preload-helper-BPYsHztA.js";import"./Table-CVrn8a7m.js";import"./index-R-OWCfkC.js";import"./Dialog-DHPBiuDP.js";import"./cross-BIKx7l1B.js";import"./svgIconContainer-CPd4FEGO.js";import"./useBaseUiId-Cnf8WH7W.js";import"./InternalBackdrop-DSzn_M6g.js";import"./composite-DawpNJ_k.js";import"./index-DXbsvYWy.js";import"./index-BZTOjdyb.js";import"./index-Dh6bu7y0.js";import"./useEventCallback-BHhry2Ze.js";import"./SkeletonBar-BM6j1C1a.js";import"./LoadingCell-4G6EJCyj.js";import"./ColumnConfigDialog-1N3jOgDU.js";import"./DraggableList-DX8ugLQU.js";import"./search-Dy9Bh6oJ.js";import"./Input-DguSmqlF.js";import"./useControlled-C-xRoLJo.js";import"./Button-Bfbc-efe.js";import"./small-cross-D12kpvdn.js";import"./ActionButton-CCgA1PS9.js";import"./Checkbox-DqcVMQmm.js";import"./useValueChanged-D4Cuolrk.js";import"./CollapsiblePanel-DGCQJ7r2.js";import"./MultiColumnSortDialog-6daUiyok.js";import"./MenuTrigger-bU6vvaQC.js";import"./CompositeItem-DSL5KLQJ.js";import"./ToolbarRootContext-DxaGXN87.js";import"./getDisabledMountTransitionStyles-DtmNom5N.js";import"./getPseudoElementBounds-lP1dSnSf.js";import"./chevron-down-D3xB8NyO.js";import"./index-Bynh9I8M.js";import"./error-g8Wu2PpH.js";import"./BaseCbacBanner-DPbFCEOT.js";import"./makeExternalStore-G-t7fMHO.js";import"./Tooltip-ozF9P0sc.js";import"./PopoverPopup-DPim281m.js";import"./debounce-BWX6LBdf.js";import"./tick-DOJuYt0r.js";import"./DropdownField-BsF9XJhY.js";import"./isEqual-DjcNAgH_.js";import"./withOsdkMetrics-Bwsdr4IU.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
