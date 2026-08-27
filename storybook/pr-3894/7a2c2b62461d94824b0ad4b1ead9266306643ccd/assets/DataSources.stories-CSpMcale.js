import{j as r}from"./iframe-jUDVu-oB.js";import{O as b}from"./object-table-Cx9tm_Pd.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Ca4cDkaU.js";import{u as g}from"./useOsdkClient-BXvZlVT3.js";import"./preload-helper-CyYr8U1Q.js";import"./Table-CEAaeBiQ.js";import"./index-1Q0hWWGI.js";import"./Dialog-CmmS098x.js";import"./cross-B3EYIFf_.js";import"./svgIconContainer-ChyWwrvo.js";import"./useBaseUiId-C6WGvNek.js";import"./InternalBackdrop-Cv--M4Jq.js";import"./composite-Bu0UeckM.js";import"./index-DVDzZTIb.js";import"./index-C9oucRDg.js";import"./index-mIO2g3nC.js";import"./useEventCallback-w_ctU8j3.js";import"./SkeletonBar-BqIPwENF.js";import"./LoadingCell-MwY8x3Ok.js";import"./ColumnConfigDialog-BuQ4fhX6.js";import"./DraggableList-Cxf06e0j.js";import"./search-DqQGZnw2.js";import"./Input-BcTAE4rO.js";import"./useControlled-CjWxurNp.js";import"./Button-B3_hL6UU.js";import"./small-cross-3dACuLGo.js";import"./ActionButton-B73Vppck.js";import"./Checkbox-BxR9euFz.js";import"./useValueChanged-CsZ0uGxH.js";import"./CollapsiblePanel-DnM3o2Gi.js";import"./MultiColumnSortDialog-CPT8sh5J.js";import"./MenuTrigger-C8i0-fFA.js";import"./CompositeItem-DIufQebI.js";import"./ToolbarRootContext-DhXolmDg.js";import"./getDisabledMountTransitionStyles-3YgE9QJa.js";import"./getPseudoElementBounds-Gpw7pplD.js";import"./chevron-down-DSRlwyRr.js";import"./index-DTDaFG3C.js";import"./error-ekMkFCMM.js";import"./BaseCbacBanner-CP6xIIrj.js";import"./makeExternalStore-BbZ23pca.js";import"./Tooltip-CLOOUvQK.js";import"./PopoverPopup-BMShbDJ0.js";import"./debounce-C6jjJgFF.js";import"./tick-CgyCojcZ.js";import"./DropdownField-mH-K4cC2.js";import"./isEqual-CNT7U_na.js";import"./withOsdkMetrics-Cv-kz2_6.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
