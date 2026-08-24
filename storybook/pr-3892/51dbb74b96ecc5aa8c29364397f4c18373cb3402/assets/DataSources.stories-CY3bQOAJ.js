import{j as r}from"./iframe-B6AjvOVJ.js";import{O as b}from"./object-table-BEU4RzJ9.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ggB9xn77.js";import{u as g}from"./useOsdkClient-IHshgW8j.js";import"./preload-helper-CgjhIKiB.js";import"./Table-CG40JWX8.js";import"./index-DLHnDDYV.js";import"./Dialog-BMr-kk7T.js";import"./cross-W_gu-k5J.js";import"./svgIconContainer-DL0f4zVF.js";import"./useBaseUiId-BduiX7-m.js";import"./InternalBackdrop-DSek19Mb.js";import"./composite-DnmLy1Yk.js";import"./index-Czlm1Cio.js";import"./index-DmwPHze2.js";import"./index-5tpEsUz9.js";import"./useEventCallback-C1lUOTp3.js";import"./SkeletonBar-COJfbiAQ.js";import"./LoadingCell-BHnENJfD.js";import"./ColumnConfigDialog-DLrdRfDT.js";import"./DraggableList-ClAdpW9r.js";import"./search-Dfb92URe.js";import"./Input-m4NvHU99.js";import"./useControlled-D_wxWQiO.js";import"./Button-BGD9VvG8.js";import"./small-cross-Dr1GEPUD.js";import"./ActionButton-BrQB1W26.js";import"./Checkbox-BjVyekTl.js";import"./useValueChanged-ciY3IUlT.js";import"./CollapsiblePanel-CFux4x-H.js";import"./MultiColumnSortDialog-liyRDpcW.js";import"./MenuTrigger-BsP6FL4S.js";import"./CompositeItem-D9TRpIPa.js";import"./ToolbarRootContext-DmnnlMoA.js";import"./getDisabledMountTransitionStyles-BKsVeh9x.js";import"./getPseudoElementBounds-BT_PONuM.js";import"./chevron-down-Defp8KA-.js";import"./index-oQs3Ep3f.js";import"./error-r1aNeJUF.js";import"./BaseCbacBanner-BsOXdwJ3.js";import"./makeExternalStore-CQVb-Jjn.js";import"./Tooltip-CFccCkAV.js";import"./PopoverPopup-Dt-LXHdl.js";import"./debounce-CoGZo14Z.js";import"./tick-C-Ai1Rfc.js";import"./DropdownField-BFwJYvJy.js";import"./useDebouncedCallback-Dwlualwj.js";import"./withOsdkMetrics-D8uoMkfq.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
