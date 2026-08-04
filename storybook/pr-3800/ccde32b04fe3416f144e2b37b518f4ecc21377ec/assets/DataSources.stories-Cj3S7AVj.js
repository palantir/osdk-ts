import{j as r}from"./iframe-C-MKJZyK.js";import{O as b}from"./object-table-DrMkrKLc.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BuhsMp6V.js";import{u as g}from"./useOsdkClient-ByMbO7oV.js";import"./preload-helper-CU_HtoHz.js";import"./Table-BQy4tVWI.js";import"./index-CPYi5p-M.js";import"./Dialog-DJMsLC6L.js";import"./cross-DNu1Vd5q.js";import"./svgIconContainer-FX4i3D7t.js";import"./useBaseUiId-CgtQyAp-.js";import"./InternalBackdrop-BTkXGX7m.js";import"./composite-2YGSxd1T.js";import"./index-sYzrVFPx.js";import"./index-wyiBeFpI.js";import"./index-DNZsHthF.js";import"./useEventCallback-CJrcjSKs.js";import"./SkeletonBar-DpIoDv_h.js";import"./LoadingCell-DJ2Ze2g2.js";import"./ColumnConfigDialog-Bh63K-cl.js";import"./DraggableList-BGYaEGvL.js";import"./search-UvEU4G0v.js";import"./Input-CLo1MrIB.js";import"./useControlled-NSu5zz5s.js";import"./isEqual-mBn6qCrn.js";import"./isObject-DT-aOAxT.js";import"./Button-CKxl37fU.js";import"./ActionButton-oNGywivn.js";import"./Checkbox-WG_nfQTt.js";import"./useValueChanged-mZNolY1C.js";import"./CollapsiblePanel-4q0oe3Zb.js";import"./MultiColumnSortDialog-Dlu_R13e.js";import"./MenuTrigger-BFE-_QDU.js";import"./CompositeItem-tHPXjfot.js";import"./ToolbarRootContext-D9y6oWor.js";import"./getDisabledMountTransitionStyles-DKxxzprT.js";import"./getPseudoElementBounds-ZljCXn7t.js";import"./chevron-down-71ryCxKg.js";import"./index-DQWYziCS.js";import"./error-CYtlGVxq.js";import"./BaseCbacBanner-CjxggRhb.js";import"./makeExternalStore-DiOUMjBT.js";import"./Tooltip-BD5qq4Vm.js";import"./PopoverPopup-J7D5jMka.js";import"./toNumber-BoP5826v.js";import"./tick-BuCzEOZ7.js";import"./DropdownField-hKngkWwm.js";import"./withOsdkMetrics-BixqoA9K.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
