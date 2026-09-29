import{j as r}from"./iframe-zPv4Qzqd.js";import{O as b}from"./object-table-CUYlXaxF.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BC_6Am4J.js";import{u as g}from"./useOsdkClient-BGVTEbj_.js";import"./preload-helper-PJxV9mQF.js";import"./Table-fZnXH_AO.js";import"./index-CBKHTxLZ.js";import"./Dialog-DZNnheOL.js";import"./cross--dxagHok.js";import"./svgIconContainer-vb3o1rNS.js";import"./useBaseUiId-DVjOyWmw.js";import"./InternalBackdrop-CBe1boE7.js";import"./composite-B2SBl57g.js";import"./index-LSfGN98D.js";import"./index-Dqw7fhLs.js";import"./index-CNxBS-8s.js";import"./useEventCallback-DQ_0G6aA.js";import"./SkeletonBar-YCmzJufB.js";import"./LoadingCell-DuJbkSYV.js";import"./ColumnConfigDialog-CNA6JZ0v.js";import"./DraggableList-vwtiIr8s.js";import"./search-CQlxqsQe.js";import"./Input-BZ1hKq3S.js";import"./useControlled-0ViRdTwH.js";import"./Button-Bpg2U0NI.js";import"./small-cross-VYccQ32Y.js";import"./ActionButton-BfWfVjYe.js";import"./Checkbox-D_Zir1cl.js";import"./useValueChanged-n6G7gR_P.js";import"./CollapsiblePanel-BFa8buwC.js";import"./MultiColumnSortDialog-nRSq_gea.js";import"./MenuTrigger-DuJVMmZY.js";import"./CompositeItem-CdWRe_DK.js";import"./ToolbarRootContext-CKYx1umj.js";import"./getDisabledMountTransitionStyles-Ck2s3g2H.js";import"./getPseudoElementBounds-NPMWYZIY.js";import"./chevron-down-Bq07BQjw.js";import"./index-BFqEQ3NN.js";import"./error-DWSHpljN.js";import"./BaseCbacBanner-CQ6NxDOp.js";import"./makeExternalStore-Bpbj6CnC.js";import"./Tooltip-DVU7TgEy.js";import"./PopoverPopup-D_yXP70P.js";import"./debounce-BrLoezJi.js";import"./tick-DG8Ui0fG.js";import"./DropdownField-CqnJScbI.js";import"./isEqual-DSgRsP2x.js";import"./withOsdkMetrics-DD1axzdT.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
