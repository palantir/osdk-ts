import{j as r}from"./iframe-BYL7doMn.js";import{O as b}from"./object-table-V267myMJ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BZIV2cXq.js";import{u as g}from"./useOsdkClient-D6ajiaFe.js";import"./preload-helper-WjgK3yby.js";import"./Table-BA_92qvg.js";import"./index-DGp8JCsS.js";import"./Dialog-CMqzmjeu.js";import"./cross-As5FKXY-.js";import"./svgIconContainer-_aqU2ceG.js";import"./useBaseUiId-BDHrOOKV.js";import"./InternalBackdrop-Dj_rHuJA.js";import"./composite-DVT3Eov_.js";import"./index-BNCWFBwe.js";import"./index-B9iEbSri.js";import"./index-DPYDxTi4.js";import"./useEventCallback-Di1Qg9EE.js";import"./SkeletonBar-5t32e3g1.js";import"./LoadingCell-DcOdnC0j.js";import"./ColumnConfigDialog-CMj_U7ZP.js";import"./DraggableList-Du7vhXR6.js";import"./search-D5xrbzeg.js";import"./Input-CdbOxxHJ.js";import"./useControlled-v5GLNOSM.js";import"./Button-D8YUSgO5.js";import"./small-cross-BTIlfNGz.js";import"./ActionButton-qrKLXhxR.js";import"./Checkbox-PCLWJ8pS.js";import"./useValueChanged-CPcnC0pw.js";import"./CollapsiblePanel-C3ibyufi.js";import"./MultiColumnSortDialog-DRNlFUoI.js";import"./MenuTrigger-5G_f-uSX.js";import"./CompositeItem--33NfDsU.js";import"./ToolbarRootContext-BRf2421Z.js";import"./getDisabledMountTransitionStyles-CeI4j3Nx.js";import"./getPseudoElementBounds-DNSU3P07.js";import"./chevron-down-CE9oTrOB.js";import"./index-C_YsYgd4.js";import"./error-CTTbPhSu.js";import"./BaseCbacBanner-ZpT21Jaa.js";import"./makeExternalStore-DN7NmVRj.js";import"./Tooltip-BCtrBqwm.js";import"./PopoverPopup-CNV_9kc0.js";import"./debounce-RtjII4tG.js";import"./tick-DO5AFC-5.js";import"./DropdownField-eU4OOCad.js";import"./isEqual-BZ_ll_pL.js";import"./withOsdkMetrics-Cw_wIhS5.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
