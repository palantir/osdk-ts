import{j as r}from"./iframe-DO7dF-ar.js";import{O as b}from"./object-table-CBri6z-y.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B8QmaAoC.js";import{u as g}from"./useOsdkClient-CyRh6KvI.js";import"./preload-helper-BW5WH-mc.js";import"./Table-CPm1d6ia.js";import"./index-kenPv2GE.js";import"./Dialog-BNgsKcmK.js";import"./cross-C1UL2-2h.js";import"./svgIconContainer-DjMCTipa.js";import"./useBaseUiId-Bt-nl6bS.js";import"./InternalBackdrop-BOw_21MB.js";import"./composite-DP63OVsA.js";import"./index-ChtT1bsq.js";import"./index-DTtqbecA.js";import"./index-V_wqwxtw.js";import"./useEventCallback-C0Kp26Ia.js";import"./SkeletonBar-BKAHRTQk.js";import"./LoadingCell-CkHXNABS.js";import"./ColumnConfigDialog-BgMx8cqd.js";import"./DraggableList-C3ZFIjxr.js";import"./search-BLUkB-J4.js";import"./Input-CK_329wL.js";import"./useControlled-6UP7zcXc.js";import"./Button-CizE_ePi.js";import"./small-cross-J_4yazEf.js";import"./ActionButton-BAj8Q7M-.js";import"./Checkbox-DqkoI7lc.js";import"./useValueChanged-BuoGHQuA.js";import"./CollapsiblePanel-B9T_imQv.js";import"./MultiColumnSortDialog-CyNSB3ae.js";import"./MenuTrigger-CiYAlrY8.js";import"./CompositeItem-BwVsaSQK.js";import"./ToolbarRootContext-CZAMPnmu.js";import"./getDisabledMountTransitionStyles-Br24ubGK.js";import"./getPseudoElementBounds-CJowpxqF.js";import"./chevron-down-C1ai5XRC.js";import"./index-CoQO0q6S.js";import"./error-D0RjPgCd.js";import"./BaseCbacBanner-BcR5Y1EU.js";import"./makeExternalStore-Am-Ru7Ep.js";import"./Tooltip-D0Q-VN51.js";import"./PopoverPopup-joRMvQbq.js";import"./debounce-DmQhFwOT.js";import"./tick-B49pnBc3.js";import"./DropdownField-DysS70c1.js";import"./isEqual-kyliCkp6.js";import"./withOsdkMetrics-Btt-8vLh.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
