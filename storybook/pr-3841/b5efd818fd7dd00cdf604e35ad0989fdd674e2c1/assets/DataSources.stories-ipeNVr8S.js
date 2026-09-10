import{j as r}from"./iframe-B9IeBNGg.js";import{O as b}from"./object-table-B-OlF3Bh.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-lC7u2_YM.js";import{u as g}from"./useOsdkClient-CSJF8avV.js";import"./preload-helper-ClkC783W.js";import"./Table-BhJp9i_V.js";import"./index-DybWhixB.js";import"./Dialog-DLLScnHi.js";import"./cross-BHBvGy8S.js";import"./svgIconContainer-BmjXdC_z.js";import"./useBaseUiId-CH6EGP3F.js";import"./InternalBackdrop-gCLjnSXP.js";import"./composite-boJAotvg.js";import"./index-CnuXrNj3.js";import"./index-CJqGIAUW.js";import"./index-B4YI5UQN.js";import"./useEventCallback-DbN_DqZs.js";import"./SkeletonBar-C48ZenHQ.js";import"./LoadingCell-CkzG3KX2.js";import"./ColumnConfigDialog-CGw8n6lE.js";import"./DraggableList-BGcE6c7Y.js";import"./search-Deq1gtA1.js";import"./Input-Iq2bz4Jn.js";import"./useControlled-DKviyNQT.js";import"./Button-CoXfleKP.js";import"./small-cross-DIgXmNYJ.js";import"./ActionButton-f-P6g5hs.js";import"./Checkbox-CNcu3hUs.js";import"./useValueChanged-DEPR-2Hx.js";import"./CollapsiblePanel-B5ry5wH_.js";import"./MultiColumnSortDialog-D7NcH3DD.js";import"./MenuTrigger-pRjMlzuQ.js";import"./CompositeItem-c0dv1mNX.js";import"./ToolbarRootContext-B71dHQV4.js";import"./getDisabledMountTransitionStyles-DCV7TnnH.js";import"./getPseudoElementBounds-DpZ43xVJ.js";import"./chevron-down-CKtjlwoI.js";import"./index-DD1785H2.js";import"./error-Cg3e0-pZ.js";import"./BaseCbacBanner-DrIp1n_M.js";import"./makeExternalStore-B8vFN8aQ.js";import"./Tooltip-BogKNoc8.js";import"./PopoverPopup-Cyw_X9pn.js";import"./debounce-DavaxxZS.js";import"./tick-Dbw2_oO_.js";import"./DropdownField-DXf__6c2.js";import"./isEqual-BGhR7l0w.js";import"./withOsdkMetrics-C0Di3XLY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
