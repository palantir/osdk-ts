import{j as r}from"./iframe-_XWcEwHk.js";import{O as b}from"./object-table-CVzaJWld.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CnsLIl_l.js";import{u as g}from"./useOsdkClient-CIw_1c3a.js";import"./preload-helper-CNNwgNsL.js";import"./Table-L_2QILeW.js";import"./index-DEyLol8C.js";import"./Dialog-ClKZsdx7.js";import"./cross-Cvllyul3.js";import"./svgIconContainer-s76caIVw.js";import"./useBaseUiId-Cp55Lgic.js";import"./InternalBackdrop-DCGEqfhx.js";import"./composite-BYE5Dlef.js";import"./index-BDsQj8Rb.js";import"./index-B_nZUuF2.js";import"./index-BKSgEz3r.js";import"./useEventCallback-BunrxwXX.js";import"./SkeletonBar-DXX-HuIg.js";import"./LoadingCell-CGD-qaQB.js";import"./ColumnConfigDialog-CtlqL0Bv.js";import"./DraggableList-BAWMbUl8.js";import"./search-Dcf_xsL6.js";import"./Input-B7mKteg-.js";import"./useControlled-DwjvLtqF.js";import"./Button-Bc6gggWi.js";import"./small-cross-p6Bd-K6R.js";import"./ActionButton-m7HyQ9l6.js";import"./Checkbox-DR6VLMJK.js";import"./useValueChanged-B98vVKh1.js";import"./CollapsiblePanel-DmOt9kop.js";import"./MultiColumnSortDialog-ZWcUMId3.js";import"./MenuTrigger-D3WH6QS3.js";import"./CompositeItem-B8eozN0-.js";import"./ToolbarRootContext-MmipuJm0.js";import"./getDisabledMountTransitionStyles-2YxdhAX_.js";import"./getPseudoElementBounds-B67hfNdQ.js";import"./chevron-down-aMIB5bAJ.js";import"./index-DQrLQlQ5.js";import"./error-CGLwBB-Q.js";import"./BaseCbacBanner-D7ltILps.js";import"./makeExternalStore-CYii8DZX.js";import"./Tooltip-Dtv4GMM3.js";import"./PopoverPopup-CPoevyOu.js";import"./debounce-BspAFodp.js";import"./tick-DPIO5Uoy.js";import"./DropdownField-BuDv2_Ap.js";import"./isEqual-CPMubuye.js";import"./withOsdkMetrics-DqQ9hGu9.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
