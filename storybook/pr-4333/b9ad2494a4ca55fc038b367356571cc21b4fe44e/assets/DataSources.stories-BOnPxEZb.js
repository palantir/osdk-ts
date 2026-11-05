import{j as r}from"./iframe-CQFC4dx4.js";import{O as b}from"./object-table-Dnv0ViWy.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CC6GcKDR.js";import{u as g}from"./useOsdkClient-BWxKj0GW.js";import"./preload-helper-JcY_IPoe.js";import"./Table-BTK2n7nU.js";import"./index-Cspojgcw.js";import"./Dialog-BBd3TNav.js";import"./cross-DOs9H1e3.js";import"./svgIconContainer-BKBde2aY.js";import"./useBaseUiId-Dc6nK4KF.js";import"./InternalBackdrop-p5Nji8FI.js";import"./composite-7q0vYS_p.js";import"./index-P5yCg6P1.js";import"./index-C4XVD7Cr.js";import"./index-DJ2zeZf_.js";import"./useEventCallback-Dl77xwkN.js";import"./SkeletonBar-ChRHj5aR.js";import"./LoadingCell-BvlFH3ka.js";import"./ColumnConfigDialog-DIjjncwE.js";import"./DraggableList-C7CbzhdC.js";import"./search-BU20I270.js";import"./Input-DXeuXn9d.js";import"./useControlled-BVb8ax9g.js";import"./Button-CcSga4fz.js";import"./small-cross-ikuTq--X.js";import"./ActionButton-BtWiE4im.js";import"./Checkbox-CJvTu61c.js";import"./useValueChanged-CeSGtFUw.js";import"./CollapsiblePanel-DGJbWxdi.js";import"./MultiColumnSortDialog-Czv1TaUU.js";import"./MenuTrigger-NY2NuTUy.js";import"./CompositeItem-Don4IZ7P.js";import"./ToolbarRootContext-Bi5DI-Ar.js";import"./getDisabledMountTransitionStyles-BKOCz1MI.js";import"./getPseudoElementBounds-D0fP0qz1.js";import"./chevron-down-giF0vKbh.js";import"./index-xDMkfL05.js";import"./error-CkMA_OFf.js";import"./BaseCbacBanner-CoZ29RCo.js";import"./makeExternalStore-BfZd500_.js";import"./Tooltip-DMkJ1Y0i.js";import"./PopoverPopup-DbpUO5Ur.js";import"./debounce-CsZvoLYJ.js";import"./tick-BMJ6Rzun.js";import"./DropdownField-DfsozA8n.js";import"./isEqual-Dxh7MnJY.js";import"./withOsdkMetrics-N-oYpdpA.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
