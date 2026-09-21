import{j as r}from"./iframe-C9Yk6gDU.js";import{O as b}from"./object-table-D6erdPoU.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DDmiSK_e.js";import{u as g}from"./useOsdkClient-BnQc_DSv.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C1C1Zb7q.js";import"./index-C1LUXaZv.js";import"./Dialog-CDkS_jOu.js";import"./cross--AbW-HvV.js";import"./svgIconContainer-Vc9A0mR-.js";import"./useBaseUiId-b5v8aEB7.js";import"./InternalBackdrop-C7n6oAdh.js";import"./composite-DaJF-Ug9.js";import"./index-BqzRBHu8.js";import"./index-CvC-GtCK.js";import"./index-Pn3t-jka.js";import"./useEventCallback-CKcNtt_k.js";import"./SkeletonBar-DdG9T8Ii.js";import"./LoadingCell-nvv6E0-U.js";import"./ColumnConfigDialog-BmorUqWW.js";import"./DraggableList-qGQ6dVRD.js";import"./search-7dKohem7.js";import"./Input-DAXz4YJS.js";import"./useControlled-DMm9xSYk.js";import"./Button-y2WBjgut.js";import"./small-cross-CbivvQt1.js";import"./ActionButton-dAjZm_x0.js";import"./Checkbox-CC7puzXu.js";import"./useValueChanged-RmTUBVN2.js";import"./CollapsiblePanel-C_lIliGf.js";import"./MultiColumnSortDialog-0wa6dZr4.js";import"./MenuTrigger-BZRPF_be.js";import"./CompositeItem-BZYu3hRC.js";import"./ToolbarRootContext-mnplRdcK.js";import"./getDisabledMountTransitionStyles-O3sebmRm.js";import"./getPseudoElementBounds-BNgO_MWm.js";import"./chevron-down-C4Xw0sT3.js";import"./index-iqHzidmh.js";import"./error-c-8HRK8d.js";import"./BaseCbacBanner-BJC8pASp.js";import"./makeExternalStore-BIsaNjNd.js";import"./Tooltip-CPPwTdsT.js";import"./PopoverPopup-B_2bYS3U.js";import"./debounce-BTWXBbIs.js";import"./tick-iNYSCbk-.js";import"./DropdownField-DhZIM-xb.js";import"./isEqual-CJvGUfrO.js";import"./withOsdkMetrics-OfArat_u.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
