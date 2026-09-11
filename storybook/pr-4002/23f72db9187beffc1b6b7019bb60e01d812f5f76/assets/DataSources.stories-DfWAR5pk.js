import{j as r}from"./iframe-BDntCMEH.js";import{O as b}from"./object-table-DkahZF98.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BLwYgm-O.js";import{u as g}from"./useOsdkClient-R1XeaFqw.js";import"./preload-helper-B50VuOmN.js";import"./Table-I_BYhXVu.js";import"./index-B0z8RHyd.js";import"./Dialog-DkKixsHY.js";import"./cross-BH8OF0Bn.js";import"./svgIconContainer-B6ralbiB.js";import"./useBaseUiId-BTqLhW0i.js";import"./InternalBackdrop-3bsfmQ8K.js";import"./composite-BQ7qlaUQ.js";import"./index-CX_hrFB8.js";import"./index-BOofLcNJ.js";import"./index-BBkRPYMA.js";import"./useEventCallback-CJ1ECKuN.js";import"./SkeletonBar-DhuVeAjE.js";import"./LoadingCell-B4T88guZ.js";import"./ColumnConfigDialog-BBIUIVmY.js";import"./DraggableList-CIf_sqx2.js";import"./search-CYEButG9.js";import"./Input-CXpC2-sJ.js";import"./useControlled-B173rJPI.js";import"./Button-Bpn7C7dn.js";import"./small-cross-Ctkk7cRd.js";import"./ActionButton-t5HQKASd.js";import"./Checkbox-BAC3zYHO.js";import"./useValueChanged-DfkXLlVn.js";import"./CollapsiblePanel-DwIUcnuv.js";import"./MultiColumnSortDialog-F9a2YiSr.js";import"./MenuTrigger-4e4OHRuu.js";import"./CompositeItem-BTJTpSwe.js";import"./ToolbarRootContext-C8N9jA7J.js";import"./getDisabledMountTransitionStyles-karZ8d_E.js";import"./getPseudoElementBounds-C0nyJPqP.js";import"./chevron-down-BxBh9Dqz.js";import"./index-BQKiMfv1.js";import"./error-CAncZcqv.js";import"./BaseCbacBanner-CrHhWkuw.js";import"./makeExternalStore-j3YsZMxz.js";import"./Tooltip-zHG5lzOj.js";import"./PopoverPopup-C4ooFr_6.js";import"./debounce-CkhlBaHF.js";import"./tick-Dc8_NDDZ.js";import"./DropdownField-B9EyhDn4.js";import"./isEqual-Yrh3LO4w.js";import"./withOsdkMetrics-DaoCVVMK.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
