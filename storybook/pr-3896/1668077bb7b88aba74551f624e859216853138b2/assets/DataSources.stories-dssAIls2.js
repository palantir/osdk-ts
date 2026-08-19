import{j as r}from"./iframe-GgX3iuQS.js";import{O as b}from"./object-table-BCgwsQuJ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DQpP1roP.js";import{u as g}from"./useOsdkClient-DzwfnAlk.js";import"./preload-helper-DopDlguM.js";import"./Table-qQ6IkZzA.js";import"./index-2cEc6EpX.js";import"./Dialog-D6t24oV_.js";import"./cross-_o4FWU3M.js";import"./svgIconContainer-DqfRg1i7.js";import"./useBaseUiId-RBpeDYi5.js";import"./InternalBackdrop-BfvvVy03.js";import"./composite-DTJ2CAOA.js";import"./index-CqrWKdwO.js";import"./index-BFiXO6wc.js";import"./index-B6c9dS4m.js";import"./useEventCallback-JA9CtIGH.js";import"./SkeletonBar-DIwIX8Wd.js";import"./LoadingCell-BXZtLt9z.js";import"./ColumnConfigDialog-DI6GpbHs.js";import"./DraggableList-CQtVxoSy.js";import"./search-DiWIaVzY.js";import"./Input-CVnvfPvb.js";import"./useControlled-CcoQ1fix.js";import"./Button-QgQBUZaq.js";import"./small-cross-BbNCGVEJ.js";import"./ActionButton-C4p7Hgw-.js";import"./Checkbox-DQZUq8am.js";import"./useValueChanged-DAQKJS5p.js";import"./CollapsiblePanel-BlAOkLEb.js";import"./MultiColumnSortDialog-ZPWzJcZx.js";import"./MenuTrigger-sgCV-ErZ.js";import"./CompositeItem-CaeojGGt.js";import"./ToolbarRootContext-BWdhq6Lq.js";import"./getDisabledMountTransitionStyles-6p_UzfDx.js";import"./getPseudoElementBounds-Bwsxs8-C.js";import"./chevron-down-BhZlmI0F.js";import"./index-nxvIp1-k.js";import"./error-DEuyLPP2.js";import"./BaseCbacBanner-TU4zaPAq.js";import"./makeExternalStore-DX9YQrWu.js";import"./Tooltip-bTH8sLKK.js";import"./PopoverPopup-BGdXC6LF.js";import"./debounce-CWF4YRYe.js";import"./tick-D8vs_8Jl.js";import"./DropdownField-BmZNq9zA.js";import"./isEqual-Z_mCcB6L.js";import"./withOsdkMetrics-BW_V9voC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
