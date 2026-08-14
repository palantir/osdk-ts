import{j as r}from"./iframe-BWtbK-6e.js";import{O as b}from"./object-table-BeG3Fp0X.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D--7M42r.js";import{u as g}from"./useOsdkClient-BiSLEIke.js";import"./preload-helper-D-SpX73X.js";import"./Table-DZGatbGL.js";import"./index-BJRZeoAy.js";import"./Dialog-BEPd95YN.js";import"./cross-BbOW2-LY.js";import"./svgIconContainer-tYWwIhLy.js";import"./useBaseUiId-p9hIi61X.js";import"./InternalBackdrop-BzojnLK2.js";import"./composite-O3B6JlFs.js";import"./index-DiSQQItY.js";import"./index-D3iqlyMR.js";import"./index-DHGG6V2S.js";import"./useEventCallback-DddqoMx1.js";import"./SkeletonBar-kaCc09Tm.js";import"./LoadingCell-ShKZoh7z.js";import"./ColumnConfigDialog-DQraDrLD.js";import"./DraggableList-BuwDh5HR.js";import"./search-BR8rsC3q.js";import"./Input-BPHe4LBr.js";import"./useControlled-C9p9N_86.js";import"./Button-B0i6dGlw.js";import"./small-cross-DWeilFPO.js";import"./ActionButton-BnuYZXjr.js";import"./Checkbox-CoRA8Ex9.js";import"./useValueChanged-CJvIonTN.js";import"./CollapsiblePanel-DtJGVwEB.js";import"./MultiColumnSortDialog-BeLdjw16.js";import"./MenuTrigger-Bbwd1Fl8.js";import"./CompositeItem-14mpYRhD.js";import"./ToolbarRootContext-DLdfgRBt.js";import"./getDisabledMountTransitionStyles-CFautW_r.js";import"./getPseudoElementBounds-B_KVOqfv.js";import"./chevron-down-D1Mpjl8C.js";import"./index-CDa_2TTR.js";import"./error-kr-jwrPU.js";import"./BaseCbacBanner-CTh-qVwr.js";import"./makeExternalStore-1AVtHYwG.js";import"./Tooltip-BUTgCb4R.js";import"./PopoverPopup-Cxt_nQB5.js";import"./debounce-BB2MUM9s.js";import"./tick-IhvTufAd.js";import"./DropdownField-vBIsoJCc.js";import"./isEqual-BRdqoqrQ.js";import"./withOsdkMetrics-DQ89NQ44.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
