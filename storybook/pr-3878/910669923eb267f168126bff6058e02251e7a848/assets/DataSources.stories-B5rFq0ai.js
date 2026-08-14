import{j as r}from"./iframe-BceyKPSs.js";import{O as b}from"./object-table-DwP0jjRX.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BQrWZ-q5.js";import{u as g}from"./useOsdkClient-MTCW5dT-.js";import"./preload-helper-yl7T0Sh3.js";import"./Table-CaxlUyV_.js";import"./index-CWhFTZFr.js";import"./Dialog-BgVnsqSX.js";import"./cross-hF_e54Dm.js";import"./svgIconContainer-DHBvckaf.js";import"./useBaseUiId-DuopilVp.js";import"./InternalBackdrop-ByNuEfNh.js";import"./composite-G6x_R6vo.js";import"./index-BWoCeqh_.js";import"./index-DKSJHSMW.js";import"./index-DDe6bujp.js";import"./useEventCallback-CRSexT8I.js";import"./SkeletonBar--BrMhexG.js";import"./LoadingCell-BlOfqsm4.js";import"./ColumnConfigDialog-DTC6gr-T.js";import"./DraggableList-liBL9omR.js";import"./search-DxqUxhlP.js";import"./Input-qZlbTLRL.js";import"./useControlled-B18pPgNn.js";import"./Button-mBgKjA3l.js";import"./small-cross-8sK4dG9o.js";import"./ActionButton-BjqsUD18.js";import"./Checkbox-B6a4UAcv.js";import"./useValueChanged-C4QJqrzM.js";import"./CollapsiblePanel-CSXtlR60.js";import"./MultiColumnSortDialog-yqCZ1Co2.js";import"./MenuTrigger-18tbTMz8.js";import"./CompositeItem-Birb3K4T.js";import"./ToolbarRootContext-C0EbIhmv.js";import"./getDisabledMountTransitionStyles-MmSx2tzL.js";import"./getPseudoElementBounds-WloO4hnG.js";import"./chevron-down-DvCtF5Hi.js";import"./index-CkN3vfzY.js";import"./error-86GovzKd.js";import"./BaseCbacBanner-C0a3vjbd.js";import"./makeExternalStore-DbwWgrB9.js";import"./Tooltip-LBFkq7-6.js";import"./PopoverPopup-cfS-G607.js";import"./debounce-DvZQ3nsC.js";import"./tick-8XyD1qba.js";import"./DropdownField-GN9Pyic1.js";import"./isEqual-koITs_Dm.js";import"./withOsdkMetrics-DHwnoxLF.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
