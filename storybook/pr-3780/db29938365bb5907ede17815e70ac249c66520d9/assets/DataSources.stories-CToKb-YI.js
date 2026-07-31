import{j as r}from"./iframe-CstWj4ez.js";import{O as b}from"./object-table-D7hvvrF-.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cqe5pZBW.js";import{u as g}from"./useOsdkClient-C1tS2z5J.js";import"./preload-helper-BCM2Mrwh.js";import"./Table-Cb3VnGLM.js";import"./index-BKtj_CIh.js";import"./Dialog-B2ZfHIXA.js";import"./cross-6T7z6U36.js";import"./svgIconContainer-BsM_A13O.js";import"./useBaseUiId-DZ_WZ3fx.js";import"./InternalBackdrop-C-LNt-lH.js";import"./composite-BUmYDl_r.js";import"./index-BqvUKCfb.js";import"./index-BQ4WMtZt.js";import"./index-RA07jDgR.js";import"./useEventCallback-Dee24_X-.js";import"./SkeletonBar-C0XxhtHg.js";import"./LoadingCell-DIEG5nbG.js";import"./ColumnConfigDialog-DPUMBc5m.js";import"./DraggableList-u9hTx2SB.js";import"./search-DhbfxSt8.js";import"./Input-oNr1j4J9.js";import"./useControlled-C4IcZtnx.js";import"./isEqual-DfwxU_vW.js";import"./isObject-ChnDkpR1.js";import"./Button-BKds_g4a.js";import"./ActionButton-DxKWF70L.js";import"./Checkbox-C96hH_f4.js";import"./useValueChanged-DBzN32tG.js";import"./CollapsiblePanel-BRIZbe3n.js";import"./MultiColumnSortDialog-bc7y89Mr.js";import"./MenuTrigger-D8OrdQfp.js";import"./CompositeItem-CQRAlint.js";import"./ToolbarRootContext-CozoeZB6.js";import"./getDisabledMountTransitionStyles-D9tKl1ns.js";import"./getPseudoElementBounds-vxrIWz2n.js";import"./chevron-down-CG1jYwFN.js";import"./index-BZ-wGrZ-.js";import"./error-Ddbcc8Kd.js";import"./BaseCbacBanner-DwTii65W.js";import"./makeExternalStore-v46grpUp.js";import"./Tooltip-d_vTBVW5.js";import"./PopoverPopup-fwfs0Gd4.js";import"./toNumber-1ndxpNJ-.js";import"./tick-CxKwPCHU.js";import"./DropdownField-C26FrhNO.js";import"./withOsdkMetrics-q3McYtTu.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
