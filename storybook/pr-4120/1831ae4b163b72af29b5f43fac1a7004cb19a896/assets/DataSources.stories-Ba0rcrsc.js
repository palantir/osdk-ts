import{j as r}from"./iframe-BiR0bSaX.js";import{O as b}from"./object-table-DsbavqDt.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-oCDzg5xZ.js";import{u as g}from"./useOsdkClient-D2ZfX5sU.js";import"./preload-helper-CREsIwfv.js";import"./Table-B8n6aAme.js";import"./index-D0Rro4ck.js";import"./Dialog-Dp9jK4f-.js";import"./cross-gKG73r0q.js";import"./svgIconContainer-DdJYmAvv.js";import"./useBaseUiId-D3ocUoYR.js";import"./InternalBackdrop-D6vDmGzB.js";import"./composite-Cg5vG0V3.js";import"./index-CwYWk3f5.js";import"./index-CDTZ5otF.js";import"./index-zHT7Hyt8.js";import"./useEventCallback-BeraWIcy.js";import"./SkeletonBar-CM8I5OIh.js";import"./LoadingCell-BYFqkMG0.js";import"./ColumnConfigDialog-cXdYH0RF.js";import"./DraggableList-B_QC1B5x.js";import"./search-BVH0nxuW.js";import"./Input-CR7mkMB4.js";import"./useControlled-BCuMNdH3.js";import"./Button-BjLfCn0d.js";import"./small-cross-DYB9MOPk.js";import"./ActionButton-CLSAI2kW.js";import"./Checkbox-BFjDPznL.js";import"./useValueChanged-vxARVLtE.js";import"./CollapsiblePanel-d6aPXtM4.js";import"./MultiColumnSortDialog-CUpLWOUw.js";import"./MenuTrigger-QyLFHO-w.js";import"./CompositeItem-yCWRfwkd.js";import"./ToolbarRootContext-DZbYzNul.js";import"./getDisabledMountTransitionStyles-X1jqNQgo.js";import"./getPseudoElementBounds-BKmEUxkJ.js";import"./chevron-down-wSopSebG.js";import"./index-Pp8hdIUW.js";import"./error-DI1HaZkw.js";import"./BaseCbacBanner-CpKCOvH6.js";import"./makeExternalStore-8TAGYWzx.js";import"./Tooltip-4v0newPD.js";import"./PopoverPopup-By__3K0-.js";import"./debounce-BGMgfz2I.js";import"./tick-CS8KJb9P.js";import"./DropdownField-B2dUQyL4.js";import"./isEqual-39wjEv2i.js";import"./withOsdkMetrics-Ft25XtI9.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
