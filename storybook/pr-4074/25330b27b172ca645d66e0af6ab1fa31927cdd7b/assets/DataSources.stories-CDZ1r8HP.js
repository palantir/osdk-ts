import{j as r}from"./iframe-C1tZXogj.js";import{O as b}from"./object-table-ChvpnUD9.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-j4PdAemp.js";import{u as g}from"./useOsdkClient-CKo6kWe-.js";import"./preload-helper-CPtBFz2Y.js";import"./Table-Dso_zjpC.js";import"./index-DxPI7-w_.js";import"./Dialog-AB3LDpOc.js";import"./cross-D5lRpI2u.js";import"./svgIconContainer-CIq0Uduk.js";import"./useBaseUiId-BME5ZjIK.js";import"./InternalBackdrop-DbtxnMvT.js";import"./composite-cuBDJi1p.js";import"./index-BYD_xDue.js";import"./index-iBT1_a_C.js";import"./index-CLOhAn7T.js";import"./useEventCallback-BZxywBdB.js";import"./SkeletonBar-BBB5XDDC.js";import"./LoadingCell-DXc1oTv7.js";import"./ColumnConfigDialog-LtfvneX9.js";import"./DraggableList-Bo7idBvp.js";import"./search-mQyGpkqY.js";import"./Input-BFJGoRS_.js";import"./useControlled-mPEThvmW.js";import"./Button-IJ98NdC3.js";import"./small-cross-cDNVRd_G.js";import"./ActionButton-DCQj1wHm.js";import"./Checkbox-BnGWGkz1.js";import"./useValueChanged-CQrg9p61.js";import"./CollapsiblePanel-CLo4sI8H.js";import"./MultiColumnSortDialog-DKSvF_Or.js";import"./MenuTrigger-ChXdZfYr.js";import"./CompositeItem-BBNw29UQ.js";import"./ToolbarRootContext-DgDYgZp9.js";import"./getDisabledMountTransitionStyles-yGOiSHQ6.js";import"./getPseudoElementBounds-C_0gJLWO.js";import"./chevron-down-CRmIr1SJ.js";import"./index-D4pImD7i.js";import"./error-Ccxy7sxh.js";import"./BaseCbacBanner-6ZjPD1Pi.js";import"./makeExternalStore-y_SH3e4c.js";import"./Tooltip-DHorPnG5.js";import"./PopoverPopup-CSYBmUnF.js";import"./debounce-DQdrsuD1.js";import"./tick-ptBe7eW4.js";import"./DropdownField-CEVJg6GB.js";import"./isEqual-Dn91gH-p.js";import"./withOsdkMetrics-DODMu06P.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
