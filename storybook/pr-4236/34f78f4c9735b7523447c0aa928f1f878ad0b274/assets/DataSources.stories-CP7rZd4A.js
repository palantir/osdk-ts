import{j as r}from"./iframe-CUIuiQ8M.js";import{O as b}from"./object-table-DcpRmsy_.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CjGj8iV8.js";import{u as g}from"./useOsdkClient-B4O694Ba.js";import"./preload-helper-w0MMDoBI.js";import"./Table-BcVAwvAP.js";import"./index-B5rq4E8c.js";import"./Dialog-lzK4Gi-J.js";import"./cross-BEDlXMDX.js";import"./svgIconContainer-XQGxfFa5.js";import"./useBaseUiId-CO_Scg4B.js";import"./InternalBackdrop-Y4Nj-4X1.js";import"./composite-CfWLpG35.js";import"./index-BXDM3eUI.js";import"./index-nHMpUj1A.js";import"./index-DkpbIJUD.js";import"./useEventCallback-C_grctXi.js";import"./SkeletonBar-CwNsNlh8.js";import"./LoadingCell-KsTWRBcy.js";import"./ColumnConfigDialog-BvqKgg-q.js";import"./DraggableList-CKtkyqle.js";import"./search-DuRjWaqd.js";import"./Input-CUX61x5u.js";import"./useControlled-AW4odFH0.js";import"./Button-BsH4UFjg.js";import"./small-cross-DaAqxcp4.js";import"./ActionButton-DtPhv0MM.js";import"./Checkbox-CDbOUomX.js";import"./useValueChanged-CL6SvqY3.js";import"./CollapsiblePanel-CUDS3fRJ.js";import"./MultiColumnSortDialog-DT-P02CM.js";import"./MenuTrigger-BsuBD8Wj.js";import"./CompositeItem-DqTHESiL.js";import"./ToolbarRootContext-mQ2qjFjd.js";import"./getDisabledMountTransitionStyles-vKVZiAas.js";import"./getPseudoElementBounds-QgHfLMx-.js";import"./chevron-down-BPe3l6Fo.js";import"./index-BupjIogH.js";import"./error-BGt6yMaY.js";import"./BaseCbacBanner-BcfsTXre.js";import"./makeExternalStore-elmJ7ql4.js";import"./Tooltip-DLKdaeP_.js";import"./PopoverPopup-BR39rcA2.js";import"./debounce-COj0D1HK.js";import"./tick-Clfa24KY.js";import"./DropdownField-CUeKvgWP.js";import"./isEqual-l3r_0yQ_.js";import"./withOsdkMetrics-CQMJUMD-.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
