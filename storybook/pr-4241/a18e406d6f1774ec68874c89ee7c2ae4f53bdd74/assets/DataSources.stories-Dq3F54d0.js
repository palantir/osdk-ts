import{j as r}from"./iframe-BZfq9wpL.js";import{O as b}from"./object-table-DoWPZlVv.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C9v4VDHd.js";import{u as g}from"./useOsdkClient-De89dM9U.js";import"./preload-helper-AwKDT_jv.js";import"./Table-td4H65UV.js";import"./index-D9gasGy7.js";import"./Dialog-BOiQVGkU.js";import"./cross-D_01sNtm.js";import"./svgIconContainer-DnXANREi.js";import"./useBaseUiId-CAA3ipMR.js";import"./InternalBackdrop-C2xaKMNu.js";import"./composite-bZwVCSrk.js";import"./index-DsxnygA5.js";import"./index-Bh2MExip.js";import"./index-C8SZO2gW.js";import"./useEventCallback--L1JDqNv.js";import"./SkeletonBar-CG-4yXUZ.js";import"./LoadingCell-DKI8FSP7.js";import"./ColumnConfigDialog-CalvApPI.js";import"./DraggableList-Cmkt9XM4.js";import"./search-CGtWdQTA.js";import"./Input-CYqif1zS.js";import"./useControlled-mhuNXue2.js";import"./Button-RoczPdix.js";import"./small-cross-DtYxU9Mt.js";import"./ActionButton-BfVU8-_V.js";import"./Checkbox-DLVq20_m.js";import"./useValueChanged-DXG9ZF3t.js";import"./CollapsiblePanel-X8A3X9xp.js";import"./MultiColumnSortDialog-FWsXtXEV.js";import"./MenuTrigger-CmaqcMU6.js";import"./CompositeItem-DdBNHL7r.js";import"./ToolbarRootContext-BAhtauIS.js";import"./getDisabledMountTransitionStyles-CXARh1iQ.js";import"./getPseudoElementBounds-Nz_xFNM1.js";import"./chevron-down-BnbfleEH.js";import"./index-CYqzX_VE.js";import"./error-Dm15EuC9.js";import"./BaseCbacBanner-CWsnq_cD.js";import"./makeExternalStore-BV40BoeT.js";import"./Tooltip-DkzPkwJ6.js";import"./PopoverPopup-CQlRUOAW.js";import"./debounce-CRuMKiUh.js";import"./tick-BFLAooRA.js";import"./DropdownField-B-E6juK1.js";import"./isEqual-BK7_lR_a.js";import"./withOsdkMetrics-BHMRNcoi.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
