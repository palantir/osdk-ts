import{j as r}from"./iframe-DZ1IfAc9.js";import{O as b}from"./object-table-n4fDDaZs.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CHJ9bSu5.js";import{u as g}from"./useOsdkClient-G1l4twLo.js";import"./preload-helper-FioNmaYc.js";import"./Table-DAy0iIvq.js";import"./index-DlgarWWe.js";import"./Dialog-D6NnjYzR.js";import"./cross-9jSrVJX7.js";import"./svgIconContainer-BMPgpSIt.js";import"./useBaseUiId-D5mFLOde.js";import"./InternalBackdrop-71qlqQsM.js";import"./composite-naZtYWyA.js";import"./index-BqCJp_mQ.js";import"./index-Dm0H4d0k.js";import"./index-D8BPITj7.js";import"./useEventCallback-CivKyEqa.js";import"./SkeletonBar-Poc6NUlG.js";import"./LoadingCell-C25Ly4Io.js";import"./ColumnConfigDialog-Bv-NYj8T.js";import"./DraggableList-DTTybYEG.js";import"./search-DX_EHnIw.js";import"./Input-BVSO0T6H.js";import"./useControlled-CK492yS4.js";import"./Button-CEdONvfh.js";import"./small-cross-k0iuPUUj.js";import"./ActionButton-C59C2SC2.js";import"./Checkbox-B4MDdy_R.js";import"./useValueChanged-DOaXJk-l.js";import"./CollapsiblePanel-DFS5HvYG.js";import"./MultiColumnSortDialog-D2Zs5eyA.js";import"./MenuTrigger-BMDKhIr4.js";import"./CompositeItem-BRIYvu0B.js";import"./ToolbarRootContext-ATEsw9kW.js";import"./getDisabledMountTransitionStyles-CbTtYX3G.js";import"./getPseudoElementBounds-oqBrWOWr.js";import"./chevron-down-ClTS_TF6.js";import"./index-DqffqbdW.js";import"./error-CK66UUTY.js";import"./BaseCbacBanner-MlktgPHb.js";import"./makeExternalStore-DT9sfKcd.js";import"./Tooltip-BVGKe7Gt.js";import"./isObject-BzWFEdJL.js";import"./debounce--VQS0Dqu.js";import"./tick-DJ6zublk.js";import"./DropdownField-Co-1Lqep.js";import"./isEqual-DYFiJ8mG.js";import"./_baseIsEqual-CfKgNQ0W.js";import"./withOsdkMetrics-DkI7OiMa.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
