import{j as r}from"./iframe-BUHzazL7.js";import{O as b}from"./object-table-XBMiTrRZ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DIvaUA_n.js";import{u as g}from"./useOsdkClient-Bpfa90-6.js";import"./preload-helper-7pS0gMeE.js";import"./Table-DDeHODd6.js";import"./index-DAbvms11.js";import"./Dialog-C0B1XOhV.js";import"./cross-7sgOHlSE.js";import"./svgIconContainer-BXxi0rpR.js";import"./useBaseUiId-C-XGHDUu.js";import"./InternalBackdrop-DWQUsD_D.js";import"./composite-CJH_Fsm0.js";import"./index-DxPhhuRZ.js";import"./index-4VpR6oTN.js";import"./index-D9_tmeH_.js";import"./useEventCallback-DJI-8f_A.js";import"./SkeletonBar-0L9eM8bs.js";import"./LoadingCell-C4JquKRZ.js";import"./ColumnConfigDialog-1Eruji_6.js";import"./DraggableList-BDc-Fcs-.js";import"./search-DMRlY3rF.js";import"./Input-BfjcqwT4.js";import"./useControlled-Bi-hDwUg.js";import"./Button-DSLJNPkR.js";import"./small-cross-GD98Wxpt.js";import"./ActionButton-C74KTwzB.js";import"./Checkbox-BVuEO3Ob.js";import"./useValueChanged--IkhdHLc.js";import"./CollapsiblePanel-BSe5eWOg.js";import"./MultiColumnSortDialog-C0Vt9qBw.js";import"./MenuTrigger-CCRlm-zn.js";import"./CompositeItem-DKAPVnml.js";import"./ToolbarRootContext-CSl7A__z.js";import"./getDisabledMountTransitionStyles-Br83RBIR.js";import"./getPseudoElementBounds-DXs-chLM.js";import"./chevron-down-B-LRa2LO.js";import"./index-DO3hWjnR.js";import"./error-yaL4IHLV.js";import"./BaseCbacBanner-BdIaa-Er.js";import"./makeExternalStore-9kWZAU-l.js";import"./Tooltip-Ov0ymwIX.js";import"./isObject-DQHZLkoR.js";import"./debounce-BJH6rtO8.js";import"./tick-Cy-wk92W.js";import"./DropdownField-D0emNnpT.js";import"./isEqual-DysQUPNd.js";import"./_baseIsEqual-CMdutzPM.js";import"./withOsdkMetrics-BXf-ymjN.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
