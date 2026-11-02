import{j as r}from"./iframe-CtuQhrts.js";import{O as b}from"./object-table-YlUjTc0K.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DrMqXajE.js";import{u as g}from"./useOsdkClient-DnuRiMiS.js";import"./preload-helper-E0wvFVRZ.js";import"./Table-BGrfSwce.js";import"./index-DG_eNmx1.js";import"./Dialog-faHULa3j.js";import"./cross-Bdk_6Gl1.js";import"./svgIconContainer-Bnw8yYHV.js";import"./useBaseUiId-CpQCHWr3.js";import"./InternalBackdrop-BospgbT8.js";import"./composite-rVwQZIBy.js";import"./index-BqjCm1NV.js";import"./index-U7XLybOO.js";import"./index-LE5ZN-pU.js";import"./useEventCallback-D_KcFdlG.js";import"./SkeletonBar-ZTa1S77e.js";import"./LoadingCell-CftHdyJQ.js";import"./ColumnConfigDialog-C7eWN8vR.js";import"./DraggableList-DgMfKVWn.js";import"./search-DiP8_a-2.js";import"./Input-CN20E0rX.js";import"./useControlled-rQPfFHM_.js";import"./Button-D7MvWHhh.js";import"./small-cross-CcRiv3Vk.js";import"./ActionButton-TUlJKdYX.js";import"./Checkbox-C-rEKxYr.js";import"./useValueChanged-BbSU7-N0.js";import"./CollapsiblePanel-Dec68hyl.js";import"./MultiColumnSortDialog-BvQQ1Agg.js";import"./MenuTrigger-DofhHtJd.js";import"./CompositeItem-BIxb8BdJ.js";import"./ToolbarRootContext-BcX0gFdV.js";import"./getDisabledMountTransitionStyles-DeAQV4pF.js";import"./getPseudoElementBounds-6SIsw25g.js";import"./chevron-down-COFpbhrT.js";import"./index-Bn7MWlIG.js";import"./error-DEuUm4lv.js";import"./BaseCbacBanner-CymnVS7Y.js";import"./makeExternalStore-hGhxk8h7.js";import"./Tooltip-CIXf8der.js";import"./PopoverPopup-Dh5q1nAE.js";import"./debounce-bY2G5y8x.js";import"./tick-CRwQwU7t.js";import"./DropdownField-D4yZkWIJ.js";import"./isEqual-fa-ZCL8Y.js";import"./withOsdkMetrics-mpxIImLJ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
