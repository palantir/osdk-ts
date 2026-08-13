import{j as r}from"./iframe-C7p8bC4z.js";import{O as b}from"./object-table-rrHUvx8M.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers--00vzMOa.js";import{u as g}from"./useOsdkClient-BlmAulng.js";import"./preload-helper-yARIFMHO.js";import"./Table-BoMUec3S.js";import"./index-BSFFflxO.js";import"./Dialog-Bq7KV9Q4.js";import"./cross-D8SQea4D.js";import"./svgIconContainer-Bh8CNGr-.js";import"./useBaseUiId-D7Bs2_0o.js";import"./InternalBackdrop-CCB2qEvA.js";import"./composite-BOtNh-Av.js";import"./index-z04c2hdv.js";import"./index-c3k5U_lr.js";import"./index-4RswbLak.js";import"./useEventCallback-C2562mvs.js";import"./SkeletonBar-js0bkjyh.js";import"./LoadingCell-Q8eaYLNZ.js";import"./ColumnConfigDialog-C5dmJ6l5.js";import"./DraggableList--CB8Ubap.js";import"./search-D9u2yYuj.js";import"./Input-BAFeVd23.js";import"./useControlled-CwSyNuxB.js";import"./Button-DmUpkepK.js";import"./small-cross-CsyJylh1.js";import"./ActionButton-BxbEt6-S.js";import"./Checkbox-CFWr5Fpb.js";import"./useValueChanged-pEEmrO3V.js";import"./CollapsiblePanel-BeWBa9ma.js";import"./MultiColumnSortDialog-CtUkZIxz.js";import"./MenuTrigger-CIfXbfLR.js";import"./CompositeItem-D2oL3zur.js";import"./ToolbarRootContext-D3hUmd4P.js";import"./getDisabledMountTransitionStyles-DhuueIJo.js";import"./getPseudoElementBounds-BtoukLFj.js";import"./chevron-down-DB23ilQg.js";import"./index-TDqpefMN.js";import"./error-DM0DBmSQ.js";import"./BaseCbacBanner-FJJsg6sF.js";import"./makeExternalStore-DDCjJxWP.js";import"./Tooltip-DejVHDp6.js";import"./PopoverPopup-1qbE86q5.js";import"./debounce-CY32HLro.js";import"./tick-n--SCLbF.js";import"./DropdownField-Wa7Oy1zJ.js";import"./isEqual-BGjsRR-O.js";import"./withOsdkMetrics-CpiFq1j5.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
