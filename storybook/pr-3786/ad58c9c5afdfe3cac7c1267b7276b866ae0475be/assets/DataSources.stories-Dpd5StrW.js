import{j as r}from"./iframe-BUj1CfXg.js";import{O as b}from"./object-table-DyKvR0rE.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BXdj0yqH.js";import{u as g}from"./useOsdkClient-k-jR9e5k.js";import"./preload-helper-DZ45QRbv.js";import"./Table-CWSTK4rq.js";import"./index-NBVyoVsZ.js";import"./Dialog-B_j-bdOZ.js";import"./cross-DlyIjemV.js";import"./svgIconContainer-MYfqGk3H.js";import"./useBaseUiId-DaOhoyrU.js";import"./InternalBackdrop-DzPAcrCS.js";import"./composite-BkdiVfPs.js";import"./index-C1gw1Q5a.js";import"./index-B4P9wCIh.js";import"./index-CQceiGqI.js";import"./useEventCallback-BbRR7V1i.js";import"./SkeletonBar-DtLmqaeu.js";import"./LoadingCell--ZKV-a4a.js";import"./ColumnConfigDialog-Bq93dVdv.js";import"./DraggableList-BR-zSyBl.js";import"./search-CeD93pBN.js";import"./Input-BTDiXSNB.js";import"./useControlled-BjYCZfKY.js";import"./isEqual-CU5FZwCW.js";import"./isObject-C_gfn-Rb.js";import"./Button-B5y7ZCvT.js";import"./ActionButton-BmWBQE9y.js";import"./Checkbox-BHMj1n9f.js";import"./useValueChanged-RokLUTbm.js";import"./CollapsiblePanel-fD7arT3b.js";import"./MultiColumnSortDialog-B51pu96z.js";import"./MenuTrigger-HGKcp2Gy.js";import"./CompositeItem-C-wl7l8I.js";import"./ToolbarRootContext-BFvRmjuo.js";import"./getDisabledMountTransitionStyles-DUFQ-qCZ.js";import"./getPseudoElementBounds-BnMLzqS4.js";import"./chevron-down-DgAFPu4M.js";import"./index-BXPBNZV3.js";import"./error-peAS9X8o.js";import"./BaseCbacBanner-r6BnHO-C.js";import"./makeExternalStore-CN2SCzrt.js";import"./Tooltip-Byi-ofNp.js";import"./PopoverPopup-C7JRc8oc.js";import"./toNumber-CpnBpuJd.js";import"./tick-8bw-0Y7b.js";import"./DropdownField-BWBqfaQX.js";import"./withOsdkMetrics-CXkSfRrz.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
