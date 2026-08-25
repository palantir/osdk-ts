import{j as r}from"./iframe-K5CHCEyg.js";import{O as b}from"./object-table-utOg00_0.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D97l3Jbj.js";import{u as g}from"./useOsdkClient-BMXoort9.js";import"./preload-helper-D3jqeprX.js";import"./Table-2808Kid_.js";import"./index-WTmR64bn.js";import"./Dialog-CBJLGwFN.js";import"./cross-B8J6ezai.js";import"./svgIconContainer-CtkNh0IR.js";import"./useBaseUiId-BkIc8eue.js";import"./InternalBackdrop-Bf6ULDwV.js";import"./composite-D8qWS-r5.js";import"./index-C8BgW1zx.js";import"./index-BnXdLwCf.js";import"./index-BI6KD8R2.js";import"./useEventCallback-D-391N3D.js";import"./SkeletonBar-Dbxh5j0B.js";import"./LoadingCell-CDNalvIE.js";import"./ColumnConfigDialog-BNnBoxvr.js";import"./DraggableList-CvJLlVkT.js";import"./search-Cx6gmk0L.js";import"./Input-Db1Oj9ts.js";import"./useControlled-CuFQy_dq.js";import"./Button-D0f7TRtC.js";import"./small-cross-B1L4Fyai.js";import"./ActionButton-BMmiIdeT.js";import"./Checkbox-2PlZ_7fg.js";import"./useValueChanged-DnjGf5bs.js";import"./CollapsiblePanel-DBckIGuI.js";import"./MultiColumnSortDialog-Cjy8BRra.js";import"./MenuTrigger-Bg_3sd4W.js";import"./CompositeItem-DJQSjI0-.js";import"./ToolbarRootContext-B1_4tWZH.js";import"./getDisabledMountTransitionStyles-5iGhb6ia.js";import"./getPseudoElementBounds-Bm0MNApQ.js";import"./chevron-down-DVsK0MgR.js";import"./index-CrVnq262.js";import"./error-DpZJYfkw.js";import"./BaseCbacBanner-CyWI_pHr.js";import"./makeExternalStore-CufeVhpI.js";import"./Tooltip-CNcnbhhh.js";import"./PopoverPopup-DPvs26VO.js";import"./debounce-BWGDeaB6.js";import"./tick-uVU4NU8V.js";import"./DropdownField-VEWroYGj.js";import"./isEqual-BBzaNYNe.js";import"./withOsdkMetrics-gwVSMO6S.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
