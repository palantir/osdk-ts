import{j as r}from"./iframe-CRvr4m23.js";import{O as b}from"./object-table-b8tcKba1.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BCcffLRZ.js";import{u as g}from"./useOsdkClient-Bx3PkGcF.js";import"./preload-helper-DdCCWYOA.js";import"./Table-Bj__yKc6.js";import"./index-D9ceHjwW.js";import"./Dialog-Cie038FA.js";import"./cross-C9z9h8JK.js";import"./svgIconContainer-DGdcF-OS.js";import"./useBaseUiId-B6Sq2DDd.js";import"./InternalBackdrop-BxZfZedD.js";import"./composite-BaJaFCUV.js";import"./index-C-IWKanX.js";import"./index-DjDCowvu.js";import"./index-DJL6J6Yv.js";import"./useEventCallback-D3cYyTze.js";import"./SkeletonBar-BcFufqC8.js";import"./LoadingCell-52h9HBzW.js";import"./ColumnConfigDialog-BoVl4f11.js";import"./DraggableList-CzL0YJBu.js";import"./search-S4tClITX.js";import"./Input-Bb951IY0.js";import"./useControlled-CzRMF11H.js";import"./Button-CICDzuCH.js";import"./small-cross-B41-2T8P.js";import"./ActionButton-CdBe91xX.js";import"./Checkbox-DqptaqLe.js";import"./useValueChanged-CZQ4YioP.js";import"./CollapsiblePanel-DOhZMIUq.js";import"./MultiColumnSortDialog-DMM04g0W.js";import"./MenuTrigger-TLk2OofL.js";import"./CompositeItem-AIxAUMBi.js";import"./ToolbarRootContext-CSQhZUTB.js";import"./getDisabledMountTransitionStyles-C-PY_iOt.js";import"./getPseudoElementBounds-CyO_YVnW.js";import"./chevron-down-D0i9lEgO.js";import"./index-B0l7E8Kk.js";import"./error-ClpIR9By.js";import"./BaseCbacBanner-BZbKEwfF.js";import"./makeExternalStore-B5l5c53p.js";import"./Tooltip-CRs42sBR.js";import"./isObject-B8xrtduv.js";import"./debounce-B7GzlHZ2.js";import"./tick-CR12WH8n.js";import"./DropdownField-m8FHeW1l.js";import"./isEqual-9tV0CO0a.js";import"./_baseIsEqual-DHO7-zGr.js";import"./withOsdkMetrics-Dd7zkJUD.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
