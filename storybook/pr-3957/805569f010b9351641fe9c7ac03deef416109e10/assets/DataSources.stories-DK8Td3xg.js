import{j as r}from"./iframe-d67fO8Hy.js";import{O as b}from"./object-table-DnPtetQ7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-f5juvYF7.js";import{u as g}from"./useOsdkClient-CNDbHwB1.js";import"./preload-helper-Bkr4_qkS.js";import"./Table-MM65L2ys.js";import"./index-B3ATbghx.js";import"./Dialog-C8PKiJtJ.js";import"./cross-Dhsy2lb8.js";import"./svgIconContainer-0_l9M1TV.js";import"./useBaseUiId-DAPMmE-k.js";import"./InternalBackdrop-CPOwNltk.js";import"./composite-DgQW3RrN.js";import"./index-Bfq5tsOh.js";import"./index-BQ0UWAWF.js";import"./index-C3nueWd-.js";import"./useEventCallback-XRj4vjhQ.js";import"./SkeletonBar-C10GPXTz.js";import"./LoadingCell-Bsb88Deq.js";import"./ColumnConfigDialog-EzM-G72-.js";import"./DraggableList-CcWjbOHp.js";import"./search-BJPSjSS2.js";import"./Input-BDVfl7Fm.js";import"./useControlled-DVSkDfdi.js";import"./Button-Ba0LvAgG.js";import"./small-cross-DpVo6Bt2.js";import"./ActionButton-BjsV-hhr.js";import"./Checkbox-C9q9LeYF.js";import"./useValueChanged-BPOaH2ai.js";import"./CollapsiblePanel-BsQekoIK.js";import"./MultiColumnSortDialog-BpLwH_BZ.js";import"./MenuTrigger-BI85z42j.js";import"./CompositeItem-BlzOTS1w.js";import"./ToolbarRootContext-BIYj41-H.js";import"./getDisabledMountTransitionStyles-BIByIGzl.js";import"./getPseudoElementBounds-Dn_EWDZB.js";import"./chevron-down-CUnzJf2x.js";import"./index-CVtzuMh1.js";import"./error-hkUFZDRv.js";import"./BaseCbacBanner-BCU-zUsd.js";import"./makeExternalStore-CYpUKzCL.js";import"./Tooltip-g-pWm_fU.js";import"./PopoverPopup-DWeFjGRm.js";import"./debounce-CsC9LC5J.js";import"./tick-DPR1XWRH.js";import"./DropdownField-B96kR7Sr.js";import"./isEqual-DX_c9-yy.js";import"./withOsdkMetrics-CmzDVisr.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
