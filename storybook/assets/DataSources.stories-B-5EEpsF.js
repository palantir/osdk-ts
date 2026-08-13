import{j as r}from"./iframe-D5O5_k9_.js";import{O as b}from"./object-table-C-DLDZpP.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ClDDb3iz.js";import{u as g}from"./useOsdkClient-CICgihsL.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-EbZEPZet.js";import"./index-BIhwPQ5A.js";import"./Dialog-CAqmshjJ.js";import"./cross-qoOvfrZB.js";import"./svgIconContainer-Dc8lBmE9.js";import"./useBaseUiId-BK5NoUBi.js";import"./InternalBackdrop-CRNPM9W7.js";import"./composite-CMeP4FlW.js";import"./index-DXS8u3_B.js";import"./index-AFBT5mUa.js";import"./index-CSVDbKCa.js";import"./useEventCallback-YCtidgdS.js";import"./SkeletonBar-BAcn_h-M.js";import"./LoadingCell-DN-B8-Tb.js";import"./ColumnConfigDialog-C3EEhoK7.js";import"./DraggableList-DaBxAvIS.js";import"./search-sOGHpgAJ.js";import"./Input-BO-GptjU.js";import"./useControlled-hlAYtkod.js";import"./Button-74u_STeL.js";import"./small-cross-vq9wJw1f.js";import"./ActionButton-CS6EOwh3.js";import"./Checkbox-DKwnOk29.js";import"./useValueChanged-Ck_KuO7m.js";import"./CollapsiblePanel-Cm3UP6Hc.js";import"./MultiColumnSortDialog-PRFnS_QJ.js";import"./MenuTrigger-CGfJ9uYA.js";import"./CompositeItem-BHw_Azd0.js";import"./ToolbarRootContext-7sTGpIsw.js";import"./getDisabledMountTransitionStyles-B3_gGaay.js";import"./getPseudoElementBounds-Debta3vv.js";import"./chevron-down-VCtVB2U7.js";import"./index-DFB-Kfs7.js";import"./error-g0-V9Ywd.js";import"./BaseCbacBanner-CxIPfa7L.js";import"./makeExternalStore-CxymVNiv.js";import"./Tooltip-BKSUBMZw.js";import"./PopoverPopup-sKoAxBCT.js";import"./toNumber-C0xl3ikJ.js";import"./tick-DzZZV7Ed.js";import"./DropdownField-DGa1os9V.js";import"./withOsdkMetrics-B2-MbefI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,Te={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const je=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,je as __namedExportsOrder,Te as default};
