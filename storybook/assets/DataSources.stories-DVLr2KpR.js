import{j as r}from"./iframe-sCC61k92.js";import{O as b}from"./object-table-Mdjlx4Ke.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-wIechBvj.js";import{u as g}from"./useOsdkClient-C8WGuLkk.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DcSmCGEJ.js";import"./index-COwL7OJ8.js";import"./Dialog-MQVy5lzB.js";import"./cross-DRK3VtDX.js";import"./svgIconContainer-hqfoTYTd.js";import"./useBaseUiId-BliaD1O6.js";import"./InternalBackdrop-B3dfpWNK.js";import"./composite-CISHKC9x.js";import"./index-BO4p12nE.js";import"./index-BPgVurxA.js";import"./index-BPupFXYK.js";import"./useEventCallback-Ce-cRsvG.js";import"./SkeletonBar-CwQdqdMR.js";import"./LoadingCell-tO7EVVGR.js";import"./ColumnConfigDialog-D0_f0eWX.js";import"./DraggableList-C7RmjcDp.js";import"./search-BCt11QUz.js";import"./Input-oPnlo5ZK.js";import"./useControlled-QNZ0QZkj.js";import"./Button-CuqFP7rB.js";import"./small-cross-DuGAeEln.js";import"./ActionButton-KMvLy2U-.js";import"./Checkbox-CZTc9Hct.js";import"./useValueChanged-ClT-kz_1.js";import"./CollapsiblePanel-nEea4UtK.js";import"./MultiColumnSortDialog-WfN_XSl-.js";import"./MenuTrigger-DwEmv81m.js";import"./CompositeItem-DoarEqny.js";import"./ToolbarRootContext-C2ojXHeq.js";import"./getDisabledMountTransitionStyles-a-o7jZ9k.js";import"./getPseudoElementBounds-DMHhNAb7.js";import"./chevron-down-5SB1wRqG.js";import"./index-B-SSDTy4.js";import"./error-DG5J3I3H.js";import"./BaseCbacBanner-CFeBxzk8.js";import"./makeExternalStore-BHhNjBOZ.js";import"./Tooltip-tKWANxvR.js";import"./PopoverPopup-DWR0jCHo.js";import"./debounce-DfOnU9UJ.js";import"./tick-DkGxN_Ch.js";import"./DropdownField-BAeW6QRw.js";import"./isEqual-DfRx8L9e.js";import"./withOsdkMetrics-B8lVQvrV.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
