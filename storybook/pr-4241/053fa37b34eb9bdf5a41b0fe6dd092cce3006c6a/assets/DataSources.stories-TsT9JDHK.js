import{j as r}from"./iframe-AXAl_lkK.js";import{O as b}from"./object-table-DaeXsc4W.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C48tE7BB.js";import{u as g}from"./useOsdkClient-UMx75Wu3.js";import"./preload-helper-CmOyIjss.js";import"./Table-D6yteXfE.js";import"./index-WwDO5TYI.js";import"./Dialog-hRq7aSV9.js";import"./cross-CQtMlVpl.js";import"./svgIconContainer-C41-1JgD.js";import"./useBaseUiId-Z03BErLK.js";import"./InternalBackdrop-hFYkRxh1.js";import"./composite-DhTcvoOi.js";import"./index-waMJrP0w.js";import"./index-BfO3FL2b.js";import"./index--PmXZ_gO.js";import"./useEventCallback-Djw-n0Ln.js";import"./SkeletonBar-B1COelSe.js";import"./LoadingCell-BQTu8WdY.js";import"./ColumnConfigDialog-DJKuo9pD.js";import"./DraggableList-DmbkwluN.js";import"./search-DSOJHa0m.js";import"./Input-rah5Oh7j.js";import"./useControlled-CwZsDCym.js";import"./Button-PnLOiyuX.js";import"./small-cross-Dbzif9Zo.js";import"./ActionButton-BVOTHsC2.js";import"./Checkbox-W6po3mzH.js";import"./useValueChanged-DttVAdvH.js";import"./CollapsiblePanel-DVYu9T5b.js";import"./MultiColumnSortDialog-BTDBrS5R.js";import"./MenuTrigger-BNvawPed.js";import"./CompositeItem-3bSE7nfu.js";import"./ToolbarRootContext-Bjje7bvz.js";import"./getDisabledMountTransitionStyles-Cg9BxDUe.js";import"./getPseudoElementBounds-CBJSNv6r.js";import"./chevron-down-Bzpri4FT.js";import"./index-DyLMV4YC.js";import"./error-DelAmSaO.js";import"./BaseCbacBanner-BX9rKr8l.js";import"./makeExternalStore-xudMkMrV.js";import"./Tooltip-OQ9Lr3E8.js";import"./PopoverPopup-P-aEfD8I.js";import"./debounce-DoYq5Fyf.js";import"./tick-BKo5ivYX.js";import"./DropdownField-zE-ANVSd.js";import"./isEqual-BvwLvsdD.js";import"./withOsdkMetrics-CZL_7UfS.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
