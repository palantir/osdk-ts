import{j as r}from"./iframe-OLZMb4D5.js";import{O as b}from"./object-table-C0u5Nyay.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BC9k5ozS.js";import{u as g}from"./useOsdkClient-pPuF8Xca.js";import"./preload-helper-RKY21aDn.js";import"./Table-BV0KvpzI.js";import"./index-uqrBuBmm.js";import"./Dialog-FHcDtkV2.js";import"./cross-C6sWsdCt.js";import"./svgIconContainer-UQoXiqqi.js";import"./useBaseUiId-PcdFyC4z.js";import"./InternalBackdrop-DPnwzQoA.js";import"./composite-ccxieFdd.js";import"./index-9pMWT7G3.js";import"./index-DzOZG8PU.js";import"./index-D9aYyFSG.js";import"./useEventCallback-Clkkc761.js";import"./SkeletonBar-UJ2KeehE.js";import"./LoadingCell-Dno7fuWS.js";import"./ColumnConfigDialog-B_gwSPYs.js";import"./DraggableList-DY59ynwG.js";import"./search-DZcjiMHC.js";import"./Input-CNxC7OWq.js";import"./useControlled-D50eYvCK.js";import"./Button-CVZ672ZX.js";import"./small-cross-DlQAt_1X.js";import"./ActionButton-Dr-SMGaZ.js";import"./Checkbox-Cg9__Cns.js";import"./useValueChanged-DTUEgWiI.js";import"./CollapsiblePanel-CilVibKg.js";import"./MultiColumnSortDialog-BGs8lqlA.js";import"./MenuTrigger-BnrLP3Ax.js";import"./CompositeItem-DUyVPGMH.js";import"./ToolbarRootContext-DulRS7Xf.js";import"./getDisabledMountTransitionStyles-Dp3MlQN6.js";import"./getPseudoElementBounds-Dd9XPosA.js";import"./chevron-down-CIukKbVS.js";import"./index-3bphJVPw.js";import"./error-CeyqzC3E.js";import"./BaseCbacBanner-DQ04thLC.js";import"./makeExternalStore-BBNFskLs.js";import"./Tooltip-D_ARL5hn.js";import"./PopoverPopup-C66q4O0T.js";import"./debounce-CJrA9wux.js";import"./tick-Cof-csWx.js";import"./DropdownField-DsSXPUWR.js";import"./isEqual-RFLHgDQt.js";import"./withOsdkMetrics-B3WIkRHJ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
