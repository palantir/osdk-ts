import{j as r}from"./iframe-CnAEf3IJ.js";import{O as b}from"./object-table-CVC6DRWA.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DeZYaNjQ.js";import{u as g}from"./useOsdkClient-Cy9h7b-X.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-gdJyLBjs.js";import"./index-B8Nz7JJW.js";import"./Dialog-D5gMprTa.js";import"./cross-Dt0cGPfd.js";import"./svgIconContainer-BIdExII8.js";import"./useBaseUiId-CeIC7NO6.js";import"./InternalBackdrop-YQuz4Vbl.js";import"./composite-CL6haQa-.js";import"./index-BcvNcIza.js";import"./index-CX6f-w2g.js";import"./index-Cig9tftr.js";import"./useEventCallback-BWgthKhM.js";import"./SkeletonBar-BTUrihaF.js";import"./LoadingCell-D8x3FqkS.js";import"./ColumnConfigDialog-cy0zOBw1.js";import"./DraggableList-BzcZwy3J.js";import"./search-CEklk6Yi.js";import"./Input-x_02lyVD.js";import"./useControlled-B_4lFiHq.js";import"./Button-C2qyHp3c.js";import"./small-cross-BLoBHL9y.js";import"./ActionButton-DZsexcaK.js";import"./Checkbox-DdiUBOXq.js";import"./useValueChanged-Ch6t91n6.js";import"./CollapsiblePanel-Di9dac_w.js";import"./MultiColumnSortDialog-7Aw90Y90.js";import"./MenuTrigger-CW4cqosj.js";import"./CompositeItem-ByBfsUTK.js";import"./ToolbarRootContext-CoOtTfWl.js";import"./getDisabledMountTransitionStyles-DPIKQDtQ.js";import"./getPseudoElementBounds-DpmHiwP5.js";import"./chevron-down-Bwa7GCIs.js";import"./index-FiIn5sfi.js";import"./error-1wJ1mTzx.js";import"./BaseCbacBanner-CuOgkWVK.js";import"./makeExternalStore-DBD3eHtk.js";import"./Tooltip-bXPrz9QG.js";import"./PopoverPopup-CUX5PsPP.js";import"./debounce-CxmUTlgJ.js";import"./tick-IIhkou4I.js";import"./DropdownField-DKvh0G9S.js";import"./isEqual-D4BavgyG.js";import"./withOsdkMetrics-B8y7kht9.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
