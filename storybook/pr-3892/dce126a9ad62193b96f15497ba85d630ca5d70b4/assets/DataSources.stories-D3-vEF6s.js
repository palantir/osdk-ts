import{j as r}from"./iframe-Cjl6pIXM.js";import{O as b}from"./object-table-C5wUUf6H.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dw3r22pO.js";import{u as g}from"./useOsdkClient-CO1OiFv7.js";import"./preload-helper-ezBh--Yr.js";import"./Table-HtOX_Zds.js";import"./index-nWF7o5I3.js";import"./Dialog-vaNoy1Ni.js";import"./cross-C6Wnpl4f.js";import"./svgIconContainer-BIGcTem8.js";import"./useBaseUiId-CIUrQjM5.js";import"./InternalBackdrop-E6QkGXBh.js";import"./composite-CSFuaGEl.js";import"./index-CvQTdrcx.js";import"./index-wBonjv3U.js";import"./index-B8TidmZn.js";import"./useEventCallback-Be4lFJqY.js";import"./SkeletonBar-C6XzUOHz.js";import"./LoadingCell-B4cWFoWh.js";import"./ColumnConfigDialog-DMVfZVMY.js";import"./DraggableList-w1sfBb1U.js";import"./search-B0QVdf5C.js";import"./Input-By7ENoXN.js";import"./useControlled-CLbZj6xc.js";import"./Button-Dq2yQQ1D.js";import"./small-cross-DQntl9zq.js";import"./ActionButton-CVqXGMBk.js";import"./Checkbox-B09x16pJ.js";import"./useValueChanged-CWal0wZX.js";import"./CollapsiblePanel-D_NOfXCt.js";import"./MultiColumnSortDialog-KQSySUEb.js";import"./MenuTrigger-mVDB8gok.js";import"./CompositeItem-BdjQ3x20.js";import"./ToolbarRootContext-YT_m9B5L.js";import"./getDisabledMountTransitionStyles-DLd4dts7.js";import"./getPseudoElementBounds-2s7Inf1W.js";import"./chevron-down-z7gQuHi2.js";import"./index-DxUk46hk.js";import"./error-BeMd-CqJ.js";import"./BaseCbacBanner-DvKnURtP.js";import"./makeExternalStore--4ZQvYdt.js";import"./Tooltip-Dqwh4OEI.js";import"./PopoverPopup-B3bKQ-2O.js";import"./debounce-Co3YNhbE.js";import"./tick-DK_NXSKS.js";import"./DropdownField-BKwKAV3h.js";import"./isEqual-CnpYb7jD.js";import"./withOsdkMetrics-6LH9jlrw.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
