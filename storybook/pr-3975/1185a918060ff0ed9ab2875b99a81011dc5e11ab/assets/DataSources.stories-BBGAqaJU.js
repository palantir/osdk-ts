import{j as r}from"./iframe-CraWtfc_.js";import{O as b}from"./object-table-CqUIyxj-.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D8_aZUWU.js";import{u as g}from"./useOsdkClient-BiolEA8f.js";import"./preload-helper-B2ygN63P.js";import"./Table-KtYOXFQq.js";import"./index-uggTCp7M.js";import"./Dialog-Y6nV2B8-.js";import"./cross-DBeI7hzA.js";import"./svgIconContainer-C4_0pLg-.js";import"./useBaseUiId-B3gf6Rgr.js";import"./InternalBackdrop-Dg25XYUo.js";import"./composite-DStzulLq.js";import"./index-C7ILWK60.js";import"./index-CE8B_DUN.js";import"./index-DNCvPjCM.js";import"./useEventCallback-DgbAS9H5.js";import"./SkeletonBar-C0h9i0be.js";import"./LoadingCell-D8YQtYke.js";import"./ColumnConfigDialog-BfEFElLi.js";import"./DraggableList-DgvxE2sP.js";import"./search-BX2x7npa.js";import"./Input-BXsVCVWI.js";import"./useControlled-C2EFnSRK.js";import"./Button-CzW3iwgW.js";import"./small-cross-DYP0x5Vu.js";import"./ActionButton-DURMVT6a.js";import"./Checkbox-DeMSOIgB.js";import"./useValueChanged-cqUllIYD.js";import"./CollapsiblePanel-DVQXLfG-.js";import"./MultiColumnSortDialog-CfwBUaEm.js";import"./MenuTrigger-BUKgLqic.js";import"./CompositeItem-D5jj9W4Y.js";import"./ToolbarRootContext-BqVmfek1.js";import"./getDisabledMountTransitionStyles-CLSya5zn.js";import"./getPseudoElementBounds-aRlZ5-U9.js";import"./chevron-down-B7zCZjZp.js";import"./index-KL6FZw16.js";import"./error-CwgXbJjF.js";import"./BaseCbacBanner-BNQ8ukia.js";import"./makeExternalStore-CprYBPlM.js";import"./Tooltip-DzUvCExT.js";import"./PopoverPopup-DG4Ey1uv.js";import"./debounce-DhP8Rurz.js";import"./tick-Daa0kwHZ.js";import"./DropdownField-DO8Lcsso.js";import"./isEqual-Dh2DvVI3.js";import"./withOsdkMetrics-D5fF38B3.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
