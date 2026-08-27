import{j as r}from"./iframe-j16wUfsG.js";import{O as b}from"./object-table-BCkM1bv0.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D9ZP3Cza.js";import{u as g}from"./useOsdkClient-CHpRljBm.js";import"./preload-helper-B5KNJanK.js";import"./Table-DUtbUPZe.js";import"./index-PZXuwR22.js";import"./Dialog-Ba90sm6K.js";import"./cross-hlLbslg_.js";import"./svgIconContainer-DyYG3yIN.js";import"./useBaseUiId-BT4BDOeF.js";import"./InternalBackdrop-CDEbkKEG.js";import"./composite-B2eetiSQ.js";import"./index-BBXEyrHX.js";import"./index-BKBAw2oy.js";import"./index-DTWb0ngO.js";import"./useEventCallback-ryqefgdq.js";import"./SkeletonBar-D7pRmDQH.js";import"./LoadingCell-CHsb-nzQ.js";import"./ColumnConfigDialog-ERHE9gvP.js";import"./DraggableList-cVSW0vVW.js";import"./search-BeO1HXe9.js";import"./Input-ChvjdPlR.js";import"./useControlled-DFdkoakd.js";import"./Button-BsHl7luh.js";import"./small-cross-C0ihpIaZ.js";import"./ActionButton-DswyMU6B.js";import"./Checkbox-wSboXymt.js";import"./useValueChanged-CO-asJqE.js";import"./CollapsiblePanel-Cmv4sQtD.js";import"./MultiColumnSortDialog-C8l1RJoW.js";import"./MenuTrigger-BEOUTCDD.js";import"./CompositeItem-BYEj7bp3.js";import"./ToolbarRootContext-DOjYoz5M.js";import"./getDisabledMountTransitionStyles-_4E5aWO0.js";import"./getPseudoElementBounds-qqBqkqSW.js";import"./chevron-down-CPDFF9dW.js";import"./index-Soy9Caj3.js";import"./error-DyJKKGYF.js";import"./BaseCbacBanner-DW3GIQns.js";import"./makeExternalStore-CIGBfPKm.js";import"./Tooltip-CmOBTmaj.js";import"./PopoverPopup-CtZcaNrD.js";import"./debounce-BCylpfiq.js";import"./tick-BvU0208f.js";import"./DropdownField-CtNMPrH-.js";import"./isEqual-D44AHoS1.js";import"./withOsdkMetrics-DopDBPQL.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
