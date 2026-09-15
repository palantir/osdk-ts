import{j as r}from"./iframe-SCQrgHSr.js";import{O as b}from"./object-table-B617jB-3.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-1y6eyjzc.js";import{u as g}from"./useOsdkClient-osmLaNC1.js";import"./preload-helper-ruFAjrX8.js";import"./Table-DkDB8z-y.js";import"./index-BUtIlNP3.js";import"./Dialog-CXnN9hQo.js";import"./cross-RzKZrUkh.js";import"./svgIconContainer-PYczuJwB.js";import"./useBaseUiId-BR-Fy_C2.js";import"./InternalBackdrop-CVssRVAp.js";import"./composite-Dt5lUk_W.js";import"./index--0Ld1SF2.js";import"./index-w54i75Ov.js";import"./index-CT5e1oGB.js";import"./useEventCallback-C4za5yjU.js";import"./SkeletonBar-DuD90zQc.js";import"./LoadingCell-DgbcSV4w.js";import"./ColumnConfigDialog-DypaZEDp.js";import"./DraggableList-Dug4fsy0.js";import"./search-Dm4EdHL9.js";import"./Input-CnPO-APv.js";import"./useControlled-Cz7FsEHc.js";import"./Button-CuEtz6jx.js";import"./small-cross-Bw4zLqUD.js";import"./ActionButton-Czv-I_yU.js";import"./Checkbox-b815pw-1.js";import"./useValueChanged-B1QwrseW.js";import"./CollapsiblePanel-DkamSJ2Z.js";import"./MultiColumnSortDialog-BZC_LUEx.js";import"./MenuTrigger-DZ_gD7BR.js";import"./CompositeItem-Co12UxPz.js";import"./ToolbarRootContext-BfCeEs7c.js";import"./getDisabledMountTransitionStyles-BTvGlHNw.js";import"./getPseudoElementBounds-BmOO-M7r.js";import"./chevron-down-CgTNl4cy.js";import"./index-ZLSkTGBP.js";import"./error-bDXyKJC8.js";import"./BaseCbacBanner-pRZs5Dex.js";import"./makeExternalStore-CUOtWXW6.js";import"./Tooltip-BR8Gpg6Y.js";import"./PopoverPopup-Be5JEcOd.js";import"./debounce-BzGmHbO5.js";import"./tick-D-DSVTdq.js";import"./DropdownField-C7QjeZet.js";import"./isEqual-tncELNRj.js";import"./withOsdkMetrics-tKMMAYTA.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
