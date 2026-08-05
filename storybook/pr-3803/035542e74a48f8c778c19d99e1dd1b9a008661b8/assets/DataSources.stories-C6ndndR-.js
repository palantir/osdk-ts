import{j as r}from"./iframe-BuWAiJqq.js";import{O as b}from"./object-table-Dg6uTo_U.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Q2Gcgt8n.js";import{u as g}from"./useOsdkClient-CTOSmuh9.js";import"./preload-helper-GKB8uXJQ.js";import"./Table-wMmYtE5v.js";import"./index-DKQN3MGn.js";import"./Dialog-Dg4Udp1v.js";import"./cross-DjEkx8hG.js";import"./svgIconContainer-DByURt-f.js";import"./useBaseUiId-GGObT-JF.js";import"./InternalBackdrop-B0bWqSaz.js";import"./composite-C1SnCG4A.js";import"./index-DFAgF64G.js";import"./index-B9dzMRkW.js";import"./index-DEUOQSO_.js";import"./useEventCallback-BPOi9RYR.js";import"./SkeletonBar-CLVSe2tF.js";import"./LoadingCell-2Ffy1nwL.js";import"./ColumnConfigDialog-BgUSYDwe.js";import"./DraggableList-BGVr5y5K.js";import"./search-BdQ2EhWX.js";import"./Input-CcDq3pYP.js";import"./useControlled-Cctdi5Pw.js";import"./isEqual-2xf-usy8.js";import"./isObject-aZqfOsIN.js";import"./Button-vtvLXbiy.js";import"./ActionButton-D5nzQiKO.js";import"./Checkbox-DAr_Jmtw.js";import"./useValueChanged-JZg98mWO.js";import"./CollapsiblePanel-D67FpZL7.js";import"./MultiColumnSortDialog-DQUdkJDP.js";import"./MenuTrigger-Cbl7-Jo9.js";import"./CompositeItem-BJOfR8On.js";import"./ToolbarRootContext-b_fKtK1X.js";import"./getDisabledMountTransitionStyles-bjl4L0WK.js";import"./getPseudoElementBounds-CTbPzfBI.js";import"./chevron-down-BLDZnR1d.js";import"./index-BZfI53UY.js";import"./error-Cox_k5eE.js";import"./BaseCbacBanner-DiZjhyyT.js";import"./makeExternalStore-cqUtgK5L.js";import"./Tooltip-Pk9_o1CK.js";import"./PopoverPopup-DjTdhxTJ.js";import"./toNumber-Bl6RDY1O.js";import"./tick-CnI7bF9f.js";import"./DropdownField-BxjPSxoY.js";import"./withOsdkMetrics-3JkArczg.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
