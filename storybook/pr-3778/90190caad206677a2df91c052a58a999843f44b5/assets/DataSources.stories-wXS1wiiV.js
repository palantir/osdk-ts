import{j as r}from"./iframe-Cs0vjh1D.js";import{O as b}from"./object-table-B9QD2XwX.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BkvanAwH.js";import{u as g}from"./useOsdkClient-Bj9T7Nsv.js";import"./preload-helper-BW6fmHbo.js";import"./Table-hdthW46X.js";import"./index-BRpQkU0f.js";import"./Dialog-svDsLJqH.js";import"./cross-BbGBkiuK.js";import"./svgIconContainer-UGeX2bOE.js";import"./useBaseUiId-CBGw6rf9.js";import"./InternalBackdrop-BZL4K5sB.js";import"./composite-BA2SFYHq.js";import"./index-Bsi3aTLo.js";import"./index-DszKNb2L.js";import"./index-I2-ks3cR.js";import"./useEventCallback-BEBfKyFP.js";import"./SkeletonBar-DRoTtTh8.js";import"./LoadingCell-CgHajKqn.js";import"./ColumnConfigDialog-BiXx2RD3.js";import"./DraggableList-Clfm8Udl.js";import"./search-gUhAvHQd.js";import"./Input-DS8FrlZU.js";import"./useControlled-D0eBDm4j.js";import"./isEqual-D0NYUuEo.js";import"./isObject-Cn8y_MRd.js";import"./Button-qASnNh7s.js";import"./ActionButton-DKr4sj1v.js";import"./Checkbox-CVh5Mw2R.js";import"./useValueChanged-BgOLFuV7.js";import"./CollapsiblePanel-C6QrXgfo.js";import"./MultiColumnSortDialog-Bs8NsRCP.js";import"./MenuTrigger-koUejPxM.js";import"./CompositeItem-B2PoMDzg.js";import"./ToolbarRootContext-C8XwSccZ.js";import"./getDisabledMountTransitionStyles-pUKZhWTR.js";import"./getPseudoElementBounds-D8W5OxLB.js";import"./chevron-down-C4fu_1o3.js";import"./index-43dZyclU.js";import"./error-DNXbMYR2.js";import"./BaseCbacBanner-D_aViP9a.js";import"./makeExternalStore-vOF9t-Ek.js";import"./Tooltip-C_VkPlpK.js";import"./PopoverPopup-k_iLhgPi.js";import"./toNumber-CCht9N4r.js";import"./tick-D3XFGJ8c.js";import"./DropdownField-BC_oma1F.js";import"./withOsdkMetrics-CN8GOW3l.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
