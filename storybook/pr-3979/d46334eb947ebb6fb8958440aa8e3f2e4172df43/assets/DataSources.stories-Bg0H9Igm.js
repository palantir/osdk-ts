import{j as r}from"./iframe-CK5D4Vrc.js";import{O as b}from"./object-table-odZsr0rd.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BZzAF0rX.js";import{u as g}from"./useOsdkClient-DQg5y7FA.js";import"./preload-helper--rfFAAg9.js";import"./Table-B6H8EmOv.js";import"./index-DTCKW3FC.js";import"./Dialog-MAq9T2A5.js";import"./cross-DqRqsA-Z.js";import"./svgIconContainer-B-9rvjfq.js";import"./useBaseUiId-ChiwJHU0.js";import"./InternalBackdrop-Dbr5rYW1.js";import"./composite-EY5o54z0.js";import"./index-B0VFCsPS.js";import"./index-Bf8FWlfU.js";import"./index-vAIMW8Pw.js";import"./useEventCallback-CDnpJnS0.js";import"./SkeletonBar-DauQo2dk.js";import"./LoadingCell-CgV3bQ4z.js";import"./ColumnConfigDialog-izBtKiAL.js";import"./DraggableList-CanQdJdW.js";import"./search-CQswBcjf.js";import"./Input-BkbLF__D.js";import"./useControlled-EjNIu-gh.js";import"./Button-QI0ogqOo.js";import"./small-cross-CvPfbhzU.js";import"./ActionButton-CMbHUj5v.js";import"./Checkbox-BHP2yOKQ.js";import"./useValueChanged-Bmru0ySn.js";import"./CollapsiblePanel-B9cQatbS.js";import"./MultiColumnSortDialog-BFioXfJ3.js";import"./MenuTrigger-BHa9H6Qv.js";import"./CompositeItem-GR3Crn-r.js";import"./ToolbarRootContext-fQ8fBJNz.js";import"./getDisabledMountTransitionStyles-CKHIKkcN.js";import"./getPseudoElementBounds-D8b8g-_9.js";import"./chevron-down-Bfelo19f.js";import"./index-BRqooFTa.js";import"./error-BTGDM8SC.js";import"./BaseCbacBanner-Ca5YQ56m.js";import"./makeExternalStore-BGHIEiJx.js";import"./Tooltip-L8rEht9z.js";import"./PopoverPopup-Wqv_QtzO.js";import"./debounce-BESlaVbz.js";import"./tick-Dc4uWMLG.js";import"./DropdownField-C2vkPRGk.js";import"./isEqual-N3gXTKiL.js";import"./withOsdkMetrics-BNMaUBqJ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
