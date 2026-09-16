import{j as r}from"./iframe-EpH4H8Ct.js";import{O as b}from"./object-table-DWYlyXh4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-znwTcq0m.js";import{u as g}from"./useOsdkClient-Df-lYPH1.js";import"./preload-helper-AInD9Bcq.js";import"./Table-COuN_wlR.js";import"./index-6wkuS9kk.js";import"./Dialog-1NHwSkrj.js";import"./cross-Bw1kg8R1.js";import"./svgIconContainer-BEULmRQq.js";import"./useBaseUiId-B53jZkpD.js";import"./InternalBackdrop-BVHPaONx.js";import"./composite-CXo_dnRM.js";import"./index-Dy-Nc8BB.js";import"./index-5GEbdtwp.js";import"./index-BQgIKsZn.js";import"./useEventCallback-DNP1HUKE.js";import"./SkeletonBar-Cwoxu6yL.js";import"./LoadingCell-CfUzZulW.js";import"./ColumnConfigDialog-CyRYuEAz.js";import"./DraggableList-CXgZh0ko.js";import"./search-Bdehc4Bq.js";import"./Input-DNhi3I7C.js";import"./useControlled-D6NLbg_O.js";import"./Button-BXHz7yPF.js";import"./small-cross--Yq5_IWh.js";import"./ActionButton-BG7PpZze.js";import"./Checkbox-N8sASeun.js";import"./useValueChanged-CdM5uEF8.js";import"./CollapsiblePanel-lqnKFpJk.js";import"./MultiColumnSortDialog-DLqVf03q.js";import"./MenuTrigger-CX9dMlco.js";import"./CompositeItem-DzD_vpNX.js";import"./ToolbarRootContext-BhZagEjX.js";import"./getDisabledMountTransitionStyles-Vp1URACM.js";import"./getPseudoElementBounds-C0OS-1z6.js";import"./chevron-down-B3Hf5n4h.js";import"./index-Dva8VjAa.js";import"./error-CwB_EWnJ.js";import"./BaseCbacBanner-CPNKIQw_.js";import"./makeExternalStore-BOo8e2Do.js";import"./Tooltip-DZvrsB4L.js";import"./PopoverPopup-AU4um7RM.js";import"./debounce-PtscUFWK.js";import"./tick-BpAUUczH.js";import"./DropdownField-DQrZT-V6.js";import"./isEqual-DQIzKkQH.js";import"./withOsdkMetrics-Cj7SQvcU.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
