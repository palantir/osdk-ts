import{j as r}from"./iframe-Dl_BVvAW.js";import{O as b}from"./object-table-BDyuzjHe.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BGe9qQwZ.js";import{u as g}from"./useOsdkClient-DMf9xJpa.js";import"./preload-helper-CoCSiyLk.js";import"./Table-Cg6d06Ds.js";import"./index-BCGo89vi.js";import"./Dialog-DoT1m57-.js";import"./cross-Bz7-buWb.js";import"./svgIconContainer-DBQRMjom.js";import"./useBaseUiId-C3O-rg1C.js";import"./InternalBackdrop-CzP1TDn8.js";import"./composite-4Jq0kXzk.js";import"./index-DjDfcFev.js";import"./index-DbV-fkKm.js";import"./index-mlQ_3NiE.js";import"./useEventCallback-BIPIgLC4.js";import"./SkeletonBar-CkZhiozq.js";import"./LoadingCell-CtF7-axq.js";import"./ColumnConfigDialog-DmTwLoDJ.js";import"./DraggableList-eYI9b4yQ.js";import"./search-DcMarGsx.js";import"./Input-B7ojI8Bn.js";import"./useControlled-Dp4z1YLv.js";import"./Button-6LB6U_zx.js";import"./small-cross-ylm6BbvG.js";import"./ActionButton-YXW6TfiH.js";import"./Checkbox-Bq3GWGsZ.js";import"./useValueChanged-BEGJF59V.js";import"./CollapsiblePanel-DzeHzdVK.js";import"./MultiColumnSortDialog-C1yu8aIu.js";import"./MenuTrigger-UmSIhiTA.js";import"./CompositeItem-CxQ8ZZ6u.js";import"./ToolbarRootContext-CvPGHntn.js";import"./getDisabledMountTransitionStyles-Cza0XV9J.js";import"./getPseudoElementBounds-CjBI2crg.js";import"./chevron-down-BnUWx6eY.js";import"./index-C3M7Abp4.js";import"./error-iTPjK_eI.js";import"./BaseCbacBanner-Db-QnP4F.js";import"./makeExternalStore-BEEUYNQZ.js";import"./Tooltip-C_bDdnEa.js";import"./PopoverPopup-BI4UjKoA.js";import"./debounce-DTEEbj35.js";import"./tick-hY0SSYQk.js";import"./DropdownField-bRExs2os.js";import"./isEqual-BJK4xPpC.js";import"./withOsdkMetrics-auuyIGEA.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
