import{j as r}from"./iframe-DV1yCMsw.js";import{O as b}from"./object-table-CDFR86N1.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DlXPEwVX.js";import{u as g}from"./useOsdkClient-KTkVgi-z.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CSRtT_R-.js";import"./index-azQz1-D1.js";import"./Dialog-vp7CaCgc.js";import"./cross-DNR9YQ3a.js";import"./svgIconContainer-BeM6_7kW.js";import"./useBaseUiId-DOZms5KT.js";import"./InternalBackdrop-DdEug9RR.js";import"./composite-DfXvakAK.js";import"./index--Byjp6h8.js";import"./index-CmQmrs9R.js";import"./index-EhU39UPy.js";import"./useEventCallback-COYwW9Ss.js";import"./SkeletonBar-D_eY-DTv.js";import"./LoadingCell-Be_iH5t9.js";import"./ColumnConfigDialog-BL_HoTcd.js";import"./DraggableList-C67OFZGX.js";import"./search-CQsBxLkU.js";import"./Input-PDMkMKii.js";import"./useControlled-nUfbdO0a.js";import"./Button-DPHupdFu.js";import"./small-cross-DYpEQl9d.js";import"./ActionButton-LfdBhkgt.js";import"./Checkbox-jY5e4hfS.js";import"./useValueChanged-CJ0AX3Q5.js";import"./CollapsiblePanel-BW2nV8fU.js";import"./MultiColumnSortDialog-dKIsRy2L.js";import"./MenuTrigger-q7n2torl.js";import"./CompositeItem-BUg5Nmhs.js";import"./ToolbarRootContext-0T6zDh9h.js";import"./getDisabledMountTransitionStyles-CI5qk8fd.js";import"./getPseudoElementBounds-DPHhSEhv.js";import"./chevron-down-GWsulQRf.js";import"./index-BVIyipfq.js";import"./error-t-4CnxKH.js";import"./BaseCbacBanner-Dz0_Knjv.js";import"./makeExternalStore-0Z503ATJ.js";import"./Tooltip-T_V-Cw1B.js";import"./PopoverPopup-CXIkOXNy.js";import"./debounce-DPm4QGed.js";import"./tick-7CTVhgFt.js";import"./DropdownField-ByQ7XVe-.js";import"./isEqual-BfcI4Xz_.js";import"./withOsdkMetrics-DNZcGQG2.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
