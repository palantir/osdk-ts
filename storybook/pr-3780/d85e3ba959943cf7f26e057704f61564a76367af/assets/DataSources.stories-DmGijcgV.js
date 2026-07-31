import{j as r}from"./iframe-nm7eIgX9.js";import{O as b}from"./object-table-B6mNHRMH.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CRn4-uB-.js";import{u as g}from"./useOsdkClient-B4QMJphH.js";import"./preload-helper-xnNK-q7j.js";import"./Table-yFRUIBYc.js";import"./index-CL6V_FJD.js";import"./Dialog-D1YDlBya.js";import"./cross-CH8L4sxq.js";import"./svgIconContainer-C62k5sq7.js";import"./useBaseUiId-DBJaT0Wa.js";import"./InternalBackdrop-7d0XW0Cg.js";import"./composite-ClirUg7p.js";import"./index-ClI1wKdU.js";import"./index-C9RhWig-.js";import"./index-D7PRq_DM.js";import"./useEventCallback-BgBKpXww.js";import"./SkeletonBar-fq6nNB61.js";import"./LoadingCell-DvFlUa2I.js";import"./ColumnConfigDialog-Cue7xcis.js";import"./DraggableList-DqOpTakn.js";import"./search-CLOlj8c_.js";import"./Input-cZWR-4H8.js";import"./useControlled-BGjTzEiM.js";import"./isEqual-e9TZvkud.js";import"./isObject-D2gBWA7W.js";import"./Button-BEdWrE0m.js";import"./ActionButton-YFxN7Dhh.js";import"./Checkbox-DrR4uRxm.js";import"./useValueChanged-BWtlsxVl.js";import"./CollapsiblePanel-DnkSQ8qM.js";import"./MultiColumnSortDialog-qA4xo1Ms.js";import"./MenuTrigger-x3aXd9J2.js";import"./CompositeItem-yDyDoF89.js";import"./ToolbarRootContext-7ilHDKSN.js";import"./getDisabledMountTransitionStyles-Cps7_QV-.js";import"./getPseudoElementBounds-er0igS0G.js";import"./chevron-down-CWzDP1O4.js";import"./index-CHK_BJAR.js";import"./error-BXtnxwmG.js";import"./BaseCbacBanner-C8IkGo1W.js";import"./makeExternalStore-Cl341ALS.js";import"./Tooltip-DuL7FNde.js";import"./PopoverPopup-DPv6nHd9.js";import"./toNumber-DaDCBP4c.js";import"./tick-6fv99-OX.js";import"./DropdownField-B_uTfwAo.js";import"./withOsdkMetrics-NfqQgt5n.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
