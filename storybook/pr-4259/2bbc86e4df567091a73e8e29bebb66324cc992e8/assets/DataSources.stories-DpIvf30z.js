import{j as r}from"./iframe-DgHq46dL.js";import{O as b}from"./object-table-B1bhT_Ev.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BydMPPvX.js";import{u as g}from"./useOsdkClient-Cx_VxcYG.js";import"./preload-helper-2OibLDKZ.js";import"./Table-BW-cZJps.js";import"./index-BhPwX7yA.js";import"./Dialog-CfUAJ5Id.js";import"./cross-kmyKn-Hd.js";import"./svgIconContainer-D-eVzjwP.js";import"./useBaseUiId-DraHxLhq.js";import"./InternalBackdrop-BUAi9chw.js";import"./composite-B03IEoiJ.js";import"./index-pFDv9Z-0.js";import"./index-oCxycBs6.js";import"./index-BRwM8whp.js";import"./useEventCallback-xbbbX8qB.js";import"./SkeletonBar-_tavPjlr.js";import"./LoadingCell-Dt4wFO8Z.js";import"./ColumnConfigDialog-mKt1jQlT.js";import"./DraggableList-CN2YLXt6.js";import"./search-DW3-Ki40.js";import"./Input-o88S38RY.js";import"./useControlled-C_PKKkAE.js";import"./Button-CSx6Joum.js";import"./small-cross-DhXPHsHQ.js";import"./ActionButton-DUzQV33t.js";import"./Checkbox-CQr_pjeY.js";import"./useValueChanged-ENf__CxN.js";import"./CollapsiblePanel-CZZTgzig.js";import"./MultiColumnSortDialog-CfT6ktlR.js";import"./MenuTrigger-XgVinso0.js";import"./CompositeItem-BY7KoFBl.js";import"./ToolbarRootContext-CNYHni6P.js";import"./getDisabledMountTransitionStyles-Ce2xSAU9.js";import"./getPseudoElementBounds-DBFuRRXN.js";import"./chevron-down-BFQTfWqg.js";import"./index-Jhdjr3A-.js";import"./error-D8zFMP2p.js";import"./BaseCbacBanner-Co-b00WN.js";import"./makeExternalStore-D1CTkdeT.js";import"./Tooltip-b-GnJ4b5.js";import"./PopoverPopup-Bpii6JB2.js";import"./debounce-gBlNcefK.js";import"./tick-BcwK5wdE.js";import"./DropdownField-B3ISwKsz.js";import"./isEqual-C1tKOgi9.js";import"./withOsdkMetrics-CAH3qcfi.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
