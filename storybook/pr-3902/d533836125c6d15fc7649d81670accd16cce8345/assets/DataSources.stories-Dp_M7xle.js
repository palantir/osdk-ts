import{j as r}from"./iframe-HdL12gTW.js";import{O as b}from"./object-table-Dm2p3ksP.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B46c8J8f.js";import{u as g}from"./useOsdkClient-BVXwSViH.js";import"./preload-helper-DuPhqSoR.js";import"./Table-DM2mI30K.js";import"./index-BLRoaiA0.js";import"./Dialog-maDReMa_.js";import"./cross-DXB0ggN8.js";import"./svgIconContainer-B7UNNoek.js";import"./useBaseUiId-ekw91PLD.js";import"./InternalBackdrop-BzYwFOtS.js";import"./composite-DN4TbWMs.js";import"./index-BtcGM-tQ.js";import"./index-DHnE9wbz.js";import"./index-BnY5tXhK.js";import"./useEventCallback-DsocUe2O.js";import"./SkeletonBar-7Iz5xNHa.js";import"./LoadingCell-BktCs9cO.js";import"./ColumnConfigDialog-CptZU2bV.js";import"./DraggableList-BDuY8vCU.js";import"./search-LcQw2NsK.js";import"./Input-BmrCOBDc.js";import"./useControlled-m8IrfiDX.js";import"./Button-fEp34dTs.js";import"./small-cross-hkiI0RO2.js";import"./ActionButton-AfJiByN3.js";import"./Checkbox-DRKvpEu_.js";import"./useValueChanged-CUzoMdeB.js";import"./CollapsiblePanel-BEkD3v9B.js";import"./MultiColumnSortDialog-DyXAvFZp.js";import"./MenuTrigger-CPsb2KOa.js";import"./CompositeItem-CdqweP-g.js";import"./ToolbarRootContext-o0MDLjcb.js";import"./getDisabledMountTransitionStyles-B_rqla-j.js";import"./getPseudoElementBounds-CUJmWWSF.js";import"./chevron-down-DW1_9o68.js";import"./index-CYZ7Zb3G.js";import"./error-C0h-qjZV.js";import"./BaseCbacBanner-BsFqezX1.js";import"./makeExternalStore-CFSL0hnp.js";import"./Tooltip-COBWUS2T.js";import"./PopoverPopup-p-ySQVE6.js";import"./debounce-CxoOeoZ7.js";import"./tick-BulVH2kt.js";import"./DropdownField-ub_2LB2G.js";import"./isEqual-BV43QIc9.js";import"./withOsdkMetrics-Bvqw_Q6i.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
