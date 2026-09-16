import{j as r}from"./iframe-CChix_Ju.js";import{O as b}from"./object-table-W3AwL5m5.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D6gGJzUF.js";import{u as g}from"./useOsdkClient-BuYYPMjl.js";import"./preload-helper-DGn9W5qi.js";import"./Table-ClI-xhR1.js";import"./index-pvPqNL-H.js";import"./Dialog-C0wKlZ34.js";import"./cross-CUi9b35_.js";import"./svgIconContainer-BeYzdFE0.js";import"./useBaseUiId-4A8uRFRe.js";import"./InternalBackdrop-0GHCyljD.js";import"./composite-Ctdw8swW.js";import"./index-CHXlKmK_.js";import"./index-BdOozmQn.js";import"./index-DzZ5SHau.js";import"./useEventCallback-omUHy35f.js";import"./SkeletonBar-CyTCelnP.js";import"./LoadingCell-CikoTcWZ.js";import"./ColumnConfigDialog-DbwfwSdP.js";import"./DraggableList-Dn_ahx7T.js";import"./search-CX5b2IB4.js";import"./Input-BRtUQT1Y.js";import"./useControlled-CG8Zt7_4.js";import"./Button-BRITeuER.js";import"./small-cross-CocjBOU4.js";import"./ActionButton-BOCIBxLx.js";import"./Checkbox-C9LUYdAG.js";import"./useValueChanged-5TXMPTNO.js";import"./CollapsiblePanel-C6nKBTkT.js";import"./MultiColumnSortDialog-BGo8dzST.js";import"./MenuTrigger-DmLCLZNx.js";import"./CompositeItem-Dh0FwBF1.js";import"./ToolbarRootContext-4N77tOAl.js";import"./getDisabledMountTransitionStyles-Dqw8IpJe.js";import"./getPseudoElementBounds-BZu9KNVE.js";import"./chevron-down-DL0MqWR7.js";import"./index-Bmjlrc5X.js";import"./error-fDpd87S9.js";import"./BaseCbacBanner-b0DOB5bF.js";import"./makeExternalStore-Cw3jon-H.js";import"./Tooltip-D0QIy-LD.js";import"./PopoverPopup-ZgO3OX-R.js";import"./debounce-y_QKH6vw.js";import"./tick-BaB62fCb.js";import"./DropdownField-BHcpSdCb.js";import"./isEqual-CLIiWmbM.js";import"./withOsdkMetrics-DIof6Ugt.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
