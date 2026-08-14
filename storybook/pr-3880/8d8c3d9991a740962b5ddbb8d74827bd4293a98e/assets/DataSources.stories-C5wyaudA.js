import{j as r}from"./iframe-CfXo_xGs.js";import{O as b}from"./object-table-BvqZ3CMp.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ANd6khvk.js";import{u as g}from"./useOsdkClient-23LGP0yF.js";import"./preload-helper-DICGDLzn.js";import"./Table-D607lmpx.js";import"./index-CnGqDH_i.js";import"./Dialog-BxTvGKLX.js";import"./cross-BJtxhdST.js";import"./svgIconContainer-BAtltPp3.js";import"./useBaseUiId-DtsL1qz-.js";import"./InternalBackdrop-Bz8Dw8Ib.js";import"./composite-DPZWJgUc.js";import"./index-B5L6vnyq.js";import"./index-8kojcasY.js";import"./index-DppFUAq0.js";import"./useEventCallback-CQY5FeQg.js";import"./SkeletonBar-Dou4RbGj.js";import"./LoadingCell-ys6iwyAU.js";import"./ColumnConfigDialog-BSDdqq1g.js";import"./DraggableList-QdOnTU-N.js";import"./search-khU-kTlh.js";import"./Input-6L5IGU13.js";import"./useControlled-zSImE_Ef.js";import"./Button-Ctf32UkD.js";import"./small-cross-qncZTNbn.js";import"./ActionButton-xvOEHwP5.js";import"./Checkbox-BcLi88Jr.js";import"./useValueChanged-NcxPg-on.js";import"./CollapsiblePanel-B97m10Lh.js";import"./MultiColumnSortDialog-B5w_sXlo.js";import"./MenuTrigger-D0jw3WCx.js";import"./CompositeItem-B8aCK6n2.js";import"./ToolbarRootContext-D_iTI7z6.js";import"./getDisabledMountTransitionStyles-lw59aPL7.js";import"./getPseudoElementBounds-DjC2xHva.js";import"./chevron-down-Bw0n8vBX.js";import"./index-Wx3Cvrm7.js";import"./error-DO1H2NAA.js";import"./BaseCbacBanner-DFO4Q86h.js";import"./makeExternalStore-BUEQbKkl.js";import"./Tooltip-7EqCRI09.js";import"./PopoverPopup-pGLd2R6N.js";import"./debounce-DI-ivBUV.js";import"./tick-oAiLguH-.js";import"./DropdownField-DPZX800G.js";import"./isEqual-C5PNU0hp.js";import"./withOsdkMetrics-BfkC7ecP.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
