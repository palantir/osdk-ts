import{j as r}from"./iframe-CDIPB7O4.js";import{O as b}from"./object-table-CBk3FT5C.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B-S9eKla.js";import{u as g}from"./useOsdkClient-CbwMPEBp.js";import"./preload-helper-DWohjKyq.js";import"./Table-BIigbOGi.js";import"./index-DpqBc055.js";import"./Dialog-SLdFailw.js";import"./cross-DWpFnAxd.js";import"./svgIconContainer-CpRq1kzn.js";import"./useBaseUiId-C53ArP71.js";import"./InternalBackdrop-B9qLr-oe.js";import"./composite-DJpplRBW.js";import"./index-CyMDaR8V.js";import"./index-CKl1c7mw.js";import"./index-DfdGKi8-.js";import"./useEventCallback-DtgIzVYv.js";import"./SkeletonBar-C617US_K.js";import"./LoadingCell-Btgdba_1.js";import"./ColumnConfigDialog-DiXfJIxg.js";import"./DraggableList-CT_M4ECH.js";import"./search-CSd5Haqi.js";import"./Input-B0582SQt.js";import"./useControlled-OIS9RNuC.js";import"./Button-1JczBYxA.js";import"./small-cross-B3Py6K7e.js";import"./ActionButton-B9qD19Gh.js";import"./Checkbox-Bj9DElAv.js";import"./useValueChanged-CvK1p4tX.js";import"./CollapsiblePanel-D70kK-yy.js";import"./MultiColumnSortDialog-E4pJ9M9E.js";import"./MenuTrigger-9NRzM_p-.js";import"./CompositeItem-DHFrcPLh.js";import"./ToolbarRootContext-XxXzxguL.js";import"./getDisabledMountTransitionStyles-CbbCvZI5.js";import"./getPseudoElementBounds-DIxCtFOg.js";import"./chevron-down-DWvOUDyV.js";import"./index-DDzNSFgX.js";import"./error-Q-7f-CPI.js";import"./BaseCbacBanner-ndkTyjjH.js";import"./makeExternalStore-_11RJNTd.js";import"./Tooltip-6qjUPNzc.js";import"./PopoverPopup-iLz8vspv.js";import"./debounce-Cr7GiNN5.js";import"./tick-C6XXwnGc.js";import"./DropdownField-DpCCQaoa.js";import"./isEqual-Bvcs_cF6.js";import"./withOsdkMetrics-DDUsb1yp.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
