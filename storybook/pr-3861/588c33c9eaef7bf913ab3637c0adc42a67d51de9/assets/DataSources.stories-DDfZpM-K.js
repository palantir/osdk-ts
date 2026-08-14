import{j as r}from"./iframe-CBwUUQtW.js";import{O as b}from"./object-table-0xaWUqlZ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CjqbH4vy.js";import{u as g}from"./useOsdkClient-BNMZFRkx.js";import"./preload-helper-CFw_NFcA.js";import"./Table-YGzxKRr5.js";import"./index-cQY6v_um.js";import"./Dialog-B9ReEXqN.js";import"./cross-4fv-Jmha.js";import"./svgIconContainer-Cf3n3CxU.js";import"./useBaseUiId-C9meW85R.js";import"./InternalBackdrop-B-FIOdBL.js";import"./composite-Dosig-Z_.js";import"./index-CpJqyn27.js";import"./index-BfNyjIxY.js";import"./index-Ksij_gkC.js";import"./useEventCallback-BfuBJmbG.js";import"./SkeletonBar-9Y4IZJxt.js";import"./LoadingCell-CZBNP2l0.js";import"./ColumnConfigDialog-ClqQ-I_W.js";import"./DraggableList-PFJqvioG.js";import"./search-D4D4eQBI.js";import"./Input-DGlls_dE.js";import"./useControlled-BpJFCpdY.js";import"./Button-Q3-mVk17.js";import"./small-cross-C_J5UAfw.js";import"./ActionButton-DEThs8fs.js";import"./Checkbox-D2Numq26.js";import"./useValueChanged-CeBJINfY.js";import"./CollapsiblePanel-DWrNNlRd.js";import"./MultiColumnSortDialog-DNPh0R2X.js";import"./MenuTrigger-COi8sKvB.js";import"./CompositeItem-BY3ILgBs.js";import"./ToolbarRootContext-B7OOeP9B.js";import"./getDisabledMountTransitionStyles-l20B6Iy6.js";import"./getPseudoElementBounds-Cl6OXwcO.js";import"./chevron-down-CnjRqozX.js";import"./index-cR5viBYS.js";import"./error-BOVvrWvG.js";import"./BaseCbacBanner-D1P6qnD8.js";import"./makeExternalStore-Cmk4ZnMJ.js";import"./Tooltip-DJVEFLTT.js";import"./PopoverPopup-DR1yzW4I.js";import"./debounce-DZNhRaBF.js";import"./tick-Cug9VCpy.js";import"./DropdownField-CndbXRIy.js";import"./isEqual-E6ni_c_2.js";import"./withOsdkMetrics-BnrNdVzl.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
