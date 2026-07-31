import{j as r}from"./iframe-8l4VgzvN.js";import{O as b}from"./object-table-BYDCS3dp.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BTtLZLKD.js";import{u as g}from"./useOsdkClient-_FMDwwtZ.js";import"./preload-helper-BWMgMhg-.js";import"./Table-BtXRikvm.js";import"./index-CENhKLHr.js";import"./Dialog-7UDuPlvQ.js";import"./cross-B2bEUPP4.js";import"./svgIconContainer-BQL_tfkb.js";import"./useBaseUiId-DUa6Gl7o.js";import"./InternalBackdrop-BYDChCJ5.js";import"./composite-a8JqXKoE.js";import"./index-e67zZ8CW.js";import"./index-ue3NKf6y.js";import"./index-CGcIjaZR.js";import"./useEventCallback-BBSO6LkX.js";import"./SkeletonBar-Cb6FypxV.js";import"./LoadingCell-Cb2SpVHN.js";import"./ColumnConfigDialog-7R66Lh7L.js";import"./DraggableList-BXrBLydx.js";import"./search-Bd8us1xK.js";import"./Input-CdaK_hcH.js";import"./useControlled-D-2KZgoS.js";import"./isEqual-Di3NOZUo.js";import"./isObject-Bswa1wAC.js";import"./Button-aIlHQ8yg.js";import"./ActionButton-C_uBNnQ3.js";import"./Checkbox-CjIu4B-7.js";import"./useValueChanged-Zk553mpV.js";import"./CollapsiblePanel-DqyaDfuX.js";import"./MultiColumnSortDialog-BTeLTlUO.js";import"./MenuTrigger-CsMLDPFG.js";import"./CompositeItem-Db4Osd20.js";import"./ToolbarRootContext-DpqGT7Lo.js";import"./getDisabledMountTransitionStyles-C2NmiCwZ.js";import"./getPseudoElementBounds-CJwQ3ni7.js";import"./chevron-down-DTdeumy4.js";import"./index-CqpjD42R.js";import"./error-B0b_D1P0.js";import"./BaseCbacBanner-uVAZLnwX.js";import"./makeExternalStore-vb2YzOlo.js";import"./Tooltip-DHWPRF-j.js";import"./PopoverPopup-pIzCYtCt.js";import"./toNumber-DKpENdrk.js";import"./tick-rt-IJVvT.js";import"./DropdownField-PUakMDKl.js";import"./withOsdkMetrics-BlRozGsn.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
