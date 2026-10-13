import{j as r}from"./iframe-qlavKhcC.js";import{O as b}from"./object-table-DhiZdnvj.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-sRwCYgRg.js";import{u as g}from"./useOsdkClient-ByR-C6Rs.js";import"./preload-helper-C1Px9yiL.js";import"./Table-DbQ4W-EG.js";import"./index-B67iUNS7.js";import"./Dialog-BY4Z7Ubb.js";import"./cross-_jhIc_Zd.js";import"./svgIconContainer-B4I2H2FD.js";import"./useBaseUiId-D99Is1tN.js";import"./InternalBackdrop-CstziURT.js";import"./composite-BRoxV9_z.js";import"./index-Br0Vgd-J.js";import"./index-ZYLeOkr2.js";import"./index-DQnoF5JT.js";import"./useEventCallback-BOOCKsQK.js";import"./SkeletonBar-BIIetOih.js";import"./LoadingCell-BNdMNVbo.js";import"./ColumnConfigDialog-Cnx4R8p0.js";import"./DraggableList-CfQeV_Eu.js";import"./search-UuNwtUH-.js";import"./Input-CtY9R5P4.js";import"./useControlled-DfaRfuwf.js";import"./Button-r2aYddAL.js";import"./small-cross-BiYV0tez.js";import"./ActionButton-CnFjisnJ.js";import"./Checkbox-BQbg4nhN.js";import"./useValueChanged-BTXhrJc6.js";import"./CollapsiblePanel-c5DyBahg.js";import"./MultiColumnSortDialog-BREwVqvQ.js";import"./MenuTrigger-CMkq6Pon.js";import"./CompositeItem-DQfjGBA0.js";import"./ToolbarRootContext-CciloOLN.js";import"./getDisabledMountTransitionStyles-CQfW0Yzy.js";import"./getPseudoElementBounds-BG6WHPgG.js";import"./chevron-down-CeWg8uEU.js";import"./index-8MYCUco8.js";import"./error-DGVK5Ulu.js";import"./BaseCbacBanner-sBOnvXxB.js";import"./makeExternalStore-DOTLplCc.js";import"./Tooltip-DipLFS6Y.js";import"./PopoverPopup-Cm3EjpO-.js";import"./debounce-CvczMDGy.js";import"./tick-BlSBD_8E.js";import"./DropdownField-TZaSBJ1a.js";import"./isEqual-Dh5UEpaX.js";import"./withOsdkMetrics-EXt5SwEJ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
