import{j as r}from"./iframe-DbQMorYR.js";import{O as b}from"./object-table-CuscO_G6.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-kVThueL4.js";import{u as g}from"./useOsdkClient-3n3qj0TA.js";import"./preload-helper-DES03_oL.js";import"./Table-CyQzIj_n.js";import"./index-CHOCnb0f.js";import"./Dialog-h-CcUbBk.js";import"./cross-CE7V7QeW.js";import"./svgIconContainer-Cwo2AziM.js";import"./useBaseUiId-CKJO2MlM.js";import"./InternalBackdrop-Buze4txO.js";import"./composite-BjHYFgsw.js";import"./index-DpVhWfLY.js";import"./index-C0C-Vl87.js";import"./index-Dkbx_AOS.js";import"./useEventCallback-DDVJcajp.js";import"./SkeletonBar-CHw8W08J.js";import"./LoadingCell-CCoYUe9Q.js";import"./ColumnConfigDialog-CNsz8uaI.js";import"./DraggableList-DMkvCqAL.js";import"./search-ChjdgZEs.js";import"./Input-Q-MRNWMg.js";import"./useControlled-DOgj4MtD.js";import"./Button-S-V8j-aZ.js";import"./small-cross-Cq5E9zQ8.js";import"./ActionButton-CMzKEzrG.js";import"./Checkbox-Cacl4mQ_.js";import"./useValueChanged-BH_8poyT.js";import"./CollapsiblePanel-_cTDz2Uo.js";import"./MultiColumnSortDialog-C66gKvlF.js";import"./MenuTrigger-BTpBscFq.js";import"./CompositeItem-DHvx_K1s.js";import"./ToolbarRootContext-D619hRph.js";import"./getDisabledMountTransitionStyles-T22xlpK-.js";import"./getPseudoElementBounds-CcW8NnN6.js";import"./chevron-down-CVwhtMCl.js";import"./index-CwvWt_bc.js";import"./error-CkRxITwV.js";import"./BaseCbacBanner-QNT9vg-p.js";import"./makeExternalStore-smBq6vy5.js";import"./Tooltip-DxJ5tz0m.js";import"./PopoverPopup-uiUnYz9Z.js";import"./debounce-DMgjlNzy.js";import"./tick-DtRotk-c.js";import"./DropdownField-DwSBz2YC.js";import"./isEqual-CVwS2TLN.js";import"./withOsdkMetrics-BpNcVo1X.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
