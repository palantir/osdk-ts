import{j as r}from"./iframe-CrBTuD2p.js";import{O as b}from"./object-table-BDOsjl3H.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BR97S7xU.js";import{u as g}from"./useOsdkClient-26AsuYNX.js";import"./preload-helper-BjNyA4Tc.js";import"./Table-DfU-WPNC.js";import"./index-CFzUVYi2.js";import"./Dialog-38LaSVwr.js";import"./cross-BBINy6sP.js";import"./svgIconContainer-DW2driag.js";import"./useBaseUiId-BBTk7qb4.js";import"./InternalBackdrop-LpC4w9ZO.js";import"./composite-BeVo3QMW.js";import"./index-BqULJUvL.js";import"./index-Bnr4tUfA.js";import"./index-9tkhxWIX.js";import"./useEventCallback-BD2d3Tx5.js";import"./SkeletonBar-TDIAZEL9.js";import"./LoadingCell-Dir1o8pZ.js";import"./ColumnConfigDialog-bxqWbjfW.js";import"./DraggableList-CqZXz4K3.js";import"./search-BDp0U2-N.js";import"./Input-7YuL0Mnz.js";import"./useControlled-D0EXlvvG.js";import"./Button-6cIUTGc1.js";import"./small-cross-5byDOqd6.js";import"./ActionButton-p2_uRokn.js";import"./Checkbox-X3n0Oiil.js";import"./useValueChanged-DxaEZlR0.js";import"./CollapsiblePanel-CWFpKLhQ.js";import"./MultiColumnSortDialog-C8s-Ldtr.js";import"./MenuTrigger-BkWLeJuv.js";import"./CompositeItem-BE6iDbTy.js";import"./ToolbarRootContext-BXCYOJCq.js";import"./getDisabledMountTransitionStyles-mgoiWsTQ.js";import"./getPseudoElementBounds-C9gmy0te.js";import"./chevron-down-BqX1E0HN.js";import"./index-CEtkH-ta.js";import"./error-D-C4TtvX.js";import"./BaseCbacBanner-BEXvhDBn.js";import"./makeExternalStore-Dq8QV5--.js";import"./Tooltip-BgSVMYpF.js";import"./PopoverPopup-Bg_xMHlt.js";import"./debounce-B2lGFotZ.js";import"./tick-BM2LaoTy.js";import"./DropdownField-Qm8Rb_9y.js";import"./isEqual-Be5mRTEV.js";import"./withOsdkMetrics-BvGvy0SD.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
