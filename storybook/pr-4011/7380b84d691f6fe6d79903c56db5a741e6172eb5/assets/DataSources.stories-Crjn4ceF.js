import{j as r}from"./iframe-Cd0WuP5s.js";import{O as b}from"./object-table-CGzT3aos.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BXFOel3b.js";import{u as g}from"./useOsdkClient-CpQ-3Z13.js";import"./preload-helper-BULq60Sg.js";import"./Table-LvXSiAc8.js";import"./index-Dn3UPUEv.js";import"./Dialog-CJbSm0vl.js";import"./cross-Cht5ZydL.js";import"./svgIconContainer-Zo359bK_.js";import"./useBaseUiId-DrebTsUj.js";import"./InternalBackdrop-dvLmHpE5.js";import"./composite-DOtbOOdR.js";import"./index-C-_orMox.js";import"./index-BgMZ2AWP.js";import"./index-BvG0L2NH.js";import"./useEventCallback-CqLXx_Ru.js";import"./SkeletonBar-I0-eDi0W.js";import"./LoadingCell-BQTecwW2.js";import"./ColumnConfigDialog-B6HbLu6_.js";import"./DraggableList-95n9OLxV.js";import"./search-j5X8koaR.js";import"./Input-Cxx4mnqf.js";import"./useControlled-BoZ7gbt2.js";import"./Button-DQgJQ0ys.js";import"./small-cross-HxFkmVGE.js";import"./ActionButton-F6IFdzY4.js";import"./Checkbox-VXPIk-kC.js";import"./useValueChanged-DCDDQwI0.js";import"./CollapsiblePanel-Bv729W8z.js";import"./MultiColumnSortDialog-UPrpWPay.js";import"./MenuTrigger-CwUzHJZB.js";import"./CompositeItem-CUY6v9CS.js";import"./ToolbarRootContext-zlKF7dlE.js";import"./getDisabledMountTransitionStyles-ClCEPtPS.js";import"./getPseudoElementBounds-DM3ex3Qr.js";import"./chevron-down-Dtgstolr.js";import"./index-8j_gMIpQ.js";import"./error-BXNrYt0u.js";import"./BaseCbacBanner-BNrNHneK.js";import"./makeExternalStore-j6ewfQ1j.js";import"./Tooltip-BpBW07pw.js";import"./PopoverPopup-ChYnmRaP.js";import"./debounce-DsJ8NhL-.js";import"./tick-BO6WZzfT.js";import"./DropdownField-DNOcnaLD.js";import"./isEqual-BcXr0yMK.js";import"./withOsdkMetrics-DqISDKn-.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
