import{j as r}from"./iframe-BQiIs3LK.js";import{O as b}from"./object-table-T4goorN8.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bp5udzVG.js";import{u as g}from"./useOsdkClient-ByCOtk2g.js";import"./preload-helper-Dw2jPLDK.js";import"./Table-DseHNMSU.js";import"./index-z86HRZpN.js";import"./Dialog-C4NP9gdP.js";import"./cross-BBOEsUzu.js";import"./svgIconContainer-De2PI1mj.js";import"./useBaseUiId-CLlcPdwB.js";import"./InternalBackdrop-CMbNIGM4.js";import"./composite-CMA2GnO4.js";import"./index-D61lICmk.js";import"./index-zzfNqQm7.js";import"./index-OK0CF_qs.js";import"./useEventCallback-Q6WE3pG5.js";import"./SkeletonBar-BakbpVs6.js";import"./LoadingCell-CAdes-UV.js";import"./ColumnConfigDialog-ANSH7ooC.js";import"./DraggableList-DBzvUx3G.js";import"./search-CwMbCA9x.js";import"./Input-CZoH0d1X.js";import"./useControlled-CUE02bZW.js";import"./Button-mut1rbst.js";import"./small-cross-CG4zdxxi.js";import"./ActionButton-6eqsHTiZ.js";import"./Checkbox-CCoQAGLp.js";import"./useValueChanged-ClDHkrux.js";import"./CollapsiblePanel-C-iaOM6m.js";import"./MultiColumnSortDialog-DJKsNSEv.js";import"./MenuTrigger-CS0F-rlF.js";import"./CompositeItem-B87J6QYh.js";import"./ToolbarRootContext-BJUtIxN4.js";import"./getDisabledMountTransitionStyles-uWkBK1pF.js";import"./getPseudoElementBounds-CjaTZFDC.js";import"./chevron-down-DNRgePmp.js";import"./index-CGjn93Dw.js";import"./error-Cm3qz5vo.js";import"./BaseCbacBanner-M7Tp4sQm.js";import"./makeExternalStore-CZnmcOAZ.js";import"./Tooltip-UKYFeKFX.js";import"./PopoverPopup-D7zJiBr2.js";import"./debounce-ncyQhy3A.js";import"./tick-BiIYLlxf.js";import"./DropdownField-BpZnmzBW.js";import"./isEqual-CCG3YC-I.js";import"./withOsdkMetrics-CvdPVaRc.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
