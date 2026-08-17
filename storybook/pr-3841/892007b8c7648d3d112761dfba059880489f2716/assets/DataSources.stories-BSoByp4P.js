import{j as r}from"./iframe-pN3HhfHp.js";import{O as b}from"./object-table-BVMjORfS.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CML0BvGn.js";import{u as g}from"./useOsdkClient-Cwh2dI_Z.js";import"./preload-helper-vaGveZOW.js";import"./Table-ukr5Vk0m.js";import"./index-DbLToRXl.js";import"./Dialog-BBKnzPwE.js";import"./cross--IVjn_-r.js";import"./svgIconContainer-BGAfUvl9.js";import"./useBaseUiId-Dk4L8uHt.js";import"./InternalBackdrop-Cq2Dn4lD.js";import"./composite-BAN-Mgn7.js";import"./index-Dk2VIyAU.js";import"./index-eDB9grVg.js";import"./index-DVAvO8QP.js";import"./useEventCallback-DRFMIxRN.js";import"./SkeletonBar-SVBlmV5n.js";import"./LoadingCell-8_2H7otS.js";import"./ColumnConfigDialog-B9vYKhII.js";import"./DraggableList-CjF70sG8.js";import"./search-DOtDYiw4.js";import"./Input-Dc026DBB.js";import"./useControlled-DsCbQ_G9.js";import"./Button-DxLN_Dfx.js";import"./small-cross-Dd991YFK.js";import"./ActionButton-QyR_0N_a.js";import"./Checkbox-BKYLSd86.js";import"./useValueChanged-CM5JXx-C.js";import"./CollapsiblePanel-C9anB2wf.js";import"./MultiColumnSortDialog-AIr20JE9.js";import"./MenuTrigger-DnA75f90.js";import"./CompositeItem-aJ_0QEux.js";import"./ToolbarRootContext-TcRvxzQ1.js";import"./getDisabledMountTransitionStyles-DJwc8JYd.js";import"./getPseudoElementBounds-DMqt3LfC.js";import"./chevron-down-CNN1sYpV.js";import"./index-ngzZObxc.js";import"./error-BB5T5PdG.js";import"./BaseCbacBanner-BHq6MjLo.js";import"./makeExternalStore-CIgwPDSw.js";import"./Tooltip-BIxc20c1.js";import"./PopoverPopup-egxkXViS.js";import"./debounce-CTYJHprQ.js";import"./tick-CZ1on5TM.js";import"./DropdownField-Msn_oTDJ.js";import"./isEqual-tW0a4BpI.js";import"./withOsdkMetrics-W_WGwbDq.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
