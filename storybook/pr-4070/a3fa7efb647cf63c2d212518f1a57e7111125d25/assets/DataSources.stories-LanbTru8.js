import{j as r}from"./iframe-l_8eBvr6.js";import{O as b}from"./object-table-CaxH4GVl.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cl4O0HaC.js";import{u as g}from"./useOsdkClient-k3QwwWy-.js";import"./preload-helper-CWo-haOY.js";import"./Table-DoYXsy_p.js";import"./index-pTEOeQs1.js";import"./Dialog-D5uirT7r.js";import"./cross-AIldtqcf.js";import"./svgIconContainer-BE3MMvAi.js";import"./useBaseUiId-GR3xcgzw.js";import"./InternalBackdrop-BwRQmd5J.js";import"./composite-DKO9W0st.js";import"./index-rFITWboZ.js";import"./index-CsnFWtbo.js";import"./index-BbfTT1Q9.js";import"./useEventCallback-DAeskcdy.js";import"./SkeletonBar-CDf6uP_r.js";import"./LoadingCell-Dvw-Ylel.js";import"./ColumnConfigDialog-BxJ9KUuv.js";import"./DraggableList-C2YkM-if.js";import"./search-53j1pAYR.js";import"./Input-b3HEdj9w.js";import"./useControlled-_ZKeS4Zg.js";import"./Button-D_UBsIlq.js";import"./small-cross-eWReh8kV.js";import"./ActionButton-DyHiHAz9.js";import"./Checkbox-BA2kB2zz.js";import"./useValueChanged-Dh9MsvOa.js";import"./CollapsiblePanel-YVCjpYyB.js";import"./MultiColumnSortDialog-BiDCU8at.js";import"./MenuTrigger-Doj1fSEU.js";import"./CompositeItem-DVcnG8tP.js";import"./ToolbarRootContext-D8m03rR2.js";import"./getDisabledMountTransitionStyles-Bv0Oi4hK.js";import"./getPseudoElementBounds-C0cGWyvs.js";import"./chevron-down-Dr_zm-jW.js";import"./index-CTOamDEC.js";import"./error-BjQYuyH5.js";import"./BaseCbacBanner-B6hZVpGP.js";import"./makeExternalStore-DEwbFKap.js";import"./Tooltip-CyHw9hKc.js";import"./PopoverPopup-D63UO-5k.js";import"./debounce-DGMy8DlN.js";import"./tick-BfV32k5E.js";import"./DropdownField-BsI2YIfo.js";import"./isEqual-CQ3ooCqh.js";import"./withOsdkMetrics-C36UZcw9.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
