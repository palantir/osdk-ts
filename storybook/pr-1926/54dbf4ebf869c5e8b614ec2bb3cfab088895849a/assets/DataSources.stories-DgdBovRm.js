import{j as r}from"./iframe-BwOWKgX_.js";import{O as b}from"./object-table-BDiSc7pz.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CixePRd3.js";import{u as g}from"./useOsdkClient-C11OYUU2.js";import"./preload-helper-CPR62PUH.js";import"./Table-B2T1TGhc.js";import"./index-Cy1m0zFQ.js";import"./Dialog-COivJ3cu.js";import"./cross-CCQqgwU7.js";import"./svgIconContainer-BN-frImW.js";import"./useBaseUiId-CC40NyPk.js";import"./InternalBackdrop-B9JpRZ3R.js";import"./composite-5HVBLMjf.js";import"./index-QbVRyvTG.js";import"./index-Br-OMOFz.js";import"./index-BVlZlI2O.js";import"./useEventCallback-DrINjghl.js";import"./SkeletonBar-Dc2AA-f6.js";import"./LoadingCell-BO8avGLS.js";import"./ColumnConfigDialog-CNw5FP0h.js";import"./DraggableList-D9a5axqX.js";import"./search-veFLhVSL.js";import"./Input-C4nObfin.js";import"./useControlled-DtkYswSw.js";import"./Button-DB73z_31.js";import"./small-cross-BlP1jvir.js";import"./ActionButton-DkAR9cLt.js";import"./Checkbox-CKZq5Fzs.js";import"./useValueChanged-C1Mc10OI.js";import"./CollapsiblePanel-BudykPig.js";import"./MultiColumnSortDialog-C47aFgL8.js";import"./MenuTrigger-CvVag832.js";import"./CompositeItem-yrOlfAbz.js";import"./ToolbarRootContext-NPZeJvMR.js";import"./getDisabledMountTransitionStyles-B_SgiG18.js";import"./getPseudoElementBounds-Bb0h12GR.js";import"./chevron-down-C0sr0dH5.js";import"./index-M1eOB7Dy.js";import"./error-CH6xRFVZ.js";import"./BaseCbacBanner-Df1nef6R.js";import"./makeExternalStore-CfZpatI5.js";import"./Tooltip-BE9jXJb8.js";import"./PopoverPopup-BaDiWd_V.js";import"./debounce-CszU7kTQ.js";import"./tick-CkNrFL8X.js";import"./DropdownField-_qdVV4Xj.js";import"./isEqual-BAAFAqmK.js";import"./withOsdkMetrics-B3eY7UZj.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
