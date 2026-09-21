import{j as r}from"./iframe-Dqi9AKQ4.js";import{O as b}from"./object-table-CNNKh8-j.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CIZOlpVi.js";import{u as g}from"./useOsdkClient-DJCPaoyl.js";import"./preload-helper-Bt4Y1gaG.js";import"./Table-CHeMyKlI.js";import"./index-DUzHQ-g1.js";import"./Dialog-CVEvTvZF.js";import"./cross-CViy1YB1.js";import"./svgIconContainer-DBFNWjmD.js";import"./useBaseUiId-D9DZyJv1.js";import"./InternalBackdrop-9H6yZA48.js";import"./composite-BrE87LEg.js";import"./index-BTd5eHZp.js";import"./index-B4xagMAY.js";import"./index-jzpzYf-A.js";import"./useEventCallback-CSNxuTtP.js";import"./SkeletonBar-BPH_PiMF.js";import"./LoadingCell-Dq5OHt88.js";import"./ColumnConfigDialog-WqlkhbFV.js";import"./DraggableList-Cf08_d1z.js";import"./search-DGlyxpi9.js";import"./Input-Bbb9NzYy.js";import"./useControlled-Bofva4ix.js";import"./Button-qQ4ULf31.js";import"./small-cross-INTfkl0O.js";import"./ActionButton-BQpCJoEa.js";import"./Checkbox-wgB5kSQc.js";import"./useValueChanged-Cj0uRmyX.js";import"./CollapsiblePanel-B5Y_UxJj.js";import"./MultiColumnSortDialog-BBVd7IxF.js";import"./MenuTrigger-BSzyIYxi.js";import"./CompositeItem-D9oAX4d7.js";import"./ToolbarRootContext-D53iOUwp.js";import"./getDisabledMountTransitionStyles-CMb5T3sE.js";import"./getPseudoElementBounds-B6ybVaQm.js";import"./chevron-down-B-x5XAQs.js";import"./index-CJftUKPV.js";import"./error-Bfb1Ifz6.js";import"./BaseCbacBanner-DBu6XfxN.js";import"./makeExternalStore-Ckysxwb8.js";import"./Tooltip-B6UHjEmR.js";import"./PopoverPopup-BpgdYdCn.js";import"./debounce-dbUkf27z.js";import"./tick-C57Pc5oH.js";import"./DropdownField-DVa_ve9-.js";import"./isEqual-C5ITjuih.js";import"./withOsdkMetrics-B-BQZlvM.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
