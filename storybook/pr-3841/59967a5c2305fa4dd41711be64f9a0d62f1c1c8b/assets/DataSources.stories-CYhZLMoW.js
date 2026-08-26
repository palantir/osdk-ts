import{j as r}from"./iframe-C-Tx6HWi.js";import{O as b}from"./object-table-Cf5MFxaA.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-GCVRWJpc.js";import{u as g}from"./useOsdkClient-C2VOm62_.js";import"./preload-helper-DGI0evEf.js";import"./Table-CZHeyD1o.js";import"./index-D83LHBrr.js";import"./Dialog-r1D42-Ux.js";import"./cross-1eBPB5o6.js";import"./svgIconContainer-B0ue0tIb.js";import"./useBaseUiId-DmObUJIN.js";import"./InternalBackdrop-BUrvlczT.js";import"./composite-Cc9l10TW.js";import"./index-Br_EbTHZ.js";import"./index-BZnuPb4P.js";import"./index-lRbbaMu8.js";import"./useEventCallback-Q-L5djZk.js";import"./SkeletonBar-DoUtLMSm.js";import"./LoadingCell-BCjONaSV.js";import"./ColumnConfigDialog-giesQaTM.js";import"./DraggableList-Dcmngyiz.js";import"./search-DE-tamAG.js";import"./Input-CIq38a5l.js";import"./useControlled-OhGlr_am.js";import"./Button-C5vL1jQD.js";import"./small-cross-BepHp4Xz.js";import"./ActionButton-D-i2pL5W.js";import"./Checkbox-anlJ1-A9.js";import"./useValueChanged-Bp_MYZXj.js";import"./CollapsiblePanel-B_JSdAcK.js";import"./MultiColumnSortDialog-C7J6eDlO.js";import"./MenuTrigger-BD2OxlOZ.js";import"./CompositeItem-CqPIIJ4M.js";import"./ToolbarRootContext-V5A_2QeJ.js";import"./getDisabledMountTransitionStyles-nsF5d56f.js";import"./getPseudoElementBounds-DT0mYvTC.js";import"./chevron-down-Co2dXPpt.js";import"./index-C9VJ4ZCw.js";import"./error-DRRLvBR9.js";import"./BaseCbacBanner-B9_VmhHF.js";import"./makeExternalStore-Cp2BBvmZ.js";import"./Tooltip-BjpU_Knk.js";import"./PopoverPopup-C0yBx_TL.js";import"./debounce-D71Y9sGY.js";import"./tick-BvEUUXuE.js";import"./DropdownField-CSrtnpGB.js";import"./isEqual-CRRlnMab.js";import"./withOsdkMetrics-XUw2KNZ5.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
