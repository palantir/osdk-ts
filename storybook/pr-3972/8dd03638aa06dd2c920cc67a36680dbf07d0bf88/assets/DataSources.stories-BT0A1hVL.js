import{j as r}from"./iframe-8UpnOuPx.js";import{O as b}from"./object-table-47NTCnrV.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B3h9y1Sw.js";import{u as g}from"./useOsdkClient-BPuOXI3X.js";import"./preload-helper-D9D_7nkx.js";import"./Table-C-OX5Mmy.js";import"./index-De8YaqE2.js";import"./Dialog-C_aXCr_n.js";import"./cross-CNviQWqx.js";import"./svgIconContainer-Dv8gj-hz.js";import"./useBaseUiId-CBuqVLxg.js";import"./InternalBackdrop-Cv2tFHev.js";import"./composite-2992q4P-.js";import"./index-BjHFI_ak.js";import"./index-4j-jzydQ.js";import"./index-C0LjKbrF.js";import"./useEventCallback-DahdGvFR.js";import"./SkeletonBar-DGlriSfZ.js";import"./LoadingCell-COBeQmHE.js";import"./ColumnConfigDialog-Bd8DMLkI.js";import"./DraggableList-Da1_VcAA.js";import"./search-CGAlUSeA.js";import"./Input-Ce_IFTco.js";import"./useControlled-BGItKX1D.js";import"./Button-D9_pkmYb.js";import"./small-cross-QHw-SLde.js";import"./ActionButton-Cut8o54T.js";import"./Checkbox-DShr4uRv.js";import"./useValueChanged-BCpzUsKM.js";import"./CollapsiblePanel-DfoKT48S.js";import"./MultiColumnSortDialog-DywAATGA.js";import"./MenuTrigger-CR-NhJqN.js";import"./CompositeItem-Bt6ccxDB.js";import"./ToolbarRootContext-fX_rXRRK.js";import"./getDisabledMountTransitionStyles-C_DFfRTC.js";import"./getPseudoElementBounds-DzzTS3aG.js";import"./chevron-down-DYX07tej.js";import"./index-B_eZJaHx.js";import"./error-COIsH0tw.js";import"./BaseCbacBanner-nK67On6a.js";import"./makeExternalStore-CEpF0fDK.js";import"./Tooltip-H_PuzLmD.js";import"./PopoverPopup-CiQt-IJa.js";import"./debounce-CqOQQWws.js";import"./tick-CSfWbNPB.js";import"./DropdownField-BdD-65We.js";import"./isEqual-B0qlerf1.js";import"./withOsdkMetrics-Br_JaF2q.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
