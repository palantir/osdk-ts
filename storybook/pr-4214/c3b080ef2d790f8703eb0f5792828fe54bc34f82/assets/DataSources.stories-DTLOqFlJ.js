import{j as r}from"./iframe-5HuVSaDQ.js";import{O as b}from"./object-table-aRFFd-Hf.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Z8kU74qw.js";import{u as g}from"./useOsdkClient-DRBxpjGK.js";import"./preload-helper-CfrIZ5Cf.js";import"./Table-CLEmuWD1.js";import"./index-DjoqjxLj.js";import"./Dialog-BLwSe6up.js";import"./cross-Fbd8rPWM.js";import"./svgIconContainer-CilU-cRt.js";import"./useBaseUiId-DUhNtAkB.js";import"./InternalBackdrop-qL7awpYB.js";import"./composite-BgONfLPA.js";import"./index-HPsAfhDB.js";import"./index--ZjbYOmd.js";import"./index-B1NpA2Ke.js";import"./useEventCallback-CcusE86W.js";import"./SkeletonBar-DKI9Ld3o.js";import"./LoadingCell-YFNbRY7v.js";import"./ColumnConfigDialog-CE9zLgfO.js";import"./DraggableList-ByUPeDhx.js";import"./search-Cj2_GDbi.js";import"./Input-LKVNjJW6.js";import"./useControlled-DSyajAtW.js";import"./Button-DOSN-M_K.js";import"./small-cross-Dmab4i0O.js";import"./ActionButton-CeiHGQTe.js";import"./Checkbox-BQqfj-a3.js";import"./useValueChanged-DFA8OMKn.js";import"./CollapsiblePanel-DRekZkpH.js";import"./MultiColumnSortDialog-Bxx_fdi8.js";import"./MenuTrigger-tdiXxLH2.js";import"./CompositeItem-zoxZc06w.js";import"./ToolbarRootContext-BJk-KcZN.js";import"./getDisabledMountTransitionStyles-Dh8ST-vn.js";import"./getPseudoElementBounds-DEmyDmHB.js";import"./chevron-down-DpQjt-J8.js";import"./index-vB4c4Qg2.js";import"./error-CMmWSsIq.js";import"./BaseCbacBanner-wU2zVb6a.js";import"./makeExternalStore-CgO7rqjT.js";import"./Tooltip-ClzZDh1Z.js";import"./PopoverPopup-DIoQ4is4.js";import"./debounce-Cfvf-nRd.js";import"./tick-CLH4usX-.js";import"./DropdownField-Ck4UJuFu.js";import"./isEqual-DxWPYGAf.js";import"./withOsdkMetrics-CADXJLOh.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
