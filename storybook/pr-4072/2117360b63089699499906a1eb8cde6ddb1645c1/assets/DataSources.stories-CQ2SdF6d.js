import{j as r}from"./iframe-DFjxEBRl.js";import{O as b}from"./object-table-BoxAW6h4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C-zXVqMa.js";import{u as g}from"./useOsdkClient-DtVD0JhY.js";import"./preload-helper-YLQ76DnX.js";import"./Table-BwRlL3aP.js";import"./index-RHDnv4KE.js";import"./Dialog-UrBzw_yg.js";import"./cross-CCUsZu-F.js";import"./svgIconContainer-BJy48zyG.js";import"./useBaseUiId-DHc-L81w.js";import"./InternalBackdrop-C6P7pfbM.js";import"./composite-CbdzgRs5.js";import"./index-Ct3A8526.js";import"./index-C1k9WrZP.js";import"./index-DpB4gLVj.js";import"./useEventCallback-Dsnixxz2.js";import"./SkeletonBar-CnK8k0Bo.js";import"./LoadingCell-aZlJy0Kx.js";import"./ColumnConfigDialog-DK3pRiTd.js";import"./DraggableList-ChJmTziU.js";import"./search-BBZ2n1GL.js";import"./Input-BTdzd0gA.js";import"./useControlled-CQ5aYrLf.js";import"./Button-Del4UdCp.js";import"./small-cross-DqyJwNHG.js";import"./ActionButton-DNxDDubl.js";import"./Checkbox-DyMDK_CU.js";import"./useValueChanged-gLgp5WvO.js";import"./CollapsiblePanel-ByT148KK.js";import"./MultiColumnSortDialog-B4STlqGL.js";import"./MenuTrigger-IEuFxfFB.js";import"./CompositeItem-CAkiPkQz.js";import"./ToolbarRootContext-B6U_uFKg.js";import"./getDisabledMountTransitionStyles-sjb--ufQ.js";import"./getPseudoElementBounds-MBQcfjsr.js";import"./chevron-down-Bha1TG_6.js";import"./index-B9cxXn2y.js";import"./error-WmDbCKs9.js";import"./BaseCbacBanner-wAyBlN0z.js";import"./makeExternalStore-DFJcPXqp.js";import"./Tooltip-DOMen-IA.js";import"./PopoverPopup-BZUXpB4m.js";import"./debounce-vz83BYcu.js";import"./tick-DJLdpaHq.js";import"./DropdownField-CStCtQro.js";import"./isEqual-C6OL2hQ9.js";import"./withOsdkMetrics-DIfFeIX-.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
