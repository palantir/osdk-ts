import{j as r}from"./iframe-BvlK2p8r.js";import{O as b}from"./object-table-B8BhsAwI.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CeWQT8CZ.js";import{u as g}from"./useOsdkClient-CJwHvTQr.js";import"./preload-helper-Bf1QTDA3.js";import"./Table-VrlY8bUZ.js";import"./index-CJtyvgYT.js";import"./Dialog--FJPiMUE.js";import"./cross-XBkVoEMi.js";import"./svgIconContainer-CLWMH6Fx.js";import"./useBaseUiId-DiGEHRWv.js";import"./InternalBackdrop-Cvxe13O2.js";import"./composite-DLYbiM9i.js";import"./index-BXSqz-r8.js";import"./index-DR4zhZlK.js";import"./index-BXKLk0LB.js";import"./useEventCallback-YMzXT1lg.js";import"./SkeletonBar-CGq0TYtq.js";import"./LoadingCell-BOX2GpiG.js";import"./ColumnConfigDialog-CmefXAym.js";import"./DraggableList-C40V0O03.js";import"./search-CWi8yKUA.js";import"./Input-5I-CO4CQ.js";import"./useControlled-B_OuFYE6.js";import"./isEqual-D0ITe3HQ.js";import"./small-cross-C2NIy0Lo.js";import"./Button-CwuonV3H.js";import"./ActionButton-6FVwa-nx.js";import"./Checkbox-Dwe_ZHAJ.js";import"./useValueChanged-DColRsxd.js";import"./CollapsiblePanel-B2S2rCZq.js";import"./MultiColumnSortDialog-CxV4v8xh.js";import"./MenuTrigger-C44b3RoE.js";import"./CompositeItem-DBLtjtTq.js";import"./ToolbarRootContext-B8YXpq5u.js";import"./getDisabledMountTransitionStyles-DDUBMXqp.js";import"./getPseudoElementBounds-BoJCJ9ri.js";import"./chevron-down-Bpyob3k8.js";import"./index-C-Bgj_rI.js";import"./error-CHnt8F1v.js";import"./BaseCbacBanner-Cnz8SeR-.js";import"./makeExternalStore-uNOWdKm-.js";import"./Tooltip-Dl9Maat9.js";import"./PopoverPopup-DzIb0oW3.js";import"./Combobox-B-MC9o5q.js";import"./tick-DDScHrxu.js";import"./DropdownField-CjecytYH.js";import"./withOsdkMetrics-BEFCVJp2.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
