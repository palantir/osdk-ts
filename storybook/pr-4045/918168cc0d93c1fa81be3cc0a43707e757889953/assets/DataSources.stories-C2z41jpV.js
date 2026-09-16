import{j as r}from"./iframe-BAp-mBFg.js";import{O as b}from"./object-table-BwMsZml0.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DFNji4Mm.js";import{u as g}from"./useOsdkClient-CWsVjcHT.js";import"./preload-helper-DMA-8k7h.js";import"./Table-D-OYfOQU.js";import"./index-BL8Ey2sj.js";import"./Dialog-DgJAG6u4.js";import"./cross-YEQVvPJ0.js";import"./svgIconContainer-CBRcPR9-.js";import"./useBaseUiId-CLc976mR.js";import"./InternalBackdrop-BMvkPGPo.js";import"./composite-ziK8MZ0d.js";import"./index-bbZZKUgK.js";import"./index-CZnpWueQ.js";import"./index-r6qGL197.js";import"./useEventCallback-DsNDBn2R.js";import"./SkeletonBar-CE7RHls9.js";import"./LoadingCell-FXeHl9Cp.js";import"./ColumnConfigDialog-CV59x_CT.js";import"./DraggableList-CsxMBOz_.js";import"./search-CXHMKnff.js";import"./Input-CAD3JQQ8.js";import"./useControlled-DqAef5Et.js";import"./Button-jiVV_CtX.js";import"./small-cross-DtUlhkvJ.js";import"./ActionButton-CwoDW7qs.js";import"./Checkbox-Dh8EGbK5.js";import"./useValueChanged-Bu3JV_v0.js";import"./CollapsiblePanel-DsuV6JMN.js";import"./MultiColumnSortDialog-CdOmge7j.js";import"./MenuTrigger-NtnRBXis.js";import"./CompositeItem-DuZe3uzk.js";import"./ToolbarRootContext-Ul6dl8O6.js";import"./getDisabledMountTransitionStyles-F5l8rP_A.js";import"./getPseudoElementBounds-rnzBkK8G.js";import"./chevron-down-DRRMSp6v.js";import"./index-BPbKBD04.js";import"./error-WBAOjD-R.js";import"./BaseCbacBanner-7Xyx8yME.js";import"./makeExternalStore-Ct8XmniK.js";import"./Tooltip-CKf84lvP.js";import"./PopoverPopup-BjqCWmO1.js";import"./debounce-Cb4zQ-Dj.js";import"./tick-DsIbBRWu.js";import"./DropdownField-ClNc4bFA.js";import"./isEqual-BrCdU8a1.js";import"./withOsdkMetrics-BuxsjMHL.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
