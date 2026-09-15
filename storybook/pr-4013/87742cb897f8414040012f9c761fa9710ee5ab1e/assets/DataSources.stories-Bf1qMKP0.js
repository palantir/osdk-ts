import{j as r}from"./iframe-B-0GKdAh.js";import{O as b}from"./object-table-4MXRKBvo.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CzReaTe7.js";import{u as g}from"./useOsdkClient-C5XwldCE.js";import"./preload-helper-BxGs137T.js";import"./Table-BGrCnd1u.js";import"./index-CeTv2GEb.js";import"./Dialog-DHj971QP.js";import"./cross-ysBsIoNl.js";import"./svgIconContainer-D680pERF.js";import"./useBaseUiId-CuPeP6_V.js";import"./InternalBackdrop-Dx-S1k2g.js";import"./composite-LajQ-4YU.js";import"./index-B28VTjrg.js";import"./index-Bvaqc28t.js";import"./index-C_O2JK4N.js";import"./useEventCallback-C4lws8eU.js";import"./SkeletonBar-BCo3EIVq.js";import"./LoadingCell-BIQAzAUj.js";import"./ColumnConfigDialog-BIKG8kyF.js";import"./DraggableList-CzmIkfU7.js";import"./search-wHoqdl81.js";import"./Input-m2Y-zZM0.js";import"./useControlled-CvXSRSaz.js";import"./Button-DglVf80r.js";import"./small-cross-D9tlZ127.js";import"./ActionButton-BL9rXH5v.js";import"./Checkbox-C5FmCcuS.js";import"./useValueChanged-CJf6xuTk.js";import"./CollapsiblePanel-uVUj59mq.js";import"./MultiColumnSortDialog-BRMpCFl2.js";import"./MenuTrigger-BM4AmwEZ.js";import"./CompositeItem-nISr-y05.js";import"./ToolbarRootContext-CwO2Drzb.js";import"./getDisabledMountTransitionStyles-D6yAx4Zz.js";import"./getPseudoElementBounds-0hkPmral.js";import"./chevron-down-CJ1qMpgz.js";import"./index-CChF4OqZ.js";import"./error-z9s112Ur.js";import"./BaseCbacBanner-DwijsOT0.js";import"./makeExternalStore-CNR6geF1.js";import"./Tooltip-DTEpkTPa.js";import"./PopoverPopup-C6laaofs.js";import"./debounce-D7txzNNR.js";import"./tick-C2VLoN1r.js";import"./DropdownField-BT9Qh08E.js";import"./isEqual-C0dOwFPi.js";import"./withOsdkMetrics-DXKy8BiX.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
