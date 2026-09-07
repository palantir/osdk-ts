import{j as r}from"./iframe-rd5WAA9r.js";import{O as b}from"./object-table-Bow1VKQA.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dko2D5qU.js";import{u as g}from"./useOsdkClient-D69eR1Yy.js";import"./preload-helper-lrQOG99y.js";import"./Table-DOzirBhm.js";import"./index-gTgVe7bx.js";import"./Dialog-BnUjYFDl.js";import"./cross-D4_Lw_xT.js";import"./svgIconContainer-CP_qsPw-.js";import"./useBaseUiId-CEPsQLHg.js";import"./InternalBackdrop-B3L5JllW.js";import"./composite-DkMWUUkG.js";import"./index-DSVS7Qxc.js";import"./index-DUdz8bct.js";import"./index-DmdH8ftz.js";import"./useEventCallback-BZZpTgJM.js";import"./SkeletonBar-m_pUDdbL.js";import"./LoadingCell-BWxNRdoV.js";import"./ColumnConfigDialog-BQZGYE0s.js";import"./DraggableList-Bo75mTut.js";import"./search-C5LSfE4t.js";import"./Input-DFVDug_7.js";import"./useControlled-C60801w-.js";import"./Button-C07SmwTz.js";import"./small-cross-CD337zW0.js";import"./ActionButton-BJYoXnNg.js";import"./Checkbox-DCYSSIxe.js";import"./useValueChanged-Ed2hN9-0.js";import"./CollapsiblePanel-C9Mo0Rxt.js";import"./MultiColumnSortDialog-P5ZGkivr.js";import"./MenuTrigger-DPkzKct5.js";import"./CompositeItem-LJvlu5vM.js";import"./ToolbarRootContext-SIV8jQMI.js";import"./getDisabledMountTransitionStyles-BfSqpHOL.js";import"./getPseudoElementBounds-CPoBq_PV.js";import"./chevron-down-Bd0HHDZf.js";import"./index-DdtePcPk.js";import"./error-YfyqzF-q.js";import"./BaseCbacBanner-DgglHqpD.js";import"./makeExternalStore-DLTAhcmE.js";import"./Tooltip-BRPtYRya.js";import"./PopoverPopup-BmvVKpJX.js";import"./debounce-to-gPRqa.js";import"./tick-BC2qBGHW.js";import"./DropdownField-CHVnKgEN.js";import"./isEqual-BjUgct-F.js";import"./withOsdkMetrics-DzBl_MBp.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
