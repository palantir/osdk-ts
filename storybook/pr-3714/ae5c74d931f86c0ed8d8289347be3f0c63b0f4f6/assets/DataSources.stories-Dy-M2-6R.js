import{j as r}from"./iframe-Dhbwn5Pb.js";import{O as b}from"./object-table-UrEffzOv.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D4LpDDNx.js";import{u as g}from"./useOsdkClient-BHE0QTWa.js";import"./preload-helper-bx9mJ_N7.js";import"./Table-B3YRrRlZ.js";import"./index-beyiGhUz.js";import"./Dialog-focCsRQJ.js";import"./cross-Oe6Btsjt.js";import"./svgIconContainer-DQD_ILj4.js";import"./useBaseUiId-B8Sr3cV5.js";import"./InternalBackdrop-yGDTZBSI.js";import"./composite-DZfjqgHR.js";import"./index-BVg28YTW.js";import"./index-DujXq81U.js";import"./index-DTSqUghB.js";import"./useEventCallback--vNLEjXF.js";import"./SkeletonBar-DWQCheBK.js";import"./LoadingCell-DrMFjSlt.js";import"./ColumnConfigDialog-DxtBsJsS.js";import"./DraggableList-Tv392NfW.js";import"./search-1Sqhs6Wh.js";import"./Input-CbPVVR1a.js";import"./useControlled-C4j_XYHH.js";import"./Button-BRPJGwxW.js";import"./small-cross-DuhAL6sr.js";import"./ActionButton-B714-oEm.js";import"./Checkbox-Bh2TmZNs.js";import"./useValueChanged-BcgYf_g-.js";import"./CollapsiblePanel-CGEmJ7pB.js";import"./MultiColumnSortDialog-BG09muaJ.js";import"./MenuTrigger-Hd_x8Ak_.js";import"./CompositeItem-BvS25tKG.js";import"./ToolbarRootContext-DI7_yhQw.js";import"./getDisabledMountTransitionStyles-C1EOoGPU.js";import"./getPseudoElementBounds-DQR1f6L-.js";import"./chevron-down-D6HRZEJG.js";import"./index-CSnnu_0b.js";import"./error-DfBoM4j6.js";import"./BaseCbacBanner-DotI8txE.js";import"./makeExternalStore-BGED5qiE.js";import"./Tooltip-DfNwoZw4.js";import"./PopoverPopup-CF_q1uQg.js";import"./debounce-DvsBo_aI.js";import"./tick-BaNVK8r4.js";import"./DropdownField-CafXZJuf.js";import"./isEqual-BM_17_wf.js";import"./withOsdkMetrics-ptN3vt6M.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
