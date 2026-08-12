import{j as r}from"./iframe-BPstW6ZE.js";import{O as b}from"./object-table-D-o69GE3.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BypHlMVR.js";import{u as g}from"./useOsdkClient-DRaShh3l.js";import"./preload-helper-C1yaL2qB.js";import"./Table-BEhBCAZB.js";import"./index-oeOs9xDH.js";import"./Dialog-GTZWMfmi.js";import"./cross-h_pVI4NA.js";import"./svgIconContainer-P3rHXEhC.js";import"./useBaseUiId-DQCTx5tU.js";import"./InternalBackdrop-CADeAroK.js";import"./composite-BvwNFg7y.js";import"./index-BsuF2ON3.js";import"./index-D870R5ia.js";import"./index-FqcPuEWk.js";import"./useEventCallback-BmRB3Hyu.js";import"./SkeletonBar-B-M25D9F.js";import"./LoadingCell-BiPmgVC8.js";import"./ColumnConfigDialog-BJyMcDsF.js";import"./DraggableList-CfhjYQXW.js";import"./search-luiRnVuA.js";import"./Input-CJQqoWu9.js";import"./useControlled-CMlf5svM.js";import"./isEqual-BXF6jkNC.js";import"./isObject-BlJ2n4Pj.js";import"./Button-DpEn25wX.js";import"./ActionButton-B4Ro7V7h.js";import"./Checkbox-DpRmUnIN.js";import"./useValueChanged-M_mFMCou.js";import"./CollapsiblePanel-BgN_u1EL.js";import"./MultiColumnSortDialog-B0sNZVI2.js";import"./MenuTrigger-Dcp8kl_G.js";import"./CompositeItem-DKvCwQV-.js";import"./ToolbarRootContext-6fjF2uPZ.js";import"./getDisabledMountTransitionStyles-DP6x3nVb.js";import"./getPseudoElementBounds-DSbLy3C-.js";import"./chevron-down-BAdvtM20.js";import"./index-DT1CG8gQ.js";import"./error-CcPkSYDi.js";import"./BaseCbacBanner-C45xgzQO.js";import"./makeExternalStore-BKSRaA4m.js";import"./Tooltip-B8gaSUFu.js";import"./PopoverPopup-maH0pGUs.js";import"./toNumber-DNIsRNAE.js";import"./tick-CsxuT713.js";import"./DropdownField-AVjDHtIY.js";import"./withOsdkMetrics-D8kGTVyU.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
