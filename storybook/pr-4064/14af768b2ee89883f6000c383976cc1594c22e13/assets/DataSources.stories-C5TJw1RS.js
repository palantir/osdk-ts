import{j as r}from"./iframe-DkFy_hb4.js";import{O as b}from"./object-table-tqkgHWJN.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-k-3xbj_q.js";import{u as g}from"./useOsdkClient-DL12bN9E.js";import"./preload-helper-BICWnFyb.js";import"./Table-Czo-rNx0.js";import"./index-CVhUa1cn.js";import"./Dialog-DFAX-dbI.js";import"./cross-BZRmfado.js";import"./svgIconContainer-Cc9-LdUz.js";import"./useBaseUiId-o_BwtbxA.js";import"./InternalBackdrop-BfAbsSH4.js";import"./composite-BGBfqcyM.js";import"./index-CYtpQu4o.js";import"./index-BKrHpELt.js";import"./index-D1Z2JBnZ.js";import"./useEventCallback-D8o005mn.js";import"./SkeletonBar-BavgYnmL.js";import"./LoadingCell-Cn0CPdwq.js";import"./ColumnConfigDialog-BaazBVOL.js";import"./DraggableList-DsgYclEh.js";import"./search-CLZw3WrP.js";import"./Input-NAoVb_RW.js";import"./useControlled-DzWKWqDT.js";import"./Button-CIX_sEiv.js";import"./small-cross-4XsWs7Rg.js";import"./ActionButton-DkdJBeiD.js";import"./Checkbox-F2U6phuX.js";import"./useValueChanged-DPBclZxi.js";import"./CollapsiblePanel-CRr1BQCY.js";import"./MultiColumnSortDialog-BVI-ddvy.js";import"./MenuTrigger-DBm0Zv4A.js";import"./CompositeItem-CdeIEk-d.js";import"./ToolbarRootContext-h2PUW2Ai.js";import"./getDisabledMountTransitionStyles-DcR5RtRw.js";import"./getPseudoElementBounds-D5PVShQs.js";import"./chevron-down-DpJL6cgz.js";import"./index-BdEt_Nen.js";import"./error-GJosWbv9.js";import"./BaseCbacBanner-Bhn381V6.js";import"./makeExternalStore-C1G5lVa7.js";import"./Tooltip-BVdzPxCH.js";import"./PopoverPopup-Bc8XtssV.js";import"./debounce-DrtMuAJj.js";import"./tick-CIdK2AnH.js";import"./DropdownField-D35PrCn4.js";import"./isEqual-BCM93oB1.js";import"./withOsdkMetrics-BuzdoqQa.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
