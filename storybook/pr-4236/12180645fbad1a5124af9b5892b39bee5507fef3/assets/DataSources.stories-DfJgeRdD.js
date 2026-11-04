import{j as r}from"./iframe-C-_1TazU.js";import{O as b}from"./object-table-Beb5fH2d.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BmAqt1eO.js";import{u as g}from"./useOsdkClient-cVvbHq8H.js";import"./preload-helper-CkKF1Buf.js";import"./Table-BCBSDpni.js";import"./index-Bpncd7pQ.js";import"./Dialog-DsM0_WQ8.js";import"./cross-C4V96JZV.js";import"./svgIconContainer-CMraZsuF.js";import"./useBaseUiId-_AW1QpO6.js";import"./InternalBackdrop-C5_BMHIb.js";import"./composite-Dz3hbzMM.js";import"./index-BubkWFVt.js";import"./index-CMC--zdt.js";import"./index-90cPmaM8.js";import"./useEventCallback-D70YOU97.js";import"./SkeletonBar-BNfm8GyJ.js";import"./LoadingCell-B0Nv_30_.js";import"./ColumnConfigDialog-KOc_l0BB.js";import"./DraggableList-k0m91GC-.js";import"./search-Brf_HBSH.js";import"./Input-CRdjsgvE.js";import"./useControlled-B0TcQP9p.js";import"./Button-3Z_BNFpX.js";import"./small-cross-CJnmFJ9d.js";import"./ActionButton-4JN5WqHj.js";import"./Checkbox-CJUicpa4.js";import"./useValueChanged-APgIOvq6.js";import"./CollapsiblePanel-BH9UnnpL.js";import"./MultiColumnSortDialog-DQKESGLV.js";import"./MenuTrigger-C0WE1G2S.js";import"./CompositeItem-CUiyh8KX.js";import"./ToolbarRootContext-DKRIHX6q.js";import"./getDisabledMountTransitionStyles-Drv-bm06.js";import"./getPseudoElementBounds-B3bHIS4L.js";import"./chevron-down-C9eSOQPA.js";import"./index-BbmPsGxd.js";import"./error-Bm-o3dV9.js";import"./BaseCbacBanner-DhXCr72Y.js";import"./makeExternalStore-Bt0DPf8S.js";import"./Tooltip-CC5f6fsc.js";import"./PopoverPopup-BRmr0_XW.js";import"./debounce-BZOoCBd7.js";import"./tick-qWt9TM4D.js";import"./DropdownField-C3zSIjmP.js";import"./isEqual-BMSQp6EM.js";import"./withOsdkMetrics-DfOFosKa.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
