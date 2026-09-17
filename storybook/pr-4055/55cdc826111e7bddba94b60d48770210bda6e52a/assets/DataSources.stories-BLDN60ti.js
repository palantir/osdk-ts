import{j as r}from"./iframe-DI00rnMc.js";import{O as b}from"./object-table-DCV7k42M.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B-g4_RmW.js";import{u as g}from"./useOsdkClient-D1SRiVtj.js";import"./preload-helper-Bhha9UTp.js";import"./Table-xysYXERX.js";import"./index-Brq0evln.js";import"./Dialog-BGKWvYKg.js";import"./cross-6J7bJBxX.js";import"./svgIconContainer-DP5UNNJ5.js";import"./useBaseUiId-6U9MPwLo.js";import"./InternalBackdrop-5T5xbc5h.js";import"./composite-UOsa0WMB.js";import"./index-Chs62TH6.js";import"./index-Dd09UFHP.js";import"./index-BaR9V_cz.js";import"./useEventCallback-DlKWHTb3.js";import"./SkeletonBar-BMhplOL3.js";import"./LoadingCell-Cy3018Z9.js";import"./ColumnConfigDialog-CbzSqC-H.js";import"./DraggableList-CXvW5fS_.js";import"./search-D078c5Qn.js";import"./Input-5eKJv0PC.js";import"./useControlled-C2-apkIG.js";import"./Button-7EKbW6_f.js";import"./small-cross-W27oLZuH.js";import"./ActionButton-C53buHAy.js";import"./Checkbox-BuPcyFtO.js";import"./useValueChanged-Drw-qmtO.js";import"./CollapsiblePanel-DWSPG8Q_.js";import"./MultiColumnSortDialog-BRpxFD4d.js";import"./MenuTrigger-DY6AZSH4.js";import"./CompositeItem-PKIDUwep.js";import"./ToolbarRootContext-BVNpcmSf.js";import"./getDisabledMountTransitionStyles-DEsnJVLy.js";import"./getPseudoElementBounds-CdI2GVpp.js";import"./chevron-down-ihi9Dc4D.js";import"./index-D6jwq80D.js";import"./error-CCbSqJWm.js";import"./BaseCbacBanner-DPXH0tTQ.js";import"./makeExternalStore-qZ-zko2S.js";import"./Tooltip-ZhOYcscf.js";import"./PopoverPopup-DVqDwMCW.js";import"./debounce-DshZgGYh.js";import"./tick-Da1rXlTd.js";import"./DropdownField-uqgsMlJj.js";import"./isEqual-BbwTjB3b.js";import"./withOsdkMetrics-DT1mwdZ-.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
