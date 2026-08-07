import{j as r}from"./iframe-9-Df-LIJ.js";import{O as b}from"./object-table-B124FTHg.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ydS1dOFF.js";import{u as g}from"./useOsdkClient-B_QNp0pP.js";import"./preload-helper-DCEoRWVY.js";import"./Table-B99stKfq.js";import"./index-CmMoO6Ab.js";import"./Dialog-rM4yBLfb.js";import"./cross-AVBxO2wq.js";import"./svgIconContainer-CzbhhJSw.js";import"./useBaseUiId-CmM9rxW8.js";import"./InternalBackdrop-BxohvQV3.js";import"./composite-BEjSgt66.js";import"./index-DGNsP-w2.js";import"./index-B7Tyltek.js";import"./index-BNQc9m_n.js";import"./useEventCallback-Catk2moi.js";import"./SkeletonBar-DUxSEbIz.js";import"./LoadingCell-Bt6rXw2C.js";import"./ColumnConfigDialog-kkDBjdQ7.js";import"./DraggableList-DCMiU0kK.js";import"./search-Dkc3mdwO.js";import"./Input-BYsu1Abh.js";import"./useControlled-CvfHdbPA.js";import"./createLabelsContext-CzvgkkdI.js";import"./small-cross-ClJF0W2q.js";import"./Button-D-l8XO1Q.js";import"./ActionButton-G_Towlh-.js";import"./Checkbox-CT7dBybc.js";import"./useValueChanged-CekEGMLc.js";import"./CollapsiblePanel-B7kYsjAX.js";import"./MultiColumnSortDialog-BYCLRZ6I.js";import"./MenuTrigger-BSiGuHtc.js";import"./CompositeItem-C6gHKrG3.js";import"./ToolbarRootContext-BfdRsuSy.js";import"./getDisabledMountTransitionStyles-D65O5-tA.js";import"./getPseudoElementBounds-DudWCT_m.js";import"./chevron-down-DrB3Djp3.js";import"./index-D9m9B2qL.js";import"./error-Cp81RDFu.js";import"./BaseCbacBanner-YY7msBZC.js";import"./makeExternalStore-D3sOoyLv.js";import"./Tooltip-OA5xF1kb.js";import"./PopoverPopup-dpR8diVX.js";import"./Combobox-WKz-EtO8.js";import"./tick-D4umhwei.js";import"./DropdownField-_D_cQUcr.js";import"./withOsdkMetrics-qKmdojlP.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
