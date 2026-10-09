import{j as r}from"./iframe-Dmb-mlzV.js";import{O as b}from"./object-table-BvPbr9V5.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-kq_13wtm.js";import{u as g}from"./useOsdkClient-DIHMDKUR.js";import"./preload-helper-MIGgaMld.js";import"./Table-DBxmMaHT.js";import"./index-Ds3o4atQ.js";import"./Dialog-Cx8yE6Zj.js";import"./cross-_swrXFsE.js";import"./svgIconContainer-DAFeyB5Y.js";import"./useBaseUiId-Bl-3cYCN.js";import"./InternalBackdrop-Ckq1He5X.js";import"./composite-6EKatbQT.js";import"./index-CP5aixwn.js";import"./index-qj8WLeK2.js";import"./index-BSTL75vv.js";import"./useEventCallback-BF2Zplqh.js";import"./SkeletonBar-Cl_UfBJ6.js";import"./LoadingCell-C0Ss7wVX.js";import"./ColumnConfigDialog-BcQK_pJk.js";import"./DraggableList-C6Z51B2x.js";import"./search-DMyFpELI.js";import"./Input-CBzkX4z8.js";import"./useControlled-BM7SnBgs.js";import"./Button-8xVTVGsk.js";import"./small-cross-CQzmVcPc.js";import"./ActionButton-BcxqHeYY.js";import"./Checkbox-CPQeqY_8.js";import"./useValueChanged-DaiSG_CT.js";import"./CollapsiblePanel-TUHNx-2l.js";import"./MultiColumnSortDialog-D3guv5lw.js";import"./MenuTrigger-BC5LGWiT.js";import"./CompositeItem-BWXXLF3M.js";import"./ToolbarRootContext-pJcR2hxd.js";import"./getDisabledMountTransitionStyles-CxV8SjgV.js";import"./getPseudoElementBounds-ZV-MtXgM.js";import"./chevron-down-BZ7oFKmu.js";import"./index-DZas1VAi.js";import"./error-XRi8aH0l.js";import"./BaseCbacBanner-B6NVk--o.js";import"./makeExternalStore-gkjC6p4e.js";import"./Tooltip-DA3P9wam.js";import"./PopoverPopup-CXUJ3lCx.js";import"./debounce-DOzDLznc.js";import"./tick-CFwIKfat.js";import"./DropdownField-DuGjp-tV.js";import"./isEqual-BPWMISy8.js";import"./withOsdkMetrics-CiUTqFkS.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
