import{j as r}from"./iframe-RR2p5XOS.js";import{O as b}from"./object-table-D8uwa7sc.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CFI_hDIf.js";import{u as g}from"./useOsdkClient-BpUTBA14.js";import"./preload-helper-BOhV1rHy.js";import"./Table-B0X7SQKG.js";import"./index-DnsNcod6.js";import"./Dialog-Cd3otJRW.js";import"./cross-CR4LSxOQ.js";import"./svgIconContainer-u0oJjKFx.js";import"./useBaseUiId-C9ZH8_C_.js";import"./InternalBackdrop-BxeUUCts.js";import"./composite-p_UpWlex.js";import"./index-HN-AhAeO.js";import"./index-DKLD7YVV.js";import"./index-DgWiLO56.js";import"./useEventCallback-DUUjHCf-.js";import"./SkeletonBar-DK4NsRE-.js";import"./LoadingCell-BwzFXe23.js";import"./ColumnConfigDialog-Dqq4KIN7.js";import"./DraggableList-CQMYobPR.js";import"./search-DcbJPUOn.js";import"./Input-e_TaAvAj.js";import"./useControlled-CigCjjeU.js";import"./Button-Fi5pU_nf.js";import"./small-cross-BtGjVAe0.js";import"./ActionButton-BmrzLlcQ.js";import"./Checkbox-mL6rgYpq.js";import"./useValueChanged-CGaBoYZG.js";import"./CollapsiblePanel-lZY_ExWV.js";import"./MultiColumnSortDialog-BldHHC_p.js";import"./MenuTrigger-CnGvgINL.js";import"./CompositeItem-suN-dd_e.js";import"./ToolbarRootContext-BDIbARai.js";import"./getDisabledMountTransitionStyles-BCr5Qv_S.js";import"./getPseudoElementBounds-uKSjW76O.js";import"./chevron-down-CB1UmGgK.js";import"./index-s6aMoLTN.js";import"./error-CMBIrR-E.js";import"./BaseCbacBanner-CwjtUuLJ.js";import"./makeExternalStore-CT6Maj4O.js";import"./Tooltip-YxXLOr_X.js";import"./PopoverPopup-DAEl5eG3.js";import"./debounce-C5ix3ZOK.js";import"./tick-CcC4crvR.js";import"./DropdownField-BhQ_noy4.js";import"./isEqual-D1FwFfsC.js";import"./withOsdkMetrics-DRbYLGlL.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
