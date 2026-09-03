import{j as r}from"./iframe-BZrMvNjH.js";import{O as b}from"./object-table-RCunOAME.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bh7ShKWk.js";import{u as g}from"./useOsdkClient-Cc19J1k8.js";import"./preload-helper-hIhWcbk1.js";import"./Table-D67UCRoD.js";import"./index-DS2flFfG.js";import"./Dialog-ageSGZBC.js";import"./cross-iphUExt8.js";import"./svgIconContainer-CY0qYkeS.js";import"./useBaseUiId-CswL1btF.js";import"./InternalBackdrop-CoHxh-ms.js";import"./composite-Bvd7iHGV.js";import"./index-BlvQlGL4.js";import"./index-CClIcESQ.js";import"./index-JV3nPluQ.js";import"./useEventCallback-CAOOmdIa.js";import"./SkeletonBar-Xz-ijpwF.js";import"./LoadingCell-CWggzeLE.js";import"./ColumnConfigDialog-Bgj_OExF.js";import"./DraggableList-BzciFWwo.js";import"./search-DxeR06nu.js";import"./Input-nfoLLdye.js";import"./useControlled-Bj7UVyPM.js";import"./Button-DnumB7pL.js";import"./small-cross-BHthMG8B.js";import"./ActionButton-CKfsqSSC.js";import"./Checkbox-DZ1sQOZV.js";import"./useValueChanged-BA_Uq0OY.js";import"./CollapsiblePanel-CA4hGbc8.js";import"./MultiColumnSortDialog-C94PGO1v.js";import"./MenuTrigger-DJu2giNb.js";import"./CompositeItem-Dintp2Bw.js";import"./ToolbarRootContext-CSb78eVd.js";import"./getDisabledMountTransitionStyles-DAqLr02q.js";import"./getPseudoElementBounds-BdZebYSH.js";import"./chevron-down-Cbk6ruv5.js";import"./index-B3YZJx-I.js";import"./error-C4YZPalR.js";import"./BaseCbacBanner-BZ3dE9N7.js";import"./makeExternalStore-DqJxB7HS.js";import"./Tooltip-DVr0E3LF.js";import"./PopoverPopup-bwa0KoYC.js";import"./debounce-DNzZdSc8.js";import"./tick-DlglnSJ9.js";import"./DropdownField-CBvpYEAv.js";import"./isEqual-CtIzUrZm.js";import"./withOsdkMetrics-C9uhYNX4.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
