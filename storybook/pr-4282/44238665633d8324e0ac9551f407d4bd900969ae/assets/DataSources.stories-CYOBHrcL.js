import{j as r}from"./iframe-I-ljmhXo.js";import{O as b}from"./object-table-Duv57V1_.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DfiMDaTb.js";import{u as g}from"./useOsdkClient-jS_u-k2J.js";import"./preload-helper-M9MPg2Uh.js";import"./Table-DiEd8xlb.js";import"./index-DHgdi-G8.js";import"./Dialog-Dqa_EKtc.js";import"./cross--08b2Esz.js";import"./svgIconContainer-DTF9Rr_D.js";import"./useBaseUiId-63vNftzH.js";import"./InternalBackdrop-iSyfVaW5.js";import"./composite-BpdBkPyX.js";import"./index-B-RGy6eE.js";import"./index-wV7cEBRP.js";import"./index-CExgYXR8.js";import"./useEventCallback-CKHe2jbt.js";import"./SkeletonBar-Cd4HXeaq.js";import"./LoadingCell-kmBO5qb_.js";import"./ColumnConfigDialog-BJn4CDvF.js";import"./DraggableList-Uy7OWW_r.js";import"./search-Xmbyz7ae.js";import"./Input-DgDEYrB1.js";import"./useControlled-D9MNKFMV.js";import"./Button-BPW8BJKe.js";import"./small-cross-DnRErzPc.js";import"./ActionButton-D7dlIpjS.js";import"./Checkbox-BH5TPj1T.js";import"./useValueChanged-DggnfScN.js";import"./CollapsiblePanel-Bab9PcCA.js";import"./MultiColumnSortDialog-Dqa5-Agb.js";import"./MenuTrigger-BfcfRgsA.js";import"./CompositeItem-BNvc3zNV.js";import"./ToolbarRootContext-Bgx3Oosy.js";import"./getDisabledMountTransitionStyles-qCmZAHN-.js";import"./getPseudoElementBounds-BwyOt2xx.js";import"./chevron-down-C0rEk766.js";import"./index-BuOpPpDi.js";import"./error-Dy0kv_06.js";import"./BaseCbacBanner-DpVqHL5O.js";import"./makeExternalStore-BsQQuJAQ.js";import"./Tooltip-BCS8vY1S.js";import"./PopoverPopup-DL3StlvX.js";import"./debounce-4Bi6pw_i.js";import"./tick-V_8cWmaE.js";import"./DropdownField-ptXdktt_.js";import"./isEqual-Cnysuxje.js";import"./withOsdkMetrics-COEHBIiY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
