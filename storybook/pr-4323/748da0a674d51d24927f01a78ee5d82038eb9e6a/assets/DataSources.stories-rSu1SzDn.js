import{j as r}from"./iframe-C3HFz_5t.js";import{O as b}from"./object-table-D4nnc4fH.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-pxdVrLA8.js";import{u as g}from"./useOsdkClient-B9v2FimT.js";import"./preload-helper-Lu-1fXSQ.js";import"./Table-YAoAfofb.js";import"./index-C294enkt.js";import"./Dialog-DEYwtx14.js";import"./cross-VDE-QV8Y.js";import"./svgIconContainer-Dx7Oqsa5.js";import"./useBaseUiId-Bldx0Hal.js";import"./InternalBackdrop-DJRSYLek.js";import"./composite-D03Np3Q8.js";import"./index-jlzeR6Al.js";import"./index-YNwbQPnW.js";import"./index-B7jmGBVS.js";import"./useEventCallback-C-PGdIYD.js";import"./SkeletonBar-DGKfF2S7.js";import"./LoadingCell-C1WN3_o-.js";import"./ColumnConfigDialog-BjGJy6Dt.js";import"./DraggableList-BI-9U1zg.js";import"./search-DicQa5iZ.js";import"./Input-C6djVFfS.js";import"./useControlled-CO4tNWxM.js";import"./Button-BCjPDU8B.js";import"./small-cross-BXZDNcqg.js";import"./ActionButton-BTKeHAqS.js";import"./Checkbox-D0DLF897.js";import"./useValueChanged-BRuQsI8Y.js";import"./CollapsiblePanel-BsUoXH1E.js";import"./MultiColumnSortDialog-D-LKE5Gr.js";import"./MenuTrigger-dLKf57bk.js";import"./CompositeItem-Ljl_SfE6.js";import"./ToolbarRootContext-QkATP4Zh.js";import"./getDisabledMountTransitionStyles-AZ8EU8I1.js";import"./getPseudoElementBounds-aWxumBMj.js";import"./chevron-down-DKXpMnZC.js";import"./index-o5L_LgpC.js";import"./error-NlvFbJx8.js";import"./BaseCbacBanner-CZYijgNC.js";import"./makeExternalStore-CTKXCo5y.js";import"./Tooltip-BAxfPrcD.js";import"./PopoverPopup-B4HM-lxB.js";import"./debounce-IhEbnEYZ.js";import"./tick-BQmvO2-Z.js";import"./DropdownField-Bq0jfkKU.js";import"./isEqual--r9Zetx6.js";import"./withOsdkMetrics-CwJ1jB1x.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
