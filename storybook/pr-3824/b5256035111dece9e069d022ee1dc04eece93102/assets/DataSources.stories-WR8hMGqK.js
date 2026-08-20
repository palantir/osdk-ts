import{j as r}from"./iframe-BApgeGXl.js";import{O as b}from"./object-table-L9Ky81ED.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CEZ8CrHF.js";import{u as g}from"./useOsdkClient-UetNUWte.js";import"./preload-helper-B5SDrfLX.js";import"./Table-CYUy2OZk.js";import"./index-D1DKxRCC.js";import"./Dialog-BUikXbV8.js";import"./cross-ZTt9cbvY.js";import"./svgIconContainer-DsyE7o9I.js";import"./useBaseUiId-HvC3sL6i.js";import"./InternalBackdrop--ZTWLfQl.js";import"./composite-CfLZxk0Y.js";import"./index-D6GjFiH-.js";import"./index-T-rcUtZ2.js";import"./index-BjC4jF9D.js";import"./useEventCallback-BnHXtP8m.js";import"./SkeletonBar-CFo_1ayu.js";import"./LoadingCell-BHTZiZSs.js";import"./ColumnConfigDialog-CxHOLgQs.js";import"./DraggableList-iPa5GZpO.js";import"./search-DA1A23L5.js";import"./Input-JtvTue8M.js";import"./useControlled-DwtdN-yM.js";import"./Button-C7YfkSI7.js";import"./small-cross-Vh49dVTG.js";import"./ActionButton-juathNjQ.js";import"./Checkbox-C7tXqNxh.js";import"./useValueChanged-e4ysBGYq.js";import"./CollapsiblePanel-B5H4huYa.js";import"./MultiColumnSortDialog-Ch07S50J.js";import"./MenuTrigger-DHzhysiY.js";import"./CompositeItem-Di2z5EXS.js";import"./ToolbarRootContext-BucTdyIl.js";import"./getDisabledMountTransitionStyles-B5BYpj3H.js";import"./getPseudoElementBounds-ATfKY2eH.js";import"./chevron-down-DFCusqRp.js";import"./index-BZG1se71.js";import"./error-D3Ew2_Fi.js";import"./BaseCbacBanner-Bee4-SeT.js";import"./makeExternalStore-DvSdjbOg.js";import"./Tooltip-Ca9hBF2Y.js";import"./PopoverPopup-DGPJk_zW.js";import"./debounce-BnXt5WXY.js";import"./tick-CxJ8OjsD.js";import"./DropdownField-CITGD--l.js";import"./isEqual-uxWSHrgG.js";import"./withOsdkMetrics-RpuKM6nt.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
