import{j as r}from"./iframe-C0MgyNRE.js";import{O as b}from"./object-table-BLliszwm.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CEGGsVbj.js";import{u as g}from"./useOsdkClient-Ccq50_Dk.js";import"./preload-helper-DQoH0Nuo.js";import"./Table-BqUvw1je.js";import"./index---acoC-r.js";import"./Dialog-DhukfYta.js";import"./cross-CDqB6Pmb.js";import"./svgIconContainer-BKLjPPf4.js";import"./useBaseUiId-Q4ONINdB.js";import"./InternalBackdrop-rlHdNk5g.js";import"./composite-BfZwON16.js";import"./index-AZR5iI7Q.js";import"./index-C-iYCFDc.js";import"./index-DVx8jUCi.js";import"./useEventCallback-D9l2Sgfp.js";import"./SkeletonBar-CTwZ2QYa.js";import"./LoadingCell-DxXNh-zl.js";import"./ColumnConfigDialog-DxvHuOv6.js";import"./DraggableList-DP2OraGG.js";import"./search-CnqYke8S.js";import"./Input-BAC6a1Nu.js";import"./useControlled-BBrJL19c.js";import"./Button-DPYKSMTC.js";import"./small-cross-gL4Blcc6.js";import"./ActionButton-DcSbKUFA.js";import"./Checkbox-DWFxIo3E.js";import"./useValueChanged-rqsds79W.js";import"./CollapsiblePanel-DBgZ58Ev.js";import"./MultiColumnSortDialog-D0RWAJ94.js";import"./MenuTrigger-CCqSXm39.js";import"./CompositeItem-4Z6N9TGd.js";import"./ToolbarRootContext-DTiKt-1r.js";import"./getDisabledMountTransitionStyles-DOeog0sh.js";import"./getPseudoElementBounds-f4HbG8Fm.js";import"./chevron-down-3JGU9uXG.js";import"./index-DLQpaEnR.js";import"./error-DWVeEt8h.js";import"./BaseCbacBanner-BCZLghhn.js";import"./makeExternalStore-CJPI6JTX.js";import"./Tooltip-BhEegg2P.js";import"./isObject-BQeCy5y1.js";import"./debounce-Bi1ZMfOq.js";import"./tick-8uJq1GYC.js";import"./DropdownField-GlOSN0XT.js";import"./isEqual-DYvTBXV4.js";import"./_baseIsEqual-CEtqIxGI.js";import"./withOsdkMetrics-DhnlLT_e.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
