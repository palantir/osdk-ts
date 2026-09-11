import{j as r}from"./iframe-CUvi9RCV.js";import{O as b}from"./object-table-D10wKq82.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-LdtOR9jP.js";import{u as g}from"./useOsdkClient-BgZD9TyH.js";import"./preload-helper-GqmuGD1I.js";import"./Table-BMWdrlsV.js";import"./index-Z2IvR_t6.js";import"./Dialog-zDUgWSJT.js";import"./cross-BswioSgU.js";import"./svgIconContainer-BiFTkGqE.js";import"./useBaseUiId-D-6poyG0.js";import"./InternalBackdrop-CIMfO5y8.js";import"./composite-BnXsOcTt.js";import"./index-COsMkiIW.js";import"./index-Cn-BGg-w.js";import"./index-B95PX811.js";import"./useEventCallback-CG8tP2N4.js";import"./SkeletonBar-r6LXjWHA.js";import"./LoadingCell-D-T0QMYd.js";import"./ColumnConfigDialog-DwaQQ7uZ.js";import"./DraggableList-CWWzUIUD.js";import"./search-DljzsUQ1.js";import"./Input-gjvR1UgW.js";import"./useControlled-CGiicoDL.js";import"./Button-DN8sAUol.js";import"./small-cross-ojaGdjNx.js";import"./ActionButton-DDSl0ABg.js";import"./Checkbox-DWypi4-C.js";import"./useValueChanged-CVvpPlQH.js";import"./CollapsiblePanel-DqM5CzQ9.js";import"./MultiColumnSortDialog-BXSs3FYu.js";import"./MenuTrigger-TKN9rOm7.js";import"./CompositeItem-BOheTBRU.js";import"./ToolbarRootContext-B6eeQfxM.js";import"./getDisabledMountTransitionStyles-DyOCVWdJ.js";import"./getPseudoElementBounds-Cvp7B3_m.js";import"./chevron-down-DG0ceM1k.js";import"./index-fPjfyI_6.js";import"./error-nPJR1KaJ.js";import"./BaseCbacBanner-DiGXVIg-.js";import"./makeExternalStore-CRTDTaWN.js";import"./Tooltip-_cTW755E.js";import"./PopoverPopup-BbwvRm54.js";import"./debounce-Cv2dODgM.js";import"./tick-CHlHLJu2.js";import"./DropdownField-B-lq3-Qt.js";import"./isEqual-CsYmmgrt.js";import"./withOsdkMetrics-B0yRqBdO.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
