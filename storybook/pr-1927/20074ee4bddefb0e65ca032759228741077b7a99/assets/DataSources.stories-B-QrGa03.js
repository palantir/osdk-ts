import{j as r}from"./iframe-B-Vichjj.js";import{O as b}from"./object-table-BCdIBFyN.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dp2FtGEe.js";import{u as g}from"./useOsdkClient-DfCPaPDl.js";import"./preload-helper-Cti1Qb3M.js";import"./Table-C9Muizw-.js";import"./index-BrQCMcFI.js";import"./Dialog-CxYJpKtD.js";import"./cross-DLbo6j99.js";import"./svgIconContainer-DKifyIgl.js";import"./useBaseUiId-BbqzJTxC.js";import"./InternalBackdrop-Chx6xO5M.js";import"./composite-Disga3Gv.js";import"./index-CXmDZCit.js";import"./index-roXzNt2R.js";import"./index-Dv4MxiBX.js";import"./useEventCallback-kNLNld48.js";import"./SkeletonBar-UxXYq5NI.js";import"./LoadingCell-B8BUYPrh.js";import"./ColumnConfigDialog-BC47B45I.js";import"./DraggableList-BDgiyc03.js";import"./search-DODYwrTJ.js";import"./Input-Dd8GNXSA.js";import"./useControlled-CyehoLEN.js";import"./Button-DhB4QIGX.js";import"./small-cross-CDE3T1VP.js";import"./ActionButton-3O7yiqt6.js";import"./Checkbox-Cx27mLUB.js";import"./useValueChanged-CWg72ruL.js";import"./CollapsiblePanel-CW4q5lnM.js";import"./MultiColumnSortDialog-B3iIgZb6.js";import"./MenuTrigger-DhKPEuWO.js";import"./CompositeItem-nXpoZPrc.js";import"./ToolbarRootContext-Gi45tW71.js";import"./getDisabledMountTransitionStyles-DwdzBcwv.js";import"./getPseudoElementBounds-D1q0SwFG.js";import"./chevron-down-BnTGK2z6.js";import"./index-p0g_0z-Q.js";import"./error-F0thqKPJ.js";import"./BaseCbacBanner-CIt6zgs7.js";import"./makeExternalStore-CZ3SFYVb.js";import"./Tooltip-BiLClmh0.js";import"./PopoverPopup-DfSgOxBk.js";import"./debounce-D27NbIqD.js";import"./tick-fjoIKIQ8.js";import"./DropdownField-DR1IrwcL.js";import"./isEqual-CkE0HBCa.js";import"./withOsdkMetrics-CNKwevxI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
