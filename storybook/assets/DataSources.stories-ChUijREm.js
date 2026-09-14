import{j as r}from"./iframe-8JOFoP6w.js";import{O as b}from"./object-table-Bpoz7acy.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DsQltpZe.js";import{u as g}from"./useOsdkClient-D2545i5_.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-De2QC20j.js";import"./index-DVXlafOG.js";import"./Dialog-CgZPGdtx.js";import"./cross-Ba_aocLO.js";import"./svgIconContainer-Bc52btQW.js";import"./useBaseUiId-DJOFV3yl.js";import"./InternalBackdrop-BC0u02pm.js";import"./composite-Dacbrp7D.js";import"./index-DABUx9II.js";import"./index-DIPLjPoi.js";import"./index-DydTQsmK.js";import"./useEventCallback-RYf_Rpw0.js";import"./SkeletonBar-DviTtz4R.js";import"./LoadingCell-BjoaI82Y.js";import"./ColumnConfigDialog-KJ4u-4ae.js";import"./DraggableList-BL0RmeUx.js";import"./search-ld6lzdhI.js";import"./Input-B80vLCMJ.js";import"./useControlled-EfqR38x7.js";import"./Button-BowFr5Gg.js";import"./small-cross-_0ChGPYI.js";import"./ActionButton-BBgXQWJV.js";import"./Checkbox-DKwxEkJA.js";import"./useValueChanged-6-LufgCy.js";import"./CollapsiblePanel-B36mIUJ8.js";import"./MultiColumnSortDialog-DXtYuqFl.js";import"./MenuTrigger-Cnbw05Jv.js";import"./CompositeItem-DOhO0oM7.js";import"./ToolbarRootContext-5xRdL1EJ.js";import"./getDisabledMountTransitionStyles-OPbP8IPW.js";import"./getPseudoElementBounds-CjsOipTW.js";import"./chevron-down-dUDP5SOr.js";import"./index-DTTaRHwW.js";import"./error-BLfUwIjQ.js";import"./BaseCbacBanner-ZBYP9bYo.js";import"./makeExternalStore-ZHAkzHUN.js";import"./Tooltip-o0yaOQGv.js";import"./PopoverPopup-fb6R-GhK.js";import"./debounce-CYBn2EID.js";import"./tick-C65V9PGT.js";import"./DropdownField-BGIt2m0K.js";import"./isEqual-CdgPAtY7.js";import"./withOsdkMetrics-DErVVM0k.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
