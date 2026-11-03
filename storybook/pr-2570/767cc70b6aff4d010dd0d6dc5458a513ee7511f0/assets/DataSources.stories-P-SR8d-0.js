import{j as r}from"./iframe-D9CyQ-7D.js";import{O as b}from"./object-table-DO3hxB-o.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BwUrOSQa.js";import{u as g}from"./useOsdkClient-WrTrHCKg.js";import"./preload-helper-D5O23N40.js";import"./Table-GRdDa-oK.js";import"./index-DuJGsL9q.js";import"./Dialog-DKCrkoAO.js";import"./cross-BenluPmH.js";import"./svgIconContainer-AOGkHpnu.js";import"./useBaseUiId-D_fLEN6E.js";import"./InternalBackdrop-DeKeGHaG.js";import"./composite-XfhWG8gu.js";import"./index-1c9qBFFa.js";import"./index-AxS2IGOk.js";import"./index-BOD_CvT4.js";import"./useEventCallback-ypal6-pO.js";import"./SkeletonBar-Cv4TXNgc.js";import"./LoadingCell-B6Dj7aLc.js";import"./ColumnConfigDialog-BC-wDrCL.js";import"./DraggableList-DH_wtghe.js";import"./search-DGt86ZvF.js";import"./Input-CmtlVQ4G.js";import"./useControlled-C_-Glr9o.js";import"./Button-BQcwiuJB.js";import"./small-cross-B9cBwOBi.js";import"./ActionButton-BfglUtnD.js";import"./Checkbox-C2wClEH5.js";import"./useValueChanged-CjMx0qik.js";import"./CollapsiblePanel-mjI7efHF.js";import"./MultiColumnSortDialog-CM7ThF2W.js";import"./MenuTrigger-Dy26HhZf.js";import"./CompositeItem-DcIoFALJ.js";import"./ToolbarRootContext-BcdYYsZZ.js";import"./getDisabledMountTransitionStyles-D4n7H05A.js";import"./getPseudoElementBounds-DDgTpPXV.js";import"./chevron-down-CdLJsGpG.js";import"./index-D1YdEA6M.js";import"./error-C3QVKQPv.js";import"./BaseCbacBanner-DTcSoVNL.js";import"./makeExternalStore-tubzd2Ls.js";import"./Tooltip-DYOaLqjU.js";import"./PopoverPopup-B0CqW0hV.js";import"./debounce-Axu-J2_C.js";import"./tick-BiI5E4yJ.js";import"./DropdownField-GBcl7Wc9.js";import"./isEqual-Zl9340i5.js";import"./withOsdkMetrics-C8sht1w0.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
