import{j as r}from"./iframe-BO5nIFL0.js";import{O as b}from"./object-table-z13Q5_s7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cuvd9fCh.js";import{u as g}from"./useOsdkClient-ChLOXtjV.js";import"./preload-helper-Byzzz28m.js";import"./Table-C42TRl45.js";import"./index-35ki7-Fy.js";import"./Dialog-ClcVFzEO.js";import"./cross-DB2PwsTQ.js";import"./svgIconContainer-CCohatq7.js";import"./useBaseUiId-WJQc9a5f.js";import"./InternalBackdrop-CfomXrTc.js";import"./composite-DHPIcUre.js";import"./index-BAvGYYuM.js";import"./index-CnZy_Djg.js";import"./index-DXF71g3x.js";import"./useEventCallback-BBKOS5QY.js";import"./SkeletonBar-COem--l-.js";import"./LoadingCell-BR4FtUWn.js";import"./ColumnConfigDialog-kvkughQ9.js";import"./DraggableList-id8D9Qse.js";import"./search-D6UctYzP.js";import"./Input-CbgheE8R.js";import"./useControlled-BymPsR7w.js";import"./isEqual-Ccnfufx7.js";import"./isObject-CLOeC-oN.js";import"./Button-DbsXRm21.js";import"./ActionButton-7mz2JyIw.js";import"./Checkbox-CNeugPLz.js";import"./useValueChanged-CY3fQIPq.js";import"./CollapsiblePanel-C9Imjw4U.js";import"./MultiColumnSortDialog-CD2JhBDw.js";import"./MenuTrigger-BcPjrXj3.js";import"./CompositeItem-B_e5r9wc.js";import"./ToolbarRootContext-DfhUwAFa.js";import"./getDisabledMountTransitionStyles-DB76-VLH.js";import"./getPseudoElementBounds-RB9RdRLr.js";import"./chevron-down-dkXODqVq.js";import"./index-BUXFO2wu.js";import"./error-ZVb7iWyg.js";import"./BaseCbacBanner-B5xkK0S4.js";import"./makeExternalStore-CZCTIsA8.js";import"./Tooltip-tv05UBzh.js";import"./PopoverPopup-CJg2meX_.js";import"./toNumber-cp78ICze.js";import"./tick-CHc8oJrg.js";import"./DropdownField-DcVGt7_G.js";import"./withOsdkMetrics-BH7Yc5xr.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
