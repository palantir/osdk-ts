import{j as r}from"./iframe-BxrPZaNO.js";import{O as b}from"./object-table-x_M-xICi.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BWtqYu_T.js";import{u as g}from"./useOsdkClient-D4yGb6wb.js";import"./preload-helper-Cx3YQJHu.js";import"./Table-BmoqWH96.js";import"./index-J6lGX-m2.js";import"./Dialog-RbvnsOmy.js";import"./cross-BmUQIuiH.js";import"./svgIconContainer-BEnRdrAB.js";import"./useBaseUiId-Di1mefXN.js";import"./InternalBackdrop-D4XZcSF_.js";import"./composite-DfF43hpZ.js";import"./index-D_nzKAep.js";import"./index-BCG6silL.js";import"./index-Ot472uRJ.js";import"./useEventCallback-CrPdpknM.js";import"./SkeletonBar-BUlCSkf0.js";import"./LoadingCell-C-YiETW-.js";import"./ColumnConfigDialog-VEP7O-ZA.js";import"./DraggableList-DVT8VoXV.js";import"./search-CfnXtNGj.js";import"./Input-BGI14JLq.js";import"./useControlled-BtpDwHUZ.js";import"./isEqual-DBEr3yIs.js";import"./isObject-ByG7RK6C.js";import"./Button-B7x6CZke.js";import"./ActionButton-BWhtJHeB.js";import"./Checkbox-CrjH7Efp.js";import"./useValueChanged-DCfT8qbt.js";import"./CollapsiblePanel-BFETjxaU.js";import"./MultiColumnSortDialog-B9G5hIec.js";import"./MenuTrigger-B5P8IXx7.js";import"./CompositeItem-DTxAmhYK.js";import"./ToolbarRootContext-Bqz8S5Yi.js";import"./getDisabledMountTransitionStyles-BjZgcrwj.js";import"./getPseudoElementBounds-Bbwc-RQ9.js";import"./chevron-down-Be0JtK3U.js";import"./index-Cp78tmdM.js";import"./error-ChOD6vLs.js";import"./BaseCbacBanner-CgoxDGzA.js";import"./makeExternalStore-9Fofboy5.js";import"./Tooltip-DNoJovMa.js";import"./PopoverPopup-Bg6BFVuU.js";import"./toNumber-CN-X1Wq4.js";import"./tick-CyYxxVPP.js";import"./DropdownField-Cqh4Clp4.js";import"./withOsdkMetrics-D9tI6rXs.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
