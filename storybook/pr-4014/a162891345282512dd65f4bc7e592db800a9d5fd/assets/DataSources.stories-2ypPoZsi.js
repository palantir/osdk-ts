import{j as r}from"./iframe-CuKia_EN.js";import{O as b}from"./object-table-CmttaJ0f.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BFqXdllG.js";import{u as g}from"./useOsdkClient-nV1NX6Cm.js";import"./preload-helper-DZuarx_D.js";import"./Table-D2fC7E-R.js";import"./index-CVRiO_BO.js";import"./Dialog-D7PuDkh6.js";import"./cross-X509BjS9.js";import"./svgIconContainer-6Becg_K2.js";import"./useBaseUiId-C8uIC3Bm.js";import"./InternalBackdrop-ofNkj6qc.js";import"./composite-Cpd5KJD8.js";import"./index-q4KNVnv_.js";import"./index-Dx9fpQkg.js";import"./index-DRmu1dZx.js";import"./useEventCallback-eNr2_rgV.js";import"./SkeletonBar-CQrsNGDe.js";import"./LoadingCell-Fw6A3SCw.js";import"./ColumnConfigDialog-Da23NrBb.js";import"./DraggableList-C_j1TSmW.js";import"./search-Bab6PZbG.js";import"./Input-BIdaiZoI.js";import"./useControlled-UwQVkGem.js";import"./Button-CVMu9YDi.js";import"./small-cross-BeBD9G2Y.js";import"./ActionButton-DU7cLlj1.js";import"./Checkbox-DFS3qNO0.js";import"./useValueChanged-ChchmKxl.js";import"./CollapsiblePanel-HNtDo0gw.js";import"./MultiColumnSortDialog-DV2ZYylK.js";import"./MenuTrigger-QFhkU378.js";import"./CompositeItem-CJjI731A.js";import"./ToolbarRootContext-Bn8zU9xQ.js";import"./getDisabledMountTransitionStyles-CjBLuMnB.js";import"./getPseudoElementBounds-BKhdgpRc.js";import"./chevron-down-DJVJwxKZ.js";import"./index-BcyKe8qn.js";import"./error-C19RYWaj.js";import"./BaseCbacBanner-BeCxEPHQ.js";import"./makeExternalStore-DzI0MTA7.js";import"./Tooltip-3KVWe3HV.js";import"./PopoverPopup-BZX5fwgl.js";import"./debounce-KF7wF3li.js";import"./tick-_5nSoxyV.js";import"./DropdownField-DQBcY_Rm.js";import"./isEqual-DM5iv7nZ.js";import"./withOsdkMetrics-5runl_VG.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
