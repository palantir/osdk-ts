import{j as r}from"./iframe-BTufhzDU.js";import{O as b}from"./object-table-CCtZX51e.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DiTtOWod.js";import{u as g}from"./useOsdkClient-tOUmwv_4.js";import"./preload-helper-18tKsGVi.js";import"./Table-BytxhvGb.js";import"./index-Bgh_kCmT.js";import"./Dialog-C9s3lFhW.js";import"./cross-CDJmthjs.js";import"./svgIconContainer-CIDYFOR4.js";import"./useBaseUiId-B_rOieJo.js";import"./InternalBackdrop-BOulsSWB.js";import"./composite-C_GDjy5Q.js";import"./index-COZLl5wP.js";import"./index-B-UiCFnv.js";import"./index-D_PI1Th3.js";import"./useEventCallback-D-COXZHZ.js";import"./SkeletonBar-ymkmzl6c.js";import"./LoadingCell-DYZ88Ngb.js";import"./ColumnConfigDialog-CMRAL8K2.js";import"./DraggableList-CSkdx2wi.js";import"./search-DSjsSTcq.js";import"./Input-GDvhao2V.js";import"./useControlled-B8odZqt5.js";import"./Button-C08Dl8zL.js";import"./small-cross-DeBGztGD.js";import"./ActionButton-CDYSucfC.js";import"./Checkbox-Byh7Dyfc.js";import"./useValueChanged-yHO5JJpr.js";import"./CollapsiblePanel-DnLCtJrZ.js";import"./MultiColumnSortDialog-DHZpgmw8.js";import"./MenuTrigger-C7Fb3nhC.js";import"./CompositeItem-C2mdT24u.js";import"./ToolbarRootContext-c-VxwH3T.js";import"./getDisabledMountTransitionStyles-CJ4mZ_K7.js";import"./getPseudoElementBounds-BRhWDMTt.js";import"./chevron-down-CqOeUkb7.js";import"./index-DEr9UFjH.js";import"./error-DOFx9qT5.js";import"./BaseCbacBanner-52v7dT8q.js";import"./makeExternalStore-CzdIOkHP.js";import"./Tooltip-CqNQQfxr.js";import"./PopoverPopup-vY6UzFEA.js";import"./debounce-BhoGA986.js";import"./tick-DEzBGa0_.js";import"./DropdownField-Y24yrVFb.js";import"./isEqual-jP6H4NT-.js";import"./withOsdkMetrics-BNGLvviV.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
