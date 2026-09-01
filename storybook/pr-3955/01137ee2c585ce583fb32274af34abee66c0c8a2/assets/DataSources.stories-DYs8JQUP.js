import{j as r}from"./iframe-BmXghCn6.js";import{O as b}from"./object-table-D9UpOFZ4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ZK-R7fM8.js";import{u as g}from"./useOsdkClient-BSpvxK_2.js";import"./preload-helper-DyEb50hU.js";import"./Table-BvFIt6FA.js";import"./index-CkP1S794.js";import"./Dialog-CcntKMNc.js";import"./cross-1G28DJ34.js";import"./svgIconContainer-CEabMecg.js";import"./useBaseUiId-BFdWkSa3.js";import"./InternalBackdrop-Bsr2VYjE.js";import"./composite-skjDbJuY.js";import"./index-XWjp_9x9.js";import"./index-C8vp91fy.js";import"./index-N47VdsYc.js";import"./useEventCallback-9K-ZHZHx.js";import"./SkeletonBar-BTg5UwSJ.js";import"./LoadingCell-BmVyf-pJ.js";import"./ColumnConfigDialog-cwJr_Bnc.js";import"./DraggableList-DToiNID5.js";import"./search-DYe5GpMI.js";import"./Input-D8XP268p.js";import"./useControlled-BKLzfLUK.js";import"./Button-Cs6CA2sl.js";import"./small-cross-CqK4fWdL.js";import"./ActionButton-CYwjsF9h.js";import"./Checkbox-BaarIBkE.js";import"./useValueChanged-DZMD6Hgy.js";import"./CollapsiblePanel-7FaH6Awn.js";import"./MultiColumnSortDialog-WSTGwkQu.js";import"./MenuTrigger-B5AdCMJX.js";import"./CompositeItem-Kpz015F9.js";import"./ToolbarRootContext-Bv4KJP5T.js";import"./getDisabledMountTransitionStyles-jOX9CoCu.js";import"./getPseudoElementBounds-BJaYajaT.js";import"./chevron-down-BKWNxeex.js";import"./index-Bl1gUBDd.js";import"./error-8I9DfYjI.js";import"./BaseCbacBanner-BjBp6vIF.js";import"./makeExternalStore-D8WVbSgH.js";import"./Tooltip-Dsq7FhXV.js";import"./PopoverPopup-MW8o7zfB.js";import"./debounce-3vdrVhMQ.js";import"./tick-DmjFFyYl.js";import"./DropdownField-BVMUqHL9.js";import"./isEqual-CoPM5EwX.js";import"./withOsdkMetrics-BALE--sz.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
