import{j as r}from"./iframe-OyuMXdrr.js";import{O as b}from"./object-table-WbmxHzOJ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BopBMl2i.js";import{u as g}from"./useOsdkClient-q8bkUL6Q.js";import"./preload-helper-_x9aAxJx.js";import"./Table-C2HfxcFz.js";import"./index-CME39S5e.js";import"./Dialog-C_4ccFQm.js";import"./cross-CaP_ypC8.js";import"./svgIconContainer-91GtXVWB.js";import"./useBaseUiId-CxWaSe1x.js";import"./InternalBackdrop-C0GxCzv2.js";import"./composite-CkaTKBTw.js";import"./index-PckWXlEL.js";import"./index-CzWqRMoQ.js";import"./index-3rZ9IWOh.js";import"./useEventCallback-CNSBH2bg.js";import"./SkeletonBar-Bpa29lfc.js";import"./LoadingCell-CE0uX5x-.js";import"./ColumnConfigDialog-DhvijquX.js";import"./DraggableList-oY_qzXXn.js";import"./search-D5f-ghxr.js";import"./Input-imDy7DTE.js";import"./useControlled-4AMSQyom.js";import"./isEqual-BdYTuTxb.js";import"./isObject-D6IZDeSm.js";import"./Button-BO7yKCcC.js";import"./ActionButton-D8khtr3e.js";import"./Checkbox-a2OVP_Gh.js";import"./useValueChanged-Cr5aH0fh.js";import"./CollapsiblePanel-DTf0Tm-0.js";import"./MultiColumnSortDialog-Bx7E33Rl.js";import"./MenuTrigger-CppLD_4q.js";import"./CompositeItem-B-4Vgrgy.js";import"./ToolbarRootContext-XKHI_qO5.js";import"./getDisabledMountTransitionStyles--PrC0Gh8.js";import"./getPseudoElementBounds-CMhbjwPm.js";import"./chevron-down-BF1gUlxP.js";import"./index-DQgKy5OY.js";import"./error-D1Yo1J9l.js";import"./BaseCbacBanner-C_Gima15.js";import"./makeExternalStore-DBUQL4bm.js";import"./Tooltip-AfOE4C-S.js";import"./PopoverPopup-DNemk0rN.js";import"./toNumber-DB6O7AtD.js";import"./tick-Cr-cM9yt.js";import"./DropdownField-gotRGKM7.js";import"./withOsdkMetrics-DiqAT51F.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
