import{j as r}from"./iframe-DYAom9bR.js";import{O as b}from"./object-table-Dc6CFDmu.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-_wRiEWzA.js";import{u as g}from"./useOsdkClient-7x4bV1DV.js";import"./preload-helper-wH_b8k-5.js";import"./Table-26gDJzq2.js";import"./index-BDzI0DMF.js";import"./Dialog-CipKDG2b.js";import"./cross-C34zCmWz.js";import"./svgIconContainer-DlXjEWqk.js";import"./useBaseUiId-CEx3sHln.js";import"./InternalBackdrop-oAf4IP9a.js";import"./composite-BeIl570u.js";import"./index-6FSLs8PI.js";import"./index-CrUWvWSh.js";import"./index-CZVh1_T-.js";import"./useEventCallback-BU8ZD1u4.js";import"./SkeletonBar-wGn5kuO-.js";import"./LoadingCell-B0xvYzrR.js";import"./ColumnConfigDialog-BKNhCeCG.js";import"./DraggableList-la_3EMaN.js";import"./search-V7G9cPkI.js";import"./Input-OPGRVn8-.js";import"./useControlled-BCisCwEt.js";import"./Button-B95fuG8U.js";import"./small-cross-04PkP_DP.js";import"./ActionButton-Bf-Y4ACZ.js";import"./Checkbox-Di9zOXok.js";import"./useValueChanged-xixZlyWk.js";import"./CollapsiblePanel-D42XvXp9.js";import"./MultiColumnSortDialog-C3q2uSOk.js";import"./MenuTrigger-USgYIamM.js";import"./CompositeItem-fVngu3j_.js";import"./ToolbarRootContext-a__5SMe8.js";import"./getDisabledMountTransitionStyles-BrF1CFns.js";import"./getPseudoElementBounds-DoxjXqlD.js";import"./chevron-down-QO6dVwDP.js";import"./index-PnC5M3uF.js";import"./error-CX6Detdp.js";import"./BaseCbacBanner-uJgtnHA4.js";import"./makeExternalStore-CS6veLxB.js";import"./Tooltip-CXruGX6E.js";import"./PopoverPopup-DKy48gOt.js";import"./debounce-BiwqmQhi.js";import"./tick-Be40iFM6.js";import"./DropdownField-C1ueVugc.js";import"./isEqual-xgW26ERh.js";import"./withOsdkMetrics-BPYPoSmq.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
