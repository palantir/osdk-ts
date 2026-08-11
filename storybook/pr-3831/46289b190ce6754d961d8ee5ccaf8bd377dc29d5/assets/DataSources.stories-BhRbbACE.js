import{j as r}from"./iframe-YaQI_dO_.js";import{O as b}from"./object-table-DTMLmX_F.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CAhJq9ZE.js";import{u as g}from"./useOsdkClient-C4hdQt4q.js";import"./preload-helper-BJlRXhvO.js";import"./Table-BMCUymSg.js";import"./index-BII9TVsB.js";import"./Dialog-BI0EjcJg.js";import"./cross-CxRmiocS.js";import"./svgIconContainer-DmCuTEF7.js";import"./useBaseUiId-hHgDQcmK.js";import"./InternalBackdrop-DT0fNcd1.js";import"./composite-s68hKVHL.js";import"./index-D8V8l3ab.js";import"./index-CroinZGW.js";import"./index-DJsQUQlC.js";import"./useEventCallback-ie83a-jf.js";import"./SkeletonBar-BqWGbmhz.js";import"./LoadingCell-C-QYXJdr.js";import"./ColumnConfigDialog-CJq4n8G8.js";import"./DraggableList-CU1rhZLa.js";import"./search-Bq1E_0aL.js";import"./Input-Cychji4a.js";import"./useControlled-DsDu70zE.js";import"./isEqual-aF-EIYIf.js";import"./isObject-DNcBX0Dm.js";import"./Button-CKHrXp_-.js";import"./ActionButton-BiOe6h1y.js";import"./Checkbox-Bz9L8TnP.js";import"./useValueChanged-ByAXuwVy.js";import"./CollapsiblePanel-BaYf_xkc.js";import"./MultiColumnSortDialog-xTHqHvBT.js";import"./MenuTrigger-B3xPmUZs.js";import"./CompositeItem-Bdp4KkQW.js";import"./ToolbarRootContext-DnHqnj_P.js";import"./getDisabledMountTransitionStyles-rIVtDLVA.js";import"./getPseudoElementBounds-C_PfG-85.js";import"./chevron-down-_xlutfBF.js";import"./index-pW2uRZ-o.js";import"./error-B-n8pXYz.js";import"./BaseCbacBanner-DsnrhKSU.js";import"./makeExternalStore-A6cpUQ1F.js";import"./Tooltip-BRwjQXXJ.js";import"./PopoverPopup-CP3an7oo.js";import"./toNumber-DBkGiOal.js";import"./tick-CuXPM17c.js";import"./DropdownField-CGth-Ppv.js";import"./withOsdkMetrics-DuLoxkUu.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
