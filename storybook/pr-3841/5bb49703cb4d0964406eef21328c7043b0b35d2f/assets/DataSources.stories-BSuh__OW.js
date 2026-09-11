import{j as r}from"./iframe-RU8IGrNT.js";import{O as b}from"./object-table-CWGy5XV-.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-gGBUETK2.js";import{u as g}from"./useOsdkClient-DTEwEYtW.js";import"./preload-helper-CC2SHOu0.js";import"./Table-DjvSUn86.js";import"./index-D0VksrnV.js";import"./Dialog-AsoczJSc.js";import"./cross-4-OM6Ghb.js";import"./svgIconContainer-CAf1V-Tr.js";import"./useBaseUiId-B7sFi6pv.js";import"./InternalBackdrop-BmKA3i1c.js";import"./composite-qIXSIzDA.js";import"./index-DDfKVfwf.js";import"./index-WBmL8T14.js";import"./index-BH9gOnci.js";import"./useEventCallback-DsQ6v7L7.js";import"./SkeletonBar-CjsJgAUH.js";import"./LoadingCell-CMdpQSwS.js";import"./ColumnConfigDialog-DgcQuFea.js";import"./DraggableList-7wIyKIwu.js";import"./search-C35W7rra.js";import"./Input-9-d8I3Qs.js";import"./useControlled-D60JD0mh.js";import"./Button-i-hZGgk2.js";import"./small-cross-DDP_QlWn.js";import"./ActionButton-B_UOz8mm.js";import"./Checkbox-C_eCVf5v.js";import"./useValueChanged-Dq_Pzrul.js";import"./CollapsiblePanel-gYEJ-yuU.js";import"./MultiColumnSortDialog-DnwMkIlB.js";import"./MenuTrigger-BwiNo1Qi.js";import"./CompositeItem-CC8f_DCj.js";import"./ToolbarRootContext-sPvQNWqX.js";import"./getDisabledMountTransitionStyles-KBK5f9_s.js";import"./getPseudoElementBounds-CS_FDytm.js";import"./chevron-down-D65XdSbD.js";import"./index-BALz8rwl.js";import"./error-DtrLgX5c.js";import"./BaseCbacBanner-BKrTPTyn.js";import"./makeExternalStore-m1NamX6V.js";import"./Tooltip-6itGbzak.js";import"./PopoverPopup-BUwRG3BX.js";import"./debounce-C6QpBJAl.js";import"./tick-D1RPONbV.js";import"./DropdownField-47olZyAw.js";import"./isEqual-hW0e3UsZ.js";import"./withOsdkMetrics-D0KBj7Xc.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
