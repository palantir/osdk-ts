import{j as r}from"./iframe-BIBiDLzG.js";import{O as b}from"./object-table-DO2-4StQ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-XqDT_63C.js";import{u as g}from"./useOsdkClient-L3-wMMON.js";import"./preload-helper-M-hMOyfR.js";import"./Table-CqMv3F_I.js";import"./index-DVl0wepy.js";import"./Dialog-BeJ4utiY.js";import"./cross-Bct1nQA0.js";import"./svgIconContainer-CoQwsTQZ.js";import"./useBaseUiId-uizV67he.js";import"./InternalBackdrop-D5m4v8WT.js";import"./composite-WJpwW_h1.js";import"./index-ChCEVhY0.js";import"./index-oK6fUSTy.js";import"./index-BpFwk2gn.js";import"./useEventCallback-BAwy8rT_.js";import"./SkeletonBar-BwxLZXkl.js";import"./LoadingCell-vKzjE125.js";import"./ColumnConfigDialog-DsX6HxUn.js";import"./DraggableList-DlSB-TLa.js";import"./search-Dp0L04CB.js";import"./Input-DjyK0ZMe.js";import"./useControlled-C1UaCMGh.js";import"./Button-C3sxjNx0.js";import"./small-cross-DhGfP6H8.js";import"./ActionButton-BNlBdLC6.js";import"./Checkbox-wdV7A-ZT.js";import"./useValueChanged-CzF2vCV8.js";import"./CollapsiblePanel-CZiuD1Hf.js";import"./MultiColumnSortDialog-mMx323K3.js";import"./MenuTrigger-BDmXfceM.js";import"./CompositeItem-DcFVDvs6.js";import"./ToolbarRootContext-DSpWAJaB.js";import"./getDisabledMountTransitionStyles-CwoXuUOt.js";import"./getPseudoElementBounds-CNxmiBte.js";import"./chevron-down-D9WTAz47.js";import"./index-CgV98ypJ.js";import"./error-VYeOdSiM.js";import"./BaseCbacBanner-BF3HYUIs.js";import"./makeExternalStore-CpzPkJRH.js";import"./Tooltip-uJ9PHc8e.js";import"./PopoverPopup-BWEg_lAC.js";import"./debounce-C6GUNjet.js";import"./tick-KoHgs3il.js";import"./DropdownField-Dc7oRDG2.js";import"./isEqual-BO52wWTb.js";import"./withOsdkMetrics-BODaHo4W.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
