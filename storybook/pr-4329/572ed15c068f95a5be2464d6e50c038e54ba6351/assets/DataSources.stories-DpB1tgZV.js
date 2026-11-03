import{j as r}from"./iframe-WKt3pp3u.js";import{O as b}from"./object-table-CeAM-xFj.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CpyQb2d4.js";import{u as g}from"./useOsdkClient-DCOM6Bqd.js";import"./preload-helper-C-2N1dom.js";import"./Table-DcYprFpJ.js";import"./index-Cn0NPQc9.js";import"./Dialog-BDkF5r6D.js";import"./cross-4ZdF9rso.js";import"./svgIconContainer-Dd6XoJmG.js";import"./useBaseUiId-KSUwx5Md.js";import"./InternalBackdrop-BtH0Ysif.js";import"./composite-B4lF1Gsb.js";import"./index-CyjL2alN.js";import"./index-CK4IlmQS.js";import"./index-DafvFaXh.js";import"./useEventCallback-BvXzRC06.js";import"./SkeletonBar-CsOoAcCP.js";import"./LoadingCell-x5OFViSJ.js";import"./ColumnConfigDialog-sgAUv_aj.js";import"./DraggableList-C2qJbBwZ.js";import"./search-Dn1087-G.js";import"./Input-Caz2RzvD.js";import"./useControlled-CFMpFbMm.js";import"./Button-cNgJCMyB.js";import"./small-cross-DAIM-tYh.js";import"./ActionButton-DoHs3WwA.js";import"./Checkbox-CbONRRnG.js";import"./useValueChanged-C-7bhyhT.js";import"./CollapsiblePanel-Dr3s6TPy.js";import"./MultiColumnSortDialog-9_MSS2z8.js";import"./MenuTrigger-BkVhitah.js";import"./CompositeItem-Bj3DFZfQ.js";import"./ToolbarRootContext-BEEAtmxq.js";import"./getDisabledMountTransitionStyles-CHcwnca1.js";import"./getPseudoElementBounds-Bwny5PcZ.js";import"./chevron-down-sDl6Q2Tv.js";import"./index-D0XVpPOf.js";import"./error-Cfg0wGHf.js";import"./BaseCbacBanner-D6JFbrjt.js";import"./makeExternalStore-S8Y7W4h4.js";import"./Tooltip-gNTiaPxS.js";import"./PopoverPopup-ZW8wbg7e.js";import"./debounce-JIbAFHw4.js";import"./tick-C6QdtsXi.js";import"./DropdownField-CYa_9fL1.js";import"./isEqual-uOZoXSsZ.js";import"./withOsdkMetrics-D4VhY3gv.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
