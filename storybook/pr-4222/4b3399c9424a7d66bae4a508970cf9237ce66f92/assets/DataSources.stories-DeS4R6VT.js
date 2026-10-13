import{j as r}from"./iframe-tVbcsjZa.js";import{O as b}from"./object-table-B0uQ2vYC.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BcuQyaf7.js";import{u as g}from"./useOsdkClient-1rx9_4le.js";import"./preload-helper-y3mk_7AM.js";import"./Table-DJ3-rkk6.js";import"./index-BUwo4Wun.js";import"./Dialog-CA4eBZ3a.js";import"./cross-Cg8bwusU.js";import"./svgIconContainer-D6fQk_si.js";import"./useBaseUiId-DvMZwhQw.js";import"./InternalBackdrop-iKHycqz0.js";import"./composite-OrxFWVZn.js";import"./index-sjIEPV-q.js";import"./index-DRL_czfg.js";import"./index-BWfL3ztK.js";import"./useEventCallback-DPWvOD4-.js";import"./SkeletonBar-xgxIJ15e.js";import"./LoadingCell-BbnxGOil.js";import"./ColumnConfigDialog-CyjCyORM.js";import"./DraggableList-DaPP3yBB.js";import"./search-BhYP5RmD.js";import"./Input-CKwugJU4.js";import"./useControlled-SzLU43Qu.js";import"./Button-BsWA9Md6.js";import"./small-cross-DM3EA47X.js";import"./ActionButton-BiTy67hR.js";import"./Checkbox-BgvVvf8V.js";import"./useValueChanged-CcIn2mPz.js";import"./CollapsiblePanel-BUzPJH96.js";import"./MultiColumnSortDialog-D3Ds34Ko.js";import"./MenuTrigger-BZkIRRu0.js";import"./CompositeItem-G9QZyuPm.js";import"./ToolbarRootContext-BeKKodE4.js";import"./getDisabledMountTransitionStyles-BPk3yLY1.js";import"./getPseudoElementBounds-kLv_VCs0.js";import"./chevron-down-ADlv-Mhp.js";import"./index-CkH4TDjm.js";import"./error-e6srGYm1.js";import"./BaseCbacBanner-CL2sF9mr.js";import"./makeExternalStore-Bo5qeas1.js";import"./Tooltip-CHiDBImr.js";import"./PopoverPopup-DpPqupmM.js";import"./debounce-BpLWDfM1.js";import"./tick-Bh3J60SL.js";import"./DropdownField-Bisnh0x5.js";import"./isEqual-CmNvlTDA.js";import"./withOsdkMetrics-LuX7zwcW.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
