import{j as r}from"./iframe-8pDs9AML.js";import{O as b}from"./object-table-sQi6A6Rl.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DY41K7Y_.js";import{u as g}from"./useOsdkClient-wRikYwpV.js";import"./preload-helper-DR90AuyO.js";import"./Table-CStZcXay.js";import"./index-BgxF440z.js";import"./Dialog-C7GzHvnr.js";import"./cross-FlHZ6uvS.js";import"./svgIconContainer-BOUHKa6M.js";import"./useBaseUiId-Y2Bqc82V.js";import"./InternalBackdrop-DMqXw_ve.js";import"./composite-DXO-Xhg7.js";import"./index-gTFJVjv-.js";import"./index-DoNWJbFe.js";import"./useEventCallback-B_8pzo0G.js";import"./SkeletonBar-CuHnw5RE.js";import"./LoadingCell-DSA5FBAS.js";import"./ColumnConfigDialog-B5tce7iz.js";import"./DraggableList-DUNCFL58.js";import"./search-D5muLECQ.js";import"./Input-ClAW_50X.js";import"./useControlled-DjP6n15o.js";import"./Button-DIdY9EdX.js";import"./small-cross-DgbGi55m.js";import"./ActionButton-CIqGiuh_.js";import"./Checkbox-DFjGO5PY.js";import"./useValueChanged-CwdZzKW1.js";import"./CollapsiblePanel-CbmM2mnP.js";import"./MultiColumnSortDialog-DfNP_Ru7.js";import"./MenuTrigger-D_ErSUHZ.js";import"./CompositeItem-B2g2yaWL.js";import"./ToolbarRootContext-BlIr8usp.js";import"./getDisabledMountTransitionStyles-DqLgMH-z.js";import"./getPseudoElementBounds-C8btizZ2.js";import"./chevron-down-Be7tG24a.js";import"./index-BXm3f9eW.js";import"./error-HBrPbPXF.js";import"./BaseCbacBanner-CkXwAJ2q.js";import"./makeExternalStore-B6vEKUuF.js";import"./Tooltip-B6mBrT6t.js";import"./PopoverPopup-DVuRwmdG.js";import"./debounce-DeNQnw9V.js";import"./tick-Bx8QqUf_.js";import"./DropdownField-DnQ0gVMB.js";import"./isEqual-D2vQtZmd.js";import"./withOsdkMetrics-QxEi4RWI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,Te={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const je=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,je as __namedExportsOrder,Te as default};
