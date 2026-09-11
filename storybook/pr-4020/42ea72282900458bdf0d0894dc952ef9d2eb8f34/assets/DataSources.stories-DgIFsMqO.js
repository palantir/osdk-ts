import{j as r}from"./iframe-BAOOmxmu.js";import{O as b}from"./object-table-lyOdhbIm.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ViMfXKqD.js";import{u as g}from"./useOsdkClient-Cb63-21m.js";import"./preload-helper-BIm_Fr-4.js";import"./Table-oXFWfW38.js";import"./index-QY-KQRXF.js";import"./Dialog-D-qSwK9V.js";import"./cross-h2O47eJg.js";import"./svgIconContainer-Bp5LkjRC.js";import"./useBaseUiId-B4ZR21gm.js";import"./InternalBackdrop-CM1IsXud.js";import"./composite-DMwFPLnT.js";import"./index-DDBX-eT9.js";import"./index-20cLn6S1.js";import"./index-BoMMojJ9.js";import"./useEventCallback-DWFrmsqt.js";import"./SkeletonBar-CC4f_ujB.js";import"./LoadingCell-PBZuzgBJ.js";import"./ColumnConfigDialog-BYk1h3uX.js";import"./DraggableList-BKwbFcH0.js";import"./search-D68AVNns.js";import"./Input-d_-ySvYA.js";import"./useControlled-CuqfVZxX.js";import"./Button-btye1J53.js";import"./small-cross-DGk8qS5c.js";import"./ActionButton-Cfr9kbRA.js";import"./Checkbox-De9kV-mT.js";import"./useValueChanged-BSyPbCHB.js";import"./CollapsiblePanel-BN5oNg3z.js";import"./MultiColumnSortDialog-BdHUNwu9.js";import"./MenuTrigger-Di4mAf04.js";import"./CompositeItem-BPZd139z.js";import"./ToolbarRootContext-C5dbAl4m.js";import"./getDisabledMountTransitionStyles-raUh3s1U.js";import"./getPseudoElementBounds-CUG0gOL4.js";import"./chevron-down-Dwrs1hNu.js";import"./index-DyTfUGkB.js";import"./error-BswP0WVl.js";import"./BaseCbacBanner-B-I3Tp0k.js";import"./makeExternalStore-DNiKFXrW.js";import"./Tooltip-BkO9PIng.js";import"./PopoverPopup-CJ9iUHSY.js";import"./debounce-YjlmO8bW.js";import"./tick-BQoQRlmD.js";import"./DropdownField-C3tYCGBa.js";import"./isEqual-C_qKHYvW.js";import"./withOsdkMetrics-C7ktc4nn.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
