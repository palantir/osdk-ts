import{j as r}from"./iframe-BJHh5Vyz.js";import{O as b}from"./object-table-BFTqu4WB.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BNuI_agN.js";import{u as g}from"./useOsdkClient-BZwIY2z4.js";import"./preload-helper-BEOBDvBb.js";import"./Table-D77tsv7z.js";import"./index-C19RBoJu.js";import"./Dialog-LkqoZs6q.js";import"./cross-BcEML_Ki.js";import"./svgIconContainer-Oo_WGWgj.js";import"./useBaseUiId-eHvFwl9q.js";import"./InternalBackdrop-BqbazbcZ.js";import"./composite-CQHPO_Bw.js";import"./index-FPDQ-3J4.js";import"./index-DuAaKh8Z.js";import"./index-BcNome8U.js";import"./useEventCallback-SQylOg7X.js";import"./SkeletonBar-CpykcO5g.js";import"./LoadingCell-N8DCjfL3.js";import"./ColumnConfigDialog-B2i8eMF1.js";import"./DraggableList-BVbG2XdD.js";import"./search-CygATN7t.js";import"./Input-DhkgM9Ni.js";import"./useControlled-DRblTyuY.js";import"./Button-XY8oXyEd.js";import"./small-cross-BcJCT5oZ.js";import"./ActionButton-UaUebUqN.js";import"./Checkbox-D6YisCtG.js";import"./useValueChanged-CIPyPD3s.js";import"./CollapsiblePanel-CGqwtuWj.js";import"./MultiColumnSortDialog-C1LikW-A.js";import"./MenuTrigger-Bfj3uIwZ.js";import"./CompositeItem-6AqsuMkJ.js";import"./ToolbarRootContext-CNIddhOS.js";import"./getDisabledMountTransitionStyles-D3dYUIEg.js";import"./getPseudoElementBounds-CT0X_ePj.js";import"./chevron-down-g5IBPJxD.js";import"./index-DB7oCP_Q.js";import"./error-D2VhnADa.js";import"./BaseCbacBanner-D-J85zOv.js";import"./makeExternalStore-nf7wa3ij.js";import"./Tooltip-BJV71zjW.js";import"./PopoverPopup-fac766Lw.js";import"./debounce-Gc9yJQdi.js";import"./tick-CjnLz9Ic.js";import"./DropdownField-DEchhT8v.js";import"./isEqual-D_7g9xzJ.js";import"./withOsdkMetrics-DZ9Y5lOn.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
