import{j as r}from"./iframe-C-CLTpsP.js";import{O as b}from"./object-table-CIflc4pu.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-UMfcncv2.js";import{u as g}from"./useOsdkClient-ChzNHrxJ.js";import"./preload-helper-DHm86PzE.js";import"./Table-C5nW_8ni.js";import"./index-C_yrN8nJ.js";import"./Dialog-qQ2KAtWK.js";import"./cross-Ku2F5rSb.js";import"./svgIconContainer-xNOrsz7C.js";import"./useBaseUiId-CzMe2Dnq.js";import"./InternalBackdrop-CO7iGp_c.js";import"./composite-DJh0mugt.js";import"./index-D40VRMQn.js";import"./index-Cfu6rkCW.js";import"./index-D_FrlNxB.js";import"./useEventCallback-oHg7GWTB.js";import"./SkeletonBar-1j_7hiTq.js";import"./LoadingCell-BS07IboC.js";import"./ColumnConfigDialog-Be6PE_QO.js";import"./DraggableList-B4M9FN93.js";import"./search-CpRfXCb8.js";import"./Input-D24KUx_z.js";import"./useControlled-BMK5_n_x.js";import"./Button-TBXiPdkd.js";import"./small-cross-CXyJ64HZ.js";import"./ActionButton-DHfHgPik.js";import"./Checkbox-DyWv80at.js";import"./useValueChanged-CKIgQS7f.js";import"./CollapsiblePanel-BUkEhtTj.js";import"./MultiColumnSortDialog-uod5evk5.js";import"./MenuTrigger-cy43jePb.js";import"./CompositeItem-DUPoB7w7.js";import"./ToolbarRootContext-BEcPVQJt.js";import"./getDisabledMountTransitionStyles-D9D7SyXr.js";import"./getPseudoElementBounds-CwZa5orc.js";import"./chevron-down-Cj7uY9HA.js";import"./index-D7xNirGy.js";import"./error-B9ihfIkN.js";import"./BaseCbacBanner-BPN3wtD_.js";import"./makeExternalStore-DOqfc4A2.js";import"./Tooltip-Uw4j1Mbj.js";import"./PopoverPopup-DLPr24Ac.js";import"./debounce-DnqzDTdJ.js";import"./tick-UvYb-w0t.js";import"./DropdownField-BvX-rLeM.js";import"./isEqual-CicJFhR1.js";import"./withOsdkMetrics-ChVqngv_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
