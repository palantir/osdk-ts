import{j as r}from"./iframe-C5mCK2PO.js";import{O as b}from"./object-table-Csnyr5o0.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DYppQKJx.js";import{u as g}from"./useOsdkClient-BLLliW7s.js";import"./preload-helper-B71-F3-E.js";import"./Table-CAoCD-r3.js";import"./index-x2FMdUXO.js";import"./Dialog-BUKOY0Bm.js";import"./cross-C2KqS3Pb.js";import"./svgIconContainer-jCGuJEaw.js";import"./useBaseUiId-CRwAptA4.js";import"./InternalBackdrop-CiAJU9Y9.js";import"./composite-DhwPvOlp.js";import"./index-CXO1mTHj.js";import"./index-DqURmoPO.js";import"./index-DFhuUbBY.js";import"./useEventCallback-DyFcPFjY.js";import"./SkeletonBar-PJRGOQI5.js";import"./LoadingCell-CQE0kFzu.js";import"./ColumnConfigDialog-DC8fdFoU.js";import"./DraggableList-C6E2mjha.js";import"./search-QRaPLFIx.js";import"./Input-ClKT9i6x.js";import"./useControlled-B76SscLe.js";import"./Button-QzVHZwrk.js";import"./small-cross-CFmTQ2DK.js";import"./ActionButton-BXbp-XTu.js";import"./Checkbox-Byyu80XK.js";import"./useValueChanged-a0LJAptk.js";import"./CollapsiblePanel-CvCqtl8y.js";import"./MultiColumnSortDialog-9GFPfOFK.js";import"./MenuTrigger-CDg2Tml1.js";import"./CompositeItem-CcgiUeN1.js";import"./ToolbarRootContext-Bjoxw1BG.js";import"./getDisabledMountTransitionStyles-Bgm3-BfC.js";import"./getPseudoElementBounds-BP73-JGK.js";import"./chevron-down-DkRHA-R2.js";import"./index-BYdvbw5G.js";import"./error-9wJAHEot.js";import"./BaseCbacBanner-CCanzxJR.js";import"./makeExternalStore-Dpr3oewV.js";import"./Tooltip-JfIAa3Wv.js";import"./PopoverPopup-C9KSsLOP.js";import"./debounce-CypeZyyS.js";import"./tick-uKXRfO2h.js";import"./DropdownField-B_zeyfsK.js";import"./isEqual-DmC_VlXk.js";import"./withOsdkMetrics-Cx5_Zqh1.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
