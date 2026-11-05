import{j as r}from"./iframe-B1dY-uMG.js";import{O as b}from"./object-table-CvecTQF5.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D9Iavmrx.js";import{u as g}from"./useOsdkClient-wEoel6XM.js";import"./preload-helper-CsaNr_BP.js";import"./Table-CIC0jyyL.js";import"./index-J8POe0xc.js";import"./Dialog-C3vgrSIv.js";import"./cross-CGzVaZsI.js";import"./svgIconContainer-Hqh_F8lK.js";import"./useBaseUiId-BEMvDf4X.js";import"./InternalBackdrop-kXRP9i2Q.js";import"./composite-DafZoXqK.js";import"./index-DfE0OqSo.js";import"./index-De6BIYNw.js";import"./index-v0K9-PBP.js";import"./useEventCallback-Bxw2h9-8.js";import"./SkeletonBar-DdytvZtY.js";import"./LoadingCell-ElQ-L1kg.js";import"./ColumnConfigDialog-Dy_a0PBd.js";import"./DraggableList-LvcSAiE7.js";import"./search-NElMm_h6.js";import"./Input-Bow4iCTS.js";import"./useControlled-Q3FRIAaO.js";import"./Button-WD0YpcbL.js";import"./small-cross-DNXIHvDW.js";import"./ActionButton-evAWPmgm.js";import"./Checkbox-BLZb2wdW.js";import"./useValueChanged-OMxVTtNE.js";import"./CollapsiblePanel-Dxik0TAh.js";import"./MultiColumnSortDialog-DIi6uGpb.js";import"./MenuTrigger-D4C0_RsP.js";import"./CompositeItem-DJ7Q7uHL.js";import"./ToolbarRootContext-B2VcC1-l.js";import"./getDisabledMountTransitionStyles-DNBCt1sN.js";import"./getPseudoElementBounds-C1qwlXI7.js";import"./chevron-down-DfdYdGBP.js";import"./index-BxyuVSQw.js";import"./error-BzEZzAbM.js";import"./BaseCbacBanner-C2caImhq.js";import"./makeExternalStore-CS-gtHXP.js";import"./Tooltip-xVmFEZY1.js";import"./PopoverPopup-vg0eWmB0.js";import"./debounce-DLzjPmFs.js";import"./tick-C9npLudO.js";import"./DropdownField-BrITrwHx.js";import"./isEqual-ixVCBZxa.js";import"./withOsdkMetrics-DuwMRDrg.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
