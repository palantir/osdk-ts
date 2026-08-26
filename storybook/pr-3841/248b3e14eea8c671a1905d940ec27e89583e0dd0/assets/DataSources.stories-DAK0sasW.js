import{j as r}from"./iframe-IE85mU0C.js";import{O as b}from"./object-table-VIQdSIiM.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DC6Q5Eqs.js";import{u as g}from"./useOsdkClient-C_Z8b3Qp.js";import"./preload-helper-BOAVNMzj.js";import"./Table-BUUulN0Y.js";import"./index-Cb-uWra3.js";import"./Dialog-CZVPdwGB.js";import"./cross-B7J67M4-.js";import"./svgIconContainer-DstMKe-n.js";import"./useBaseUiId-ChrCSMbI.js";import"./InternalBackdrop-BJ4sp-TV.js";import"./composite-mlo2KNAb.js";import"./index-CBYXm5R5.js";import"./index-6Itdkxzy.js";import"./index-BsUZ9W2f.js";import"./useEventCallback-BDUXB78A.js";import"./SkeletonBar-DPNqEMQ-.js";import"./LoadingCell-d80XHTZ_.js";import"./ColumnConfigDialog-DMOAQiEJ.js";import"./DraggableList-CdhbZ45T.js";import"./search-OX4J1wJ3.js";import"./Input-BPNEbKHH.js";import"./useControlled-BXrD1fp6.js";import"./Button-B-X3VNkp.js";import"./small-cross-FEZjqabC.js";import"./ActionButton-Bmb7hpam.js";import"./Checkbox-DfUuehp8.js";import"./useValueChanged--7cQqyYE.js";import"./CollapsiblePanel-CbdW_t08.js";import"./MultiColumnSortDialog-DYFh7fse.js";import"./MenuTrigger-CfqEz4nM.js";import"./CompositeItem-DZQ4wuX3.js";import"./ToolbarRootContext-Bkab47o6.js";import"./getDisabledMountTransitionStyles-D2JDsEiR.js";import"./getPseudoElementBounds-CsgiHNji.js";import"./chevron-down-DF5Twgp3.js";import"./index-BNUcpvM4.js";import"./error-C3z-yM5U.js";import"./BaseCbacBanner-DCvcYvuq.js";import"./makeExternalStore-B2AoPMSj.js";import"./Tooltip-BwBdjepj.js";import"./PopoverPopup-DEA0O1h4.js";import"./debounce-DBEu6yXI.js";import"./tick-DXtXHPPs.js";import"./DropdownField-wEalnpiM.js";import"./isEqual-B5lM3oF_.js";import"./withOsdkMetrics-BRxVuFD2.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
