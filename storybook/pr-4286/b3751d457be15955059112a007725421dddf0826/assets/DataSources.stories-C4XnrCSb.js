import{j as r}from"./iframe-CSMdLy_I.js";import{O as b}from"./object-table-DpGPH4ge.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-By4inABE.js";import{u as g}from"./useOsdkClient-DQvQ58tC.js";import"./preload-helper-BCwYmOqM.js";import"./Table-DfBtddzc.js";import"./index-DGS2fgyr.js";import"./Dialog-i8zsa85E.js";import"./cross-rRwDjGT0.js";import"./svgIconContainer-CrtGHbrd.js";import"./useBaseUiId-DtXDl3EO.js";import"./InternalBackdrop-BfeMZC_0.js";import"./composite-Cr1W43yt.js";import"./index-BhZRCTRM.js";import"./index-DLB3_ur9.js";import"./index-QJiueyA8.js";import"./useEventCallback-W8UKu-Ag.js";import"./SkeletonBar-C4tzn2dO.js";import"./LoadingCell-BJmc-ZNS.js";import"./ColumnConfigDialog-C2NzCes3.js";import"./DraggableList-CGE8lq2b.js";import"./search-WBNkBZFc.js";import"./Input-4tMRpSwt.js";import"./useControlled-gwPjRggQ.js";import"./Button-BsIC8U9B.js";import"./small-cross-BwgGFbKS.js";import"./ActionButton-CeW5NSaB.js";import"./Checkbox-CRfBxcXo.js";import"./useValueChanged-C8niT4lC.js";import"./CollapsiblePanel-rhXz0ewg.js";import"./MultiColumnSortDialog-BcEiz3VR.js";import"./MenuTrigger-jClvhzvb.js";import"./CompositeItem-CQ_4wlFD.js";import"./ToolbarRootContext-2k2UafpN.js";import"./getDisabledMountTransitionStyles-D6grOVXg.js";import"./getPseudoElementBounds-C6u0lb-d.js";import"./chevron-down-Cct1BoUi.js";import"./index-CWmnhREc.js";import"./error-Duh78PLb.js";import"./BaseCbacBanner-BkUrSOHZ.js";import"./makeExternalStore-ToHZ88Vl.js";import"./Tooltip-ccVO4Ah8.js";import"./isObject-C3_fL553.js";import"./debounce-Bv9TTPnt.js";import"./tick-DhgTEvaD.js";import"./DropdownField-DIrWqSq3.js";import"./isEqual-Bn8jYnsm.js";import"./_baseIsEqual-DB2r6boN.js";import"./withOsdkMetrics-DOaLQ3Zd.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
