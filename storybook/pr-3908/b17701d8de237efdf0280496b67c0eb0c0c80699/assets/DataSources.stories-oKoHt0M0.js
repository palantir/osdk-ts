import{j as r}from"./iframe-BD-LWr1p.js";import{O as b}from"./object-table-CJFF8n9s.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D-efkc52.js";import{u as g}from"./useOsdkClient-CN3BmlPj.js";import"./preload-helper-dmgTD7Sy.js";import"./Table-DptuV1pu.js";import"./index-C4WNdzjX.js";import"./Dialog-BAiinTZl.js";import"./cross-ek8KuXfH.js";import"./svgIconContainer-CIg5fwF3.js";import"./useBaseUiId-wrsAqB_t.js";import"./InternalBackdrop-ajo3Ljj6.js";import"./composite-BuDBmEPr.js";import"./index-YTdZ8qtU.js";import"./index-DrMY-03p.js";import"./index-AdOgxmTZ.js";import"./useEventCallback-PxF8Exlt.js";import"./SkeletonBar-B5Pg2PMT.js";import"./LoadingCell-9De3Hx9v.js";import"./ColumnConfigDialog-D9RYQvmN.js";import"./DraggableList-54NtNGRb.js";import"./search-Cesj0Sn1.js";import"./Input-H0p-Kdle.js";import"./useControlled-S-BenCcy.js";import"./Button-DYW0znBH.js";import"./small-cross-BGYlQIQ0.js";import"./ActionButton-CGAk7BMh.js";import"./Checkbox-DXkgkmDI.js";import"./useValueChanged-DhWzb1ZN.js";import"./CollapsiblePanel-D1v8TPV_.js";import"./MultiColumnSortDialog-CTz5B5Bi.js";import"./MenuTrigger-Dre0mHpq.js";import"./CompositeItem-BT4SOs7q.js";import"./ToolbarRootContext-W9Cyg5bT.js";import"./getDisabledMountTransitionStyles-DfzQBBqR.js";import"./getPseudoElementBounds-CWc-7ein.js";import"./chevron-down-DZyBBtLC.js";import"./index-qpSIk4b9.js";import"./error-CGXE3NEO.js";import"./BaseCbacBanner-ZvEz-m-p.js";import"./makeExternalStore-BglmpTlj.js";import"./Tooltip-FW4vRfEH.js";import"./PopoverPopup-BnuLOZmM.js";import"./debounce-BACFrRsD.js";import"./tick-CxY1HILU.js";import"./DropdownField-CtG7SSoj.js";import"./isEqual-BpoUtECJ.js";import"./withOsdkMetrics-CbPUGjlt.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
