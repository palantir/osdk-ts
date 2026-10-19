import{j as r}from"./iframe-BH9-Vfs1.js";import{O as b}from"./object-table-DkRx2TSI.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DBZ_6JoS.js";import{u as g}from"./useOsdkClient-B78DQJmL.js";import"./preload-helper-CoJdsvxJ.js";import"./Table-CF_Gr0eJ.js";import"./index-_6Q5jVBK.js";import"./Dialog-H9PWXepR.js";import"./cross-HuW5yWPa.js";import"./svgIconContainer-BPyIUPO5.js";import"./useBaseUiId-CdU1pKU6.js";import"./InternalBackdrop-C4RHDXX9.js";import"./composite-aDEaeN1m.js";import"./index-CUm5VRBM.js";import"./index-iq-MawLa.js";import"./index-D_GYi7KZ.js";import"./useEventCallback-BM_lCHBk.js";import"./SkeletonBar-DUzCarP5.js";import"./LoadingCell-sgIDdnpb.js";import"./ColumnConfigDialog-sGa94e2C.js";import"./DraggableList-D7hjeCsQ.js";import"./search-CaTzsfhK.js";import"./Input-CYVECsi-.js";import"./useControlled-UCeQQNPP.js";import"./Button-DJTiAyTL.js";import"./small-cross-Ws2nfjsL.js";import"./ActionButton-CgXb0xmm.js";import"./Checkbox-5TgDST7R.js";import"./useValueChanged-C51YJ2lo.js";import"./CollapsiblePanel-b7brQAbP.js";import"./MultiColumnSortDialog-_aoaC3ql.js";import"./MenuTrigger-Dh7zRnlm.js";import"./CompositeItem-D5PXOQkD.js";import"./ToolbarRootContext-CbUVM7d6.js";import"./getDisabledMountTransitionStyles-Bavl1m2r.js";import"./getPseudoElementBounds-fo53-Bfk.js";import"./chevron-down-SngEWHwD.js";import"./index-CHoEIfe6.js";import"./error-BMBrp2lF.js";import"./BaseCbacBanner-DarXxyY1.js";import"./makeExternalStore-Cax4wnWM.js";import"./Tooltip-D8UPmHEX.js";import"./PopoverPopup-Diu6AqpB.js";import"./debounce-CErsKOIl.js";import"./tick-sRS91U9j.js";import"./DropdownField-BPBBYIiE.js";import"./isEqual-C-YyuCMw.js";import"./withOsdkMetrics-DsCWHvB2.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
