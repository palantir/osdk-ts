import{j as r}from"./iframe-BxC0rnVf.js";import{O as b}from"./object-table-BtjJwEQU.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-9tDI72Fu.js";import{u as g}from"./useOsdkClient-DcDbgTWT.js";import"./preload-helper-CsqKNXT4.js";import"./Table-Cm_ZXCAG.js";import"./index-CB930e5x.js";import"./Dialog-CrdwlqVW.js";import"./cross-BpFLUEKb.js";import"./svgIconContainer-BuuNAr0U.js";import"./useBaseUiId-BRpjjaal.js";import"./InternalBackdrop-PILmt-GV.js";import"./composite-sAiFlK1Y.js";import"./index-Bdkgurn2.js";import"./index-FGHPo6lI.js";import"./index-D-NcnYmU.js";import"./useEventCallback-mLxVut11.js";import"./SkeletonBar-Bv-CCVUB.js";import"./LoadingCell-BKIjSPo4.js";import"./ColumnConfigDialog-CZ1m7UHv.js";import"./DraggableList-zdckpiAS.js";import"./search-BeNbtvpq.js";import"./Input-BynHcsMQ.js";import"./useControlled-DC01SbDU.js";import"./isEqual-lrapgCCQ.js";import"./isObject-ClysUrYf.js";import"./Button-BNu5fBU0.js";import"./ActionButton-Dd3qspII.js";import"./Checkbox-CbvmOXOW.js";import"./useValueChanged-hoJa7UO_.js";import"./CollapsiblePanel-BNDP3zSw.js";import"./MultiColumnSortDialog-DefXQB-g.js";import"./MenuTrigger-CRpAfNkz.js";import"./CompositeItem-DAic8xZX.js";import"./ToolbarRootContext-CX0irP5X.js";import"./getDisabledMountTransitionStyles-D4oIwPK9.js";import"./getPseudoElementBounds-DSBZWeu7.js";import"./chevron-down-BU_rocIF.js";import"./index-UDAhzYMP.js";import"./error-CKn6N_jF.js";import"./BaseCbacBanner-CtX7U5Ls.js";import"./makeExternalStore-DurDWx8y.js";import"./Tooltip-paEHixY4.js";import"./PopoverPopup-CfOUkERU.js";import"./toNumber-CqWtRKov.js";import"./tick-DFNHUkMm.js";import"./DropdownField-DIx8k6z5.js";import"./withOsdkMetrics-CS2XIluR.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
