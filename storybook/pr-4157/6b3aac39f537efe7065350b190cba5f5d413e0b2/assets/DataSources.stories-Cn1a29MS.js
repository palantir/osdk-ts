import{j as r}from"./iframe-DfwKiHjh.js";import{O as b}from"./object-table-D4wAsZ7q.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-20qFmIWF.js";import{u as g}from"./useOsdkClient-DSSfPHx3.js";import"./preload-helper-5NrpNAmT.js";import"./Table-B7MNUim9.js";import"./index-DQCbDJi8.js";import"./Dialog-DXLxDtSn.js";import"./cross-BXl7NczM.js";import"./svgIconContainer-BCMIhWa6.js";import"./useBaseUiId-SmhboENz.js";import"./InternalBackdrop-BDXq5BSA.js";import"./composite-mjsmoQDf.js";import"./index-aXU9JM6g.js";import"./index-COIAanZc.js";import"./index-UDlVD7eQ.js";import"./useEventCallback-hQRC-YiH.js";import"./SkeletonBar-CpKRXo_I.js";import"./LoadingCell-C4Pk54Me.js";import"./ColumnConfigDialog-BaucgyCS.js";import"./DraggableList-Bbxn-D33.js";import"./search-Df49v7_E.js";import"./Input-CijjM8i3.js";import"./useControlled-BVcUwOCR.js";import"./Button-4g201-R3.js";import"./small-cross-e1k1o1SZ.js";import"./ActionButton-Du85Cev6.js";import"./Checkbox-CDdUZXw-.js";import"./useValueChanged-DsumsiTQ.js";import"./CollapsiblePanel-CHALF4sW.js";import"./MultiColumnSortDialog-BtsOJ0RZ.js";import"./MenuTrigger-CcZ6zKIy.js";import"./CompositeItem-BRErCda5.js";import"./ToolbarRootContext-ywVZD9re.js";import"./getDisabledMountTransitionStyles-BcpIOTg3.js";import"./getPseudoElementBounds-Qvyi7lGR.js";import"./chevron-down-DeRPcryF.js";import"./index-BvJwPorm.js";import"./error-GYK-h93n.js";import"./BaseCbacBanner-DpSPxnKD.js";import"./makeExternalStore-DBs5yW9O.js";import"./Tooltip-DCCHCGDN.js";import"./PopoverPopup-D8jrxLG3.js";import"./debounce-Db1JwLM-.js";import"./tick-Cg1u7UqH.js";import"./DropdownField-BUzOTkFF.js";import"./isEqual-Des70IXo.js";import"./withOsdkMetrics-x9zZJEiy.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
