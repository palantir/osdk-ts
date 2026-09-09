import{j as r}from"./iframe-C5ao1IvQ.js";import{O as b}from"./object-table-DerlADk9.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CmeMrzJJ.js";import{u as g}from"./useOsdkClient-CZSnsobV.js";import"./preload-helper-DGRqXtXi.js";import"./Table-2ZURcp6C.js";import"./index-Ceo1TM0H.js";import"./Dialog-DLgxAKbr.js";import"./cross-tL6C68Y8.js";import"./svgIconContainer-XtON82xh.js";import"./useBaseUiId-CnKjhxxS.js";import"./InternalBackdrop-DX4I219N.js";import"./composite-C9s-0UsJ.js";import"./index-BdE4NmrR.js";import"./index-BR9sQfcO.js";import"./index-Dl_5gpp4.js";import"./useEventCallback-DU-6RHtA.js";import"./SkeletonBar-BYTqUIXM.js";import"./LoadingCell-DjsZgBMi.js";import"./ColumnConfigDialog-BbaOeUCq.js";import"./DraggableList-CLh4Tyq3.js";import"./search-Cn03k3ET.js";import"./Input-jSAQ8Oo5.js";import"./useControlled-BT4ixp-u.js";import"./Button-dQ0hHaFn.js";import"./small-cross-CExx4_xi.js";import"./ActionButton-BqCFxwRp.js";import"./Checkbox-CV3uDaMQ.js";import"./useValueChanged-BGuUHdGP.js";import"./CollapsiblePanel-D2FHKx7N.js";import"./MultiColumnSortDialog-CqK_MWJM.js";import"./MenuTrigger-j5B5SFgt.js";import"./CompositeItem-CbSSSK8r.js";import"./ToolbarRootContext-DALSiAmf.js";import"./getDisabledMountTransitionStyles-rgB5HMnj.js";import"./getPseudoElementBounds-ZCf_GkCq.js";import"./chevron-down-CMM_2MNN.js";import"./index-BrUG7ik_.js";import"./error-MOhUoXAM.js";import"./BaseCbacBanner-Dcllmg5_.js";import"./makeExternalStore-CCjQfhEF.js";import"./Tooltip-Dhg69mhl.js";import"./PopoverPopup-CummcjH_.js";import"./debounce-DqZmCH0E.js";import"./tick-Btjr_S2K.js";import"./DropdownField-BNnQ-S--.js";import"./isEqual-c7N1e270.js";import"./withOsdkMetrics-vcpuoudd.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
