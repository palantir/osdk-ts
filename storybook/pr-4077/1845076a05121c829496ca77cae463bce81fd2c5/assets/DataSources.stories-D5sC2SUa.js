import{j as r}from"./iframe-BcWEdWfB.js";import{O as b}from"./object-table-CcJJKdxt.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CXrtBhgq.js";import{u as g}from"./useOsdkClient-Cb16LKZK.js";import"./preload-helper-CVa1rIJ3.js";import"./Table-DyBmPdC7.js";import"./index-CwkFMZjv.js";import"./Dialog-D2ZW1Zu6.js";import"./cross-BZ3hgBtX.js";import"./svgIconContainer-D3wylWJt.js";import"./useBaseUiId-DAACsJ_e.js";import"./InternalBackdrop-CE9SLGDS.js";import"./composite-C2TbRxj5.js";import"./index-oIyMgkgm.js";import"./index-cVAitoMW.js";import"./index-BtKdi8uW.js";import"./useEventCallback-ZJD0lbuw.js";import"./SkeletonBar-vf1eVt6J.js";import"./LoadingCell-BTx_PCC4.js";import"./ColumnConfigDialog-bpLpuO55.js";import"./DraggableList-aXFULAtF.js";import"./search-BS0hsyoc.js";import"./Input-BARy-z-s.js";import"./useControlled-BOuSIVI5.js";import"./Button-BuWDqgqc.js";import"./small-cross-BoP5SHxC.js";import"./ActionButton-BIm8wQj8.js";import"./Checkbox-DuWxrP3q.js";import"./useValueChanged-DOMZUlbB.js";import"./CollapsiblePanel-VV5j-F5g.js";import"./MultiColumnSortDialog-DfSAVFI7.js";import"./MenuTrigger-B3hzon_A.js";import"./CompositeItem-3OABFBu2.js";import"./ToolbarRootContext-C3UpIzPe.js";import"./getDisabledMountTransitionStyles-2lA8cPr-.js";import"./getPseudoElementBounds-ykQ7nCp3.js";import"./chevron-down-BTTnF4Fu.js";import"./index-CGjIfcSI.js";import"./error-Dx8WDHU2.js";import"./BaseCbacBanner-VrNUXLoJ.js";import"./makeExternalStore-DAxtPfWd.js";import"./Tooltip-BwYW0r-w.js";import"./PopoverPopup-C8yuAyjI.js";import"./debounce-B-M85eRT.js";import"./tick-DjnJsHe3.js";import"./DropdownField-B8TqC271.js";import"./isEqual-Bk9KFbCG.js";import"./withOsdkMetrics-YvSA4_Vm.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
