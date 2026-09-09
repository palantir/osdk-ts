import{j as r}from"./iframe-CMVepAJE.js";import{O as b}from"./object-table-DrYoEV5F.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DlkbybLu.js";import{u as g}from"./useOsdkClient-9-M1ms6x.js";import"./preload-helper-B-pat0t1.js";import"./Table-D1LPpzIv.js";import"./index-DjkhfCfT.js";import"./Dialog-UkIf-Cia.js";import"./cross-Bt6SdNHm.js";import"./svgIconContainer-Bbnic8gm.js";import"./useBaseUiId-DzJi2twx.js";import"./InternalBackdrop-D5ExGecl.js";import"./composite-BNbUAYfg.js";import"./index-DFWQdO8O.js";import"./index-D8Snt0rf.js";import"./index-tAYlbVzq.js";import"./useEventCallback-BNdTIoO0.js";import"./SkeletonBar-DMdShgvr.js";import"./LoadingCell-B_jbOxSN.js";import"./ColumnConfigDialog-D1fIMUYr.js";import"./DraggableList-C5Ja6789.js";import"./search-ByupdJIi.js";import"./Input-BrboKIWX.js";import"./useControlled-BNdmAelW.js";import"./Button-Rom60jiD.js";import"./small-cross-Daxd_o57.js";import"./ActionButton-7uiQn5bN.js";import"./Checkbox-C1ZQPvyX.js";import"./useValueChanged-2qNB1H9S.js";import"./CollapsiblePanel-DRHJsQ_R.js";import"./MultiColumnSortDialog-BViHg8Kr.js";import"./MenuTrigger-HlrGbgAx.js";import"./CompositeItem-DR4WY-BM.js";import"./ToolbarRootContext-qvOmnhBt.js";import"./getDisabledMountTransitionStyles-DeWLLfFW.js";import"./getPseudoElementBounds-CLKaAdce.js";import"./chevron-down-DvYjBW4w.js";import"./index-18i-4mqz.js";import"./error-BP38p0Wz.js";import"./BaseCbacBanner-xwrxkHCM.js";import"./makeExternalStore-CylZcwCT.js";import"./Tooltip-CpbJ4M8Z.js";import"./PopoverPopup-Db5oD-HC.js";import"./debounce-DwOMz3I5.js";import"./tick-OGu8ycnQ.js";import"./DropdownField-B3BsKGIg.js";import"./isEqual-CqojoX74.js";import"./withOsdkMetrics-fhlMSJmK.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
