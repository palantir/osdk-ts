import{j as r}from"./iframe-Dl62X5ic.js";import{O as b}from"./object-table-DzRA7Mxo.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DYVMmg_4.js";import{u as g}from"./useOsdkClient-CIHFFW4f.js";import"./preload-helper-9xagDZWN.js";import"./Table-D9MrzOm8.js";import"./index-r58F3SRz.js";import"./Dialog-CJTpl5lb.js";import"./cross-Dz9bobDU.js";import"./svgIconContainer-CDF0MBN3.js";import"./useBaseUiId-BZmuLScT.js";import"./InternalBackdrop-CUbDm0mk.js";import"./composite-5K-iGM63.js";import"./index-CnSx04IC.js";import"./index-VVu8Dx_K.js";import"./index-C43hAumx.js";import"./useEventCallback-C6wmA8fg.js";import"./SkeletonBar-tl3J6Agl.js";import"./LoadingCell-2Wi9jC-f.js";import"./ColumnConfigDialog-Ctz3fxGV.js";import"./DraggableList-D_k5i4OI.js";import"./search-C2kc8148.js";import"./Input-D7jaCKwy.js";import"./useControlled-DXjG9kLU.js";import"./Button-ChSQqWTn.js";import"./small-cross-XscPhA7b.js";import"./ActionButton-Clvxcs8u.js";import"./Checkbox-Dq_mlxsJ.js";import"./useValueChanged-BDnmFJ1P.js";import"./CollapsiblePanel-6wlgdqmH.js";import"./MultiColumnSortDialog-CsS0qCMr.js";import"./MenuTrigger-E2gBZa0U.js";import"./CompositeItem-9M5fDXNa.js";import"./ToolbarRootContext-Bw5Q4Aok.js";import"./getDisabledMountTransitionStyles-fFVklT7J.js";import"./getPseudoElementBounds-TACN8Mem.js";import"./chevron-down-B-xg4ZpH.js";import"./index-KYGZGSHD.js";import"./error-Bdp21cmx.js";import"./BaseCbacBanner-Bl-_XnGR.js";import"./makeExternalStore-BL6KvBj8.js";import"./Tooltip-Batd7piz.js";import"./PopoverPopup-C0r9zNTS.js";import"./toNumber-CN-GuG5F.js";import"./tick-BamqF3vZ.js";import"./DropdownField-BN8T2Zfa.js";import"./withOsdkMetrics-Ycu2Npgr.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,Te={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
