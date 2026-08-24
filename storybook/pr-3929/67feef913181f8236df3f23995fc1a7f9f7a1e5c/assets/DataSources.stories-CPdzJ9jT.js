import{j as r}from"./iframe-BaZrwhZx.js";import{O as b}from"./object-table-D3_OLLkg.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BybLktsY.js";import{u as g}from"./useOsdkClient-BjmYpX5h.js";import"./preload-helper-DnruKc6a.js";import"./Table-29S7j1SD.js";import"./index-D-0PlAzK.js";import"./Dialog-CgLu58Ng.js";import"./cross-DyGYbG0h.js";import"./svgIconContainer-CPS4uDwC.js";import"./useBaseUiId-DP1A1DzF.js";import"./InternalBackdrop-BlVFF9Uk.js";import"./composite-TWu21kAm.js";import"./index-DqDEI7FH.js";import"./index-DPaJCD1i.js";import"./index-1hjhibA2.js";import"./useEventCallback-DleBT0Tw.js";import"./SkeletonBar-cgjN-Dqz.js";import"./LoadingCell-BGDV83Xi.js";import"./ColumnConfigDialog-BAlHt39x.js";import"./DraggableList-BS0v4LuN.js";import"./search-71bjR_1r.js";import"./Input-DobSEfMB.js";import"./useControlled-Dlt0xr8S.js";import"./Button-dH1tlH1-.js";import"./small-cross-Co1EYnRL.js";import"./ActionButton-R0r9xrNl.js";import"./Checkbox-Df3SYGBx.js";import"./useValueChanged-DASMciQb.js";import"./CollapsiblePanel-8fm_d55s.js";import"./MultiColumnSortDialog-DEShEitN.js";import"./MenuTrigger-CqaGYtW4.js";import"./CompositeItem-DSkIv2C1.js";import"./ToolbarRootContext-2JwHwx0i.js";import"./getDisabledMountTransitionStyles-NVGqMnQf.js";import"./getPseudoElementBounds-DgPoZQqw.js";import"./chevron-down-DT4qGbGn.js";import"./index-DF9-_rao.js";import"./error-BGPDkYrO.js";import"./BaseCbacBanner-DMtcNorV.js";import"./makeExternalStore-CILR1JwG.js";import"./Tooltip-DdG1nlz8.js";import"./PopoverPopup-ZXp_dq-B.js";import"./debounce-DnilrV4i.js";import"./tick-BvP19Wyv.js";import"./DropdownField-B9z89_X7.js";import"./isEqual-BKhwX9Wf.js";import"./withOsdkMetrics-Bcc9SY-J.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
