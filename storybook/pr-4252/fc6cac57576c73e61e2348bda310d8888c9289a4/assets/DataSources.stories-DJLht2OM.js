import{j as r}from"./iframe-CvDCAeDH.js";import{O as b}from"./object-table-CWKnsu2q.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DMkGtn6Y.js";import{u as g}from"./useOsdkClient-CeLUd2a8.js";import"./preload-helper-CySF3uCO.js";import"./Table-x81VeKaQ.js";import"./index-nRFzHzzN.js";import"./Dialog-4_Yq37_s.js";import"./cross-EFfC56XR.js";import"./svgIconContainer-BhfMRbBd.js";import"./useBaseUiId-CERu-Mmn.js";import"./InternalBackdrop-Dnld41P_.js";import"./composite-DRBh063u.js";import"./index-RY0nU7lO.js";import"./index-DUHiZ1To.js";import"./index-C6zuoPb0.js";import"./useEventCallback-Dvnc1qQ_.js";import"./SkeletonBar-BPwyQ3k9.js";import"./LoadingCell-OTRkEekm.js";import"./ColumnConfigDialog-B8mQRaVc.js";import"./DraggableList-BS8jzmor.js";import"./search-dKzEJt7B.js";import"./Input-ALhJpCPl.js";import"./useControlled-C_KfRsXv.js";import"./Button-DisPssKu.js";import"./small-cross-DlN3ZgDX.js";import"./ActionButton-DRoq9FTP.js";import"./Checkbox-C53gscSo.js";import"./useValueChanged-BoHTJvSv.js";import"./CollapsiblePanel-BoKAurlF.js";import"./MultiColumnSortDialog-CDMb6CRp.js";import"./MenuTrigger-rb9WeGbt.js";import"./CompositeItem-DMUlrRz3.js";import"./ToolbarRootContext-DAFODDmt.js";import"./getDisabledMountTransitionStyles-Bsgl2E4D.js";import"./getPseudoElementBounds-qWUecOLW.js";import"./chevron-down-ZDn0-ls9.js";import"./index-YLVpcBQe.js";import"./error-DzLL_NpE.js";import"./BaseCbacBanner-D2iLEvm5.js";import"./makeExternalStore-feC-GRyZ.js";import"./Tooltip-B3z3Udmz.js";import"./PopoverPopup-D23pQWc3.js";import"./debounce-zyyUUcoC.js";import"./tick-DR6qavIZ.js";import"./DropdownField-C8RlYBV5.js";import"./isEqual-DuPT9max.js";import"./withOsdkMetrics-Ck_CFDG4.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
