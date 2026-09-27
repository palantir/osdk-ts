import{j as r}from"./iframe-Ced8wIim.js";import{O as b}from"./object-table-CWR5TEG9.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-7ZmxlJZ3.js";import{u as g}from"./useOsdkClient-DWRmKvFn.js";import"./preload-helper-BvnlfMzD.js";import"./Table-C9hx4b9U.js";import"./index-DwlP8Kq2.js";import"./Dialog-Bdr_MjQD.js";import"./cross-C1ezeDDh.js";import"./svgIconContainer-_H4YWiIz.js";import"./useBaseUiId-ZzsV-V0Z.js";import"./InternalBackdrop-BEW1kLJE.js";import"./composite-gyhDmABu.js";import"./index-LDJzIvQD.js";import"./index-Cm78izMo.js";import"./index-tRtnayVT.js";import"./useEventCallback-nDEIaijr.js";import"./SkeletonBar-EYFzh_lb.js";import"./LoadingCell-DPDDugg3.js";import"./ColumnConfigDialog-k7B7ez-f.js";import"./DraggableList-BtLLHXzb.js";import"./search-QSUOXDqi.js";import"./Input-KnIMm_iE.js";import"./useControlled-Bx5lxC0c.js";import"./Button-D2RSl0IU.js";import"./small-cross-CL1fxAVq.js";import"./ActionButton-DrbHFVEC.js";import"./Checkbox-DjpZNu9Z.js";import"./useValueChanged-KRQENGkA.js";import"./CollapsiblePanel-CcL0_Of9.js";import"./MultiColumnSortDialog-DqBVCBrx.js";import"./MenuTrigger-CxCj0ZGe.js";import"./CompositeItem-CKE15s8h.js";import"./ToolbarRootContext-BjCMra_B.js";import"./getDisabledMountTransitionStyles-BYykhR9M.js";import"./getPseudoElementBounds-FBWwExr3.js";import"./chevron-down-DpwNucWD.js";import"./index-mKFRvtOv.js";import"./error-yQjggD5T.js";import"./BaseCbacBanner-CNisjaH5.js";import"./makeExternalStore-Cb-8iveq.js";import"./Tooltip-DT2igpMI.js";import"./PopoverPopup-D6vxVy5_.js";import"./debounce-DSdlDxeH.js";import"./tick-DgJ5ryvj.js";import"./DropdownField-jydwoQac.js";import"./isEqual-pwdPx3XZ.js";import"./withOsdkMetrics-DKNE68LV.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
