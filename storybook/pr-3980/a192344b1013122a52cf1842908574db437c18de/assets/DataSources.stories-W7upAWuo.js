import{j as r}from"./iframe-B5oWllHx.js";import{O as b}from"./object-table-B05mEt7M.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-WcRBI9hw.js";import{u as g}from"./useOsdkClient-BfV2im4Z.js";import"./preload-helper-AL0pxeKM.js";import"./Table-Bu8O3QIa.js";import"./index-E8TGJhq9.js";import"./Dialog-BOG2Z9MM.js";import"./cross-D0UFXm2L.js";import"./svgIconContainer-DmiPRoPR.js";import"./useBaseUiId-B80HrYnI.js";import"./InternalBackdrop-DKUVP1zM.js";import"./composite-CxNKGIFj.js";import"./index-DpBh8txy.js";import"./index-1oTvxXM7.js";import"./index-jVYij_3i.js";import"./useEventCallback-DSNFNTa2.js";import"./SkeletonBar-BNUNe2WU.js";import"./LoadingCell-BEklDdAr.js";import"./ColumnConfigDialog-Qb7pdXIY.js";import"./DraggableList-mKUTAiS3.js";import"./search-CweXIS3_.js";import"./Input-CHGFhXTJ.js";import"./useControlled-C1shr7sK.js";import"./Button-DESnIp7_.js";import"./small-cross-BVwuTZcs.js";import"./ActionButton-CdO9nLoY.js";import"./Checkbox-zZ0CLjot.js";import"./useValueChanged-DRZa34Nq.js";import"./CollapsiblePanel-CZdxwGFg.js";import"./MultiColumnSortDialog-Bq1IcXrp.js";import"./MenuTrigger-BWSxRSdS.js";import"./CompositeItem-CBT7H_tD.js";import"./ToolbarRootContext-CY1iwJN5.js";import"./getDisabledMountTransitionStyles-v16MeVM9.js";import"./getPseudoElementBounds-CYSv1bOf.js";import"./chevron-down-843gHNxT.js";import"./index-DKR3YkoY.js";import"./error-FAfGOJk1.js";import"./BaseCbacBanner-D2yf72Cs.js";import"./makeExternalStore-4UJfUQkh.js";import"./Tooltip-DRnqt9Qa.js";import"./PopoverPopup-DZrQF8FG.js";import"./debounce-D3faGUE7.js";import"./tick-B3M0MzLY.js";import"./DropdownField-emaGDLLt.js";import"./isEqual-BV--_VPI.js";import"./withOsdkMetrics-Ct5oqpuP.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
