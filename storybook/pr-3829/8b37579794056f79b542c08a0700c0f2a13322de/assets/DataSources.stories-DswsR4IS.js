import{j as r}from"./iframe-BmMBMHjI.js";import{O as b}from"./object-table-CwFkNJIZ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CmSd-kxH.js";import{u as g}from"./useOsdkClient-B74PkpGl.js";import"./preload-helper-wzQkPQkq.js";import"./Table-C0pMP8sT.js";import"./index-B599Nl-W.js";import"./Dialog-BrDE5tk2.js";import"./cross-B9gM567t.js";import"./svgIconContainer-BQffYzRd.js";import"./useBaseUiId-BHpwAgpt.js";import"./InternalBackdrop-Rey_LVZ5.js";import"./composite-DSlcQFOp.js";import"./index-Ebkov8ab.js";import"./index-DG25GMXZ.js";import"./index-CZomj7go.js";import"./useEventCallback-sI5dVxlB.js";import"./SkeletonBar-LCe0Qgj0.js";import"./LoadingCell-BVWrLxF3.js";import"./ColumnConfigDialog-B35KuuxY.js";import"./DraggableList-5I1ixPpy.js";import"./search-D8XOPKVg.js";import"./Input-C23cy_6N.js";import"./useControlled-DfCV0PJg.js";import"./isEqual-3N5baw8B.js";import"./isObject-DbwYW1di.js";import"./Button-B9Rc1kKc.js";import"./ActionButton-Coa8HnK-.js";import"./Checkbox-snF-j8bO.js";import"./useValueChanged-CD5svSbs.js";import"./CollapsiblePanel-NYsMCJls.js";import"./MultiColumnSortDialog-mbkcwnyG.js";import"./MenuTrigger-Ba203MiR.js";import"./CompositeItem-DqqLZlu_.js";import"./ToolbarRootContext-DGVWKOqx.js";import"./getDisabledMountTransitionStyles-B5NkpSNb.js";import"./getPseudoElementBounds-WnDsJbwn.js";import"./chevron-down-D3dzWqXW.js";import"./index-C-Jg4LdO.js";import"./error-Dmt4lvM1.js";import"./BaseCbacBanner-Cpy5qmDf.js";import"./makeExternalStore-CAgM2Mvg.js";import"./Tooltip-Qnk5LM6P.js";import"./PopoverPopup-Biha7jk9.js";import"./toNumber-B6PNWjcS.js";import"./tick-O0hT94BT.js";import"./DropdownField-GaW_KRF2.js";import"./withOsdkMetrics-CY55LUs5.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
