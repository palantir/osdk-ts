import{j as r}from"./iframe-tTpw548-.js";import{O as b}from"./object-table-BCDZaXaC.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D50JYuXZ.js";import{u as g}from"./useOsdkClient-DSnXFag8.js";import"./preload-helper-BfLQzAkp.js";import"./Table-CQgHASpq.js";import"./index-CfoC8y9T.js";import"./Dialog-CcCJwuwm.js";import"./cross-CLKnrtat.js";import"./svgIconContainer-T3TG2U7K.js";import"./useBaseUiId-CAQFrlAe.js";import"./InternalBackdrop-_xAR7iPe.js";import"./composite-CJkTEPcI.js";import"./index-BP7y8sZT.js";import"./index-D2O-B8gB.js";import"./index-C8camuNF.js";import"./useEventCallback-1ybuVTus.js";import"./SkeletonBar-Ba6ZiQYs.js";import"./LoadingCell-CDMAzX01.js";import"./ColumnConfigDialog-D3qNKgcM.js";import"./DraggableList-mlkL4pGw.js";import"./search-DermPgDt.js";import"./Input-HFN8Ab80.js";import"./useControlled-C7x4-FQ_.js";import"./Button-GJuyUH0v.js";import"./small-cross-DlwKfIY_.js";import"./ActionButton-cg61E8o3.js";import"./Checkbox-utjOGAI8.js";import"./useValueChanged-DAHI-SPm.js";import"./CollapsiblePanel-C5C_WUGb.js";import"./MultiColumnSortDialog-DRlOQfTI.js";import"./MenuTrigger-CwGcycds.js";import"./CompositeItem-CCzTqTt9.js";import"./ToolbarRootContext-CJ6qVhPJ.js";import"./getDisabledMountTransitionStyles-BbmWSW2i.js";import"./getPseudoElementBounds-Bmi-Rz86.js";import"./chevron-down-EEhO5M0S.js";import"./index-LL3h6rZ2.js";import"./error-DVgq5BdO.js";import"./BaseCbacBanner-fq8ZDz2f.js";import"./makeExternalStore-0aQuonQe.js";import"./Tooltip-D0gUYvNC.js";import"./PopoverPopup-C-VSahmb.js";import"./debounce-DfLNQaQZ.js";import"./tick-D3aN5WCZ.js";import"./DropdownField-9NgabMek.js";import"./isEqual-D5EvyUKD.js";import"./withOsdkMetrics-DMDExHtI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
