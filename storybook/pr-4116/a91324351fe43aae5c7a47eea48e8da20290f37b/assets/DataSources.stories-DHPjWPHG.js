import{j as r}from"./iframe-CZutwAHo.js";import{O as b}from"./object-table-BbJRuFno.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BqPDFhUD.js";import{u as g}from"./useOsdkClient-DgvAplUI.js";import"./preload-helper-Cn3SJHww.js";import"./Table-B8cgGfQL.js";import"./index-CppgNV0M.js";import"./Dialog-B1VpodKR.js";import"./cross-D02obdgD.js";import"./svgIconContainer-CmX1H1mx.js";import"./useBaseUiId-CtEICjky.js";import"./InternalBackdrop-G99DwSaZ.js";import"./composite-mcUSxhXz.js";import"./index-B50GZKUg.js";import"./index-2k1Tvx5C.js";import"./index-HA6Va8NR.js";import"./useEventCallback-DZshVR4a.js";import"./SkeletonBar-B0Lj-A75.js";import"./LoadingCell-DZJOvAcQ.js";import"./ColumnConfigDialog-Bu4boOIF.js";import"./DraggableList-C-UqdMK0.js";import"./search-C59PF3w9.js";import"./Input-oDj_0Z0d.js";import"./useControlled-DwVRdNhF.js";import"./Button-sSK8eFI-.js";import"./small-cross-CFVLA5Ia.js";import"./ActionButton-axhhg9v5.js";import"./Checkbox-CgMU5S4K.js";import"./useValueChanged-CZKUaGQu.js";import"./CollapsiblePanel-Dsv7xvDY.js";import"./MultiColumnSortDialog-WIJhht9a.js";import"./MenuTrigger-C2muNGYu.js";import"./CompositeItem-DdZNAqnt.js";import"./ToolbarRootContext-FQPAQT5c.js";import"./getDisabledMountTransitionStyles-BZ863oN2.js";import"./getPseudoElementBounds-D34_EoM3.js";import"./chevron-down--5qYG9Xz.js";import"./index-io1wfiP6.js";import"./error-CZtG4Hsy.js";import"./BaseCbacBanner-mfv3mmX8.js";import"./makeExternalStore-CCR0CM05.js";import"./Tooltip-8A2JRkIJ.js";import"./PopoverPopup-CJaw97SK.js";import"./debounce-0IA_cAla.js";import"./tick-Dwj_TbVz.js";import"./DropdownField-CGLxykfT.js";import"./isEqual-CD-t15N1.js";import"./withOsdkMetrics-Bw7lmz7K.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
