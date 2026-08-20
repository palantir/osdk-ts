import{j as r}from"./iframe-Bbl8xWS4.js";import{O as b}from"./object-table-Csi300vr.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DJ_9A7Js.js";import{u as g}from"./useOsdkClient-BVIzgYNI.js";import"./preload-helper-BUAbRzmt.js";import"./Table-C6stjXeD.js";import"./index-BrhvBMro.js";import"./Dialog-CxqhZeM9.js";import"./cross-D1K3qdEd.js";import"./svgIconContainer-C49n10_C.js";import"./useBaseUiId-Cmt5VEHx.js";import"./InternalBackdrop-DQJVIwhZ.js";import"./composite-BZ5wkolO.js";import"./index-Dg_zHENz.js";import"./index-CHJ1j1l2.js";import"./index-CE5JSKtI.js";import"./useEventCallback-BqyCjoBA.js";import"./SkeletonBar-BtzllBK1.js";import"./LoadingCell-DJj0Q7IJ.js";import"./ColumnConfigDialog-DepBJ68H.js";import"./DraggableList-DT97Kib1.js";import"./search-BoObENrO.js";import"./Input-C7X_QVu0.js";import"./useControlled-DGf-N-MW.js";import"./Button-vDgXwn6I.js";import"./small-cross-DTh3t08g.js";import"./ActionButton-B0l2nlsG.js";import"./Checkbox-C7FrLcjj.js";import"./useValueChanged-1sJEL3iN.js";import"./CollapsiblePanel-j2kmvttF.js";import"./MultiColumnSortDialog-CAbQuHe5.js";import"./MenuTrigger-BHWoM-Q_.js";import"./CompositeItem-UpHYLeRj.js";import"./ToolbarRootContext-mlwQOMjb.js";import"./getDisabledMountTransitionStyles-DYMa362i.js";import"./getPseudoElementBounds-r4lx2DpE.js";import"./chevron-down-CguzkHKU.js";import"./index-Cg7IxkTK.js";import"./error-BL4iX6t3.js";import"./BaseCbacBanner-BYnRSoLP.js";import"./makeExternalStore-k_EKqWBg.js";import"./Tooltip-d-UN8rHt.js";import"./PopoverPopup-CwfkGrBk.js";import"./debounce-BFaUKRpC.js";import"./tick-CSFR0LjW.js";import"./DropdownField-DdP67yjj.js";import"./isEqual-v8lWUpOV.js";import"./withOsdkMetrics-D-pE8QrY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
