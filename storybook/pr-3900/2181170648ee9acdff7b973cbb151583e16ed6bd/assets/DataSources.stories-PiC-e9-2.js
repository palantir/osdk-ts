import{j as r}from"./iframe-m2fxxn3a.js";import{O as b}from"./object-table-Co-Q6jHl.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BZiBaDO7.js";import{u as g}from"./useOsdkClient-CVjbyjiN.js";import"./preload-helper-wkPSwmAr.js";import"./Table-CJbVUNcD.js";import"./index-ByBw6x6u.js";import"./Dialog-CHI7KPwp.js";import"./cross-BjXIqjCw.js";import"./svgIconContainer-DSI33hOY.js";import"./useBaseUiId-DUlaUAbC.js";import"./InternalBackdrop-6ROzrmGv.js";import"./composite-BrA88D7Q.js";import"./index-DSw-eeDJ.js";import"./index-D_9lQBmv.js";import"./index-BNBfbysQ.js";import"./useEventCallback-B49kAxyt.js";import"./SkeletonBar-DSTs_14a.js";import"./LoadingCell-BZScBSiV.js";import"./ColumnConfigDialog-CaiccqAZ.js";import"./DraggableList-AYblD6NO.js";import"./search-CdVtB6NL.js";import"./Input-D0L01xSu.js";import"./useControlled-B65cfgNR.js";import"./Button-DeKiGiVH.js";import"./small-cross-BQdIyLz0.js";import"./ActionButton-Mjq4BYrm.js";import"./Checkbox-DicxMHcf.js";import"./useValueChanged-Bp4t2mo-.js";import"./CollapsiblePanel-BLUOZyAb.js";import"./MultiColumnSortDialog-DruHNqzX.js";import"./MenuTrigger-qcf8JcB3.js";import"./CompositeItem-CV8z8cEs.js";import"./ToolbarRootContext-CrhCu0KJ.js";import"./getDisabledMountTransitionStyles-qUK7fg53.js";import"./getPseudoElementBounds-CwvcssCs.js";import"./chevron-down-CsrzPGt_.js";import"./index-CyxliH8w.js";import"./error-E41DUfY_.js";import"./BaseCbacBanner-BK8GeR-x.js";import"./makeExternalStore-CtrMLH82.js";import"./Tooltip-DmuQYm1m.js";import"./PopoverPopup-wwpAfRbw.js";import"./debounce-D8Y2PRcP.js";import"./tick-Mt7tAvfN.js";import"./DropdownField-BsPjmbhu.js";import"./isEqual-BtYEUQSq.js";import"./withOsdkMetrics-6b_qk_af.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
