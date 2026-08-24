import{j as r}from"./iframe-ZGCn2odS.js";import{O as b}from"./object-table-65kVujAe.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BPmFhtyd.js";import{u as g}from"./useOsdkClient-CFyv3ORA.js";import"./preload-helper-BHCQWj8s.js";import"./Table-DJ88caPP.js";import"./index-CJGEKRO7.js";import"./Dialog-BNMNfqMb.js";import"./cross-YMBvsQPC.js";import"./svgIconContainer-DIbGb-SV.js";import"./useBaseUiId-BcKFnlc-.js";import"./InternalBackdrop-GK49McLi.js";import"./composite-DhwjcmOa.js";import"./index-C1SFOp3X.js";import"./index-DI6Iv9sH.js";import"./index-FqvCCkDn.js";import"./useEventCallback-DpDjAOam.js";import"./SkeletonBar-8t2888Rf.js";import"./LoadingCell-yllCbyUI.js";import"./ColumnConfigDialog-fsMZnXZS.js";import"./DraggableList-BeTr9Grg.js";import"./search-BSxa54sW.js";import"./Input-Dz8AuOJD.js";import"./useControlled-BCVu5IOV.js";import"./Button-BDPNYI21.js";import"./small-cross-BniKjSh0.js";import"./ActionButton-C3yeZ1Au.js";import"./Checkbox-aw_MMjVw.js";import"./useValueChanged-CpK0Am2a.js";import"./CollapsiblePanel-C4xCl0yn.js";import"./MultiColumnSortDialog-BOtT3fMs.js";import"./MenuTrigger-CV1o5oXP.js";import"./CompositeItem-Dfs12gOS.js";import"./ToolbarRootContext-DERGfUKY.js";import"./getDisabledMountTransitionStyles-DiyUlUYW.js";import"./getPseudoElementBounds-C_04zlSA.js";import"./chevron-down-B6AtoUz4.js";import"./index-KYd_Sluk.js";import"./error-CFUEkdAJ.js";import"./BaseCbacBanner-BIHQDsQT.js";import"./makeExternalStore-CfgYssbm.js";import"./Tooltip-BIZ4_c9E.js";import"./PopoverPopup-wyULYtii.js";import"./debounce-CCBwI6Yb.js";import"./tick-Do777ZNN.js";import"./DropdownField-BgzDLEZ2.js";import"./isEqual-DOJUpwKE.js";import"./withOsdkMetrics-BCmHmvai.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
