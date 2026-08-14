import{j as r}from"./iframe-BiXi4-LQ.js";import{O as b}from"./object-table-BoM_3lLC.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DvuWodcl.js";import{u as g}from"./useOsdkClient-Bnu-sLDc.js";import"./preload-helper-yAegVG8x.js";import"./Table-BTrcdefb.js";import"./index-BrYb8iNp.js";import"./Dialog-CWqgEav3.js";import"./cross-D3R_Vc26.js";import"./svgIconContainer-DZPF1Vn6.js";import"./useBaseUiId-Ck_ISxlB.js";import"./InternalBackdrop-ChM2iaMT.js";import"./composite-CLFfo09d.js";import"./index-M3K30U7J.js";import"./index-DWweQBbd.js";import"./index-CSGf5OT9.js";import"./useEventCallback-CnLANeXS.js";import"./SkeletonBar-8k7TXRww.js";import"./LoadingCell-DydKhr1j.js";import"./ColumnConfigDialog-DL0dwxW0.js";import"./DraggableList-C9qm1CxU.js";import"./search-BptKOPUi.js";import"./Input-7j2qVm5H.js";import"./useControlled-c9kxJqxt.js";import"./Button-XL1kbTRa.js";import"./small-cross-DPmm3wJY.js";import"./ActionButton-BmQgn66c.js";import"./Checkbox-DoVKPerL.js";import"./useValueChanged-0cXF6J1G.js";import"./CollapsiblePanel-LOJt-gO8.js";import"./MultiColumnSortDialog-AmSNJAjI.js";import"./MenuTrigger-DA9yrfWI.js";import"./CompositeItem-BXqEZ6rt.js";import"./ToolbarRootContext-BQjlRsif.js";import"./getDisabledMountTransitionStyles-DJOTEwhN.js";import"./getPseudoElementBounds-CPcGbPee.js";import"./chevron-down-ClJPVsRO.js";import"./index-CCDXSv--.js";import"./error-D3sbkdzM.js";import"./BaseCbacBanner-AgCr4pEU.js";import"./makeExternalStore-DC5BX6mU.js";import"./Tooltip-BD26QkYH.js";import"./PopoverPopup-Duw-fJrv.js";import"./debounce-BmMSNYoi.js";import"./tick-BDqjzO-F.js";import"./DropdownField-DOCpdzo4.js";import"./isEqual-D4gaMX9z.js";import"./withOsdkMetrics-DsR7pBBW.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
