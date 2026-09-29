import{j as r}from"./iframe-DuWBrnX6.js";import{O as b}from"./object-table-NFC3Qe8f.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CWLhWVCh.js";import{u as g}from"./useOsdkClient-DJmRQ5Mp.js";import"./preload-helper-DrgdFKpA.js";import"./Table-DvrpjmJ8.js";import"./index-OYdh6lUD.js";import"./Dialog-Cjzk_wQc.js";import"./cross-C8yX_l8v.js";import"./svgIconContainer-DbzEfa2V.js";import"./useBaseUiId-CdjTAmdC.js";import"./InternalBackdrop-qsctjG9Y.js";import"./composite-CJJfU9AF.js";import"./index-BL6aYYYG.js";import"./index-CVjf0aQc.js";import"./index-D_3yv_eh.js";import"./useEventCallback-myN755vz.js";import"./SkeletonBar-D0aUZjHc.js";import"./LoadingCell-CNxlL_rY.js";import"./ColumnConfigDialog-B-yyMbtv.js";import"./DraggableList-BGGltwRT.js";import"./search-D_dtCoIW.js";import"./Input-BkO3X1te.js";import"./useControlled-CfhHYIWN.js";import"./Button-_WXHae0p.js";import"./small-cross-CA-Fa8Tl.js";import"./ActionButton-BA89Y5HO.js";import"./Checkbox-KYSPHyUo.js";import"./useValueChanged-z4RYagBJ.js";import"./CollapsiblePanel-nkH1KYbY.js";import"./MultiColumnSortDialog-D1o5ebId.js";import"./MenuTrigger-CsX-_ldT.js";import"./CompositeItem-BMOplAgs.js";import"./ToolbarRootContext-rla5WBjp.js";import"./getDisabledMountTransitionStyles-Di8yZzl5.js";import"./getPseudoElementBounds-BpxRKDt_.js";import"./chevron-down-C1ZcStCW.js";import"./index-BrPlemdb.js";import"./error-Ch_37QlI.js";import"./BaseCbacBanner-DAytYK1q.js";import"./makeExternalStore-CjwtTBHZ.js";import"./Tooltip-QYTL3AIS.js";import"./PopoverPopup-xFmMVW0q.js";import"./debounce-Jnl0OpEZ.js";import"./tick-BLa43JG6.js";import"./DropdownField-BG1ZRgQZ.js";import"./isEqual-Eg2TaXkJ.js";import"./withOsdkMetrics-DGxRrW5c.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
