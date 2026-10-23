import{j as r}from"./iframe-vvAR62dd.js";import{O as b}from"./object-table-CXopfYqE.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B_ss5gcZ.js";import{u as g}from"./useOsdkClient-B1Xs9__W.js";import"./preload-helper-CCln4nV6.js";import"./Table-BBK0GTET.js";import"./index-GmZDd95a.js";import"./Dialog-dFzbXwqF.js";import"./cross-CpEJT7cV.js";import"./svgIconContainer-Dzj9GXt6.js";import"./useBaseUiId-Z7KW9EIT.js";import"./InternalBackdrop-CoJutqVn.js";import"./composite-zVuCDcDS.js";import"./index-OCJal9Dk.js";import"./index-CV2OXpxY.js";import"./index-Bx2-AWTp.js";import"./useEventCallback-Ccpyp-m0.js";import"./SkeletonBar-BZQXUDqP.js";import"./LoadingCell-DPFh4pU5.js";import"./ColumnConfigDialog-Dprrjpsr.js";import"./DraggableList-B6yuk7TC.js";import"./search-nGnjAR9u.js";import"./Input-CMHuklSy.js";import"./useControlled-C-mBGUI2.js";import"./Button-DYluNYeK.js";import"./small-cross-BcEFUww0.js";import"./ActionButton-Bd_k4C4B.js";import"./Checkbox-BhUjCSkM.js";import"./useValueChanged-D84M7v5T.js";import"./CollapsiblePanel-DUeD2G1u.js";import"./MultiColumnSortDialog-Bf2J9Gib.js";import"./MenuTrigger-BtntZbVw.js";import"./CompositeItem-DcxtPwna.js";import"./ToolbarRootContext-rrmxt5FX.js";import"./getDisabledMountTransitionStyles-jloJ4yp1.js";import"./getPseudoElementBounds-DjD6SzS5.js";import"./chevron-down-Bekr5naF.js";import"./index-Se0bF5VG.js";import"./error-DlRppvjG.js";import"./BaseCbacBanner-C5FR1aR-.js";import"./makeExternalStore-5NWNtgTu.js";import"./Tooltip-Bu_ANg_v.js";import"./PopoverPopup-BxKEhfdz.js";import"./debounce-CyLBxhxo.js";import"./tick-BYwIl2x5.js";import"./DropdownField-DdI4C3BC.js";import"./isEqual-CgfAyVTP.js";import"./withOsdkMetrics-D2qelpzb.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
