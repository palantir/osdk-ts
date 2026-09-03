import{j as r}from"./iframe-BjnXfZ9H.js";import{O as b}from"./object-table-DNJIjvBp.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BglenNtL.js";import{u as g}from"./useOsdkClient-ByYF3VD2.js";import"./preload-helper-bepxIrLy.js";import"./Table-ybsmukH_.js";import"./index-BelFyW9j.js";import"./Dialog-BOJM-McT.js";import"./cross-Ca4hBGJI.js";import"./svgIconContainer-CwvuHzUD.js";import"./useBaseUiId--nXvl9pb.js";import"./InternalBackdrop-BLN5UK4x.js";import"./composite-CmHNarO8.js";import"./index-B42gKKnv.js";import"./index-BA9yDYNK.js";import"./index-DuJvB77H.js";import"./useEventCallback-BKqRKbmG.js";import"./SkeletonBar-DfILH45u.js";import"./LoadingCell-yFIpndmd.js";import"./ColumnConfigDialog-zq4SufD-.js";import"./DraggableList-BkF6LG2L.js";import"./search-4U4uPWIz.js";import"./Input-DOBVQBLE.js";import"./useControlled-30IDLW3T.js";import"./Button-87n6zTQD.js";import"./small-cross-D7Hbyjsr.js";import"./ActionButton-CQYbxlLb.js";import"./Checkbox-TZ3IuKyF.js";import"./useValueChanged-A_lNNdYi.js";import"./CollapsiblePanel-CS2mE_oJ.js";import"./MultiColumnSortDialog-CcC31-_u.js";import"./MenuTrigger-Bq4Sdh9Z.js";import"./CompositeItem-DVl86_s7.js";import"./ToolbarRootContext-Dapwrg0X.js";import"./getDisabledMountTransitionStyles-DPwXStNv.js";import"./getPseudoElementBounds-CpUcIsOX.js";import"./chevron-down-C_lHJsgk.js";import"./index-C3tw8knN.js";import"./error-B6h0Ljte.js";import"./BaseCbacBanner-L6j0Cbsw.js";import"./makeExternalStore-C1Xa5Pr9.js";import"./Tooltip-C16yb5G_.js";import"./PopoverPopup-C-RgfkQV.js";import"./debounce-BbeoZOOC.js";import"./tick-_NQRZlmZ.js";import"./DropdownField-CDdmQF3S.js";import"./isEqual-BQ4IEcpg.js";import"./withOsdkMetrics-9hdMnSaG.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
