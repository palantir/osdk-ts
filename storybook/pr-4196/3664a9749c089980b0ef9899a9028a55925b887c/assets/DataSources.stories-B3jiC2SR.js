import{j as r}from"./iframe-fQxG4Lg8.js";import{O as b}from"./object-table-BguurVj9.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-V3BAL833.js";import{u as g}from"./useOsdkClient-BlaEh5Bi.js";import"./preload-helper-C3S-rczw.js";import"./Table-4QPD3ovk.js";import"./index-ltdpE_X9.js";import"./Dialog-CGuuKNT3.js";import"./cross-DCa3-fIn.js";import"./svgIconContainer-DiG6bowi.js";import"./useBaseUiId-BLPigAyn.js";import"./InternalBackdrop-Cf_yJEvo.js";import"./composite-DDCMOEB3.js";import"./index-BJBu7OXz.js";import"./index-B903ktB6.js";import"./index-B1XnrnSa.js";import"./useEventCallback-DIfP3h4k.js";import"./SkeletonBar-wwhzG1v0.js";import"./LoadingCell-DD1q-NbW.js";import"./ColumnConfigDialog-DNzpeOFX.js";import"./DraggableList-BoJNfPWY.js";import"./search-Cty6Jhmh.js";import"./Input-CaYmWuD7.js";import"./useControlled-DqDDQqjZ.js";import"./Button-BifFo4zB.js";import"./small-cross-DndD1mKm.js";import"./ActionButton-9_9jfXoV.js";import"./Checkbox-D1hhimLl.js";import"./useValueChanged-0fxI-YLf.js";import"./CollapsiblePanel-D6URl5lo.js";import"./MultiColumnSortDialog-Dn2xubWh.js";import"./MenuTrigger-nzj5vofY.js";import"./CompositeItem-DICXTkJC.js";import"./ToolbarRootContext-CBJvqLZU.js";import"./getDisabledMountTransitionStyles-BfSk2v82.js";import"./getPseudoElementBounds-DnfsNe5i.js";import"./chevron-down-C1z-grQd.js";import"./index-C-pt0ouP.js";import"./error-DITUlsDB.js";import"./BaseCbacBanner-Ce1kigDa.js";import"./makeExternalStore-bm_X3lw2.js";import"./Tooltip-DuEVyIet.js";import"./PopoverPopup-C4texbP0.js";import"./debounce-Dj_e_6kC.js";import"./tick-aJ0nLTgk.js";import"./DropdownField-eogQl421.js";import"./isEqual-D15Ao0tl.js";import"./withOsdkMetrics-M9jqBL_m.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
