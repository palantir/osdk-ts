import{j as r}from"./iframe-CZB8iCrN.js";import{O as b}from"./object-table-DehqEVQ8.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Be-gcaIa.js";import{u as g}from"./useOsdkClient-BcxP6QNS.js";import"./preload-helper-Bfp8b3lb.js";import"./Table-rjbMHeM4.js";import"./index-B20F_8Db.js";import"./Dialog-DLx2nLTg.js";import"./cross-BaVj46vf.js";import"./svgIconContainer-C34Xeufa.js";import"./useBaseUiId-Dl-CxI70.js";import"./InternalBackdrop-CZc7gtvF.js";import"./composite-7sRBgyZt.js";import"./index-DadbORQH.js";import"./index-DiIHqUbm.js";import"./index-BA1zjzC9.js";import"./useEventCallback-BfsfIFjp.js";import"./SkeletonBar-BSHJjhv4.js";import"./LoadingCell-BtskXgKq.js";import"./ColumnConfigDialog-6OPnpbeC.js";import"./DraggableList-DpDcjxuL.js";import"./search-FLqm4c0t.js";import"./Input-mSuQxNwT.js";import"./useControlled-CISHEyOE.js";import"./Button-CN7eBVL6.js";import"./small-cross-CHUBqXu0.js";import"./ActionButton-D-kvs5NB.js";import"./Checkbox-DqqtCebH.js";import"./useValueChanged-BCYX16oW.js";import"./CollapsiblePanel-DKs8Sotj.js";import"./MultiColumnSortDialog-fBXaklYM.js";import"./MenuTrigger-D7qtEAHL.js";import"./CompositeItem-BGy1WNiQ.js";import"./ToolbarRootContext-Xc9NkH4h.js";import"./getDisabledMountTransitionStyles-C0YnDowy.js";import"./getPseudoElementBounds-zdwXg5BV.js";import"./chevron-down-CyERpmZf.js";import"./index-CnvQ1zd9.js";import"./error-BrUtxvkn.js";import"./BaseCbacBanner-BgYcC6c9.js";import"./makeExternalStore-Bemx5W1x.js";import"./Tooltip-Dza2UVUK.js";import"./PopoverPopup-DlycPGOu.js";import"./debounce-5SpNsm5N.js";import"./tick-DJ7lwI6u.js";import"./DropdownField-Bru52TRy.js";import"./isEqual-BMF7Qr-y.js";import"./withOsdkMetrics-CrKh0O5J.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
