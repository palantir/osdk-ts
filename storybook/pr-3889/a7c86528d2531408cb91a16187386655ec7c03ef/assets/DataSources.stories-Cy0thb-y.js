import{j as r}from"./iframe-Cpw76Sdc.js";import{O as b}from"./object-table-BRLY5aCa.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-GootCwZc.js";import{u as g}from"./useOsdkClient-CPHnoq0t.js";import"./preload-helper-8AbM0gOB.js";import"./Table-2dgTr2pA.js";import"./index-zPQhZCVL.js";import"./Dialog-BSbzRySi.js";import"./cross-CHILGXBp.js";import"./svgIconContainer-BD5xY0XD.js";import"./useBaseUiId-iIyXPd8a.js";import"./InternalBackdrop-CrzPvv-e.js";import"./composite-BiHZiM_o.js";import"./index-DyQIyZ_o.js";import"./index-CCh0UBc-.js";import"./index-mvHbpu9m.js";import"./useEventCallback-DwTyub1b.js";import"./SkeletonBar-BN28IWus.js";import"./LoadingCell-BAqjE1Zt.js";import"./ColumnConfigDialog-d5-jecqO.js";import"./DraggableList-xj-JSUxt.js";import"./search-C6EHfnm3.js";import"./Input-CtOgxGdW.js";import"./useControlled-JdKni9kg.js";import"./Button-CKa97gQA.js";import"./small-cross-CvcLh5v8.js";import"./ActionButton-DSv4OBq1.js";import"./Checkbox-B0Igi9Ut.js";import"./useValueChanged-CYl-xbrr.js";import"./CollapsiblePanel-kMyKToA5.js";import"./MultiColumnSortDialog-BfsEwFQ5.js";import"./MenuTrigger-B1YYjSiM.js";import"./CompositeItem-CvHmtrv6.js";import"./ToolbarRootContext-BkMaLa5M.js";import"./getDisabledMountTransitionStyles-mn_22XPf.js";import"./getPseudoElementBounds-C6mykXXF.js";import"./chevron-down-CZx_QJYn.js";import"./index-CDcUaHOJ.js";import"./error-Cf9QFWnN.js";import"./BaseCbacBanner-5_yWfNz5.js";import"./makeExternalStore-BBzTQwwa.js";import"./Tooltip-BpKwVBux.js";import"./PopoverPopup-CexomEcT.js";import"./debounce-B--H28BV.js";import"./tick-DGRCvyHI.js";import"./DropdownField-cOQ5lTMI.js";import"./isEqual-DDjWjXdA.js";import"./withOsdkMetrics-DWbYyS_O.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
