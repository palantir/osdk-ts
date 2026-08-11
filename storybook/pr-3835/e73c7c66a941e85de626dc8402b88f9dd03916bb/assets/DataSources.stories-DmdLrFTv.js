import{j as r}from"./iframe-yE_ETOHr.js";import{O as b}from"./object-table-BjhZj-tz.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-YuuHOt6B.js";import{u as g}from"./useOsdkClient-CAzVrqZU.js";import"./preload-helper-o6WvwBPl.js";import"./Table-B_nuRyzL.js";import"./index-D1aMrwQT.js";import"./Dialog-B1J12Dvj.js";import"./cross-BNS_XELI.js";import"./svgIconContainer-DmRPPlT8.js";import"./useBaseUiId-DRDeEW1q.js";import"./InternalBackdrop-B-FAyfTG.js";import"./composite-DwgnebsF.js";import"./index-D1PfGPZb.js";import"./index-xOQiG_tn.js";import"./index-BsSjW-k_.js";import"./useEventCallback-qSc14G5u.js";import"./SkeletonBar-RaH0ddqY.js";import"./LoadingCell-D8tQGlu0.js";import"./ColumnConfigDialog-DQj-JRN2.js";import"./DraggableList-DcunIk8q.js";import"./search-Dmjh9lBr.js";import"./Input-CCmIVrO8.js";import"./useControlled-DKJFXIxk.js";import"./isEqual-Dvhw8L28.js";import"./isObject-DIgVF9AU.js";import"./Button-k0rMWkk9.js";import"./ActionButton-rUgKZnwm.js";import"./Checkbox-CpqF5CUK.js";import"./useValueChanged-B7Z22nGK.js";import"./CollapsiblePanel-DopAfRD9.js";import"./MultiColumnSortDialog-w6hAw1Rf.js";import"./MenuTrigger-DmPE_jns.js";import"./CompositeItem-B15H_S00.js";import"./ToolbarRootContext-CIeM8gUf.js";import"./getDisabledMountTransitionStyles-CmWzICwb.js";import"./getPseudoElementBounds-Df6p-cDj.js";import"./chevron-down-CFTHRzae.js";import"./index-DFlEw2oQ.js";import"./error-DWwlREAa.js";import"./BaseCbacBanner-BmwoVVw8.js";import"./makeExternalStore-D8THS2fM.js";import"./Tooltip-C5N5ugXu.js";import"./PopoverPopup--km0kfjJ.js";import"./toNumber-CpigVrms.js";import"./tick-CmdWWdcU.js";import"./DropdownField-VyZsug_6.js";import"./withOsdkMetrics-DnRB_DeO.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
