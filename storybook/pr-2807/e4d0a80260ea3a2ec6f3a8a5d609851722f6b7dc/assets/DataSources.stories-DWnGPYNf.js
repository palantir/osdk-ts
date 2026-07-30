import{j as r}from"./iframe-BGXQayXc.js";import{O as b}from"./object-table-MIGxjgCf.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DIPrroBC.js";import{u as g}from"./useOsdkClient-DbTuMB4g.js";import"./preload-helper-NRrpjeI0.js";import"./Table-DwbecF3W.js";import"./index-BbGsyqOi.js";import"./Dialog-CQtQnZ5i.js";import"./cross-DC2Z1Ioq.js";import"./svgIconContainer-GwtppRLN.js";import"./useBaseUiId-CiIILwi-.js";import"./InternalBackdrop-DVb-kA91.js";import"./composite-CxwljJm3.js";import"./index-DVnvFKQ9.js";import"./index-Q_IDGxPs.js";import"./index-C2No9_3o.js";import"./useEventCallback-Doyq9xlP.js";import"./SkeletonBar-D4xRB_P4.js";import"./LoadingCell-1IfXOjrD.js";import"./ColumnConfigDialog-CfUI_nrj.js";import"./DraggableList-CwYE2BCE.js";import"./search-CG2X3jdC.js";import"./Input-CJ9L1nB_.js";import"./useControlled-Cx0doQf6.js";import"./isEqual-_QppRuU1.js";import"./isObject-CpNOWNAL.js";import"./Button-0zluTTNn.js";import"./ActionButton-PBftEzPB.js";import"./Checkbox-BjZ835Ix.js";import"./useValueChanged-C-BLIIiy.js";import"./CollapsiblePanel-drMODSok.js";import"./MultiColumnSortDialog-BNVz4UQF.js";import"./MenuTrigger-EnMUIWlN.js";import"./CompositeItem-8ppYONab.js";import"./ToolbarRootContext-CVRCxt6k.js";import"./getDisabledMountTransitionStyles-Bs7aafzi.js";import"./getPseudoElementBounds-CUu6YACx.js";import"./chevron-down-BkFumYFe.js";import"./index-62-q8zEu.js";import"./error-D2AB_uHu.js";import"./BaseCbacBanner-DcTfUuEG.js";import"./makeExternalStore-bGGx7Jm8.js";import"./Tooltip-BqBaS9NB.js";import"./PopoverPopup-CiQN9YtB.js";import"./toNumber-CQsrp6Vk.js";import"./tick-BNqLTRdd.js";import"./DropdownField-CLIuwmMt.js";import"./withOsdkMetrics-DBduly0k.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
