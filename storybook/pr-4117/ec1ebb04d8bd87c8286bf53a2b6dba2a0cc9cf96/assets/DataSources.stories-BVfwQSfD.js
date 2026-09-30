import{j as r}from"./iframe-DRNk89ZH.js";import{O as b}from"./object-table-DyslRn07.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-HBvUCNYH.js";import{u as g}from"./useOsdkClient-Bnc6agZG.js";import"./preload-helper-CL4j9Mgj.js";import"./Table-CCvso8pR.js";import"./index-CS7yPxi2.js";import"./Dialog-DhLNyJn8.js";import"./cross-CdajDpt0.js";import"./svgIconContainer-BYMe6jPQ.js";import"./useBaseUiId-DA__XCsT.js";import"./InternalBackdrop-DyXkqyZv.js";import"./composite-8utJ-QhI.js";import"./index-DZWIzD1L.js";import"./index-Du8pqTKc.js";import"./index-CR7ijv3D.js";import"./useEventCallback-Dix1JuJQ.js";import"./SkeletonBar-D55GtZ7r.js";import"./LoadingCell-C5WX1ZtT.js";import"./ColumnConfigDialog-D7jswbWW.js";import"./DraggableList-B30xQjvE.js";import"./search-Cy6sHHpP.js";import"./Input-DehlDyjB.js";import"./useControlled-CE505VKa.js";import"./Button-Br4k3ffi.js";import"./small-cross-Blo856Jy.js";import"./ActionButton-ByUIz9Jq.js";import"./Checkbox-BZM4LvUK.js";import"./useValueChanged-BB_kvMD4.js";import"./CollapsiblePanel-Bwzr5sqV.js";import"./MultiColumnSortDialog-BIvzGas2.js";import"./MenuTrigger-C7Mh7EWc.js";import"./CompositeItem-DF-AHu7i.js";import"./ToolbarRootContext-BDHJtdhK.js";import"./getDisabledMountTransitionStyles-BQM7zsXg.js";import"./getPseudoElementBounds-BcErDK4h.js";import"./chevron-down-CphPepB3.js";import"./index-CMtFadZ1.js";import"./error-B_EjGR4-.js";import"./BaseCbacBanner-BeWGcHZq.js";import"./makeExternalStore-B6lEYqi9.js";import"./Tooltip-YY6aadVm.js";import"./PopoverPopup-C0n4VFaw.js";import"./debounce-CZTrh2IE.js";import"./tick-C69MPngT.js";import"./DropdownField-BLLbuNZd.js";import"./isEqual-BW7L9s0X.js";import"./withOsdkMetrics-B1ACrfWT.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
