import{j as r}from"./iframe-3pBmeYFT.js";import{O as b}from"./object-table-CHJks8jw.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CgluAPM-.js";import{u as g}from"./useOsdkClient-DBkdWm96.js";import"./preload-helper-vBjj0fkZ.js";import"./Table-vdKFS0Yg.js";import"./index-HXkjhg6z.js";import"./Dialog-bohs-JHl.js";import"./cross-Cw8SpRPo.js";import"./svgIconContainer-oYexr0c7.js";import"./useBaseUiId-BX_7JiSc.js";import"./InternalBackdrop-Bf5bS0-N.js";import"./composite-D407pmHd.js";import"./index-C4p6xkMh.js";import"./index-EVh21tlW.js";import"./index-CNtaAiKb.js";import"./useEventCallback-QikBKoT3.js";import"./SkeletonBar-DcraF9ed.js";import"./LoadingCell-CS2lLg3a.js";import"./ColumnConfigDialog-OA7WNg3J.js";import"./DraggableList-Dxq5-d78.js";import"./search-CQOti8kz.js";import"./Input-BQ6oicvc.js";import"./useControlled-MqJ_-6UI.js";import"./Button-DVJw32Da.js";import"./small-cross-4xzNgjst.js";import"./ActionButton-CSRC1G7d.js";import"./Checkbox-4IlBbgeN.js";import"./useValueChanged-Dv4NLcIJ.js";import"./CollapsiblePanel-DN3NPDIL.js";import"./MultiColumnSortDialog-BZTLQdea.js";import"./MenuTrigger-DEPOBuIh.js";import"./CompositeItem-BAzi-4_X.js";import"./ToolbarRootContext-BROspXHg.js";import"./getDisabledMountTransitionStyles-BzXEt7kT.js";import"./getPseudoElementBounds-VW5wliGx.js";import"./chevron-down-CPXZLq0t.js";import"./index-C-EOv5jG.js";import"./error-oFoemtYn.js";import"./BaseCbacBanner-BDE7gmhL.js";import"./makeExternalStore-B9tQcCLS.js";import"./Tooltip-DFKKdGeu.js";import"./PopoverPopup-DWqfD9XE.js";import"./debounce-BUj2tWGy.js";import"./tick-BvsLxO6_.js";import"./DropdownField-vPiacE-M.js";import"./isEqual-DikiAgWF.js";import"./withOsdkMetrics-CZjqmY54.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
