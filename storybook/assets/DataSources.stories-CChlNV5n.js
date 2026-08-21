import{j as r}from"./iframe-BbGTTDAj.js";import{O as b}from"./object-table-BDL8CTE7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BbqF1jEo.js";import{u as g}from"./useOsdkClient-B319hJFg.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BnxT1wyu.js";import"./index-IgulouNK.js";import"./Dialog-nlhw3diw.js";import"./cross-DhMDfvf2.js";import"./svgIconContainer-CVfAB6vd.js";import"./useBaseUiId-CQunNH1M.js";import"./InternalBackdrop-Hm20khzg.js";import"./composite-CR123KzM.js";import"./index-C8Uf5ELJ.js";import"./index-Df7q0QUE.js";import"./index-BUXx6su9.js";import"./useEventCallback-B2gRlxXx.js";import"./SkeletonBar-Ds_YvgAw.js";import"./LoadingCell-kYVMT4tS.js";import"./ColumnConfigDialog-CtClxv69.js";import"./DraggableList-DNiVSkcY.js";import"./search-CnT_vxoB.js";import"./Input-DnyVFM7E.js";import"./useControlled-BHPRGL2o.js";import"./Button-CN3p9mDI.js";import"./small-cross-Drx8-h4e.js";import"./ActionButton-DyvnNkxo.js";import"./Checkbox-BdyDWm05.js";import"./useValueChanged-CBTjuxmu.js";import"./CollapsiblePanel-Dga8aJEk.js";import"./MultiColumnSortDialog-D2nXUlx0.js";import"./MenuTrigger-DrbldR93.js";import"./CompositeItem-DyOo-XaB.js";import"./ToolbarRootContext-YNljF2Js.js";import"./getDisabledMountTransitionStyles-eCx2DT2T.js";import"./getPseudoElementBounds-CqmJdcHl.js";import"./chevron-down-wz6-g0K-.js";import"./index-Bjc-9Q8Y.js";import"./error-BllpxWel.js";import"./BaseCbacBanner-C7sNo_hZ.js";import"./makeExternalStore-B_7bdAjg.js";import"./Tooltip-CUzSWWIO.js";import"./PopoverPopup-x705-9aP.js";import"./debounce-DgBX7KpR.js";import"./tick-bTbyimze.js";import"./DropdownField-C5jrXGNu.js";import"./isEqual-BirJE5rZ.js";import"./withOsdkMetrics-CwndHWS3.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
