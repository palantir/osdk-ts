import{j as r}from"./iframe-DWUqeI24.js";import{O as b}from"./object-table-BBQC_911.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BwZUVxd9.js";import{u as g}from"./useOsdkClient-CwrvHIMC.js";import"./preload-helper-CmhaJZKB.js";import"./Table-DJ-8h0Ue.js";import"./index-BTzXT2fz.js";import"./Dialog-DUPFYJmG.js";import"./cross-BB5wWstC.js";import"./svgIconContainer-CMAH9PXj.js";import"./useBaseUiId-doo5xxPr.js";import"./InternalBackdrop-CaSxUhcq.js";import"./composite-ZAPDDfKz.js";import"./index-Dx1vPjnd.js";import"./index-DMdejw5x.js";import"./index-DbIaKji_.js";import"./useEventCallback-D0l5hp3N.js";import"./SkeletonBar-qhYaU4np.js";import"./LoadingCell-CfUNbjuO.js";import"./ColumnConfigDialog-CRIZxLkc.js";import"./DraggableList-CZXLwsne.js";import"./search-D4gR5Cv7.js";import"./Input-Bgk_NfQE.js";import"./useControlled-DQPmnWCX.js";import"./Button-2G_MsyZd.js";import"./small-cross-BukaMN3V.js";import"./ActionButton-CJrSAwg7.js";import"./Checkbox-CiRepsyd.js";import"./useValueChanged-DZKLN3ln.js";import"./CollapsiblePanel-Bovk3gQ8.js";import"./MultiColumnSortDialog-DlEeC5so.js";import"./MenuTrigger-Cjqb2Zcx.js";import"./CompositeItem-Dli-qKbZ.js";import"./ToolbarRootContext-CY7Utxgx.js";import"./getDisabledMountTransitionStyles-CS1MQ6DV.js";import"./getPseudoElementBounds-CMWVvTL2.js";import"./chevron-down-B3eOykDC.js";import"./index-yBL9LV9H.js";import"./error-Zui98JXp.js";import"./BaseCbacBanner-Dc9_JOJQ.js";import"./makeExternalStore-rBHUiwcS.js";import"./Tooltip-CreZ18hV.js";import"./PopoverPopup-6iL55eGG.js";import"./debounce-D8IMDa7u.js";import"./tick-kx78m2XG.js";import"./DropdownField-BdJgqSaf.js";import"./isEqual-CPmXXs5q.js";import"./withOsdkMetrics-cXHP5nhH.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
