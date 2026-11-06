import{j as r}from"./iframe-B_zRUDuE.js";import{O as b}from"./object-table-Bv64vFep.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dt4m0KHw.js";import{u as g}from"./useOsdkClient-DO77RjGc.js";import"./preload-helper-CxVJftgz.js";import"./Table-crjZDJuE.js";import"./index-sn9mtHlU.js";import"./Dialog-YgM3zMLP.js";import"./cross-_ERVYG6L.js";import"./svgIconContainer-CxXL_oXh.js";import"./useBaseUiId-8u_jCgH6.js";import"./InternalBackdrop-D-Mc2aWz.js";import"./composite-CiMgDYUm.js";import"./index-o0vWfmid.js";import"./index-DT6FHhAE.js";import"./index-CFIH2_Ln.js";import"./useEventCallback-DXtMhdq9.js";import"./SkeletonBar-_7p8Ae6C.js";import"./LoadingCell-BBr8zF--.js";import"./ColumnConfigDialog-BJtuM6eb.js";import"./DraggableList-BNGFL0c8.js";import"./search-C1xWyvK0.js";import"./Input-Db4KedVJ.js";import"./useControlled-DlwI9PYM.js";import"./Button-CY0tELjq.js";import"./small-cross-CNevPnY1.js";import"./ActionButton-p5CBVKmi.js";import"./Checkbox-COebmtnq.js";import"./useValueChanged-Bj4HpRwM.js";import"./CollapsiblePanel-B55pzrP7.js";import"./MultiColumnSortDialog-DAX7LlwZ.js";import"./MenuTrigger-BYEGdV1Q.js";import"./CompositeItem-LThRFFEu.js";import"./ToolbarRootContext-Bj3x-8aq.js";import"./getDisabledMountTransitionStyles-CIBqTnBJ.js";import"./getPseudoElementBounds-REbqj2aK.js";import"./chevron-down-C87rVGKO.js";import"./index-Cq4s-83z.js";import"./error-Co0vxDqJ.js";import"./BaseCbacBanner-DFepNaLt.js";import"./makeExternalStore-DD9WI4JF.js";import"./Tooltip-D7_c9ORd.js";import"./isObject-BgbyztzY.js";import"./debounce-Bz563Y3c.js";import"./tick-Cso2FHRc.js";import"./DropdownField-U6RE18pq.js";import"./isEqual-DJWYrLXk.js";import"./_baseIsEqual-Z_m_8oSa.js";import"./withOsdkMetrics-DrGnBbgp.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
