import{j as r}from"./iframe-BNZD3xWg.js";import{O as b}from"./object-table-By1u_HCG.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DZwlWmKj.js";import{u as g}from"./useOsdkClient-GLyZrDFl.js";import"./preload-helper-C3FmIxER.js";import"./Table-CFbxZwWj.js";import"./index-DOv_cZ9G.js";import"./Dialog-C7w8W7vF.js";import"./cross-CNjRLxpn.js";import"./svgIconContainer-2ty1idXI.js";import"./useBaseUiId-Dm_OUu_u.js";import"./InternalBackdrop-BFsJkA1x.js";import"./composite-BtkXGRWa.js";import"./index-D51f32rH.js";import"./index-CQVklmSU.js";import"./index-BtQYwxEN.js";import"./useEventCallback-Q_QbXmVH.js";import"./SkeletonBar-DmSABcIx.js";import"./LoadingCell-BcgmtL_W.js";import"./ColumnConfigDialog-7tntoSMi.js";import"./DraggableList-CYBBI1WE.js";import"./search-B_H93lCU.js";import"./Input-QTs7hrar.js";import"./useControlled-izS6CBB9.js";import"./Button-S_R7mlWx.js";import"./small-cross-DBXsh9Ix.js";import"./ActionButton-CuJpLSkR.js";import"./Checkbox-C5pTuN3t.js";import"./useValueChanged-BbIQrdRC.js";import"./CollapsiblePanel-D4Aw1Qj0.js";import"./MultiColumnSortDialog-CDU49QFP.js";import"./MenuTrigger-CEw7tiNK.js";import"./CompositeItem-36LgHZ7r.js";import"./ToolbarRootContext-CS1sgrs1.js";import"./getDisabledMountTransitionStyles-DmpA5T4h.js";import"./getPseudoElementBounds-BO8kaTMX.js";import"./chevron-down-CH0o2x3k.js";import"./index-BZ56AvfN.js";import"./error-_5L66YQC.js";import"./BaseCbacBanner-DdEXiZyu.js";import"./makeExternalStore-XG9GYQLa.js";import"./Tooltip-COOoNd0R.js";import"./PopoverPopup-BpDE3RlV.js";import"./debounce-7pf6IyfH.js";import"./tick-DVVaLwh_.js";import"./DropdownField-BAuDkUJ8.js";import"./isEqual-CryIdvWn.js";import"./withOsdkMetrics-X-R-b_lc.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
