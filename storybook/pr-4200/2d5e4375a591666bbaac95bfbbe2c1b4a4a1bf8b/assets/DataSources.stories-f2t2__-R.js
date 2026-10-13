import{j as r}from"./iframe-BmlnQTDS.js";import{O as b}from"./object-table-DOQYnjEw.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-29wLxVQ_.js";import{u as g}from"./useOsdkClient-BIu_ph17.js";import"./preload-helper-DfLDZ4kf.js";import"./Table-Bk4jmEEB.js";import"./index-CLn6IkRR.js";import"./Dialog-DeUvC3i9.js";import"./cross-D2DCGJW3.js";import"./svgIconContainer-D7BtKSB4.js";import"./useBaseUiId-CZoncXMq.js";import"./InternalBackdrop-Doq4lLxV.js";import"./composite-JyXlDwio.js";import"./index-DwxQTWS6.js";import"./index-bRRYzA0v.js";import"./index-Baw0QC21.js";import"./useEventCallback-DkTxWfbI.js";import"./SkeletonBar-q0dTxujL.js";import"./LoadingCell-B8_A9HoA.js";import"./ColumnConfigDialog-BXalWpKy.js";import"./DraggableList-B17zV0u2.js";import"./search-C6RrLSu8.js";import"./Input-DqKEEagj.js";import"./useControlled-YYP5n0_h.js";import"./Button-BG-8NdMv.js";import"./small-cross-Dlof1s20.js";import"./ActionButton-DE9HiBY7.js";import"./Checkbox-0QQWmnRC.js";import"./useValueChanged-Ijn1e6pk.js";import"./CollapsiblePanel-RUeZ1P51.js";import"./MultiColumnSortDialog-JJuRHrKX.js";import"./MenuTrigger-BnI9FDU6.js";import"./CompositeItem-DqcihoEf.js";import"./ToolbarRootContext-BMCSjw-P.js";import"./getDisabledMountTransitionStyles-B5FK3Ah0.js";import"./getPseudoElementBounds-897QWYoT.js";import"./chevron-down-CKSiKvYw.js";import"./index-PbmBNDrH.js";import"./error-C-2VL_3O.js";import"./BaseCbacBanner-Ca5lgifE.js";import"./makeExternalStore-qm8KAWql.js";import"./Tooltip-C2k0lBII.js";import"./PopoverPopup-Ci8t5NrM.js";import"./debounce-BY5vTAlu.js";import"./tick-BV5MVFCS.js";import"./DropdownField-B_Iftwd-.js";import"./isEqual-BB6tEofr.js";import"./withOsdkMetrics-CfdTmR9K.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
