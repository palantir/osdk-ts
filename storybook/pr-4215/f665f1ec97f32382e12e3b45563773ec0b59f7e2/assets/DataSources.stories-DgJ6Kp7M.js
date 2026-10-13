import{j as r}from"./iframe-CzOy-JTY.js";import{O as b}from"./object-table-C0b1ubO2.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CfRBwVyn.js";import{u as g}from"./useOsdkClient-D1vV9ihk.js";import"./preload-helper-CIQ1DaMN.js";import"./Table-C8bB-X5_.js";import"./index-Dumhhqmc.js";import"./Dialog-BMqGARaE.js";import"./cross-CWygvYLq.js";import"./svgIconContainer-DpIclYOT.js";import"./useBaseUiId-DnUPrOGO.js";import"./InternalBackdrop-gMia_oWL.js";import"./composite-BVn9jKX7.js";import"./index-CyYfj6ys.js";import"./index-C62E3V-C.js";import"./index-_QH05vrF.js";import"./useEventCallback-C_FMXfn2.js";import"./SkeletonBar-D4NOqT2L.js";import"./LoadingCell-BQfn9-eD.js";import"./ColumnConfigDialog-BcGxv01R.js";import"./DraggableList-DvpxxXIl.js";import"./search-BJ6lcKDX.js";import"./Input-MeFMWRbL.js";import"./useControlled-B2qS0FH4.js";import"./Button-emQM4kcG.js";import"./small-cross-BveryxDD.js";import"./ActionButton-Cda1a-qR.js";import"./Checkbox-B6T5uoCq.js";import"./useValueChanged-BXU_izG3.js";import"./CollapsiblePanel-BO5DGu80.js";import"./MultiColumnSortDialog-Bk31HQNT.js";import"./MenuTrigger-CzBE759j.js";import"./CompositeItem-BAmKL-U0.js";import"./ToolbarRootContext-BCdc83Ck.js";import"./getDisabledMountTransitionStyles-AvhfLujU.js";import"./getPseudoElementBounds-D6X318e6.js";import"./chevron-down-USLYqae_.js";import"./index-BLqBty1z.js";import"./error-Dy_Lr_qP.js";import"./BaseCbacBanner-epv2hjqx.js";import"./makeExternalStore-BilT8BO2.js";import"./Tooltip-BdClGodm.js";import"./PopoverPopup-qNr6ABeL.js";import"./debounce-B12Ng-j0.js";import"./tick-6hUQYeO9.js";import"./DropdownField-B6ALO_qp.js";import"./isEqual-ChbPr4N3.js";import"./withOsdkMetrics-0tSP_r9F.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
