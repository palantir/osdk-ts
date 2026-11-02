import{j as r}from"./iframe-BOL4lmQu.js";import{O as b}from"./object-table-CMQSXq2e.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dckp4eRm.js";import{u as g}from"./useOsdkClient-CMRz05mU.js";import"./preload-helper-CF5y6P51.js";import"./Table-C-Ja_1RN.js";import"./index-BlfYN_kO.js";import"./Dialog-C58LhjQg.js";import"./cross-C9_cN1cS.js";import"./svgIconContainer-FVhL1hCA.js";import"./useBaseUiId-BpGNe3Eg.js";import"./InternalBackdrop-LCz3M4jq.js";import"./composite-BV3ZD4mr.js";import"./index-CmApk3zh.js";import"./index-DP_XR25E.js";import"./index-DBaqiByX.js";import"./useEventCallback-ifDqPOAF.js";import"./SkeletonBar-BNX5gidE.js";import"./LoadingCell-C0eef9LR.js";import"./ColumnConfigDialog-BEJRup2O.js";import"./DraggableList-BHlopOab.js";import"./search-Cv260GLX.js";import"./Input-CujqDLfg.js";import"./useControlled-1K3KKLgI.js";import"./Button-BQpmuek9.js";import"./small-cross-B0XRPY8R.js";import"./ActionButton-BSJylTXK.js";import"./Checkbox-DbzFPQcL.js";import"./useValueChanged-D-6eFv97.js";import"./CollapsiblePanel-ClIQPlSc.js";import"./MultiColumnSortDialog-Cp5dcT-Y.js";import"./MenuTrigger-DECqK-MD.js";import"./CompositeItem-D7t72lc9.js";import"./ToolbarRootContext-DYZSmWFR.js";import"./getDisabledMountTransitionStyles-CMRhZxrC.js";import"./getPseudoElementBounds-Td3ZX14H.js";import"./chevron-down-wPhaZYI3.js";import"./index-DagXr3NH.js";import"./error-DWdKle1J.js";import"./BaseCbacBanner-DZWHxj7c.js";import"./makeExternalStore-BaKwuUE-.js";import"./Tooltip-ipzaDerj.js";import"./PopoverPopup-QDwqPc_0.js";import"./debounce-C7TgZToh.js";import"./tick-C5Qp1iIQ.js";import"./DropdownField-B0yO1meX.js";import"./isEqual-D1nl7lv3.js";import"./withOsdkMetrics-D8Pyw_HQ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
