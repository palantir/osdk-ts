import{j as r}from"./iframe-CjqaNb_6.js";import{O as b}from"./object-table-BLp0NQy8.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ChCDf0ub.js";import{u as g}from"./useOsdkClient-KzXi1Mfu.js";import"./preload-helper-CGa3vgnS.js";import"./Table-C9Ts5vCP.js";import"./index-vq-4ZEFu.js";import"./Dialog-Cyu4HK_T.js";import"./cross-BpdOGJyJ.js";import"./svgIconContainer-DjFXNtcD.js";import"./useBaseUiId-BlK4VlOb.js";import"./InternalBackdrop-t0TxIlY7.js";import"./composite-C2vCaoMT.js";import"./index-CicBoOrA.js";import"./index-_mZt-hWo.js";import"./index-Cuh_ZcBo.js";import"./useEventCallback-DpCsUsma.js";import"./SkeletonBar-BNDqBgQ7.js";import"./LoadingCell-GbbbFo6u.js";import"./ColumnConfigDialog-B8Hmr4Iw.js";import"./DraggableList-KApAS3IC.js";import"./search-DVbD0a3n.js";import"./Input-BvVBd0y-.js";import"./useControlled-DENE4AVf.js";import"./Button-d7ygQEjr.js";import"./small-cross-CwlKy0u0.js";import"./ActionButton-BJGjBTpO.js";import"./Checkbox-B-NTnxav.js";import"./useValueChanged-BhQo8aRa.js";import"./CollapsiblePanel-DowHk0nd.js";import"./MultiColumnSortDialog-B9x5EL7H.js";import"./MenuTrigger-CR-xcnEV.js";import"./CompositeItem-DdNr1E7d.js";import"./ToolbarRootContext-BkN7DcjO.js";import"./getDisabledMountTransitionStyles-DpBysH4p.js";import"./getPseudoElementBounds-CAI6qpMe.js";import"./chevron-down-DCYjYXHO.js";import"./index-Dd6FNa4t.js";import"./error-CICrjBQf.js";import"./BaseCbacBanner-D_2WY7v4.js";import"./makeExternalStore-DymPkA7f.js";import"./Tooltip-DP0dSQE1.js";import"./PopoverPopup-DLqc0nMK.js";import"./debounce-CS5Zky73.js";import"./tick-DFEtV6b8.js";import"./DropdownField-B6TBtxf2.js";import"./isEqual-BHczr-VC.js";import"./withOsdkMetrics-DqLs3Yq6.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
