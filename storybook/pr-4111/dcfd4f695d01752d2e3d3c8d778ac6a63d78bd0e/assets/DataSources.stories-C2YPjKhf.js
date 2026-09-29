import{j as r}from"./iframe-BkR_0Whf.js";import{O as b}from"./object-table-BiV8DsTh.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DDN2G9yh.js";import{u as g}from"./useOsdkClient-pLSvuV2v.js";import"./preload-helper-BZj2lHf4.js";import"./Table-DWdPcWcs.js";import"./index-ZGE4mIMl.js";import"./Dialog-CHqpvbLH.js";import"./cross-Cj_dISDs.js";import"./svgIconContainer-Cq5Gigac.js";import"./useBaseUiId-D0GFLUCc.js";import"./InternalBackdrop-D0JetBQu.js";import"./composite-DK0lUWCR.js";import"./index-BHvnJTnu.js";import"./index-BYjUCuHE.js";import"./index-CxCc5iXi.js";import"./useEventCallback-Cdxw0ly7.js";import"./SkeletonBar-9syakgvG.js";import"./LoadingCell-CprQtNoH.js";import"./ColumnConfigDialog-C6twjef-.js";import"./DraggableList-FbSRwKFW.js";import"./search-BYwC6oDp.js";import"./Input-iGBf8GKC.js";import"./useControlled-qGG-lubz.js";import"./Button-9bj61-xy.js";import"./small-cross-eQubl5AS.js";import"./ActionButton-Cq36Fl98.js";import"./Checkbox-C2MnQ6N0.js";import"./useValueChanged-Tgi1bGwX.js";import"./CollapsiblePanel-DKzvo46z.js";import"./MultiColumnSortDialog-ApIxEZyx.js";import"./MenuTrigger-CVkzJIND.js";import"./CompositeItem-DJJJBa43.js";import"./ToolbarRootContext-B0bmzvoG.js";import"./getDisabledMountTransitionStyles-BmZHkwg0.js";import"./getPseudoElementBounds-DddSmM7X.js";import"./chevron-down-D-JVojHo.js";import"./index-BWbnaTYz.js";import"./error-CceWhdeD.js";import"./BaseCbacBanner-BvjqhU3p.js";import"./makeExternalStore-32xgHA4-.js";import"./Tooltip-W6-jI_uz.js";import"./PopoverPopup-BFEoSKAS.js";import"./debounce-DonsOBxM.js";import"./tick-u2RvG_GJ.js";import"./DropdownField-CX_iuiat.js";import"./isEqual-LemhL52S.js";import"./withOsdkMetrics-Ejahsq4F.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
