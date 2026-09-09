import{j as r}from"./iframe-Cha5bzcQ.js";import{O as b}from"./object-table-CAzCMSOu.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-aY_PyRgN.js";import{u as g}from"./useOsdkClient-BW0sTjCm.js";import"./preload-helper-DTIBEWF3.js";import"./Table-D14BkX5X.js";import"./index-Bm3NhGlH.js";import"./Dialog-CUzVZoox.js";import"./cross-sYD9GiNz.js";import"./svgIconContainer-DA_Ed81f.js";import"./useBaseUiId-CoAf4zJ1.js";import"./InternalBackdrop-5-0DlwQk.js";import"./composite-DwMGYBdi.js";import"./index-BuHsw6tX.js";import"./index-CRCMyzG5.js";import"./index-BLVvXBm0.js";import"./useEventCallback-C_dAqdfF.js";import"./SkeletonBar-B6h9Ova2.js";import"./LoadingCell-CEXOIvr5.js";import"./ColumnConfigDialog-2XfPaajD.js";import"./DraggableList-CGZqRsIG.js";import"./search-LEzBZeqH.js";import"./Input-CS3x1fIq.js";import"./useControlled-BsFUux1R.js";import"./Button-KiGmPYx_.js";import"./small-cross-Cqpx81EU.js";import"./ActionButton-DQjspSLx.js";import"./Checkbox-CfFeXPwz.js";import"./useValueChanged-DX1fsVrr.js";import"./CollapsiblePanel-Dal__8LV.js";import"./MultiColumnSortDialog-sKVV6RHu.js";import"./MenuTrigger-B9H-qCGa.js";import"./CompositeItem-CI63tMYo.js";import"./ToolbarRootContext-BCJzUdOe.js";import"./getDisabledMountTransitionStyles-DtsqVZlu.js";import"./getPseudoElementBounds-BL7IKUOX.js";import"./chevron-down-BImkdPvb.js";import"./index-Wr7-HV8X.js";import"./error-JfmuoEvN.js";import"./BaseCbacBanner-DHmN-_jc.js";import"./makeExternalStore-DIkaw39a.js";import"./Tooltip-COCG5jN8.js";import"./PopoverPopup-DLpPXX4a.js";import"./debounce-CCWjtmn1.js";import"./tick-ADT_jvRp.js";import"./DropdownField-CLg5FybE.js";import"./isEqual-BermXjtW.js";import"./withOsdkMetrics-5Xu_aVjO.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
