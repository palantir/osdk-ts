import{j as r}from"./iframe-D7UqPUqg.js";import{O as b}from"./object-table-Ccj2Z9JG.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CxENl9nV.js";import{u as g}from"./useOsdkClient-DnJBDK7E.js";import"./preload-helper-Cn4dnxMR.js";import"./Table-D5_Y2AlI.js";import"./index-B1myIupO.js";import"./Dialog-Bzp9Dmji.js";import"./cross-Bj6j_CtG.js";import"./svgIconContainer-CDkwNXGT.js";import"./useBaseUiId-cZ22buUA.js";import"./InternalBackdrop-BU5zmbya.js";import"./composite-CksaxzsE.js";import"./index-zv9FWzoH.js";import"./index-CvRiwgND.js";import"./index-DCkE7DLE.js";import"./useEventCallback-DpQrdmgu.js";import"./SkeletonBar-rSY0Z5ln.js";import"./LoadingCell-CoRNkiv5.js";import"./ColumnConfigDialog-Dx0cIFlH.js";import"./DraggableList-DFWysaF6.js";import"./search-Da0O3BMF.js";import"./Input-DUMT1c48.js";import"./useControlled-BvzqTfft.js";import"./Button-zkNcwcgB.js";import"./small-cross-DrNCWiY1.js";import"./ActionButton-TjtigKOe.js";import"./Checkbox-B2WomC0w.js";import"./useValueChanged-D2bDRlLV.js";import"./CollapsiblePanel-BpT5d_FH.js";import"./MultiColumnSortDialog-BfdqZFkJ.js";import"./MenuTrigger-YTDJD5O0.js";import"./CompositeItem-DTU093CG.js";import"./ToolbarRootContext-CLsWTMgH.js";import"./getDisabledMountTransitionStyles-Sn4rIzKN.js";import"./getPseudoElementBounds-D3vL17pM.js";import"./chevron-down-DzpLubs1.js";import"./index-BLUZuP7j.js";import"./error-n93hCEyg.js";import"./BaseCbacBanner-Qr9lUCXK.js";import"./makeExternalStore-hhxh63bW.js";import"./Tooltip-DRRdorsF.js";import"./PopoverPopup-CCdaFP9f.js";import"./debounce-DIX7Ivt7.js";import"./tick-ZzmVR9ck.js";import"./DropdownField-BUbtVZGf.js";import"./isEqual-BHekBUsP.js";import"./withOsdkMetrics-CutvgG7T.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
