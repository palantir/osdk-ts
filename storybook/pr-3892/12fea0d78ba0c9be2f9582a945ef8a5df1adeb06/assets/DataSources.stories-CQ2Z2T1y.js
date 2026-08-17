import{j as r}from"./iframe-B6vHMBGp.js";import{O as b}from"./object-table-hplHVgdX.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Ca3goo8N.js";import{u as g}from"./useOsdkClient-BpgI32Ud.js";import"./preload-helper-Cp58PBL8.js";import"./Table-Cbkm2869.js";import"./index-CJzsmVv3.js";import"./Dialog-DO1kXGDu.js";import"./cross-9x5JmZ4A.js";import"./svgIconContainer-wg0Lc9CR.js";import"./useBaseUiId-h3pAp7nr.js";import"./InternalBackdrop-CCFcfiJW.js";import"./composite-DWtkffoP.js";import"./index-CujXwWwq.js";import"./index-i--ASWRG.js";import"./index-CT_nyNsS.js";import"./useEventCallback-B4FnW4FK.js";import"./SkeletonBar-D9zmYxM0.js";import"./LoadingCell-BrDuqTHC.js";import"./ColumnConfigDialog-CTMC6TNx.js";import"./DraggableList-B-bZaqE6.js";import"./search-DfKXJtDr.js";import"./Input-B7KllzPA.js";import"./useControlled-BVsysqHb.js";import"./Button-DGAYYgZ-.js";import"./small-cross-cIP7Vben.js";import"./ActionButton-C1eM3Km_.js";import"./Checkbox-wr-Xfc3W.js";import"./useValueChanged-BjmzSrQM.js";import"./CollapsiblePanel-DyJhoXcY.js";import"./MultiColumnSortDialog-Cx1QNkZS.js";import"./MenuTrigger-D1Xe-7_v.js";import"./CompositeItem-DDQHWJ0b.js";import"./ToolbarRootContext-7AQ420yY.js";import"./getDisabledMountTransitionStyles-sssYHGVb.js";import"./getPseudoElementBounds-Dsjz6vCL.js";import"./chevron-down-6pFsTB_r.js";import"./index-CzbMhBIL.js";import"./error-BqGkptHP.js";import"./BaseCbacBanner-Cc4gB5EG.js";import"./makeExternalStore-Blbdey5m.js";import"./Tooltip-tywS1TT8.js";import"./PopoverPopup-TsRJnCd_.js";import"./debounce-DW_YRCCu.js";import"./tick-CoPn3U77.js";import"./DropdownField-DpvuVLRh.js";import"./isEqual-BwEsvaE9.js";import"./withOsdkMetrics-CL6kHg8G.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
