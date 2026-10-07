import{j as r}from"./iframe-BV8H6lRC.js";import{O as b}from"./object-table-C6lRfVfE.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-a_0RCS5-.js";import{u as g}from"./useOsdkClient-DySK7kNm.js";import"./preload-helper-FghdvxpP.js";import"./Table-JaytBHn3.js";import"./index-DU9RRfrb.js";import"./Dialog-DvRIB5zl.js";import"./cross-D92mjgqE.js";import"./svgIconContainer-B2TLggqZ.js";import"./useBaseUiId-Bch4RCf-.js";import"./InternalBackdrop-DFn2kFuw.js";import"./composite-6jNJwuj9.js";import"./index-fE68LmNS.js";import"./index-ByctvPor.js";import"./index-xKI30ir_.js";import"./useEventCallback-ZwAzgc5q.js";import"./SkeletonBar-BcrwqPs9.js";import"./LoadingCell-BZ-ka11a.js";import"./ColumnConfigDialog-Dv0fubDw.js";import"./DraggableList-CHaV7Vg7.js";import"./search-BlhwHZiG.js";import"./Input-B3KKnPgU.js";import"./useControlled-DFgYtmw-.js";import"./Button-cZssApwN.js";import"./small-cross-CB3FdAHS.js";import"./ActionButton-v2nTt39b.js";import"./Checkbox-B4TDd9O8.js";import"./useValueChanged-Bqcd_ocF.js";import"./CollapsiblePanel-h5yRCfis.js";import"./MultiColumnSortDialog-CHYeqK8V.js";import"./MenuTrigger-B-EwXmEp.js";import"./CompositeItem-CfY4xOZ4.js";import"./ToolbarRootContext-B0zqLD7S.js";import"./getDisabledMountTransitionStyles-CaNIdVg_.js";import"./getPseudoElementBounds-B3RJWnEx.js";import"./chevron-down-CmiHvm8d.js";import"./index-BSOrQZ_c.js";import"./error-Bt7eKOT3.js";import"./BaseCbacBanner-CV_DEHlP.js";import"./makeExternalStore-DXngIb0h.js";import"./Tooltip-BGLVmsTF.js";import"./PopoverPopup-MAImkRcc.js";import"./debounce-CcLYKazv.js";import"./tick-M2SHJwUO.js";import"./DropdownField-DkGcdfin.js";import"./isEqual-DY2caHIP.js";import"./withOsdkMetrics-ybYt3TTQ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
