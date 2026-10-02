import{j as r}from"./iframe-Bhu5go17.js";import{O as b}from"./object-table-B6ipDZZ-.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-VGCsgU3z.js";import{u as g}from"./useOsdkClient-CqOWvh60.js";import"./preload-helper-BSWPIZ9o.js";import"./Table-CnU7SaDg.js";import"./index-BczdwF9K.js";import"./Dialog-xxjOdycT.js";import"./cross-CkWL52XL.js";import"./svgIconContainer-Bcnn9wIP.js";import"./useBaseUiId-DjMEAOTb.js";import"./InternalBackdrop-CxE63-bR.js";import"./composite-uZlHnppD.js";import"./index-CuqdVt9a.js";import"./index-BWunv9eA.js";import"./index-C1X1ILrQ.js";import"./useEventCallback-B5a6fAJF.js";import"./SkeletonBar-DfPaevzv.js";import"./LoadingCell-C4LprGg5.js";import"./ColumnConfigDialog-BQxOQBdC.js";import"./DraggableList-W9skLj02.js";import"./search-x6Mg2DJR.js";import"./Input-BJnqdqBy.js";import"./useControlled-BGnzZuWo.js";import"./Button-DVcXfrSy.js";import"./small-cross-tIwGRVh9.js";import"./ActionButton-B4l5Ynsa.js";import"./Checkbox-BGu_Qera.js";import"./useValueChanged-DCvj2vHv.js";import"./CollapsiblePanel-CAZpLduE.js";import"./MultiColumnSortDialog-B7CnK4FE.js";import"./MenuTrigger-DkYHudyz.js";import"./CompositeItem-Jhmf5Smc.js";import"./ToolbarRootContext-B9BOuPbm.js";import"./getDisabledMountTransitionStyles-CwjdI3sa.js";import"./getPseudoElementBounds-MRfF10fy.js";import"./chevron-down-CB9qX917.js";import"./index-CT7iTPId.js";import"./error-DUAUa5ZT.js";import"./BaseCbacBanner-Ck0I-xcK.js";import"./makeExternalStore-BTwq4qvu.js";import"./Tooltip-DljM22fJ.js";import"./PopoverPopup-N9jR4N_b.js";import"./debounce-5wYFOWPv.js";import"./tick-ByjNKKea.js";import"./DropdownField-S5eVipBF.js";import"./isEqual-CQVZ_loO.js";import"./withOsdkMetrics-pTv3z3ht.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
