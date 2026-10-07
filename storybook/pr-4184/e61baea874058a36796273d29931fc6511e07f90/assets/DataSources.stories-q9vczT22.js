import{j as r}from"./iframe-Dc7sxM32.js";import{O as b}from"./object-table-DJlddXis.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Ci6VYedr.js";import{u as g}from"./useOsdkClient-DqACciKT.js";import"./preload-helper-CM7tzFvC.js";import"./Table-BbU-9j4x.js";import"./index-IZwYZumw.js";import"./Dialog-BS6pgeCo.js";import"./cross-DB407VGu.js";import"./svgIconContainer-C-2lOjfc.js";import"./useBaseUiId-CH01Yaez.js";import"./InternalBackdrop-CdgMX2OS.js";import"./composite-BoHCITiY.js";import"./index-BWWceLi5.js";import"./index-BPTBY4qT.js";import"./index-7jp2fSwL.js";import"./useEventCallback-D6HBkFfp.js";import"./SkeletonBar-CQMTmIpY.js";import"./LoadingCell-D4ydqpTZ.js";import"./ColumnConfigDialog-BBBaXJZu.js";import"./DraggableList-CdXD1wY3.js";import"./search-CtqsOWX2.js";import"./Input-C0cMc9zy.js";import"./useControlled-CAz0cW4V.js";import"./Button-D0LwqFFz.js";import"./small-cross-BtHf4A8K.js";import"./ActionButton-7gTODAoI.js";import"./Checkbox-3AxTYCZS.js";import"./useValueChanged-LFwat5aB.js";import"./CollapsiblePanel-CHgHDq3b.js";import"./MultiColumnSortDialog-DAL8Zs0N.js";import"./MenuTrigger-BF79KnmQ.js";import"./CompositeItem-hDzKKSGM.js";import"./ToolbarRootContext-DVEPWNiK.js";import"./getDisabledMountTransitionStyles-CeArVJQO.js";import"./getPseudoElementBounds-BvdzEwkz.js";import"./chevron-down-BlnQ68Oi.js";import"./index-C72rir5P.js";import"./error-ritcfIW_.js";import"./BaseCbacBanner-JmRjJLBF.js";import"./makeExternalStore-CKmXRF_o.js";import"./Tooltip-Ce7TXbJ9.js";import"./PopoverPopup-CDeJDWbE.js";import"./debounce-BCcRr2wZ.js";import"./tick-C0UHVHiV.js";import"./DropdownField-DjNhNazw.js";import"./isEqual-MOH2rhy-.js";import"./withOsdkMetrics-CI_RMXn8.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
