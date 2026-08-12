import{j as r}from"./iframe-PSEd73NB.js";import{O as b}from"./object-table-BauwUNcJ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BF5F881f.js";import{u as g}from"./useOsdkClient-BNYDjVK7.js";import"./preload-helper-1GV8hhoq.js";import"./Table-C0YuZXer.js";import"./index-NVpWWHhl.js";import"./Dialog-MZDogb2P.js";import"./cross-DUR72zJ7.js";import"./svgIconContainer-Cer1IrhT.js";import"./useBaseUiId-xie1JhLt.js";import"./InternalBackdrop-DG1XJnpw.js";import"./composite-DRmXisBv.js";import"./index-kUkNYXaQ.js";import"./index-wWSeiS7y.js";import"./index-DAn4NbPR.js";import"./useEventCallback-qZfLyktJ.js";import"./SkeletonBar-tG3H8eNG.js";import"./LoadingCell-CbeknuxE.js";import"./ColumnConfigDialog-FEyhs1Vz.js";import"./DraggableList-CfOztAY-.js";import"./search-B8xwdlL_.js";import"./Input-D8coZK1U.js";import"./useControlled-ClhVTb83.js";import"./isEqual-DF7oHHXu.js";import"./isObject-BD6MDXyd.js";import"./Button-BKvLONJz.js";import"./ActionButton-g4qvEX3R.js";import"./Checkbox-elD6WF1n.js";import"./useValueChanged-COybV5eL.js";import"./CollapsiblePanel-Btl2-0tw.js";import"./MultiColumnSortDialog-BCgaRTB0.js";import"./MenuTrigger-BRuhVcfw.js";import"./CompositeItem-BPO1Jify.js";import"./ToolbarRootContext-ny_fraWs.js";import"./getDisabledMountTransitionStyles-CqZEJFeQ.js";import"./getPseudoElementBounds-lNCMxxUh.js";import"./chevron-down-xnJkXJWa.js";import"./index-CTJJ11lg.js";import"./error-BrPsupgI.js";import"./BaseCbacBanner-6AJ0eUDo.js";import"./makeExternalStore-CvL344Sn.js";import"./Tooltip-CXouVh1f.js";import"./PopoverPopup-DTmbJh-5.js";import"./toNumber-vOfoPhGw.js";import"./tick-Bc_HPwZN.js";import"./DropdownField-Ci8hbPdx.js";import"./withOsdkMetrics-VXn3cz-B.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
