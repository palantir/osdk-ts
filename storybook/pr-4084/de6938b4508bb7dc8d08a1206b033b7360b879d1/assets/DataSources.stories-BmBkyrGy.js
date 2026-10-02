import{j as r}from"./iframe-B60uIzqu.js";import{O as b}from"./object-table-irViTQ2Z.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C1ZtF_ag.js";import{u as g}from"./useOsdkClient-C8IrJvuk.js";import"./preload-helper-jikZvyDa.js";import"./Table-rwMAeyYG.js";import"./index-BzSV7QsP.js";import"./Dialog-CYLFgbaJ.js";import"./cross-DOsmRzos.js";import"./svgIconContainer-guiuIeqp.js";import"./useBaseUiId-DIJoCSJF.js";import"./InternalBackdrop-CLXaH1Aa.js";import"./composite-FgUpy7wg.js";import"./index-DWJFVWYa.js";import"./index-DHpY-kFP.js";import"./index-5Hq3Nksu.js";import"./useEventCallback-B7QugTUD.js";import"./SkeletonBar-gvdt352_.js";import"./LoadingCell-DDpI3io-.js";import"./ColumnConfigDialog-JA6O3qC4.js";import"./DraggableList-BFsDMiKj.js";import"./search-W61rBGPZ.js";import"./Input-CI489aTx.js";import"./useControlled-DJ00XR1e.js";import"./Button-CwbHglSg.js";import"./small-cross-DmneRbUh.js";import"./ActionButton-BwfVyv5Y.js";import"./Checkbox-DhoHtNZ6.js";import"./useValueChanged-CGySjWpW.js";import"./CollapsiblePanel-CfyaXJrK.js";import"./MultiColumnSortDialog-BrNYeTMv.js";import"./MenuTrigger-C-aCPNIQ.js";import"./CompositeItem-DumPFzxx.js";import"./ToolbarRootContext-DNfnA9up.js";import"./getDisabledMountTransitionStyles-Dva2U48F.js";import"./getPseudoElementBounds-CLV_8asC.js";import"./chevron-down-C_KV3jKU.js";import"./index-CnSFNBSp.js";import"./error-CTvFY39O.js";import"./BaseCbacBanner-CurXy-zS.js";import"./makeExternalStore-D8fqJuwI.js";import"./Tooltip-CU9Zwhnt.js";import"./PopoverPopup-mMeInTnK.js";import"./debounce-Y14coaTK.js";import"./tick-CFIe4FmU.js";import"./DropdownField-DhWDS7MC.js";import"./isEqual-BaG62FCh.js";import"./withOsdkMetrics-Dg6VzMMR.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
