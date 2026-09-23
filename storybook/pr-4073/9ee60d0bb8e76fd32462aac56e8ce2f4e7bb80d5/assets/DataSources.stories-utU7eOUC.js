import{j as r}from"./iframe-CWxH_eja.js";import{O as b}from"./object-table-BXJTuTfq.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CyvIdQeT.js";import{u as g}from"./useOsdkClient-BEBx1G06.js";import"./preload-helper-BGM-FNNL.js";import"./Table-BSJcDQrS.js";import"./index-rukiLk-t.js";import"./Dialog-D-VrWhQ3.js";import"./cross-BUnzug5D.js";import"./svgIconContainer-BVjwrQj6.js";import"./useBaseUiId-DjXwJ_4A.js";import"./InternalBackdrop-CCMfb0Ir.js";import"./composite--3W2QfLD.js";import"./index-CCBaaayX.js";import"./index-VZEG51bO.js";import"./index-BuFABUNN.js";import"./useEventCallback-CM0vLoXJ.js";import"./SkeletonBar-C3fCQI88.js";import"./LoadingCell-CzHVmTho.js";import"./ColumnConfigDialog-0wXw9w_v.js";import"./DraggableList-ClyJT_sb.js";import"./search-CCiYcsoJ.js";import"./Input-CalfVJQO.js";import"./useControlled-CaUffLu_.js";import"./Button-xLQbkIr8.js";import"./small-cross-C5TdUP9V.js";import"./ActionButton-BHfyzR_2.js";import"./Checkbox-CKMSR4-K.js";import"./useValueChanged-CNmcYNNi.js";import"./CollapsiblePanel-ZhX5L-lI.js";import"./MultiColumnSortDialog-OLhPs4uo.js";import"./MenuTrigger-C4RGeAR7.js";import"./CompositeItem-ClK4GwxV.js";import"./ToolbarRootContext-BeUcIWq0.js";import"./getDisabledMountTransitionStyles-BTSpAzLB.js";import"./getPseudoElementBounds-D46R6mk6.js";import"./chevron-down-CtewQHTT.js";import"./index-91nsioHy.js";import"./error-4ibjlhF7.js";import"./BaseCbacBanner-IKOUH4Um.js";import"./makeExternalStore-MGpOOWzr.js";import"./Tooltip-D1DLlEu4.js";import"./PopoverPopup-B2PZtKL4.js";import"./debounce-CKUoy-ZY.js";import"./tick-Bb30Qkcj.js";import"./DropdownField-BqLWLDk5.js";import"./isEqual-RnyrL87f.js";import"./withOsdkMetrics-BxqDWVVo.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
