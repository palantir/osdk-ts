import{j as r}from"./iframe-CvIhuXi9.js";import{O as b}from"./object-table-SThaR-xf.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BsAl_Htd.js";import{u as g}from"./useOsdkClient-Cn15GE-w.js";import"./preload-helper-ngrsZYi_.js";import"./Table-DqwHSnX7.js";import"./index-BWTVCJU3.js";import"./Dialog-oy8WyC4u.js";import"./cross-B5_Z7JKl.js";import"./svgIconContainer-CGfWhKh9.js";import"./useBaseUiId-DCKRG5Ce.js";import"./InternalBackdrop-CKKtHveH.js";import"./composite-CHb5-0xp.js";import"./index-00-WrU0n.js";import"./index-BBNVMWE6.js";import"./index-DxI2ZkoH.js";import"./useEventCallback-B9O9xLj2.js";import"./SkeletonBar-Dy3mLPU8.js";import"./LoadingCell-jcJC2Lrs.js";import"./ColumnConfigDialog-Cp0PlOtE.js";import"./DraggableList-C5fL1CCi.js";import"./search-CQcV4AtZ.js";import"./Input-OiIQcnvy.js";import"./useControlled-ChdRNV66.js";import"./Button-C6xashMw.js";import"./small-cross-qe6--zI-.js";import"./ActionButton-peYw1N6y.js";import"./Checkbox-CH6dtBYl.js";import"./useValueChanged-Dni45tCH.js";import"./CollapsiblePanel-e1vtouBN.js";import"./MultiColumnSortDialog-CCZLTeEY.js";import"./MenuTrigger-D-4sw_gb.js";import"./CompositeItem-gjyxrrR_.js";import"./ToolbarRootContext-ekWaHIpi.js";import"./getDisabledMountTransitionStyles-CZZecfwa.js";import"./getPseudoElementBounds-C0bxkF24.js";import"./chevron-down-Dj__g3dO.js";import"./index-MB-mmNCq.js";import"./error-CtnHAJul.js";import"./BaseCbacBanner-C-Gfu7nC.js";import"./makeExternalStore-vUi9AgyS.js";import"./Tooltip-BFAg5wCX.js";import"./PopoverPopup-DrlPZtKw.js";import"./debounce-BYyNOPxz.js";import"./tick-KWgeVH1V.js";import"./DropdownField-D6HVs40m.js";import"./isEqual-BJ-hxf23.js";import"./withOsdkMetrics-BC7K3rr_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
