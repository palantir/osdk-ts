import{j as r}from"./iframe-CsyA0Bys.js";import{O as b}from"./object-table-DKXoIvwf.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D89LJm46.js";import{u as g}from"./useOsdkClient-Bfd4ZluK.js";import"./preload-helper-KfZ568TX.js";import"./Table-CkkZtWXC.js";import"./index-BxyPqXWo.js";import"./Dialog-C4huEMMf.js";import"./cross-w7PsKmF1.js";import"./svgIconContainer-DaiSunt0.js";import"./useBaseUiId-DvYZt6lA.js";import"./InternalBackdrop-BGyyYpcl.js";import"./composite-BqX-duXl.js";import"./index-BgAZAXfa.js";import"./index--UUGPORc.js";import"./index-B6tCWI8M.js";import"./useEventCallback-C6V46umO.js";import"./SkeletonBar-DUoV5IXh.js";import"./LoadingCell-BSzubWHe.js";import"./ColumnConfigDialog-D1ScqPPe.js";import"./DraggableList-BzSrNu1D.js";import"./search-45t1HcTK.js";import"./Input-CRzWdgdg.js";import"./useControlled-Bo2Cmprh.js";import"./isEqual-Cj7osBnf.js";import"./isObject-CKDvM3HJ.js";import"./Button-6-1YrzTD.js";import"./ActionButton-EYuh1PNc.js";import"./Checkbox-ygCyTm5_.js";import"./useValueChanged-BRLlAh0p.js";import"./CollapsiblePanel-DWFI6paa.js";import"./MultiColumnSortDialog-BSlmLUh3.js";import"./MenuTrigger-DrHL6axm.js";import"./CompositeItem-CL1_i0UZ.js";import"./ToolbarRootContext-zz45WkNS.js";import"./getDisabledMountTransitionStyles-CO4DEx-A.js";import"./getPseudoElementBounds-C5GdHQ1I.js";import"./chevron-down-Dfm6xDjd.js";import"./index-BnVBTYNX.js";import"./error-B7vEDe1J.js";import"./BaseCbacBanner-CCr22KxZ.js";import"./makeExternalStore-CjIFX2gB.js";import"./Tooltip-DakP11QU.js";import"./PopoverPopup-g6LpsQ1J.js";import"./toNumber-CQrFFewn.js";import"./tick-CY-3TnK1.js";import"./DropdownField-D3h01OJB.js";import"./withOsdkMetrics-CoF3qvtY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
