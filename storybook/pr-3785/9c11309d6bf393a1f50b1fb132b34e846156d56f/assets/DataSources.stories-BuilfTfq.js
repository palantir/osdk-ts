import{j as r}from"./iframe-ISHOQfc5.js";import{O as b}from"./object-table-8OpgWczO.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DikPVBN0.js";import{u as g}from"./useOsdkClient-DahZKVKk.js";import"./preload-helper-DvlVZRRW.js";import"./Table-CNtXhTM3.js";import"./index-DIh3jcjT.js";import"./Dialog-s5jYdQqX.js";import"./cross-CBjHcWLp.js";import"./svgIconContainer-DtuqW3jd.js";import"./useBaseUiId-uKaeTVeA.js";import"./InternalBackdrop-B4gO3MAw.js";import"./composite-B80WA38w.js";import"./index-D_YubaQ1.js";import"./index-Dqqtt2Iv.js";import"./index-BdKImVAr.js";import"./useEventCallback-DhwLiGkC.js";import"./SkeletonBar-DsWVYjaC.js";import"./LoadingCell-DI_k5VVW.js";import"./ColumnConfigDialog-CERMBd90.js";import"./DraggableList-Dneae-u-.js";import"./search-CMnUBHZ2.js";import"./Input-DdoFIUV_.js";import"./useControlled-CINon2aU.js";import"./isEqual-COeaYAD1.js";import"./isObject-Zv09roRs.js";import"./Button-DhvUcPPD.js";import"./ActionButton-BJk4oTw0.js";import"./Checkbox-CLXvGtwi.js";import"./useValueChanged-CHSNItn1.js";import"./CollapsiblePanel-hryjGiZW.js";import"./MultiColumnSortDialog-BODt7BHr.js";import"./MenuTrigger-M2awlbrt.js";import"./CompositeItem-Bo1P1gWs.js";import"./ToolbarRootContext-Dob_jToB.js";import"./getDisabledMountTransitionStyles-CJQTx1_6.js";import"./getPseudoElementBounds-CcbfbqiH.js";import"./chevron-down-DhII4Rpq.js";import"./index-BZc_8tWb.js";import"./error-DUcOx40G.js";import"./BaseCbacBanner-CNa1yrZi.js";import"./makeExternalStore-V0faKrRY.js";import"./Tooltip-B6GjTRqL.js";import"./PopoverPopup-DZ4RScjh.js";import"./toNumber-DTzRCPAH.js";import"./tick-CFcRW_8j.js";import"./DropdownField-QAs5n16T.js";import"./withOsdkMetrics-Bw8tRnT9.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
