import{j as r}from"./iframe-BP2VUYWC.js";import{O as b}from"./object-table-6oVdn4P3.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DcuoOUE7.js";import{u as g}from"./useOsdkClient-CuR5pRcj.js";import"./preload-helper-BbwyyhLF.js";import"./Table-CUH5qwyP.js";import"./index-B3KCIuhY.js";import"./Dialog-CMrT0k9e.js";import"./cross-DeTD0CpU.js";import"./svgIconContainer-CMKl73gN.js";import"./useBaseUiId-CYXU-WIp.js";import"./InternalBackdrop-r9gAECWy.js";import"./composite-DVGPAs_G.js";import"./index-NspJIeyA.js";import"./index-DhixDc4A.js";import"./index-DaoL6F_8.js";import"./useEventCallback-BDFp3vdh.js";import"./SkeletonBar-9y-j050X.js";import"./LoadingCell-_K4wPDga.js";import"./ColumnConfigDialog-De_gjKut.js";import"./DraggableList-DoZx-BCC.js";import"./search-DINZsCiw.js";import"./Input-DpmPrvJG.js";import"./useControlled-CeB8N0Pd.js";import"./Button-pnZeIBQ4.js";import"./small-cross-RfyOkJqj.js";import"./ActionButton-P7WnwUh9.js";import"./Checkbox-BcbJaqEV.js";import"./useValueChanged-z-dahWB0.js";import"./CollapsiblePanel-BIqJgZTu.js";import"./MultiColumnSortDialog-CVnXS-KB.js";import"./MenuTrigger-Clt4RC5o.js";import"./CompositeItem-CSy4C5-C.js";import"./ToolbarRootContext-Dpyy3jMP.js";import"./getDisabledMountTransitionStyles-DOtULwnT.js";import"./getPseudoElementBounds-Blw9_fDf.js";import"./chevron-down-DV6qQJYt.js";import"./index-WcLTZ_9n.js";import"./error-CPXKUEGb.js";import"./BaseCbacBanner-C2sRTlMm.js";import"./makeExternalStore-BtzD4IhM.js";import"./Tooltip-DIJzoANq.js";import"./PopoverPopup-wwj7egFy.js";import"./debounce-2s8xu7yX.js";import"./tick-Z8pTNBDG.js";import"./DropdownField-GomfOeRU.js";import"./isEqual-DRaFd88J.js";import"./withOsdkMetrics-CDKAmrIU.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
