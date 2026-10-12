import{j as r}from"./iframe-BSB0HYWK.js";import{O as b}from"./object-table-BWVBwQxB.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BM8GEaVv.js";import{u as g}from"./useOsdkClient-fF8P9Svw.js";import"./preload-helper-BkFYvt7D.js";import"./Table-DzUVH6T3.js";import"./index-CFn7NuDF.js";import"./Dialog-B_ZKv57J.js";import"./cross-CyBS2Nke.js";import"./svgIconContainer-ZqmkZwCg.js";import"./useBaseUiId-DOYgZcYk.js";import"./InternalBackdrop-rCZWLdBO.js";import"./composite-DrFNuPAr.js";import"./index-qi5mcdT7.js";import"./index-UxDU_lnD.js";import"./index-BWL2KDwg.js";import"./useEventCallback-BmJuJRN8.js";import"./SkeletonBar-AS4gHbaK.js";import"./LoadingCell-D2hxsOA-.js";import"./ColumnConfigDialog-B22nyHE9.js";import"./DraggableList-CZTlQJRm.js";import"./search-DVQNznbm.js";import"./Input-BwaAEQhC.js";import"./useControlled-CPd31jrj.js";import"./Button-odXi-ust.js";import"./small-cross-xl9eyWoT.js";import"./ActionButton-SFqgFBPz.js";import"./Checkbox-CNUTcBu6.js";import"./useValueChanged-DEyO1HnO.js";import"./CollapsiblePanel-BKaGtf_t.js";import"./MultiColumnSortDialog-Dn9jhLxM.js";import"./MenuTrigger-DMz9UZ0B.js";import"./CompositeItem-DFUc4zP3.js";import"./ToolbarRootContext-BHLo6WQV.js";import"./getDisabledMountTransitionStyles-MdauVsir.js";import"./getPseudoElementBounds-DO90Z8uF.js";import"./chevron-down-eX4f9a69.js";import"./index-DF12onFH.js";import"./error-Bf4UPDqQ.js";import"./BaseCbacBanner-DY1hopzF.js";import"./makeExternalStore-dBNRhzI_.js";import"./Tooltip-BcbU3cUH.js";import"./PopoverPopup-D5lvrcxC.js";import"./debounce-CV5acG61.js";import"./tick-MzeZ9_PK.js";import"./DropdownField-t0KVkBHv.js";import"./isEqual-CMA1ePV8.js";import"./withOsdkMetrics-BSqN_NUg.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
