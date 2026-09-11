import{j as r}from"./iframe-B4QogxC6.js";import{O as b}from"./object-table-BC8L594r.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CDYGOlRg.js";import{u as g}from"./useOsdkClient-Cl601DTN.js";import"./preload-helper-C_5k-fFt.js";import"./Table-Bi1HtYYp.js";import"./index-CQyvBzj_.js";import"./Dialog-Hnfyv8Xj.js";import"./cross-Dv490F0o.js";import"./svgIconContainer-DdyooWte.js";import"./useBaseUiId-DownjkF0.js";import"./InternalBackdrop-DL90UTgk.js";import"./composite-Dqc63iLy.js";import"./index-BKn8iF1n.js";import"./index-D0VjMeuF.js";import"./index-ByT4MXlR.js";import"./useEventCallback-bHimiWWk.js";import"./SkeletonBar-B3VZ6hlb.js";import"./LoadingCell-w9kd8MkW.js";import"./ColumnConfigDialog-Dtj9JJKP.js";import"./DraggableList-MX_3E-v0.js";import"./search-BgJqBCXd.js";import"./Input-DiRfBBOs.js";import"./useControlled-T3xesycb.js";import"./Button-CIw-2F8I.js";import"./small-cross-Cjfa7jit.js";import"./ActionButton-DzObz5rl.js";import"./Checkbox-YkxadoHh.js";import"./useValueChanged-FjHY1o4Y.js";import"./CollapsiblePanel-B5tdGMg0.js";import"./MultiColumnSortDialog-Br81g5wB.js";import"./MenuTrigger-Du6xUBZs.js";import"./CompositeItem-BoXFiz_E.js";import"./ToolbarRootContext-De8fRc6j.js";import"./getDisabledMountTransitionStyles-BtJrecyz.js";import"./getPseudoElementBounds-T2UYiBqB.js";import"./chevron-down-BlCKOTL8.js";import"./index-K9tFI_58.js";import"./error-rqdE4hRy.js";import"./BaseCbacBanner-BsmNmvyE.js";import"./makeExternalStore-BBdCQtVj.js";import"./Tooltip-D-SzDxed.js";import"./PopoverPopup-CWEZyT0m.js";import"./debounce-CeSijK1N.js";import"./tick-9Irchz6P.js";import"./DropdownField-D9HTL46H.js";import"./isEqual-CprjN2vP.js";import"./withOsdkMetrics-DDrBn77T.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
