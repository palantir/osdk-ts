import{j as r}from"./iframe-Cb9yL1OG.js";import{O as b}from"./object-table-B1tG8_yp.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CCgGU0DU.js";import{u as g}from"./useOsdkClient-DJKtbM-N.js";import"./preload-helper-DQv3Mqd6.js";import"./Table-CrGDb7KB.js";import"./index-DLq4a5hn.js";import"./Dialog-BOFKEKl_.js";import"./cross-CB3_uWKZ.js";import"./svgIconContainer-DBEZVoeW.js";import"./useBaseUiId-Bzh_EjHo.js";import"./InternalBackdrop-BXMMwu9r.js";import"./composite-lnU5aQzY.js";import"./index-DN_IeP_N.js";import"./index-PfYakjmh.js";import"./index-Cdo59bJY.js";import"./useEventCallback-DuY2B3MU.js";import"./SkeletonBar-CN5sHKoZ.js";import"./LoadingCell-Bqh_nkGt.js";import"./ColumnConfigDialog-8J0qlcfe.js";import"./DraggableList-ByjRnTPm.js";import"./search-DrEW_jBF.js";import"./Input-DLTVeyAC.js";import"./useControlled-z-zi7rAe.js";import"./isEqual-ynxt_WeK.js";import"./isObject-OxzwckJI.js";import"./Button-6NKxmn-i.js";import"./ActionButton-Co4ppcxL.js";import"./Checkbox-BGTCwEV_.js";import"./useValueChanged-DnwN1Bul.js";import"./CollapsiblePanel-BHqgPNbw.js";import"./MultiColumnSortDialog-pqMLADXP.js";import"./MenuTrigger-BU6kinBM.js";import"./CompositeItem-0ISc6yQY.js";import"./ToolbarRootContext-Cabc9txw.js";import"./getDisabledMountTransitionStyles-CFzNSezz.js";import"./getPseudoElementBounds-BXSlo-_7.js";import"./chevron-down-B_N-V52K.js";import"./index-Db9g3KRS.js";import"./error-Cp0EJWJK.js";import"./BaseCbacBanner-CU_Nr3Sm.js";import"./makeExternalStore-DJapPci5.js";import"./Tooltip-CTUZ24SL.js";import"./PopoverPopup-BA69oV2F.js";import"./toNumber-CrjQxl0b.js";import"./tick-ABmUE7vY.js";import"./DropdownField-CrHS4fOZ.js";import"./withOsdkMetrics-MSnSO192.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
