import{j as r}from"./iframe-waVwnd8z.js";import{O as b}from"./object-table-B37noZz5.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B5dVjcMH.js";import{u as g}from"./useOsdkClient-XcxJ5BHl.js";import"./preload-helper-_DI9v3Ms.js";import"./Table-CDSk3qZZ.js";import"./index-BtVM0B8b.js";import"./Dialog-DZKuwoTT.js";import"./cross--4_91Uz1.js";import"./svgIconContainer-DBjtKq0D.js";import"./useBaseUiId-ngJP8Egc.js";import"./InternalBackdrop-DOwTGEnQ.js";import"./composite-BKQDvwIx.js";import"./index-DlxZMsTY.js";import"./index-DTckBnCv.js";import"./index-DNMK3Dlm.js";import"./useEventCallback-C8zoK5yu.js";import"./SkeletonBar-AtcBFmYO.js";import"./LoadingCell-JchLfttt.js";import"./ColumnConfigDialog-DuT4g_JM.js";import"./DraggableList-FHTXDZWd.js";import"./search-gNfwsCxG.js";import"./Input-D9kz7Dq-.js";import"./useControlled-DTkfeOVI.js";import"./isEqual-ChETJcVC.js";import"./isObject-DuQN6dR2.js";import"./Button-D0ROykH0.js";import"./ActionButton-CjDV9J7b.js";import"./Checkbox-DoRZtO1O.js";import"./useValueChanged-BaU65kcb.js";import"./CollapsiblePanel-C2wk_l-C.js";import"./MultiColumnSortDialog-DaTetqcY.js";import"./MenuTrigger-CSIvfVEf.js";import"./CompositeItem-EoJb-xq2.js";import"./ToolbarRootContext-D1H6jriz.js";import"./getDisabledMountTransitionStyles-D34L6rsT.js";import"./getPseudoElementBounds-FnIT-7_p.js";import"./chevron-down-y5ucr_FJ.js";import"./index-BznGz8cd.js";import"./error-BD6fdJql.js";import"./BaseCbacBanner-D9Sq2YFk.js";import"./makeExternalStore-Bu7BQiVo.js";import"./Tooltip-CtxoOBmL.js";import"./PopoverPopup-B4gBojUt.js";import"./toNumber-DrXt2dy_.js";import"./tick-CUiRHY_y.js";import"./DropdownField-DctZTxob.js";import"./withOsdkMetrics-Cy2NuPJb.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
