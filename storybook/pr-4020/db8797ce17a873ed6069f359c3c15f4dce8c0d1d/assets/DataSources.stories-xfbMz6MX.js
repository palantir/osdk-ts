import{j as r}from"./iframe-xaYq_0YR.js";import{O as b}from"./object-table-AsjdrsJY.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CdjQ9nyz.js";import{u as g}from"./useOsdkClient-SxgRcysC.js";import"./preload-helper-CtEamZCu.js";import"./Table-BtBCLADu.js";import"./index-BAZUgVLK.js";import"./Dialog-DjzaMP01.js";import"./cross-BYWrVYOR.js";import"./svgIconContainer-B7c-1n-U.js";import"./useBaseUiId-CuYx4u3b.js";import"./InternalBackdrop-DGDqVAbo.js";import"./composite-CLd-Xsnk.js";import"./index-CyyrZFiN.js";import"./index-DF2Gn0NH.js";import"./index-DP9PCb3S.js";import"./useEventCallback-PLoii0z9.js";import"./SkeletonBar-DOvs9Ogk.js";import"./LoadingCell-Dr03zqDl.js";import"./ColumnConfigDialog-8A_bgKtY.js";import"./DraggableList-BhkpGpNV.js";import"./search-CSNqrmY1.js";import"./Input-DH1br5He.js";import"./useControlled-Dxi7lg4n.js";import"./Button-DeJ4BDKP.js";import"./small-cross-CMj_rk0B.js";import"./ActionButton-Pylu-ep_.js";import"./Checkbox-_PBPSJCl.js";import"./useValueChanged-CXh9zAke.js";import"./CollapsiblePanel-DT_VkLtR.js";import"./MultiColumnSortDialog-BU0GAb_6.js";import"./MenuTrigger-DWCTdmWV.js";import"./CompositeItem-BRCxLN7a.js";import"./ToolbarRootContext-BsrWQvwk.js";import"./getDisabledMountTransitionStyles-CYDL5wfQ.js";import"./getPseudoElementBounds-CNTTaqKi.js";import"./chevron-down-C-g4LLea.js";import"./index-CnactCyz.js";import"./error-C61gPazY.js";import"./BaseCbacBanner-BMf-_ldK.js";import"./makeExternalStore-BQ-WZB7-.js";import"./Tooltip-CRRIRYeo.js";import"./PopoverPopup-KIkgahna.js";import"./debounce-MHGPLv4v.js";import"./tick--__R7rUv.js";import"./DropdownField-Cy43Eyay.js";import"./isEqual-qRCnD2AV.js";import"./withOsdkMetrics-Cry6aqA_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
