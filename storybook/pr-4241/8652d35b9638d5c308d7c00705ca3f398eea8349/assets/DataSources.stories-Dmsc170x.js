import{j as r}from"./iframe-q7KMYOTO.js";import{O as b}from"./object-table-DgO3tbVC.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BfptCzLB.js";import{u as g}from"./useOsdkClient-ZW2UQ2oM.js";import"./preload-helper-6z_lVhDZ.js";import"./Table-D6GtNh9I.js";import"./index-Bu4qz67A.js";import"./Dialog-DyI3RKL7.js";import"./cross-GKTMVUJ_.js";import"./svgIconContainer-Lo22dyXX.js";import"./useBaseUiId-CDKYXFfl.js";import"./InternalBackdrop-SsdrZW55.js";import"./composite-msqnCEF7.js";import"./index-CbNuHbfY.js";import"./index-B07PL0k3.js";import"./index-DME5nm9i.js";import"./useEventCallback-DJZrmYeM.js";import"./SkeletonBar-Ccfu4MLI.js";import"./LoadingCell-CA6ibE3T.js";import"./ColumnConfigDialog-yv31C952.js";import"./DraggableList-UpJFnbaK.js";import"./search-BHHQGkAK.js";import"./Input-DS3b7656.js";import"./useControlled-wetohDUI.js";import"./Button-4IQspW2w.js";import"./small-cross-D3tEyg0V.js";import"./ActionButton-CNFIbDZG.js";import"./Checkbox-Cnr8ivVF.js";import"./useValueChanged-D5kaD1qi.js";import"./CollapsiblePanel-H_6Jafs5.js";import"./MultiColumnSortDialog-GqpWVh4K.js";import"./MenuTrigger-pX5S55rv.js";import"./CompositeItem-p-JPFChH.js";import"./ToolbarRootContext-Bn2kB8OQ.js";import"./getDisabledMountTransitionStyles-DhiQdtvX.js";import"./getPseudoElementBounds-BE8y4_SX.js";import"./chevron-down-CBifMXCi.js";import"./index-CPlC8aoM.js";import"./error-BS4T7RXs.js";import"./BaseCbacBanner-C8lw0HSZ.js";import"./makeExternalStore-CrT5GEV3.js";import"./Tooltip-CcU2cDQW.js";import"./PopoverPopup-DStAvLoC.js";import"./debounce-B7cPm2rs.js";import"./tick-DCE-nm-7.js";import"./DropdownField-BkshEdmJ.js";import"./isEqual-CLWJy1r7.js";import"./withOsdkMetrics-B9467pZU.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
