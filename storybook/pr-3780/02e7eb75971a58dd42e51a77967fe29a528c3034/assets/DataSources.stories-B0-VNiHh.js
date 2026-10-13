import{j as r}from"./iframe-BLF6zRqG.js";import{O as b}from"./object-table-C0cdKhB3.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CMv6jBqb.js";import{u as g}from"./useOsdkClient-1axdfMxV.js";import"./preload-helper-BDaxV4R2.js";import"./Table-CeE5JrDd.js";import"./index-BLFrbzvg.js";import"./Dialog-n73yCmVX.js";import"./cross-BA9FjJ9G.js";import"./svgIconContainer-B1hh76l8.js";import"./useBaseUiId-Zjs0lNV0.js";import"./InternalBackdrop-CyIeJrcr.js";import"./composite-CcKV35Kr.js";import"./index-CLYhFphF.js";import"./index-ByFfno_8.js";import"./index-Bl_HIsRn.js";import"./useEventCallback-DH0i-Vx2.js";import"./SkeletonBar-C1CYbmJA.js";import"./LoadingCell-Cm0bxSxn.js";import"./ColumnConfigDialog-BTqcioDF.js";import"./DraggableList-CsjHVdfB.js";import"./search-9jU6Q1us.js";import"./Input-CCDmeNBI.js";import"./useControlled-CoQlBX4R.js";import"./Button-9qWiKKY-.js";import"./small-cross-BqECmGEj.js";import"./ActionButton-DbZE13mN.js";import"./Checkbox-Bu0FH9eh.js";import"./useValueChanged-BKw1I0EK.js";import"./CollapsiblePanel-Dda8YuQy.js";import"./MultiColumnSortDialog-C9HqTSZt.js";import"./MenuTrigger-XxylOScL.js";import"./CompositeItem-DtwY3yqS.js";import"./ToolbarRootContext-2-p_DBQP.js";import"./getDisabledMountTransitionStyles-ARetRnAA.js";import"./getPseudoElementBounds-4DmUh_rK.js";import"./chevron-down-D3B34KT6.js";import"./index-ccXt1NIS.js";import"./error-CBG8l0PN.js";import"./BaseCbacBanner-Bxx3iju9.js";import"./makeExternalStore-GX9DdVy4.js";import"./Tooltip-8Jei4W6Q.js";import"./PopoverPopup-B7UZBa1s.js";import"./debounce-B91OJyBP.js";import"./tick-28tjcfUj.js";import"./DropdownField-D-l1iVFe.js";import"./isEqual-DXHdtgab.js";import"./withOsdkMetrics-CRvkKsTN.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
