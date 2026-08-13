import{j as r}from"./iframe-C8cvGscG.js";import{O as b}from"./object-table-Bl9llTCt.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C-mm8OQQ.js";import{u as g}from"./useOsdkClient-BOTALPg3.js";import"./preload-helper-DC1YHagZ.js";import"./Table-BVcwqCvL.js";import"./index-D4FQYl0T.js";import"./Dialog-RKsRHohX.js";import"./cross-CprIKEkv.js";import"./svgIconContainer-D4IADJhB.js";import"./useBaseUiId-CTQW4Qod.js";import"./InternalBackdrop-BV3x9fEB.js";import"./composite-BI_-Y8ZI.js";import"./index-Cv_Heaoa.js";import"./index-oJ8Xwr6M.js";import"./index-B2ai54ZH.js";import"./useEventCallback-DsFzeAUD.js";import"./SkeletonBar-cjwpOSyO.js";import"./LoadingCell-Dd5UKK1z.js";import"./ColumnConfigDialog-Cg99CLu5.js";import"./DraggableList-CcV87Ef7.js";import"./search-DscZjBaM.js";import"./Input-4ZH7Uf17.js";import"./useControlled-DPYDb1X5.js";import"./Button-s9umFZ1s.js";import"./small-cross-DIzXOG7S.js";import"./ActionButton-QzUJAPB3.js";import"./Checkbox-BmClsKng.js";import"./useValueChanged-QH4DQ2zL.js";import"./CollapsiblePanel-5tt-I1EX.js";import"./MultiColumnSortDialog-vSwuKr4r.js";import"./MenuTrigger-DU4NXXCA.js";import"./CompositeItem-CZOJvSSZ.js";import"./ToolbarRootContext-DOPDMGFM.js";import"./getDisabledMountTransitionStyles-EkzwfJQM.js";import"./getPseudoElementBounds-BljzcTzT.js";import"./chevron-down-Bg2Fi8_v.js";import"./index-BTdV_y6h.js";import"./error-BmJxtr8m.js";import"./BaseCbacBanner-3TLBV2iJ.js";import"./makeExternalStore-a9HEG5rq.js";import"./Tooltip-BO4BL-3C.js";import"./PopoverPopup-D6rFG9a_.js";import"./toNumber-DmqLeUcD.js";import"./tick-Dq7YPYRG.js";import"./DropdownField-BoUvaA8o.js";import"./withOsdkMetrics-Bep4H7WL.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,Te={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
