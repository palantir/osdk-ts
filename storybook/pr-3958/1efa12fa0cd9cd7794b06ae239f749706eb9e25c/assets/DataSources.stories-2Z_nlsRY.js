import{j as r}from"./iframe-B26-UX9b.js";import{O as b}from"./object-table-C9x2l5v3.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CNbD44Dy.js";import{u as g}from"./useOsdkClient-D7R-JaCT.js";import"./preload-helper-qgH9prhH.js";import"./Table-DOMvSBP6.js";import"./index-gSzx-VKs.js";import"./Dialog-BBrF0zw7.js";import"./cross-4Wy1lzRG.js";import"./svgIconContainer-CNIysoPo.js";import"./useBaseUiId-BNFolbRL.js";import"./InternalBackdrop-6deiMnyZ.js";import"./composite-B5QPNFwO.js";import"./index-CvJGlMcY.js";import"./index-BdbeSUQe.js";import"./index-DrTJqFym.js";import"./useEventCallback-D-uUzVqw.js";import"./SkeletonBar-Df1XYI_J.js";import"./LoadingCell-CukOSP_9.js";import"./ColumnConfigDialog-C_xAQ7Wv.js";import"./DraggableList-DfKsY10n.js";import"./search-fQO_n2xV.js";import"./Input-SuAL17yL.js";import"./useControlled-BHqUi1Rr.js";import"./Button-BAa0NYG4.js";import"./small-cross-DiC_XmxI.js";import"./ActionButton-CZ5v5Gbt.js";import"./Checkbox-CO5YM7xz.js";import"./useValueChanged-IRSXffCV.js";import"./CollapsiblePanel-Cyh9zt9a.js";import"./MultiColumnSortDialog-CLlsXUoZ.js";import"./MenuTrigger-Brp4P9tg.js";import"./CompositeItem-CL1dJO-b.js";import"./ToolbarRootContext-Dav0NKZT.js";import"./getDisabledMountTransitionStyles-BqJTFbRl.js";import"./getPseudoElementBounds-ziTcDrkP.js";import"./chevron-down-CCwBQ-Op.js";import"./index-DrBipA26.js";import"./error-BBoH6WG4.js";import"./BaseCbacBanner-qXigIY7P.js";import"./makeExternalStore-B7jmTiXs.js";import"./Tooltip-sDanQ0l7.js";import"./PopoverPopup-D0TjUtq8.js";import"./debounce-CdsfP08y.js";import"./tick-DpLCRzEH.js";import"./DropdownField-Qb5LfBsz.js";import"./isEqual-DUwwd1cV.js";import"./withOsdkMetrics-uTMtOsB_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
