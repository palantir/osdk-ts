import{j as r}from"./iframe-Cib7M-Xy.js";import{O as b}from"./object-table-XSqCSPBV.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DneDaYAx.js";import{u as g}from"./useOsdkClient-C2kX0mp7.js";import"./preload-helper-CRDWPiYa.js";import"./Table-CO4Oj3mc.js";import"./index-CBv-FCGp.js";import"./Dialog-Ci-SyB0e.js";import"./cross-C2V_DgUT.js";import"./svgIconContainer-D1xpzhCr.js";import"./useBaseUiId-M5BZcaZy.js";import"./InternalBackdrop-CkBFRqEF.js";import"./composite-kqFH7m6U.js";import"./index-BuKksupP.js";import"./index-BCtR_sML.js";import"./index-Cu_DMDN1.js";import"./useEventCallback-CEygIpmo.js";import"./SkeletonBar-CU1Q8u7m.js";import"./LoadingCell-Cz-TT2Ke.js";import"./ColumnConfigDialog-B_Y_oS9Z.js";import"./DraggableList-BAP1XhTX.js";import"./search-DCZZXW6e.js";import"./Input-DoKdALsn.js";import"./useControlled-C0WjWXAL.js";import"./Button-D17R42M5.js";import"./small-cross-Bn1T9AEL.js";import"./ActionButton-DUlbhD91.js";import"./Checkbox-YNwcH3UC.js";import"./useValueChanged-Dexwdau7.js";import"./CollapsiblePanel-Ye8-BhZS.js";import"./MultiColumnSortDialog-BJv_YNOo.js";import"./MenuTrigger-DF5spK6e.js";import"./CompositeItem-BwGgrVOO.js";import"./ToolbarRootContext-BNUf7EA-.js";import"./getDisabledMountTransitionStyles-CZ8a_1s5.js";import"./getPseudoElementBounds-DdA2WBP8.js";import"./chevron-down-CDgi7Jby.js";import"./index-Dg5LeqIW.js";import"./error-CzUPZAgK.js";import"./BaseCbacBanner-BLmPuVm9.js";import"./makeExternalStore-C8s6weLu.js";import"./Tooltip-svlpOFoz.js";import"./PopoverPopup-BzGKBTcL.js";import"./debounce-Cc5fWdjK.js";import"./tick-fYEum7o-.js";import"./DropdownField-Cl95NLNY.js";import"./isEqual-CZvHmsOE.js";import"./withOsdkMetrics-B-KTU3vQ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
