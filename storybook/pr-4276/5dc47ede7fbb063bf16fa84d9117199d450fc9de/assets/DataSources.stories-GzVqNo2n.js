import{j as r}from"./iframe-BPsV-cND.js";import{O as b}from"./object-table-Bd84NMYm.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-vbf2SBmE.js";import{u as g}from"./useOsdkClient-CEOi39dU.js";import"./preload-helper-B1nX7WCL.js";import"./Table-CRdgNMKl.js";import"./index-npdz9ccL.js";import"./Dialog-CSELK3mA.js";import"./cross-e0Z9OM7S.js";import"./svgIconContainer-CZZJ1Sam.js";import"./useBaseUiId-CFNxIaBI.js";import"./InternalBackdrop-BYQB8CTu.js";import"./composite-Cd7xAWbk.js";import"./index-g7oHnE4A.js";import"./index-DLTSwoUf.js";import"./index-Qjyvj9j-.js";import"./useEventCallback-CQwery97.js";import"./SkeletonBar-Hu0BRFFS.js";import"./LoadingCell-D8F06a6N.js";import"./ColumnConfigDialog-iYnSyDeg.js";import"./DraggableList-CsuTCxVA.js";import"./search-hkaYb7x5.js";import"./Input-BkWiOI8x.js";import"./useControlled-DoUE8kJv.js";import"./Button-DLrft56q.js";import"./small-cross-DPwXBijp.js";import"./ActionButton-DM5XNJmd.js";import"./Checkbox-C7UDq2FQ.js";import"./useValueChanged-DyOnhIxB.js";import"./CollapsiblePanel-CYve3QRN.js";import"./MultiColumnSortDialog-D3tMXdvS.js";import"./MenuTrigger-BUk58eZp.js";import"./CompositeItem-HwzticEg.js";import"./ToolbarRootContext-B-c1meOe.js";import"./getDisabledMountTransitionStyles-CBO3vWZa.js";import"./getPseudoElementBounds-BtlBYKnw.js";import"./chevron-down-C-mS6li4.js";import"./index-arYZ6QX0.js";import"./error-Cql48BE9.js";import"./BaseCbacBanner-2tiUvTZ2.js";import"./makeExternalStore-CCTjlDRd.js";import"./Tooltip-D6UWtj7x.js";import"./isObject-CcXWBQ_P.js";import"./debounce-DEe1oMkc.js";import"./tick-RH3_NPL7.js";import"./DropdownField-DFiIaddS.js";import"./isEqual-CBxAtas3.js";import"./_baseIsEqual-BK77yKGx.js";import"./withOsdkMetrics-DzJKMlE9.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
