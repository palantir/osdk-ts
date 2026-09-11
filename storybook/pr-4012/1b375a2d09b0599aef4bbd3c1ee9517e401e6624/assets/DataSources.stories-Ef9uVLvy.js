import{j as r}from"./iframe-BHMJk_pQ.js";import{O as b}from"./object-table-CEwmRrXK.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BT7dNVPv.js";import{u as g}from"./useOsdkClient-BikzBIxv.js";import"./preload-helper-yZDhH5uY.js";import"./Table-d8i9MRUg.js";import"./index-CGIFCVjE.js";import"./Dialog-DxVtYtNu.js";import"./cross-Ca7k_LyQ.js";import"./svgIconContainer-EnhuaKpb.js";import"./useBaseUiId-q1ez9o9O.js";import"./InternalBackdrop-BiA6TLUL.js";import"./composite-vsetCZGp.js";import"./index-DlggJEEa.js";import"./index-CzKMl-a_.js";import"./index-CpCHJENW.js";import"./useEventCallback-xm841LUs.js";import"./SkeletonBar-CzOTj0Px.js";import"./LoadingCell-B7ZMIDfw.js";import"./ColumnConfigDialog-BWEen_Od.js";import"./DraggableList-VFAUNwz9.js";import"./search-BSgVHkt6.js";import"./Input-Bs3tYIFL.js";import"./useControlled-CoWycKh2.js";import"./Button-agVfxQZq.js";import"./small-cross-_-iQX0fq.js";import"./ActionButton-B-A1N2em.js";import"./Checkbox-BSj_-O_d.js";import"./useValueChanged-DbGFjP29.js";import"./CollapsiblePanel-DfUPQ-ZF.js";import"./MultiColumnSortDialog-BzHnW22D.js";import"./MenuTrigger-D-rANtVw.js";import"./CompositeItem-C-ykAJ2x.js";import"./ToolbarRootContext-eWmTNPN4.js";import"./getDisabledMountTransitionStyles-D8ahXwaA.js";import"./getPseudoElementBounds-CbcE4Eyu.js";import"./chevron-down-DAwRR1Ih.js";import"./index-DYYPIily.js";import"./error-DwwBySlx.js";import"./BaseCbacBanner-C_uEXybe.js";import"./makeExternalStore-BvwVYkGq.js";import"./Tooltip-8-o0FWqB.js";import"./PopoverPopup-B7XXhvdV.js";import"./debounce-CB6HZpU1.js";import"./tick-DGaeG0X3.js";import"./DropdownField-C0pXdzvg.js";import"./isEqual-DK9oB8Fi.js";import"./withOsdkMetrics-Bfl9jveo.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
