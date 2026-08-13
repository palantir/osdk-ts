import{j as r}from"./iframe-BJco-VOi.js";import{O as b}from"./object-table-CZdQQxaf.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-YGPFmlsB.js";import{u as g}from"./useOsdkClient-Du5k__eT.js";import"./preload-helper-CC7TVMhJ.js";import"./Table-24cFDvFl.js";import"./index-BYEPosP_.js";import"./Dialog-B0y-HYJx.js";import"./cross-BlvAMq1L.js";import"./svgIconContainer-C_CZzMkw.js";import"./useBaseUiId-BzzLXW_j.js";import"./InternalBackdrop-CsTSVhzv.js";import"./composite-CqNHvWIl.js";import"./index-BplUxlkc.js";import"./index-DDr5B_4i.js";import"./index-DfO8rP6J.js";import"./useEventCallback-ClpNn0Bu.js";import"./SkeletonBar-B56cMCHb.js";import"./LoadingCell-Bv54e49y.js";import"./ColumnConfigDialog-0a64JMFA.js";import"./DraggableList-B4JbVwWc.js";import"./search-DqesndjO.js";import"./Input-DwjxDHpS.js";import"./useControlled-DiTzu7_L.js";import"./Button-DEa2BSVh.js";import"./small-cross-CW2LRHDt.js";import"./ActionButton-DlRmUvNc.js";import"./Checkbox-J8z3vrVX.js";import"./useValueChanged-T1ieS56z.js";import"./CollapsiblePanel-DaNke5cg.js";import"./MultiColumnSortDialog-CVChGFU2.js";import"./MenuTrigger-BF2QncqJ.js";import"./CompositeItem-BmVC2FiX.js";import"./ToolbarRootContext-DIdO-EJM.js";import"./getDisabledMountTransitionStyles-BKDkD37w.js";import"./getPseudoElementBounds-DbEZqPx5.js";import"./chevron-down-CRLaJKXa.js";import"./index-W1FoFTA-.js";import"./error-C3c_rdRU.js";import"./BaseCbacBanner-DdPl_p__.js";import"./makeExternalStore-BcSmY_xV.js";import"./Tooltip-DaE6jUox.js";import"./PopoverPopup-Dgyvxoba.js";import"./toNumber-GPiy_R35.js";import"./tick-LW5ev3iF.js";import"./DropdownField-DmZcznzU.js";import"./withOsdkMetrics-BU9iFrAf.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,Te={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
