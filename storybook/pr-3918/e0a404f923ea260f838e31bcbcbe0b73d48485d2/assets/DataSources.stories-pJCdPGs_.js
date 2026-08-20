import{j as r}from"./iframe-9M9bsBp7.js";import{O as b}from"./object-table-DDnD0LEF.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C1TbNHTu.js";import{u as g}from"./useOsdkClient-NGrFWkeq.js";import"./preload-helper-BM4z56U2.js";import"./Table-BKceQGeK.js";import"./index-Btt-Erli.js";import"./Dialog-Bku0utZc.js";import"./cross-DvXvrJje.js";import"./svgIconContainer-CoivixKV.js";import"./useBaseUiId-Cecht4K8.js";import"./InternalBackdrop-BuQOhnSQ.js";import"./composite-cToRjaCy.js";import"./index-B06OZyEr.js";import"./index-C09389ae.js";import"./index-CaAK8RE7.js";import"./useEventCallback-BxVQKK6u.js";import"./SkeletonBar-DKCIreol.js";import"./LoadingCell-LB1z4xG-.js";import"./ColumnConfigDialog-BnTBp42F.js";import"./DraggableList-B77NFbTe.js";import"./search-DEkxxSSE.js";import"./Input-C7jKYdT3.js";import"./useControlled-w4bpKx_N.js";import"./Button-B2MqrRbr.js";import"./small-cross-C1-2zuyF.js";import"./ActionButton-Z_LMZ47a.js";import"./Checkbox-DwDZuJ7K.js";import"./useValueChanged-BO1qKB30.js";import"./CollapsiblePanel-BGWSCfkH.js";import"./MultiColumnSortDialog-MZcHdsU0.js";import"./MenuTrigger-CN7QcYrc.js";import"./CompositeItem-BB1LLivk.js";import"./ToolbarRootContext-CZOvTlyr.js";import"./getDisabledMountTransitionStyles-jVmoLSfS.js";import"./getPseudoElementBounds-BmjLOFWn.js";import"./chevron-down-DZ9BB8z3.js";import"./index-C5SnP7CW.js";import"./error-p3mSXq-q.js";import"./BaseCbacBanner-D8B4w9Kg.js";import"./makeExternalStore-DWMnQhkI.js";import"./Tooltip-B6hOpv8p.js";import"./PopoverPopup-D0gRA-kc.js";import"./debounce-Uz0h7tBs.js";import"./tick-0BTgBl0v.js";import"./DropdownField-BBxZ-1T3.js";import"./isEqual-CuHdL2kt.js";import"./withOsdkMetrics-DfgPxehB.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
