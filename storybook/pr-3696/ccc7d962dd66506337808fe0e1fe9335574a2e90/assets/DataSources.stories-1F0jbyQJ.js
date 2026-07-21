import{j as r}from"./iframe-DmCw4giF.js";import{O as b}from"./object-table-DkGVq2zd.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BmlRIlFR.js";import{u as g}from"./useOsdkClient-DKGNHqRc.js";import"./preload-helper-BqMEmH-P.js";import"./Table-CwyQpoEA.js";import"./index-By5PjpkV.js";import"./Dialog-CMvNXpmm.js";import"./cross-C5gUbpJ8.js";import"./svgIconContainer-BGxGx4oi.js";import"./useBaseUiId-CMgGmprv.js";import"./InternalBackdrop-CTOyXC2J.js";import"./composite-SBWrYybR.js";import"./index-D7OuGC6M.js";import"./index-Cl_9RNwe.js";import"./index-DMn3axbQ.js";import"./useEventCallback-VtqApLju.js";import"./SkeletonBar-B0SBXBFN.js";import"./LoadingCell-BHNKzm22.js";import"./ColumnConfigDialog-Dj08jxeR.js";import"./DraggableList-I411jCsC.js";import"./search-BX5NV_IZ.js";import"./Input-D0tfRr17.js";import"./useControlled-CUsv9bVr.js";import"./Button-Bg11yYPT.js";import"./small-cross-CctzTCfJ.js";import"./ActionButton-CYsmhCxj.js";import"./Checkbox-CviTf8nv.js";import"./useValueChanged-L-C_U2yt.js";import"./CollapsiblePanel-dHNnScII.js";import"./MultiColumnSortDialog-fveWjSG6.js";import"./MenuTrigger-BFGZOH9z.js";import"./CompositeItem-CFe_vHTh.js";import"./ToolbarRootContext-DOoHomck.js";import"./getDisabledMountTransitionStyles-C-4maSRy.js";import"./getPseudoElementBounds-BqgYhusO.js";import"./chevron-down-CCFUjBzE.js";import"./index-DERODYr7.js";import"./error-BVtxD93c.js";import"./BaseCbacBanner-BFZyY8-L.js";import"./makeExternalStore-CTtM4SD7.js";import"./Tooltip-D_rqv0p4.js";import"./PopoverPopup-CVWJXKNo.js";import"./toNumber-Wq34DRdH.js";import"./tick-Cjy0B6im.js";import"./DropdownField-BKpFWQXk.js";import"./withOsdkMetrics-CQ_rVNLy.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,Te={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
