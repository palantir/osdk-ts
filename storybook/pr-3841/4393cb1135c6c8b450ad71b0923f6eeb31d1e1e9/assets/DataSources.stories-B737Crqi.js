import{j as r}from"./iframe-BmwK0NB6.js";import{O as b}from"./object-table-BeuJFUAl.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BVkbHAp0.js";import{u as g}from"./useOsdkClient-UKqs4_2L.js";import"./preload-helper-CJI9HYts.js";import"./Table-ChWSbzv8.js";import"./index-NnjawErR.js";import"./Dialog-Cjov8EJt.js";import"./cross-hgFEJfRa.js";import"./svgIconContainer-DHRvXAx1.js";import"./useBaseUiId-DICqGIOz.js";import"./InternalBackdrop-BNdzkB7f.js";import"./composite-C06v5r-q.js";import"./index-DuWg3JLn.js";import"./index-DiZc7AlS.js";import"./index-DX06iv2-.js";import"./useEventCallback-DekRZM9z.js";import"./SkeletonBar-cj1km_Ew.js";import"./LoadingCell-ir3KaEX9.js";import"./ColumnConfigDialog-CinlVjur.js";import"./DraggableList-DsMXG4CE.js";import"./search-Dm097x9N.js";import"./Input-Bfu2n9eX.js";import"./useControlled-D_GkEGnz.js";import"./Button-C7GE2_Px.js";import"./small-cross-ZFjbIYNW.js";import"./ActionButton-DO9pXiqf.js";import"./Checkbox-Bm4hlpwh.js";import"./useValueChanged-CYhlDneB.js";import"./CollapsiblePanel-BlAI9gbe.js";import"./MultiColumnSortDialog-DQlwKNla.js";import"./MenuTrigger-CQQrfhyE.js";import"./CompositeItem-BHcZzMjK.js";import"./ToolbarRootContext-ReHQQSwk.js";import"./getDisabledMountTransitionStyles-D6uMoq56.js";import"./getPseudoElementBounds-7hGlU8g7.js";import"./chevron-down-YY61_NRW.js";import"./index-BpeS-KLN.js";import"./error-CHia6_Yv.js";import"./BaseCbacBanner-BxZMmDMR.js";import"./makeExternalStore-RuIAz4L3.js";import"./Tooltip-yGZeBWi0.js";import"./PopoverPopup-CMLgSpj-.js";import"./debounce-CVCv63C4.js";import"./tick-BXHwy8u9.js";import"./DropdownField-1ya05CQB.js";import"./isEqual-eMF9IvTP.js";import"./withOsdkMetrics-BVS2eODs.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
