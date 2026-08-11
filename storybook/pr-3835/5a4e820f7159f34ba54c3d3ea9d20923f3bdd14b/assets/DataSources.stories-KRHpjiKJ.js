import{j as r}from"./iframe-COjTwACd.js";import{O as b}from"./object-table-ad3I6vNt.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cmt-nGY1.js";import{u as g}from"./useOsdkClient-B8zsgjem.js";import"./preload-helper-3zoUuQg3.js";import"./Table-DzY3O7qR.js";import"./index-BYBN_pM5.js";import"./Dialog-enusm8Xl.js";import"./cross-hWU4qN2Y.js";import"./svgIconContainer-DB8O-WH_.js";import"./useBaseUiId-BHJRkAYu.js";import"./InternalBackdrop-C8gZnl-V.js";import"./composite-Dw_TPpFp.js";import"./index-Cggo2yFx.js";import"./index-DpYQBSKi.js";import"./index-CRX31u9Z.js";import"./useEventCallback-CfXfPHvG.js";import"./SkeletonBar-gcXj0eg1.js";import"./LoadingCell-BwbzNNbx.js";import"./ColumnConfigDialog-C-TJFZJf.js";import"./DraggableList-DjLi1ogf.js";import"./search-DODDfQXo.js";import"./Input-BDTIJBOH.js";import"./useControlled-Dm0Jzoa7.js";import"./isEqual-0odBgQKO.js";import"./isObject-qUmzueCJ.js";import"./Button-DKrxgkIM.js";import"./ActionButton-Cn4l8VKx.js";import"./Checkbox-kb0Y2AkR.js";import"./useValueChanged-DImedWVh.js";import"./CollapsiblePanel-Bq6cIAYo.js";import"./MultiColumnSortDialog-dr38wXKF.js";import"./MenuTrigger-3iGgKsct.js";import"./CompositeItem-BMvAHYYR.js";import"./ToolbarRootContext-BS68jFk4.js";import"./getDisabledMountTransitionStyles-Bg0FVveg.js";import"./getPseudoElementBounds-BvZhrghV.js";import"./chevron-down-39gHaxC5.js";import"./index-Bt5nnrw-.js";import"./error-CY-30sSF.js";import"./BaseCbacBanner-ak4NXG6S.js";import"./makeExternalStore-DW8okzVM.js";import"./Tooltip-CFj_9NEW.js";import"./PopoverPopup-vk-66Q-a.js";import"./toNumber-BsyqgQYw.js";import"./tick-GyyYcMwP.js";import"./DropdownField-DnjYW3ti.js";import"./withOsdkMetrics-BuKYfzIS.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
