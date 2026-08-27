import{j as r}from"./iframe-Cg0_L8_P.js";import{O as b}from"./object-table-B-9OZqwa.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BVGFod7I.js";import{u as g}from"./useOsdkClient-B4CwtZLv.js";import"./preload-helper-33U0KAdV.js";import"./Table-DJplo8Y0.js";import"./index-DVyjubzR.js";import"./Dialog-C1SmuhvF.js";import"./cross-DAELvuCc.js";import"./svgIconContainer-Dm8ems_M.js";import"./useBaseUiId-DdUu1ljw.js";import"./InternalBackdrop-BypdOSoa.js";import"./composite-BAsr8Kap.js";import"./index-D5kIdvoW.js";import"./index-F9588Jdm.js";import"./index-CtQbOQUW.js";import"./useEventCallback-Dl8nzHTR.js";import"./SkeletonBar-CBLydHyO.js";import"./LoadingCell-BnGpV3tZ.js";import"./ColumnConfigDialog-BHP2AHg_.js";import"./DraggableList-BjEn8ROr.js";import"./search-CTHwA6lI.js";import"./Input-9fPQvd0v.js";import"./useControlled-mwHcpce3.js";import"./Button-8z5S-ilA.js";import"./small-cross-omF_0Y8F.js";import"./ActionButton-CY3H8CFl.js";import"./Checkbox-DHymW5dK.js";import"./useValueChanged-Di6pRa7v.js";import"./CollapsiblePanel-Cfw-oLP0.js";import"./MultiColumnSortDialog-WcO-MkJm.js";import"./MenuTrigger-CqGEFSvm.js";import"./CompositeItem-BnttgNWt.js";import"./ToolbarRootContext-B_XnRMpQ.js";import"./getDisabledMountTransitionStyles-BGMI7KAB.js";import"./getPseudoElementBounds-BEkVLoht.js";import"./chevron-down-CVB5EJv3.js";import"./index-CgP5jim8.js";import"./error-DwBuGVBZ.js";import"./BaseCbacBanner-ChMnFPZB.js";import"./makeExternalStore-El_-ZWlA.js";import"./Tooltip-kBlpZsgK.js";import"./PopoverPopup-C_LJ3T_c.js";import"./debounce-mldfpFwY.js";import"./tick-DRrKLY-r.js";import"./DropdownField-BqNokkFu.js";import"./isEqual-C-oocag7.js";import"./withOsdkMetrics-CULSkWk0.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
