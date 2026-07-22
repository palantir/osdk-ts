import{j as r}from"./iframe-BpkgzCfc.js";import{O as b}from"./object-table-C1Z-ccOu.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DPJ312gm.js";import{u as g}from"./useOsdkClient-vEvQVfhh.js";import"./preload-helper-Cqm3GHv6.js";import"./Table-uaVa5FNn.js";import"./index-BaNgrIWR.js";import"./Dialog-C1Q-SUqo.js";import"./cross-DcAJ_UsT.js";import"./svgIconContainer-DCGfkszH.js";import"./useBaseUiId-Bel2T9sH.js";import"./InternalBackdrop-5O-6_QKc.js";import"./composite-BYRdjqNf.js";import"./index-DUW9BvxD.js";import"./index-DxpCt63I.js";import"./index-CHMS5mxm.js";import"./useEventCallback-LAyONCjg.js";import"./SkeletonBar-ChZNWN60.js";import"./LoadingCell-DKZgM3UF.js";import"./ColumnConfigDialog-BKpmwDX3.js";import"./DraggableList-D94KU6vz.js";import"./search-Ct51ibPI.js";import"./Input-CsKIZdEL.js";import"./useControlled-DcPMMtt3.js";import"./isEqual-DEYDtDi9.js";import"./isObject-ApKxbA4p.js";import"./Button-CySInDHm.js";import"./ActionButton-DIuZIz2Z.js";import"./Checkbox-CxaKCMbC.js";import"./useValueChanged-CBLiCNHQ.js";import"./CollapsiblePanel-DxiMb1vS.js";import"./MultiColumnSortDialog-N9biHPZ3.js";import"./MenuTrigger-CFAMwJll.js";import"./CompositeItem-BB4wd3KB.js";import"./ToolbarRootContext-D12ftYYQ.js";import"./getDisabledMountTransitionStyles-CPDNpMoC.js";import"./getPseudoElementBounds-UNyxasqn.js";import"./chevron-down-D90rIeDb.js";import"./index-9JJ3q_YT.js";import"./error-BPGwzs_y.js";import"./BaseCbacBanner-CvFgBp_O.js";import"./makeExternalStore-BY7Bi3ZC.js";import"./Tooltip-CU8rKKB6.js";import"./PopoverPopup-CbQUEnW-.js";import"./toNumber-DKwz7U4E.js";import"./tick-C9esIUOv.js";import"./DropdownField-UV9CnX2Y.js";import"./withOsdkMetrics-jMVnEM0t.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
