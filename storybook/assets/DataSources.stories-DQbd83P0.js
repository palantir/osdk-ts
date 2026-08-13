import{j as r}from"./iframe-EsVd8uKr.js";import{O as b}from"./object-table-CVwpOI-3.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-4zsgkWKy.js";import{u as g}from"./useOsdkClient-CcauODOu.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DwIVPlkr.js";import"./index-BGqGRh_w.js";import"./Dialog-DGNCDGE1.js";import"./cross-BAb-KGA7.js";import"./svgIconContainer-CKoutHCt.js";import"./useBaseUiId-MN2jXq2W.js";import"./InternalBackdrop-BJfdLHLT.js";import"./composite-1IP-k403.js";import"./index-Dk_BL0rE.js";import"./index-BIk1hOdK.js";import"./index-B6Ums3yK.js";import"./useEventCallback-wffioqZZ.js";import"./SkeletonBar-mr59Hpvz.js";import"./LoadingCell-URVgcuw-.js";import"./ColumnConfigDialog-6L7UVeRK.js";import"./DraggableList-DI_EZ-AX.js";import"./search-D3m2bIkp.js";import"./Input-n0yDacSG.js";import"./useControlled-D9mCn6KG.js";import"./isEqual-ChaQSh95.js";import"./isObject-CzveNGjM.js";import"./Button-CN-ZsKSm.js";import"./ActionButton-ByslPckg.js";import"./Checkbox-H7yuK3U6.js";import"./useValueChanged-D9Chzcta.js";import"./CollapsiblePanel-BddaWApP.js";import"./MultiColumnSortDialog-nOGxT1KZ.js";import"./MenuTrigger-CZ5pywSw.js";import"./CompositeItem-aLBC2g8K.js";import"./ToolbarRootContext-Bq44IorR.js";import"./getDisabledMountTransitionStyles-DdBlRsOn.js";import"./getPseudoElementBounds-D9GjUDAo.js";import"./chevron-down-DFflXKhs.js";import"./index-BSoSJ7XO.js";import"./error-DWSN8l-7.js";import"./BaseCbacBanner-1et35qbL.js";import"./makeExternalStore-BhrsvHlw.js";import"./Tooltip-Bmgkzn1B.js";import"./PopoverPopup-Bxyq7tkW.js";import"./toNumber-BLNqaA0s.js";import"./tick-BHhwfOu2.js";import"./DropdownField-Cl_tjCSy.js";import"./withOsdkMetrics-D6Z_3e9u.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
