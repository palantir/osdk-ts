import{j as r}from"./iframe-DfvwHsY4.js";import{O as b}from"./object-table-DsgGTtXM.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C05HdYrQ.js";import{u as g}from"./useOsdkClient-BtLJAOm0.js";import"./preload-helper-B_za76P1.js";import"./Table-D9CBcPp7.js";import"./index-CQtOsoXK.js";import"./Dialog-DHH-JwJ9.js";import"./cross-fqG1RiYl.js";import"./svgIconContainer-B9JqQ2wt.js";import"./useBaseUiId-B0xqZb_O.js";import"./InternalBackdrop-CKWiJoCa.js";import"./composite-CSX6Mrkw.js";import"./index-DR_LgGEH.js";import"./index-DVBjGa5t.js";import"./index-CnrsCr2B.js";import"./useEventCallback-CHZTTgQU.js";import"./SkeletonBar-Dkqc5Z-q.js";import"./LoadingCell-BhCbvDmF.js";import"./ColumnConfigDialog-CNuDIn_d.js";import"./DraggableList-C12I1HeH.js";import"./search-CsmvFGw5.js";import"./Input-BPNZHdpC.js";import"./useControlled-BjeqQkUk.js";import"./Button-Ca04rN16.js";import"./small-cross-D42sc0mE.js";import"./ActionButton-D564RM3o.js";import"./Checkbox-e6WyMAnA.js";import"./useValueChanged-BBJPtzLX.js";import"./CollapsiblePanel-Bny2eGkF.js";import"./MultiColumnSortDialog-5oW-7TXc.js";import"./MenuTrigger-BmNzF-3q.js";import"./CompositeItem-DMwkjAkb.js";import"./ToolbarRootContext-rYStqux1.js";import"./getDisabledMountTransitionStyles-ClgRaisB.js";import"./getPseudoElementBounds-CWn3civw.js";import"./chevron-down-B-w_aZMu.js";import"./index-dC_pSdIW.js";import"./error-1veqZu6X.js";import"./BaseCbacBanner-BuuVYiPd.js";import"./makeExternalStore-B0EaqGDc.js";import"./Tooltip-DJljNE8z.js";import"./PopoverPopup-DGBwl_YH.js";import"./debounce-D2BrHLFh.js";import"./tick-CoDkmvvi.js";import"./DropdownField-CbJ9aycC.js";import"./isEqual-HlCgqCCT.js";import"./withOsdkMetrics-5OCT_Jru.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
