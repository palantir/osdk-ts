import{j as r}from"./iframe-yBf-ojhu.js";import{O as b}from"./object-table-BOMqJs_O.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B8u3hddq.js";import{u as g}from"./useOsdkClient-Bw9VJD_N.js";import"./preload-helper-CGYiisRB.js";import"./Table-wxABhy6h.js";import"./index-CdRKjNXW.js";import"./Dialog-fHOO5fq8.js";import"./cross-CpqgxsIm.js";import"./svgIconContainer-DzKsK3pp.js";import"./useBaseUiId-CZtNEuC3.js";import"./InternalBackdrop-CSsFLgHu.js";import"./composite-BhJud1YY.js";import"./index-BHACjACD.js";import"./index-CsTimawz.js";import"./index-Dzg0FXju.js";import"./useEventCallback-BnKVbXQ1.js";import"./SkeletonBar-CgzkWc0c.js";import"./LoadingCell-Dql00YBl.js";import"./ColumnConfigDialog-qA8wMTWY.js";import"./DraggableList-DK0Kd-EX.js";import"./search-BZ0OOikS.js";import"./Input-IJnkzHlh.js";import"./useControlled-DEWrsH1j.js";import"./Button-CqafgKxL.js";import"./small-cross-Kn8vx_NT.js";import"./ActionButton-C7HMH6t8.js";import"./Checkbox-CaAT9v9q.js";import"./useValueChanged-gQZ0oDOl.js";import"./CollapsiblePanel-Dv1dlGER.js";import"./MultiColumnSortDialog-CjusWDNY.js";import"./MenuTrigger-DORfdr2z.js";import"./CompositeItem-BMY8zStj.js";import"./ToolbarRootContext-CnGnSWc3.js";import"./getDisabledMountTransitionStyles-CSwVJeOc.js";import"./getPseudoElementBounds-D2L7paF4.js";import"./chevron-down-C0-Ffhm_.js";import"./index-DXSY2W-l.js";import"./error-C4tONck9.js";import"./BaseCbacBanner-BrmvnQoe.js";import"./makeExternalStore-BJgD01DS.js";import"./Tooltip-Clch_Qe4.js";import"./PopoverPopup-wI-K4VZI.js";import"./debounce-B2jafETK.js";import"./tick-BXpIlGo8.js";import"./DropdownField-CBnk-NYj.js";import"./isEqual-Bj0FLhJj.js";import"./withOsdkMetrics-CxM1E0kE.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
