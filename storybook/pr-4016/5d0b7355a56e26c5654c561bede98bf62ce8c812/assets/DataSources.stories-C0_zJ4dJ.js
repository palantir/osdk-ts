import{j as r}from"./iframe-8LpzfSDn.js";import{O as b}from"./object-table--A9nr_D6.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BNQdAvO5.js";import{u as g}from"./useOsdkClient-CNaHcQUk.js";import"./preload-helper-DtRM003F.js";import"./Table-CoO7Txsa.js";import"./index-BUf0-n6f.js";import"./Dialog-DOQ8osnu.js";import"./cross-CCb0fI9c.js";import"./svgIconContainer-BKZgIvjb.js";import"./useBaseUiId-4wN8rdaw.js";import"./InternalBackdrop-S-BNADSf.js";import"./composite-2A5pk4b0.js";import"./index-RVyoUJfW.js";import"./index-BjrAvEhr.js";import"./index-CCORHeEv.js";import"./useEventCallback-D7bgDq2J.js";import"./SkeletonBar-C1CeiyuW.js";import"./LoadingCell-BHuaTwQ0.js";import"./ColumnConfigDialog-DqOLvEq8.js";import"./DraggableList-C9tzjVp6.js";import"./search-zhneh-KF.js";import"./Input-Dv-by0TU.js";import"./useControlled-CoRLjGHB.js";import"./Button-BApq-zP_.js";import"./small-cross-Cd-SXCdz.js";import"./ActionButton-Bxy-NTOO.js";import"./Checkbox-D-mCQp5x.js";import"./useValueChanged-BozjWAfd.js";import"./CollapsiblePanel-DTSInNYa.js";import"./MultiColumnSortDialog-DI3n5Vct.js";import"./MenuTrigger-PruXJXos.js";import"./CompositeItem-CnGxkne-.js";import"./ToolbarRootContext-40dyuA6p.js";import"./getDisabledMountTransitionStyles-Mf_ToGG9.js";import"./getPseudoElementBounds-DU8qDaFN.js";import"./chevron-down-DsREyE6f.js";import"./index-BPBF2E68.js";import"./error-B-6NO-zU.js";import"./BaseCbacBanner-_Gsb0Wun.js";import"./makeExternalStore-DEN8pBF9.js";import"./Tooltip-hbbCevp2.js";import"./PopoverPopup-2AhTF_FP.js";import"./debounce-IDNd93md.js";import"./tick-C-vIWgEC.js";import"./DropdownField-64H1OXM1.js";import"./isEqual-B3eItCfo.js";import"./withOsdkMetrics-eiA9ax16.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
