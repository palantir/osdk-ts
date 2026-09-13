import{j as r}from"./iframe-DBDT7cai.js";import{O as b}from"./object-table-DWATCIRa.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C1mEx6f1.js";import{u as g}from"./useOsdkClient-zmFqX8ua.js";import"./preload-helper-CZUIUplp.js";import"./Table-Cdi5X52U.js";import"./index-DNPTs4g2.js";import"./Dialog-Ddy2ySQe.js";import"./cross-DXxcDe7j.js";import"./svgIconContainer-DGCHmuI4.js";import"./useBaseUiId-PRKCGqGz.js";import"./InternalBackdrop-BF5e8bQ9.js";import"./composite-L0L9oW-4.js";import"./index-BsC2sM8x.js";import"./index-kRLOqZpZ.js";import"./index-DCbu_JVG.js";import"./useEventCallback-Dl-swTIN.js";import"./SkeletonBar-DkOilBCf.js";import"./LoadingCell-DXk9-iPx.js";import"./ColumnConfigDialog-CUUOeaZ7.js";import"./DraggableList-C-Djqrfn.js";import"./search-CWHw7Uqg.js";import"./Input-CitZWzLR.js";import"./useControlled-BkrcSri5.js";import"./Button-DP4lNjcp.js";import"./small-cross-DnW6JuIQ.js";import"./ActionButton-DWWhEIcJ.js";import"./Checkbox-CL3C-6Dk.js";import"./useValueChanged-IVDgNvAJ.js";import"./CollapsiblePanel-lWl1OUcH.js";import"./MultiColumnSortDialog-BurrW54K.js";import"./MenuTrigger-DFZTen_H.js";import"./CompositeItem-LxcE4aIz.js";import"./ToolbarRootContext-CsenKUBi.js";import"./getDisabledMountTransitionStyles-BrqcKlYq.js";import"./getPseudoElementBounds-Nk1mGNF0.js";import"./chevron-down-BPXQkSQg.js";import"./index-CBFMIrtK.js";import"./error-OvuTWF-e.js";import"./BaseCbacBanner-BRlz0IYZ.js";import"./makeExternalStore-CP2a49qE.js";import"./Tooltip-Dhugh288.js";import"./PopoverPopup-BgEfDDqS.js";import"./debounce-COvZkwXR.js";import"./tick-C4TGfFfS.js";import"./DropdownField-CCG2cNMr.js";import"./isEqual-CcV2w9Lh.js";import"./withOsdkMetrics-C04fN_3L.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
