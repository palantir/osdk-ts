import{j as r}from"./iframe-C1SMXjUe.js";import{O as b}from"./object-table-CEXa-Hzx.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CVu2aWC6.js";import{u as g}from"./useOsdkClient-DQjFnF1a.js";import"./preload-helper-O4cQ6S71.js";import"./Table-Cwzldwoc.js";import"./index-DN_SN9-G.js";import"./Dialog-9T95jsWw.js";import"./cross-D7uSPFjO.js";import"./svgIconContainer-BDoLcvXV.js";import"./useBaseUiId-BuIqgK5v.js";import"./InternalBackdrop-CwUkjFDV.js";import"./composite-sNamXEmM.js";import"./index-08DpGPSx.js";import"./index-19ONWP9f.js";import"./index-Be0DvM55.js";import"./useEventCallback-BG06jL1K.js";import"./SkeletonBar-DxEb7MhI.js";import"./LoadingCell-DG3HryQj.js";import"./ColumnConfigDialog-C7A4Uoas.js";import"./DraggableList-BzjNz4op.js";import"./search-DnJjsxnU.js";import"./Input-57O56G_v.js";import"./useControlled-BZtQiYd3.js";import"./Button-Bfn1HbBL.js";import"./small-cross-dpYlCU3i.js";import"./ActionButton-CmH_f-Jn.js";import"./Checkbox-DjdiHWL7.js";import"./useValueChanged-CTxxu7jt.js";import"./CollapsiblePanel-DItfM1Rh.js";import"./MultiColumnSortDialog-CN_3BKmH.js";import"./MenuTrigger-BKFf40Pj.js";import"./CompositeItem-BJrPEqdr.js";import"./ToolbarRootContext-BEFeXo6R.js";import"./getDisabledMountTransitionStyles-B57QkLv0.js";import"./getPseudoElementBounds-DSbpx7o5.js";import"./chevron-down-BPj-14kw.js";import"./index-HIFRtJiy.js";import"./error-Ck-1b3_a.js";import"./BaseCbacBanner-D8XRx25T.js";import"./makeExternalStore-wdj16MKs.js";import"./Tooltip-CqhWgQKj.js";import"./PopoverPopup-DWuA0PEL.js";import"./debounce-BU3TwIzE.js";import"./tick-C1BZKfVK.js";import"./DropdownField-DRlqW65z.js";import"./isEqual-BKKmn0ha.js";import"./withOsdkMetrics-CARHbXxz.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
