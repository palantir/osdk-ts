import{j as r}from"./iframe-6a0axaYb.js";import{O as b}from"./object-table-ckLHDuUg.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-TvjjpnYM.js";import{u as g}from"./useOsdkClient-BFFz0Pdr.js";import"./preload-helper-C65r43dF.js";import"./Table-Bp_iz_Lh.js";import"./index-Bx8WIjbQ.js";import"./Dialog-Dniq6lMf.js";import"./cross-ui5GjUpZ.js";import"./svgIconContainer-CaPxp0ph.js";import"./useBaseUiId-Cbq5nu5V.js";import"./InternalBackdrop-CCRxD5z3.js";import"./composite-C5OCHPh0.js";import"./index-BGOIdxxc.js";import"./index-lSA6E12E.js";import"./index-BtvGHLm_.js";import"./useEventCallback-BxS3_eQ_.js";import"./SkeletonBar-DXlHutjQ.js";import"./LoadingCell-Cp2o2IIh.js";import"./ColumnConfigDialog-BBQhTIyV.js";import"./DraggableList-CW8x0iH2.js";import"./search-BNwfslCq.js";import"./Input-DMbXSCc_.js";import"./useControlled-CjqN0_NF.js";import"./isEqual-56Gbp1Vh.js";import"./isObject-B29iDIAZ.js";import"./Button-De2gQHI6.js";import"./ActionButton-DrWqQcrB.js";import"./Checkbox-akOJqxna.js";import"./useValueChanged-C0Arb9yb.js";import"./CollapsiblePanel-DMUD5QcD.js";import"./MultiColumnSortDialog-C19AmYzX.js";import"./MenuTrigger-DfEaML1p.js";import"./CompositeItem-QPaHlaAE.js";import"./ToolbarRootContext-3aAm6U4A.js";import"./getDisabledMountTransitionStyles-CQcYSoK0.js";import"./getPseudoElementBounds-EVwwh6hp.js";import"./chevron-down-ZwgymyQM.js";import"./index-BaPDJwEJ.js";import"./error-ZufoUxds.js";import"./BaseCbacBanner-CYPhAEd2.js";import"./makeExternalStore-BIiPaBhV.js";import"./Tooltip-DRQfkytf.js";import"./PopoverPopup-B1YhPEAq.js";import"./toNumber-SIC4RXNP.js";import"./tick-ChlBO6Ol.js";import"./DropdownField-BTkkJQzG.js";import"./withOsdkMetrics-DDxseQIl.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
