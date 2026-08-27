import{j as r}from"./iframe-BcdGDu9j.js";import{O as b}from"./object-table-CLlobdDW.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BxT4v04a.js";import{u as g}from"./useOsdkClient-8LhuH1T7.js";import"./preload-helper-CMbSo1WN.js";import"./Table-CbY9U08a.js";import"./index-CV-Cj0Fr.js";import"./Dialog-BFu9Jvbt.js";import"./cross-HX620Mow.js";import"./svgIconContainer-dXK4wDtR.js";import"./useBaseUiId-DuyHfeNj.js";import"./InternalBackdrop-ye5hVQhH.js";import"./composite-FZbs1kn9.js";import"./index-kWczGDq0.js";import"./index-Bf3lveVK.js";import"./index-DELrWLc6.js";import"./useEventCallback-0GkWAOSy.js";import"./SkeletonBar-IaH5vXYh.js";import"./LoadingCell-B9K2QG1V.js";import"./ColumnConfigDialog-BKYdkhP1.js";import"./DraggableList-BpJWrtjR.js";import"./search-CVgCtTip.js";import"./Input-DBRGGeXT.js";import"./useControlled-DXehS_Ds.js";import"./Button-BxGbP4Tj.js";import"./small-cross-Bc-bQBjF.js";import"./ActionButton-CoM8fqA1.js";import"./Checkbox-BubTyfqD.js";import"./useValueChanged-DPTlKWjR.js";import"./CollapsiblePanel-aNff5u-g.js";import"./MultiColumnSortDialog-Bj0C4GEb.js";import"./MenuTrigger-DlV5a9JX.js";import"./CompositeItem-D98IS09u.js";import"./ToolbarRootContext-BRDqWHEt.js";import"./getDisabledMountTransitionStyles-DH1jUBNu.js";import"./getPseudoElementBounds-QT6HlcN-.js";import"./chevron-down-DIIoHKL4.js";import"./index-Cz3Lv1z4.js";import"./error-0GjEwwWq.js";import"./BaseCbacBanner-VxS8s1Ia.js";import"./makeExternalStore-DW1w7Bj0.js";import"./Tooltip-B8GoiLs-.js";import"./PopoverPopup-CSwQSVBM.js";import"./debounce-GGX-LYbn.js";import"./tick-DyYg55N-.js";import"./DropdownField-B02oWN-k.js";import"./isEqual-BdDBDq6i.js";import"./withOsdkMetrics-CesyT9oD.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
