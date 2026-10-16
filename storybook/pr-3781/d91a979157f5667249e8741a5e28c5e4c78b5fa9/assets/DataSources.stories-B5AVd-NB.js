import{j as r}from"./iframe-nHeyQ6G0.js";import{O as b}from"./object-table-CMySora2.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CuYpdEZX.js";import{u as g}from"./useOsdkClient-DdGx6s8m.js";import"./preload-helper-CQHnyaJj.js";import"./Table-DAvHxFZU.js";import"./index-Cepl2Gdo.js";import"./Dialog-C40NzizH.js";import"./cross-BY7_vW_g.js";import"./svgIconContainer-CLZNV5by.js";import"./useBaseUiId-WP9Qsa8B.js";import"./InternalBackdrop-BhOu_nRs.js";import"./composite-BYQJTx_c.js";import"./index-DDrT1OpE.js";import"./index-BwIe69Hj.js";import"./index-B4LSn0e3.js";import"./useEventCallback-DDta6l4G.js";import"./SkeletonBar-B4LZAubO.js";import"./LoadingCell-W_Pg7cSe.js";import"./ColumnConfigDialog-D8-9RbHL.js";import"./DraggableList-Cu7yXH0e.js";import"./search-nN6muyjH.js";import"./Input-LHo6mX7j.js";import"./useControlled-BEwPeN8G.js";import"./Button-OJtt4Wi3.js";import"./small-cross-D5y46BPP.js";import"./ActionButton-BdRYsIpx.js";import"./Checkbox-Cg3HXpCR.js";import"./useValueChanged-CTSv8K7w.js";import"./CollapsiblePanel-DGVjgwmu.js";import"./MultiColumnSortDialog-5tu2miBi.js";import"./MenuTrigger-Db3EXvDE.js";import"./CompositeItem-Y1Nghizw.js";import"./ToolbarRootContext-CrhI_j71.js";import"./getDisabledMountTransitionStyles-B3-icwrX.js";import"./getPseudoElementBounds-CFXLoVOU.js";import"./chevron-down-DWkmyfL1.js";import"./index-BzvZTbEJ.js";import"./error-qX2wkXkr.js";import"./BaseCbacBanner-DxR5PA9d.js";import"./makeExternalStore-COs31IKH.js";import"./Tooltip-ewszX06o.js";import"./PopoverPopup-3A5a03nx.js";import"./debounce-DpokpJG9.js";import"./tick-Baztb2JM.js";import"./DropdownField-B02tWq-y.js";import"./isEqual-CPFA_kRf.js";import"./withOsdkMetrics-CYsyTWZq.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
