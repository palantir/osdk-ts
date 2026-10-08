import{j as r}from"./iframe-Brmfbmz5.js";import{O as b}from"./object-table-CZyOPeX-.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CKPlS9CP.js";import{u as g}from"./useOsdkClient-L9Axw6J7.js";import"./preload-helper-DOndN82M.js";import"./Table-Dihz3VNY.js";import"./index-CdHtMllz.js";import"./Dialog-kDCJqmDt.js";import"./cross-fGiz3Rjs.js";import"./svgIconContainer-Cy0NnLfo.js";import"./useBaseUiId-DOGmrDtt.js";import"./InternalBackdrop-BBaC-oN-.js";import"./composite-RDVcdR-R.js";import"./index-DIAM2hNo.js";import"./index-Dr0L57xQ.js";import"./index-CiHCZajJ.js";import"./useEventCallback-C-UQ4FkC.js";import"./SkeletonBar-Ctx3x6Sq.js";import"./LoadingCell-a5pDNTOJ.js";import"./ColumnConfigDialog-CE3UKD9L.js";import"./DraggableList-A99mHYVJ.js";import"./search-DtsbzCVy.js";import"./Input-BEXhNqGp.js";import"./useControlled-B9XW-ROk.js";import"./Button-BUGtRXvM.js";import"./small-cross-CYkGPall.js";import"./ActionButton-DhxyDZhK.js";import"./Checkbox-CkMSnatl.js";import"./useValueChanged-Dxcrt-LB.js";import"./CollapsiblePanel-CxH7OGUx.js";import"./MultiColumnSortDialog-BvGhLNBG.js";import"./MenuTrigger-NuCGdNBT.js";import"./CompositeItem-CAOvInfw.js";import"./ToolbarRootContext-DJZTCp8t.js";import"./getDisabledMountTransitionStyles-DnHbaKev.js";import"./getPseudoElementBounds-DBTAfkRQ.js";import"./chevron-down-Bstv9WV1.js";import"./index-DTHd-YPe.js";import"./error-CqVZQ730.js";import"./BaseCbacBanner-SgyeccVL.js";import"./makeExternalStore-BLoslo8k.js";import"./Tooltip-DTsAOBOi.js";import"./PopoverPopup-C2QBGYEY.js";import"./debounce-7VY6siZ3.js";import"./tick-CC58sMYT.js";import"./DropdownField-C8ZOeSWx.js";import"./isEqual-DRFwE4Y9.js";import"./withOsdkMetrics-By8VTH2x.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
