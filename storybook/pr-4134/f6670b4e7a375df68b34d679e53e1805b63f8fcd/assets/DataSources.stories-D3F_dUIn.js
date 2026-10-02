import{j as r}from"./iframe-Bjs833GT.js";import{O as b}from"./object-table-C3IgKZNw.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BImyd_2R.js";import{u as g}from"./useOsdkClient-Bk2k7B_F.js";import"./preload-helper-BlVzQ63h.js";import"./Table-mE-X7H78.js";import"./index-ouW-uxFy.js";import"./Dialog-CeGZ1o7-.js";import"./cross-odZi7HLt.js";import"./svgIconContainer-B50GNB1l.js";import"./useBaseUiId-azhLq6E8.js";import"./InternalBackdrop-CSh59UaV.js";import"./composite-DAp8GgCU.js";import"./index-Cd4CH7YJ.js";import"./index-BIIN4O4s.js";import"./index-gqB7KI61.js";import"./useEventCallback-DAOuva_s.js";import"./SkeletonBar-COXh_K_A.js";import"./LoadingCell-CL6pGTYf.js";import"./ColumnConfigDialog-RzjwFmne.js";import"./DraggableList-Cb1vAsrp.js";import"./search-Bz3i30zB.js";import"./Input-jDIiSSPg.js";import"./useControlled-T6eskrKs.js";import"./Button-Bi0CmGS9.js";import"./small-cross-4PvqsLte.js";import"./ActionButton-BV_FUyjV.js";import"./Checkbox-h8zMlZRj.js";import"./useValueChanged-BcoiLIU-.js";import"./CollapsiblePanel-CEYd-Yeh.js";import"./MultiColumnSortDialog-B-Q3xx7z.js";import"./MenuTrigger-B6rWoPMu.js";import"./CompositeItem-BOsNn8o6.js";import"./ToolbarRootContext-Gv05lgLU.js";import"./getDisabledMountTransitionStyles-DbnX7M-z.js";import"./getPseudoElementBounds-BYukSd76.js";import"./chevron-down-DSKsXuZi.js";import"./index-Ci1PABP6.js";import"./error-D5mhWRkN.js";import"./BaseCbacBanner-BtOiRQiw.js";import"./makeExternalStore-DPdJKiEp.js";import"./Tooltip-Bjp4iv0K.js";import"./PopoverPopup-D62GG8Vu.js";import"./debounce-BQr-vi9c.js";import"./tick-ujL-DBFL.js";import"./DropdownField-CCWswJAt.js";import"./isEqual-BarWzeE3.js";import"./withOsdkMetrics-CZSiJ0-9.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
