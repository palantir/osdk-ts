import{j as r}from"./iframe-KFmuHpi6.js";import{O as b}from"./object-table-Ci6iHK5H.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Coo0DXde.js";import{u as g}from"./useOsdkClient-jK4jvHg5.js";import"./preload-helper-DA3sodJk.js";import"./Table-Ctn2BHK_.js";import"./index-CBTTDR05.js";import"./Dialog-DXD3Yb-U.js";import"./cross-BxqJFApi.js";import"./svgIconContainer-D_AfyEve.js";import"./useBaseUiId-CrXnmgW5.js";import"./InternalBackdrop-CHvDuBxy.js";import"./composite-Bv5M65D9.js";import"./index-BkMhET5E.js";import"./index-Di_4vTer.js";import"./index-D41spogg.js";import"./useEventCallback-CjOHxRvH.js";import"./SkeletonBar-BMkWU_25.js";import"./LoadingCell-DhiN6Nif.js";import"./ColumnConfigDialog-CEXFOadJ.js";import"./DraggableList-BzrmwoQC.js";import"./search-Bq4-27c_.js";import"./Input-B-ppJqtJ.js";import"./useControlled-D9mNQgHG.js";import"./Button-CS75p-oM.js";import"./small-cross-D9wsbyzz.js";import"./ActionButton-NpNjrugw.js";import"./Checkbox-BTxxH2kF.js";import"./useValueChanged-YKfipK9M.js";import"./CollapsiblePanel-TR3Y0YZC.js";import"./MultiColumnSortDialog-BE5wOz1H.js";import"./MenuTrigger-BdBfvPxr.js";import"./CompositeItem-BqmVxYgk.js";import"./ToolbarRootContext-DPZQ9O-r.js";import"./getDisabledMountTransitionStyles-v24lbGuZ.js";import"./getPseudoElementBounds-CCT63s9j.js";import"./chevron-down-BDNkXUjZ.js";import"./index-tH9oz2kR.js";import"./error-BbvMlxw1.js";import"./BaseCbacBanner-CwkjYwzX.js";import"./makeExternalStore-C27aCTGI.js";import"./Tooltip-CBzWZ40Q.js";import"./PopoverPopup-oWKBQoRn.js";import"./debounce-JwfeVHKk.js";import"./tick-yLHvFrbb.js";import"./DropdownField-CGz7tZKd.js";import"./isEqual-BObLPwl5.js";import"./withOsdkMetrics-BaXo7wYf.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
