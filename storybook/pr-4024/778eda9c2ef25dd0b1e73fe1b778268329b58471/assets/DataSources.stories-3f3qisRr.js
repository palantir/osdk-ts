import{j as r}from"./iframe-BCQQ5idH.js";import{O as b}from"./object-table-CiAWSjw6.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DGKP8ACE.js";import{u as g}from"./useOsdkClient-B5gZh-Vy.js";import"./preload-helper-coqosfEI.js";import"./Table-BjsGcEug.js";import"./index-nevoWaco.js";import"./Dialog-C5qQPBcK.js";import"./cross-CEa64cbV.js";import"./svgIconContainer-CKj1NjbI.js";import"./useBaseUiId-DiDvWzye.js";import"./InternalBackdrop-N2Ue8An6.js";import"./composite-D0UtEOtq.js";import"./index-B3YRQCj_.js";import"./index-D04-iFGI.js";import"./index-BzNe3PgQ.js";import"./useEventCallback-Ba_k9sT5.js";import"./SkeletonBar-C04_QzCc.js";import"./LoadingCell-CxctrIdy.js";import"./ColumnConfigDialog-9haTRGzY.js";import"./DraggableList-BbZm-3gx.js";import"./search-BBu7BPS5.js";import"./Input-C6nfWZbz.js";import"./useControlled-Cq_GfurO.js";import"./Button-CEig4mHb.js";import"./small-cross-BGKOGZvf.js";import"./ActionButton-DHvPjza2.js";import"./Checkbox-B6jpZoN4.js";import"./useValueChanged-D3kLtDwA.js";import"./CollapsiblePanel-GdXVEA_b.js";import"./MultiColumnSortDialog-CtgSOTwj.js";import"./MenuTrigger-C0kxST0T.js";import"./CompositeItem-ldRXr3Bh.js";import"./ToolbarRootContext-BXYKMrbO.js";import"./getDisabledMountTransitionStyles-BQ29FsW-.js";import"./getPseudoElementBounds-Ckqa6CIQ.js";import"./chevron-down-DUkETYvc.js";import"./index-CLw5_nKq.js";import"./error-CJVmwm75.js";import"./BaseCbacBanner-8gebQmnF.js";import"./makeExternalStore-DUkSZpJS.js";import"./Tooltip-O_DZ5X_J.js";import"./PopoverPopup-dla5XZcT.js";import"./debounce-C1U5cA8k.js";import"./tick--0MwaCEo.js";import"./DropdownField-DO1VI0xx.js";import"./isEqual-BbjsSR4E.js";import"./withOsdkMetrics-SGz3lb0q.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
