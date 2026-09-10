import{j as r}from"./iframe-B9pmQzab.js";import{O as b}from"./object-table-DIS3LJrH.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CCte8kHW.js";import{u as g}from"./useOsdkClient-DbItwRGL.js";import"./preload-helper-8ApCze4z.js";import"./Table-9aII9MtG.js";import"./index-DJNcHwm8.js";import"./Dialog-Dhzuo-IK.js";import"./cross-8efItR-s.js";import"./svgIconContainer-CO7Z6-JZ.js";import"./useBaseUiId-CeFMmA-9.js";import"./InternalBackdrop-fe3G5tCE.js";import"./composite-C0QPd-_Y.js";import"./index-D1sJuveY.js";import"./index-C-ZM_VQS.js";import"./index-k2Kxocqf.js";import"./useEventCallback-Bzn1utS3.js";import"./SkeletonBar-rBovvZK_.js";import"./LoadingCell-BEdESDPv.js";import"./ColumnConfigDialog-DgmR5P5Z.js";import"./DraggableList-BjUMaye3.js";import"./search-DgrCLXVb.js";import"./Input-DpZPwerh.js";import"./useControlled-BWGqCRkH.js";import"./Button-Bv8-UnbE.js";import"./small-cross-CUlfqa1g.js";import"./ActionButton-BO9z-bgj.js";import"./Checkbox-BxlirDMV.js";import"./useValueChanged-Ed0oXYeG.js";import"./CollapsiblePanel-C6vhybKT.js";import"./MultiColumnSortDialog-fPXk4AO5.js";import"./MenuTrigger-C2qx_8CR.js";import"./CompositeItem-CxryFH5r.js";import"./ToolbarRootContext-ByReu0dc.js";import"./getDisabledMountTransitionStyles-GXQzPAtX.js";import"./getPseudoElementBounds-D3T2cPr4.js";import"./chevron-down-CZhOdlZa.js";import"./index-C31EnYzg.js";import"./error-RG5ruaVA.js";import"./BaseCbacBanner-B-KBfOAr.js";import"./makeExternalStore-BiGH-jDa.js";import"./Tooltip-K8ZFMTxf.js";import"./PopoverPopup-ISDHMIyJ.js";import"./debounce-IZroTv95.js";import"./tick-CElM4Hds.js";import"./DropdownField-BCe2-iEP.js";import"./isEqual-B8Ml-uEA.js";import"./withOsdkMetrics-6gbwRZ-B.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
