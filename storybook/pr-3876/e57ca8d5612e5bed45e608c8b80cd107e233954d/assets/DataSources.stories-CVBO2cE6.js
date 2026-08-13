import{j as r}from"./iframe-DqgxXeY0.js";import{O as b}from"./object-table-BHsz3jip.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BMMoeNJa.js";import{u as g}from"./useOsdkClient-CqjG4PWJ.js";import"./preload-helper-swuqDPIZ.js";import"./Table-m-MxvkKL.js";import"./index-Fs4ToPVt.js";import"./Dialog-C78ZhMnJ.js";import"./cross-B3HJExXl.js";import"./svgIconContainer-DJKRTo9s.js";import"./useBaseUiId-BHCjvXGp.js";import"./InternalBackdrop-ilFJBb7D.js";import"./composite-CgO0yOYX.js";import"./index-Bz8pQAXU.js";import"./index-Ber0h4Jn.js";import"./index-DvJQf8Bx.js";import"./useEventCallback-Cl40EsWw.js";import"./SkeletonBar-dk6L44dy.js";import"./LoadingCell-C7i2-eJ3.js";import"./ColumnConfigDialog-CKDDhK2e.js";import"./DraggableList-BajbNLhq.js";import"./search-Xkmq_vNk.js";import"./Input-hYuVgO52.js";import"./useControlled-CXVHehbk.js";import"./Button-D3n3BMyb.js";import"./small-cross-D9cFuYQm.js";import"./ActionButton-Dx0u_s-J.js";import"./Checkbox-BVtxtd_T.js";import"./useValueChanged-CWSAXj-_.js";import"./CollapsiblePanel-yGA5DenS.js";import"./MultiColumnSortDialog-GOKqrKQb.js";import"./MenuTrigger-BnVfq4xJ.js";import"./CompositeItem-Bs3OF5D8.js";import"./ToolbarRootContext-CCZNhx4y.js";import"./getDisabledMountTransitionStyles-L5cNDrBv.js";import"./getPseudoElementBounds-B1lSVoga.js";import"./chevron-down-CeLBV2f1.js";import"./index-LCxHta6h.js";import"./error-CoHaOVWU.js";import"./BaseCbacBanner-jP_LHP__.js";import"./makeExternalStore-iwrJkOaf.js";import"./Tooltip-B7aaw0SK.js";import"./PopoverPopup-C6-qD3UD.js";import"./debounce-15J3RxBk.js";import"./tick-O_u0mHop.js";import"./DropdownField-BwOzQWj7.js";import"./isEqual-BckK8J1Q.js";import"./withOsdkMetrics-Bsc7ScXm.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
