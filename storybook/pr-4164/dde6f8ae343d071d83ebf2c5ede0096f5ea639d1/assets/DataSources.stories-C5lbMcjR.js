import{j as r}from"./iframe-BmAfqmVA.js";import{O as b}from"./object-table-DwtrgXe0.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C4D_bHoV.js";import{u as g}from"./useOsdkClient-Dkseg2Ko.js";import"./preload-helper-Dw8BIZgV.js";import"./Table-D0gnuVks.js";import"./index-B62tNakJ.js";import"./Dialog-BJN_I2ET.js";import"./cross-CIbg1fnp.js";import"./svgIconContainer-DmqE13LP.js";import"./useBaseUiId-Ve_Ndjtk.js";import"./InternalBackdrop-B-HL31XO.js";import"./composite-D_ZO_GVZ.js";import"./index-dHY7n0A_.js";import"./index-fK0RIQv7.js";import"./index-sRqT8LaY.js";import"./useEventCallback-Dst592Es.js";import"./SkeletonBar-CpgIKy9M.js";import"./LoadingCell-DFItCsbF.js";import"./ColumnConfigDialog-DGQnTD89.js";import"./DraggableList-CZmnsgWW.js";import"./search-CXOC_cUa.js";import"./Input-Nk05MRQJ.js";import"./useControlled-DnfhwrQ9.js";import"./Button-B6o09hJ9.js";import"./small-cross-hJq0bu3d.js";import"./ActionButton-C7nJBpda.js";import"./Checkbox-tlw2znwL.js";import"./useValueChanged-BOO_UIZl.js";import"./CollapsiblePanel-BARvj3J1.js";import"./MultiColumnSortDialog-CjzVK0QW.js";import"./MenuTrigger-CZUdBscp.js";import"./CompositeItem-DXCwTfSl.js";import"./ToolbarRootContext-BGE7RlZq.js";import"./getDisabledMountTransitionStyles-D7fYxIXW.js";import"./getPseudoElementBounds-vijoVG-C.js";import"./chevron-down-BlYRgYBH.js";import"./index-K0yxoLEe.js";import"./error-Dmi1futd.js";import"./BaseCbacBanner-BCmjq5Q4.js";import"./makeExternalStore-Bdb1GDa3.js";import"./Tooltip-CvzNm6MG.js";import"./PopoverPopup-BO42v_DZ.js";import"./debounce-J4cnnbIe.js";import"./tick-C2TrJ_N8.js";import"./DropdownField-D1g5_LVv.js";import"./isEqual-BY0VpmlK.js";import"./withOsdkMetrics-ihUosZll.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
