import{j as r}from"./iframe-BHS5QR3O.js";import{O as b}from"./object-table-Cvrzj8fP.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ByRFfYYr.js";import{u as g}from"./useOsdkClient-DsttTZje.js";import"./preload-helper-B6H2Wl85.js";import"./Table-BDJ4x66s.js";import"./index-CH7AKy7m.js";import"./Dialog-wENiLeEQ.js";import"./cross-Mi6Tu3Er.js";import"./svgIconContainer-ByRaFEc-.js";import"./useBaseUiId-CEIcjkwP.js";import"./InternalBackdrop-7oHYmudj.js";import"./composite-BnqLBLhy.js";import"./index-BdTUVSMf.js";import"./index-DBgZeADq.js";import"./index-BnZ04Iwl.js";import"./useEventCallback-CB1YPgva.js";import"./SkeletonBar-BMo0RH1C.js";import"./LoadingCell-5FzEYM_J.js";import"./ColumnConfigDialog-CNeCC88S.js";import"./DraggableList-xSBVFf99.js";import"./search-Cocmm-uk.js";import"./Input-Bi2WpDJH.js";import"./useControlled-C-rES6CU.js";import"./Button-B_4Pa7GX.js";import"./small-cross-CJe3aCZN.js";import"./ActionButton-6_o3cOTE.js";import"./Checkbox-BbFETg2J.js";import"./useValueChanged-BcjxKkFq.js";import"./CollapsiblePanel-PYwkqFiV.js";import"./MultiColumnSortDialog-Db4Us-lU.js";import"./MenuTrigger-6R4hruBY.js";import"./CompositeItem-Bo2SIyrT.js";import"./ToolbarRootContext-lCFihwdU.js";import"./getDisabledMountTransitionStyles-DcIeUQNN.js";import"./getPseudoElementBounds-B8DlXmSD.js";import"./chevron-down-pY5pxMvg.js";import"./index-AnCCDamT.js";import"./error-BGQaSzzV.js";import"./BaseCbacBanner-DKquDkZs.js";import"./makeExternalStore-ByWm5-Ku.js";import"./Tooltip-CRgmKc4d.js";import"./PopoverPopup-Dx7_6wqW.js";import"./debounce-DyCRQAnF.js";import"./tick-Bt8cnFFd.js";import"./DropdownField-D43erCwJ.js";import"./isEqual-BE06Fp2_.js";import"./withOsdkMetrics-BuisztQB.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
