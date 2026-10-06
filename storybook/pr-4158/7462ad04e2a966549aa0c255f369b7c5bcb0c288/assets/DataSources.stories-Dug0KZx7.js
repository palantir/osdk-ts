import{j as r}from"./iframe-DWfCOAQu.js";import{O as b}from"./object-table-DGxdXP_y.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bo-eC8Xr.js";import{u as g}from"./useOsdkClient-C6t9DPq1.js";import"./preload-helper-AetNKwh5.js";import"./Table-Cl1-pmbH.js";import"./index-CqJhMuS2.js";import"./Dialog-CI2QPSy8.js";import"./cross-B_xAvT3d.js";import"./svgIconContainer-Q7lczhdT.js";import"./useBaseUiId-BKma_f4b.js";import"./InternalBackdrop-gdbKvKDa.js";import"./composite-DNxX4Nkb.js";import"./index-CrNU2B9N.js";import"./index-WpqqJaJk.js";import"./index-CpM3OnKB.js";import"./useEventCallback-C6ACKCKc.js";import"./SkeletonBar-EPFSLYlJ.js";import"./LoadingCell-DPL5De6J.js";import"./ColumnConfigDialog-TWURoNNE.js";import"./DraggableList-CSn5_Vvj.js";import"./search-BgPhvmky.js";import"./Input-B5DqZdR7.js";import"./useControlled-CnSP5Uy7.js";import"./Button-C6vZxzg6.js";import"./small-cross-BqKc-LeJ.js";import"./ActionButton-DAgVBgto.js";import"./Checkbox-BnDfvXBF.js";import"./useValueChanged-CLfvSLZ_.js";import"./CollapsiblePanel-BpxVECEg.js";import"./MultiColumnSortDialog-Ccvt5nJf.js";import"./MenuTrigger-D7NPcArM.js";import"./CompositeItem-CfFTNcKF.js";import"./ToolbarRootContext-BnN-yS54.js";import"./getDisabledMountTransitionStyles-BXtKCsRk.js";import"./getPseudoElementBounds-CK6ToQgj.js";import"./chevron-down-Dt5AdPlw.js";import"./index-Dcv9F_CZ.js";import"./error-D0MXudnr.js";import"./BaseCbacBanner-B9L4VrrW.js";import"./makeExternalStore-CS1-iCYk.js";import"./Tooltip-BDvqRvi5.js";import"./PopoverPopup-BN0RPWQk.js";import"./debounce-0ot9PSoS.js";import"./tick-DxeMA9RK.js";import"./DropdownField-B_3NuYm-.js";import"./isEqual-CkOQk0og.js";import"./withOsdkMetrics-Dn5f43wd.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
