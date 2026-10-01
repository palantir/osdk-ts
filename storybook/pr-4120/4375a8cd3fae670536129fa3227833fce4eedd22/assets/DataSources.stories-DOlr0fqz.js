import{j as r}from"./iframe-CxgAHdD_.js";import{O as b}from"./object-table-C7ixhBuT.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cu2_hY38.js";import{u as g}from"./useOsdkClient-ByyBiwZ3.js";import"./preload-helper-DzzfBRd8.js";import"./Table-BmWVIdNB.js";import"./index-B6MbbFlT.js";import"./Dialog-Bf6796fg.js";import"./cross-EITDvaH2.js";import"./svgIconContainer-DjIuQsyB.js";import"./useBaseUiId-DFqoi1rW.js";import"./InternalBackdrop-Crloy16K.js";import"./composite-BPWDb3yK.js";import"./index-JYYI4S_c.js";import"./index-C5Y_pAhG.js";import"./index-D-vA12FC.js";import"./useEventCallback-sGjAmQeH.js";import"./SkeletonBar-MqJ57wAm.js";import"./LoadingCell-DmY90DU0.js";import"./ColumnConfigDialog-Bprdm90O.js";import"./DraggableList-fZ5NLtJS.js";import"./search-DdlCwk58.js";import"./Input-DwYZqNpM.js";import"./useControlled-UHTW7SDW.js";import"./Button-CKsUHdvx.js";import"./small-cross-B2gJHFCh.js";import"./ActionButton-Dckwg9He.js";import"./Checkbox-CfELijEt.js";import"./useValueChanged-BU8URL3f.js";import"./CollapsiblePanel-Dovlacux.js";import"./MultiColumnSortDialog-BIUGZ0oe.js";import"./MenuTrigger-DNZYutWE.js";import"./CompositeItem-rluq41vP.js";import"./ToolbarRootContext-CWhOmDUt.js";import"./getDisabledMountTransitionStyles-dFS3a40R.js";import"./getPseudoElementBounds-X4FvtDz7.js";import"./chevron-down-BzYJ5JTr.js";import"./index-8jFysFom.js";import"./error-BEe-jKvu.js";import"./BaseCbacBanner-DPhkvM0N.js";import"./makeExternalStore-BX4690TY.js";import"./Tooltip-Dr79PoMC.js";import"./PopoverPopup-0jo72wW7.js";import"./debounce-BfZR2tut.js";import"./tick-DFLiPhFT.js";import"./DropdownField-DQTuRx4r.js";import"./isEqual-DErxsFmS.js";import"./withOsdkMetrics-CAH8aQvL.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
