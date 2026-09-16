import{j as r}from"./iframe-BDguHbPD.js";import{O as b}from"./object-table-hdLdDN5o.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BS7qBpiH.js";import{u as g}from"./useOsdkClient-ZETqGTvY.js";import"./preload-helper-7xLPbKmM.js";import"./Table-CCVoIMnP.js";import"./index-C_5MPolp.js";import"./Dialog-COXLOajc.js";import"./cross-D4TeOGZ-.js";import"./svgIconContainer-Z2Julm7W.js";import"./useBaseUiId-bwbz0VU7.js";import"./InternalBackdrop-CbyyzA6w.js";import"./composite-BsxX_L6c.js";import"./index-BAF4Gh4w.js";import"./index-C7DI1YIp.js";import"./index-hw-WZAqz.js";import"./useEventCallback-C9A8Np9g.js";import"./SkeletonBar-CWFv9FmM.js";import"./LoadingCell-CY-ml6Az.js";import"./ColumnConfigDialog-CgmmapDK.js";import"./DraggableList-C3QCD6_U.js";import"./search-B1yR-f_r.js";import"./Input-CXvy1-u2.js";import"./useControlled-B3aVNzWK.js";import"./Button-D2v8_Tej.js";import"./small-cross-Dj8IgHas.js";import"./ActionButton-BN4Q2839.js";import"./Checkbox-BFou0tTv.js";import"./useValueChanged-Djc2nTS9.js";import"./CollapsiblePanel-DwibqjzF.js";import"./MultiColumnSortDialog-Ctf7BEab.js";import"./MenuTrigger-CTrmgruB.js";import"./CompositeItem-5MkrSg_6.js";import"./ToolbarRootContext-CALlmZI0.js";import"./getDisabledMountTransitionStyles-Cs-VaHPm.js";import"./getPseudoElementBounds-_M_XCnOW.js";import"./chevron-down-CHEXQxiW.js";import"./index-CaXJKsDl.js";import"./error-uqFmDj8x.js";import"./BaseCbacBanner-DyjG9k1J.js";import"./makeExternalStore-COwSJhBY.js";import"./Tooltip-B4VmxO0l.js";import"./PopoverPopup-DbEiKLnC.js";import"./debounce-XLiTuY6-.js";import"./tick-0fLMSfwX.js";import"./DropdownField-CGRpLszH.js";import"./isEqual-Du2vZJ9T.js";import"./withOsdkMetrics-CLLpRdbv.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
