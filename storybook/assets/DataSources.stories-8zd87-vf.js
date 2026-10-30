import{j as r}from"./iframe-BNLo1qEo.js";import{O as b}from"./object-table-uts_JE8Y.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BkPjUTbY.js";import{u as g}from"./useOsdkClient-uOgjqpaF.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DHy_BrAk.js";import"./index-BWXZWlZP.js";import"./Dialog-BLZKv8--.js";import"./cross-BB9vD9ud.js";import"./svgIconContainer-DNenegb-.js";import"./useBaseUiId-LvnHplFk.js";import"./InternalBackdrop-CG66B4oQ.js";import"./composite-c-IzcIQu.js";import"./index-Df3Yy7kp.js";import"./index-BSoYvY0P.js";import"./index-6ubKDyZX.js";import"./useEventCallback-CJ49gR_Z.js";import"./SkeletonBar-DZBhWtFh.js";import"./LoadingCell-CFpCMolU.js";import"./ColumnConfigDialog-QUBGD9Ee.js";import"./DraggableList-CGZQygd2.js";import"./search-qRqfYCrN.js";import"./Input-CQiU0obq.js";import"./useControlled-CcPprz05.js";import"./Button-LEGGZV5y.js";import"./small-cross-Dh5ayvwP.js";import"./ActionButton-BO9JPDLL.js";import"./Checkbox-CfS-mZPL.js";import"./useValueChanged-C0keAUqj.js";import"./CollapsiblePanel-oBM-mKD1.js";import"./MultiColumnSortDialog-C9odBEvr.js";import"./MenuTrigger-B2bl3dj9.js";import"./CompositeItem-CQcPqlHd.js";import"./ToolbarRootContext-_EVP-k89.js";import"./getDisabledMountTransitionStyles-APnNNLZm.js";import"./getPseudoElementBounds-CQ5R3Z25.js";import"./chevron-down-Cc8GiNOO.js";import"./index-2-OS7oEL.js";import"./error-D0RMWaYW.js";import"./BaseCbacBanner-DGhlbh8N.js";import"./makeExternalStore-Bi3yZCYu.js";import"./Tooltip-CN30f2dN.js";import"./PopoverPopup-pMmoGPXE.js";import"./debounce-DQBK7OpX.js";import"./tick-DLT-1uqo.js";import"./DropdownField-XjPQJ3lB.js";import"./isEqual-56Js2KWE.js";import"./withOsdkMetrics-BI6Ebbvf.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
