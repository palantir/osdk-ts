import{j as r}from"./iframe-DzWJ3tJf.js";import{O as b}from"./object-table-Bz7iI-Ye.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-u9jU6HBd.js";import{u as g}from"./useOsdkClient-D0kFz6Qn.js";import"./preload-helper-D60YPggq.js";import"./Table-kkUhVBB4.js";import"./index-jOIP15Dj.js";import"./Dialog-BGlkMOOL.js";import"./cross-CpclAF39.js";import"./svgIconContainer-NZX5zwbB.js";import"./useBaseUiId-B7BFDCom.js";import"./InternalBackdrop-DYkGzRer.js";import"./composite-BZh-eCsQ.js";import"./index-5-fC0lD_.js";import"./index-CZtqhO_b.js";import"./index-D4IY10Gn.js";import"./useEventCallback-CJtsemMV.js";import"./SkeletonBar-yALHjeEw.js";import"./LoadingCell-CrXDNdvR.js";import"./ColumnConfigDialog-JdeCx5Rx.js";import"./DraggableList-Bfwp7m6u.js";import"./search-GiMpebUt.js";import"./Input-9_-rD_6K.js";import"./useControlled-Qbs937Ua.js";import"./isEqual-DVM9u0ca.js";import"./isObject-BW4wDRVi.js";import"./Button-CTXwYA6d.js";import"./ActionButton-BdKawUax.js";import"./Checkbox--cGklhAL.js";import"./useValueChanged-BM6Ovdpe.js";import"./CollapsiblePanel-A3vtgCY0.js";import"./MultiColumnSortDialog-8-MZXVTR.js";import"./MenuTrigger-CAT0S7Uy.js";import"./CompositeItem-0GMeUwly.js";import"./ToolbarRootContext-RU1iJIsp.js";import"./getDisabledMountTransitionStyles-DVYPlgOw.js";import"./getPseudoElementBounds-CcvyTIsc.js";import"./chevron-down-C0NNvCS6.js";import"./index-CQvM6UYi.js";import"./error-tOl4PAnV.js";import"./BaseCbacBanner-LabUHbFe.js";import"./makeExternalStore-BlWDQNcY.js";import"./Tooltip-CLCbAZyz.js";import"./PopoverPopup-DN7FD26Y.js";import"./debounce-AtIUE0wB.js";import"./tick-BbVCke-v.js";import"./DropdownField-DZY8cIEo.js";import"./withOsdkMetrics-oZAeB24-.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
