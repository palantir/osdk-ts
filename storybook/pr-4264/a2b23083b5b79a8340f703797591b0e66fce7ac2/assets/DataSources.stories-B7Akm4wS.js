import{j as r}from"./iframe-CWNCqF8m.js";import{O as b}from"./object-table-CmyQeVnC.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BPvySVcp.js";import{u as g}from"./useOsdkClient-GAIR_yvP.js";import"./preload-helper-CP42LvtG.js";import"./Table-B4WTdSgf.js";import"./index-C_BFGzEW.js";import"./Dialog-CaxPujHQ.js";import"./cross-Gf4Gi1Zs.js";import"./svgIconContainer-BD1yvJod.js";import"./useBaseUiId-Cbti5FZV.js";import"./InternalBackdrop-C7lR6q4Y.js";import"./composite-Bv2UjceH.js";import"./index-Q_B2Rqgi.js";import"./index-BtEMoLG0.js";import"./index-BZ2HMWSK.js";import"./useEventCallback-DBGM7t4z.js";import"./SkeletonBar-qv53td8s.js";import"./LoadingCell--0t_yWqm.js";import"./ColumnConfigDialog-XmKchhKd.js";import"./DraggableList-CZi0zryu.js";import"./search-D8ew1nZH.js";import"./Input-CnULVynl.js";import"./useControlled-COgqWOOu.js";import"./Button-DyTPsUeB.js";import"./small-cross-0qXddkOp.js";import"./ActionButton-CN25wp6X.js";import"./Checkbox-Cjz7OA4J.js";import"./useValueChanged-Bd1tAroA.js";import"./CollapsiblePanel-Djn_6tzS.js";import"./MultiColumnSortDialog-CpvYVBxd.js";import"./MenuTrigger-DxtWj2lZ.js";import"./CompositeItem-Bb-U7Uoq.js";import"./ToolbarRootContext-DH9Y5D6c.js";import"./getDisabledMountTransitionStyles-Jk0dBvhz.js";import"./getPseudoElementBounds-CGw_wpw2.js";import"./chevron-down-CKxmHC3q.js";import"./index-BVR21Q-U.js";import"./error-BFVZCDZ0.js";import"./BaseCbacBanner-DaEPWrNv.js";import"./makeExternalStore-CJVHwj3d.js";import"./Tooltip-BDpg5RtK.js";import"./PopoverPopup-D4_ZYeYA.js";import"./debounce-BZ-57v4W.js";import"./tick-DYdyuQqX.js";import"./DropdownField-DDTkuItE.js";import"./isEqual-CLdOfzOV.js";import"./withOsdkMetrics-C-RUZtQv.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
