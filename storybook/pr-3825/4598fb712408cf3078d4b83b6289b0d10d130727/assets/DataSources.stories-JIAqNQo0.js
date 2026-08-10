import{j as r}from"./iframe-CC79wy_g.js";import{O as b}from"./object-table-CkXFhR3k.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DerlwncR.js";import{u as g}from"./useOsdkClient-DVLj6L8G.js";import"./preload-helper-z3GLkGAP.js";import"./Table-C_k6UNCH.js";import"./index-C33jCrCz.js";import"./Dialog-B4UEOGBl.js";import"./cross-ipWBqB8R.js";import"./svgIconContainer-BP6BFAr1.js";import"./useBaseUiId-DAg5RdyV.js";import"./InternalBackdrop-COWpBHnV.js";import"./composite-C0Vu5t_m.js";import"./index-BlLuABy0.js";import"./index-D3F-m5eM.js";import"./index-a8jLhQEi.js";import"./useEventCallback-DRddk0cy.js";import"./SkeletonBar-D7y69zaB.js";import"./LoadingCell-DTyZ0HHf.js";import"./ColumnConfigDialog-BJ-BrdIG.js";import"./DraggableList-DTV1vgC0.js";import"./search-C23-bZ6_.js";import"./Input-rDYGL68X.js";import"./useControlled-B01nKra1.js";import"./isEqual-7wD5lyOB.js";import"./isObject-CdHfoVRL.js";import"./Button-DuivO10i.js";import"./ActionButton-CNWw_rBN.js";import"./Checkbox-CsyxZdv8.js";import"./useValueChanged-CZBR_R6j.js";import"./CollapsiblePanel-DeEVZt2f.js";import"./MultiColumnSortDialog-Cne529o4.js";import"./MenuTrigger-D2yJRNIb.js";import"./CompositeItem-DFHw5T7g.js";import"./ToolbarRootContext-DHil5fps.js";import"./getDisabledMountTransitionStyles-Bvyp7A2k.js";import"./getPseudoElementBounds-BlO2I0zb.js";import"./chevron-down-v3_iAZgR.js";import"./index-HMtgFW0K.js";import"./error-wnTyEN9d.js";import"./BaseCbacBanner-B_HqEQWu.js";import"./makeExternalStore-CkX2v-LN.js";import"./Tooltip-qaomFd3j.js";import"./PopoverPopup-CcmMhYNQ.js";import"./toNumber-BhxvyPk1.js";import"./tick-Ctls74RV.js";import"./DropdownField-IS4psDxI.js";import"./withOsdkMetrics-EoR7xkLR.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
