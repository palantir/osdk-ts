import{j as r}from"./iframe-_sjFdmAq.js";import{O as b}from"./object-table-CTlxP_R4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dmd9gfMG.js";import{u as g}from"./useOsdkClient-ZzKuYGir.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DwltTFWt.js";import"./index-CRSgNIa9.js";import"./Dialog-4qjvqay6.js";import"./cross-Dv72_hpq.js";import"./svgIconContainer-BedeSN7M.js";import"./useBaseUiId-5QpKILIQ.js";import"./InternalBackdrop-BHc5wGPm.js";import"./composite-2nXa2kLb.js";import"./index-DDb5dG4i.js";import"./index-CDG4GXO9.js";import"./index-Cf7hmIbi.js";import"./useEventCallback-Bm7WEFMf.js";import"./SkeletonBar-wAqZwJDd.js";import"./LoadingCell-DKnHsqX6.js";import"./ColumnConfigDialog-CdThEmIS.js";import"./DraggableList-tmCYnujm.js";import"./search-D7Px8uCu.js";import"./Input-CRLxf9hA.js";import"./useControlled-BllABFw_.js";import"./isEqual-COhRFLd0.js";import"./isObject-B4kaZFqd.js";import"./Button-DDufaugh.js";import"./ActionButton-B8HgdDq5.js";import"./Checkbox-D106U2Y1.js";import"./useValueChanged-DOIGpNaa.js";import"./CollapsiblePanel-D5QrO41U.js";import"./MultiColumnSortDialog-Cpkrbr5q.js";import"./MenuTrigger-P33Stl4i.js";import"./CompositeItem-Dabrke8K.js";import"./ToolbarRootContext-bAnsIJ5m.js";import"./getDisabledMountTransitionStyles-Qaq6nV66.js";import"./getPseudoElementBounds-75v4OgTn.js";import"./chevron-down-BIgDt-Eo.js";import"./index-EBLySk6J.js";import"./error-w7TsYwMi.js";import"./BaseCbacBanner-D7UxXv5U.js";import"./makeExternalStore-xIxEL6hr.js";import"./Tooltip-C9gVs0nJ.js";import"./PopoverPopup-CO-oz-Q8.js";import"./toNumber-CAERmn9I.js";import"./tick-BOFkJvoA.js";import"./DropdownField-U6htmsLd.js";import"./withOsdkMetrics-CKkOy2IX.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
