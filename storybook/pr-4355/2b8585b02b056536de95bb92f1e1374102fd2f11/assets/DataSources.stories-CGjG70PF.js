import{j as r}from"./iframe-BEK1shVf.js";import{O as b}from"./object-table-DwHvn_qH.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BVKV1qn5.js";import{u as g}from"./useOsdkClient-CEA25Zmd.js";import"./preload-helper-BuTZfPnC.js";import"./Table-DcNIkTh8.js";import"./index-BqkMqHUK.js";import"./Dialog-Dq_d4Qtr.js";import"./cross-eaaked_u.js";import"./svgIconContainer-B5e6FaMs.js";import"./useBaseUiId-Bbs9yJ0n.js";import"./InternalBackdrop-Cyl8hjr5.js";import"./composite-_69CGg7n.js";import"./index-ZWNosLBb.js";import"./index-Bb4KPyDR.js";import"./index-X00-2pcl.js";import"./useEventCallback-D28FIM1T.js";import"./SkeletonBar-CHkjVGry.js";import"./LoadingCell-evw95-eh.js";import"./ColumnConfigDialog-AGFxXMn5.js";import"./DraggableList-CbW3a6g-.js";import"./search-BfhK71_u.js";import"./Input-p3RqWT-8.js";import"./useControlled-BrC9O3tj.js";import"./Button-BBBCKJre.js";import"./small-cross-BhzWxaHt.js";import"./ActionButton-CHEQyLj1.js";import"./Checkbox-DyoJb9ro.js";import"./useValueChanged-BMvgoEYe.js";import"./CollapsiblePanel-GTDy2Nz0.js";import"./MultiColumnSortDialog-BtXwT3vH.js";import"./MenuTrigger-BpOvNlAT.js";import"./CompositeItem-Zu9n7Vbm.js";import"./ToolbarRootContext-BqUxfNXS.js";import"./getDisabledMountTransitionStyles-DhYgXSRI.js";import"./getPseudoElementBounds-COWWUprC.js";import"./chevron-down-DvnARLJ3.js";import"./index-CzyW3VIg.js";import"./error-BmGg8gRf.js";import"./BaseCbacBanner-C0RjraHn.js";import"./makeExternalStore-BMPgGjGI.js";import"./Tooltip-D9vmNOqa.js";import"./PopoverPopup-Ct5pPHVu.js";import"./debounce-DTuDZiq3.js";import"./tick-DpOTzWq3.js";import"./DropdownField-C02A1fDn.js";import"./isEqual-D1kWq22X.js";import"./withOsdkMetrics-Ckzv-T2_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
