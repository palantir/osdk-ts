import{j as r}from"./iframe-BRGzDqju.js";import{O as b}from"./object-table-CVmc407A.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C38B1WYM.js";import{u as g}from"./useOsdkClient-BD_HHGJ7.js";import"./preload-helper-5JQdMdM9.js";import"./Table-Qz6pPC3g.js";import"./index-En-TUnJd.js";import"./Dialog-BWxPuvzW.js";import"./cross-CQP7lInb.js";import"./svgIconContainer-BQAEO-7W.js";import"./useBaseUiId-B3wooVnn.js";import"./InternalBackdrop-DyMqQPSD.js";import"./composite-C-AGstI3.js";import"./index-DPkAIY9Y.js";import"./index-Bad5TxyQ.js";import"./index-CuXQ76Km.js";import"./useEventCallback-C_Z8usTd.js";import"./SkeletonBar-DLjlHbja.js";import"./LoadingCell-BwECvniD.js";import"./ColumnConfigDialog-DHzmfXh_.js";import"./DraggableList-Cy_sW6IX.js";import"./search-asFq5N8L.js";import"./Input-DmzPzGey.js";import"./useControlled-DJDqOS1V.js";import"./Button-0cGInffD.js";import"./small-cross-B83ohrdP.js";import"./ActionButton-dpWisjKE.js";import"./Checkbox-BaBpX2iW.js";import"./useValueChanged-BU1nXjKr.js";import"./CollapsiblePanel-BSyt4v6y.js";import"./MultiColumnSortDialog-CEHYLNMt.js";import"./MenuTrigger-DhSK_MRy.js";import"./CompositeItem-q2WRXYZP.js";import"./ToolbarRootContext-67BQ7bpF.js";import"./getDisabledMountTransitionStyles-CIJBF-gX.js";import"./getPseudoElementBounds-Da6NSz-p.js";import"./chevron-down-CLb4G2AF.js";import"./index-CNqdpeI1.js";import"./error-CoQddkwW.js";import"./BaseCbacBanner-BdBuPUT8.js";import"./makeExternalStore-B-5KvZfn.js";import"./Tooltip-BinZmbGp.js";import"./PopoverPopup-BjDJmrK2.js";import"./debounce-BY0A57Za.js";import"./tick-B0-Xl9HF.js";import"./DropdownField-YHeguodW.js";import"./isEqual-ySCoOjBB.js";import"./withOsdkMetrics-DO5dBBXm.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
