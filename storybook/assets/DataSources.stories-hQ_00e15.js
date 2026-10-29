import{j as r}from"./iframe-Dk0apQWL.js";import{O as b}from"./object-table-OvSt47Oa.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B26skzIe.js";import{u as g}from"./useOsdkClient-vEcJQf38.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DM8aWAfN.js";import"./index-BB76_vsP.js";import"./Dialog-CzgePr_x.js";import"./cross-mMEGpaf9.js";import"./svgIconContainer-BwfkG_x4.js";import"./useBaseUiId-DQQ7To9Z.js";import"./InternalBackdrop-BUdWMD8m.js";import"./composite-Cbj8LV8T.js";import"./index-Dw8JwmE5.js";import"./index-D4wGw7f5.js";import"./index-QtJ8ftv1.js";import"./useEventCallback-BqQVBoQ2.js";import"./SkeletonBar-Dk0v_u2l.js";import"./LoadingCell-PxmI2QJk.js";import"./ColumnConfigDialog-D2Y1ErhZ.js";import"./DraggableList-BnzrvLxt.js";import"./search-DeE9hnrl.js";import"./Input-BWvGoQIW.js";import"./useControlled-BoHpDSdR.js";import"./Button-cnivFiIY.js";import"./small-cross-CylaTMSl.js";import"./ActionButton-Dz0C2N0K.js";import"./Checkbox-B20ccMkC.js";import"./useValueChanged-D0eJODMY.js";import"./CollapsiblePanel-BM1L2j_O.js";import"./MultiColumnSortDialog-PTPh2Y5W.js";import"./MenuTrigger-ItmFwYXE.js";import"./CompositeItem-C2KsOfaA.js";import"./ToolbarRootContext-Cfg54QU-.js";import"./getDisabledMountTransitionStyles-ByloQe2_.js";import"./getPseudoElementBounds-Bat3eBC6.js";import"./chevron-down-BDsXaIBN.js";import"./index-C72SMcb2.js";import"./error-gPnUZGMu.js";import"./BaseCbacBanner-q8B9Ars3.js";import"./makeExternalStore-hT_U_1se.js";import"./Tooltip-DbhzqFNA.js";import"./PopoverPopup-GacXe4V2.js";import"./debounce-Bisu8SDu.js";import"./tick-DMn6pr7G.js";import"./DropdownField-SyLzUpD6.js";import"./isEqual-BCqbvt43.js";import"./withOsdkMetrics-Bwt22oAD.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
