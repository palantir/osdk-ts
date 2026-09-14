import{j as r}from"./iframe-2Mr1t1V8.js";import{O as b}from"./object-table-Dff2vKVF.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-bnr-t0oI.js";import{u as g}from"./useOsdkClient-C22dfEiD.js";import"./preload-helper-C_t9encF.js";import"./Table-DFubCc9q.js";import"./index-4lXnLG4B.js";import"./Dialog-CvvM78Yd.js";import"./cross-BRuFKM6t.js";import"./svgIconContainer-tMp-Mvzu.js";import"./useBaseUiId-k8zppgsU.js";import"./InternalBackdrop-qRL7WfZ9.js";import"./composite-DgP8pe-I.js";import"./index-5aB3LLsM.js";import"./index-CkMbtK8j.js";import"./index-BLky91mi.js";import"./useEventCallback-CP27jd0B.js";import"./SkeletonBar-BChVdeQ9.js";import"./LoadingCell-BcFGvW2n.js";import"./ColumnConfigDialog-J50UmXTQ.js";import"./DraggableList-BMMwdptn.js";import"./search-ysbzXeyh.js";import"./Input-BAjujx0C.js";import"./useControlled-BcBqikwr.js";import"./Button-C2c9HqHX.js";import"./small-cross-KP2o4lIf.js";import"./ActionButton-C7GEwUg1.js";import"./Checkbox-BjD1qVP8.js";import"./useValueChanged-DDLB8duD.js";import"./CollapsiblePanel-B4xPmd-G.js";import"./MultiColumnSortDialog-DzFIzDAv.js";import"./MenuTrigger-CYPXcTFc.js";import"./CompositeItem-C0DzT1s7.js";import"./ToolbarRootContext-BbL0J01R.js";import"./getDisabledMountTransitionStyles-QB61HrKH.js";import"./getPseudoElementBounds-DgqbZcO_.js";import"./chevron-down-DjlK2aIq.js";import"./index-C4bdzjhC.js";import"./error-ppckuRwj.js";import"./BaseCbacBanner-GDqo53YU.js";import"./makeExternalStore-B8Qdlr-8.js";import"./Tooltip-DliQMsoz.js";import"./PopoverPopup-CBvVWdt_.js";import"./debounce-Bx6R5QNY.js";import"./tick-raGklPjk.js";import"./DropdownField-BgK_Iadc.js";import"./isEqual-6F4w8SEB.js";import"./withOsdkMetrics-IIt9i7U1.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
