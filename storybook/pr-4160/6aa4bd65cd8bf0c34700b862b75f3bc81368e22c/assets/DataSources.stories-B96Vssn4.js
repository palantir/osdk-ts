import{j as r}from"./iframe-B5CnmteN.js";import{O as b}from"./object-table-gaX4hUZd.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CQH0BCga.js";import{u as g}from"./useOsdkClient-qcHJ86eJ.js";import"./preload-helper-BvIIyaRb.js";import"./Table-CYEWxzsm.js";import"./index-8frbvTc0.js";import"./Dialog-CYPtfWTy.js";import"./cross-pkR4RJ0Q.js";import"./svgIconContainer-Q-T6gYyn.js";import"./useBaseUiId-CpmUOtyx.js";import"./InternalBackdrop-6TwkoN7E.js";import"./composite-DzRtfXwG.js";import"./index-DJMwC2E0.js";import"./index-COZUZoux.js";import"./index-CiKFFLFD.js";import"./useEventCallback-H_-RfLRz.js";import"./SkeletonBar-CKpapgR8.js";import"./LoadingCell-DAczU-a4.js";import"./ColumnConfigDialog-Cn1lmaiq.js";import"./DraggableList-DpqDB0uQ.js";import"./search-BS3g1UNT.js";import"./Input-BFwAdaEg.js";import"./useControlled-BIkM9vG3.js";import"./Button-k7Ft62HK.js";import"./small-cross-CxROeBHB.js";import"./ActionButton-DGDbhDGz.js";import"./Checkbox-ClKS3ff4.js";import"./useValueChanged-DAkLpCOr.js";import"./CollapsiblePanel-Cb_s5Izf.js";import"./MultiColumnSortDialog-CikWbuVd.js";import"./MenuTrigger-Bm-IvUc5.js";import"./CompositeItem-GDYb2RvJ.js";import"./ToolbarRootContext-BCLdmU7d.js";import"./getDisabledMountTransitionStyles-BgPPzZOr.js";import"./getPseudoElementBounds-C6KAFL2T.js";import"./chevron-down-Yu587uLP.js";import"./index-NUZYU-eZ.js";import"./error-DnL9Bib9.js";import"./BaseCbacBanner-CBd6F0qQ.js";import"./makeExternalStore-DQ9Dnm6S.js";import"./Tooltip-CT-rD5V_.js";import"./PopoverPopup-BFzT61y-.js";import"./debounce-B-2K-o_A.js";import"./tick-DQyZDVkc.js";import"./DropdownField-BGVoK-k4.js";import"./isEqual-DJdARuJ_.js";import"./withOsdkMetrics-Dx9osySV.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
