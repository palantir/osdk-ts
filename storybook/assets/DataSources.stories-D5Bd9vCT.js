import{j as r}from"./iframe-ZKDPnRYv.js";import{O as b}from"./object-table-CnDM1U0V.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ZVAW8PKI.js";import{u as g}from"./useOsdkClient-B1FD65_T.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-3jPWWjAw.js";import"./index-DNWYE-f1.js";import"./Dialog-BghOWFAy.js";import"./cross-f6oJQcWu.js";import"./svgIconContainer-DrDKA2Lc.js";import"./useBaseUiId-Ce1gy8Rx.js";import"./InternalBackdrop-Bk7MtY68.js";import"./composite-BmiDYLqb.js";import"./index-CBLMz6-B.js";import"./index-Cb1Rmdlc.js";import"./index-BBP5lmMx.js";import"./useEventCallback-Caii2npr.js";import"./SkeletonBar-Df3vB-p_.js";import"./LoadingCell-BGMW0NlQ.js";import"./ColumnConfigDialog-BKZ3sAGQ.js";import"./DraggableList-BGJGtglx.js";import"./search-BicHh123.js";import"./Input-BVhJywkb.js";import"./useControlled-F5SgWL0g.js";import"./Button-BJSgrwjd.js";import"./small-cross-CLB6s8ng.js";import"./ActionButton-ClL1Aria.js";import"./Checkbox-D5ir3gbv.js";import"./useValueChanged-BSi0Bf_-.js";import"./CollapsiblePanel-G2MoBTxk.js";import"./MultiColumnSortDialog-C-4tvmha.js";import"./MenuTrigger-BIsb4_2t.js";import"./CompositeItem-C1cGzStq.js";import"./ToolbarRootContext-4_ztJASm.js";import"./getDisabledMountTransitionStyles-Bt3-436K.js";import"./getPseudoElementBounds-Bhyrjl8_.js";import"./chevron-down-DWL-RGCQ.js";import"./index-CW4IzwL-.js";import"./error-FVA4fmQK.js";import"./BaseCbacBanner-DnsdBiWC.js";import"./makeExternalStore-CRRSMSB3.js";import"./Tooltip-C6ZYQEwS.js";import"./PopoverPopup-B0pYxYci.js";import"./debounce-C4lP9Ak6.js";import"./tick-CJIFmP2c.js";import"./DropdownField-8SVn-ItU.js";import"./isEqual-CzNo4Xxw.js";import"./withOsdkMetrics-tBsYI7eh.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
