import{j as r}from"./iframe-B89B5CWM.js";import{O as b}from"./object-table-TjXxeS7e.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-zztWEQZ2.js";import{u as g}from"./useOsdkClient-uulAZQLf.js";import"./preload-helper-BQ99I6nt.js";import"./Table-aohPUUE9.js";import"./index-D9SW0Yle.js";import"./Dialog-CMpT43wb.js";import"./cross-BbpWCkxQ.js";import"./svgIconContainer-ChPhhCD3.js";import"./useBaseUiId-DtDRBSq4.js";import"./InternalBackdrop-COfUIr0S.js";import"./composite-B50sO1rH.js";import"./index-BWtJkqTj.js";import"./index-m1HPcpqW.js";import"./index-DbCSIb3h.js";import"./useEventCallback-HaOgpImO.js";import"./SkeletonBar-pSM_YdGu.js";import"./LoadingCell-DduVSPo-.js";import"./ColumnConfigDialog-fER75DAD.js";import"./DraggableList-DbtN4p1h.js";import"./search-BIvcGDFg.js";import"./Input-BTItB3zo.js";import"./useControlled-oTZtcuwA.js";import"./Button-Y1tATrz0.js";import"./small-cross-C8bFb-MH.js";import"./ActionButton-6QvyZFZ4.js";import"./Checkbox-BFETg0bp.js";import"./useValueChanged-DITF5IQQ.js";import"./CollapsiblePanel-CfrpUeu3.js";import"./MultiColumnSortDialog-Cg_KezFK.js";import"./MenuTrigger-B-fi0xS8.js";import"./CompositeItem-CiUmrhhL.js";import"./ToolbarRootContext-BUhhyvqJ.js";import"./getDisabledMountTransitionStyles-CtMZVl1t.js";import"./getPseudoElementBounds-CKOvD078.js";import"./chevron-down-C8YyWC3O.js";import"./index-B5gePnV1.js";import"./error-yAZoJobu.js";import"./BaseCbacBanner-lKvwV7ea.js";import"./makeExternalStore-Dng9Dmlv.js";import"./Tooltip-DCjqoaml.js";import"./PopoverPopup-DefmT2bE.js";import"./debounce-Dl_IbEsP.js";import"./tick-D72Jsudk.js";import"./DropdownField-Cq54mmNu.js";import"./isEqual-DhYcQb9B.js";import"./withOsdkMetrics-Cct9f3WN.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
