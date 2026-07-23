import{j as r}from"./iframe-Cos_ofCy.js";import{O as b}from"./object-table-Y5iUMhG7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B_egHqb0.js";import{u as g}from"./useOsdkClient-Df3IuLfg.js";import"./preload-helper-CdGuEwVx.js";import"./Table-BJPnPRWS.js";import"./index-DDSQGeHq.js";import"./Dialog-BKHY_is-.js";import"./cross-Cs_o1IBr.js";import"./svgIconContainer-BOcgzqTL.js";import"./useBaseUiId-BoCR0mVM.js";import"./InternalBackdrop-a-1TUhKR.js";import"./composite-C2bzS_eC.js";import"./index-D7gjn-bC.js";import"./index-C68uuJyt.js";import"./index-6MtMpwNm.js";import"./useEventCallback-DScuBbC5.js";import"./SkeletonBar-BZb1P8Qp.js";import"./LoadingCell-C7XTpkDw.js";import"./ColumnConfigDialog-CyTLpYWA.js";import"./DraggableList-Q4D349op.js";import"./search-C9QPdOJ2.js";import"./Input-BKyhRKRB.js";import"./useControlled-CU8iec4I.js";import"./isEqual-IWZJBVF1.js";import"./isObject-C2bjSTiE.js";import"./Button-DJJJIJ8U.js";import"./ActionButton-Be-sd2GN.js";import"./Checkbox-B8AIL56G.js";import"./useValueChanged-B7ldNgfd.js";import"./CollapsiblePanel-RlQL_xjx.js";import"./MultiColumnSortDialog-CW1m32-a.js";import"./MenuTrigger-Dx9vEa8h.js";import"./CompositeItem-CfU3YuOz.js";import"./ToolbarRootContext-uScdLbZ3.js";import"./getDisabledMountTransitionStyles-DLxvAmhZ.js";import"./getPseudoElementBounds-CUu-7ttm.js";import"./chevron-down-DDQApabx.js";import"./index-Bw8KyJ0j.js";import"./error-DyQZ58wH.js";import"./BaseCbacBanner-Biu4grrU.js";import"./makeExternalStore-D4qNgwYa.js";import"./Tooltip-C1yGDdiV.js";import"./PopoverPopup-bgrrdxmZ.js";import"./toNumber-DoDd6CDz.js";import"./tick-DPttqPRs.js";import"./DropdownField-C6Y3ObD0.js";import"./withOsdkMetrics-0H3uZ0eq.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
