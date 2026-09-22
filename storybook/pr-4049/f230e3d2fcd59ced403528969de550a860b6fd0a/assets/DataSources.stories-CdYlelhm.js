import{j as r}from"./iframe-CxxM9p3K.js";import{O as b}from"./object-table-BCOM_Q_i.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B-Bdah9f.js";import{u as g}from"./useOsdkClient-CYTSjB1o.js";import"./preload-helper-Clfhc9e2.js";import"./Table-CERILenu.js";import"./index-BFBsPuy5.js";import"./Dialog-CeAU4pGS.js";import"./cross-DVlZmvQu.js";import"./svgIconContainer-BDX64ThR.js";import"./useBaseUiId-6hcgy7hR.js";import"./InternalBackdrop-CLXXO-pE.js";import"./composite-DnTfWsZ7.js";import"./index-Cmw2FWOc.js";import"./index-U9rL3bD6.js";import"./index-ChdzrcBL.js";import"./useEventCallback-twJMSJh5.js";import"./SkeletonBar-BmxyWPnR.js";import"./LoadingCell-C31Aag0D.js";import"./ColumnConfigDialog-BvvSCjGt.js";import"./DraggableList-0r1jvYcu.js";import"./search-BLctbnBP.js";import"./Input-BEL6yzPH.js";import"./useControlled-BM7wy7zH.js";import"./Button-BSoYYLdN.js";import"./small-cross-BeQrGWQ3.js";import"./ActionButton-VAbO0Pky.js";import"./Checkbox-1FKOIi3w.js";import"./useValueChanged-DOWNQBb0.js";import"./CollapsiblePanel-BS-lVxoG.js";import"./MultiColumnSortDialog-k8mQSZef.js";import"./MenuTrigger-CdIkBQVS.js";import"./CompositeItem-D91fXLRV.js";import"./ToolbarRootContext-DrjoHCqu.js";import"./getDisabledMountTransitionStyles-DTSBvSw4.js";import"./getPseudoElementBounds-DYfgqtqr.js";import"./chevron-down-jQiKIGSz.js";import"./index-DXQ0Y341.js";import"./error-CFTb0-g7.js";import"./BaseCbacBanner-DeC626Ph.js";import"./makeExternalStore-Ryz_3n-W.js";import"./Tooltip-CDs-lAuM.js";import"./PopoverPopup-DAq0-7NO.js";import"./debounce-CX8zVuen.js";import"./tick-BPFcYePS.js";import"./DropdownField-nXSmGKVx.js";import"./isEqual-3hwHAxpd.js";import"./withOsdkMetrics-axCUhS1P.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
