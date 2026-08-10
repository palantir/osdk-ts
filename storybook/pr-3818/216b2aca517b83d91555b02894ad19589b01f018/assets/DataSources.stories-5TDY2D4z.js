import{j as r}from"./iframe-DLfRO3Lg.js";import{O as b}from"./object-table-CQFOzclR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BveMDxya.js";import{u as g}from"./useOsdkClient-BvQbHpa2.js";import"./preload-helper-Bdf9-Z3s.js";import"./Table-cPS1r1XX.js";import"./index-BqYFiItS.js";import"./Dialog-DoC0h8Nu.js";import"./cross-CwX8lo9D.js";import"./svgIconContainer-D-_aLtNj.js";import"./useBaseUiId-Pd_dUfv7.js";import"./InternalBackdrop-M65KPPc8.js";import"./composite-DjVE7iON.js";import"./index-BxNcLRzx.js";import"./index-CZtPOQqE.js";import"./index-V92L6jqn.js";import"./useEventCallback-BgjDHyqs.js";import"./SkeletonBar-Bgte_PC1.js";import"./LoadingCell-DnEJk0Y4.js";import"./ColumnConfigDialog-BvyUY4WH.js";import"./DraggableList-BT6aMXQZ.js";import"./search-B8OuVE4x.js";import"./Input-CHaXSXBK.js";import"./useControlled-D944oDES.js";import"./isEqual-55QXIRK5.js";import"./isObject-D2BEkhGb.js";import"./Button-DIC9pYqS.js";import"./ActionButton-CpLSqin4.js";import"./Checkbox-DV1LOGil.js";import"./useValueChanged-CLYrEhb1.js";import"./CollapsiblePanel-Bzz-IIYb.js";import"./MultiColumnSortDialog-CGRFT1qc.js";import"./MenuTrigger-Dp_AIT2-.js";import"./CompositeItem-BB7BEcYe.js";import"./ToolbarRootContext-BUhsl4O4.js";import"./getDisabledMountTransitionStyles-C6nqMOWm.js";import"./getPseudoElementBounds-nprKqVc_.js";import"./chevron-down-Ca7o4DzB.js";import"./index-BT-0esWW.js";import"./error-2D9zNcfs.js";import"./BaseCbacBanner-DO_LeAD3.js";import"./makeExternalStore-BRKvb-bN.js";import"./Tooltip-BwJ5zswW.js";import"./PopoverPopup-Biygt9Xg.js";import"./toNumber-AisZokn0.js";import"./tick-jOYZxFh9.js";import"./DropdownField-f5HIQCcv.js";import"./withOsdkMetrics-3Zji6GBR.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
