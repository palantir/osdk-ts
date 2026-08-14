import{j as r}from"./iframe-CJPoXIdZ.js";import{O as b}from"./object-table-BHkoWQFR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-lCEtHPbC.js";import{u as g}from"./useOsdkClient-D0mJbrjB.js";import"./preload-helper-DGk6rLQG.js";import"./Table-D-7b-7oi.js";import"./index-CXK_NZ43.js";import"./Dialog-BlWwmQIa.js";import"./cross-Dq-QBGPd.js";import"./svgIconContainer-B3Dfwo1Q.js";import"./useBaseUiId-D6aoT1Vn.js";import"./InternalBackdrop-BEqTQV7z.js";import"./composite-Brnc4VBJ.js";import"./index-Dy201pDm.js";import"./index-PUf2omP-.js";import"./index-BmxZeQc3.js";import"./useEventCallback-BeTsBj0A.js";import"./SkeletonBar-DaBxIru1.js";import"./LoadingCell-BZAzRsui.js";import"./ColumnConfigDialog-CZhYh1U6.js";import"./DraggableList-C7EkDEXn.js";import"./search-N923D2wf.js";import"./Input-CSVKB_cm.js";import"./useControlled-DXtgIEAm.js";import"./Button-CQw5BJQp.js";import"./small-cross-C_XsSYtI.js";import"./ActionButton-BIRmJltO.js";import"./Checkbox-BRCSdLNp.js";import"./useValueChanged-Dg50Qt5M.js";import"./CollapsiblePanel-B5wOJsY7.js";import"./MultiColumnSortDialog-DvA6eEFL.js";import"./MenuTrigger-BrjKygne.js";import"./CompositeItem-U-yEQuGu.js";import"./ToolbarRootContext-BqWwwnkb.js";import"./getDisabledMountTransitionStyles-DWZKj-84.js";import"./getPseudoElementBounds-Cs9DzhU4.js";import"./chevron-down-DWXqDmWL.js";import"./index-DxnFXTkq.js";import"./error-D4yXIjcx.js";import"./BaseCbacBanner-B3ISw_rb.js";import"./makeExternalStore-N7Z3gQ47.js";import"./Tooltip-Qms5IOYu.js";import"./PopoverPopup-B3C33Lia.js";import"./debounce-BMm6nppJ.js";import"./tick-Hovf-t6n.js";import"./DropdownField-BjRk_o0m.js";import"./isEqual-Moo6eESv.js";import"./withOsdkMetrics-B97C_82M.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
