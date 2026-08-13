import{j as r}from"./iframe-DqbKZIsj.js";import{O as b}from"./object-table-CR-UP_kA.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CzcJ88pc.js";import{u as g}from"./useOsdkClient-QdLqV_Hm.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BaHtU0D_.js";import"./index-CVHMDurZ.js";import"./Dialog-Cv8zaBKu.js";import"./cross-Z2gUdKwX.js";import"./svgIconContainer-C4ng68oA.js";import"./useBaseUiId-BxNdDlhM.js";import"./InternalBackdrop-BejVrM6e.js";import"./composite-CX6gxRms.js";import"./index-DtlYlCBm.js";import"./index-BUCimpxE.js";import"./index-aYLuQAZl.js";import"./useEventCallback-LvBJYhlK.js";import"./SkeletonBar-DhzNvacg.js";import"./LoadingCell-CDhooj-2.js";import"./ColumnConfigDialog-BKZebYiT.js";import"./DraggableList-BwF4LDSf.js";import"./search-ufs3MxrA.js";import"./Input-DmzqPdUu.js";import"./useControlled-C0WeE-L2.js";import"./Button-BC-fUx3I.js";import"./small-cross-CsjkfVfk.js";import"./ActionButton-DHfZ5rN_.js";import"./Checkbox-30y4v_I4.js";import"./useValueChanged-DHt_F6Hq.js";import"./CollapsiblePanel-7ZJCLX4Q.js";import"./MultiColumnSortDialog-7cpJmSbW.js";import"./MenuTrigger-Cnb-E0TQ.js";import"./CompositeItem-D-1eywNB.js";import"./ToolbarRootContext-oWhh6x6s.js";import"./getDisabledMountTransitionStyles-DvpJWcms.js";import"./getPseudoElementBounds-2xfbxDVQ.js";import"./chevron-down-B6ifOWAI.js";import"./index-BAbFdJDq.js";import"./error-Deq2jp5x.js";import"./BaseCbacBanner-DZtkZFYO.js";import"./makeExternalStore-u9ldSa0C.js";import"./Tooltip-brJy3d_r.js";import"./PopoverPopup-BRb7_hfX.js";import"./toNumber-CyExNU-I.js";import"./tick-CwDsMdmM.js";import"./DropdownField-4Su-OStc.js";import"./withOsdkMetrics-BY3qMARX.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,Te={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const je=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,je as __namedExportsOrder,Te as default};
