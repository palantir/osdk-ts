import{j as o}from"./iframe-Xc_JH78I.js";import{u as j}from"./useOsdkClient-B2D2VKmh.js";import{O as b}from"./object-table-BR6CYbjf.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as f,o as h,T as g}from"./objectTableStoryHelpers-DuCUOgsO.js";import"./preload-helper-AYl1pujm.js";import"./debounce-DutYdFha.js";import"./svgIconContainer-CQmggZ37.js";import"./Input-BFx2x6nA.js";import"./useBaseUiId-BI3SiDaB.js";import"./index-BLCrQc9J.js";import"./index-CsuxBpJ0.js";import"./PopoverPopup-Dcn1i5iK.js";import"./ToolbarRootContext-we2pFgZ9.js";import"./index-BeTbant5.js";import"./tick-D1opSoSV.js";import"./CompositeItem-B_3aLVYQ.js";import"./Dialog-DopQ8wFf.js";import"./makeExternalStore-DfyUf4Br.js";import"./PortalContainerContext-BOrecAxh.js";import"./Tooltip-DWx_5x0Q.js";import"./error-D-Pc-XbV.js";import"./CollapsiblePanel-BR5_TCy1.js";import"./Checkbox-DEpZizfX.js";import"./ActionButton-wws9nTvA.js";import"./index-Bp1R9O-s.js";import"./withOsdkMetrics-CzAtW5Pc.js";const u={type:"interface",apiName:"Worker"},{expect:r,within:d}=__STORYBOOK_MODULE_TEST__,J={...h,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:c,columnDefinitions:f},parameters:{docs:{source:{code:`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`}}},render:t=>{const T=j()(c).where({jobProfile:"Marketing Manager"});return o.jsx("div",{className:"object-table-container",style:{height:"600px"},children:o.jsx(b,{...t,objectType:c,objectSet:T})})},play:async({canvasElement:t})=>{const e=d(t);await e.findAllByText("Marketing Manager"),await r(e.getAllByText("Marketing Manager").length).toBeGreaterThan(1),await r(e.queryByText("Content Manager")).not.toBeInTheDocument()}},n={args:{objectType:u},parameters:{docs:{description:{story:"Pass an interface type instead of an object type. The table shows the interface's properties (email, name, employeeNumber) and any object implementing the interface will be displayed."},source:{code:`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />`}}},render:t=>o.jsx("div",{className:"object-table-container",style:{height:"600px"},children:o.jsx(b,{...t})}),play:async({canvasElement:t})=>{const e=d(t);await e.findByText(g),await r(e.getByText("Name")).toBeInTheDocument(),await r(e.getByText("Email")).toBeInTheDocument()}};var s,i,m;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,l,y;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(y=(l=n.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const Q=["WithObjectSet","WithInterfaceType"];export{n as WithInterfaceType,a as WithObjectSet,Q as __namedExportsOrder,J as default};
