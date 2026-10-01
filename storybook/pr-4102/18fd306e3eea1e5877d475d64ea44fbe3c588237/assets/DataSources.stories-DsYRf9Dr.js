import{j as r}from"./iframe-B30VXZ-6.js";import{O as b}from"./object-table-DH_gUMto.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BeVaToUA.js";import{u as g}from"./useOsdkClient-CuQp5EFx.js";import"./preload-helper-ChWHhmMQ.js";import"./Table-BoQribm-.js";import"./index-C8WN5xda.js";import"./Dialog-D_6IT7W5.js";import"./cross-q0dJk3Qv.js";import"./svgIconContainer-CDJpdA9T.js";import"./useBaseUiId-N1dQpqNi.js";import"./InternalBackdrop-g2UdgSpr.js";import"./composite-CL2Urpfy.js";import"./index-BPP2HBPd.js";import"./index-G14MjZBl.js";import"./index-DR-P8k5n.js";import"./useEventCallback-Dd-rW-bH.js";import"./SkeletonBar-CoNjpQ5V.js";import"./LoadingCell-Cq17MdUI.js";import"./ColumnConfigDialog-C1sWO9u3.js";import"./DraggableList-D3HI0B0s.js";import"./search-Mz2TVtVf.js";import"./Input-CUQ6PF3-.js";import"./useControlled-jMDaMrsG.js";import"./Button-Fs0rdLv2.js";import"./small-cross-CV5I4AiV.js";import"./ActionButton-4fvGoYw3.js";import"./Checkbox-DR-GfH3U.js";import"./useValueChanged-3Pjfz6XN.js";import"./CollapsiblePanel-DTqM16KR.js";import"./MultiColumnSortDialog-DQYaLkK-.js";import"./MenuTrigger-CxX-_HAH.js";import"./CompositeItem-DXi528OA.js";import"./ToolbarRootContext-Dshg5ZnG.js";import"./getDisabledMountTransitionStyles-fWLm1dIh.js";import"./getPseudoElementBounds-DqAHYrF9.js";import"./chevron-down-DiQ4Q7Kd.js";import"./index-D6kqTvDq.js";import"./error-Cc1FQeFa.js";import"./BaseCbacBanner-eN234pk2.js";import"./makeExternalStore-nH4o41kb.js";import"./Tooltip-DH7dVDCh.js";import"./PopoverPopup-CE8H8wc4.js";import"./debounce-jCNBE6lD.js";import"./tick-C3_-7A_u.js";import"./DropdownField-C7LGxFH_.js";import"./isEqual-CMlUKjD_.js";import"./withOsdkMetrics-DEl0Ng20.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
