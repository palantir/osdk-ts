import{j as r}from"./iframe-CsKQ3MiN.js";import{O as b}from"./object-table-DbjAOYXB.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CQG9zzfF.js";import{u as g}from"./useOsdkClient-DDQMFRik.js";import"./preload-helper-DGKcnXHD.js";import"./Table-DQgdshTQ.js";import"./index-Dr6q-Sfz.js";import"./Dialog-COWppfPD.js";import"./cross-D0wLRLht.js";import"./svgIconContainer-CEz_OqiJ.js";import"./useBaseUiId-BzoXUnOl.js";import"./InternalBackdrop-DYA_vqeP.js";import"./composite-CoD6tMpx.js";import"./index-BeHm_BzD.js";import"./index-snnTh06i.js";import"./index-D49_UwOT.js";import"./useEventCallback-80Se1kif.js";import"./SkeletonBar-CizJ11uq.js";import"./LoadingCell-AXHz_OI3.js";import"./ColumnConfigDialog-5baoLeO5.js";import"./DraggableList-Da1XT_Ho.js";import"./search-cTPZqcQC.js";import"./Input-D9JW6ixL.js";import"./useControlled-Cob_C-Qn.js";import"./Button-BEOltIVE.js";import"./small-cross-BsRRrEs9.js";import"./ActionButton-CmQru8bY.js";import"./Checkbox-Bjl-uhI0.js";import"./useValueChanged-DQRkdvZ7.js";import"./CollapsiblePanel-BdBOmqTc.js";import"./MultiColumnSortDialog-DPR6eIVq.js";import"./MenuTrigger-BVwdiBa0.js";import"./CompositeItem-DZkfIwKg.js";import"./ToolbarRootContext-BNxut5tp.js";import"./getDisabledMountTransitionStyles-IbEufsWa.js";import"./getPseudoElementBounds-CFuQFtK_.js";import"./chevron-down-BCi4kbBt.js";import"./index-DoTKq459.js";import"./error-C-bxu3dO.js";import"./BaseCbacBanner-Br0T5VCO.js";import"./makeExternalStore-Czb1TAUA.js";import"./Tooltip-5SCwZ_pU.js";import"./PopoverPopup-849UqFyk.js";import"./debounce-XpKSqWNs.js";import"./tick-Cn3xvEup.js";import"./DropdownField-KxlPBtr2.js";import"./isEqual-CIQzSvqq.js";import"./withOsdkMetrics-z1U7tMx_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
