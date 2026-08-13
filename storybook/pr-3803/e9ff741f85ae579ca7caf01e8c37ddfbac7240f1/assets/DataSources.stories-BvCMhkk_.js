import{j as r}from"./iframe-BYHcOnYC.js";import{O as b}from"./object-table-Ch24TxKl.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BR8LrDZX.js";import{u as g}from"./useOsdkClient-BbUW0UNC.js";import"./preload-helper-MS29zNf3.js";import"./Table-Budi2vR5.js";import"./index-CPW0YqJ1.js";import"./Dialog-BbfO80Zz.js";import"./cross-DcO4hFL4.js";import"./svgIconContainer-Cxrh5Db1.js";import"./useBaseUiId-RORmPNfM.js";import"./InternalBackdrop-CutR-Fy6.js";import"./composite-CiXZG6Yk.js";import"./index-BlYuIQd_.js";import"./index-D704UY4m.js";import"./index-XgtragRI.js";import"./useEventCallback-BCkMP6cG.js";import"./SkeletonBar-Bd1fWeO-.js";import"./LoadingCell-DVO5zLx6.js";import"./ColumnConfigDialog-BoaSxr7Y.js";import"./DraggableList-CfxTK_om.js";import"./search-DQmYjeD3.js";import"./Input-MJBSejsj.js";import"./useControlled-BTIUHun_.js";import"./isEqual-CNKLS4I8.js";import"./isObject-BwQfkHqy.js";import"./Button-9cPBIdv7.js";import"./ActionButton-8hzqk5h4.js";import"./Checkbox-Dc_BHEOM.js";import"./useValueChanged-BhFqJI-7.js";import"./CollapsiblePanel--su-kBcM.js";import"./MultiColumnSortDialog-BuJvTPmK.js";import"./MenuTrigger-BpEH-B1z.js";import"./CompositeItem-im0wuBUU.js";import"./ToolbarRootContext-BzowVjD3.js";import"./getDisabledMountTransitionStyles-c2dOjv9a.js";import"./getPseudoElementBounds-DI_0UEB4.js";import"./chevron-down-VM28Feil.js";import"./index-CQfeV39g.js";import"./error-DlU4geYq.js";import"./BaseCbacBanner-BkXevk_e.js";import"./makeExternalStore-BJqA2WUa.js";import"./Tooltip-BRRsXMkj.js";import"./PopoverPopup-BJkMqKU9.js";import"./toNumber-Tcx7OgeQ.js";import"./tick-BpZ0GiiH.js";import"./DropdownField-Dwwqa4qu.js";import"./withOsdkMetrics-Bxe5ZrJW.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
