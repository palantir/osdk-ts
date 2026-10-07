import{j as r}from"./iframe-Bs9Zqqf-.js";import{O as b}from"./object-table-BDbBPExr.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DFT2ZjNV.js";import{u as g}from"./useOsdkClient-B6joKZOa.js";import"./preload-helper-Cp9usskF.js";import"./Table-WIGkIWeG.js";import"./index-BDMfxNxX.js";import"./Dialog-CGb3DT5F.js";import"./cross-BNRY-s17.js";import"./svgIconContainer-aOhTN_D5.js";import"./useBaseUiId-9IsGojkB.js";import"./InternalBackdrop-BGL8gebb.js";import"./composite-Cqp0rQwX.js";import"./index-Dblp0HKE.js";import"./index-EMOKDP2T.js";import"./index-Cfs5giYo.js";import"./useEventCallback-CPnYLf1v.js";import"./SkeletonBar-D3b4PSYB.js";import"./LoadingCell-CyJKjezy.js";import"./ColumnConfigDialog-BJEn9MZc.js";import"./DraggableList-SExvNz1P.js";import"./search-D6HT7gEm.js";import"./Input-DFM7xw9J.js";import"./useControlled-DkY88gS_.js";import"./Button-DE9Fucz0.js";import"./small-cross-DrXs_-qZ.js";import"./ActionButton-BgsU4BKW.js";import"./Checkbox-CyS5WU7M.js";import"./useValueChanged-9Rhs99cV.js";import"./CollapsiblePanel-Uvb76fMO.js";import"./MultiColumnSortDialog-DHqlE6PI.js";import"./MenuTrigger-JgHvRvS2.js";import"./CompositeItem-ctTapvtZ.js";import"./ToolbarRootContext-ZHsiNOiv.js";import"./getDisabledMountTransitionStyles-B4RdPd8-.js";import"./getPseudoElementBounds-DSR0VlQK.js";import"./chevron-down-Dg71DAa4.js";import"./index-D6h7Nvb3.js";import"./error-EzQ0dI5s.js";import"./BaseCbacBanner-BFkGOdbB.js";import"./makeExternalStore-CdBELGf5.js";import"./Tooltip-Bdagy_hn.js";import"./PopoverPopup-BcfSdZdq.js";import"./debounce-CqWMxEN-.js";import"./tick-CXdTppsu.js";import"./DropdownField-D9LMnY0i.js";import"./isEqual-OcM3daqL.js";import"./withOsdkMetrics-DDUrYl-m.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
