import{j as r}from"./iframe-CjpAd4U5.js";import{O as b}from"./object-table-B1N2YZGj.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BOGBNxCf.js";import{u as g}from"./useOsdkClient-C1vhGPX1.js";import"./preload-helper-BfNxESlv.js";import"./Table-B-2W-CJ2.js";import"./index-CFyMtNDf.js";import"./Dialog-BTEOwbFI.js";import"./cross-YCEgVYb5.js";import"./svgIconContainer-BfRjvWya.js";import"./useBaseUiId-DtGYbhuk.js";import"./InternalBackdrop-_y5D9f1C.js";import"./composite-CXKEjPEl.js";import"./index-CESQmif6.js";import"./index-BqxRrYRP.js";import"./index-6181skxy.js";import"./useEventCallback-CJNt2kD4.js";import"./SkeletonBar-C6jHBjWT.js";import"./LoadingCell-DsM74MbC.js";import"./ColumnConfigDialog-D16XIRUR.js";import"./DraggableList-T2ec2RNh.js";import"./search-CXQZDVwK.js";import"./Input-BMeqWiRY.js";import"./useControlled-DlmQuXZO.js";import"./Button-B8Qahzmt.js";import"./small-cross-D9G7qUei.js";import"./ActionButton-CpKjD_O3.js";import"./Checkbox-Bpk90P30.js";import"./useValueChanged-C6MnAZ9a.js";import"./CollapsiblePanel-DuW80WT3.js";import"./MultiColumnSortDialog-CW0LUVRi.js";import"./MenuTrigger-CCjqXcFD.js";import"./CompositeItem-M0I4N5Qo.js";import"./ToolbarRootContext-pZWEREev.js";import"./getDisabledMountTransitionStyles-DQtOlfYI.js";import"./getPseudoElementBounds-VcyCM6_5.js";import"./chevron-down-Dk_9PWbo.js";import"./index-D-J9KFgM.js";import"./error-DP0C5EXb.js";import"./BaseCbacBanner-Cu9DTugF.js";import"./makeExternalStore-m3vRiWo8.js";import"./Tooltip-BDKJdSJE.js";import"./PopoverPopup-D3nKiinq.js";import"./debounce-DcMhn9AR.js";import"./tick-Dy5_FPax.js";import"./DropdownField-DCYZRjtJ.js";import"./isEqual-CTh71RS_.js";import"./withOsdkMetrics-q9Wg1g7p.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
