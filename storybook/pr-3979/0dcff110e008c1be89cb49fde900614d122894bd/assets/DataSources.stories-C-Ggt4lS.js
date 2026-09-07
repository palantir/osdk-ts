import{j as r}from"./iframe-vkoUEtx2.js";import{O as b}from"./object-table-D9bcFwrc.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DAykDIy6.js";import{u as g}from"./useOsdkClient-1czjWT3K.js";import"./preload-helper-CY67mq_z.js";import"./Table-srNtWwan.js";import"./index-CnABB2cx.js";import"./Dialog-CFGI2PWi.js";import"./cross-DTB4NCzU.js";import"./svgIconContainer-CTvbg6Kf.js";import"./useBaseUiId-Cn9qEQr-.js";import"./InternalBackdrop-DvtCmbub.js";import"./composite-CNJa8zsy.js";import"./index-Cg_Ca4SJ.js";import"./index-CTa-81VF.js";import"./index-BzU6qHej.js";import"./useEventCallback-CxBnJXYy.js";import"./SkeletonBar-r9iUkffY.js";import"./LoadingCell-B6F1Eu1_.js";import"./ColumnConfigDialog-DTtwDBeO.js";import"./DraggableList-CvZhWeAl.js";import"./search-BJuRvFPW.js";import"./Input-DILwrgB_.js";import"./useControlled-BjJao8Of.js";import"./Button-yBKPIwwM.js";import"./small-cross-CEVVBQcQ.js";import"./ActionButton-DC04mOud.js";import"./Checkbox-C_r46pP6.js";import"./useValueChanged-BU9oYbVe.js";import"./CollapsiblePanel-DCq2pf_O.js";import"./MultiColumnSortDialog-BBluglFz.js";import"./MenuTrigger-CnwTa3Dw.js";import"./CompositeItem-B2YXnViz.js";import"./ToolbarRootContext-DG-oSyQ3.js";import"./getDisabledMountTransitionStyles-t_o23Sl1.js";import"./getPseudoElementBounds-DQfoju0G.js";import"./chevron-down-B0GhQ5QL.js";import"./index-CkB6dCmi.js";import"./error-WzD0MOfh.js";import"./BaseCbacBanner-DTwYXkXJ.js";import"./makeExternalStore-BZrOFzyq.js";import"./Tooltip-BP2G_ScW.js";import"./PopoverPopup-DmfHqgAT.js";import"./debounce-B3rNx3B-.js";import"./tick-OUtJmbiv.js";import"./DropdownField-B5znI0v8.js";import"./isEqual-Ca1oPQqE.js";import"./withOsdkMetrics-1oalfrhO.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
