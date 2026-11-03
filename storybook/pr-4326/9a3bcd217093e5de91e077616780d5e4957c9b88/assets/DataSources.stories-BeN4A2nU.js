import{j as r}from"./iframe-BSBY3PjJ.js";import{O as b}from"./object-table-by3GvYNO.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BT0whPcp.js";import{u as g}from"./useOsdkClient-COaUlzkH.js";import"./preload-helper-DpSdlFS8.js";import"./Table-DyL3FyVA.js";import"./index-DK106w7q.js";import"./Dialog-D-VCZ-Xj.js";import"./cross-ChnkwhQq.js";import"./svgIconContainer-CVR7Tkh3.js";import"./useBaseUiId-BWCrzuEr.js";import"./InternalBackdrop-BAAE8sPY.js";import"./composite-iYZqsZLy.js";import"./index-DVvqS1th.js";import"./index-CKbXy3Dj.js";import"./index-tq3mLcAa.js";import"./useEventCallback-Cz9YIY33.js";import"./SkeletonBar-C6FAa51I.js";import"./LoadingCell-B1hHHivN.js";import"./ColumnConfigDialog-xZIDScDz.js";import"./DraggableList-BayLOggI.js";import"./search-D4Uipsbf.js";import"./Input-DLFn8nXq.js";import"./useControlled-Ki3OxTZR.js";import"./Button-DyRQe702.js";import"./small-cross-DYeQuCck.js";import"./ActionButton-C4rmndSw.js";import"./Checkbox-C0f3x1KO.js";import"./useValueChanged-srC6xFPd.js";import"./CollapsiblePanel-BIFNkFs4.js";import"./MultiColumnSortDialog-DhGJANiF.js";import"./MenuTrigger-C6BZNbBa.js";import"./CompositeItem-B9uKrben.js";import"./ToolbarRootContext-5qjYeV0P.js";import"./getDisabledMountTransitionStyles-CnzqGvPD.js";import"./getPseudoElementBounds-B4FwyunF.js";import"./chevron-down-BHUr8iy5.js";import"./index-YAOpnUoq.js";import"./error-iycxY9-l.js";import"./BaseCbacBanner-CPgeKTE0.js";import"./makeExternalStore-DU_ddruH.js";import"./Tooltip-BAR8Dcp7.js";import"./PopoverPopup-B_rMzGeU.js";import"./debounce-0JtHt6-L.js";import"./tick-CwHYlOtH.js";import"./DropdownField-DL8lskl1.js";import"./isEqual-C70Oa3sU.js";import"./withOsdkMetrics-C3TRqwn-.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
