import{j as r}from"./iframe-Chm34oVN.js";import{O as b}from"./object-table-DLH-IlCC.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CTaTgjp6.js";import{u as g}from"./useOsdkClient-W7CUWIOG.js";import"./preload-helper-BOK6Dzo-.js";import"./Table-Z_YlzvhM.js";import"./index-CypedJkd.js";import"./Dialog-B2wjSRNU.js";import"./cross-DoHdapX8.js";import"./svgIconContainer-DC37vkSl.js";import"./useBaseUiId-BfNds6QM.js";import"./InternalBackdrop-Cm6PR78x.js";import"./composite-7460sgXR.js";import"./index-COQyuwtf.js";import"./index-CUU4KiqC.js";import"./index-B57JJe68.js";import"./useEventCallback-CMTqZ7U-.js";import"./SkeletonBar-CU8fYuS7.js";import"./LoadingCell-BO3KKJp9.js";import"./ColumnConfigDialog-dEtYIgcd.js";import"./DraggableList-CzcIVFL1.js";import"./search-BHYw-t4y.js";import"./Input-DZjL7Pin.js";import"./useControlled-ZXPTCd_T.js";import"./Button-CtcVqQNq.js";import"./small-cross-ByxAk5Ey.js";import"./ActionButton-BnvQSX1L.js";import"./Checkbox-CwbP-fJg.js";import"./useValueChanged-UjzGqVwC.js";import"./CollapsiblePanel-DQDBFvxE.js";import"./MultiColumnSortDialog-DOycdkre.js";import"./MenuTrigger-CoVY6-8A.js";import"./CompositeItem-DnyMtLMv.js";import"./ToolbarRootContext-OjMSVEL3.js";import"./getDisabledMountTransitionStyles-CIU0Hz6V.js";import"./getPseudoElementBounds-CiNXNTFC.js";import"./chevron-down-zW3En9pY.js";import"./index-DxO1uITv.js";import"./error-B18D31eI.js";import"./BaseCbacBanner-CLHS5zkZ.js";import"./makeExternalStore-B83DbUt5.js";import"./Tooltip-DDNENBtX.js";import"./PopoverPopup-CItQzQdy.js";import"./debounce-CFIeXkJ1.js";import"./tick-Cfjw9luN.js";import"./DropdownField-DB-krMlw.js";import"./isEqual-hrbqThCV.js";import"./withOsdkMetrics-866m-zhW.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
