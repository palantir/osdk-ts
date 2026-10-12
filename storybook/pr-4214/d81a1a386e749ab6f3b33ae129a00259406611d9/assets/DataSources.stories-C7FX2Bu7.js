import{j as r}from"./iframe-Dm4_VxTL.js";import{O as b}from"./object-table-BRm1lHno.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CSxEZr99.js";import{u as g}from"./useOsdkClient-CcArCLJk.js";import"./preload-helper-CLzuKVE9.js";import"./Table-DfRe5ueh.js";import"./index-DPnE6q58.js";import"./Dialog-m-8WzSUm.js";import"./cross-DHCOcICo.js";import"./svgIconContainer-CxeeKywm.js";import"./useBaseUiId-D93ZS7uD.js";import"./InternalBackdrop-BS6ANn3h.js";import"./composite-BJxyUUdi.js";import"./index-BP8U4N-x.js";import"./index-T3ZNqMdJ.js";import"./index-Buyt4UOA.js";import"./useEventCallback-DBHwmb2c.js";import"./SkeletonBar-DhJDhcRv.js";import"./LoadingCell-4LcK7B3q.js";import"./ColumnConfigDialog-CDkZggGo.js";import"./DraggableList-BVEqvSFu.js";import"./search-D_26udtD.js";import"./Input-i9kUqoLh.js";import"./useControlled-B_aXLH8g.js";import"./Button-Bzv6XgGX.js";import"./small-cross-DkNS4-YY.js";import"./ActionButton-CYmCepXw.js";import"./Checkbox-CtXRJU5l.js";import"./useValueChanged-iV7bvjzs.js";import"./CollapsiblePanel-C06Pqxf1.js";import"./MultiColumnSortDialog-BKV7E77X.js";import"./MenuTrigger-0EKBwlog.js";import"./CompositeItem-CY6sGbtS.js";import"./ToolbarRootContext-BL7rYCZY.js";import"./getDisabledMountTransitionStyles-Bt69eCjx.js";import"./getPseudoElementBounds-BBXWE-v2.js";import"./chevron-down-CO8_Do7Y.js";import"./index-c6XPu-54.js";import"./error-D_jQgHrY.js";import"./BaseCbacBanner-BzTMdPsR.js";import"./makeExternalStore-C9EcSKlD.js";import"./Tooltip-uKlMJCx4.js";import"./PopoverPopup-CvZJgDeN.js";import"./debounce-C1x-2e5s.js";import"./tick-CIiArSAU.js";import"./DropdownField-DsklnAii.js";import"./isEqual-CXek_UgW.js";import"./withOsdkMetrics-DBhVFgeV.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
