import{j as r}from"./iframe-B4_7uhV2.js";import{O as b}from"./object-table-UEYeUjSy.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DrK9OguH.js";import{u as g}from"./useOsdkClient-GbTGK958.js";import"./preload-helper-Cw77NyEA.js";import"./Table-Cb9nM9r8.js";import"./index-Mdm4Vdz6.js";import"./Dialog-e7-brm2e.js";import"./cross-rrtuBbZ-.js";import"./svgIconContainer-CfsWQbiM.js";import"./useBaseUiId-jcj23Jre.js";import"./InternalBackdrop-D-j65lhL.js";import"./composite-DzB4ymUk.js";import"./index-BIAFdQmf.js";import"./index-tpsUjXJC.js";import"./index-C1Mq3mGJ.js";import"./useEventCallback-CyCSzUSB.js";import"./SkeletonBar-D706xdxV.js";import"./LoadingCell-M6mP6F3v.js";import"./ColumnConfigDialog-DQaZZWQt.js";import"./DraggableList-DXgJ1vEZ.js";import"./search-CkWTC5d3.js";import"./Input-D8cnvsnb.js";import"./useControlled-DuB2GZAM.js";import"./Button-Bp6QDAip.js";import"./small-cross-Bz0aCskk.js";import"./ActionButton-DjDw0tBC.js";import"./Checkbox-Dl3TjmaY.js";import"./useValueChanged-UlU1Gt2C.js";import"./CollapsiblePanel-B1l4B7kE.js";import"./MultiColumnSortDialog-C3IbAu0T.js";import"./MenuTrigger-gee-gl2y.js";import"./CompositeItem-CYgFQeQK.js";import"./ToolbarRootContext-By4aijuh.js";import"./getDisabledMountTransitionStyles-CGBLZLsV.js";import"./getPseudoElementBounds-D2XWYg3z.js";import"./chevron-down-DsD_ZS4y.js";import"./index-q1tL4Nc7.js";import"./error-CBs6A8KU.js";import"./BaseCbacBanner-B3k_08Ma.js";import"./makeExternalStore-D3O6kaQb.js";import"./Tooltip-Bvngz8iq.js";import"./PopoverPopup-DTvwoF1P.js";import"./debounce-X8d_TWmr.js";import"./tick-7a879WvW.js";import"./DropdownField-DTALq__z.js";import"./isEqual-ChU1peez.js";import"./withOsdkMetrics-DXLG4Ams.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
