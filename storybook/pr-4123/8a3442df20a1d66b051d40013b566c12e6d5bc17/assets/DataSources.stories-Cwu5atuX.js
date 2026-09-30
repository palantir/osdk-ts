import{j as r}from"./iframe-B4_LdmvC.js";import{O as b}from"./object-table-DI0B1aeb.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-cyPUOZRk.js";import{u as g}from"./useOsdkClient-CJsnDWQX.js";import"./preload-helper-NaiMF-0L.js";import"./Table-C64YFzww.js";import"./index-DjXxmUSg.js";import"./Dialog-DnM81jQO.js";import"./cross-ByyhMC0G.js";import"./svgIconContainer-CqdyD_06.js";import"./useBaseUiId-D49bnhC0.js";import"./InternalBackdrop-CSZNBoeU.js";import"./composite-C8-JBw2s.js";import"./index-CDFbUPsJ.js";import"./index-DMnPNpwI.js";import"./index-BTH-2SAP.js";import"./useEventCallback-DiEJ97Pr.js";import"./SkeletonBar-CH4Er-h8.js";import"./LoadingCell-B35oQqMj.js";import"./ColumnConfigDialog-DKiL_4J1.js";import"./DraggableList-Tgs6ppMn.js";import"./search-CuDduKs4.js";import"./Input-D84OA9Cn.js";import"./useControlled-BCVYzpl3.js";import"./Button-DMJfC-Jo.js";import"./small-cross-CNTQ5kNU.js";import"./ActionButton-BCapXp1v.js";import"./Checkbox-YhHz-yme.js";import"./useValueChanged-gJKbZz5S.js";import"./CollapsiblePanel-Cq6d-sf2.js";import"./MultiColumnSortDialog-B5X38wYS.js";import"./MenuTrigger-BDYnqdaP.js";import"./CompositeItem-Te1LxRX_.js";import"./ToolbarRootContext-IBMmFjEY.js";import"./getDisabledMountTransitionStyles-CK9EkuFU.js";import"./getPseudoElementBounds-DZtnlOKj.js";import"./chevron-down-C6pppJ5O.js";import"./index-Dw8kDIA3.js";import"./error-De7UK8KB.js";import"./BaseCbacBanner-CXTir5a4.js";import"./makeExternalStore-DG8fJp9Q.js";import"./Tooltip-a9nGNvDJ.js";import"./PopoverPopup-UdMkbeCN.js";import"./debounce-C1TMjKV3.js";import"./tick-B07mwDIZ.js";import"./DropdownField-DDgNN9YF.js";import"./isEqual-L0Eo2ru8.js";import"./withOsdkMetrics-gLpSEa_H.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
