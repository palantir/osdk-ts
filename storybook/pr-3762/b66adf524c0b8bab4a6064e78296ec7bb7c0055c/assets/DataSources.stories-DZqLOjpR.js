import{j as r}from"./iframe-C8mLpNUa.js";import{O as b}from"./object-table-Fn6VhCUz.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DCy0NYvM.js";import{u as g}from"./useOsdkClient-ClitNGRv.js";import"./preload-helper-DcXm066Y.js";import"./Table-DaS1q166.js";import"./index-lplF09tk.js";import"./Dialog-CfN6DPR5.js";import"./cross-D4wCc5t9.js";import"./svgIconContainer-FbWIWLG7.js";import"./useBaseUiId-D95gWc2p.js";import"./InternalBackdrop-Cn1EpYhL.js";import"./composite-CWkYjCVm.js";import"./index-Dg7wmbR-.js";import"./index-Cq9Q8vBH.js";import"./index-BXj5gnEY.js";import"./useEventCallback-CN4ewGuU.js";import"./SkeletonBar-ld154GRO.js";import"./LoadingCell-CA5v2LhZ.js";import"./ColumnConfigDialog-COjR4SK3.js";import"./DraggableList-DeZ7Fjiz.js";import"./search-DYeQ-hhD.js";import"./Input-DiXIdJjT.js";import"./useControlled-Bc3_JC4e.js";import"./Button-FnUnITX8.js";import"./small-cross-BgFinUbq.js";import"./ActionButton-PfDCZTjW.js";import"./Checkbox-DQELhXo6.js";import"./useValueChanged-tRyHrxSy.js";import"./CollapsiblePanel-C1fuzRfs.js";import"./MultiColumnSortDialog-C0Kua6eP.js";import"./MenuTrigger-fIqLLZUS.js";import"./CompositeItem-CcQJlkPk.js";import"./ToolbarRootContext-iYdW5kZP.js";import"./getDisabledMountTransitionStyles-BnS01vxD.js";import"./getPseudoElementBounds-DkmGpNxR.js";import"./chevron-down-Dd1Lw4ZT.js";import"./index-C4XmNQrj.js";import"./error-Bi3sflIe.js";import"./BaseCbacBanner-C_L4y6FS.js";import"./makeExternalStore-BYvHqUPv.js";import"./Tooltip-BUg7Cwnf.js";import"./PopoverPopup-DVQDIUhl.js";import"./debounce-BHPqWnQs.js";import"./tick-0TEkLF7E.js";import"./DropdownField-woqCFHu0.js";import"./isEqual-D1PRrFxr.js";import"./withOsdkMetrics-Dqf6ufdb.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
