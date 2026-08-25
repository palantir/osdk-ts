import{j as r}from"./iframe-CaEl2eka.js";import{O as b}from"./object-table-DKAkJsj7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bs43Za7t.js";import{u as g}from"./useOsdkClient-aeU6oKDe.js";import"./preload-helper-CKJhYclM.js";import"./Table-DdN_Fh96.js";import"./index-Dao3z4xN.js";import"./Dialog-CFabIcPb.js";import"./cross-w8xD3Kul.js";import"./svgIconContainer-BZS1llvH.js";import"./useBaseUiId-C6NCgBGS.js";import"./InternalBackdrop-y5HdDMK5.js";import"./composite-CDJBgnca.js";import"./index-B-jhfDuh.js";import"./index-BWzb8A31.js";import"./index-DpjF6j4z.js";import"./useEventCallback-DVl-nCUK.js";import"./SkeletonBar-Dqjmo54-.js";import"./LoadingCell-DeviUxoR.js";import"./ColumnConfigDialog-CWGHF6UC.js";import"./DraggableList-Cybt2ylu.js";import"./search-00eTLW-R.js";import"./Input-Dxv9-Vzq.js";import"./useControlled-DCzWHf0h.js";import"./Button-Bv8tSuuM.js";import"./small-cross-BccHwN_d.js";import"./ActionButton-DRREP_I-.js";import"./Checkbox-BkeEhxkZ.js";import"./useValueChanged-DVOjBH36.js";import"./CollapsiblePanel-bnEHpgLY.js";import"./MultiColumnSortDialog-aAuNMXh8.js";import"./MenuTrigger-CjdtjAZl.js";import"./CompositeItem-_nl0E7_8.js";import"./ToolbarRootContext--ihq9xQk.js";import"./getDisabledMountTransitionStyles-DV07XhqX.js";import"./getPseudoElementBounds-qU76zSTh.js";import"./chevron-down-CoZ1s0t9.js";import"./index-DaKhz2zi.js";import"./error-Zn5rVwYN.js";import"./BaseCbacBanner-DUtgprEg.js";import"./makeExternalStore-CmUF4kPq.js";import"./Tooltip-D6YR40Tf.js";import"./PopoverPopup-5RMFkOP8.js";import"./debounce-DgOaRStr.js";import"./tick-91iRYN-3.js";import"./DropdownField-C01HlXsj.js";import"./isEqual-RjQDL3k6.js";import"./withOsdkMetrics-B62KTojI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
