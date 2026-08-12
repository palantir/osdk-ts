import{j as r}from"./iframe-vXKa1QMI.js";import{O as b}from"./object-table-CPdlEq2H.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-9ydfjAaq.js";import{u as g}from"./useOsdkClient-UVS_1uod.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-B2KbARsV.js";import"./index-BZUwKl2C.js";import"./Dialog-B346A6Fx.js";import"./cross-N9iE7mDZ.js";import"./svgIconContainer-BwFoKu1X.js";import"./useBaseUiId-j7NI3ST-.js";import"./InternalBackdrop-D7qAu978.js";import"./composite-B99FTSHr.js";import"./index-vIJqV7GB.js";import"./index-SbXfcVQe.js";import"./index-BQMmSroJ.js";import"./useEventCallback-DyuJszkl.js";import"./SkeletonBar-pTVhnGW8.js";import"./LoadingCell-ByAsGI9P.js";import"./ColumnConfigDialog-CbwxOhPw.js";import"./DraggableList-qioLArWx.js";import"./search-edWvcvDt.js";import"./Input-uXEt6rMo.js";import"./useControlled-3uJBVoyi.js";import"./isEqual-B9cTqH66.js";import"./isObject-BleMCh-D.js";import"./Button-iKziWPYX.js";import"./ActionButton-Qa2tUe2e.js";import"./Checkbox-D_97xdms.js";import"./useValueChanged-qtpGI_mg.js";import"./CollapsiblePanel-DEMcYCAu.js";import"./MultiColumnSortDialog-BDO6z6hV.js";import"./MenuTrigger-D6MKRuV0.js";import"./CompositeItem-RdnTn3rE.js";import"./ToolbarRootContext-cmWIa-Ty.js";import"./getDisabledMountTransitionStyles-DPm-UrpM.js";import"./getPseudoElementBounds-BJVlWcSk.js";import"./chevron-down-TgAoBZZl.js";import"./index-1kAdlIvE.js";import"./error-BEG3c8CZ.js";import"./BaseCbacBanner-BstNjbYN.js";import"./makeExternalStore-zpEcE1We.js";import"./Tooltip-CKG0hfye.js";import"./PopoverPopup-DccWHN4d.js";import"./toNumber-Cjcz-DhM.js";import"./tick-DoVdvvfE.js";import"./DropdownField-BRIwk3d1.js";import"./withOsdkMetrics-BUmKf9Cf.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
