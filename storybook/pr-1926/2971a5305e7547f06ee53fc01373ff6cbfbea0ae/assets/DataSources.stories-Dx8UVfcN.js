import{j as r}from"./iframe-C66sw3ty.js";import{O as b}from"./object-table-Bo9aKKXl.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D6CzVfJc.js";import{u as g}from"./useOsdkClient-BtN-BmFc.js";import"./preload-helper-DZbI0FD0.js";import"./Table-C6d_12eT.js";import"./index-BuRhXxal.js";import"./Dialog-DFj3izS1.js";import"./cross-CtqOkK2i.js";import"./svgIconContainer-3jplA0Kn.js";import"./useBaseUiId-DBc-RpeK.js";import"./InternalBackdrop-DsXWEq-Z.js";import"./composite-DJt-rmmG.js";import"./index-DktJo0Qz.js";import"./index-RHZtAXiM.js";import"./index-B1xoON_r.js";import"./useEventCallback-cwcFVblP.js";import"./SkeletonBar-BoZ9OWi7.js";import"./LoadingCell-DpwcDvSb.js";import"./ColumnConfigDialog-DFflbHeg.js";import"./DraggableList-Aaqmor-j.js";import"./search-wv5WYUCG.js";import"./Input-BELQ9o_j.js";import"./useControlled-CCfgbEmE.js";import"./Button-CWXPJ_o4.js";import"./small-cross-Bbh8r9v-.js";import"./ActionButton-DQZCWw5O.js";import"./Checkbox-CWlOLNCz.js";import"./useValueChanged-C8NPc9BR.js";import"./CollapsiblePanel-B4_OSaf8.js";import"./MultiColumnSortDialog-BABDbYoQ.js";import"./MenuTrigger-Cm6MZfrt.js";import"./CompositeItem-DcBovePw.js";import"./ToolbarRootContext-BbxUlGdK.js";import"./getDisabledMountTransitionStyles-O1hZJ6Rw.js";import"./getPseudoElementBounds-YoXHtRnz.js";import"./chevron-down-rq5FhUz6.js";import"./index-Dmy2BarC.js";import"./error-Dxtk7pI5.js";import"./BaseCbacBanner-BaGj0VXE.js";import"./makeExternalStore-CY5Weqo3.js";import"./Tooltip-DtZVn1rC.js";import"./PopoverPopup-CHN0N4y0.js";import"./debounce-BHah8sqq.js";import"./tick-C7kRszHF.js";import"./DropdownField-CM8S71Dz.js";import"./isEqual-zIn-vV4k.js";import"./withOsdkMetrics-CGetGeS2.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
