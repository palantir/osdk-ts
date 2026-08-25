import{j as r}from"./iframe-BppbSrhx.js";import{O as b}from"./object-table-BjB8n29H.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BTnHHpbY.js";import{u as g}from"./useOsdkClient-Bi2QyrOg.js";import"./preload-helper-Bw11sjj1.js";import"./Table-DRXfButT.js";import"./index-CJZanbl2.js";import"./Dialog-BzaTL6st.js";import"./cross-Q-zXxGGB.js";import"./svgIconContainer-DQpEIb1x.js";import"./useBaseUiId-qZ19-Hcf.js";import"./InternalBackdrop-DIgXdfTv.js";import"./composite-C3Q3MArL.js";import"./index-BTrAPlHS.js";import"./index-LD31CDcT.js";import"./index-BjVxDYWx.js";import"./useEventCallback-D3IsyJIX.js";import"./SkeletonBar-Bs6fl9dq.js";import"./LoadingCell-BkOQAo1d.js";import"./ColumnConfigDialog-CW56PtbG.js";import"./DraggableList-C2qiVH7w.js";import"./search-4uPMjt9H.js";import"./Input-TL4PyLM9.js";import"./useControlled-Cyv1OlQu.js";import"./Button-CpCWCMtk.js";import"./small-cross-p5zHgXkA.js";import"./ActionButton-C9eS6C4k.js";import"./Checkbox-LwUtlCY3.js";import"./useValueChanged-Br96PFLq.js";import"./CollapsiblePanel-DKSz5_iN.js";import"./MultiColumnSortDialog-z_UEp66c.js";import"./MenuTrigger-Boc06z0M.js";import"./CompositeItem-Bf84ptir.js";import"./ToolbarRootContext-Us9sChGo.js";import"./getDisabledMountTransitionStyles-UdumhEnt.js";import"./getPseudoElementBounds-CinKU-E5.js";import"./chevron-down-RK-wSJaV.js";import"./index-Bg7F7AhM.js";import"./error-B6rYlYt_.js";import"./BaseCbacBanner-solUHKcX.js";import"./makeExternalStore-Bbh9MWGd.js";import"./Tooltip-Bk7WuH7N.js";import"./PopoverPopup-VNvKO1hU.js";import"./debounce-H-onGT9e.js";import"./tick-BYxeszBx.js";import"./DropdownField-mww5JMwj.js";import"./isEqual-I2G5XZfm.js";import"./withOsdkMetrics-CEFcST5F.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
