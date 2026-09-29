import{j as r}from"./iframe-BLyAG4qt.js";import{O as b}from"./object-table-NGNiskNG.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BS4W9nNe.js";import{u as g}from"./useOsdkClient-BX4YSqf_.js";import"./preload-helper-X2unNE1v.js";import"./Table-DBOtVTAg.js";import"./index-DRHjeWhY.js";import"./Dialog-Dc4tpC3L.js";import"./cross-zpmkdN3j.js";import"./svgIconContainer-BYhpNXbV.js";import"./useBaseUiId-BsqYTkrj.js";import"./InternalBackdrop-CwfcL7hz.js";import"./composite-DXp5HadG.js";import"./index-DSTh4XEz.js";import"./index-DfIb261n.js";import"./index-C9NYWSwp.js";import"./useEventCallback-6AhhLJg7.js";import"./SkeletonBar-DPmC_kej.js";import"./LoadingCell-D5DjHMWy.js";import"./ColumnConfigDialog-BC61SSau.js";import"./DraggableList-CDR_hlvX.js";import"./search-BnzIM1pO.js";import"./Input-COYDi8CV.js";import"./useControlled-vEPHT0r_.js";import"./Button-C4LVX8xd.js";import"./small-cross-D36GncLx.js";import"./ActionButton-CDA8eLMX.js";import"./Checkbox-CKtWNbzg.js";import"./useValueChanged-Csg5b8FM.js";import"./CollapsiblePanel-BMZ6E2uP.js";import"./MultiColumnSortDialog-DvjlzBJu.js";import"./MenuTrigger-D91NXJa0.js";import"./CompositeItem-DKNH-seI.js";import"./ToolbarRootContext-t3Sav1_0.js";import"./getDisabledMountTransitionStyles-DigoJAfC.js";import"./getPseudoElementBounds-CmuMJUdB.js";import"./chevron-down-Dl_PyCCQ.js";import"./index-D1BfEv3K.js";import"./error-CALDIyj0.js";import"./BaseCbacBanner-C0XhL7L-.js";import"./makeExternalStore-B6gSjutd.js";import"./Tooltip-BCO_7oJW.js";import"./PopoverPopup-B6km_FCr.js";import"./debounce-oQzszjOg.js";import"./tick-Mv4hM8lK.js";import"./DropdownField-BLxC4wsP.js";import"./isEqual-Djmdr7nK.js";import"./withOsdkMetrics-hrd9pp_O.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
