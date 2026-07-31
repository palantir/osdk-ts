import{j as r}from"./iframe-D73P9nKc.js";import{O as b}from"./object-table-DDqvLNxE.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BcWDCRk9.js";import{u as g}from"./useOsdkClient-Ccg84nj2.js";import"./preload-helper-BjEBufMF.js";import"./Table-BHBf0L_f.js";import"./index-CirTIIDW.js";import"./Dialog-m199ipGj.js";import"./cross-Dfl2KnYN.js";import"./svgIconContainer-CeFk8pT0.js";import"./useBaseUiId-xBTezciU.js";import"./InternalBackdrop-BVJfWxPc.js";import"./composite-edjiBCvk.js";import"./index-Dwedegj9.js";import"./index-NbMM9cDd.js";import"./index-QCcRxAnf.js";import"./useEventCallback-DOriYqOq.js";import"./SkeletonBar-Cv3e0wLL.js";import"./LoadingCell-WHPSbxRg.js";import"./ColumnConfigDialog-D2gHivhl.js";import"./DraggableList-CRHesyr6.js";import"./search-Dt1g4XkD.js";import"./Input-DJcl3DDq.js";import"./useControlled-RQ2ruCMn.js";import"./isEqual-2gOc909M.js";import"./isObject-CtVfkhnM.js";import"./Button-C_5kgWUY.js";import"./ActionButton-BQDLzjtZ.js";import"./Checkbox-CiXlL5Oh.js";import"./useValueChanged-ClvfWRLt.js";import"./CollapsiblePanel-CvTWvEb4.js";import"./MultiColumnSortDialog-C2W3DrsM.js";import"./MenuTrigger-D3wbWLuX.js";import"./CompositeItem-Ppg2q6Wh.js";import"./ToolbarRootContext-DnVqj7ts.js";import"./getDisabledMountTransitionStyles-BbUkZFU7.js";import"./getPseudoElementBounds-2590HYt7.js";import"./chevron-down-WD0BiTuk.js";import"./index-gmmWqW7B.js";import"./error-CVdJWrUx.js";import"./BaseCbacBanner-sdzO2XYw.js";import"./makeExternalStore-fGwEBPTV.js";import"./Tooltip-BNbgTwM2.js";import"./PopoverPopup-7al-0CgW.js";import"./toNumber-DfL-jis5.js";import"./tick-CNHtCiCU.js";import"./DropdownField-DwRZbsmW.js";import"./withOsdkMetrics-BFaCjj6O.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
