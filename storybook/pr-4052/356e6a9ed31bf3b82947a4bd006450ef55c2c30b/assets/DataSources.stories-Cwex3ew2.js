import{j as r}from"./iframe-BJw8xZnq.js";import{O as b}from"./object-table-CV9CfMOU.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C6ui7vGU.js";import{u as g}from"./useOsdkClient-5xfZ-Z4n.js";import"./preload-helper-C2M64jAW.js";import"./Table--X2vlNvm.js";import"./index-OZdfTJJN.js";import"./Dialog-C6bZdgnl.js";import"./cross-ayN7c-y5.js";import"./svgIconContainer-BD36YhX4.js";import"./useBaseUiId-DWHIjuQg.js";import"./InternalBackdrop-7aYdMSzr.js";import"./composite-BmKPsG7H.js";import"./index-HEHrx6Vm.js";import"./index-CIQ7NXi0.js";import"./index-DwCLziCf.js";import"./useEventCallback-BUxi4iJJ.js";import"./SkeletonBar-C_Mx4TPl.js";import"./LoadingCell-Gi2iLYRu.js";import"./ColumnConfigDialog-B2iCppyX.js";import"./DraggableList-CmCo9PIT.js";import"./search-DuV2mZJ_.js";import"./Input-DNqdhRno.js";import"./useControlled-CmyWRfbd.js";import"./Button-DER1yH7e.js";import"./small-cross-BczxdS3W.js";import"./ActionButton-CPTKvkGq.js";import"./Checkbox-BTlV08fZ.js";import"./useValueChanged-XcNypFDC.js";import"./CollapsiblePanel-DCUNFkEE.js";import"./MultiColumnSortDialog-BnQFcJMo.js";import"./MenuTrigger-DBEWtO6_.js";import"./CompositeItem-DURcqFyw.js";import"./ToolbarRootContext-CQeuoYdu.js";import"./getDisabledMountTransitionStyles-CS4l_9WU.js";import"./getPseudoElementBounds-aUPqgKrY.js";import"./chevron-down-DDWnpoJ_.js";import"./index-nvfKD9w9.js";import"./error-DreCvNNp.js";import"./BaseCbacBanner-eIucyAuW.js";import"./makeExternalStore-BEcA8UuC.js";import"./Tooltip-Dm91FxLr.js";import"./PopoverPopup-DyJ-hgtR.js";import"./debounce-B2aA8tZ4.js";import"./tick-DNZxoz-8.js";import"./DropdownField-y9HzYpWx.js";import"./isEqual-CbDouTcU.js";import"./withOsdkMetrics-BnQETS83.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
