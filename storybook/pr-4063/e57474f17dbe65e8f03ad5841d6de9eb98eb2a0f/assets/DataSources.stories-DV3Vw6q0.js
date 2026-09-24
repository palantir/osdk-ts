import{j as r}from"./iframe-D4LVDAiJ.js";import{O as b}from"./object-table-D1_mVYyU.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DMb43DLq.js";import{u as g}from"./useOsdkClient--x9hnGz1.js";import"./preload-helper-BRiuw1tM.js";import"./Table-DOpeTxiX.js";import"./index-Doq37HVC.js";import"./Dialog-Bx_F1j1I.js";import"./cross-CrN1mHSM.js";import"./svgIconContainer-CKDcZSuW.js";import"./useBaseUiId-t0XnwFOX.js";import"./InternalBackdrop-BOzYgdF3.js";import"./composite-BgyxEEOk.js";import"./index-DgptZbMC.js";import"./index-9wm5pOXR.js";import"./index-BFnO8bnI.js";import"./useEventCallback-ecbQBYez.js";import"./SkeletonBar-MoCvVI88.js";import"./LoadingCell-H4ZHpqgi.js";import"./ColumnConfigDialog-D0Zpm4uY.js";import"./DraggableList-C--cWquz.js";import"./search-BWsEyD_y.js";import"./Input-Dus9QmGC.js";import"./useControlled-BSRYlGKN.js";import"./Button-De22pfKg.js";import"./small-cross-BGgjchjT.js";import"./ActionButton-hlHYq4Ql.js";import"./Checkbox-Nx_0sa1a.js";import"./useValueChanged-eXWosK3O.js";import"./CollapsiblePanel-D8e_JP8A.js";import"./MultiColumnSortDialog-BHIJoffJ.js";import"./MenuTrigger-Dm3yFkAm.js";import"./CompositeItem-BgdG338-.js";import"./ToolbarRootContext-VbrNfAOv.js";import"./getDisabledMountTransitionStyles-DHkhoqiG.js";import"./getPseudoElementBounds-BHzzAx7-.js";import"./chevron-down-DO0q0xd1.js";import"./index-CgV2ExFN.js";import"./error-B5872Opm.js";import"./BaseCbacBanner-C3Z3yFar.js";import"./makeExternalStore-CGuk3GA7.js";import"./Tooltip-1Df9hLxD.js";import"./PopoverPopup--885M2Lm.js";import"./debounce-B-C1jtyL.js";import"./tick-Du1HMgdZ.js";import"./DropdownField-BuncSUDK.js";import"./isEqual-BPsbN3op.js";import"./withOsdkMetrics-ooLMpNFk.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
