import{j as r}from"./iframe-DpLKkykb.js";import{O as b}from"./object-table-CCQRTpV6.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CcvrTTVA.js";import{u as g}from"./useOsdkClient-DOvJ8crf.js";import"./preload-helper-B-LnzVrM.js";import"./Table-BWUlCOMb.js";import"./index-CGUYPJOd.js";import"./Dialog-DzkUvi49.js";import"./cross-CXiMlBtd.js";import"./svgIconContainer-CZQsWSbp.js";import"./useBaseUiId-exgAqZMu.js";import"./InternalBackdrop-DcJ6yFxi.js";import"./composite-B2s1GcRp.js";import"./index-M0qwvu5p.js";import"./index-gBz-IH4J.js";import"./index-4T6xY16C.js";import"./useEventCallback-Vl5Y4MSh.js";import"./SkeletonBar-Dy4BjWyK.js";import"./LoadingCell-lYNsC5b7.js";import"./ColumnConfigDialog-Dzuli4nh.js";import"./DraggableList-DtrhgtKM.js";import"./search-DHqp7hab.js";import"./Input-BRg86MD8.js";import"./useControlled-DGS0wgFX.js";import"./Button-CWQ4920K.js";import"./small-cross-CtsQGPXk.js";import"./ActionButton-SnW7FFWH.js";import"./Checkbox-D_THPq5z.js";import"./useValueChanged-Bq5vV2O3.js";import"./CollapsiblePanel-iZ3dIyoM.js";import"./MultiColumnSortDialog-DtOySDqq.js";import"./MenuTrigger-C0vIePhh.js";import"./CompositeItem-iDk6P1qU.js";import"./ToolbarRootContext-9nybivRl.js";import"./getDisabledMountTransitionStyles-C2Wnkcdr.js";import"./getPseudoElementBounds-CEgSfOsV.js";import"./chevron-down-C95_Fq08.js";import"./index-CLl-8Y0S.js";import"./error-B4GY5Ke1.js";import"./BaseCbacBanner-DZbBMzdd.js";import"./makeExternalStore-CIehlGBq.js";import"./Tooltip-B8_rEhlp.js";import"./isObject-DIeIJOdU.js";import"./debounce-C-RRrtJp.js";import"./tick-BzN4aODk.js";import"./DropdownField-CLNenIwJ.js";import"./isEqual-Ce49QXZx.js";import"./_baseIsEqual-BzRnqrWM.js";import"./withOsdkMetrics-DU1BWRzI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
