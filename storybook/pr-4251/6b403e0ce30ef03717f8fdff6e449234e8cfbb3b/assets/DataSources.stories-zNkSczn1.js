import{j as r}from"./iframe-D3lsV3bM.js";import{O as b}from"./object-table-BOmVYPfn.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DAtY_euk.js";import{u as g}from"./useOsdkClient-CjCuVbH9.js";import"./preload-helper-B0DSvxC2.js";import"./Table-DFux7SeR.js";import"./index-D11sJHPZ.js";import"./Dialog-D7B0p3tF.js";import"./cross-_tMTONVW.js";import"./svgIconContainer-DfM6sw_L.js";import"./useBaseUiId-6o6e03Dj.js";import"./InternalBackdrop-DWpv92EC.js";import"./composite-9R0QeF6F.js";import"./index-BLDv51Tl.js";import"./index-Dxb68UZ2.js";import"./index-DB3xED8F.js";import"./useEventCallback-DosG7uBT.js";import"./SkeletonBar-DfbOeTxN.js";import"./LoadingCell-BVrMoXeR.js";import"./ColumnConfigDialog-B5QpH_8k.js";import"./DraggableList-MiRMJAiS.js";import"./search-O4ijEoIs.js";import"./Input-CiqPSABQ.js";import"./useControlled-bq-ZFaDd.js";import"./Button-DakXe1NE.js";import"./small-cross-DsJLV_gX.js";import"./ActionButton-B7Qk2YJZ.js";import"./Checkbox-DjcmhqAX.js";import"./useValueChanged-DQOtE3bQ.js";import"./CollapsiblePanel-D933QPH8.js";import"./MultiColumnSortDialog-B3y84jTf.js";import"./MenuTrigger-C46HpHgT.js";import"./CompositeItem-DJyMopxi.js";import"./ToolbarRootContext-Bgqyz9vO.js";import"./getDisabledMountTransitionStyles-dC28mhVQ.js";import"./getPseudoElementBounds-B7WJxdIq.js";import"./chevron-down-1CFj8X53.js";import"./index-Cr0VJDXn.js";import"./error-XRO96CTm.js";import"./BaseCbacBanner-BMmEX_7W.js";import"./makeExternalStore-l2x05IWc.js";import"./Tooltip-CdBxAJkp.js";import"./PopoverPopup-HW4fQdCB.js";import"./debounce-DKdoEzLY.js";import"./tick-DjGBapZW.js";import"./DropdownField-BKtsIZHj.js";import"./isEqual-CRfm0_Mh.js";import"./withOsdkMetrics-CyI1jVrw.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
