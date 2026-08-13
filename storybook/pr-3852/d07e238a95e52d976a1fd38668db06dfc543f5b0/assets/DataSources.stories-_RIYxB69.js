import{j as r}from"./iframe-DPU4dU5t.js";import{O as b}from"./object-table-CYL4n5nH.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BZVcyM_9.js";import{u as g}from"./useOsdkClient-D5Hs2Xu0.js";import"./preload-helper-BfY5BfRw.js";import"./Table-DxksXrgt.js";import"./index-BWZ_jsFd.js";import"./Dialog-D3y20SaV.js";import"./cross-GP91ECu7.js";import"./svgIconContainer-DMEc4fQs.js";import"./useBaseUiId-DL2j5itx.js";import"./InternalBackdrop-CIo_o02W.js";import"./composite-CBPw2eZY.js";import"./index-CQuzS6zi.js";import"./index-BuyWU3Mi.js";import"./index-D14glJLB.js";import"./useEventCallback-DHUcspcy.js";import"./SkeletonBar-BbwbNpqo.js";import"./LoadingCell-VRBagF7F.js";import"./ColumnConfigDialog-DnTFGitq.js";import"./DraggableList-DKWsDlTt.js";import"./search-CWx5rAiq.js";import"./Input-CkOmJ7l-.js";import"./useControlled-7lGv1XpS.js";import"./isEqual-r_BBkpT6.js";import"./isObject-DEhLATs2.js";import"./Button-CHOirzFo.js";import"./ActionButton-D4zxx4Li.js";import"./Checkbox-DBhLhEUm.js";import"./useValueChanged-lfKJ3AhH.js";import"./CollapsiblePanel-DyNQU87X.js";import"./MultiColumnSortDialog-CY8yqai7.js";import"./MenuTrigger-DqHXO7hi.js";import"./CompositeItem-CDOXdB89.js";import"./ToolbarRootContext-DHSfKOeF.js";import"./getDisabledMountTransitionStyles-CJgdQ1n1.js";import"./getPseudoElementBounds-BcmXpxSp.js";import"./chevron-down-CAPpObNP.js";import"./index-AkfEBwJt.js";import"./error-hkPL5XIl.js";import"./BaseCbacBanner-riFku8O-.js";import"./makeExternalStore-GTeGNvOb.js";import"./Tooltip-K5t-yHF7.js";import"./PopoverPopup-B47v2T3R.js";import"./toNumber-CVF7Lzyk.js";import"./tick-C_OcSV--.js";import"./DropdownField-YPok9mq7.js";import"./withOsdkMetrics-DVg-5hEq.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
