import{j as r}from"./iframe-C1uIQEe6.js";import{O as b}from"./object-table-CQ6hETlT.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C0mO7rMg.js";import{u as g}from"./useOsdkClient-DaGphxm9.js";import"./preload-helper-DF4UQXjd.js";import"./Table-Bw-bXIYd.js";import"./index-nY9pkPDF.js";import"./Dialog-q2FQFGgX.js";import"./cross-C9ubRsWO.js";import"./svgIconContainer-BGeGsGPX.js";import"./useBaseUiId-CeyDEbyZ.js";import"./InternalBackdrop-SMklbAKr.js";import"./composite-kICLPGef.js";import"./index-CRvA4CpE.js";import"./index-Bnj0fwTZ.js";import"./index-BtYb8cJb.js";import"./useEventCallback-Dwt0eF5D.js";import"./SkeletonBar-BOpTwsNy.js";import"./LoadingCell-x7gRA1du.js";import"./ColumnConfigDialog-DFXOYvRy.js";import"./DraggableList-BkVauiD1.js";import"./search-CfgnKZCI.js";import"./Input-Bqj-jOKY.js";import"./useControlled-BLqDTZmr.js";import"./Button-BJ7Nz25q.js";import"./small-cross-D02DqgT9.js";import"./ActionButton-p3LXST0-.js";import"./Checkbox-CQZf3jMi.js";import"./useValueChanged-Pi9Ael4a.js";import"./CollapsiblePanel-6McyaGtD.js";import"./MultiColumnSortDialog-DzGyWtDt.js";import"./MenuTrigger-BDQtQuY6.js";import"./CompositeItem-BvnjdHPq.js";import"./ToolbarRootContext-BwNqm28T.js";import"./getDisabledMountTransitionStyles-tyNaz73q.js";import"./getPseudoElementBounds-BvXQIwgX.js";import"./chevron-down-Bo5GDX8K.js";import"./index-BkXU4FNm.js";import"./error-Qui232U8.js";import"./BaseCbacBanner-CihzJWqL.js";import"./makeExternalStore-CD_wbIQr.js";import"./Tooltip-oCOCurFb.js";import"./PopoverPopup-Cm0zY3FO.js";import"./debounce-ClD17fgr.js";import"./tick-Cb96Z_mD.js";import"./DropdownField-Bs4L9M0h.js";import"./isEqual-nBMVAV20.js";import"./withOsdkMetrics-Dccwzuy3.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
