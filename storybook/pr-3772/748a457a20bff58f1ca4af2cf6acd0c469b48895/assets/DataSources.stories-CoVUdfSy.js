import{j as r}from"./iframe-CY1bley7.js";import{O as b}from"./object-table-A9mWQwEa.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BH_AXQjN.js";import{u as g}from"./useOsdkClient-hIZdaTDT.js";import"./preload-helper-D3osyoeZ.js";import"./Table-D2T9VBKl.js";import"./index-rh2lseoR.js";import"./Dialog-Kvxxr7Fa.js";import"./cross-cJ3Efo1g.js";import"./svgIconContainer-CzZrnJM2.js";import"./useBaseUiId-DVcIvI44.js";import"./InternalBackdrop-XcwLG7Wl.js";import"./composite-CiwpWFDy.js";import"./index-Bn4JMmGr.js";import"./index-gS5-xXe0.js";import"./index-Cql1DwPR.js";import"./useEventCallback-0BkCCq-P.js";import"./SkeletonBar-DwIeclcD.js";import"./LoadingCell-C8KQ1Jim.js";import"./ColumnConfigDialog-B_LOG-aU.js";import"./DraggableList-BJQ1Cebx.js";import"./search-146DDh_k.js";import"./Input-DEo9NwDI.js";import"./useControlled-fFwZP0Ap.js";import"./Button-B5JcIIcB.js";import"./small-cross-C-dRKbNY.js";import"./ActionButton-DZcKNYBj.js";import"./Checkbox-Bmhg2B2y.js";import"./useValueChanged-L5FNnMzO.js";import"./CollapsiblePanel-DpxhAw9o.js";import"./MultiColumnSortDialog-vIHLXOvG.js";import"./MenuTrigger-Bgl9RjP3.js";import"./CompositeItem-BpiTOIyl.js";import"./ToolbarRootContext-rjSxP1dE.js";import"./getDisabledMountTransitionStyles-yZsKNqSB.js";import"./getPseudoElementBounds-FXB-giXH.js";import"./chevron-down-BiDqtejG.js";import"./index-DlXpweC6.js";import"./error-B6HE4awo.js";import"./BaseCbacBanner-CyYnHXV7.js";import"./makeExternalStore-Hj73T8jD.js";import"./Tooltip-CKa7DR8P.js";import"./PopoverPopup-CFM-iRBs.js";import"./debounce-DWtsOSeV.js";import"./tick-fClSJcEW.js";import"./DropdownField-BaFSMd8X.js";import"./isEqual-DoT9v07x.js";import"./withOsdkMetrics-Y9b7QhtM.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
