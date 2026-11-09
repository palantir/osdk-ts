import{j as r}from"./iframe-Bz_J2W1Z.js";import{O as b}from"./object-table-Deb5sG0c.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BbpNp6Kf.js";import{u as g}from"./useOsdkClient-DzVQoRZo.js";import"./preload-helper-ok-MzX3c.js";import"./Table-zqizdMF7.js";import"./index-FW_HsjU0.js";import"./Dialog-CAs4KzzH.js";import"./cross-DddIN5az.js";import"./svgIconContainer-CIyUQzFt.js";import"./useBaseUiId-BhmZfUtN.js";import"./InternalBackdrop-CF2prM0v.js";import"./composite-DlQjNEH4.js";import"./index-Vqi0hlz6.js";import"./index--E2gQV8-.js";import"./index-Bb43CzD2.js";import"./useEventCallback-DE3O12F-.js";import"./SkeletonBar-DPT4T968.js";import"./LoadingCell-D8jDqrcB.js";import"./ColumnConfigDialog-B_1Wp2XF.js";import"./DraggableList-B5aByQ2k.js";import"./search-LR9m9GUO.js";import"./Input-Bb2RIbvF.js";import"./useControlled-BuUO4LJj.js";import"./Button-DvYR9GFC.js";import"./small-cross-ZW30Jg6L.js";import"./ActionButton-ChwYro4H.js";import"./Checkbox-D3_MAEWy.js";import"./useValueChanged-DKxvjgDx.js";import"./CollapsiblePanel-BDI3hYad.js";import"./MultiColumnSortDialog-ZpntWuD0.js";import"./MenuTrigger-kPQxIawG.js";import"./CompositeItem-BJ3s4VzC.js";import"./ToolbarRootContext-D7Swefso.js";import"./getDisabledMountTransitionStyles-Bi_e2akv.js";import"./getPseudoElementBounds-DL548pPm.js";import"./chevron-down-Cd0pn5Sr.js";import"./index-DLug1g0P.js";import"./error-Cf_kxNf8.js";import"./BaseCbacBanner-BQ1zd7K_.js";import"./makeExternalStore-BAdkPAIU.js";import"./Tooltip-BHCbPk7Z.js";import"./isObject-MrG-9k2y.js";import"./debounce--inhDJEJ.js";import"./tick-CbkclHuX.js";import"./DropdownField-ZxzfXiCm.js";import"./isEqual-BNrGU-44.js";import"./_baseIsEqual-DNK0k7BI.js";import"./withOsdkMetrics-wwBOvirA.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
