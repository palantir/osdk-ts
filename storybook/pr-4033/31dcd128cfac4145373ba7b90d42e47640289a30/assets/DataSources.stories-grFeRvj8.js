import{j as r}from"./iframe-B-owY9Z7.js";import{O as b}from"./object-table-CefKw-8F.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CUmfde5E.js";import{u as g}from"./useOsdkClient-BO3W3UoD.js";import"./preload-helper-9dohNchO.js";import"./Table-D7Chhi4i.js";import"./index-B6FNdyul.js";import"./Dialog-DucCbSyW.js";import"./cross-DAeYv9DV.js";import"./svgIconContainer-SVfmpuZH.js";import"./useBaseUiId-BuygkMJa.js";import"./InternalBackdrop-Qs9WBPXA.js";import"./composite-CruT5ftQ.js";import"./index-D6Mlo6-X.js";import"./index-BLL9qzqo.js";import"./index-Bd9R8qyi.js";import"./useEventCallback-DEuppmtE.js";import"./SkeletonBar-Dt6LDg3E.js";import"./LoadingCell-D77Tuzfg.js";import"./ColumnConfigDialog-XbxNc6BS.js";import"./DraggableList-h04GfC5d.js";import"./search-CeJ8ph1L.js";import"./Input-DO0-uKR0.js";import"./useControlled-DU5wctnz.js";import"./Button-CdoyG0J5.js";import"./small-cross-6e-BgKCt.js";import"./ActionButton-BILzU60N.js";import"./Checkbox-DmR4JKqW.js";import"./useValueChanged-CKB_GaD4.js";import"./CollapsiblePanel-C-QRWB1j.js";import"./MultiColumnSortDialog-CmYfhF5I.js";import"./MenuTrigger-Q8tox6sB.js";import"./CompositeItem-Czc0ACb3.js";import"./ToolbarRootContext-PF-H9oB3.js";import"./getDisabledMountTransitionStyles-B2Uy8nCz.js";import"./getPseudoElementBounds-xcUg61qv.js";import"./chevron-down-KtY7GIs6.js";import"./index-CHVvDRh4.js";import"./error-BnApDvy6.js";import"./BaseCbacBanner-CN-44h_1.js";import"./makeExternalStore-DCMzogXn.js";import"./Tooltip-CSFV9ySu.js";import"./PopoverPopup-BP7HKGIF.js";import"./debounce-8Cu2Gz8K.js";import"./tick-DndUclkL.js";import"./DropdownField-Br6lY0cs.js";import"./isEqual-C7NIFCJ6.js";import"./withOsdkMetrics-D7Kd4RWC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
