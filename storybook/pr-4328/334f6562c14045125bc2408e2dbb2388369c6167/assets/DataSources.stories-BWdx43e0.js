import{j as r}from"./iframe-DxLxeeBD.js";import{O as b}from"./object-table-CMvLi3AZ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DZxgPLc_.js";import{u as g}from"./useOsdkClient-85GRc1g4.js";import"./preload-helper-B7NNhvj1.js";import"./Table-tPx8wRZ3.js";import"./index-DSM2Nmta.js";import"./Dialog-7K7ukV7q.js";import"./cross-Z_oHrjIu.js";import"./svgIconContainer-B6Cb5ptS.js";import"./useBaseUiId-BEhgV5tS.js";import"./InternalBackdrop-BCmz-HrC.js";import"./composite-D1h37npl.js";import"./index-CKLl7OmG.js";import"./index-CwXC3XWN.js";import"./index-DrEQLJsr.js";import"./useEventCallback-CpuXukHA.js";import"./SkeletonBar-D7VTi4iG.js";import"./LoadingCell-KAKJr_zN.js";import"./ColumnConfigDialog-mkBqXe8j.js";import"./DraggableList-Bd3tF3_V.js";import"./search-BuJ4cv5l.js";import"./Input-CFINwHSJ.js";import"./useControlled-DAtmThLw.js";import"./Button-BOLOFIFE.js";import"./small-cross-CSyQLWSj.js";import"./ActionButton-RMHpWcLm.js";import"./Checkbox-B6ZLBY2Y.js";import"./useValueChanged-O7ZxSsjb.js";import"./CollapsiblePanel-Cba0R3PM.js";import"./MultiColumnSortDialog-Bxz0LRc8.js";import"./MenuTrigger-jD7qjrb3.js";import"./CompositeItem-IyZEpEpW.js";import"./ToolbarRootContext-D7eywLcy.js";import"./getDisabledMountTransitionStyles-D_N2rHM3.js";import"./getPseudoElementBounds-CE6PXmfu.js";import"./chevron-down-DqhD85JK.js";import"./index-bdK4kZrJ.js";import"./error-B99vb4Y2.js";import"./BaseCbacBanner-DuWlNbRS.js";import"./makeExternalStore--BkPrjsd.js";import"./Tooltip-CIkzHwPr.js";import"./isObject-C1XnUciK.js";import"./debounce-DCzHGjeF.js";import"./tick-DWAS6W14.js";import"./DropdownField-D7QCNisd.js";import"./isEqual-DiIZOB07.js";import"./_baseIsEqual-DM2pxxnH.js";import"./withOsdkMetrics-CJ_tbfj8.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
