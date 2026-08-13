import{j as r}from"./iframe-DCe6Mdm_.js";import{O as b}from"./object-table-CPHzaYxP.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CK2ZPicq.js";import{u as g}from"./useOsdkClient-Ce4ACsVh.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BOJ4PoOi.js";import"./index-DEsJaMx2.js";import"./Dialog-DGwfutm-.js";import"./cross-CJsNmyRf.js";import"./svgIconContainer-DCGhfyJV.js";import"./useBaseUiId-BBf2jJQX.js";import"./InternalBackdrop-mRLBU6i0.js";import"./composite-D278LNPr.js";import"./index-w4e4JQ9Y.js";import"./index-DfEtL9_w.js";import"./index-D7eNBVK-.js";import"./useEventCallback-60DtBFBu.js";import"./SkeletonBar-lewdr35b.js";import"./LoadingCell-C7C7yuXh.js";import"./ColumnConfigDialog-ClE2fiGp.js";import"./DraggableList-DyLRFxn4.js";import"./search-i3wN8XPz.js";import"./Input-CexuDk3x.js";import"./useControlled-J08ycTXS.js";import"./Button-CMj35CzN.js";import"./small-cross-CKR9nVmW.js";import"./ActionButton-CxPFrJen.js";import"./Checkbox-CFvHGocX.js";import"./useValueChanged-CKSZHwBz.js";import"./CollapsiblePanel-wkW42G3A.js";import"./MultiColumnSortDialog-C8R_Sag-.js";import"./MenuTrigger-3KeKY9rT.js";import"./CompositeItem-QuRNq9IV.js";import"./ToolbarRootContext-Dg7t3l2c.js";import"./getDisabledMountTransitionStyles-90RwPzEQ.js";import"./getPseudoElementBounds-DUbM5yff.js";import"./chevron-down-1f-nO09j.js";import"./index-C2gC57rZ.js";import"./error-DDf8VeOI.js";import"./BaseCbacBanner-BsymODXL.js";import"./makeExternalStore-Z40vhwY9.js";import"./Tooltip-DL0JIbop.js";import"./PopoverPopup-453DLuVc.js";import"./toNumber-CNeIRQiS.js";import"./tick-CmBo1oMB.js";import"./DropdownField-G_wbGU9M.js";import"./withOsdkMetrics-DaHbZvPF.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,Te={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const je=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,je as __namedExportsOrder,Te as default};
