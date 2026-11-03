import{j as r}from"./iframe-CvOjOlaX.js";import{O as b}from"./object-table-DJxn76kw.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D1kcPaO7.js";import{u as g}from"./useOsdkClient-uMKq4cOq.js";import"./preload-helper-CMIwN0Ht.js";import"./Table-DizCUzxK.js";import"./index-CrAKByIV.js";import"./Dialog-CWoS9tU-.js";import"./cross-DiBcry41.js";import"./svgIconContainer-CCgDAq3h.js";import"./useBaseUiId-2b2yWiLC.js";import"./InternalBackdrop-DV_lxe_-.js";import"./composite-DBq50y_B.js";import"./index-3CFeZz8S.js";import"./index-BfsFuLyL.js";import"./index-Dr1wgK35.js";import"./useEventCallback-C-ZadIlY.js";import"./SkeletonBar-DzLaCov9.js";import"./LoadingCell-CJ6LPRQM.js";import"./ColumnConfigDialog-Bkx7mFAh.js";import"./DraggableList-BcQmTe18.js";import"./search-C9_Jgha_.js";import"./Input-B3WzxSEN.js";import"./useControlled-Bk4S-y5O.js";import"./Button-VY6TA0Ac.js";import"./small-cross-Ckd7tyu3.js";import"./ActionButton-C7XwUYyd.js";import"./Checkbox-kXhRSsmr.js";import"./useValueChanged-Dv0LQJsd.js";import"./CollapsiblePanel-D-wmv3DK.js";import"./MultiColumnSortDialog-Bq5Tw4Li.js";import"./MenuTrigger-BXHUcTi3.js";import"./CompositeItem-CqY36BxB.js";import"./ToolbarRootContext-jTzvi3TC.js";import"./getDisabledMountTransitionStyles-DS8rYKRs.js";import"./getPseudoElementBounds-BnWyijzd.js";import"./chevron-down-DE6gjpOR.js";import"./index-hoOdhAdW.js";import"./error-BYaZivRW.js";import"./BaseCbacBanner-STYedUYE.js";import"./makeExternalStore-Bvn4jvir.js";import"./Tooltip-D2aVKWxO.js";import"./PopoverPopup-C2Gwi9qi.js";import"./debounce-BV_6a4Da.js";import"./tick-BMOBXLnC.js";import"./DropdownField-BRePIiwE.js";import"./isEqual-e7LVSkad.js";import"./withOsdkMetrics-BRorics0.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
