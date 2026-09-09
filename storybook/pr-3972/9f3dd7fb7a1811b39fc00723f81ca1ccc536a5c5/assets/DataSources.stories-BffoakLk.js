import{j as r}from"./iframe-BjZw4uZx.js";import{O as b}from"./object-table-BB3hzK-D.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-_tbsaO71.js";import{u as g}from"./useOsdkClient-DAD_fQEy.js";import"./preload-helper-ORk2FqAe.js";import"./Table-DP-o-U8z.js";import"./index-1W3MQsZX.js";import"./Dialog-BjZqbaKB.js";import"./cross-B7IcoVob.js";import"./svgIconContainer-BFOOKm-2.js";import"./useBaseUiId-C8tvPGb8.js";import"./InternalBackdrop-C46cFkSM.js";import"./composite-D0Ri5kCB.js";import"./index-DQXv-LA5.js";import"./index-raVyMjZg.js";import"./index-r0kwR1Gy.js";import"./useEventCallback-CSDQXoK-.js";import"./SkeletonBar-Daru_zCU.js";import"./LoadingCell-B2u1yJgq.js";import"./ColumnConfigDialog-DPonYtjV.js";import"./DraggableList-C6r4jY7G.js";import"./search-H7eFoEJT.js";import"./Input-LhLxUdgb.js";import"./useControlled-CVj57D_o.js";import"./Button-CWwJb2Uz.js";import"./small-cross-bjtS9678.js";import"./ActionButton-CpeH4f8W.js";import"./Checkbox-BdW6PSMV.js";import"./useValueChanged-Dm26sXFI.js";import"./CollapsiblePanel-DjPQRvCu.js";import"./MultiColumnSortDialog-33ABf7qi.js";import"./MenuTrigger-DS-3gBTu.js";import"./CompositeItem-aZoPkaZ5.js";import"./ToolbarRootContext-DZ7-AtKR.js";import"./getDisabledMountTransitionStyles-BxHU8rzl.js";import"./getPseudoElementBounds-PRDfHB8H.js";import"./chevron-down-D59bxWeC.js";import"./index-DL1T0XSi.js";import"./error-BcfWkrIR.js";import"./BaseCbacBanner-BLaT_MeG.js";import"./makeExternalStore-NPZJ19CP.js";import"./Tooltip-COufKIaj.js";import"./PopoverPopup-Ba3qL99k.js";import"./debounce-D6KN3GLj.js";import"./tick-C-xJqvAS.js";import"./DropdownField-ByxMaZrM.js";import"./isEqual-DSKswR02.js";import"./withOsdkMetrics-C2-SGnqg.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
