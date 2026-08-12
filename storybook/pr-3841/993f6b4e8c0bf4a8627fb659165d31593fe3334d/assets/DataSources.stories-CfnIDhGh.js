import{j as r}from"./iframe-BX_ZglJt.js";import{O as b}from"./object-table-BrfdoMYW.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CwmAFs94.js";import{u as g}from"./useOsdkClient-Duhffiqv.js";import"./preload-helper-DgkZQ_xq.js";import"./Table-D8_HSV8U.js";import"./index-Bc3Cl_41.js";import"./Dialog-Bu6-Kj-W.js";import"./cross-Bb6sq-qZ.js";import"./svgIconContainer-BXbbsTGb.js";import"./useBaseUiId-B1-OngoV.js";import"./InternalBackdrop-CVXRM7LX.js";import"./composite-zDdFGMPL.js";import"./index-f-SNNIDI.js";import"./index-DEXm8OLH.js";import"./index-Bymt254M.js";import"./useEventCallback-CY3efkIf.js";import"./SkeletonBar-OhTF8r69.js";import"./LoadingCell-jCSIzRv-.js";import"./ColumnConfigDialog-CVbQvdjb.js";import"./DraggableList-DYouQU8K.js";import"./search-fr7iJOod.js";import"./Input-Dhz0W6pJ.js";import"./useControlled-CJlGLYfk.js";import"./isEqual-CjhHFU-O.js";import"./isObject-DOPaAV0g.js";import"./Button-E6kiD0yr.js";import"./ActionButton-DOP9LOd9.js";import"./Checkbox-Blm_4ilg.js";import"./useValueChanged-D4-4-7b2.js";import"./CollapsiblePanel-BhOuAUWU.js";import"./MultiColumnSortDialog-Dzzs7tfF.js";import"./MenuTrigger-DoPJIVoM.js";import"./CompositeItem-nc6zMu_C.js";import"./ToolbarRootContext-DkSLh-9D.js";import"./getDisabledMountTransitionStyles-BysbxaoP.js";import"./getPseudoElementBounds-BPL1ZlaK.js";import"./chevron-down-Enjce5n9.js";import"./index-CEWEVwT2.js";import"./error-aw4kUWZA.js";import"./BaseCbacBanner-2hGgw6l3.js";import"./makeExternalStore-BMycxTdB.js";import"./Tooltip-DalQkWyU.js";import"./PopoverPopup-BsXM6vRc.js";import"./toNumber-DE4wMns7.js";import"./tick-Dnu4AhpX.js";import"./DropdownField-DfSuo6wk.js";import"./withOsdkMetrics-CwOfdRmG.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
