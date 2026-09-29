import{j as r}from"./iframe-Cu9w7jcH.js";import{O as b}from"./object-table-Bn0AzQbY.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BrqxZqfg.js";import{u as g}from"./useOsdkClient-DUbXAUGd.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CWqMgw5D.js";import"./index-CISo5zfR.js";import"./Dialog-DdDrC9tX.js";import"./cross-B8KHmrzZ.js";import"./svgIconContainer-Dw0CoQx7.js";import"./useBaseUiId-BjT3tUdU.js";import"./InternalBackdrop-DDT8m1IB.js";import"./composite-CQfO24RT.js";import"./index-D8iZ8WU_.js";import"./index-DiQpPnIR.js";import"./index-DqpMoyiI.js";import"./useEventCallback-BWcmln1Y.js";import"./SkeletonBar-DdY3k6U9.js";import"./LoadingCell-COlUHupL.js";import"./ColumnConfigDialog-03GqgHqt.js";import"./DraggableList-DYftbGXA.js";import"./search-BN3GL8EC.js";import"./Input-B4v38P0N.js";import"./useControlled-8gLzMwC4.js";import"./Button-D273o8ES.js";import"./small-cross-D6DQ7NJv.js";import"./ActionButton-CjgGx4Lw.js";import"./Checkbox-Ii7m0dCL.js";import"./useValueChanged-Be9YjO8J.js";import"./CollapsiblePanel-BGK9MEKX.js";import"./MultiColumnSortDialog-DaU2lZLl.js";import"./MenuTrigger-DYsls7wD.js";import"./CompositeItem-kmbcRbAD.js";import"./ToolbarRootContext-TnMpdXUN.js";import"./getDisabledMountTransitionStyles-BqP1cavL.js";import"./getPseudoElementBounds-BT81kHqt.js";import"./chevron-down-C5muOK6K.js";import"./index-DkVw3DhA.js";import"./error-DCGe0X_V.js";import"./BaseCbacBanner-CITuvEvV.js";import"./makeExternalStore-ChDoBLQb.js";import"./Tooltip-B-4lupYo.js";import"./PopoverPopup-BD-mSjSu.js";import"./debounce-Bt8yXtd0.js";import"./tick-Blb6T-l7.js";import"./DropdownField-CxinIrMS.js";import"./isEqual-CvVjxDCI.js";import"./withOsdkMetrics-DguEd9bl.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
