import{j as r}from"./iframe-D_qRpeHj.js";import{O as b}from"./object-table-CKBjSPJ8.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B_pxyHa0.js";import{u as g}from"./useOsdkClient-BidZgNy-.js";import"./preload-helper-D_9N_6Hv.js";import"./Table-BIBvJY_n.js";import"./index-ze-4_PID.js";import"./Dialog-CgqoPhCB.js";import"./cross-BxS6mKVf.js";import"./svgIconContainer-CoeSRgcf.js";import"./useBaseUiId-By5i2rdz.js";import"./InternalBackdrop-Dc_uxBhE.js";import"./composite-C0V0hw5E.js";import"./index-CZLowYbM.js";import"./index-DfyhkSOl.js";import"./index-C-sm0l73.js";import"./useEventCallback-Cv2yWZv2.js";import"./SkeletonBar-EN4eDWhb.js";import"./LoadingCell-CHXjbNSr.js";import"./ColumnConfigDialog-DB0wjUE8.js";import"./DraggableList-DWmayQdU.js";import"./search-BGYV6IKj.js";import"./Input-BNbV4MTG.js";import"./useControlled-Y53AopBQ.js";import"./Button-BV5h0__V.js";import"./small-cross-C2VJaSVZ.js";import"./ActionButton-Bs7eblYb.js";import"./Checkbox-CLK566Z3.js";import"./useValueChanged-DldrlgwL.js";import"./CollapsiblePanel-PgBvtzuh.js";import"./MultiColumnSortDialog-Brfh71ie.js";import"./MenuTrigger-DGpOysmP.js";import"./CompositeItem-B_Ho19nn.js";import"./ToolbarRootContext-Dkj0BbLv.js";import"./getDisabledMountTransitionStyles-ml_2UbZr.js";import"./getPseudoElementBounds-Dt8npt-l.js";import"./chevron-down-4vjSc27s.js";import"./index-DMf8On8K.js";import"./error-CushKjuF.js";import"./BaseCbacBanner-lQbmrV5k.js";import"./makeExternalStore-Cgf26SsV.js";import"./Tooltip-BDUJFrAT.js";import"./PopoverPopup-BEmt1_nM.js";import"./debounce-BbOjOfo_.js";import"./tick-D_JbwVBf.js";import"./DropdownField-DV5YVhPE.js";import"./isEqual-WH4uvIP0.js";import"./withOsdkMetrics-B7kRIAyY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
