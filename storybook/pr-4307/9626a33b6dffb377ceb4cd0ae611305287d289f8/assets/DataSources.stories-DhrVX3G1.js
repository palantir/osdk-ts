import{j as r}from"./iframe-p7D6sarL.js";import{O as b}from"./object-table-d7k0MilF.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DwrIRfZk.js";import{u as g}from"./useOsdkClient-C4rR5Xc2.js";import"./preload-helper-fTfJHf6r.js";import"./Table-D2RCLefX.js";import"./index-BdE6iQIl.js";import"./Dialog-DH2LknnD.js";import"./cross-BIlvkmku.js";import"./svgIconContainer-4FKWJ0K3.js";import"./useBaseUiId-Dpj_J2PZ.js";import"./InternalBackdrop-CUea6RLj.js";import"./composite-C6-iGtUX.js";import"./index-nQDHUjnH.js";import"./index-CZrsf4r_.js";import"./index-BVmNSvna.js";import"./useEventCallback-TGDvplRl.js";import"./SkeletonBar-tX2D-Wzp.js";import"./LoadingCell-DMgLGSWB.js";import"./ColumnConfigDialog-D83GblJe.js";import"./DraggableList-CkIJ9B56.js";import"./search-0vpab4Qy.js";import"./Input-LdPdzdTD.js";import"./useControlled-D8RNaOKh.js";import"./Button-DTuYEipm.js";import"./small-cross-kvaYMftR.js";import"./ActionButton-bSAEuYzP.js";import"./Checkbox-d2mlHgHd.js";import"./useValueChanged-RektJa3Q.js";import"./CollapsiblePanel-BrMihlLp.js";import"./MultiColumnSortDialog-YKsbHBrQ.js";import"./MenuTrigger-BYCOUBBT.js";import"./CompositeItem-DPnrDtg_.js";import"./ToolbarRootContext-DHC1R4PN.js";import"./getDisabledMountTransitionStyles-BFunDdeZ.js";import"./getPseudoElementBounds-DnyF4quT.js";import"./chevron-down-CW12YW7p.js";import"./index-DrFK8Y9T.js";import"./error-orkHl4EN.js";import"./BaseCbacBanner-CClRbfi-.js";import"./makeExternalStore-DDdf7AUk.js";import"./Tooltip-B-bvds49.js";import"./PopoverPopup-yOM8q7VT.js";import"./debounce-BTn7u_ux.js";import"./tick--ApORUGf.js";import"./DropdownField-BbI_YIBj.js";import"./isEqual-BmyB5nx7.js";import"./withOsdkMetrics-DMV3eX8V.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
