import{j as r}from"./iframe-iYC6vAB_.js";import{O as b}from"./object-table-B7XVPyF5.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BJJlcPP2.js";import{u as g}from"./useOsdkClient-KtJ7es4q.js";import"./preload-helper-Br5mua1v.js";import"./Table-rO63C4On.js";import"./index-DpOo1606.js";import"./Dialog-DW6s5zNf.js";import"./cross-BrbS3Icp.js";import"./svgIconContainer-D-ZasT0L.js";import"./useBaseUiId-B9eyS0D0.js";import"./InternalBackdrop-7PMuJeV1.js";import"./composite-v77FsArx.js";import"./index-QX0Uv_MK.js";import"./index-Dz2p1JfI.js";import"./index-DWu-8pfX.js";import"./useEventCallback-BGSAbgMA.js";import"./SkeletonBar-Ct_r8P3y.js";import"./LoadingCell-CizPVaWx.js";import"./ColumnConfigDialog-BVvYjqpJ.js";import"./DraggableList-BgljoLpl.js";import"./search-BDtw4QLY.js";import"./Input-BWavTvGX.js";import"./useControlled-C6rc4bi8.js";import"./isEqual-BvnyoED8.js";import"./isObject-DsmXICAg.js";import"./Button-CYu6aPyK.js";import"./ActionButton-XdMdSvPG.js";import"./Checkbox-ChuAqLvm.js";import"./useValueChanged-DBkFN2BU.js";import"./CollapsiblePanel-CoFoYim3.js";import"./MultiColumnSortDialog-DEkKEvGx.js";import"./MenuTrigger-CCgnUVbi.js";import"./CompositeItem-BMBEvSZ_.js";import"./ToolbarRootContext-DM4XCCSQ.js";import"./getDisabledMountTransitionStyles-BbjC2268.js";import"./getPseudoElementBounds-BDlA4Lv9.js";import"./chevron-down-BGy8KVlz.js";import"./index-_Y1lHNIx.js";import"./error-D4wx1m5V.js";import"./BaseCbacBanner-KGPFmWJj.js";import"./makeExternalStore-Ci4r-VA-.js";import"./Tooltip-DC0-jila.js";import"./PopoverPopup-DPOgv1BI.js";import"./toNumber-CGIbY5q9.js";import"./tick-qPYquHw-.js";import"./DropdownField-BQ1K9Kux.js";import"./withOsdkMetrics-qijyDy6X.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
