import{j as r}from"./iframe-DvvN0iZ4.js";import{O as b}from"./object-table-BvU2mV6M.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BKVzKTX9.js";import{u as g}from"./useOsdkClient-CT8HOadD.js";import"./preload-helper-COgx8bff.js";import"./Table-4GQcTise.js";import"./index-CExWqhF3.js";import"./Dialog-CD80pTON.js";import"./cross-DdXxY3zw.js";import"./svgIconContainer-DO7duNWZ.js";import"./useBaseUiId-BMLYN1z9.js";import"./InternalBackdrop-Dt_apqJW.js";import"./composite-C1x5nTDV.js";import"./index-CK5HdBab.js";import"./index-DU7UvfyD.js";import"./index-VCT57lbz.js";import"./useEventCallback-B5FWisA3.js";import"./SkeletonBar-BWjakb0v.js";import"./LoadingCell-B07D6uPe.js";import"./ColumnConfigDialog-BWxh3ulh.js";import"./DraggableList-G0-kePYg.js";import"./search-iASH-OFa.js";import"./Input-RroOyWit.js";import"./useControlled-BJtimK6V.js";import"./Button-BQEhn0-h.js";import"./small-cross-7Qo1ibsU.js";import"./ActionButton-DM7_AKH6.js";import"./Checkbox-BdeHaX97.js";import"./useValueChanged-hq5i52iF.js";import"./CollapsiblePanel-Ds-Y6JsI.js";import"./MultiColumnSortDialog-BFqkymhQ.js";import"./MenuTrigger-C-RbwST-.js";import"./CompositeItem-D7Fao19X.js";import"./ToolbarRootContext-Yypg0Ver.js";import"./getDisabledMountTransitionStyles-CArUbwJ-.js";import"./getPseudoElementBounds-DXBuHm7V.js";import"./chevron-down-6mjfuih6.js";import"./index-DIu0upuI.js";import"./error-C5MrVcfF.js";import"./BaseCbacBanner-Bs_IuhPB.js";import"./makeExternalStore-DCEfrMP4.js";import"./Tooltip-Ir5DQolV.js";import"./PopoverPopup-CIYN-v4k.js";import"./debounce-D86PTLoo.js";import"./tick-DRXPtG6-.js";import"./DropdownField-CvetrftB.js";import"./isEqual-BHdaAHqt.js";import"./withOsdkMetrics-BfnLSscO.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
