import{j as r}from"./iframe-BtV5Bfbi.js";import{O as b}from"./object-table-ZYe7tm6I.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C1LCGAQw.js";import{u as g}from"./useOsdkClient-CpnotctQ.js";import"./preload-helper-BaD02CxS.js";import"./Table-CBQvxOK4.js";import"./index-DAzHyxws.js";import"./Dialog-Um1GHs-x.js";import"./cross-BHH5GCet.js";import"./svgIconContainer-CFzNfVqM.js";import"./useBaseUiId-BC3a2pkv.js";import"./InternalBackdrop-B_jFUajW.js";import"./composite-C3xTmSSO.js";import"./index-D79nVaz6.js";import"./index-CDtXf1D5.js";import"./index-C0jKnzN3.js";import"./useEventCallback-ebp9vHiV.js";import"./SkeletonBar-B4vnzvdw.js";import"./LoadingCell-De2MP1wZ.js";import"./ColumnConfigDialog-BThrS80a.js";import"./DraggableList-CrCzHpXA.js";import"./search-mBeXzQE2.js";import"./Input-C3DTMAEb.js";import"./useControlled-DlTCUtzh.js";import"./Button-CysZ3JPI.js";import"./small-cross-DPjobAyw.js";import"./ActionButton-BlgkxXyS.js";import"./Checkbox-B-UqzIJw.js";import"./useValueChanged-CHWZQbm_.js";import"./CollapsiblePanel-CD3W91SM.js";import"./MultiColumnSortDialog-BF442a6X.js";import"./MenuTrigger-Bfyh-Slq.js";import"./CompositeItem-Byxrj2vM.js";import"./ToolbarRootContext-BUFM8kOj.js";import"./getDisabledMountTransitionStyles-BU2CuFg5.js";import"./getPseudoElementBounds-UM2c8Uko.js";import"./chevron-down-CdxAFrGc.js";import"./index-C-hRh0T_.js";import"./error-h7XYysQz.js";import"./BaseCbacBanner-5I7wRngd.js";import"./makeExternalStore-1ZTuUud2.js";import"./Tooltip-D8NuVw6n.js";import"./PopoverPopup-BWHAgMN7.js";import"./debounce-BqJT0k2X.js";import"./tick-DOCZRs2u.js";import"./DropdownField-BC7NVBoz.js";import"./isEqual-BSakDJRq.js";import"./withOsdkMetrics-jSZ_Ki0a.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
