import{j as r}from"./iframe-COeKHpt9.js";import{O as b}from"./object-table-B7sLdCml.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CGJe4MxQ.js";import{u as g}from"./useOsdkClient-0CShZdbB.js";import"./preload-helper-BpPSpj7h.js";import"./Table-CKDpWHE2.js";import"./index--VOZVAr7.js";import"./Dialog-ugSz7x-T.js";import"./cross-D5gXcdmB.js";import"./svgIconContainer-DtZ0wDAF.js";import"./useBaseUiId-AZYk0Vbu.js";import"./InternalBackdrop-QLXBjkD3.js";import"./composite-DvaIADEs.js";import"./index-vOPTDT5X.js";import"./index-Crl2o2c4.js";import"./index-Ds0VFbur.js";import"./useEventCallback-BWCgnPIj.js";import"./SkeletonBar-V0L810li.js";import"./LoadingCell-AkIQZmI8.js";import"./ColumnConfigDialog-OTyAWIPh.js";import"./DraggableList-p7orBze4.js";import"./search-CcRznbWc.js";import"./Input-BgvgMSkQ.js";import"./useControlled-Bj6n9A7a.js";import"./Button-BcUZxYUb.js";import"./small-cross-6sOeNBT7.js";import"./ActionButton-BZHW0fe2.js";import"./Checkbox-oh6Y4Pmu.js";import"./useValueChanged-D7ycyibz.js";import"./CollapsiblePanel-y0qJ1Rd6.js";import"./MultiColumnSortDialog-BpicA9j5.js";import"./MenuTrigger-xJcTAVaC.js";import"./CompositeItem-Dt_9zGFK.js";import"./ToolbarRootContext-DpPmKmnD.js";import"./getDisabledMountTransitionStyles-BWgLfYBf.js";import"./getPseudoElementBounds-CH-q1Mo7.js";import"./chevron-down-BCN0Zf9y.js";import"./index-ImvirjPY.js";import"./error-cky3iDMt.js";import"./BaseCbacBanner-DyCm4eZr.js";import"./makeExternalStore-BnwQyhvv.js";import"./Tooltip-JasgHE7P.js";import"./PopoverPopup-Bmo2uNMt.js";import"./debounce-DGv_zF9U.js";import"./tick-C0ONndDH.js";import"./DropdownField-C5e04fQa.js";import"./isEqual-DF53lAS-.js";import"./withOsdkMetrics-b9tLwYR2.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
