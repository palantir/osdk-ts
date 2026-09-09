import{j as r}from"./iframe-BUTeW6Ke.js";import{O as b}from"./object-table-YhDdHlU-.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CcsDFkKQ.js";import{u as g}from"./useOsdkClient-DzVNAXf5.js";import"./preload-helper-CQT66xGm.js";import"./Table-CKyDHAwz.js";import"./index-D0KjrmAk.js";import"./Dialog-Dt99Wk0o.js";import"./cross-DBYUdge9.js";import"./svgIconContainer-B9NI5uFH.js";import"./useBaseUiId-DKH5yAyq.js";import"./InternalBackdrop-BJFIyjvY.js";import"./composite-By0Jq-F3.js";import"./index-BZYkF7jv.js";import"./index-CK156m23.js";import"./index-I-Ka0MoY.js";import"./useEventCallback-BatYVPf8.js";import"./SkeletonBar-C8ESHQO6.js";import"./LoadingCell-B92WDQ7H.js";import"./ColumnConfigDialog-CJeyFZZ4.js";import"./DraggableList-Cvt6nEiH.js";import"./search-B5UpA2gd.js";import"./Input-DMsfofkB.js";import"./useControlled-BR0Jp6X7.js";import"./Button-B9aFxizM.js";import"./small-cross-CujZxCc8.js";import"./ActionButton-Bl9M4qvT.js";import"./Checkbox-B_AeFNqE.js";import"./useValueChanged-BcTLslwE.js";import"./CollapsiblePanel-6SzXO-cz.js";import"./MultiColumnSortDialog-Ck-AGHON.js";import"./MenuTrigger-D4Gx36JC.js";import"./CompositeItem-g-Qz-xCN.js";import"./ToolbarRootContext-ByyEnW8P.js";import"./getDisabledMountTransitionStyles-LOuwySdb.js";import"./getPseudoElementBounds-DDbKOR-k.js";import"./chevron-down-vn_j_zw5.js";import"./index-CJvQAT9P.js";import"./error-CJcI6CJg.js";import"./BaseCbacBanner-CuETapu_.js";import"./makeExternalStore-DsqUkO_T.js";import"./Tooltip-DaEaPpGd.js";import"./PopoverPopup-hdVmfLzZ.js";import"./debounce-DejzhDtV.js";import"./tick-CCKb6vG9.js";import"./DropdownField-Cm4jpBrK.js";import"./isEqual-BBDvdDDX.js";import"./withOsdkMetrics-Dgk1QvO0.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
