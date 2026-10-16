import{j as r}from"./iframe-DCDy9VYS.js";import{O as b}from"./object-table-DcIcsg-z.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DpVyXhl8.js";import{u as g}from"./useOsdkClient-DE_N4tYE.js";import"./preload-helper-DYzeOhdi.js";import"./Table-BcMOzAOA.js";import"./index-As1ywJYE.js";import"./Dialog-C2cLJb9y.js";import"./cross-BJlA6QIm.js";import"./svgIconContainer-D9qShJuw.js";import"./useBaseUiId-BwVm2U7U.js";import"./InternalBackdrop-ijCyx1er.js";import"./composite-c9aHe9jO.js";import"./index-CvF6o7Ro.js";import"./index-Dg2YILHW.js";import"./index-DqVXKAlF.js";import"./useEventCallback-BpL75y-I.js";import"./SkeletonBar-DroWMPlj.js";import"./LoadingCell-Bq-U8EXT.js";import"./ColumnConfigDialog-XyrM1zkL.js";import"./DraggableList-BQ460tmS.js";import"./search-Nu3soqfg.js";import"./Input-1IBLw1l4.js";import"./useControlled-Ck2v8yj-.js";import"./Button-CEFR6_SV.js";import"./small-cross-uadXp9F-.js";import"./ActionButton-DqA_w_SP.js";import"./Checkbox-B8VnA7oI.js";import"./useValueChanged-CPtG6vDl.js";import"./CollapsiblePanel-BzeOsHAl.js";import"./MultiColumnSortDialog-CwTztmsw.js";import"./MenuTrigger-C5KhP-2u.js";import"./CompositeItem-DLLGFuyo.js";import"./ToolbarRootContext-cMntifXn.js";import"./getDisabledMountTransitionStyles-BooTnCUs.js";import"./getPseudoElementBounds-Dbq8OiTZ.js";import"./chevron-down-hGs_IVeQ.js";import"./index-CMTxTXNi.js";import"./error-5cMYD3vI.js";import"./BaseCbacBanner-Bo2AUWFr.js";import"./makeExternalStore-BQWaZP2I.js";import"./Tooltip-C_BJoEQ_.js";import"./PopoverPopup-C3K-ljQu.js";import"./debounce-C0GenXTw.js";import"./tick-CxNHTulf.js";import"./DropdownField-CGJbjv2M.js";import"./isEqual-DHXL-66W.js";import"./withOsdkMetrics-D5GlFsUX.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
