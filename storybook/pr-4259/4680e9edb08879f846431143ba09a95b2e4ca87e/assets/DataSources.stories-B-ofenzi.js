import{j as r}from"./iframe-CL0v58YA.js";import{O as b}from"./object-table-Bq2bBPP-.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B7ZBKqkx.js";import{u as g}from"./useOsdkClient-C1SbSG22.js";import"./preload-helper-YA1d6Ini.js";import"./Table-Cn0a8GAw.js";import"./index-Dbld71_D.js";import"./Dialog-CGLv1Gw3.js";import"./cross-CMjnlyn3.js";import"./svgIconContainer-C5xAXPyT.js";import"./useBaseUiId-C-B8c9Tq.js";import"./InternalBackdrop-BoEb1M5v.js";import"./composite-CnlM0z75.js";import"./index-B8Uk-bLz.js";import"./index-BvbkTHlh.js";import"./index-DXxGeQJl.js";import"./useEventCallback-BiRlE1G0.js";import"./SkeletonBar-aBATL-Tf.js";import"./LoadingCell-ClwklxX8.js";import"./ColumnConfigDialog-w4AQPypf.js";import"./DraggableList-CZJxf7TB.js";import"./search-1eZ8caHB.js";import"./Input-mgnWKdmk.js";import"./useControlled-CSC850so.js";import"./Button-D8zbKIcq.js";import"./small-cross-BtqQFOUy.js";import"./ActionButton-Bu4dL35R.js";import"./Checkbox-tY51RlBx.js";import"./useValueChanged-ByhtVHRE.js";import"./CollapsiblePanel-D2eGim3y.js";import"./MultiColumnSortDialog-CrDQobkj.js";import"./MenuTrigger-vBnLao72.js";import"./CompositeItem-DUAhoOI3.js";import"./ToolbarRootContext-Dar2Ujz6.js";import"./getDisabledMountTransitionStyles-Cjmtv4nr.js";import"./getPseudoElementBounds-DAXSaCVq.js";import"./chevron-down-BBB2aEWM.js";import"./index-B86UewVM.js";import"./error-DDQ2JALg.js";import"./BaseCbacBanner-C9gquFsU.js";import"./makeExternalStore-Bhj1U_Xf.js";import"./Tooltip-BzQZnpRI.js";import"./PopoverPopup-Xz0YTDkc.js";import"./debounce-CYoIEdAM.js";import"./tick-DJs20ou9.js";import"./DropdownField-BclOEnPv.js";import"./isEqual-NoqYCfyd.js";import"./withOsdkMetrics-B3RxtapX.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
