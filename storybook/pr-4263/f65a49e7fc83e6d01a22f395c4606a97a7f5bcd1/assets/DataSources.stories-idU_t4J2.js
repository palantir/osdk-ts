import{j as r}from"./iframe-BnIVPADF.js";import{O as b}from"./object-table-AVAMJlkk.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-QrzJlrdc.js";import{u as g}from"./useOsdkClient-BTyq9ZHL.js";import"./preload-helper-D6GdL41X.js";import"./Table-Bja8lNV8.js";import"./index-DBHi4RbH.js";import"./Dialog-HSC9fHdB.js";import"./cross-DLlUDs4D.js";import"./svgIconContainer-gtMhd5mD.js";import"./useBaseUiId-BMj8ARX-.js";import"./InternalBackdrop-RqILjWGS.js";import"./composite-Ji9umu3K.js";import"./index-BKtQYF4d.js";import"./index-DwvcPf66.js";import"./index-CS2LLkKv.js";import"./useEventCallback-BxLA2qmi.js";import"./SkeletonBar-Bbzq-NrQ.js";import"./LoadingCell-CgWQDbs0.js";import"./ColumnConfigDialog-CPgTr-hR.js";import"./DraggableList-B-8CW1gW.js";import"./search-BssqF2mG.js";import"./Input-CKDCD_hI.js";import"./useControlled-DeFsLTJI.js";import"./Button-iaybQtEF.js";import"./small-cross-mjS1pjh5.js";import"./ActionButton-DG5xkgFq.js";import"./Checkbox-COG1rG6i.js";import"./useValueChanged-CoLs32Ul.js";import"./CollapsiblePanel-BX1PDtkn.js";import"./MultiColumnSortDialog-DzwjWAJ6.js";import"./MenuTrigger-BqlnCop4.js";import"./CompositeItem-B5UfOKT8.js";import"./ToolbarRootContext-Cc6jVzYJ.js";import"./getDisabledMountTransitionStyles-D3_ex1_k.js";import"./getPseudoElementBounds-D1dOJCQV.js";import"./chevron-down-B7znWhjE.js";import"./index-zynnMEX1.js";import"./error-BWHJsjpo.js";import"./BaseCbacBanner-CmDl6ZYR.js";import"./makeExternalStore-DEMjFRTS.js";import"./Tooltip-xJJqA6f0.js";import"./PopoverPopup-B1uyMBzM.js";import"./debounce-CTj_rgR5.js";import"./tick-Cj8MZaAJ.js";import"./DropdownField-B4fxuMh9.js";import"./isEqual-oCSUY3kF.js";import"./withOsdkMetrics-B_v2aQKf.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
