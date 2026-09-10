import{j as r}from"./iframe-CJdhljqY.js";import{O as b}from"./object-table-C15HZsK6.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CoEKHDYp.js";import{u as g}from"./useOsdkClient-DoLuxURC.js";import"./preload-helper-Dt50QPrM.js";import"./Table-66i0ylnA.js";import"./index-C_XWhVsk.js";import"./Dialog-VSy_iTM4.js";import"./cross-xpJwG0PM.js";import"./svgIconContainer-DfUk_uW1.js";import"./useBaseUiId-DhLXeG5Q.js";import"./InternalBackdrop-BZc-gUEh.js";import"./composite-CMxCP_fe.js";import"./index-CiaROGr7.js";import"./index-PvN9PIAf.js";import"./index-B0u6fGpW.js";import"./useEventCallback-BSb5aBsV.js";import"./SkeletonBar-Do_BGkRf.js";import"./LoadingCell-DDr-ObVZ.js";import"./ColumnConfigDialog-CYwlsrqG.js";import"./DraggableList-Cw8pOFJj.js";import"./search-KsJ5YUkQ.js";import"./Input-MNhthrzu.js";import"./useControlled-DxG1_BRX.js";import"./Button-BW0xuowo.js";import"./small-cross-4RRmn2cJ.js";import"./ActionButton-NXakpU_-.js";import"./Checkbox-CCMcLkD6.js";import"./useValueChanged-WbLrwhHG.js";import"./CollapsiblePanel-Cc53AZ9G.js";import"./MultiColumnSortDialog-HRkDiJIo.js";import"./MenuTrigger-Dh02swDl.js";import"./CompositeItem-D1aj4ASS.js";import"./ToolbarRootContext-BUjzSc7s.js";import"./getDisabledMountTransitionStyles-DjY5DFv9.js";import"./getPseudoElementBounds-DjMkCYmI.js";import"./chevron-down-HDas2nyI.js";import"./index-JTXg-Z1T.js";import"./error-De8eomlR.js";import"./BaseCbacBanner-Cbq547lz.js";import"./makeExternalStore-JX4u0CWz.js";import"./Tooltip-DXKWPKVU.js";import"./PopoverPopup-JStXvDFZ.js";import"./debounce-DmZlAZ0B.js";import"./tick-9_KQHHd1.js";import"./DropdownField-BRJuo5am.js";import"./isEqual-DrMdl6cL.js";import"./withOsdkMetrics-C23PGbte.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
