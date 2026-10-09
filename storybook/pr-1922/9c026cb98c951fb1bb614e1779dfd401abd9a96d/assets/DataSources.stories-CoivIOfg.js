import{j as r}from"./iframe-DX-l5oxf.js";import{O as b}from"./object-table-CMeRtf6m.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-MRp6jtXn.js";import{u as g}from"./useOsdkClient-PSxxWjKh.js";import"./preload-helper-BOWhuEYI.js";import"./Table-D8LXq3-7.js";import"./index-hUdVkOSF.js";import"./Dialog-C1obDNrb.js";import"./cross-DToDNxNQ.js";import"./svgIconContainer-DSaf8hGr.js";import"./useBaseUiId-BTelihs1.js";import"./InternalBackdrop-DD9gAX9c.js";import"./composite-DHW7DpWZ.js";import"./index-CvzBQu91.js";import"./index-DKU9qBjC.js";import"./index-BDesfFDk.js";import"./useEventCallback-lUzYahFI.js";import"./SkeletonBar-Dxx28Vqn.js";import"./LoadingCell-ByCc7EKm.js";import"./ColumnConfigDialog-BPZNMrlq.js";import"./DraggableList-CJwwr4Yf.js";import"./search-DT7eSnzT.js";import"./Input-CqfuiCDH.js";import"./useControlled-CE0B1UP9.js";import"./Button-Bia0gDW5.js";import"./small-cross-uN8t5TW7.js";import"./ActionButton-C9oV7lmY.js";import"./Checkbox-B7wFdEVK.js";import"./useValueChanged-Daouhnb_.js";import"./CollapsiblePanel-BHApUmp_.js";import"./MultiColumnSortDialog-BJ890ujW.js";import"./MenuTrigger-C67nlkhF.js";import"./CompositeItem-BsouXCK9.js";import"./ToolbarRootContext-PE3H7k4f.js";import"./getDisabledMountTransitionStyles-CoQlRch0.js";import"./getPseudoElementBounds-Ifrg8lN5.js";import"./chevron-down-D6qpfBFJ.js";import"./index-DoliQ3t-.js";import"./error-BJoLJTeb.js";import"./BaseCbacBanner-iBkMCvPn.js";import"./makeExternalStore-Djn3Ds7r.js";import"./Tooltip-DVY46vFo.js";import"./PopoverPopup-D_QYRjKS.js";import"./debounce-C3gGtxAY.js";import"./tick-B4vi0CcG.js";import"./DropdownField-BbcYs9HM.js";import"./isEqual-BvWz3r_F.js";import"./withOsdkMetrics-DEq0VNPe.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
