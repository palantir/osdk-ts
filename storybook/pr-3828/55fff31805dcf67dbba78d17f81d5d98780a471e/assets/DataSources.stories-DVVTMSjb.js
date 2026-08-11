import{j as r}from"./iframe-DSmQkahV.js";import{O as b}from"./object-table-CkzZi9kY.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CUq_jQzR.js";import{u as g}from"./useOsdkClient-0hTdvzJX.js";import"./preload-helper-Dze2_dsn.js";import"./Table-CllN2RPz.js";import"./index-BnRpZ-OB.js";import"./Dialog-LzIkvIDp.js";import"./cross-DONTzq6t.js";import"./svgIconContainer-C1VMrcU6.js";import"./useBaseUiId-DZaeVOmY.js";import"./InternalBackdrop-7blCXPeG.js";import"./composite-C0wZ3IJL.js";import"./index-DWtoRZwW.js";import"./index-CVy6K8lz.js";import"./index-CdpWi9dP.js";import"./useEventCallback-DhwsT0sf.js";import"./SkeletonBar-CiX-SKu5.js";import"./LoadingCell-C7TzhMU-.js";import"./ColumnConfigDialog-CkVnTZ7y.js";import"./DraggableList-DQD27J_u.js";import"./search-Dk49NEuy.js";import"./Input-HL00VtIO.js";import"./useControlled-Bc_9AmK8.js";import"./isEqual-CbqZ3cK7.js";import"./isObject-DAQa4V8v.js";import"./Button-Hhcevu4O.js";import"./ActionButton-BAa10iJB.js";import"./Checkbox-CU6hs7sG.js";import"./useValueChanged-BqVC1nP1.js";import"./CollapsiblePanel-BCdIFmjR.js";import"./MultiColumnSortDialog-DcQpZbn7.js";import"./MenuTrigger-B63seZ9q.js";import"./CompositeItem-L3IbO9d7.js";import"./ToolbarRootContext-CEbwg7y3.js";import"./getDisabledMountTransitionStyles-b9fKYi-W.js";import"./getPseudoElementBounds-BxgBGFYQ.js";import"./chevron-down-CfDyW5wu.js";import"./index-DO2tVBOL.js";import"./error-gQAP2laG.js";import"./BaseCbacBanner-BlXdT2_3.js";import"./makeExternalStore-C1pJ6Rb4.js";import"./Tooltip-BPdgoRaU.js";import"./PopoverPopup-CMKW7n-B.js";import"./toNumber-Inwhvwzt.js";import"./tick-Bbuj3ECR.js";import"./DropdownField-Bw9pwEcz.js";import"./withOsdkMetrics-ChMVQwAE.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
