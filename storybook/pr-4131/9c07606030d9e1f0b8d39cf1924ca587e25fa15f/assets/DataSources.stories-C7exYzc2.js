import{j as r}from"./iframe-DxxbQvQS.js";import{O as b}from"./object-table-CJ9J0DMr.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ChIjw9fT.js";import{u as g}from"./useOsdkClient-_f8xX1vc.js";import"./preload-helper-BmW5a970.js";import"./Table-CnaCRFYx.js";import"./index-Cu-WR_G5.js";import"./Dialog-BsMxDY0C.js";import"./cross-D--1C_uR.js";import"./svgIconContainer-PZP2rkyO.js";import"./useBaseUiId-Brl8T8Kf.js";import"./InternalBackdrop-nw-0n2j_.js";import"./composite-C5YJt7dM.js";import"./index-mzAwx4l9.js";import"./index-CkYBlAD9.js";import"./index-vkezJOJG.js";import"./useEventCallback-CAdWC4ED.js";import"./SkeletonBar-BeU71Ayo.js";import"./LoadingCell-Bu2vJSgu.js";import"./ColumnConfigDialog-CSsvZjAE.js";import"./DraggableList-OtqLtn_q.js";import"./search-rJtEr32Y.js";import"./Input-CVhM1jds.js";import"./useControlled-CL6vvYza.js";import"./Button-BnqDmIMF.js";import"./small-cross-Dpw_vhgf.js";import"./ActionButton-Db9MAiVt.js";import"./Checkbox-BtXMD4Jt.js";import"./useValueChanged-DeuKFFlX.js";import"./CollapsiblePanel-CwmPk1HL.js";import"./MultiColumnSortDialog-BIZUu89Z.js";import"./MenuTrigger-BB9DnI0R.js";import"./CompositeItem-beHVPrKw.js";import"./ToolbarRootContext-9fMJDea1.js";import"./getDisabledMountTransitionStyles-CdcAqYKt.js";import"./getPseudoElementBounds-D5nG0WVt.js";import"./chevron-down-CCZd9VTh.js";import"./index-CI5AqopY.js";import"./error-ClKWsTpb.js";import"./BaseCbacBanner-DdIcsJYY.js";import"./makeExternalStore-SAYXMC44.js";import"./Tooltip-CQLTRANm.js";import"./PopoverPopup-B4xa-esw.js";import"./debounce-DCqgfrAu.js";import"./tick-DRGERfep.js";import"./DropdownField-DzabicEs.js";import"./isEqual-DjhR2rdN.js";import"./withOsdkMetrics-DJHuuWR4.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
