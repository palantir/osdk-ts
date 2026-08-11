import{j as r}from"./iframe-QSknsibA.js";import{O as b}from"./object-table-DLsBAGD5.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-WBLiv9_W.js";import{u as g}from"./useOsdkClient-CDT1l2-s.js";import"./preload-helper-B3LrgdxU.js";import"./Table-BsAnMen_.js";import"./index-B_OK08DX.js";import"./Dialog-B_zFcXLg.js";import"./cross-mnCq1uQ2.js";import"./svgIconContainer-De7GUSo3.js";import"./useBaseUiId-56xqlUOA.js";import"./InternalBackdrop-DLNy9f8e.js";import"./composite-rTqajcpw.js";import"./index-Cf49gatU.js";import"./index-DchscfH7.js";import"./index-CsRUh4p0.js";import"./useEventCallback-BNFo9jqT.js";import"./SkeletonBar-U8s5a4eZ.js";import"./LoadingCell-CFl1Ne9K.js";import"./ColumnConfigDialog-DToErAYq.js";import"./DraggableList-BduB1LxV.js";import"./search-D5SBe6yO.js";import"./Input-DSWKb0xV.js";import"./useControlled-DGsWq6rv.js";import"./isEqual-DOlanfjM.js";import"./isObject-KrdndNs4.js";import"./Button-Bl3RvClX.js";import"./ActionButton-CK5g_2j-.js";import"./Checkbox-ByXXs2vR.js";import"./useValueChanged-Cc7DEmXa.js";import"./CollapsiblePanel-D10wD81P.js";import"./MultiColumnSortDialog-BWQjojtp.js";import"./MenuTrigger-madZLcXv.js";import"./CompositeItem-DQqMAMfP.js";import"./ToolbarRootContext-D15HbZ6L.js";import"./getDisabledMountTransitionStyles-DLDAhr3d.js";import"./getPseudoElementBounds-CO-qv3XB.js";import"./chevron-down-CmOKY8Hu.js";import"./index-DRj4Fndf.js";import"./error-C_PHjA_A.js";import"./BaseCbacBanner-B7GtJmuI.js";import"./makeExternalStore-ClhVK885.js";import"./Tooltip-C03NNvk7.js";import"./PopoverPopup-DR9rKf_2.js";import"./toNumber-D_d6GRXM.js";import"./tick-CXORmvZn.js";import"./DropdownField-aW2MkhBu.js";import"./withOsdkMetrics-CLccy0f7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
