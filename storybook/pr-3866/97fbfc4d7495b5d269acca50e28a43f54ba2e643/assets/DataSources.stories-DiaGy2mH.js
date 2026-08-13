import{j as r}from"./iframe-CYhZfT3_.js";import{O as b}from"./object-table-DCRgSSGC.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-6avyJBBJ.js";import{u as g}from"./useOsdkClient-BJBOx_dn.js";import"./preload-helper-DuW2ZL9O.js";import"./Table-CXcwYSnZ.js";import"./index-Bsk-T9AU.js";import"./Dialog-Tc2_deC_.js";import"./cross-BJdfjTua.js";import"./svgIconContainer-BpN9N_JA.js";import"./useBaseUiId-DZSo-im9.js";import"./InternalBackdrop-DfBwjCGc.js";import"./composite-BPx_h-nk.js";import"./index-BKmbfABs.js";import"./index-BthbUhg9.js";import"./index-C-WRNz3E.js";import"./useEventCallback-CunyUO5F.js";import"./SkeletonBar-Dx8fHgLa.js";import"./LoadingCell-CZR7iFmp.js";import"./ColumnConfigDialog-D7ZisgWP.js";import"./DraggableList-BbR3WdJ2.js";import"./search-CgpKnjTm.js";import"./Input-kdaFhJQC.js";import"./useControlled-Cx72k2R7.js";import"./Button-B7yZuVYQ.js";import"./small-cross-C5sJSYZw.js";import"./ActionButton-DaZ8p3ZP.js";import"./Checkbox-DMnLA1rT.js";import"./useValueChanged-CUgB0lPb.js";import"./CollapsiblePanel-BejYuaCH.js";import"./MultiColumnSortDialog-DfskZs5F.js";import"./MenuTrigger-BWA5hG1d.js";import"./CompositeItem-CqWJQP_Z.js";import"./ToolbarRootContext-C__wJlPO.js";import"./getDisabledMountTransitionStyles-DV9NgReY.js";import"./getPseudoElementBounds-DeuZh7pR.js";import"./chevron-down-DkFotZE7.js";import"./index-BrJQ0JzU.js";import"./error-DWSHrAom.js";import"./BaseCbacBanner-DHWoPqU5.js";import"./makeExternalStore-BbuDQhcx.js";import"./Tooltip-DsiXQ8gP.js";import"./PopoverPopup-BuTn7Bh_.js";import"./toNumber-CuILyFQS.js";import"./tick-BVznHvW2.js";import"./DropdownField-C7hB0VQ9.js";import"./withOsdkMetrics-BU-eC2Yy.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,Te={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const je=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,je as __namedExportsOrder,Te as default};
