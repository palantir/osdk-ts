import{j as r}from"./iframe-BJcI6I7N.js";import{O as b}from"./object-table-BFK3o9VN.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dy3gCuaD.js";import{u as g}from"./useOsdkClient-Jr33iov8.js";import"./preload-helper-t8YjvYIO.js";import"./Table-COi2UZK5.js";import"./index-ciSMf65j.js";import"./Dialog-qZDZtUTL.js";import"./cross-BXeyHaO7.js";import"./svgIconContainer-ChDR1isz.js";import"./useBaseUiId-DEblu5yn.js";import"./InternalBackdrop-zWlD-uj6.js";import"./composite-idv80Jfn.js";import"./index-2EHDOsjj.js";import"./index-CwTnZiyW.js";import"./index-C7gjBbhW.js";import"./useEventCallback-D2AFx3Tw.js";import"./SkeletonBar-Bb1sSD9X.js";import"./LoadingCell-CMKDwxYN.js";import"./ColumnConfigDialog-BYMbCCuR.js";import"./DraggableList-DalDAJj1.js";import"./search-c-uEdInI.js";import"./Input-kyBh5Wk4.js";import"./useControlled-CouybXNc.js";import"./Button-0eHUW9F4.js";import"./small-cross-p3VCPLe0.js";import"./ActionButton-ClWqSrJc.js";import"./Checkbox-BsUCCShW.js";import"./useValueChanged-C92q1_Gi.js";import"./CollapsiblePanel-C_sKcFRB.js";import"./MultiColumnSortDialog-F7srt2ws.js";import"./MenuTrigger-BlR6vsHK.js";import"./CompositeItem-DBn217Rb.js";import"./ToolbarRootContext-Dl2ojvsq.js";import"./getDisabledMountTransitionStyles-CufsIM65.js";import"./getPseudoElementBounds-B6bLm4lL.js";import"./chevron-down-BrRIIpof.js";import"./index-CRh5r80N.js";import"./error-llhgzFId.js";import"./BaseCbacBanner-D2kp_nW7.js";import"./makeExternalStore-DeicAe6-.js";import"./Tooltip-Dl2lUrm5.js";import"./PopoverPopup-CgNtTmRS.js";import"./debounce-wJHHfadf.js";import"./tick-BazIxijd.js";import"./DropdownField-kCDd1U-6.js";import"./isEqual-CAWOzucC.js";import"./withOsdkMetrics-Da2pPJDy.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
