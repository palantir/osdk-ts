import{j as r}from"./iframe-Cfzzxn_n.js";import{O as b}from"./object-table-pEqPj5J4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CtxMBSbg.js";import{u as g}from"./useOsdkClient-Ba_ITXqU.js";import"./preload-helper-Dg7pGUOS.js";import"./Table-D5T8uZzE.js";import"./index-CMN6-XKQ.js";import"./Dialog-DDMFP6hk.js";import"./cross-DQq_Xwh6.js";import"./svgIconContainer-BI8ujPzn.js";import"./useBaseUiId-jVad5k1_.js";import"./InternalBackdrop-DAR7W5Wj.js";import"./composite-CLlDBj0Z.js";import"./index-CBbyaHPU.js";import"./index-CPjSGEwp.js";import"./index-Cg0AkbTX.js";import"./useEventCallback-B7JsYCH4.js";import"./SkeletonBar-jkEtksym.js";import"./LoadingCell-B3AsKuLF.js";import"./ColumnConfigDialog-C9DfDGwe.js";import"./DraggableList-Dztt1KCX.js";import"./search-Dkia1gOi.js";import"./Input-CnQ0L5k0.js";import"./useControlled-CNmeQlt3.js";import"./Button-BI-1kn4u.js";import"./small-cross-DyTVyiiv.js";import"./ActionButton-AnBXq9dB.js";import"./Checkbox-CeKAFdf6.js";import"./useValueChanged-BMGXXoQd.js";import"./CollapsiblePanel-Cu4Eaeg8.js";import"./MultiColumnSortDialog-AlYAe39k.js";import"./MenuTrigger-CH7Ey5R9.js";import"./CompositeItem-CcHRWvUR.js";import"./ToolbarRootContext-D5srvXY8.js";import"./getDisabledMountTransitionStyles-Hk1XRehz.js";import"./getPseudoElementBounds-DUI2YNlh.js";import"./chevron-down-DEBizV0j.js";import"./index-BNc2t-yb.js";import"./error-Bx2UJ-jk.js";import"./BaseCbacBanner-BkPHcLSS.js";import"./makeExternalStore-D0DZxHLg.js";import"./Tooltip-D6tPQUhI.js";import"./PopoverPopup-DebGjI7p.js";import"./debounce-Do79F5Rt.js";import"./tick-CRy55xU8.js";import"./DropdownField-DtNKMGKP.js";import"./isEqual-ZHneCzaK.js";import"./withOsdkMetrics-B7pLyp-k.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
