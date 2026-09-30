import{j as r}from"./iframe-za2gFZm7.js";import{O as b}from"./object-table-BS8MM0wq.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BjOgm-cf.js";import{u as g}from"./useOsdkClient-DPxpEBB0.js";import"./preload-helper-B152vIQk.js";import"./Table-DKIXKU0X.js";import"./index-C4E5Dk0R.js";import"./Dialog-BKjUT0WY.js";import"./cross-TTEnlvkl.js";import"./svgIconContainer-Dr6j7alJ.js";import"./useBaseUiId-BpIGGvmI.js";import"./InternalBackdrop-CuWltaZZ.js";import"./composite-D56jxQaX.js";import"./index-C4smQJ4G.js";import"./index-OBpStMAY.js";import"./index-BXHLylGJ.js";import"./useEventCallback-B-1PMCAh.js";import"./SkeletonBar-DJX3wRZn.js";import"./LoadingCell-76SMTSbQ.js";import"./ColumnConfigDialog-x5n0fU9Y.js";import"./DraggableList-BN2F7Ttd.js";import"./search-FcuyWSqL.js";import"./Input-B_NAvwoc.js";import"./useControlled-x2G49QSH.js";import"./Button-DwQfUaLn.js";import"./small-cross-Cpr2Bt40.js";import"./ActionButton-yFn7B9Sr.js";import"./Checkbox-Bl7oN82I.js";import"./useValueChanged-CgoAhXS1.js";import"./CollapsiblePanel-f2IrHI_h.js";import"./MultiColumnSortDialog-BAtKqwsE.js";import"./MenuTrigger-DcOti6NU.js";import"./CompositeItem-BDB5_ay2.js";import"./ToolbarRootContext-BG5Gc4jy.js";import"./getDisabledMountTransitionStyles-BtrYbTrP.js";import"./getPseudoElementBounds-CYZLYzqG.js";import"./chevron-down-DJF2R6Zo.js";import"./index-CHACBaIH.js";import"./error-Dk8fbBB5.js";import"./BaseCbacBanner-DBUtzZ_e.js";import"./makeExternalStore-C8qXbmFn.js";import"./Tooltip-DpzWRQIQ.js";import"./PopoverPopup-BzwgnfVt.js";import"./debounce-BxVMhpPq.js";import"./tick-DCTTAhNR.js";import"./DropdownField-DbWdFCIz.js";import"./isEqual-Co-ogKGs.js";import"./withOsdkMetrics-U5yEFT5F.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
