import{j as r}from"./iframe-D0tV0cI9.js";import{O as b}from"./object-table-B6LV5wHR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Ks0AViL6.js";import{u as g}from"./useOsdkClient-BHqJSoPG.js";import"./preload-helper-BMejyDSI.js";import"./Table-CLQOrv6i.js";import"./index--X-dIIbK.js";import"./Dialog-DrC7eQ2U.js";import"./cross-D1A4Ur2n.js";import"./svgIconContainer-D4vQ8nMV.js";import"./useBaseUiId-DOX0bj2Y.js";import"./InternalBackdrop-8s1L6ptE.js";import"./composite-eLTYJf7x.js";import"./index-PxTuLgQ7.js";import"./index--qRovy9Z.js";import"./index-B0E7m3m7.js";import"./useEventCallback-BU2eLzaP.js";import"./SkeletonBar-BXKY95YJ.js";import"./LoadingCell-PpCOvpZj.js";import"./ColumnConfigDialog-Bp6BVMyr.js";import"./DraggableList-DapAqrTt.js";import"./search-Cnl0jIoS.js";import"./Input-COsc6IX5.js";import"./useControlled-LJkicshM.js";import"./Button-DgOszdIa.js";import"./small-cross-hHO5mdkn.js";import"./ActionButton-nMCNHSER.js";import"./Checkbox-BCMLhMxa.js";import"./useValueChanged-DUSHD8U9.js";import"./CollapsiblePanel-C_dUzpsn.js";import"./MultiColumnSortDialog-CHuLKSPT.js";import"./MenuTrigger-DlWFCK8y.js";import"./CompositeItem-Ch1OySWF.js";import"./ToolbarRootContext-BrObQQEc.js";import"./getDisabledMountTransitionStyles-CU_JeY5i.js";import"./getPseudoElementBounds-B-8LJsE_.js";import"./chevron-down-BYHSUQw3.js";import"./index-DUZjOP9_.js";import"./error-BLp0q_TC.js";import"./BaseCbacBanner-p71Vaotj.js";import"./makeExternalStore-CczQoVJf.js";import"./Tooltip-su0Z3mzC.js";import"./PopoverPopup-CgzNWAqf.js";import"./debounce-CQ8ktfpw.js";import"./tick-O8NB6F9G.js";import"./DropdownField-C2c-svQN.js";import"./isEqual-CSkfXPCA.js";import"./withOsdkMetrics-C1pmSZXh.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
