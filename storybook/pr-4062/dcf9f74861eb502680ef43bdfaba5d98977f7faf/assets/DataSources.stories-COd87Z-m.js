import{j as r}from"./iframe-BTDvHL3g.js";import{O as b}from"./object-table-576gGb0G.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D5rb2IAj.js";import{u as g}from"./useOsdkClient-BUTuIt2q.js";import"./preload-helper-D9Z_UkK8.js";import"./Table-9TYSBCCH.js";import"./index-C2WocGyz.js";import"./Dialog-BQPrnvyl.js";import"./cross-Cp0W9YlM.js";import"./svgIconContainer-Dt86stim.js";import"./useBaseUiId-Ca42jcOp.js";import"./InternalBackdrop-DvugTWWQ.js";import"./composite-CR_T3dDP.js";import"./index-CtTeoyvV.js";import"./index-Cs7K0AYs.js";import"./index-CI1rDDbd.js";import"./useEventCallback-Djm2_lIv.js";import"./SkeletonBar-4ynmEfK8.js";import"./LoadingCell-BFOetmvd.js";import"./ColumnConfigDialog-5dKyG8cs.js";import"./DraggableList-BHPi9scr.js";import"./search-BZZDgwTx.js";import"./Input-B9motj4l.js";import"./useControlled-DZa6FNla.js";import"./Button-2AhFByte.js";import"./small-cross-AHNwKH-0.js";import"./ActionButton-DKYyXSbF.js";import"./Checkbox-5N-YWdQP.js";import"./useValueChanged-LafOKdn0.js";import"./CollapsiblePanel-Xwe8c9pF.js";import"./MultiColumnSortDialog-BjjGFOba.js";import"./MenuTrigger-BDQiKkfp.js";import"./CompositeItem-SQA_IIyG.js";import"./ToolbarRootContext-D_KZXAup.js";import"./getDisabledMountTransitionStyles-BdwhjLM3.js";import"./getPseudoElementBounds-DRV3tTt5.js";import"./chevron-down-B2G_smGI.js";import"./index-B7w2hjNg.js";import"./error-7FvWp7D0.js";import"./BaseCbacBanner-R7ys_q2e.js";import"./makeExternalStore-D99Ax1Zi.js";import"./Tooltip-CUxqTMTK.js";import"./PopoverPopup-DgDU7fL-.js";import"./debounce-CuJqoMgC.js";import"./tick-pW-8BtNc.js";import"./DropdownField-BQkHbNRZ.js";import"./isEqual-ByQ8noGx.js";import"./withOsdkMetrics-BVhEzQUJ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
