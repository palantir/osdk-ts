import{j as r}from"./iframe-CUxo3m6Y.js";import{O as b}from"./object-table-BS58DboR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-p22NBVeA.js";import{u as g}from"./useOsdkClient-Du0bLm1o.js";import"./preload-helper-l6s3tcls.js";import"./Table-qL21JEKz.js";import"./index-DTuBVR6H.js";import"./Dialog-uyxpEbmE.js";import"./cross-BrW7tcZq.js";import"./svgIconContainer-CNkl-Wwt.js";import"./useBaseUiId-Cfk1xeZo.js";import"./InternalBackdrop-CXN_RL2H.js";import"./composite-QDblzbOe.js";import"./index-CDPyuaTW.js";import"./index-DKD0s-Lm.js";import"./index-CxjaSFPP.js";import"./useEventCallback-BBqjvofg.js";import"./SkeletonBar-CR7zsgrH.js";import"./LoadingCell-DDQm7hjH.js";import"./ColumnConfigDialog-588ltJBa.js";import"./DraggableList-CjixxHVo.js";import"./search-C5XD9rFV.js";import"./Input-n5RT_2o8.js";import"./useControlled-CW8X9itX.js";import"./Button-Bp7sJ37u.js";import"./small-cross-hdXmMZce.js";import"./ActionButton-Ct3Qs2F9.js";import"./Checkbox-BnFqe7-w.js";import"./useValueChanged-IyyMTw5T.js";import"./CollapsiblePanel-3fNyZBpC.js";import"./MultiColumnSortDialog-B6xXiDA_.js";import"./MenuTrigger-5HtqAP9x.js";import"./CompositeItem-BVjd-TkC.js";import"./ToolbarRootContext-CJO8_3PY.js";import"./getDisabledMountTransitionStyles-BjaR6nL7.js";import"./getPseudoElementBounds-DRWqtKnl.js";import"./chevron-down-BOa4nBg1.js";import"./index-BEOdQoLT.js";import"./error-D3zX7u9C.js";import"./BaseCbacBanner-D4YJPV0D.js";import"./makeExternalStore-D-euk5kW.js";import"./Tooltip-CvOvAKov.js";import"./PopoverPopup-DCQkL0P-.js";import"./debounce-CUJDM8i3.js";import"./tick-BGs9034q.js";import"./DropdownField-BfLkyoOe.js";import"./isEqual-pGl1yIuH.js";import"./withOsdkMetrics-CSx29j57.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
