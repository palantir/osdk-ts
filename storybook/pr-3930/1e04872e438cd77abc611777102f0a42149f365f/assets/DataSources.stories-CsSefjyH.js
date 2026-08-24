import{j as r}from"./iframe-PnDOzCid.js";import{O as b}from"./object-table-D4EwzI8j.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DmqrxqMK.js";import{u as g}from"./useOsdkClient-Bwd7OyF1.js";import"./preload-helper-BHN2PTV1.js";import"./Table-Dhykx4ye.js";import"./index-CTuOq2_n.js";import"./Dialog-nsTWjBko.js";import"./cross-CR6LhqMg.js";import"./svgIconContainer-DY8hFB-6.js";import"./useBaseUiId-Br9Pyha2.js";import"./InternalBackdrop-CuNeBhky.js";import"./composite-ssNpx6D9.js";import"./index-BBtHZFB8.js";import"./index-BPz2iuz0.js";import"./index-DmaFqf5D.js";import"./useEventCallback-CD9glGCH.js";import"./SkeletonBar-D4GaeW64.js";import"./LoadingCell-CozaopMH.js";import"./ColumnConfigDialog-5JVMlay9.js";import"./DraggableList-CM5iWscv.js";import"./search-C0Gxo9Ly.js";import"./Input-C2eDGT_k.js";import"./useControlled-B8PotZCC.js";import"./Button-ClDfXYXt.js";import"./small-cross-6gjgiPBS.js";import"./ActionButton-Cxcvr76B.js";import"./Checkbox-DXeuKucW.js";import"./useValueChanged-DvWNgcqY.js";import"./CollapsiblePanel-CgXH4PmC.js";import"./MultiColumnSortDialog-BBj9KWuk.js";import"./MenuTrigger-CzMzu05o.js";import"./CompositeItem-JOSb0DW0.js";import"./ToolbarRootContext-MEy76afQ.js";import"./getDisabledMountTransitionStyles-Bu2kofYy.js";import"./getPseudoElementBounds-C6qHOPfm.js";import"./chevron-down-B6MD1Z1F.js";import"./index-Sp2kgai2.js";import"./error-ChR6Rzxj.js";import"./BaseCbacBanner-BJuG5Mgr.js";import"./makeExternalStore-D0koECKe.js";import"./Tooltip-BvRJQXfz.js";import"./PopoverPopup-DtBxplNL.js";import"./debounce-DSTpoPBU.js";import"./tick-_BdQKNVX.js";import"./DropdownField-CkGZrtLk.js";import"./isEqual-5k6Ef4JB.js";import"./withOsdkMetrics-CyQcXoDt.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
