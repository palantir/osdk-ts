import{j as r}from"./iframe-CvsrxUF4.js";import{O as b}from"./object-table-BGRqFDk_.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-bPQwXcW6.js";import{u as g}from"./useOsdkClient-7BSZc32P.js";import"./preload-helper-uWi1ckbZ.js";import"./Table-FapocmMs.js";import"./index-DCyy6adA.js";import"./Dialog-BcIQF-0e.js";import"./cross-DtTtrll4.js";import"./svgIconContainer-DzgbD020.js";import"./useBaseUiId-B5t4I27A.js";import"./InternalBackdrop-Cugch1V3.js";import"./composite-B3OVmB-U.js";import"./index-DJNWwc48.js";import"./index-CEMwvdDY.js";import"./index-AdzqFMQC.js";import"./useEventCallback-CWso9AzW.js";import"./SkeletonBar-DNcYviI0.js";import"./LoadingCell-D4aa-3Yl.js";import"./ColumnConfigDialog-Gsmn_JKq.js";import"./DraggableList-Dt_y-hjj.js";import"./search-DUdimr2h.js";import"./Input-C5HOYdeG.js";import"./useControlled-m2VSv2nN.js";import"./Button-COOo6KA1.js";import"./small-cross-BdHCzf60.js";import"./ActionButton-BacuR1Ht.js";import"./Checkbox-Cu78tutu.js";import"./useValueChanged-DJNKhzCf.js";import"./CollapsiblePanel-C8Ffq7bK.js";import"./MultiColumnSortDialog-CFw1tWaG.js";import"./MenuTrigger-MhD22OcO.js";import"./CompositeItem-Df2qP5O_.js";import"./ToolbarRootContext-CSZctfrL.js";import"./getDisabledMountTransitionStyles-BqX912Sn.js";import"./getPseudoElementBounds-C85wL7-g.js";import"./chevron-down-eSVm9fha.js";import"./index-DWgnpQrU.js";import"./error-DR19w44a.js";import"./BaseCbacBanner-B4OTIvOe.js";import"./makeExternalStore-BsYlQUVX.js";import"./Tooltip-B-kgUKy-.js";import"./PopoverPopup-DNc4ifyx.js";import"./debounce-CNMotwK2.js";import"./tick-NgklbaJL.js";import"./DropdownField-CdiCIvXD.js";import"./isEqual-CIWEuh_q.js";import"./withOsdkMetrics-DQZsQ0ny.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
