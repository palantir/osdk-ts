import{j as r}from"./iframe-Y7AblKoo.js";import{O as b}from"./object-table-BTivezdX.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BSLGKJyw.js";import{u as g}from"./useOsdkClient-Dq_ItsJG.js";import"./preload-helper-CK7oVkVW.js";import"./Table-B6ebySOQ.js";import"./index-D2h1-o7T.js";import"./Dialog-B4i6LldK.js";import"./cross-EOw4MIdf.js";import"./svgIconContainer-DrxH4qgx.js";import"./useBaseUiId-BuabQztq.js";import"./InternalBackdrop-H9HqFIS2.js";import"./composite-DhLfKT7-.js";import"./index-BVzBDJE3.js";import"./index-CAOvocee.js";import"./index-BH7XzZTW.js";import"./useEventCallback-DWticQIx.js";import"./SkeletonBar-RBq0mpfB.js";import"./LoadingCell-DgRp_Wka.js";import"./ColumnConfigDialog-C6nAn6NS.js";import"./DraggableList-CoNVEYuB.js";import"./search-DtmxDMt7.js";import"./Input-CJLZHe4E.js";import"./useControlled-kT-I11in.js";import"./Button-DCccMYap.js";import"./small-cross-tPJDy73P.js";import"./ActionButton-Bt0BBh48.js";import"./Checkbox-CdP8MlRw.js";import"./useValueChanged-DqMWnrli.js";import"./CollapsiblePanel-DN3ZprZ0.js";import"./MultiColumnSortDialog-C5wBEcVl.js";import"./MenuTrigger-DY79qoZy.js";import"./CompositeItem-DBKT_2ic.js";import"./ToolbarRootContext-Dcch5f3c.js";import"./getDisabledMountTransitionStyles-DHnmC01T.js";import"./getPseudoElementBounds-7Teyr0Nw.js";import"./chevron-down-CwpvKa_6.js";import"./index-buXngsZU.js";import"./error-G0IfSF5E.js";import"./BaseCbacBanner-CPCPnZC6.js";import"./makeExternalStore-CPSblPES.js";import"./Tooltip-DcDIeYDv.js";import"./isObject-DheuFrAG.js";import"./debounce-Isp2HaEB.js";import"./tick-HfDmvRCv.js";import"./DropdownField-BMfgbVSv.js";import"./isEqual-Cooqb3we.js";import"./_baseIsEqual-8yhurgMZ.js";import"./withOsdkMetrics-DpuFL858.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
