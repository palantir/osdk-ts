import{j as r}from"./iframe-oQpn4zur.js";import{O as b}from"./object-table-rOPQcFMe.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CBK2Ane1.js";import{u as g}from"./useOsdkClient-Dge9q3q2.js";import"./preload-helper-Cmjd7BI4.js";import"./Table-DpinA8Jj.js";import"./index-D2rifVxK.js";import"./Dialog-Dr89oVDu.js";import"./cross-xvCB5p22.js";import"./svgIconContainer-CsxtAqM7.js";import"./useBaseUiId-pVATQNHL.js";import"./InternalBackdrop-BjzdZcIz.js";import"./composite-C_bfQ-PM.js";import"./index-BgH4UIQM.js";import"./index--_6_irpc.js";import"./index-wyLBv6ta.js";import"./useEventCallback-DBs_uy7k.js";import"./SkeletonBar-BNFrP5fb.js";import"./LoadingCell-B7rs415M.js";import"./ColumnConfigDialog-1H_3wJZg.js";import"./DraggableList-CkiAvO03.js";import"./search-CwzMMbdj.js";import"./Input-BTa_bWxE.js";import"./useControlled-DKwwdhXV.js";import"./Button-DcQk0Vz0.js";import"./small-cross-S_zs3rbw.js";import"./ActionButton-Dwc2giVA.js";import"./Checkbox-DvPIwl-U.js";import"./useValueChanged-fHbpa3Ve.js";import"./CollapsiblePanel-BprHq_-m.js";import"./MultiColumnSortDialog-BhA7iuO4.js";import"./MenuTrigger-Crnh6Nym.js";import"./CompositeItem-M0o16Fhw.js";import"./ToolbarRootContext-C0a0ALA7.js";import"./getDisabledMountTransitionStyles-BNE85OYQ.js";import"./getPseudoElementBounds-DpQWAe0p.js";import"./chevron-down-DhcH1mZx.js";import"./index-CP1r_S59.js";import"./error-G32g_aWE.js";import"./BaseCbacBanner-Cqjvid3G.js";import"./makeExternalStore-8N_JBzmB.js";import"./Tooltip-CnHU-6Zj.js";import"./PopoverPopup-ChSQAsi2.js";import"./debounce-DH6i8tLU.js";import"./tick-yvYbXRUk.js";import"./DropdownField-DosPwAAS.js";import"./isEqual-CF2VyX-K.js";import"./withOsdkMetrics-C1JB2Ffo.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
