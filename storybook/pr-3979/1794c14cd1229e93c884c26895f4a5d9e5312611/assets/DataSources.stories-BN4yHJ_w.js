import{j as r}from"./iframe-g6xxvyIV.js";import{O as b}from"./object-table-BWyD-xVP.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-27ACc2HP.js";import{u as g}from"./useOsdkClient-DQW7wz7c.js";import"./preload-helper-VtRw9ZxB.js";import"./Table-CWYryIq-.js";import"./index-CswLMQ0k.js";import"./Dialog-gHaoBoVV.js";import"./cross-ClaRDnYq.js";import"./svgIconContainer-TEGni_EK.js";import"./useBaseUiId-DXMdH-da.js";import"./InternalBackdrop-B2kPN_TW.js";import"./composite-CidrPxyb.js";import"./index-B1T8sIVD.js";import"./index-Df1hA2tb.js";import"./index-BqNrJX4d.js";import"./useEventCallback-Q7tlTXVx.js";import"./SkeletonBar-CIK4W8nM.js";import"./LoadingCell-Cf0gPIJl.js";import"./ColumnConfigDialog-TZ-5NdgB.js";import"./DraggableList-TxpAQF2V.js";import"./search-CoUKVa3J.js";import"./Input-DvVClOUT.js";import"./useControlled-DBzkXlO9.js";import"./Button-BX2PLV5j.js";import"./small-cross-DuwCmfeY.js";import"./ActionButton-B6C4Psnv.js";import"./Checkbox-CVKZIi-z.js";import"./useValueChanged-DvWpAsov.js";import"./CollapsiblePanel-RFMs-0SV.js";import"./MultiColumnSortDialog-Dq269Ur2.js";import"./MenuTrigger-BOmmKr51.js";import"./CompositeItem-D8bzrW1A.js";import"./ToolbarRootContext-CnYeU0vp.js";import"./getDisabledMountTransitionStyles-AFQK8iPs.js";import"./getPseudoElementBounds-COVW9G6p.js";import"./chevron-down-CkRfYs8Z.js";import"./index-DuMOiw4h.js";import"./error-BGoiu4dF.js";import"./BaseCbacBanner-y5Sk3JyZ.js";import"./makeExternalStore-BrS-ebeG.js";import"./Tooltip-82FaG7gZ.js";import"./PopoverPopup-MFr_6M87.js";import"./debounce-D2Twfe4R.js";import"./tick-BcR7azTr.js";import"./DropdownField-B2rbjyzb.js";import"./isEqual-D1gQH29y.js";import"./withOsdkMetrics-CfHIwfTt.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
