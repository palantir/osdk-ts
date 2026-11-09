import{j as r}from"./iframe-BCHKv9OM.js";import{O as b}from"./object-table-B9cXelKG.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-y56ioilP.js";import{u as g}from"./useOsdkClient-BaaChpHI.js";import"./preload-helper-VdwPsvvy.js";import"./Table-CPWiRxme.js";import"./index-Bwt2nvxG.js";import"./Dialog-DDvBinru.js";import"./cross-2PepCGpt.js";import"./svgIconContainer-DyfXuRzr.js";import"./useBaseUiId-D9fN6cGs.js";import"./InternalBackdrop-C0GHdOIg.js";import"./composite-C-pKBr51.js";import"./index-BkIhD60u.js";import"./index-z0BP5rZZ.js";import"./index-DwHqoGtG.js";import"./useEventCallback-DEkx1Ulc.js";import"./SkeletonBar-B3WDYch4.js";import"./LoadingCell-tRarhgMa.js";import"./ColumnConfigDialog-BagXSypE.js";import"./DraggableList-Ck0dsNNP.js";import"./search-DF6xe5EC.js";import"./Input-sKzdlVIX.js";import"./useControlled-BHnn3yAy.js";import"./Button-C3RFGMgN.js";import"./small-cross-95SsO8Gt.js";import"./ActionButton-8LNq2ikE.js";import"./Checkbox-D_U5yD_5.js";import"./useValueChanged-C7KiF5LC.js";import"./CollapsiblePanel-BbSBPuZD.js";import"./MultiColumnSortDialog-0X8uCerL.js";import"./MenuTrigger-evJ21J4D.js";import"./CompositeItem-BMLR6r4a.js";import"./ToolbarRootContext-CwhQOyHm.js";import"./getDisabledMountTransitionStyles-5PmgAQkM.js";import"./getPseudoElementBounds-UEouzKLj.js";import"./chevron-down-BKy1nerW.js";import"./index-C5vlMEFw.js";import"./error-6YNMu2Ib.js";import"./BaseCbacBanner-Bi4Q6fdO.js";import"./makeExternalStore-CbzDxk6X.js";import"./Tooltip-DBSqCNw9.js";import"./isObject-BYugPURt.js";import"./debounce-CdYSIISE.js";import"./tick-D35hPI0R.js";import"./DropdownField-Ce9UBfUI.js";import"./isEqual-BBtYZJe_.js";import"./_baseIsEqual-UBFzx4HI.js";import"./withOsdkMetrics-DIduflDc.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
