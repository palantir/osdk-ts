import{j as r}from"./iframe-2MyeaUzD.js";import{O as b}from"./object-table-LkCsGfkb.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-6B0O5euU.js";import{u as g}from"./useOsdkClient-CYYcDDNv.js";import"./preload-helper-DUn0LkVX.js";import"./Table-DjOWDljB.js";import"./index-NZSVMLpP.js";import"./Dialog-CWDCbvJz.js";import"./cross-CXnhgyvc.js";import"./svgIconContainer-4EX1EfK4.js";import"./useBaseUiId-C0j-SKXM.js";import"./InternalBackdrop-COkt2S-3.js";import"./composite-BVz7tfSY.js";import"./index-Bm-PBo3A.js";import"./index-Ce4PKvPC.js";import"./index-DkVuFE1I.js";import"./useEventCallback-Dm3fVohy.js";import"./SkeletonBar-DIegnhq_.js";import"./LoadingCell-pnT9nXLW.js";import"./ColumnConfigDialog-CxlYZzEl.js";import"./DraggableList-D1634nan.js";import"./search-CpIfmgVn.js";import"./Input-DXMdlMds.js";import"./useControlled-DCne3Llm.js";import"./Button-3arTFTpt.js";import"./small-cross-Blk5AoHi.js";import"./ActionButton-CMwQlm1r.js";import"./Checkbox-B0hGpm5s.js";import"./useValueChanged-B2kp3VOe.js";import"./CollapsiblePanel-_qMM1pI0.js";import"./MultiColumnSortDialog-BbfjJS_D.js";import"./MenuTrigger-3uPegHGQ.js";import"./CompositeItem-D8KecaIg.js";import"./ToolbarRootContext-zLrFE9v8.js";import"./getDisabledMountTransitionStyles-DxjEMg4T.js";import"./getPseudoElementBounds-DpBykgdb.js";import"./chevron-down-4RG-YjeV.js";import"./index-jXeA9SgF.js";import"./error-CSdXVQDA.js";import"./BaseCbacBanner-QsJ11sde.js";import"./makeExternalStore-VoU3rgtf.js";import"./Tooltip-BfB-ALwV.js";import"./PopoverPopup-DOf8tSzj.js";import"./debounce-Y3DExDk1.js";import"./tick-ftcla-3R.js";import"./DropdownField-DOIFNVft.js";import"./isEqual-C8MbmCUf.js";import"./withOsdkMetrics-CFGA0PEe.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
