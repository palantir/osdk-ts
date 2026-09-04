import{j as r}from"./iframe-CJ4psHOg.js";import{O as b}from"./object-table-GRMKk6hj.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DaYXMpAd.js";import{u as g}from"./useOsdkClient-Bs3HId-B.js";import"./preload-helper-CnvWLU9s.js";import"./Table-cMA2hIFX.js";import"./index-C3yQNnbT.js";import"./Dialog-BqlzrAU9.js";import"./cross-Bare-byH.js";import"./svgIconContainer-BaNWfr18.js";import"./useBaseUiId-DyrOymcM.js";import"./InternalBackdrop-DqSa3KH2.js";import"./composite-BxTUVSqW.js";import"./index-B0t-MH7Z.js";import"./index-Cld24Chi.js";import"./index-BmDdDnIx.js";import"./useEventCallback-dIcMHu5I.js";import"./SkeletonBar-ClzesOCU.js";import"./LoadingCell-CRcYa4DL.js";import"./ColumnConfigDialog-Clp3O73i.js";import"./DraggableList-DvYKoDc9.js";import"./search-B2UifxoD.js";import"./Input-C8hdlhUf.js";import"./useControlled-FXpF1HMA.js";import"./Button-23ABSMgl.js";import"./small-cross-BUvQb5Jp.js";import"./ActionButton-I4J4bzq7.js";import"./Checkbox-E2qT6viP.js";import"./useValueChanged-Eg63Arfo.js";import"./CollapsiblePanel-BPqkIw8T.js";import"./MultiColumnSortDialog-DacSDA-_.js";import"./MenuTrigger-C2UBxzqP.js";import"./CompositeItem-CwkxMYBx.js";import"./ToolbarRootContext-C-4jRAr6.js";import"./getDisabledMountTransitionStyles-CGJlU2Jf.js";import"./getPseudoElementBounds-BQVnQvY_.js";import"./chevron-down-BegRN8q-.js";import"./index-d1HP_js7.js";import"./error-Bn4V0LpQ.js";import"./BaseCbacBanner-D0ajWtjX.js";import"./makeExternalStore-CZxqc8La.js";import"./Tooltip-X1bNRoko.js";import"./PopoverPopup-ZyXkzEeN.js";import"./debounce-DtKena2t.js";import"./tick-CaD1yuR8.js";import"./DropdownField-DJtngQjG.js";import"./isEqual-BUIEKy8Q.js";import"./withOsdkMetrics-DlR5OldO.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
