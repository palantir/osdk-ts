import{j as r}from"./iframe-CAIgECfm.js";import{O as b}from"./object-table-Bpg6Rjwr.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C0Ym1UCi.js";import{u as g}from"./useOsdkClient-C0sKTx_B.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BOugih2v.js";import"./index-B3MYTMei.js";import"./Dialog-Dl5pUjsz.js";import"./cross-BQNRDOaU.js";import"./svgIconContainer-C3DKY__f.js";import"./useBaseUiId-D9Drx6D-.js";import"./InternalBackdrop-CszvMWda.js";import"./composite-JJXOCwqO.js";import"./index-oq0LOBzb.js";import"./index-Ufz-XkYv.js";import"./index-Bo8EBVtj.js";import"./useEventCallback-DEW-Jvqw.js";import"./SkeletonBar-BTrZKUFD.js";import"./LoadingCell-C4neaCCK.js";import"./ColumnConfigDialog-DRhbRBNs.js";import"./DraggableList-BeHdPllY.js";import"./search-DtjskLKm.js";import"./Input-DiYmIIHx.js";import"./useControlled-Dfbx34Uf.js";import"./Button-B8Prvm33.js";import"./small-cross-Dd4LJYDa.js";import"./ActionButton-Dm82L77i.js";import"./Checkbox-COVciVNz.js";import"./useValueChanged-5KOAJGnG.js";import"./CollapsiblePanel-DdLN5yGK.js";import"./MultiColumnSortDialog-CS7Povdk.js";import"./MenuTrigger-DN-7j7Vc.js";import"./CompositeItem-ByF2vx3e.js";import"./ToolbarRootContext-wvUb7vtw.js";import"./getDisabledMountTransitionStyles-Dte8P-y1.js";import"./getPseudoElementBounds-DK95qc36.js";import"./chevron-down-DmkBexVO.js";import"./index-euZ8olZi.js";import"./error-DOslEiGD.js";import"./BaseCbacBanner-DKHk2W2w.js";import"./makeExternalStore-1s6PxRaa.js";import"./Tooltip-BLisYypf.js";import"./PopoverPopup-BQG7iL0H.js";import"./debounce-B0a0YjK6.js";import"./tick-DJkFbBfA.js";import"./DropdownField-Cvt8oMSZ.js";import"./isEqual-l7qirsQ1.js";import"./withOsdkMetrics-BxbwCQgj.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
