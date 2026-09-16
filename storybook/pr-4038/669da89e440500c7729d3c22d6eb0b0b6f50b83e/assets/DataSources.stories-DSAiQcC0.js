import{j as r}from"./iframe-CFSd_ghT.js";import{O as b}from"./object-table-C-erOY28.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-q0tZVPD8.js";import{u as g}from"./useOsdkClient-C-wItY3f.js";import"./preload-helper-ZllT-xST.js";import"./Table-Kg2JFIUp.js";import"./index-BVC2DtDE.js";import"./Dialog-D1UeKJjR.js";import"./cross-Pk2YzKDQ.js";import"./svgIconContainer-CuLuTWV9.js";import"./useBaseUiId-Bi512Q4g.js";import"./InternalBackdrop-KQmr3-ne.js";import"./composite-rhm-ES_j.js";import"./index-CX8cSHY9.js";import"./index-PmO53gZu.js";import"./index-CeP15cDX.js";import"./useEventCallback-DwcyWwyP.js";import"./SkeletonBar-DjQkHXkX.js";import"./LoadingCell-CEBP-9hU.js";import"./ColumnConfigDialog-BudUXmYY.js";import"./DraggableList-DiKHUeGr.js";import"./search-CiZh2SnD.js";import"./Input-B266R5K5.js";import"./useControlled-CUIixQM1.js";import"./Button-CII42J6y.js";import"./small-cross-DefbWUHG.js";import"./ActionButton-DyXI2aTY.js";import"./Checkbox-BCew5jIG.js";import"./useValueChanged-D-s1qoWy.js";import"./CollapsiblePanel-D8d1ogGm.js";import"./MultiColumnSortDialog-LJp1m9Qr.js";import"./MenuTrigger-MZrC_UOb.js";import"./CompositeItem-DvZYqwOH.js";import"./ToolbarRootContext-87swm1F0.js";import"./getDisabledMountTransitionStyles-LtEOHvLP.js";import"./getPseudoElementBounds-GHyUotEa.js";import"./chevron-down-CkZ0acRz.js";import"./index-C6yQCaVG.js";import"./error-QrCIC66e.js";import"./BaseCbacBanner-DorfSfUc.js";import"./makeExternalStore-BPSbFC_f.js";import"./Tooltip-Qcx9gV6X.js";import"./PopoverPopup-CZqjkl0j.js";import"./debounce-Cqi7OFEi.js";import"./tick-Bd_VGJ-8.js";import"./DropdownField-BXoQO-Qa.js";import"./isEqual-D5p16SRy.js";import"./withOsdkMetrics-D3lDS6Ow.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
