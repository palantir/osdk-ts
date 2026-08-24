import{j as r}from"./iframe-DCaGj3l0.js";import{O as b}from"./object-table-D0mt5DPJ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CReHiVGS.js";import{u as g}from"./useOsdkClient-6qfYQwQq.js";import"./preload-helper-gC7fLLdU.js";import"./Table-Ds7HS37W.js";import"./index-DHJOctOT.js";import"./Dialog-BvfSMtlB.js";import"./cross-BpMnC369.js";import"./svgIconContainer-BdchtLLj.js";import"./useBaseUiId-DGrKf2Eo.js";import"./InternalBackdrop-CSwqTrZw.js";import"./composite-BmlfmHXv.js";import"./index-lxz2Q88D.js";import"./index-CqOnqOgj.js";import"./index-BzSaS7Cw.js";import"./useEventCallback-B32f23SN.js";import"./SkeletonBar-4_sAq1N_.js";import"./LoadingCell-DaN63Ldr.js";import"./ColumnConfigDialog-DB8cbZnm.js";import"./DraggableList-BFubNhXI.js";import"./search-Bhwoz9oz.js";import"./Input-ndPiwRRZ.js";import"./useControlled-CmhVbQER.js";import"./Button-BwAz3h5J.js";import"./small-cross-yPYVW9ma.js";import"./ActionButton-CLaZ3sVC.js";import"./Checkbox-B7HTI25J.js";import"./useValueChanged-BSGKh55p.js";import"./CollapsiblePanel-kflJyW8i.js";import"./MultiColumnSortDialog-B-Hv7au_.js";import"./MenuTrigger-Xyg7dls5.js";import"./CompositeItem-BD31eM2W.js";import"./ToolbarRootContext-DYMdUcY2.js";import"./getDisabledMountTransitionStyles-CPT9oXs8.js";import"./getPseudoElementBounds-CFsJDsKN.js";import"./chevron-down-DD_PJCyI.js";import"./index-C1b2qvva.js";import"./error-BT5-tKwD.js";import"./BaseCbacBanner-DMFela52.js";import"./makeExternalStore-DJQIf4q1.js";import"./Tooltip-BsrpxabU.js";import"./PopoverPopup-DckcAQlp.js";import"./debounce-B1LoYU07.js";import"./tick-NvbgN8tQ.js";import"./DropdownField-DVsSESTI.js";import"./useDebouncedCallback-BPfUve02.js";import"./withOsdkMetrics-IcI5BvBR.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
