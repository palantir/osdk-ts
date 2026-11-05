import{j as r}from"./iframe-CzN2QreI.js";import{O as b}from"./object-table-BhXf9gA2.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DdSSq3_E.js";import{u as g}from"./useOsdkClient-5OnXM-6H.js";import"./preload-helper-BXZu3mB8.js";import"./Table-D-s_rfWN.js";import"./index-Bj6GQi9V.js";import"./Dialog-vvjS-bkJ.js";import"./cross-B7QKnjh-.js";import"./svgIconContainer-DJR2Y9nG.js";import"./useBaseUiId-XpXvVpGq.js";import"./InternalBackdrop-t9svslOk.js";import"./composite-CvZGZMr_.js";import"./index-CP-vzmXq.js";import"./index-_8V292Ph.js";import"./index-LOsE3mZd.js";import"./useEventCallback-Bm9HIaTl.js";import"./SkeletonBar-CLEVVnPB.js";import"./LoadingCell-Bq12_82I.js";import"./ColumnConfigDialog-CeXz8J4h.js";import"./DraggableList-OvooNtbU.js";import"./search-CBwzahSV.js";import"./Input-CegjBPQP.js";import"./useControlled-DC4k4z6-.js";import"./Button-CdEdBbWo.js";import"./small-cross-BfZaK0QA.js";import"./ActionButton-DTFbCjfZ.js";import"./Checkbox-D8x43nJp.js";import"./useValueChanged-CvEwy5iK.js";import"./CollapsiblePanel-BUy1MqPT.js";import"./MultiColumnSortDialog-CBT_vACM.js";import"./MenuTrigger-6qVuDcDW.js";import"./CompositeItem-C2xi6NQ8.js";import"./ToolbarRootContext-CKTJAN59.js";import"./getDisabledMountTransitionStyles-qsFKgmF7.js";import"./getPseudoElementBounds-BxGUr7sx.js";import"./chevron-down-CQ9C1iv5.js";import"./index-DT9lB2o2.js";import"./error-Ds-mn25o.js";import"./BaseCbacBanner-HjtbhaLm.js";import"./makeExternalStore-zsuQEbmY.js";import"./Tooltip-BoGe89IF.js";import"./isObject-BPoSeG26.js";import"./debounce-BSJqKk9p.js";import"./tick-Cvtd471A.js";import"./DropdownField-BHbHoXLN.js";import"./isEqual-COArf5ti.js";import"./_baseIsEqual-CLLJPHoE.js";import"./withOsdkMetrics-2pGXUPgq.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
