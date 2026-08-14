import{j as r}from"./iframe-CyC9Pk-h.js";import{O as b}from"./object-table-BsfP3FvY.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ODt6fLXx.js";import{u as g}from"./useOsdkClient-OoJHmRAM.js";import"./preload-helper-Ba_eiWvD.js";import"./Table-DkLCx0er.js";import"./index-Jw1W-Dcz.js";import"./Dialog-Df0xEOMi.js";import"./cross-D41ZPA6o.js";import"./svgIconContainer-CtuyHuEk.js";import"./useBaseUiId-DA5rbGS_.js";import"./InternalBackdrop-CXPZKbfm.js";import"./composite-DqgZShC5.js";import"./index-DtMSFM7u.js";import"./index-1iTTRwMn.js";import"./index-EHC3aZTC.js";import"./useEventCallback-DSou20rM.js";import"./SkeletonBar-BnfsFDq0.js";import"./LoadingCell-C03pp2fP.js";import"./ColumnConfigDialog-CrbgZEFJ.js";import"./DraggableList-DS0clgRO.js";import"./search-CPABJXMR.js";import"./Input-5xKjP-wg.js";import"./useControlled-C3ihEHs7.js";import"./Button-CqFoA8aV.js";import"./small-cross-BMkUFw8K.js";import"./ActionButton-BVgOXFs6.js";import"./Checkbox-UV88qlOB.js";import"./useValueChanged-03JAa1pz.js";import"./CollapsiblePanel-C1I0lBEL.js";import"./MultiColumnSortDialog-y-WAtbmM.js";import"./MenuTrigger-DGnAtvUa.js";import"./CompositeItem-hsjBXfuI.js";import"./ToolbarRootContext-DTThoWLk.js";import"./getDisabledMountTransitionStyles-wUnEu5YD.js";import"./getPseudoElementBounds-BRBBxDWx.js";import"./chevron-down-CKdV8T0F.js";import"./index-L4eHIYb3.js";import"./error-C7KSTTAG.js";import"./BaseCbacBanner-Bv8g0L1w.js";import"./makeExternalStore-C4_agDxn.js";import"./Tooltip-LWsmRuja.js";import"./PopoverPopup-CE44CbNH.js";import"./debounce-CW6jMS9F.js";import"./tick-BJNw3IpF.js";import"./DropdownField-DxYekBT1.js";import"./isEqual-CqmkzJ1o.js";import"./withOsdkMetrics-BZTfI1Of.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
