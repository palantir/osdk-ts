import{j as r}from"./iframe-JML89ya1.js";import{O as b}from"./object-table-CB8maTQ9.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CExWxZwJ.js";import{u as g}from"./useOsdkClient-_gvl4Rg0.js";import"./preload-helper-CM_flLUX.js";import"./Table-qeTnIn3M.js";import"./index-Dc7pQO3f.js";import"./Dialog-Dv4Dy1qa.js";import"./cross-CdcqVyzX.js";import"./svgIconContainer-Cy1tbGmj.js";import"./useBaseUiId-ClxBcpvR.js";import"./InternalBackdrop-21DC1z9N.js";import"./composite-lR6NpWTP.js";import"./index-DlPnlhaK.js";import"./index-BPJRAXu1.js";import"./index-BslB55NL.js";import"./useEventCallback-3tK8gcTN.js";import"./SkeletonBar-DaW4uBaB.js";import"./LoadingCell-sPjm8bHN.js";import"./ColumnConfigDialog-C-mfnaNB.js";import"./DraggableList-quiv3NLh.js";import"./search-BoZa_HcP.js";import"./Input-BPVftMna.js";import"./useControlled-Dmeb-XiS.js";import"./Button-B2QAh7AV.js";import"./small-cross-CmBmU6Im.js";import"./ActionButton-nJprY3R-.js";import"./Checkbox-B7RLfOUI.js";import"./useValueChanged--jLvROzt.js";import"./CollapsiblePanel-Dd_2bttq.js";import"./MultiColumnSortDialog-BC0gIDZO.js";import"./MenuTrigger-CeIqBMEF.js";import"./CompositeItem-DNfCdbW9.js";import"./ToolbarRootContext-CcT7wUi-.js";import"./getDisabledMountTransitionStyles-BiUI-Q9G.js";import"./getPseudoElementBounds-Idti6r53.js";import"./chevron-down-CvzFuZ8A.js";import"./index-liHaAzJ1.js";import"./error-yEc2n_E2.js";import"./BaseCbacBanner-CjRDdOMd.js";import"./makeExternalStore-C3BRy9aQ.js";import"./Tooltip-DuubpmlS.js";import"./PopoverPopup-DmwxW2Ka.js";import"./debounce-BR8LXPlV.js";import"./tick-KkkII5Mi.js";import"./DropdownField-C9yxcGzD.js";import"./isEqual-Sm80VB3L.js";import"./withOsdkMetrics-DBKIKizN.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
