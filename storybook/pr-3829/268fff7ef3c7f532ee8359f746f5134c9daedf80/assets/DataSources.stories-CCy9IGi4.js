import{j as r}from"./iframe-DRvkx6EA.js";import{O as b}from"./object-table-DBzD_XBm.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DOQCljtZ.js";import{u as g}from"./useOsdkClient-D1Ep5ZCP.js";import"./preload-helper-BhyZ3nJx.js";import"./Table-BJVVduwt.js";import"./index-L1UV-AGh.js";import"./Dialog-D5KZ70gI.js";import"./cross-3oIIwt46.js";import"./svgIconContainer-CJyvIw8C.js";import"./useBaseUiId-BUt3PNYZ.js";import"./InternalBackdrop-BGysF7SW.js";import"./composite-C22uJ7fn.js";import"./index-B_NabjnV.js";import"./index-B-a3URan.js";import"./index-DDpThYmQ.js";import"./useEventCallback-BL9HNNgV.js";import"./SkeletonBar-10kcximA.js";import"./LoadingCell-BiNuQWiA.js";import"./ColumnConfigDialog-cT-S5m8y.js";import"./DraggableList-DT1V9Nl5.js";import"./search-N-0jef5s.js";import"./Input-BYnQBqlk.js";import"./useControlled-CGkNej65.js";import"./isEqual-D_kar9of.js";import"./isObject-CXFfOXwZ.js";import"./Button-CQpi19yq.js";import"./ActionButton-D8KHjoz1.js";import"./Checkbox-C9Aygl69.js";import"./useValueChanged-CiS0FQ1d.js";import"./CollapsiblePanel-Cigm9Q9z.js";import"./MultiColumnSortDialog-BhQMtyJX.js";import"./MenuTrigger-CeJr3_rM.js";import"./CompositeItem-dZ8Gs4gk.js";import"./ToolbarRootContext-BNhBTPnD.js";import"./getDisabledMountTransitionStyles-BzS1BqnD.js";import"./getPseudoElementBounds-B-RFj-UH.js";import"./chevron-down-CVLOcSCE.js";import"./index-CJP3bEHO.js";import"./error-DPz_nmti.js";import"./BaseCbacBanner-B4fMA4Z9.js";import"./makeExternalStore-CHxLaRQK.js";import"./Tooltip-avIVaAD_.js";import"./PopoverPopup-DIktmPWA.js";import"./toNumber-CKb77F0n.js";import"./tick-_tjAc4OO.js";import"./DropdownField-D5R8WxXW.js";import"./withOsdkMetrics-GVKSYvIi.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
