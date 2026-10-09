import{j as r}from"./iframe-CZ6kIwVs.js";import{O as b}from"./object-table-DUTK7ErW.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BvHwFAcf.js";import{u as g}from"./useOsdkClient-D_Xa4Rm7.js";import"./preload-helper-7ZMJfvLO.js";import"./Table-ClJWP7oZ.js";import"./index-DI8fXOjY.js";import"./Dialog-C2Fh148t.js";import"./cross-D1S37vKD.js";import"./svgIconContainer-DnYA5NkM.js";import"./useBaseUiId-C8GyANar.js";import"./InternalBackdrop-CG-AIdNq.js";import"./composite-ZguSvKQK.js";import"./index-D-O5Mu3x.js";import"./index-CeIvWQQV.js";import"./index-Sa9k0vw4.js";import"./useEventCallback-AXc9OhMC.js";import"./SkeletonBar-DirsOHoC.js";import"./LoadingCell-DWGeO2Vc.js";import"./ColumnConfigDialog-z8uEyuDJ.js";import"./DraggableList-DY7O392e.js";import"./search-BEog5Q0_.js";import"./Input-BNiQQ7Yq.js";import"./useControlled-DYYKJrdL.js";import"./Button-D2YNSXqx.js";import"./small-cross-BRCq_Kda.js";import"./ActionButton-CCbXIhyD.js";import"./Checkbox-vpsJYbE_.js";import"./useValueChanged-BFS0ZGwF.js";import"./CollapsiblePanel-lqHD1Tly.js";import"./MultiColumnSortDialog-CwX6ASC_.js";import"./MenuTrigger-DahAPyz2.js";import"./CompositeItem-C5Mndviw.js";import"./ToolbarRootContext-DwX-_42A.js";import"./getDisabledMountTransitionStyles-bhu6Mdmh.js";import"./getPseudoElementBounds-BCP_KMb6.js";import"./chevron-down-CfJcExH9.js";import"./index-CRcSFsCM.js";import"./error-Be3f2oAD.js";import"./BaseCbacBanner-DxnCPOHJ.js";import"./makeExternalStore-CcH4sGc5.js";import"./Tooltip-CWcrOYKW.js";import"./PopoverPopup-5xXF3ZfI.js";import"./debounce-ZXxDT22C.js";import"./tick-ClDAkRZz.js";import"./DropdownField-CWvFDQGS.js";import"./isEqual-B__f9IMX.js";import"./withOsdkMetrics-CJa04cyG.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
