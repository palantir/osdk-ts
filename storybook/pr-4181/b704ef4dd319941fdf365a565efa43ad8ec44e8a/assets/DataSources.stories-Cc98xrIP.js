import{j as r}from"./iframe-N69vsxs5.js";import{O as b}from"./object-table--oS9lLXG.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B-zxl0BP.js";import{u as g}from"./useOsdkClient-CzCwxYrp.js";import"./preload-helper-DK0eU9jP.js";import"./Table-BDw0zVSc.js";import"./index-DFVx6FW1.js";import"./Dialog-Cyl1rkzr.js";import"./cross-BdjHCXJd.js";import"./svgIconContainer-DHGJTaRH.js";import"./useBaseUiId-BOlvpNsK.js";import"./InternalBackdrop-CJ-MZyS5.js";import"./composite-DlZg84y_.js";import"./index-CshN8TfA.js";import"./index-CmUIsfdi.js";import"./index-B5NyIwpH.js";import"./useEventCallback-CIsta-Kv.js";import"./SkeletonBar-CxOLm6U3.js";import"./LoadingCell-D3W6Xq0V.js";import"./ColumnConfigDialog-wb4iu5K_.js";import"./DraggableList-DGvISr5x.js";import"./search-DHKYFAa1.js";import"./Input-DVgfJ9ud.js";import"./useControlled-HSJHWmyV.js";import"./Button-KvR9mvY1.js";import"./small-cross-BCBXkrpc.js";import"./ActionButton-_QLSmCEl.js";import"./Checkbox-D82l6YOs.js";import"./useValueChanged-Cmw18dL4.js";import"./CollapsiblePanel-BxyEH4DM.js";import"./MultiColumnSortDialog-DAgpNhCz.js";import"./MenuTrigger-CYNy5wPz.js";import"./CompositeItem-zsosIukW.js";import"./ToolbarRootContext-DAvYZo9n.js";import"./getDisabledMountTransitionStyles-DMbVH12F.js";import"./getPseudoElementBounds-DOAH-UkU.js";import"./chevron-down-I26OMj3W.js";import"./index-BLwokh6k.js";import"./error-vgCxf202.js";import"./BaseCbacBanner-Bc18pvVk.js";import"./makeExternalStore-BlbjB80h.js";import"./Tooltip-bOGOT-9E.js";import"./PopoverPopup-mInLly2E.js";import"./debounce-DK55d19x.js";import"./tick-CIuihs4e.js";import"./DropdownField-ByuxOcSB.js";import"./isEqual-BGChchyP.js";import"./withOsdkMetrics-D0jHdLVm.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
