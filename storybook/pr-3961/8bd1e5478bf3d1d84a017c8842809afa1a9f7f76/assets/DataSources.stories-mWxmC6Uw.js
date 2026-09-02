import{j as r}from"./iframe-CtxcX-T2.js";import{O as b}from"./object-table-kvkm7oWa.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-rF8HcU--.js";import{u as g}from"./useOsdkClient-B2tD5ZA9.js";import"./preload-helper-cYb1s-yj.js";import"./Table-BmEf-WHf.js";import"./index-B-TRiKN3.js";import"./Dialog-BuqAw-Am.js";import"./cross-CSOzfLob.js";import"./svgIconContainer-BdWsevkC.js";import"./useBaseUiId-BKQN5rZA.js";import"./InternalBackdrop-DcUKIKDf.js";import"./composite-Bg1E-ATT.js";import"./index-B31wHl9O.js";import"./index-Bx6oSTgH.js";import"./index-CQTEzx2i.js";import"./useEventCallback-CJSRmKCz.js";import"./SkeletonBar-DtSb_BRI.js";import"./LoadingCell-CEMsrPxC.js";import"./ColumnConfigDialog-BqMCCnNj.js";import"./DraggableList-BzQY0SAw.js";import"./search-CRmL15NB.js";import"./Input-Bv3vf0p7.js";import"./useControlled-KB7Tt3--.js";import"./Button-DtDTCbH_.js";import"./small-cross-Ba9dhW_V.js";import"./ActionButton-BaPZa1OF.js";import"./Checkbox-4p89Vpq6.js";import"./useValueChanged-CJyhwRpH.js";import"./CollapsiblePanel-CmD8octv.js";import"./MultiColumnSortDialog-DpfErL7k.js";import"./MenuTrigger-DFIUIXzr.js";import"./CompositeItem-BOSOz_c1.js";import"./ToolbarRootContext-TRfEDRwF.js";import"./getDisabledMountTransitionStyles-C0Z2RaMf.js";import"./getPseudoElementBounds-D7H1yTKx.js";import"./chevron-down-tzfqMRfe.js";import"./index-WzODq6Cd.js";import"./error-0r8auSif.js";import"./BaseCbacBanner-CeYCNyo5.js";import"./makeExternalStore-ycTRB21p.js";import"./Tooltip-etk01HFg.js";import"./PopoverPopup-C7Q6K1hN.js";import"./debounce-BdaueHY_.js";import"./tick-C8bzjg5y.js";import"./DropdownField-51JHrmyh.js";import"./isEqual-BsD_zmUv.js";import"./withOsdkMetrics-CFtxLfFR.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
