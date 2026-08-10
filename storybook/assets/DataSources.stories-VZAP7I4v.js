import{j as r}from"./iframe-ookINj4z.js";import{O as b}from"./object-table-5AJqsqmg.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D-3t0_yd.js";import{u as g}from"./useOsdkClient-BsdX-QC0.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DqoDrt8z.js";import"./index-B_G83cAE.js";import"./Dialog-BDjMTZx4.js";import"./cross-DBbP5D4h.js";import"./svgIconContainer-DyzYMl01.js";import"./useBaseUiId-ChW3iXZ-.js";import"./InternalBackdrop-Dbk1x9I9.js";import"./composite-BbXCVwQJ.js";import"./index-DKoQfkwR.js";import"./index-BnkKdipA.js";import"./index-D3pzoeiY.js";import"./useEventCallback-Ch3uqH9f.js";import"./SkeletonBar-DnUbvSjd.js";import"./LoadingCell-C-qgmHrp.js";import"./ColumnConfigDialog-Dj3srkfc.js";import"./DraggableList-DyG8Mo8T.js";import"./search-DTFSxkbH.js";import"./Input-NlWA1BDr.js";import"./useControlled-DmgaWuxn.js";import"./isEqual-Da-y1TCe.js";import"./isObject-Ba7UXz2t.js";import"./Button-C5Uo0dK-.js";import"./ActionButton-BVpermFe.js";import"./Checkbox-CVaNxm77.js";import"./useValueChanged-DfvVmxcA.js";import"./CollapsiblePanel-jqLyxjS9.js";import"./MultiColumnSortDialog-BNuvG1Jv.js";import"./MenuTrigger-C7D45Jns.js";import"./CompositeItem-OAduBL0E.js";import"./ToolbarRootContext-Bu_OObLI.js";import"./getDisabledMountTransitionStyles-DSLBAXz5.js";import"./getPseudoElementBounds-6w2bDLXh.js";import"./chevron-down-Hv5AOudc.js";import"./index-L_GsU3c8.js";import"./error-1dTAOxzn.js";import"./BaseCbacBanner-CUMyagmu.js";import"./makeExternalStore-DQCBlQ8C.js";import"./Tooltip-B3I6Rfj4.js";import"./PopoverPopup-BjNZ3wOK.js";import"./toNumber-CYf7JQBX.js";import"./tick-dpozkHc2.js";import"./DropdownField-CU0BwSPj.js";import"./withOsdkMetrics-CyPSaHwg.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
