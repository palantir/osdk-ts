import{j as r}from"./iframe-B8NhUX_0.js";import{O as b}from"./object-table-CA1teDNA.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BlX-uSt-.js";import{u as g}from"./useOsdkClient-BUtE_XGy.js";import"./preload-helper-DjGFPnLe.js";import"./Table-C2uoaozX.js";import"./index-qsMi88gm.js";import"./Dialog-CHkRp34m.js";import"./cross-D9Q-WwoP.js";import"./svgIconContainer-Bf9SOHJ7.js";import"./useBaseUiId-Cn8iX50p.js";import"./InternalBackdrop-Zc3lnf0p.js";import"./composite-BwIOwpx5.js";import"./index-CQvGYdFy.js";import"./index-DWq__3H-.js";import"./index-Ba4Tc_iW.js";import"./useEventCallback-xA1EFPwl.js";import"./SkeletonBar-DmZ0r3ux.js";import"./LoadingCell-DtncvfD2.js";import"./ColumnConfigDialog-Di44nFKi.js";import"./DraggableList-gdzatwPU.js";import"./search-BmvHXAW1.js";import"./Input-SBCQtK3z.js";import"./useControlled-Bf5eet3i.js";import"./Button-DNRq2HIP.js";import"./small-cross-nXdJrVSH.js";import"./ActionButton-2e8flOqN.js";import"./Checkbox-BlAB2Wqb.js";import"./useValueChanged-g78IRiUM.js";import"./CollapsiblePanel-BJZlXQuG.js";import"./MultiColumnSortDialog-CpVilSt6.js";import"./MenuTrigger-DINcwWL4.js";import"./CompositeItem-C5ZLF5hx.js";import"./ToolbarRootContext-bf_wSBCX.js";import"./getDisabledMountTransitionStyles-O8DCg2MV.js";import"./getPseudoElementBounds-CbA1rS7d.js";import"./chevron-down-DxRnKcur.js";import"./index-CtzR-IoK.js";import"./error-CPePVciD.js";import"./BaseCbacBanner-Dohx4NqC.js";import"./makeExternalStore-BpOl3JpH.js";import"./Tooltip-Cw796QuD.js";import"./PopoverPopup-DU44Cqzs.js";import"./debounce-uoRbC81R.js";import"./tick-DJSkN9NZ.js";import"./DropdownField-BxGt7Ohj.js";import"./isEqual-C8yEni87.js";import"./withOsdkMetrics-BzqeXglY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
