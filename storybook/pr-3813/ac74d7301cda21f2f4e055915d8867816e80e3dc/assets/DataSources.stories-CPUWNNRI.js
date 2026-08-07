import{j as r}from"./iframe-BN9OJAgN.js";import{O as b}from"./object-table-BtXg9Jt9.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D8LRIbfn.js";import{u as g}from"./useOsdkClient-DYpWW1q8.js";import"./preload-helper-DTgW9lTk.js";import"./Table-Bm6ShkKY.js";import"./index-L-2VxvDT.js";import"./Dialog-BX2TIW55.js";import"./cross-ByA-dAnm.js";import"./svgIconContainer-hHjG4XJm.js";import"./useBaseUiId-CFnH6spW.js";import"./InternalBackdrop-C4trdGf5.js";import"./composite-B_FYTcr6.js";import"./index-XU0FUMPK.js";import"./index-BVudBLeJ.js";import"./index-CEvXZPz0.js";import"./useEventCallback--6m9_KS5.js";import"./SkeletonBar-C4QQNdI-.js";import"./LoadingCell-CCeFVwer.js";import"./ColumnConfigDialog-CjJ-0VBU.js";import"./DraggableList-616ntRZ-.js";import"./search-BpHAJh9z.js";import"./Input-BRu8vzsZ.js";import"./useControlled-CD4tqtci.js";import"./isEqual-DBlDHhPX.js";import"./isObject-BcXP8hna.js";import"./Button-DF2G5VEF.js";import"./ActionButton-ChDdKwqd.js";import"./Checkbox-tcCMRhRc.js";import"./useValueChanged-B2FQR58s.js";import"./CollapsiblePanel-DPsWFXth.js";import"./MultiColumnSortDialog-Bxpec3cA.js";import"./MenuTrigger-DyQXTKfV.js";import"./CompositeItem-3je88er8.js";import"./ToolbarRootContext-D9x68E4s.js";import"./getDisabledMountTransitionStyles-7a1Vlybt.js";import"./getPseudoElementBounds-DZodAcaj.js";import"./chevron-down-DEEy7cZJ.js";import"./index-BIb_aCOQ.js";import"./error-ViRMI7b4.js";import"./BaseCbacBanner-DkAgQMFT.js";import"./makeExternalStore-DH_VyjIn.js";import"./Tooltip-DNViEkQt.js";import"./PopoverPopup-DZCedgbo.js";import"./toNumber-4vsy98Eg.js";import"./tick-D_c2nCc1.js";import"./DropdownField-BEVlwcvm.js";import"./withOsdkMetrics-D2gdZo_l.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
