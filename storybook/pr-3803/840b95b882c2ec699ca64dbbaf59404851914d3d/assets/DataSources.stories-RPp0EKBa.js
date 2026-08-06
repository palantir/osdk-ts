import{j as r}from"./iframe-CwQyvPXr.js";import{O as b}from"./object-table-Dy-Bo_58.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CQS_hP81.js";import{u as g}from"./useOsdkClient-UPo08UPI.js";import"./preload-helper-nPWeI9RW.js";import"./Table-BA0jNj6b.js";import"./index-9af34HI7.js";import"./Dialog-_yh7eAvg.js";import"./cross-DVZdLFyf.js";import"./svgIconContainer-CRE1ctgD.js";import"./useBaseUiId-ChwMhbSq.js";import"./InternalBackdrop-C5uicSal.js";import"./composite-DoyUokVD.js";import"./index-DRKHNjEq.js";import"./index-D-pe9IzG.js";import"./index-BF4luIbb.js";import"./useEventCallback-tfQ8eL-s.js";import"./SkeletonBar-6fYrU5JU.js";import"./LoadingCell-Cgpkfnax.js";import"./ColumnConfigDialog-lKxCjS-f.js";import"./DraggableList-CfLEQ4sK.js";import"./search-BlHvZBtL.js";import"./Input-C6MXRUFM.js";import"./useControlled-C8JNZz-A.js";import"./isEqual-Dk7Jbde7.js";import"./isObject-C_uX0ufT.js";import"./Button-B0hT9H_M.js";import"./ActionButton-DF2889v9.js";import"./Checkbox-CpoDk5nv.js";import"./useValueChanged-B95zsXHE.js";import"./CollapsiblePanel-tuFoizxl.js";import"./MultiColumnSortDialog-GwmWKlU6.js";import"./MenuTrigger-Bz9GdCSD.js";import"./CompositeItem-BIC57Pt6.js";import"./ToolbarRootContext-srCRfALr.js";import"./getDisabledMountTransitionStyles-DoYmXnU9.js";import"./getPseudoElementBounds-E0oqKne9.js";import"./chevron-down-CTW1e4Xq.js";import"./index-DAInQTbe.js";import"./error-UdfzbvcV.js";import"./BaseCbacBanner-D91hBeme.js";import"./makeExternalStore-CqNNKoNM.js";import"./Tooltip-CGx4QCB0.js";import"./PopoverPopup-DR2aT0I2.js";import"./toNumber-7VrwKuG0.js";import"./tick-BrKL1Vur.js";import"./DropdownField-s5EpeKso.js";import"./withOsdkMetrics-DIsQZe29.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
