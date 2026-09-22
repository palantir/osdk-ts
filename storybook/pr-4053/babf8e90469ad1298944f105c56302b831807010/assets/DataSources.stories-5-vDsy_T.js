import{j as r}from"./iframe-C2B-VFRS.js";import{O as b}from"./object-table-BJ5i7PgH.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B4ClCFer.js";import{u as g}from"./useOsdkClient-GURrMHyG.js";import"./preload-helper-gVkjcPWs.js";import"./Table-OE5eKuz9.js";import"./index-CibutWy_.js";import"./Dialog-BH9sTQ_Y.js";import"./cross-mlHeLHgf.js";import"./svgIconContainer-CM1uLq-t.js";import"./useBaseUiId-VQFtxAep.js";import"./InternalBackdrop-CJYBMOj7.js";import"./composite-C2cqujK-.js";import"./index-DV_a4T4n.js";import"./index-BPBEeE2g.js";import"./index-CHTq1_qN.js";import"./useEventCallback-BashrAx4.js";import"./SkeletonBar-DWukyqXK.js";import"./LoadingCell-C9_4ywTt.js";import"./ColumnConfigDialog-qgZJ46M8.js";import"./DraggableList-BcZ88qI6.js";import"./search-BLJN7rrF.js";import"./Input-FVPyTFRQ.js";import"./useControlled-BCVnds_y.js";import"./Button-Mk-BPYCM.js";import"./small-cross-Cz9QG-kv.js";import"./ActionButton-D85etQjf.js";import"./Checkbox-DktXiTxH.js";import"./useValueChanged-RJlV-1X-.js";import"./CollapsiblePanel-DS7gWxno.js";import"./MultiColumnSortDialog-CARKhX7X.js";import"./MenuTrigger-DALOgPOG.js";import"./CompositeItem-CfE-UZcL.js";import"./ToolbarRootContext-CfiR31pw.js";import"./getDisabledMountTransitionStyles-CuVxlwmy.js";import"./getPseudoElementBounds-KVjV016-.js";import"./chevron-down-BhxKf9kJ.js";import"./index-PJ8iOaai.js";import"./error-qCP94tkU.js";import"./BaseCbacBanner-2HHCZ3oe.js";import"./makeExternalStore-D8T9YNbX.js";import"./Tooltip-DnchQPHR.js";import"./PopoverPopup-Bl_99L64.js";import"./debounce-B7lhl0_T.js";import"./tick-EdYP3z7-.js";import"./DropdownField-RoShH29N.js";import"./isEqual-BbjptkFW.js";import"./withOsdkMetrics-CLj2Tgqh.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
