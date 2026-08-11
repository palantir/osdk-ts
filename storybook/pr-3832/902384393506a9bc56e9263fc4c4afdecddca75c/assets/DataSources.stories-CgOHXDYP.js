import{j as r}from"./iframe-CCC2PHCs.js";import{O as b}from"./object-table-JyeIF4Ik.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CP5qOFkT.js";import{u as g}from"./useOsdkClient-k0xy2KcY.js";import"./preload-helper-BFAjaxlT.js";import"./Table-Tr8T08f6.js";import"./index-CsHmWOuW.js";import"./Dialog-Cnh66PvR.js";import"./cross-lgZ_UxXM.js";import"./svgIconContainer-Ba3v3a21.js";import"./useBaseUiId-BFMlM2-S.js";import"./InternalBackdrop-BnM8GG-f.js";import"./composite-BG85D_QD.js";import"./index-BoDdy69P.js";import"./index-64uZX6qw.js";import"./index--yeukdQS.js";import"./useEventCallback-BPpFzH48.js";import"./SkeletonBar-DpWsGDn2.js";import"./LoadingCell-0OdFVmmS.js";import"./ColumnConfigDialog-cmbAROZc.js";import"./DraggableList-BR4LQP_Y.js";import"./search-BST7YF_6.js";import"./Input-DjnHunMe.js";import"./useControlled-DAuImFbI.js";import"./isEqual-KfrDcXUe.js";import"./isObject-CT2uOlZF.js";import"./Button-FRBaRdpx.js";import"./ActionButton-CU0LKqPe.js";import"./Checkbox-GukqDrdT.js";import"./useValueChanged-Be1ntney.js";import"./CollapsiblePanel-6KxruyI2.js";import"./MultiColumnSortDialog-Bhpeg0xl.js";import"./MenuTrigger-BTHi8q0m.js";import"./CompositeItem-D0KbA8wb.js";import"./ToolbarRootContext-BEIRwfim.js";import"./getDisabledMountTransitionStyles-2GwNpLXP.js";import"./getPseudoElementBounds-DyzJnhBQ.js";import"./chevron-down-DUX5MQ0Z.js";import"./index-2S7gRbbX.js";import"./error-DJg-nO-Y.js";import"./BaseCbacBanner-B8w_F0WY.js";import"./makeExternalStore-BFrjPQ7J.js";import"./Tooltip-By9jF44Z.js";import"./PopoverPopup-Dl_tuOw1.js";import"./toNumber-J0EmJ7U_.js";import"./tick-CY5jNQkl.js";import"./DropdownField-B1uqj5XJ.js";import"./withOsdkMetrics-sn1hY-b7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
