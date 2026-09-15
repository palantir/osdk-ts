import{j as r}from"./iframe-DVYiR4EF.js";import{O as b}from"./object-table-sQKT1Hms.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-taq87l7Z.js";import{u as g}from"./useOsdkClient-IgD677I1.js";import"./preload-helper-Dxk87wO7.js";import"./Table-BWsLtIqg.js";import"./index-BHhu1kj6.js";import"./Dialog-D9t2Q_eT.js";import"./cross-Clyp6xFe.js";import"./svgIconContainer-DdXGKFJg.js";import"./useBaseUiId-zYEXD-mx.js";import"./InternalBackdrop-45RWgNJh.js";import"./composite-C7v8Qqey.js";import"./index-DIoaGE9P.js";import"./index-yOUNHIkz.js";import"./index-D7AKpZwx.js";import"./useEventCallback-CL7T-E8E.js";import"./SkeletonBar-DklFIqEo.js";import"./LoadingCell-9wE-_EeY.js";import"./ColumnConfigDialog-2cC7ZUXL.js";import"./DraggableList-BnidScZ4.js";import"./search-CYXYxyYM.js";import"./Input-DXhcExkR.js";import"./useControlled-DcB6TY6E.js";import"./Button-B_OVrsNR.js";import"./small-cross-Dlrwx8kU.js";import"./ActionButton-BPkJKo5R.js";import"./Checkbox-CuQ8P-mi.js";import"./useValueChanged-DGoAYXNJ.js";import"./CollapsiblePanel-CVyMq5pH.js";import"./MultiColumnSortDialog-DrZkFUz7.js";import"./MenuTrigger-CoIP7yCb.js";import"./CompositeItem-DR-oTCoP.js";import"./ToolbarRootContext-DQtyGnCu.js";import"./getDisabledMountTransitionStyles-DLwvsE1G.js";import"./getPseudoElementBounds-CjM1EGF3.js";import"./chevron-down-DS4rSc_R.js";import"./index-F6YJXidF.js";import"./error-BkP1c58R.js";import"./BaseCbacBanner-B0ujK9Fu.js";import"./makeExternalStore-CYe5TaAL.js";import"./Tooltip-B5IkKrvL.js";import"./PopoverPopup-DPI-Oc34.js";import"./debounce-Dh9coxFN.js";import"./tick-HHHCZX4A.js";import"./DropdownField-CbgRYZRX.js";import"./isEqual-CM-FwJhI.js";import"./withOsdkMetrics-B0MkRVBC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
