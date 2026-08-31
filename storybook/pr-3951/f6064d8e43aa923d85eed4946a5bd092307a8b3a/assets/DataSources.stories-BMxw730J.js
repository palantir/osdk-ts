import{j as r}from"./iframe-BEf575A3.js";import{O as b}from"./object-table-CyNsBF74.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-S7cNVc7J.js";import{u as g}from"./useOsdkClient-tyif8xTS.js";import"./preload-helper-B8yT8SXx.js";import"./Table-BoarFvvZ.js";import"./index-DPOra9vP.js";import"./Dialog-CbevediE.js";import"./cross-B2xt-49o.js";import"./svgIconContainer-Ds_sg4id.js";import"./useBaseUiId-Du1Cq8KT.js";import"./InternalBackdrop-KVNLpp70.js";import"./composite-BVFiP9nk.js";import"./index-B6Jwaemq.js";import"./index-CSOMTnLn.js";import"./index-DrWIlFdC.js";import"./useEventCallback-B2f7tSmD.js";import"./SkeletonBar-C0AvNUSN.js";import"./LoadingCell-DXktZPMb.js";import"./ColumnConfigDialog-B12qvy7z.js";import"./DraggableList-BUv6HqtM.js";import"./search-BSaWqUSD.js";import"./Input-BSE_NzJ1.js";import"./useControlled-GhsyJ4IB.js";import"./Button-DQuoZQTN.js";import"./small-cross-DHnU3Y_M.js";import"./ActionButton-pEA0J6a-.js";import"./Checkbox-D9rWDzpT.js";import"./useValueChanged-BCwdJtac.js";import"./CollapsiblePanel-Dc7YlANl.js";import"./MultiColumnSortDialog-DrdEZbOO.js";import"./MenuTrigger-Ecdz3oSM.js";import"./CompositeItem-DQa7bQl1.js";import"./ToolbarRootContext-DeNEF_85.js";import"./getDisabledMountTransitionStyles-BwejZ17E.js";import"./getPseudoElementBounds-D_SiGCEF.js";import"./chevron-down-Dh8dts5f.js";import"./index-6kp1VAEO.js";import"./error-i1IrNpAR.js";import"./BaseCbacBanner-Blv-vsVV.js";import"./makeExternalStore-C8e7yQGc.js";import"./Tooltip-Dbh86cq5.js";import"./PopoverPopup-iEpmJA85.js";import"./debounce-C190Sqdz.js";import"./tick-Y-Su1Qel.js";import"./DropdownField-4xDffuje.js";import"./isEqual-DZtnWfiD.js";import"./withOsdkMetrics-B7g61Aed.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
