import{j as r}from"./iframe-DK1Bt9lv.js";import{O as b}from"./object-table-BJfc_JiE.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Hrk4Ac6J.js";import{u as g}from"./useOsdkClient-CKcJlW4_.js";import"./preload-helper-Ce-wMa_v.js";import"./Table-BvfijykH.js";import"./index-CJSZk4qc.js";import"./Dialog-DeDAzYSk.js";import"./cross-Bx8fvQ0o.js";import"./svgIconContainer-DnjSjGLw.js";import"./useBaseUiId-DcgI8Re9.js";import"./InternalBackdrop-DeJUZl5c.js";import"./composite-IGJfPAlR.js";import"./index-BrXtLi8t.js";import"./index-CNbmxn8b.js";import"./index-DLgHg94v.js";import"./useEventCallback-DsecKjof.js";import"./SkeletonBar-DYCXLh-o.js";import"./LoadingCell-BRKLo6k7.js";import"./ColumnConfigDialog-BmxPhrz9.js";import"./DraggableList-5MSRI83R.js";import"./search-DHCd6J0K.js";import"./Input-AKXtTaZ-.js";import"./useControlled-vdS8rpXB.js";import"./isEqual-DrfEbAtv.js";import"./isObject-CbGGjkoY.js";import"./Button-pHFcucNO.js";import"./ActionButton-Dl2tXDzA.js";import"./Checkbox-CsCjtHTy.js";import"./useValueChanged-CNGxwAjW.js";import"./CollapsiblePanel-mjGJ_uYQ.js";import"./MultiColumnSortDialog-DUErvo2r.js";import"./MenuTrigger-9rcHn7MF.js";import"./CompositeItem-ZQw-TopT.js";import"./ToolbarRootContext-B7RkTGG6.js";import"./getDisabledMountTransitionStyles-1XkDDMjF.js";import"./getPseudoElementBounds-COD7nLet.js";import"./chevron-down-P75F9EWq.js";import"./index-C4v2X0sV.js";import"./error-DuaK5v6b.js";import"./BaseCbacBanner-BrSR8m67.js";import"./makeExternalStore-CwRDfOI3.js";import"./Tooltip-nETMUHwn.js";import"./PopoverPopup-CWfM8YvS.js";import"./toNumber-CgJ7wHM0.js";import"./tick-Bb3xLDWX.js";import"./DropdownField-rJUVruli.js";import"./withOsdkMetrics-BJBKWdiy.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
