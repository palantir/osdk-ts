import{j as r}from"./iframe-BatTRwfa.js";import{O as b}from"./object-table-Dsf1CmcX.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BrtsrKhY.js";import{u as g}from"./useOsdkClient-xL_Zv1WO.js";import"./preload-helper-1dO9BeYB.js";import"./Table-UGxGyS0c.js";import"./index-DOW0CwQC.js";import"./Dialog-CAUjG_JD.js";import"./cross-BDeJmnrY.js";import"./svgIconContainer-BEJ8Uc8u.js";import"./useBaseUiId-DvfpcKJo.js";import"./InternalBackdrop-Zmd-LiLm.js";import"./composite-BBv4613M.js";import"./index-CjHrbaV9.js";import"./index-zVbC2njb.js";import"./index-H8QjAumC.js";import"./useEventCallback-YevN6u6r.js";import"./SkeletonBar-qWyKnZi_.js";import"./LoadingCell-81BR8Q6M.js";import"./ColumnConfigDialog-CVJ-Cu2x.js";import"./DraggableList-CLyslS_q.js";import"./search-CZvhHXAJ.js";import"./Input-C5LDgX9X.js";import"./useControlled-STn9JHtw.js";import"./Button-Du5jWjff.js";import"./small-cross-BPhAxJ8u.js";import"./ActionButton-BpZcQi9r.js";import"./Checkbox-DTGFBCTS.js";import"./useValueChanged-EUrHxfvD.js";import"./CollapsiblePanel--VPjmuy-.js";import"./MultiColumnSortDialog-Cion4ZU5.js";import"./MenuTrigger-CDiim23S.js";import"./CompositeItem-5Yv0-9Y-.js";import"./ToolbarRootContext-DNGFWytt.js";import"./getDisabledMountTransitionStyles-OE1kchG2.js";import"./getPseudoElementBounds-BD9k5WkF.js";import"./chevron-down-DrwZYKMn.js";import"./index-DAlaDr9m.js";import"./error-D_Nf9rBh.js";import"./BaseCbacBanner-CeTOgFrI.js";import"./makeExternalStore-CnkPGtRT.js";import"./Tooltip-IQeYH35x.js";import"./PopoverPopup-D35Mz83O.js";import"./debounce-BtG4PIwW.js";import"./tick-DUFPZnzG.js";import"./DropdownField-CnB7jcM7.js";import"./isEqual-CZr5_eZA.js";import"./withOsdkMetrics-C5QyIn2v.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
