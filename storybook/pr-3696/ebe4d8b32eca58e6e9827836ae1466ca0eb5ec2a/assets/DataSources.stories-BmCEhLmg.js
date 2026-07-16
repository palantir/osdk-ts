import{j as r}from"./iframe-DmanCMEI.js";import{O as b}from"./object-table-BOnj1K9n.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DoJUAezz.js";import{u as g}from"./useOsdkClient-BkKhyzRZ.js";import"./preload-helper-doTXSS6w.js";import"./Table-Bm95r9Jc.js";import"./index-BC1LLXL5.js";import"./Dialog-CyBjPatv.js";import"./cross-gbzL7JWR.js";import"./svgIconContainer-Cvoi4_Sl.js";import"./useBaseUiId-D1zBL0DS.js";import"./InternalBackdrop-Dyb5X86C.js";import"./composite-CxTPo-Sh.js";import"./index-CcBFqiWq.js";import"./index-CfJBzqcM.js";import"./index-7KVEeB0f.js";import"./useEventCallback-DBtfOhpr.js";import"./SkeletonBar-DPIBNUuJ.js";import"./LoadingCell-BIKt8H5R.js";import"./ColumnConfigDialog-MDILY6fY.js";import"./DraggableList-B-jNLDQZ.js";import"./search-DuDCg1Pk.js";import"./Input-BJ05cG_c.js";import"./useControlled-ACJqipIm.js";import"./Button-4qJso63q.js";import"./small-cross-CeY0DZ3A.js";import"./ActionButton-CaVyZJEB.js";import"./Checkbox-hMBSOyWI.js";import"./useValueChanged-D72XIVjX.js";import"./CollapsiblePanel-CqbNntZ_.js";import"./MultiColumnSortDialog-IooCE7Ih.js";import"./MenuTrigger-BArjN5Qq.js";import"./CompositeItem-ZWcQiJwA.js";import"./ToolbarRootContext-BAUHoLHk.js";import"./getDisabledMountTransitionStyles-KhAyXbUC.js";import"./getPseudoElementBounds-ncoZeIgg.js";import"./chevron-down-DR3bdEe4.js";import"./index-IbUXuY6k.js";import"./error-Bw-mjGsQ.js";import"./BaseCbacBanner-BAlDvOtg.js";import"./makeExternalStore-34eYA6eS.js";import"./Tooltip-BGgLPuDf.js";import"./PopoverPopup-BvAwckT4.js";import"./toNumber-Cig2uH6n.js";import"./tick-D4FhYBi9.js";import"./DropdownField-DuYJGLJk.js";import"./withOsdkMetrics-CTv8KbCs.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,Te={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const je=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,je as __namedExportsOrder,Te as default};
