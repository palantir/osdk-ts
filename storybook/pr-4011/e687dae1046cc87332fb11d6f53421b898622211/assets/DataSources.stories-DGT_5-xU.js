import{j as r}from"./iframe-dvXPHGEz.js";import{O as b}from"./object-table-Djjbkt0z.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CaFqj0m6.js";import{u as g}from"./useOsdkClient-BaEF3EMY.js";import"./preload-helper-BmaGIWKK.js";import"./Table-juMiLnah.js";import"./index-DyjG60lF.js";import"./Dialog-BNw-ASNJ.js";import"./cross-Z5DuI0bi.js";import"./svgIconContainer-Cks84kGC.js";import"./useBaseUiId-B5XDNhHC.js";import"./InternalBackdrop-DAJuntNY.js";import"./composite-CadSmb_E.js";import"./index-DabbcYA7.js";import"./index-D0dNC_Uw.js";import"./index-CaOHsNqN.js";import"./useEventCallback-nNaNdbMZ.js";import"./SkeletonBar-Dv2M62ut.js";import"./LoadingCell-0qyIzLIs.js";import"./ColumnConfigDialog-VemTYLXT.js";import"./DraggableList-DwCzG7mM.js";import"./search-DSXnECBw.js";import"./Input-CQg1dEqW.js";import"./useControlled-C_6t7Yik.js";import"./Button-XhiN3AVX.js";import"./small-cross-DKjM1orR.js";import"./ActionButton-wFnbg4xS.js";import"./Checkbox-BKfRmlys.js";import"./useValueChanged-CnI10VJe.js";import"./CollapsiblePanel-Uln4s1hx.js";import"./MultiColumnSortDialog-DWc2JHmU.js";import"./MenuTrigger-B5gWYMLG.js";import"./CompositeItem-BOkdWJ_P.js";import"./ToolbarRootContext-puVPhTN3.js";import"./getDisabledMountTransitionStyles-AFbWhr8J.js";import"./getPseudoElementBounds-D_O4eXO1.js";import"./chevron-down-EmJ3ovaR.js";import"./index-C6zBVqUK.js";import"./error-CQ-TuYDa.js";import"./BaseCbacBanner-DnWNpQiJ.js";import"./makeExternalStore-CV6_Wrkf.js";import"./Tooltip-Dr5evSCi.js";import"./PopoverPopup-C5XbR0Iv.js";import"./debounce-DQGeitFh.js";import"./tick-DCw5S-Ab.js";import"./DropdownField-CS7rxwg1.js";import"./isEqual-B0DJkLX3.js";import"./withOsdkMetrics-7z80YqAb.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
