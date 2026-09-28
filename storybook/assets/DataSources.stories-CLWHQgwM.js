import{j as r}from"./iframe-yLJxkVzB.js";import{O as b}from"./object-table-BjJ7VNCo.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DP8MNLom.js";import{u as g}from"./useOsdkClient-BeKNNCDt.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BvwH_ZL2.js";import"./index-nIKj5uY4.js";import"./Dialog-2IuBkREG.js";import"./cross-Owpme9BE.js";import"./svgIconContainer-TK-Ji3z6.js";import"./useBaseUiId-C2QLSnG8.js";import"./InternalBackdrop-BBxC8DKB.js";import"./composite-dCt9YpUk.js";import"./index-BA5McYn9.js";import"./index-DfLe8XpU.js";import"./index-CozEKZMT.js";import"./useEventCallback-fdgxuXgo.js";import"./SkeletonBar-DZZlKsf1.js";import"./LoadingCell-CUdyrdoA.js";import"./ColumnConfigDialog-DQt6LAOo.js";import"./DraggableList-Dl4LF87d.js";import"./search-B5yRV9xp.js";import"./Input-CPmagxfJ.js";import"./useControlled-CJJ5Ltiy.js";import"./Button-wUttMbxG.js";import"./small-cross-CG34SVyC.js";import"./ActionButton-Clr_BQ-v.js";import"./Checkbox-Cy7DSLTa.js";import"./useValueChanged-BAqw25z8.js";import"./CollapsiblePanel-DgS9WHma.js";import"./MultiColumnSortDialog-DXJkaF5P.js";import"./MenuTrigger-CTEiO2Bu.js";import"./CompositeItem-Bteys6EZ.js";import"./ToolbarRootContext-LMgR1PX5.js";import"./getDisabledMountTransitionStyles-Dokq89QC.js";import"./getPseudoElementBounds-B28lIi_Q.js";import"./chevron-down-NEt8c7o4.js";import"./index-vF_-Jyj8.js";import"./error-CkjCJkJz.js";import"./BaseCbacBanner-BLXv67Yn.js";import"./makeExternalStore-BrbywmR6.js";import"./Tooltip-D82BZFwQ.js";import"./PopoverPopup-DvlntHwZ.js";import"./debounce-CAdN6VB_.js";import"./tick-BN9LdMqy.js";import"./DropdownField-BBTmJj7c.js";import"./isEqual-BU8jNfNb.js";import"./withOsdkMetrics-EW4d60np.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
