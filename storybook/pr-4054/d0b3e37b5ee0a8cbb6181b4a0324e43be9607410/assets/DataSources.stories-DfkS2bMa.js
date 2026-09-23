import{j as r}from"./iframe-D9P9JPnE.js";import{O as b}from"./object-table-IFoklx8i.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-yFaX6Cb2.js";import{u as g}from"./useOsdkClient-Cl7iWri5.js";import"./preload-helper-CSJ4fD8P.js";import"./Table-bKWI10Gf.js";import"./index-B0GYFgPw.js";import"./Dialog-80ldRr0D.js";import"./cross-Bk7QQAW7.js";import"./svgIconContainer-DE8FpRUq.js";import"./useBaseUiId-LUhCiIEN.js";import"./InternalBackdrop-BQix0v67.js";import"./composite-CwGSSnNe.js";import"./index-BLSs3q_T.js";import"./index--Qtm9bZ-.js";import"./index-BGyPj0mm.js";import"./useEventCallback-P_K3auvj.js";import"./SkeletonBar-CBLTPv0p.js";import"./LoadingCell-DzyZjAPw.js";import"./ColumnConfigDialog-D0EzBoH0.js";import"./DraggableList-A5hwwOY7.js";import"./search-DVgZ7um_.js";import"./Input-BAe5Vta8.js";import"./useControlled-D8iAD7lp.js";import"./Button-DQyP3ss1.js";import"./small-cross-iaDGlrGg.js";import"./ActionButton-BWc4f3QT.js";import"./Checkbox-SGwbw7ao.js";import"./useValueChanged-DmZj1mM7.js";import"./CollapsiblePanel-B75bc_M-.js";import"./MultiColumnSortDialog-Cui85BYg.js";import"./MenuTrigger-BOUfzK5W.js";import"./CompositeItem-Cn9ylTax.js";import"./ToolbarRootContext-D2FTFjj2.js";import"./getDisabledMountTransitionStyles-BiVo7WJG.js";import"./getPseudoElementBounds-CZz-p69t.js";import"./chevron-down-aDiXlal5.js";import"./index-CeKLzZT1.js";import"./error-CRea6GYa.js";import"./BaseCbacBanner-TUxXHSoK.js";import"./makeExternalStore-Ds2qVRO7.js";import"./Tooltip-D9x1TMqS.js";import"./PopoverPopup-Ez6UvTSW.js";import"./debounce-BZCp6Mj3.js";import"./tick-CM-K1iFc.js";import"./DropdownField-DAFOn67q.js";import"./isEqual-RrURBxyH.js";import"./withOsdkMetrics-DdvxW2hf.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
