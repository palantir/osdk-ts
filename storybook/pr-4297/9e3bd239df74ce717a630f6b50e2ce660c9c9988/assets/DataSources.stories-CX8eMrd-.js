import{j as r}from"./iframe-C8YzkEKz.js";import{O as b}from"./object-table-D7SdME4l.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CPx4erWg.js";import{u as g}from"./useOsdkClient-vAKVtB8q.js";import"./preload-helper-B8sJgEbx.js";import"./Table-C56OY43H.js";import"./index-C-Vxog0Y.js";import"./Dialog-2en1DzcI.js";import"./cross-CSu4FEcq.js";import"./svgIconContainer-_UKoevk1.js";import"./useBaseUiId-4XXFTLSd.js";import"./InternalBackdrop-dIKvouY1.js";import"./composite-DSkWtwuy.js";import"./index-Sammz_NI.js";import"./index-DWcboD_p.js";import"./index-CdSI9hhO.js";import"./useEventCallback-CCpgUzuf.js";import"./SkeletonBar-BWSmrnL_.js";import"./LoadingCell-Dm-PsAvU.js";import"./ColumnConfigDialog-CM8qN433.js";import"./DraggableList-DtsVu7l_.js";import"./search-0pSkbv3G.js";import"./Input-XPv58Dmh.js";import"./useControlled-CCblLEGd.js";import"./Button-XJjUiBNX.js";import"./small-cross-Dk2yMoi_.js";import"./ActionButton-Bcfn6CfF.js";import"./Checkbox-Jf59qoM_.js";import"./useValueChanged-DNAGv0cE.js";import"./CollapsiblePanel-DlES1K8I.js";import"./MultiColumnSortDialog-BhiK2rUk.js";import"./MenuTrigger-DeQjFEoy.js";import"./CompositeItem-CygnWs4n.js";import"./ToolbarRootContext-B7rZx-C2.js";import"./getDisabledMountTransitionStyles-Ck8jkMVH.js";import"./getPseudoElementBounds-DDudvtJw.js";import"./chevron-down-DAumFw1T.js";import"./index-DH0qhbVu.js";import"./error-C6Q2i6Lc.js";import"./BaseCbacBanner-B_fZmsKC.js";import"./makeExternalStore-DCdwwz1M.js";import"./Tooltip-DvVaVw7C.js";import"./PopoverPopup-LsEw6BHM.js";import"./debounce-B0L2FpgR.js";import"./tick-DweM-Z-r.js";import"./DropdownField-BCYfPW_3.js";import"./isEqual-ERStwv5y.js";import"./withOsdkMetrics-ClUT4fsQ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
