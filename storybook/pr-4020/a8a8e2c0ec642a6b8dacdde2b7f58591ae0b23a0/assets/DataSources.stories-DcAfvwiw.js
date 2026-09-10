import{j as r}from"./iframe-C2ZZ3cOF.js";import{O as b}from"./object-table-D9lkTMXk.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DCj9t2GO.js";import{u as g}from"./useOsdkClient-C074xW8m.js";import"./preload-helper-BJtcF0-s.js";import"./Table-DpsKDQYa.js";import"./index-DsoOCFTI.js";import"./Dialog-BZHpATCh.js";import"./cross--ibNnIEf.js";import"./svgIconContainer-DGGhigwB.js";import"./useBaseUiId-rOymOOAJ.js";import"./InternalBackdrop-DCDgroAI.js";import"./composite-Ddvv9IrU.js";import"./index-CTwT6nYN.js";import"./index-DSVH0ev_.js";import"./index-yDJJIzMt.js";import"./useEventCallback-B3d5wrwR.js";import"./SkeletonBar-CuXnc-bL.js";import"./LoadingCell-CMtPsv4A.js";import"./ColumnConfigDialog-DuvVpeqU.js";import"./DraggableList-C4T7r2IB.js";import"./search-U62jo3I0.js";import"./Input-Dmhhrwdm.js";import"./useControlled-OqQhu2z4.js";import"./Button-D9oV_2gB.js";import"./small-cross-D1YvVRXB.js";import"./ActionButton-Behm8cD1.js";import"./Checkbox-Dnufhn9O.js";import"./useValueChanged-DCNsd_18.js";import"./CollapsiblePanel-omRA8Wab.js";import"./MultiColumnSortDialog-DvXdzalI.js";import"./MenuTrigger-ffNJhOok.js";import"./CompositeItem-DUancClF.js";import"./ToolbarRootContext-B1pHyjdA.js";import"./getDisabledMountTransitionStyles-Baz1yk5y.js";import"./getPseudoElementBounds-CKnr_cwE.js";import"./chevron-down-Btxrg9J1.js";import"./index-DlwYymDm.js";import"./error-fD8lMeVM.js";import"./BaseCbacBanner-tUaxtrFw.js";import"./makeExternalStore-C0CUUcCC.js";import"./Tooltip-_hliLngy.js";import"./PopoverPopup-BaZJt03D.js";import"./debounce-BLIS2g0T.js";import"./tick-BQbrvSw2.js";import"./DropdownField-BLQjRzQd.js";import"./isEqual-cE_q7Xx5.js";import"./withOsdkMetrics-vMcZolIP.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
