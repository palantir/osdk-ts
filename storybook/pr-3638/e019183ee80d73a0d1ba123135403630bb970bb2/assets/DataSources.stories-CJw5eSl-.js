import{j as r}from"./iframe-BdrRBIvD.js";import{O as b}from"./object-table-Bp9ZPXwv.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BitKGKZC.js";import{u as g}from"./useOsdkClient-DqwdNOrg.js";import"./preload-helper-N4H8PUoz.js";import"./Table-Cba47QOv.js";import"./index-CyGaVN4-.js";import"./Dialog-BYZH3diU.js";import"./cross-D7w2_wJU.js";import"./svgIconContainer-BaNqItXx.js";import"./useBaseUiId-CaVqH5La.js";import"./InternalBackdrop-a6ksL_iS.js";import"./composite-AHJSpspS.js";import"./index-CeaTfT0R.js";import"./index-CKJSQvSH.js";import"./index-Pelcz0Jw.js";import"./useEventCallback-BVBEQazv.js";import"./SkeletonBar-DPxsnRRt.js";import"./LoadingCell-MwptuhCt.js";import"./ColumnConfigDialog-Cr79jsaD.js";import"./DraggableList-CZoJ12ek.js";import"./search-P7WA0n-i.js";import"./Input-Crry490_.js";import"./useControlled-jNQesOqe.js";import"./Button-C9phC2y1.js";import"./small-cross-CXbRHj9E.js";import"./ActionButton-B4tMIaGw.js";import"./Checkbox-ByIXHCwi.js";import"./useValueChanged-B8B2MLUf.js";import"./CollapsiblePanel-sFHX5HPm.js";import"./MultiColumnSortDialog-B9Hj3lBb.js";import"./MenuTrigger-BwOTrPip.js";import"./CompositeItem-DukmHiA_.js";import"./ToolbarRootContext-DgRaA1gf.js";import"./getDisabledMountTransitionStyles-Ci3H7Cv-.js";import"./getPseudoElementBounds-CLs6rES9.js";import"./chevron-down-JT0IhlWE.js";import"./index-CyfjPVR_.js";import"./error-DWKLqXS9.js";import"./BaseCbacBanner-DhNV4gSP.js";import"./makeExternalStore--cYtEdhQ.js";import"./Tooltip-uc0E4CK4.js";import"./PopoverPopup-BR5nJgsw.js";import"./debounce-Cz2uqvCU.js";import"./tick-C7LkjtSk.js";import"./DropdownField-C3dDcHKe.js";import"./isEqual-DatieH5_.js";import"./withOsdkMetrics-BJXn2F5H.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
