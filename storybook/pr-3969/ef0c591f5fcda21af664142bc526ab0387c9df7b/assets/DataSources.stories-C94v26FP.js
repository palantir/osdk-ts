import{j as r}from"./iframe-D12e5Yf9.js";import{O as b}from"./object-table-C83DgUss.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CI-Lit35.js";import{u as g}from"./useOsdkClient-PwSTMRmq.js";import"./preload-helper-34QCnBMF.js";import"./Table-BwaFBq6A.js";import"./index-O4zTr8Ld.js";import"./Dialog-RlonKzaN.js";import"./cross-Cs_yM80q.js";import"./svgIconContainer-B0rntCL0.js";import"./useBaseUiId-s740CplR.js";import"./InternalBackdrop-BAYiAeOX.js";import"./composite-BD8updFS.js";import"./index-Hw5856rK.js";import"./index-GyhMgPa-.js";import"./index-CS6GRPG3.js";import"./useEventCallback-CSCtau5v.js";import"./SkeletonBar-Cka0V5Rd.js";import"./LoadingCell-DJKcxbzu.js";import"./ColumnConfigDialog-C3gIwO9D.js";import"./DraggableList-B5PA338U.js";import"./search-D5rTLbi7.js";import"./Input-dW8Zs2Bg.js";import"./useControlled-ID5WarEe.js";import"./Button-D5sAducB.js";import"./small-cross-DeNy61PY.js";import"./ActionButton-D-3sp6yo.js";import"./Checkbox-CUmX8lCr.js";import"./useValueChanged-BKRmcgi7.js";import"./CollapsiblePanel-ON1FZ9if.js";import"./MultiColumnSortDialog-BDa7i4rv.js";import"./MenuTrigger-D_-LX7s-.js";import"./CompositeItem-BNcuqAtd.js";import"./ToolbarRootContext-DNlY1kW_.js";import"./getDisabledMountTransitionStyles-Dqz1fAgY.js";import"./getPseudoElementBounds-D9Evvgka.js";import"./chevron-down-BHFsOBbt.js";import"./index-idqsRB9k.js";import"./error-DMTSuwww.js";import"./BaseCbacBanner-Du0rme9V.js";import"./makeExternalStore-HCjLV6k-.js";import"./Tooltip-DP25Isvd.js";import"./PopoverPopup-cuW7qwZh.js";import"./debounce-hXqbGHnZ.js";import"./tick-Bj9LbqSh.js";import"./DropdownField-o_Oc83C9.js";import"./isEqual-CL5yfhVm.js";import"./withOsdkMetrics-B58QGQVF.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
