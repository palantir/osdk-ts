import{j as r}from"./iframe-HyESsXeQ.js";import{O as b}from"./object-table-C_2IRHjO.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D5FAvWby.js";import{u as g}from"./useOsdkClient-Bnl5eD_v.js";import"./preload-helper-Bvz1Iq1b.js";import"./Table-B5sCsjcq.js";import"./index-D0OJ8Trr.js";import"./Dialog-BnKetcOK.js";import"./cross-B4WufoMD.js";import"./svgIconContainer-DoHo3GVe.js";import"./useBaseUiId-DuHypDOw.js";import"./InternalBackdrop-mPo2uYhF.js";import"./composite-DiTBIa1i.js";import"./index-DXkwEgFU.js";import"./index-CgvnsYQE.js";import"./index-Jtuu1nd4.js";import"./useEventCallback-CpzBjTdD.js";import"./SkeletonBar-D7haS-rI.js";import"./LoadingCell-BIZGKlzI.js";import"./ColumnConfigDialog-B6jiXZos.js";import"./DraggableList-lF8OD8ZD.js";import"./search-DCrGY9GL.js";import"./Input-DQmQ9_F8.js";import"./useControlled-BBW-00hW.js";import"./Button-SWnrLxVW.js";import"./small-cross-uXn_FUQJ.js";import"./ActionButton-BrQP3ZP9.js";import"./Checkbox-BBqmSbAH.js";import"./useValueChanged-BixCKPVH.js";import"./CollapsiblePanel-BjtNNYnJ.js";import"./MultiColumnSortDialog-DxInobGo.js";import"./MenuTrigger-B15PhrDH.js";import"./CompositeItem-CPmZ1gPE.js";import"./ToolbarRootContext-ChUkw_F5.js";import"./getDisabledMountTransitionStyles-I2TA2O86.js";import"./getPseudoElementBounds-nn2N1l7W.js";import"./chevron-down-BVfSkRRX.js";import"./index-CjUqhSJN.js";import"./error-Bf7Spqax.js";import"./BaseCbacBanner-COq9_cWc.js";import"./makeExternalStore-CrwMIP9a.js";import"./Tooltip-v_s4JNMl.js";import"./PopoverPopup-Kd6rHNBJ.js";import"./debounce-B8bbiEYQ.js";import"./tick-CTdD_I8M.js";import"./DropdownField-DoZDhwJN.js";import"./isEqual-BJSWHtb1.js";import"./withOsdkMetrics-X96S_7mx.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
