import{j as r}from"./iframe-C23O6NDH.js";import{O as b}from"./object-table-DEdNEfPN.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C03L8fox.js";import{u as g}from"./useOsdkClient-BejxCbr-.js";import"./preload-helper-C6QLezK5.js";import"./Table-BvvhMcgo.js";import"./index-X4EzQgBc.js";import"./Dialog-D5PenwcW.js";import"./cross-PRFvDACG.js";import"./svgIconContainer-CspjXoBM.js";import"./useBaseUiId-Dfg7k-g6.js";import"./InternalBackdrop-DdCETBpF.js";import"./composite-BUM50nEL.js";import"./index-CHGHLDNb.js";import"./index-CBgO55BO.js";import"./index-73jMkPGq.js";import"./useEventCallback-BABfShjI.js";import"./SkeletonBar-6dfzwPVF.js";import"./LoadingCell-BesO1jfE.js";import"./ColumnConfigDialog-BKagR6Mm.js";import"./DraggableList-BDrkDZc5.js";import"./search-Bu-mkKdB.js";import"./Input-Cu2UirtN.js";import"./useControlled-nFjFO6Es.js";import"./Button-jRCHNGhX.js";import"./small-cross-DA8JVgsF.js";import"./ActionButton-IxViueDP.js";import"./Checkbox-Dirazv5i.js";import"./useValueChanged-BcKOfJbz.js";import"./CollapsiblePanel-q28OJpfM.js";import"./MultiColumnSortDialog-CQWItabH.js";import"./MenuTrigger-N6PZJ6lD.js";import"./CompositeItem-MVk24y7z.js";import"./ToolbarRootContext-CCDSBvgO.js";import"./getDisabledMountTransitionStyles-B1tcXlHO.js";import"./getPseudoElementBounds-Buqsg_Bi.js";import"./chevron-down-BjdzvOWL.js";import"./index-BGnkTDfz.js";import"./error-OxS9nPVJ.js";import"./BaseCbacBanner-CtPyhDWU.js";import"./makeExternalStore-B3L7DbLk.js";import"./Tooltip-BrDwoO8-.js";import"./PopoverPopup-BppHB-6W.js";import"./debounce-CCGBaTA1.js";import"./tick-BXFU__eB.js";import"./DropdownField-BxoAoPOe.js";import"./isEqual-B4H-XeQD.js";import"./withOsdkMetrics-B-NwsNBy.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
