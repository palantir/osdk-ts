import{j as r}from"./iframe-DYBY68Q5.js";import{O as b}from"./object-table-7jZkx5MQ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DLN-v5Ch.js";import{u as g}from"./useOsdkClient-BVZQ9HkC.js";import"./preload-helper-6jdikgud.js";import"./Table-BI6QQzme.js";import"./index-DYr8tZfC.js";import"./Dialog-DdQok29H.js";import"./cross-D1pY89Tf.js";import"./svgIconContainer-DVOm9YM-.js";import"./useBaseUiId-BCwirq_0.js";import"./InternalBackdrop-C83NCaF8.js";import"./composite-DPIoPlux.js";import"./index-DC69q5Jt.js";import"./index-wVZvTCZs.js";import"./index-Bg_slHsw.js";import"./useEventCallback-DoyLzMRU.js";import"./SkeletonBar-POUHWA40.js";import"./LoadingCell-CwIhxMor.js";import"./ColumnConfigDialog-BmsJ16bH.js";import"./DraggableList-BB4LGUdH.js";import"./search-BT_TSpdS.js";import"./Input-CeNaPmq7.js";import"./useControlled-DGyihqNn.js";import"./Button-Ckf62jzo.js";import"./small-cross-C0orqSu_.js";import"./ActionButton-4sbCgVC0.js";import"./Checkbox-D_HOJ0vt.js";import"./useValueChanged-BLTi5hDu.js";import"./CollapsiblePanel-BYQqT4Yv.js";import"./MultiColumnSortDialog-B55nseyW.js";import"./MenuTrigger-BMalK_zu.js";import"./CompositeItem-C1KECpIa.js";import"./ToolbarRootContext-sggHk5XS.js";import"./getDisabledMountTransitionStyles-DPEQynz2.js";import"./getPseudoElementBounds-DWvo2zhM.js";import"./chevron-down-DsJHih2n.js";import"./index-Cn62hcUq.js";import"./error-CiemvQ24.js";import"./BaseCbacBanner-DbKnsRoL.js";import"./makeExternalStore-B1pouQLK.js";import"./Tooltip-Cv5sHp_6.js";import"./PopoverPopup-B9mbop5m.js";import"./debounce-DjfstlXR.js";import"./tick-LKuIFCdg.js";import"./DropdownField-BcFd03Vz.js";import"./isEqual-MKOeJWxb.js";import"./withOsdkMetrics-BwDH-iYP.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
