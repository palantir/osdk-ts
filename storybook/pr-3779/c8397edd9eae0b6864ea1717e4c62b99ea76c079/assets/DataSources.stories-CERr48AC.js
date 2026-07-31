import{j as r}from"./iframe-7HWn_vJ6.js";import{O as b}from"./object-table-DHE2g8y9.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DHffoIfB.js";import{u as g}from"./useOsdkClient-DeDD2fFX.js";import"./preload-helper-CpsRumFb.js";import"./Table-4OL8Tp08.js";import"./index-5DesS_Rq.js";import"./Dialog-CZ0W4pD7.js";import"./cross-C8-Xg2zC.js";import"./svgIconContainer-BUuMEAEF.js";import"./useBaseUiId-D5qCaBNi.js";import"./InternalBackdrop-B2v5oIKt.js";import"./composite-ChQikCZ2.js";import"./index-DLnS53Ac.js";import"./index-BAmY44lm.js";import"./index-DF7uRqTx.js";import"./useEventCallback-ryzmtcNX.js";import"./SkeletonBar-qrzgh7UB.js";import"./LoadingCell-DGMJaHaJ.js";import"./ColumnConfigDialog-w9j1DtuC.js";import"./DraggableList-yHnqlwe6.js";import"./search-Dz3e9e6H.js";import"./Input-BXvi8BCl.js";import"./useControlled-xbXmF4gL.js";import"./isEqual-CPugSMux.js";import"./isObject-CoiIKRmS.js";import"./Button-C0yxmCxc.js";import"./ActionButton-Pcn-fiWH.js";import"./Checkbox-DcqH3aQ5.js";import"./useValueChanged-D7Wxsqao.js";import"./CollapsiblePanel-yoJjUAZc.js";import"./MultiColumnSortDialog-B13w_HeV.js";import"./MenuTrigger-BnROxh8m.js";import"./CompositeItem-D-vYIAXB.js";import"./ToolbarRootContext-DEobcuEs.js";import"./getDisabledMountTransitionStyles-DPsFnI3a.js";import"./getPseudoElementBounds-CcjlVVRK.js";import"./chevron-down-CjvcWCP0.js";import"./index-DUwSofpg.js";import"./error-OJDEKHve.js";import"./BaseCbacBanner-Cywdd0P9.js";import"./makeExternalStore-D7BGvXpe.js";import"./Tooltip-U_pT3p1z.js";import"./PopoverPopup-DnsrRHq6.js";import"./toNumber-Bri2bLBz.js";import"./tick-Da2Yv-xR.js";import"./DropdownField-Cz9_2nsx.js";import"./withOsdkMetrics-CygL5eUE.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
