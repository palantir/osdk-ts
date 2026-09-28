import{j as r}from"./iframe-zfG254O_.js";import{O as b}from"./object-table-DdTuYXq6.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cvw3n_ir.js";import{u as g}from"./useOsdkClient-CX8pU5qt.js";import"./preload-helper-BVR1mWVD.js";import"./Table-bJGCKuIo.js";import"./index-Wj2BR0GO.js";import"./Dialog-ClRyKcve.js";import"./cross-CetEVi0b.js";import"./svgIconContainer-QVUVb6tE.js";import"./useBaseUiId-DDNAeb_I.js";import"./InternalBackdrop-CzqyYOYM.js";import"./composite-DJ7hFQoT.js";import"./index-DqcYQoAX.js";import"./index-6IcmwpRJ.js";import"./index-CYmueTj6.js";import"./useEventCallback-CBXBr67p.js";import"./SkeletonBar-CZ4qcvgs.js";import"./LoadingCell-BSeA2jL5.js";import"./ColumnConfigDialog-DFiNFeKf.js";import"./DraggableList-BhXMEoLZ.js";import"./search-C1O_20Mr.js";import"./Input-DnoFtOsb.js";import"./useControlled-CYuH3Kw2.js";import"./Button-XkjDQhxK.js";import"./small-cross-BPAsGbUn.js";import"./ActionButton-C6sVQTm3.js";import"./Checkbox-BZvshDW-.js";import"./useValueChanged-CfrpKOZJ.js";import"./CollapsiblePanel-7gx9FNyA.js";import"./MultiColumnSortDialog-DF4qRTXJ.js";import"./MenuTrigger-DDjdPw8E.js";import"./CompositeItem-7b58zS75.js";import"./ToolbarRootContext-CfVpNXkd.js";import"./getDisabledMountTransitionStyles-DQWp1vNz.js";import"./getPseudoElementBounds-DaQ8_6-7.js";import"./chevron-down-omzDCKN7.js";import"./index-Cfc9ne_z.js";import"./error-CZvS_ur6.js";import"./BaseCbacBanner-BUYNHHUj.js";import"./makeExternalStore-Br87Teca.js";import"./Tooltip-1C_rhTkJ.js";import"./PopoverPopup-xGPdUl_L.js";import"./debounce-CDvtvBim.js";import"./tick-BSe8OeQ4.js";import"./DropdownField-Bk22B-qN.js";import"./isEqual-NQiw9Ucd.js";import"./withOsdkMetrics-BSCahypJ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
