import{j as r}from"./iframe-B6ilqw57.js";import{O as b}from"./object-table-YvUTv0RO.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CFzBTxvl.js";import{u as g}from"./useOsdkClient-CEMDVQcB.js";import"./preload-helper-D-9CJsjA.js";import"./Table-DxotyaED.js";import"./index-DbyNdYIV.js";import"./Dialog-C48tkAvG.js";import"./cross-DPKuiR4p.js";import"./svgIconContainer-cN2FPQGz.js";import"./useBaseUiId-DHE-id5O.js";import"./InternalBackdrop-CMe-Gh9-.js";import"./composite-DlL-mJ_3.js";import"./index-P1JTOsnm.js";import"./index-Df4HlJX1.js";import"./index-CVmOQE98.js";import"./useEventCallback-CpyAivRw.js";import"./SkeletonBar-DpcdXqqq.js";import"./LoadingCell-DdvMbUk8.js";import"./ColumnConfigDialog-B7V5mAol.js";import"./DraggableList-DfFj4dUH.js";import"./search-QZJd4Wc4.js";import"./Input-DWSs0FOD.js";import"./useControlled-B3abm0PF.js";import"./Button-dJtUFXII.js";import"./small-cross-D3G7vTv6.js";import"./ActionButton-BEqEK5Xi.js";import"./Checkbox-qSC09PM1.js";import"./useValueChanged-D5nzYuqC.js";import"./CollapsiblePanel-B7_nvTjp.js";import"./MultiColumnSortDialog-DWw4hToi.js";import"./MenuTrigger-BEldzrty.js";import"./CompositeItem-C4j1wUUU.js";import"./ToolbarRootContext-DC1oDeWo.js";import"./getDisabledMountTransitionStyles-DpUjid9g.js";import"./getPseudoElementBounds-CU-tnlvo.js";import"./chevron-down-CMdh2Fjb.js";import"./index-FPD_SzEe.js";import"./error-DqxELFjs.js";import"./BaseCbacBanner-Cp5mWgH0.js";import"./makeExternalStore-C_9OaqSF.js";import"./Tooltip-S82UM2K1.js";import"./PopoverPopup-B6N4zjBr.js";import"./debounce-Cr6ef7Zd.js";import"./tick-DFqE3VKw.js";import"./DropdownField-B2xi4c23.js";import"./isEqual-BaTqElux.js";import"./withOsdkMetrics-D8k6BHrp.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
