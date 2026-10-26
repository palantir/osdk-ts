import{j as r}from"./iframe-CzgnuvEu.js";import{O as b}from"./object-table-DZE1yhi9.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-gQzWulkd.js";import{u as g}from"./useOsdkClient-BHaXbtia.js";import"./preload-helper-BOIiyEUV.js";import"./Table-C0r4YIFX.js";import"./index-DzE9qOqD.js";import"./Dialog-C6gIzk-X.js";import"./cross-BZ8qiqH7.js";import"./svgIconContainer-CqjF4WdJ.js";import"./useBaseUiId-BVmKyOEj.js";import"./InternalBackdrop-DI2I7eRR.js";import"./composite-DYp9sm2c.js";import"./index-CK7PizA2.js";import"./index-8D7uARHg.js";import"./index-pus3Iuu0.js";import"./useEventCallback-DP5etoNb.js";import"./SkeletonBar-tfdRWGle.js";import"./LoadingCell-BVnynEjd.js";import"./ColumnConfigDialog-CyH8mLNb.js";import"./DraggableList-DqCHPyso.js";import"./search-Cwa3Up2s.js";import"./Input-ZYnWFBEZ.js";import"./useControlled-C5aZuSIZ.js";import"./Button-NdiRMwUB.js";import"./small-cross-DSTYA1K8.js";import"./ActionButton-C6BBrtRh.js";import"./Checkbox-C0KN_mwH.js";import"./useValueChanged-CqEHKFBa.js";import"./CollapsiblePanel-O0DPlNmM.js";import"./MultiColumnSortDialog-B3d2ZrNN.js";import"./MenuTrigger-CT9JPRp9.js";import"./CompositeItem-D17OeXfK.js";import"./ToolbarRootContext-DRsejA9Q.js";import"./getDisabledMountTransitionStyles-DxBJ1NRq.js";import"./getPseudoElementBounds-Dyuhd565.js";import"./chevron-down-CcjtSJSE.js";import"./index-D4tXRR6m.js";import"./error-Dn-b8Fhc.js";import"./BaseCbacBanner-COsXYVNU.js";import"./makeExternalStore-b-3Eu4Hx.js";import"./Tooltip-B2E5uvSu.js";import"./PopoverPopup-Cftbj8pR.js";import"./debounce-DvL0klkp.js";import"./tick-DwhgM6ss.js";import"./DropdownField-Bkj49_ok.js";import"./isEqual-BuQ-7_wX.js";import"./withOsdkMetrics-4RonxvLU.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
