import{j as r}from"./iframe-BQKQTmXB.js";import{O as b}from"./object-table-DxzaGByH.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C50VX8fD.js";import{u as g}from"./useOsdkClient-CM8jZA73.js";import"./preload-helper-DpY65_Qx.js";import"./Table-CS7xRIyW.js";import"./index-BAgavFcN.js";import"./Dialog-DjuaQgnL.js";import"./cross-BbeReS0g.js";import"./svgIconContainer-s1izGso1.js";import"./useBaseUiId-D4SYKib3.js";import"./InternalBackdrop-DOuWLN2E.js";import"./composite-BB13Acp8.js";import"./index-DW4OjGFj.js";import"./index-DOiTTslB.js";import"./index-DtlmBYgM.js";import"./useEventCallback-jzD9VSkj.js";import"./SkeletonBar-CHr63-jY.js";import"./LoadingCell-BcWecsrO.js";import"./ColumnConfigDialog-B16mvlsW.js";import"./DraggableList-DRDlkfg0.js";import"./search-C5fONMO5.js";import"./Input-BvQQtcuT.js";import"./useControlled-C-CBJQhx.js";import"./Button-DY1Aghm3.js";import"./small-cross-DRGYN-SH.js";import"./ActionButton-BXjwvh-b.js";import"./Checkbox-B0mnHjoi.js";import"./useValueChanged-aOvOP-Fs.js";import"./CollapsiblePanel-BmP8oKEK.js";import"./MultiColumnSortDialog-DH7Tz3SM.js";import"./MenuTrigger-Dlse7q-R.js";import"./CompositeItem-BvDVmAAl.js";import"./ToolbarRootContext-C9Gx_t9N.js";import"./getDisabledMountTransitionStyles-DnQGFrBG.js";import"./getPseudoElementBounds-D05yaNHB.js";import"./chevron-down-D5kmZbrP.js";import"./index-GsxlN7I4.js";import"./error-dE1POcw9.js";import"./BaseCbacBanner-Bc66uD5M.js";import"./makeExternalStore-g6QM0BRI.js";import"./Tooltip-BNCx0jB1.js";import"./PopoverPopup-DXEOdufz.js";import"./debounce-eoEcRIUs.js";import"./tick-CNB2_64c.js";import"./DropdownField-DG4-GpYq.js";import"./isEqual-CSKA3c_k.js";import"./withOsdkMetrics-DsblZkp9.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
