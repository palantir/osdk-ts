import{j as r}from"./iframe-UsJOy75R.js";import{O as b}from"./object-table-DfGlC2U4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B_CVwaf9.js";import{u as g}from"./useOsdkClient-B4gpQY7o.js";import"./preload-helper-BMFhjcbd.js";import"./Table-t1Qpgusu.js";import"./index-LJeXjTdh.js";import"./Dialog-BEQy-MMo.js";import"./cross-BFteWzwf.js";import"./svgIconContainer-fImKWsr3.js";import"./useBaseUiId-BrB63-GA.js";import"./InternalBackdrop-BvLkiF1F.js";import"./composite-C9sM39C4.js";import"./index-B6uoE1g4.js";import"./index-_ScyNYUM.js";import"./index-BiyqCy7k.js";import"./useEventCallback-4YDJMtg5.js";import"./SkeletonBar-6HxN9bQ-.js";import"./LoadingCell-CclmtLk1.js";import"./ColumnConfigDialog-DnFW9xYC.js";import"./DraggableList-CCrQnUpT.js";import"./search-Ch0geOF0.js";import"./Input-CtUjoKBa.js";import"./useControlled-CUgFibpX.js";import"./Button-D7E7FwX5.js";import"./small-cross-BOpZ-6OG.js";import"./ActionButton-B_I8L5VG.js";import"./Checkbox-DYapDyGT.js";import"./useValueChanged-DElP9LhV.js";import"./CollapsiblePanel-BWwXPV-O.js";import"./MultiColumnSortDialog-DIyR453J.js";import"./MenuTrigger-BLBgkFH1.js";import"./CompositeItem-CtPMwd_g.js";import"./ToolbarRootContext-Ch0u-hZt.js";import"./getDisabledMountTransitionStyles-CVQ-Uwt_.js";import"./getPseudoElementBounds-CEd1PQdU.js";import"./chevron-down-B8hI3iSa.js";import"./index-RoLHKfsw.js";import"./error-DSrMae8G.js";import"./BaseCbacBanner-DQMQBEwH.js";import"./makeExternalStore-CrvnmPw1.js";import"./Tooltip-DfMLTWhn.js";import"./PopoverPopup-DEnJfeh4.js";import"./debounce-C05jCoTa.js";import"./tick-Bgtx0_Fg.js";import"./DropdownField-hxgGPfNJ.js";import"./isEqual-Dbo3xsh8.js";import"./withOsdkMetrics-Dxoj52t7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
