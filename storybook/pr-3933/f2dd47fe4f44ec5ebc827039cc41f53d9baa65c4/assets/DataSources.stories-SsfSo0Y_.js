import{j as r}from"./iframe-DL4FbcwS.js";import{O as b}from"./object-table-DhigSl7G.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B1PohDLd.js";import{u as g}from"./useOsdkClient-C5Zu7SVp.js";import"./preload-helper-D-Y5E90C.js";import"./Table-Cs_iWV8n.js";import"./index-Br0G3foT.js";import"./Dialog-BFHfmQPP.js";import"./cross-BgWeKxEC.js";import"./svgIconContainer-CE-AmYzF.js";import"./useBaseUiId-CP7gZe2z.js";import"./InternalBackdrop-CN-xTacf.js";import"./composite-WIX2LHhX.js";import"./index-CDxRvv5g.js";import"./index-XqdSQUcL.js";import"./index-DLGuQieX.js";import"./useEventCallback-BEeBAO93.js";import"./SkeletonBar-CQVaDy0B.js";import"./LoadingCell-BlAiaYMr.js";import"./ColumnConfigDialog-C6cZo_LK.js";import"./DraggableList-CiiAn0FN.js";import"./search-DR1h9EWJ.js";import"./Input-CoqvOIT8.js";import"./useControlled-QO3Raoq-.js";import"./Button-B99bddLT.js";import"./small-cross-CUfUs31H.js";import"./ActionButton-CBHhv2Lw.js";import"./Checkbox-DExDIyfW.js";import"./useValueChanged-CXZmRiDQ.js";import"./CollapsiblePanel-Cm-pYAoG.js";import"./MultiColumnSortDialog-BkIL3f4O.js";import"./MenuTrigger-7-9CY8yx.js";import"./CompositeItem-BT24yxUg.js";import"./ToolbarRootContext-Dvyrl1Ns.js";import"./getDisabledMountTransitionStyles-BZoy_dEn.js";import"./getPseudoElementBounds-DbDICFV0.js";import"./chevron-down-CJf371D2.js";import"./index-1dYW8fLm.js";import"./error-CQAN26ZF.js";import"./BaseCbacBanner-DPX4y917.js";import"./makeExternalStore-CfOH3M3i.js";import"./Tooltip-BZG5pa3L.js";import"./PopoverPopup-go6UfqHP.js";import"./debounce-Ta3u6n_O.js";import"./tick-Cy5aEDFq.js";import"./DropdownField-CxOSqgDd.js";import"./isEqual-B7FydaS0.js";import"./withOsdkMetrics-tOkw8TA4.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
