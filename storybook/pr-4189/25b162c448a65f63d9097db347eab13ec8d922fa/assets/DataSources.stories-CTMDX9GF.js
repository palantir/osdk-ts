import{j as r}from"./iframe-DLMfgjtf.js";import{O as b}from"./object-table-Dsni6D6F.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers--2EzKVNb.js";import{u as g}from"./useOsdkClient-D7npx1Qd.js";import"./preload-helper-FISTic5h.js";import"./Table-4ZhIsqXW.js";import"./index-C1uNoD_P.js";import"./Dialog-De8W04Wb.js";import"./cross-DEP3bJaL.js";import"./svgIconContainer-D9kLSjbx.js";import"./useBaseUiId-CGPqK7A_.js";import"./InternalBackdrop-C7q6nAny.js";import"./composite-Bh8RLzcK.js";import"./index-DvE967r1.js";import"./index-DhmZxaNJ.js";import"./index-CFnzh0go.js";import"./useEventCallback-OFhWUTIn.js";import"./SkeletonBar-Bp5lMfT1.js";import"./LoadingCell-7N2-ipff.js";import"./ColumnConfigDialog-LmX_I7cA.js";import"./DraggableList-BP48mDgf.js";import"./search-DB3dPpwY.js";import"./Input-CGlQdmV9.js";import"./useControlled-Ez2RzIi9.js";import"./Button-BcB4SrWe.js";import"./small-cross-7o4IoMCW.js";import"./ActionButton-CcYUwrwa.js";import"./Checkbox-4Z9hiu_A.js";import"./useValueChanged-Bv09lgLM.js";import"./CollapsiblePanel-CvB7QNB1.js";import"./MultiColumnSortDialog-D6yrXySv.js";import"./MenuTrigger-CWBl4LeS.js";import"./CompositeItem-BPE6MZwc.js";import"./ToolbarRootContext-CaevGzPm.js";import"./getDisabledMountTransitionStyles-_aaTD8lp.js";import"./getPseudoElementBounds-DkTsw7BA.js";import"./chevron-down-Cl75LzTR.js";import"./index-CCyxZzXK.js";import"./error-CgJf6mJC.js";import"./BaseCbacBanner-C1NzFhgF.js";import"./makeExternalStore-Cjl19IuZ.js";import"./Tooltip-C08-8DFh.js";import"./PopoverPopup-klUplfQO.js";import"./debounce-BYUquqzk.js";import"./tick-CGKINZ-e.js";import"./DropdownField-B8372XYt.js";import"./isEqual-CYCRDCH8.js";import"./withOsdkMetrics-C4pScUTY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
