import{j as r}from"./iframe-BVyCc2AC.js";import{O as b}from"./object-table-BvrjOYow.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-kfQ_BCKI.js";import{u as g}from"./useOsdkClient-BjhGBjE8.js";import"./preload-helper--HBo1d6L.js";import"./Table-NzMBYDC_.js";import"./index-BNzHGqwC.js";import"./Dialog-RFfKY_MI.js";import"./cross-Ch6pWJlm.js";import"./svgIconContainer-C1dTG25d.js";import"./useBaseUiId-DiffXzRm.js";import"./InternalBackdrop-Dx58jf-M.js";import"./composite-CBp6hdMU.js";import"./index-BevvX3YQ.js";import"./index-x0mWFteh.js";import"./index-B8CTpNC0.js";import"./useEventCallback-C0ELfPhC.js";import"./SkeletonBar-BR_liQHe.js";import"./LoadingCell-CZlAChsW.js";import"./ColumnConfigDialog-B83i398L.js";import"./DraggableList-B9Ryk58k.js";import"./search-Dykn9IV3.js";import"./Input-BZeDxcIX.js";import"./useControlled-C2MZaBz1.js";import"./Button-BRNew1Yr.js";import"./small-cross-BuJARxxP.js";import"./ActionButton-Dp7wT3Gt.js";import"./Checkbox-CnXUg1xk.js";import"./useValueChanged-DnFEdsSp.js";import"./CollapsiblePanel-BYmC-C9w.js";import"./MultiColumnSortDialog-BaAbpi0b.js";import"./MenuTrigger-Rg53KH2n.js";import"./CompositeItem-C3G54MgE.js";import"./ToolbarRootContext-DsUmoyrJ.js";import"./getDisabledMountTransitionStyles-DGgBy0ZL.js";import"./getPseudoElementBounds-C0BRyLYY.js";import"./chevron-down-ClvvnW1g.js";import"./index-cmuB7ZqK.js";import"./error-QOEmR757.js";import"./BaseCbacBanner-CgZ5qHj0.js";import"./makeExternalStore-B_RrnM78.js";import"./Tooltip-BJ9N3gwB.js";import"./PopoverPopup-VXym3Z2T.js";import"./debounce-HEmB9pej.js";import"./tick-TdYmBPGO.js";import"./DropdownField-DVFSk7iy.js";import"./isEqual-D2FhFc1A.js";import"./withOsdkMetrics-B82QxFXL.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
