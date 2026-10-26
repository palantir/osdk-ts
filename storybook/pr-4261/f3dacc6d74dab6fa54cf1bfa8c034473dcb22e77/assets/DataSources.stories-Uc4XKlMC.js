import{j as r}from"./iframe-Bgb2wSaw.js";import{O as b}from"./object-table-B0S9YS6J.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BpShOoKU.js";import{u as g}from"./useOsdkClient-jOrP_Hjl.js";import"./preload-helper-CAyUgZKm.js";import"./Table-Dn1EHvQR.js";import"./index-Lnta--SZ.js";import"./Dialog-426aTfaL.js";import"./cross-BBwyRiM8.js";import"./svgIconContainer-DLn89RUi.js";import"./useBaseUiId-Cl3siqr8.js";import"./InternalBackdrop-PRRj70IN.js";import"./composite-BJNESzre.js";import"./index-DE8mIe1g.js";import"./index-CYHybnYf.js";import"./index-dezdEXRW.js";import"./useEventCallback-BpovZ0Ho.js";import"./SkeletonBar-CV5mZHb2.js";import"./LoadingCell-Ds62oVdJ.js";import"./ColumnConfigDialog-GH9qyALG.js";import"./DraggableList-DUD4w40C.js";import"./search-B8Q2SaYZ.js";import"./Input-CqMZoAkj.js";import"./useControlled-C5Efmt4q.js";import"./Button-ckHDf9dN.js";import"./small-cross-C_y-cV78.js";import"./ActionButton-BW0pCsIy.js";import"./Checkbox-C3tp-DrA.js";import"./useValueChanged-DciPxUCb.js";import"./CollapsiblePanel-DMdGItnd.js";import"./MultiColumnSortDialog-5vmbLhss.js";import"./MenuTrigger-PXVedLgF.js";import"./CompositeItem-D-n20gZA.js";import"./ToolbarRootContext-CPL7CHly.js";import"./getDisabledMountTransitionStyles-DQt5A1ew.js";import"./getPseudoElementBounds-BIQliNTO.js";import"./chevron-down-Lx8JbYiI.js";import"./index-D1daQUXJ.js";import"./error-4j4VkswI.js";import"./BaseCbacBanner-BUjt2BWO.js";import"./makeExternalStore-C86iDpxn.js";import"./Tooltip-LmdpxSyk.js";import"./PopoverPopup-CB4Z_i75.js";import"./debounce-BEqEgf8r.js";import"./tick-BdYlxEi1.js";import"./DropdownField-CkS9IXqj.js";import"./isEqual-i8n36zat.js";import"./withOsdkMetrics-D_vYT_n9.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
