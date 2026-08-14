import{j as r}from"./iframe-BcJO5Es9.js";import{O as b}from"./object-table-CXB6ageE.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BcSmfl3s.js";import{u as g}from"./useOsdkClient-Du4zQHa2.js";import"./preload-helper-CNqrSMrD.js";import"./Table-Ct6H-Odv.js";import"./index-D8zcFWOc.js";import"./Dialog-Cq0luLg-.js";import"./cross--P-I0ZkN.js";import"./svgIconContainer-0GuNzj2t.js";import"./useBaseUiId-C-k1aU7Y.js";import"./InternalBackdrop-Daw3hx3z.js";import"./composite-DPnLVqwa.js";import"./index-Cz5vlqVU.js";import"./index-DGYuc6nD.js";import"./index-CgaU1Mv5.js";import"./useEventCallback-qQBTb4zt.js";import"./SkeletonBar-SloCT5_B.js";import"./LoadingCell-BlzvGQe9.js";import"./ColumnConfigDialog-Df5ImCwa.js";import"./DraggableList-DwoSnA8e.js";import"./search-Q8aG5QMJ.js";import"./Input-8svXG8BP.js";import"./useControlled-CHN1pvcO.js";import"./Button-CmxEtBkN.js";import"./small-cross-DwoR8P_C.js";import"./ActionButton-Dd7X93sQ.js";import"./Checkbox-D5yelIY9.js";import"./useValueChanged-RvJvZ_Cg.js";import"./CollapsiblePanel-Cbn1Pxju.js";import"./MultiColumnSortDialog-CXxzUhP5.js";import"./MenuTrigger-pcHAjet2.js";import"./CompositeItem-B0brZGqV.js";import"./ToolbarRootContext-Bz5wpC0n.js";import"./getDisabledMountTransitionStyles-D45SEq1w.js";import"./getPseudoElementBounds-D8yU25vd.js";import"./chevron-down-BeaiUZln.js";import"./index-BGEt1deN.js";import"./error-D43ZO7i7.js";import"./BaseCbacBanner-DfZjQn6s.js";import"./makeExternalStore-CxoTebDy.js";import"./Tooltip-DQHXhc1k.js";import"./PopoverPopup-BVaQ5qjk.js";import"./debounce-Dvhb1WX-.js";import"./tick-9lyxa2jh.js";import"./DropdownField-C9_fke66.js";import"./isEqual-DDTFGPGr.js";import"./withOsdkMetrics-V7GcuCIR.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
