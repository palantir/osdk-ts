import{j as r}from"./iframe-EWNiSOlz.js";import{O as b}from"./object-table-Uipb07KI.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Ch8AC1lz.js";import{u as g}from"./useOsdkClient-DCWWGmw4.js";import"./preload-helper-DINoBAyp.js";import"./Table-QoAP4mmD.js";import"./index-J8uMkFcT.js";import"./Dialog-CipO93Rx.js";import"./cross-D8UDZUVl.js";import"./svgIconContainer-i8Q-3NvR.js";import"./useBaseUiId-CbA5EQtD.js";import"./InternalBackdrop-DRn4jQWF.js";import"./composite-PBGFU2UH.js";import"./index-9MkXRS7h.js";import"./index-D-TWmAa9.js";import"./index-CZ5IyMT1.js";import"./useEventCallback-CRVVwfhq.js";import"./SkeletonBar-BCrT0Owt.js";import"./LoadingCell-C0h5XXfB.js";import"./ColumnConfigDialog-C2TZXtEN.js";import"./DraggableList-Dh_a88iA.js";import"./search-Ct4Cy4Cw.js";import"./Input-BLbu68-y.js";import"./useControlled-D0-X3QeL.js";import"./isEqual-B3gSTOQa.js";import"./isObject-DeF9seGk.js";import"./Button-NJGcULYm.js";import"./ActionButton-bhd-S6xZ.js";import"./Checkbox-D33aXMhq.js";import"./useValueChanged-CnR3ZXJ1.js";import"./CollapsiblePanel-DAnd43Yl.js";import"./MultiColumnSortDialog-XUB96F1J.js";import"./MenuTrigger-ita0ycJf.js";import"./CompositeItem-BxLQcrHq.js";import"./ToolbarRootContext-E7FpR2J5.js";import"./getDisabledMountTransitionStyles-qQlhRRpu.js";import"./getPseudoElementBounds-Bzj5pAC2.js";import"./chevron-down-B_x7olCL.js";import"./index-K2vh5oUT.js";import"./error-Bm5OuOKZ.js";import"./BaseCbacBanner-BRxxkIA1.js";import"./makeExternalStore-C-uT0tmI.js";import"./Tooltip-D8N1BZrp.js";import"./PopoverPopup-CUaaYVQa.js";import"./toNumber-CWbAo7JW.js";import"./tick-C3V4rDEB.js";import"./DropdownField-8TAGjNxo.js";import"./withOsdkMetrics-CgmzOPIb.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
