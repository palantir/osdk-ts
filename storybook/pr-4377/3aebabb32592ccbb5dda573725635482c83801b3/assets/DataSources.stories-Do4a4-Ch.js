import{j as r}from"./iframe-DgulMOaF.js";import{O as b}from"./object-table-BE9PrV5Q.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CTcyIhWt.js";import{u as g}from"./useOsdkClient-BO4WVOaj.js";import"./preload-helper-Dl5VLDEn.js";import"./Table-iEMVH5EZ.js";import"./index-dtvh1Mr6.js";import"./Dialog-CCiglHdn.js";import"./cross-y6EWAWli.js";import"./svgIconContainer-Ba3T_jNO.js";import"./useBaseUiId-BS6Gc1dg.js";import"./InternalBackdrop-Ly5OJmUB.js";import"./composite-Cb3XgmrA.js";import"./index-PgG1IVJP.js";import"./index-CNbeLsb0.js";import"./index-JiBe7OC4.js";import"./useEventCallback-DZy8oh12.js";import"./SkeletonBar-C8sXh3Sa.js";import"./LoadingCell-s4-j_O0M.js";import"./ColumnConfigDialog-iGQ7_TVF.js";import"./DraggableList-CNw9V9JY.js";import"./search-TtbfO7CA.js";import"./Input-CtG2S7FH.js";import"./useControlled-CvnKakZJ.js";import"./Button-DlQAkLGN.js";import"./small-cross-BGpqY9GM.js";import"./ActionButton-swW5gfvP.js";import"./Checkbox-C1sExpKl.js";import"./useValueChanged-RALpMVtl.js";import"./CollapsiblePanel-d1WdyLj1.js";import"./MultiColumnSortDialog-3gdPQP_r.js";import"./MenuTrigger-BSmaq8rG.js";import"./CompositeItem-D1z33XFc.js";import"./ToolbarRootContext-fgw45yYw.js";import"./getDisabledMountTransitionStyles-DCKwnIRA.js";import"./getPseudoElementBounds-Bs14F1Jl.js";import"./chevron-down-ClbU1eSU.js";import"./index-qbkePvxR.js";import"./error-ddwbLDxk.js";import"./BaseCbacBanner-Yjl8pPyk.js";import"./makeExternalStore-DI6My3xA.js";import"./Tooltip-BMCI_jgq.js";import"./isObject-Beq8HikT.js";import"./debounce-C6yDT9Ro.js";import"./tick-Dcu7xHQ4.js";import"./DropdownField-D_qIBFAn.js";import"./isEqual-B-zwh2La.js";import"./_baseIsEqual-CBffLuYw.js";import"./withOsdkMetrics-Baexeub2.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
