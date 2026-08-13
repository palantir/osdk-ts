import{j as r}from"./iframe-B3GwK4s3.js";import{O as b}from"./object-table-CqMZrAxw.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CVKTiRt0.js";import{u as g}from"./useOsdkClient-D4VDr9Gn.js";import"./preload-helper-DJ-YN-iG.js";import"./Table-Dm2GdYCJ.js";import"./index-Cz6EBUKe.js";import"./Dialog-D94UPfPg.js";import"./cross-DaQTNtqn.js";import"./svgIconContainer-11sW1-xS.js";import"./useBaseUiId-Boj-QUxa.js";import"./InternalBackdrop-DgczOFjl.js";import"./composite-PxQPegKz.js";import"./index-CliIsbDx.js";import"./index-B1tSWc_A.js";import"./index-DPQpupOU.js";import"./useEventCallback-qiaal7tY.js";import"./SkeletonBar-8YAbkJed.js";import"./LoadingCell-C50fSrmY.js";import"./ColumnConfigDialog-C-C3QQuN.js";import"./DraggableList-C0KREyCG.js";import"./search-k6RbeZC_.js";import"./Input-pJTRV29h.js";import"./useControlled-DDUO_V7t.js";import"./Button-jfTE2vPB.js";import"./small-cross-CvbZSduI.js";import"./ActionButton-4vZKcE6j.js";import"./Checkbox-BqwFp9dy.js";import"./useValueChanged-Cqlij2fS.js";import"./CollapsiblePanel-DqUvv6bf.js";import"./MultiColumnSortDialog-DY6Qe2-5.js";import"./MenuTrigger-BAS276W-.js";import"./CompositeItem-Cht7Ot0q.js";import"./ToolbarRootContext-CbqesPbi.js";import"./getDisabledMountTransitionStyles-Du3xy9HP.js";import"./getPseudoElementBounds-nxeKvjir.js";import"./chevron-down-D1x0iG-D.js";import"./index-BCQ5Sf7j.js";import"./error-CaJ_TOjb.js";import"./BaseCbacBanner-DnGnVSrn.js";import"./makeExternalStore-DvtS8XD8.js";import"./Tooltip-BDVpcUa4.js";import"./PopoverPopup-CyAan2V3.js";import"./debounce-BGH6TLhD.js";import"./tick-CKHk03q2.js";import"./DropdownField-Cw6DGzxj.js";import"./isEqual-D9n9eSFb.js";import"./withOsdkMetrics-Dzvz1nJj.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
