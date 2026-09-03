import{j as r}from"./iframe-BfGhSrhj.js";import{O as b}from"./object-table-D57w4M3x.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CEHHlXE-.js";import{u as g}from"./useOsdkClient-BXxAdvut.js";import"./preload-helper-vxwuBi5M.js";import"./Table-Csc7HXTE.js";import"./index-BpzGyY_9.js";import"./Dialog-LUYl8QRA.js";import"./cross-Bn7q8aps.js";import"./svgIconContainer-B7iRS6fY.js";import"./useBaseUiId-Crf4zNct.js";import"./InternalBackdrop-CVI9nmOg.js";import"./composite-BgMCZbwS.js";import"./index-Bi5q9Arz.js";import"./index-DXdjOqiL.js";import"./index-BWg0FpKS.js";import"./useEventCallback-BZV3Iwak.js";import"./SkeletonBar-CEr1E5VO.js";import"./LoadingCell-CWnR_u7w.js";import"./ColumnConfigDialog-BNDdVe-W.js";import"./DraggableList-BoblDgWY.js";import"./search-ByYdnjPp.js";import"./Input-BfWLU8Yl.js";import"./useControlled-Cqj-8esb.js";import"./Button-CF2oqfBr.js";import"./small-cross-DZ73Q1fw.js";import"./ActionButton-_wE0oZ9W.js";import"./Checkbox-sV8w9OKW.js";import"./useValueChanged-Bpisl4CB.js";import"./CollapsiblePanel-BK0gVPbW.js";import"./MultiColumnSortDialog-DqEvvmTL.js";import"./MenuTrigger-3j5xhVQZ.js";import"./CompositeItem-6BwZmfcB.js";import"./ToolbarRootContext-CcKAs7gU.js";import"./getDisabledMountTransitionStyles-QeVB0pEF.js";import"./getPseudoElementBounds-BmPRbc2u.js";import"./chevron-down-CkhCniF6.js";import"./index-D5LJWRJq.js";import"./error-CBS_ohw_.js";import"./BaseCbacBanner-vIuQauGI.js";import"./makeExternalStore-s41uljGH.js";import"./Tooltip-BwJ3b4PV.js";import"./PopoverPopup-CWniRTA-.js";import"./debounce-DNM_Pm0s.js";import"./tick-_Dn2hUgn.js";import"./DropdownField-D4BYnBW1.js";import"./isEqual-2U2BkhhQ.js";import"./withOsdkMetrics-DtIhmsVW.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
