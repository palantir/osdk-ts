import{j as r}from"./iframe-D8hMLNEt.js";import{O as b}from"./object-table-BKVAudWN.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DgdPd1sT.js";import{u as g}from"./useOsdkClient-Dp1gI7BH.js";import"./preload-helper-DdG7SQNV.js";import"./Table-DPcU3goU.js";import"./index-QDiAeGPl.js";import"./Dialog-CTNbHSyM.js";import"./cross-SP4nOs9x.js";import"./svgIconContainer-BJNLg_qp.js";import"./useBaseUiId-O-XOb3K-.js";import"./InternalBackdrop-BWmGo_0i.js";import"./composite-36-nzuho.js";import"./index-D2Eij5lS.js";import"./index-B7f8WC_6.js";import"./index-CYi3P9bP.js";import"./useEventCallback-BUFtzlGF.js";import"./SkeletonBar-Br5GneAQ.js";import"./LoadingCell-Dc5q-JgP.js";import"./ColumnConfigDialog-Bv-9rG9y.js";import"./DraggableList-DFj2LmBF.js";import"./search-fDezn5AL.js";import"./Input-DMnyIvQ_.js";import"./useControlled-60YnUuGr.js";import"./Button-C5El-Ott.js";import"./small-cross-CnL6sI_q.js";import"./ActionButton-BBpnUKPy.js";import"./Checkbox-Cha3BFPL.js";import"./useValueChanged-Bm34Du_O.js";import"./CollapsiblePanel-Cy98f2QZ.js";import"./MultiColumnSortDialog-DXezHdvO.js";import"./MenuTrigger--bnc-pAS.js";import"./CompositeItem-C5rE64Sx.js";import"./ToolbarRootContext-D5yv28Ry.js";import"./getDisabledMountTransitionStyles-C0Hmpzmq.js";import"./getPseudoElementBounds-BmPS8XBk.js";import"./chevron-down-BOORn2QE.js";import"./index-CXwV2iqk.js";import"./error-CLijhntf.js";import"./BaseCbacBanner-B0WVh69X.js";import"./makeExternalStore-Bvnv1DDu.js";import"./Tooltip-Cll_9OQu.js";import"./PopoverPopup-CnH8jKUA.js";import"./debounce-DSbZ-o5K.js";import"./tick-CGx1uDyI.js";import"./DropdownField-B31FtCPd.js";import"./isEqual-Dbe--Ogh.js";import"./withOsdkMetrics-wAiRx6GW.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
