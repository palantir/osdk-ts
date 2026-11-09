import{j as r}from"./iframe-CvQ7w9cm.js";import{O as b}from"./object-table-BD6xXVB8.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-cDMIwSPM.js";import{u as g}from"./useOsdkClient-CHxvOOOU.js";import"./preload-helper-DQXfiblR.js";import"./Table-CCxHM7vg.js";import"./index-2iDqrev3.js";import"./Dialog-C8xu7YHc.js";import"./cross-xNEqMC60.js";import"./svgIconContainer-DN6Jj3b-.js";import"./useBaseUiId-Dm6kpRCs.js";import"./InternalBackdrop-CwQyz_cr.js";import"./composite-BwPwzWwu.js";import"./index-Ban7KgTd.js";import"./index-DRIyOfaO.js";import"./index-DnyowYhp.js";import"./useEventCallback-LDd7TooX.js";import"./SkeletonBar-xL8OjV1Y.js";import"./LoadingCell-gZ3203G9.js";import"./ColumnConfigDialog-DgAVaxF2.js";import"./DraggableList-D1fZWSgR.js";import"./search-D1f6LLc_.js";import"./Input-DHzSCAAb.js";import"./useControlled-D1WZsU2S.js";import"./Button-Cq3u6MOe.js";import"./small-cross-B8OuHgpK.js";import"./ActionButton-BLcdgpDk.js";import"./Checkbox-Bo7l3oec.js";import"./useValueChanged-g749mAHL.js";import"./CollapsiblePanel-KnikiUjX.js";import"./MultiColumnSortDialog-DreGQvh8.js";import"./MenuTrigger-DD5xa4vq.js";import"./CompositeItem-BhDBjBvE.js";import"./ToolbarRootContext-DjbW4ahc.js";import"./getDisabledMountTransitionStyles-BKY7Nc99.js";import"./getPseudoElementBounds-P4K_6V9u.js";import"./chevron-down-CVrOZp8I.js";import"./index-F4qb8FGJ.js";import"./error-S-GP8zQ9.js";import"./BaseCbacBanner-C9TbuCH_.js";import"./makeExternalStore-BQ0wnuzx.js";import"./Tooltip-C4qhRtMx.js";import"./isObject-HYSX2VgC.js";import"./debounce-DMAHBIBw.js";import"./tick-92o4E8CL.js";import"./DropdownField-DM7hESN-.js";import"./isEqual-BT_34lmI.js";import"./_baseIsEqual-BzDQjxTy.js";import"./withOsdkMetrics-YRpFiv4w.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
