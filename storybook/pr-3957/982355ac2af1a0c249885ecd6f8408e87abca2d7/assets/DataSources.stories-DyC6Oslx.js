import{j as r}from"./iframe-Ce3jEZMI.js";import{O as b}from"./object-table-fxytz55c.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-sj_-iJBO.js";import{u as g}from"./useOsdkClient-DI2ZXji8.js";import"./preload-helper-zFlo1Ag_.js";import"./Table-BL5ga0ku.js";import"./index-BWRu0lVk.js";import"./Dialog-Be9HqrM_.js";import"./cross-BA6yBz5j.js";import"./svgIconContainer-C7wsxhu-.js";import"./useBaseUiId-QnL0ah19.js";import"./InternalBackdrop-CQpmpxtx.js";import"./composite-ow-DJQ4K.js";import"./index-BVVmi8IY.js";import"./index-BJoSdgxJ.js";import"./index-Cmpp0QHi.js";import"./useEventCallback-D_jfiLDi.js";import"./SkeletonBar-BQO0I3KZ.js";import"./LoadingCell-DAN027-W.js";import"./ColumnConfigDialog-DEvO2VXc.js";import"./DraggableList-kylZrf2H.js";import"./search-BNuIHYDK.js";import"./Input-k1XluRBB.js";import"./useControlled-CEIiJDdv.js";import"./Button-DAGPL7mA.js";import"./small-cross-CoufPZre.js";import"./ActionButton-BAsQofvL.js";import"./Checkbox-D4dNDvZA.js";import"./useValueChanged-a2NTFDpp.js";import"./CollapsiblePanel-ouQWdY0B.js";import"./MultiColumnSortDialog-Cq5hMlx5.js";import"./MenuTrigger-BJ0rypDg.js";import"./CompositeItem-MWi5EakA.js";import"./ToolbarRootContext-DrlyoX7_.js";import"./getDisabledMountTransitionStyles-Cul5wQT3.js";import"./getPseudoElementBounds-fhRNsuua.js";import"./chevron-down-BQlmJQrq.js";import"./index-NRrcQACQ.js";import"./error-C6zcgIRz.js";import"./BaseCbacBanner-9vIl52yc.js";import"./makeExternalStore-B7_0KDnK.js";import"./Tooltip-CeExzR4W.js";import"./PopoverPopup-BwxLotjv.js";import"./debounce-peDMT9hw.js";import"./tick-KK5E1r3y.js";import"./DropdownField-Di-ezqK8.js";import"./isEqual-w7HhHM5e.js";import"./withOsdkMetrics-Lf7fiJQ5.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
