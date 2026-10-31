import{j as r}from"./iframe-C9aInfce.js";import{O as b}from"./object-table-DuDcc432.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dw1uLato.js";import{u as g}from"./useOsdkClient-CoTph7YD.js";import"./preload-helper-PMI8cRcX.js";import"./Table-BlJwVm8P.js";import"./index-Cr0L3GZN.js";import"./Dialog-Dflssdnc.js";import"./cross-DetncErB.js";import"./svgIconContainer-BJqGJbKn.js";import"./useBaseUiId-bh5ywVzc.js";import"./InternalBackdrop-B3ucOVZd.js";import"./composite-CLAAs_xp.js";import"./index-6S-kg2yi.js";import"./index-ScvUSFZz.js";import"./index-YtZtBJ6H.js";import"./useEventCallback-1FeWEKRC.js";import"./SkeletonBar-DD0yFs0X.js";import"./LoadingCell-BlttZOTh.js";import"./ColumnConfigDialog-D85Sqzbo.js";import"./DraggableList-QIjFVjIY.js";import"./search-DFxfowIj.js";import"./Input-CG7QoG-N.js";import"./useControlled-BMW5V9nZ.js";import"./Button-DLimHkL6.js";import"./small-cross-BzhMeLn8.js";import"./ActionButton-8qmPdMKn.js";import"./Checkbox-Dc9VhTPS.js";import"./useValueChanged-DPxHLeei.js";import"./CollapsiblePanel-CEhqOGjS.js";import"./MultiColumnSortDialog-C2ZPbguB.js";import"./MenuTrigger-Dh3FVW8N.js";import"./CompositeItem-DcXO7kaY.js";import"./ToolbarRootContext-BuD4rpNO.js";import"./getDisabledMountTransitionStyles-DP-946Fx.js";import"./getPseudoElementBounds-Bl18tBQw.js";import"./chevron-down-CAB1YUBN.js";import"./index-hG-BfAMR.js";import"./error-CwJEBYlM.js";import"./BaseCbacBanner-BSWzWBzS.js";import"./makeExternalStore-CqZkZ6X0.js";import"./Tooltip-u4pIgaNq.js";import"./PopoverPopup-CmF8uWKK.js";import"./debounce-G0Gt7iOQ.js";import"./tick-BzlYcUXY.js";import"./DropdownField-DSk9Pf-V.js";import"./isEqual-Co9CzCVL.js";import"./withOsdkMetrics-7XGlhu7o.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
