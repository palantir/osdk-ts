import{j as r}from"./iframe-CTMkKkzw.js";import{O as b}from"./object-table-BoI1Twv3.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D5GT8ZGw.js";import{u as g}from"./useOsdkClient-DH7pH4yQ.js";import"./preload-helper-DG8pwmv3.js";import"./Table-BbZEYEYW.js";import"./index-BL_iYgDS.js";import"./Dialog-DQWTaCay.js";import"./cross-B-D9SFl0.js";import"./svgIconContainer-BUps9CL-.js";import"./useBaseUiId-Nc3myLqM.js";import"./InternalBackdrop-svBxXw7w.js";import"./composite-np7yuSJU.js";import"./index-B9bA0pQd.js";import"./index-KMN5SPjN.js";import"./index-BJk5b2Mi.js";import"./useEventCallback-f_5J5lhm.js";import"./SkeletonBar-Cam1cO27.js";import"./LoadingCell-nmJ0UveC.js";import"./ColumnConfigDialog-CpB6YrKO.js";import"./DraggableList-BqU_NHOS.js";import"./search-8dNzS2xV.js";import"./Input-SxG8NTwK.js";import"./useControlled-Dmn8OKSb.js";import"./Button-u7wDd7Jy.js";import"./small-cross-reWYho1p.js";import"./ActionButton-DwFZ69ro.js";import"./Checkbox-DsqG9F4o.js";import"./useValueChanged-DAzMvShK.js";import"./CollapsiblePanel-q_Q68xut.js";import"./MultiColumnSortDialog-BYp7xfWY.js";import"./MenuTrigger-3EqQfhmD.js";import"./CompositeItem-CSULberz.js";import"./ToolbarRootContext-CIGDW9Ar.js";import"./getDisabledMountTransitionStyles-DWNlrkIU.js";import"./getPseudoElementBounds-CcioB7ar.js";import"./chevron-down-BCsUFncR.js";import"./index-C4YYp6_d.js";import"./error-BFPACif0.js";import"./BaseCbacBanner-CNBD9coo.js";import"./makeExternalStore-CLmOAONC.js";import"./Tooltip-DQT__ibc.js";import"./PopoverPopup-CqAzZfVr.js";import"./debounce-ByrkZFkK.js";import"./tick-ZXxKzXjV.js";import"./DropdownField-Cg1kzpH9.js";import"./isEqual-CCbd-MC2.js";import"./withOsdkMetrics-BkagLhYt.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
